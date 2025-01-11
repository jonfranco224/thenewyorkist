// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.thenewyorkist.com",
  integrations: [tailwind(), svelte(), sitemap()],
  image: {
    service: passthroughImageService(),
  },
});