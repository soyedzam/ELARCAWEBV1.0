# EL ARCA — Sitio (Astro)

Sitio fundacional de EL ARCA. Experiencia scroll-cine con el Arca en las primeras lluvias.

## Correr en tu compu (primera vez)
1. Instala Node 18+ (https://nodejs.org) si no lo tienes.
2. En esta carpeta, abre una terminal y corre:
   npm install
   npm run dev
3. Abre http://localhost:4321 en tu navegador.

## Publicar (deploy)
- `npm run build` genera la carpeta `dist/` (sitio estático listo).
- Sube `dist/` a cualquier hosting estático (Cloudflare Pages, Netlify, Vercel),
  o conecta este repo a Cloudflare Pages / Netlify y usa:
  - Build command: `npm run build`
  - Output directory: `dist`

## Cambiar el dominio
Reemplaza `elarca.org` por tu dominio en: astro.config.mjs y src/pages/index.astro
(meta canonical, og:url, og:image), public/robots.txt y public/sitemap.xml.
