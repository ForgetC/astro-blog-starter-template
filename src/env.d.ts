type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

// Worker secret (not in wrangler.json): Turnstile secret of the "silush" widget.
interface Env {
  TURNSTILE_SECRET?: string;
}
