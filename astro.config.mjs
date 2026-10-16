/// <reference types="node" />
// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// SITE and BASE_PATH are set by actions/configure-pages in the GitHub Actions workflow.
// Local builds use the production domain so SEO output never points to localhost.
export default defineConfig({
  site: process.env.SITE || 'https://www.mabux.me',
  base: process.env.BASE_PATH,

  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({
    filter: (page) => !/\/404\/?$/.test(new URL(page).pathname)
  })]
});