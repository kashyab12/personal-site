// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kashyab.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
