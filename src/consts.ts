// Site-wide settings. Page content lives in ./data/cv.ts.

export const SITE_URL = 'https://cv.silush.com';

// Turnstile widget "silush" (ForgetC/infra terraform/cloudflare/turnstile.tf), public site key.
// The secret is a Worker secret (TURNSTILE_SECRET), set with `wrangler secret put`.
export const TURNSTILE_SITEKEY = '0x4AAAAAAFZVM3z6X-zVxXDi';
