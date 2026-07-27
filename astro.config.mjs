// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// SITE and BASE_PATH are set by actions/configure-pages in the GitHub Actions workflow.
// When running locally, these will be undefined and Astro will use default values.
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_PATH,
  vite: {
    plugins: [tailwindcss()]
  }
});
