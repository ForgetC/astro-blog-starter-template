// Prints the /cv/ and /en/cv/ pages of the built site (dist/) to the PDFs
// served from public/. Run with `npm run cv:pdf` after editing src/data/cv.ts,
// then commit the PDFs. Needs Google Chrome (or set CHROME=path/to/browser).
import { createServer } from 'node:http';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { existsSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { extname, join, resolve } from 'node:path';

const dist = resolve('dist');
const targets = [
	['/cv/', 'public/Namoussi_Yayaoui_CV_FR.pdf'],
	['/en/cv/', 'public/Namoussi_Yayaoui_Resume_EN.pdf'],
];
const types = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.svg': 'image/svg+xml',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
};

const chrome = [
	process.env.CHROME,
	'C:/Program Files/Google/Chrome/Application/chrome.exe',
	'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/usr/bin/google-chrome',
	'/usr/bin/chromium',
].find((p) => p && existsSync(p));
if (!chrome) throw new Error('Chrome not found: set CHROME=path/to/browser');

// Minimal static server over dist/, so the page loads its fonts and CSS.
const server = createServer(async (req, res) => {
	let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
	if (path.endsWith('/')) path += 'index.html';
	const file = join(dist, path);
	if (!file.startsWith(dist)) return res.writeHead(403).end();
	try {
		const body = await readFile(file);
		res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(body);
	} catch {
		res.writeHead(404).end();
	}
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const { port } = server.address();

// A throwaway profile, so headless Chrome never attaches to an open browser.
const profile = await mkdtemp(join(tmpdir(), 'cv-pdf-'));

try {
	for (const [route, out] of targets) {
		await promisify(execFile)(chrome, [
			'--headless=new',
			`--user-data-dir=${profile}`,
			'--no-first-run',
			'--disable-gpu',
			'--no-pdf-header-footer',
			'--virtual-time-budget=5000',
			`--print-to-pdf=${resolve(out)}`,
			`http://127.0.0.1:${port}${route}`,
		], { timeout: 60_000 });
		console.log(`✓ ${out}`);
	}
} finally {
	server.close();
	await rm(profile, { recursive: true, force: true, maxRetries: 3 });
}
