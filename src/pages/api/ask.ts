// POST /api/ask — "Ask my CV" (Workers AI). Guard rails, cheapest first:
// input check → Turnstile → per-IP rate limit → site-wide daily cap (KV) → model call.
// Over the free Workers AI quota the call fails (Workers Free: never billed).
import type { APIRoute } from 'astro';
import { DAILY_CAP, MAX_ANSWER_TOKENS, MAX_QUESTION, MODEL, systemPrompt } from '../../lib/ask';
import type { Lang } from '../../data/cv';

export const prerender = false;

type ErrorCode = 'tooShort' | 'captcha' | 'rate' | 'quota' | 'generic';

const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
	});
const fail = (error: ErrorCode, status: number) => json({ error }, status);

async function turnstileOk(secret: string, token: string, ip: string): Promise<boolean> {
	const form = new FormData();
	form.append('secret', secret);
	form.append('response', token);
	if (ip) form.append('remoteip', ip);
	const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
	const data = (await r.json()) as { success?: boolean };
	return data.success === true;
}

export const POST: APIRoute = async ({ request, locals }) => {
	const env = locals.runtime.env;
	let body: { q?: unknown; lang?: unknown; token?: unknown };
	try {
		body = await request.json();
	} catch {
		return fail('tooShort', 400);
	}
	const q = typeof body.q === 'string' ? body.q.trim().slice(0, MAX_QUESTION) : '';
	const lang: Lang = body.lang === 'en' ? 'en' : 'fr';
	const token = typeof body.token === 'string' ? body.token : '';
	if (q.length < 3) return fail('tooShort', 400);

	const ip = request.headers.get('cf-connecting-ip') ?? '';
	if (!env.TURNSTILE_SECRET || !token || !(await turnstileOk(env.TURNSTILE_SECRET, token, ip))) {
		return fail('captcha', 403);
	}
	const { success } = await env.ASK_LIMIT.limit({ key: `ask:${ip}` });
	if (!success) return fail('rate', 429);

	// Approximate on purpose (KV is eventually consistent): one write per question,
	// 300/day at most, far below the free 1 000 KV writes/day.
	const day = new Date().toISOString().slice(0, 10);
	const key = `count:${day}`;
	const count = Number((await env.ASK_KV.get(key)) ?? '0');
	if (count >= DAILY_CAP) return fail('quota', 429);
	await env.ASK_KV.put(key, String(count + 1), { expirationTtl: 3 * 86400 });

	try {
		const out = (await env.AI.run(MODEL, {
			messages: [
				{ role: 'system', content: systemPrompt(lang) },
				{ role: 'user', content: q },
			],
			max_tokens: MAX_ANSWER_TOKENS,
			temperature: 0.2,
		})) as { response?: string };
		const answer = out.response?.trim();
		return answer ? json({ answer }) : fail('generic', 502);
	} catch {
		// Quota exhausted or model unavailable: same message, nothing billed.
		return fail('generic', 502);
	}
};

export const ALL: APIRoute = () => new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
