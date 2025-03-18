// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

import {generateSearchIndex} from "./src/utils/search.ts";
import {generateSitemap} from "./src/utils/sitemap.ts";


export default defineConfig({
  integrations: [react(), sitemap(), generateSearchIndex(), generateSitemap()],

  redirects: {
      '/aboutcompany': '/aboutcompany/about/',
      '/our_services': '/our_services/our_services1/',
      '/articles': '/aboutcompany/articles/',
  },

  site: "https://stellazhi.by",
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
