import { defineConfig } from 'astro/config';

// Cambia "site" por tu dominio real cuando lo tengas (ej. https://elarca.org)
export default defineConfig({
  site: 'https://elarca.org',
  build: { assets: '_astro' }
});
