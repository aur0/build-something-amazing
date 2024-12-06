// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
      configFile: './tailwind.config.mjs'
    })
  ],

  adapter: cloudflare({
    mode: 'directory'
  })
});