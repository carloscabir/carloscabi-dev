import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
})

// TODO: Add this rule for il8n languages support
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "es", "fr"]
  // }