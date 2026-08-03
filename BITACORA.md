# Bitácora — EL ARKA Web

> Registro de trabajo y pendientes del sitio elarka.ong.
> Auditoría UX/CX/copy completa (14-jul-2026): https://claude.ai/code/artifact/1d33c306-a64c-4186-9d52-973d7d624e69

---

## ⏳ Bloqueado — esperando a Ed

- **Rostros y credenciales de los Arquitectos** (P0.2): faltan fotos de Ed y Val + una línea de trayectoria terrenal de cada uno.
- **GoHighLevel** (P0.1 definitivo): pendiente de autorización de Ed → formulario /abordar o Juramento-formulario (ver P2.6). El CTA de WhatsApp actual es el puente; al migrar a GHL, cambiar la constante `WA_CTA` en el frontmatter de `index.astro`.

## 📋 Pendiente — P1 · UX

- **Menú móvil/tablet** (<920px hoy no hay navegación): overlay Tormenta con las 5 anclas + CTA, o índice de puntos.
- **Video ligero para iPhone**: recomprimir MP4 de 6.5 MB a ~1–1.5 MB (720p, CRF 26–28); evaluar `preload="metadata"`.
- **Intro saltable**: estrechar huecos entre beats (20–26 %, 46–52 %, 72–78 %), acortar escena a ~340vh, scrollcue → salto a `#diluvio`.
- **Focus visible + skip-link**: outline 2px Lluvia con offset en enlaces/botones/acordeón + "Saltar al contenido" (~6 líneas CSS).
- ~~Smooth-scroll de 16k px del CTA del nav~~ → resuelto 14-jul: el CTA ya no es ancla (va a WhatsApp).
- (micro) El efecto magnético de botones pisa el hover-lift (transform inline vs CSS).

## 📋 Pendiente — P2 · Copy

- **Línea de claridad en el beat 1**: "Comunidad y formación —sin fines de lucro— para que emprendedores de LATAM lideren la era de la IA, no solo la usen."
- **5 preguntas al FAQ** (+ schema FAQPage): precio/membresía · presencial Mérida u online · tiempo por semana · ¿necesito saber de IA? · ¿qué pasa después de solicitar?
- **"La única en La Tierra"**: quedó 1 vez menos (el kicker del hero ahora lleva la fecha); revisar las restantes y anclar una con el porqué ("la única que reprograma al ser antes de entregar el poder").
- **Credencial terrenal bajo cada voto de los Arquitectos** (va junto con las fotos, ver bloqueados).
- **Microcopy del CTA**: "Unirme a la cohorte fundadora" + "Respuesta personal en menos de 48 horas." (al activar WhatsApp/form).
- **El Juramento como formulario de entrada** (la pieza de conversión única): "Firmar el Juramento" = nombre + WhatsApp. Requiere GHL.

## 📋 Pendiente — P3 · Técnico y confianza

- **og:image con marca** (1200×630, símbolo + tagline) — hoy sale el póster sin logo al compartir por WhatsApp.
- **Aviso de privacidad** (/privacidad, LFPDPPP MX) — obligatorio antes de encender captura de leads.
- **404 personalizada**: "Esta orilla no existe. Vuelve al Arka."
- **Google Search Console**: verificar elarka.ong vía TXT en DNS (manual, dashboard).
- **Renovar token Wrangler** cuando expire: `npx wrangler login` (expiraba 14-jul-2026; el deploy de hoy aún pasó).

## 📋 Otros frentes (fuera del sitio)

- **Canal YouTube EL ARKA** — Paso 2: naming/concepto de marca PARAGUAS.

---

## 🎬 En preview — esperando visto bueno de Ed para promover a producción

**2026-07-15 · SALA DE PRENSA Y MARCA (`/prensa`) — con capa legible por IA**
- Página nueva `src/pages/prensa.astro` (Marfil + tinta Tormenta, como el Universo Maestro): ficha técnica, 4 boilerplates copiables (25/50/100 palabras + inglés), nombre y nomenclatura (EL ARKA con K), símbolo con anatomía y usos/prohibiciones, paleta semántica, tipografía, voz de marca (así sí / así no + léxico), ecosistema ARKA→ARKAI→ARKADIA, los 7 pilares, dirección de arte, arco narrativo de 10 movimientos, descargas y contacto.
- **Capa machine-readable (el diferenciador):**
  - `public/brand.json` — especificación canónica v1.0.0: `agent_instructions` con 7 reglas duras, identidad, naming, positioning, método, voz, léxico, visual (paleta/tipografía/símbolo/dirección de arte/motion), audiencia con 4 perfiles psicográficos, messaging y `do_not`. Validado como JSON y servido con `application/json`.
  - Bloque visible "Si eres una IA leyendo esto, empieza aquí" con **prompt de sistema copiable** para convertir cualquier LLM en agente de marca de EL ARKA.
  - `llms.txt` reescrito con reglas duras + punteros a `/brand.json` y `/prensa`; `sitemap.xml` actualizado; `<link rel="alternate" type="application/json">` + `<meta name="ai-brand-spec">` + JSON-LD (NGO + Brand + DataDownload).
  - Logos vectoriales nuevos y descargables: `arka-simbolo-marfil.svg` y `arka-simbolo-tormenta.svg`.
- Enlazada desde el footer del home ("Prensa y marca"). Canonical y sitemap alineados a `/prensa/` (Cloudflare hace 308 desde `/prensa`).
- **Avatares psicográficos v2 (por validar con Ed y Val)** — reescritos: la v1 era demografía genérica de coaching (edad + sector) y contradecía la tesis. Ahora la segmentación es propia de la marca: **relación con el diluvio × patrón de autosabotaje × cohorte (Constructor/Soberano)**, porque si la IA amplifica tu estado, el estado —no el sector— define el mensaje.
  - Perfiles: **El Timonel sin Carta** (Constructor) · **La Náufraga Competente** (Constructor) · **El que Rema en Círculos** (Constructor solo si toca fondo) · **El Guardián de la Estela** (Soberano salvo que un sucesor lo empuje) · **anti-avatar: El Turista del Diluvio** (no es para él; el filtro es parte del producto).
  - 18 campos por perfil, incluida la distinción clave **miedo/deseo declarado vs. real**, identidad que defiende, creencia central, patrón de autosabotaje → pilar que lo desbloquea, frases textuales (voice of customer), qué lo repele y el mensaje exacto que lo abre.
  - Insight de go-to-market en `brand.json`: para la cohorte fundadora del 23-jul priorizar Timonel y Náufraga (urgencia + recursos + algo que proteger); el Guardián suele ser Soberano.
  - `brand.json` v1.1.0 con `audience.segmentation_model` y `anti_persona`; el prompt de sistema ahora instruye escribir al miedo real, no al declarado.
- Verificado en Chrome real: render correcto de todas las secciones, endpoints 200 con content-type correcto, brand.json parseable.

**2026-07-15 · HERO cinematográfico "3D-scroll" tipo Apple** (skill valwebcinema)
- Reemplazado el hero: de `<video>` escarbado por `currentTime` (poco fiable, MP4 6.5 MB) → **canvas con secuencia de 100 fotogramas** (1152px, 4.1 MB, ~40 KB c/u) del video del arca, escarbados por scroll con **GSAP ScrollTrigger + Lenis** (scroll suave). La cámara "desciende" al casco conforme haces scroll; los 4 beats se revelan sincronizados.
- Póster de 46 KB (`arca-hero-poster.jpg`) pinta al instante; los frames hacen stream en 2.º plano (nunca bloquea el primer render). Motor en `src/lib/frameSequence.js` + `smoothScroll.js`; módulo bundleado en el frontmatter de `index.astro`; frames en `public/frames/hero/` + `manifest.json`. Bundle JS: 52 KB gzip.
- Fix de solape de beats: crossfade asimétrico (salida 0.16s / entrada 0.6s). reduced-motion → póster estático. Verificado en Chrome real desktop 1280 (scrub + beats limpios + hand-off a sección I) y móvil 375 (canvas llena, Lenis activo, sin overflow); consola limpia.
- **Preview**: https://cinema-preview.el-arca.pages.dev — producción (elarka.ong) intacta hasta el OK de Ed.
- Al promover: borrar `public/assets/arca-hero.mp4` y `.webm` (7 MB, ya no se usan); el og:image sigue usando `arca-poster.jpg`.

## ✅ Hecho

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
