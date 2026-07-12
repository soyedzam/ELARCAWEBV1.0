import { defineConfig } from 'astro/config';

// Cambia "site" por tu dominio real cuando lo tengas (ej. https://elarca.ong)
export default defineConfig({
  site: 'https://elarca.ong',
  build: { assets: '_astro' }
});
