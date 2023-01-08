import astroI18next from "astro-i18next";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://tryellie.com",
  integrations: [svelte(), astroI18next(), sitemap()],
});
