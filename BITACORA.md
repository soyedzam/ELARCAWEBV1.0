# Bitácora — EL ARKA Web

> Repo: `~/Dev/ARKA/arka-web` (mudado el 3-ago-2026 desde Documents por Ley A1).
> Auditoría UX/CX/copy: https://claude.ai/code/artifact/1d33c306-a64c-4186-9d52-973d7d624e69
> Plan de face-lift v2: https://claude.ai/code/artifact/f5299efd-3908-4c74-9105-58fe81bd44ff

---

## ⏳ Esperando a Ed

- **Promover v2 a producción.** El ecosistema de 7 páginas vive en preview
  (`v2-facelift.el-arca.pages.dev`). Producción sigue en v1. Requiere su «ve» explícito.
- **Fotos y credenciales de los Arquitectos** (P0.2 de la auditoría): sin ellas, /arquitectos
  no tiene rostro y la marca predica "personas al centro" sin mostrar ninguna.
- **Cifras reales para la bitácora de impacto**: formados, países, cohortes, negocios vivos.
  Sin datos suyos no se construye — no se inventan números.
- **GoHighLevel** para el formulario definitivo (hoy el CTA es el puente de WhatsApp).

## 📋 Pendiente técnico

- **Fuentes autohospedadas**: hoy vienen de Google Fonts. Estándar 2026 es woff2 subseteado
  con `size-adjust` y métricas de respaldo (causa #1 de salto de layout).
- **Analytics de eventos**: Cloudflare Web Analytics ya mide visitas; faltan eventos de
  scroll por sección y clic en CTA.
- **Git-connected en vez de direct-upload**: desarmaría la Ley A5 de raíz.
- **og:image con marca** (hoy usa el póster del arka sin logo ni tagline).
- **Aviso de privacidad** antes de capturar leads en forma (LFPDPPP MX).
- **Google Search Console**: verificar elarka.ong vía TXT en DNS.
- **Las 7 Estaciones de ARKAI** están [VALIDAR] en el canon — no se inventan ni se publican.

---

## ✅ Hecho

**2026-08-03 · Fase 1 — face-lift v2 (en preview)**
- **Ecosistema de 7 páginas** en vez de una sola: `/`, `/diluvio`, `/travesia`, `/ciudadania`,
  `/flota`, `/arquitectos`, `/prensa` (+ 404 real y La Proa).
- **Giro de paleta sellado por Ed**: terracota al frente como color estructural de lo humano
  y de la acción; lluvia reducida al agua (línea de flotación, horizonte y el pilar IV).
  Corte en marfil a mitad de cada página.
- **La Travesía como descenso** (pieza firma): los 7 pilares dejan de ser rejilla de features.
  Sangría monótona 0→110px, bloques oscureciendo, El Motor único en cian. Incorpora
  **"el sabotaje que vence"** de la Carta Fundacional v1.7 — dato canónico que el sitio
  no estaba usando, y que conecta el método con el autosabotaje de cada avatar.
- **Sistema de diseño** en `src/styles/tokens.css` + `src/config/arka.js` (config-driven):
  dos pesos de Sora, dos estilos de etiqueta, tres densidades de aire, escala con rango real.
- **Los dos nichos del canon** explícitos: emprendedores y empresarios.
- **Territorio**: 20 países de habla hispana (LATAM + España) con banderas.
- **El Juramento como documento** en marfil, no como widget centrado.
- **La fundación sale del relato**: vive solo en `/arquitectos`.
- **Menú móvil** (antes no había navegación bajo 920px) · reveals con red de seguridad ·
  sin GSAP ni Lenis (rAF puro) · `_headers` con CSP, HSTS y caché inmutable.
- Verificado: descenso monótono, contrastes 5.97/10.12/14.69, sin overflow en 375 y 1280,
  404 devuelve 404, 3 cabeceras de seguridad activas.

**2026-08-03 · Fase 0 — asegurar el casco**
- 🔴 **Rescate de La Proa (Ley A5)**: `/conectate`, `/taller`, `/taller-b`, `/menu` y el QR
  vivían solo en el deployment y NO en el repo. Al ser direct-upload, el próximo deploy
  los habría borrado. Ahora están versionados y salen en `dist`.
- 🔴 **Mudanza a `~/Dev/ARKA/arka-web` (Ley A1)**: el proyecto vivía en carpeta sincronizada
  con 4 duplicados « 2 », uno dentro de `.git`. `git fsck` limpio tras la mudanza.
- **404 real**: cualquier ruta inexistente devolvía el home con estado 200, permitiendo
  indexar infinitas URLs duplicadas.
- Commit + push de todo el trabajo que estaba sin versionar.

**2026-07-14**
- **CTA → WhatsApp (P0.1 puente): el sitio ya convierte.** Los 5 "Solicitar abordar" (nav, beat 4, hero noscript, cierre y footer) apuntan a `wa.me/528181388108` con mensaje precargado de autopersuasión que envía el visitante: *"Vi venir el diluvio y decido no quedarme a la intemperie. Quiero ser Constructor de EL ARKA. ¿Cuál es el primer paso para subir?"* (declara identidad, ecoa el Juramento, pide el primer paso). Centralizado en la constante `WA_CTA` del frontmatter de `index.astro`. Verificado en producción (5/5 enlaces, redirect 302 a api.whatsapp.com correcto). De paso quedó resuelto P1.5 (el CTA ya no dispara el smooth-scroll de 16k px).
- Cloudflare Web Analytics (P0.4): **ya estaba activo** para elarka.ong con "Automatic setup" (creado 13-jul, beacon inyectado en el edge — verificado en el HTML servido a navegadores). Primeras 24 h: **142 visitas**. ⚠️ NO agregar el snippet manual al código: duplicaría el conteo. Nota: solo mide elarka.ong (el dominio canónico), no el subdominio pages.dev — correcto así. Panel: dash.cloudflare.com → Analytics & Logs → Web Analytics.
- Fecha de fundación visible en el flujo (P0.3): kicker del hero, beat final del scrollytelling y línea de escasez del cierre — "Fundación: 23 de julio · Mérida, Yucatán". En el kicker tomó el lugar de "La única en La Tierra" (sigue en título, sección V, FAQ, footer y sello).
- Fix nav ≤360px (P1.2): bajo 360px queda solo el símbolo (uso 16–31px del brand board) y el CTA respira.
- Auditoría completa UX/CX/copy con recorrido real (desktop 1280, móvil 375/320): 22 hallazgos P0–P3 → artifact (link arriba).
- Logo oficial integrado: símbolo SVG vectorial en nav (marfil), sello del footer (`<use href="#arkamark">`), favicon y apple-touch-icon (data-URI sobre Tormenta).
- Paleta oficial Universo Maestro V1.0 aplicada con roles semánticos: ARKADIA vira a verde; Arquitectos/Juramento/Constructores/"martillo y carpintero" en terracota; pilar Motor borde Lluvia, La Estela borde Arkadia; waterline con gradiente lluvia→arkadia; ARKA marfil / ARKAI lluvia / ARKADIA verde; fix colisión nav↔CTA a 375px.
- elarka.ong al aire con SSL (Ed agregó el CNAME) y elarca.ong → 301.

**2026-06-26 → 07-13** (sesiones previas)
- Sitio Astro 4 estático con scrollytelling de video, secciones I–X, FAQ, schema NGO+FAQPage, llms.txt, robots, sitemap, _redirects.
- Deploy a Cloudflare Pages (proyecto el-arca) + dominios.
