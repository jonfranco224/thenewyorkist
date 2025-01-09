// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), svelte()],
  image: {
    service: passthroughImageService(),
  },
});
