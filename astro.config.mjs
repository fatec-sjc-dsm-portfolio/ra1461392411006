// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fatec-sjc-dsm-portfolio.github.io',
  base: '/ra1461392411006',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
