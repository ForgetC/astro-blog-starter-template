// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://cv.silush.com",
	// The /cv/ pages only exist to print the PDFs: keep them out of the sitemap.
	integrations: [mdx(), sitemap({ filter: (page) => !/\/cv\/$/.test(page) })],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
