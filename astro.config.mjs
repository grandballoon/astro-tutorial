// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://astrotutoriallsc.netlify.app",
  integrations: [preact({ devtools: true }), svelte()],
  adapter: netlify(),
});