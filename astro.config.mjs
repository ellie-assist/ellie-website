import astroI18next from "astro-i18next";
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://ellieai.com",
  integrations: [svelte(), astroI18next()],
});
