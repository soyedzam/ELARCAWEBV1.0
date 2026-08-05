# CLAUDE.md — ARKA · EL ARKA · CASCO WEB
> Este repo es un **casco**, no el canon. El canon vive en EL ASTILLERO.
> *La fragua produce; el taller archiva.* No se combate. Se construye.

## 1 · Dónde estás
| | |
|---|---|
| **Realidad** | `ARKA` — EL ARKA (ONG · Nodo Cero · nave insignia del portafolio) |
| **Capa** | 🌐 Ecosistemas → `05_ECOSISTEMAS/ARKA_El-Arka/` en el hub |
| **Repo** | `soyedzam/ELARCAWEBV1.0` · rama `main` |
| **Stack** | Astro → Cloudflare Pages (`elarka.ong`) |
| **Scripts** | `dev · build · preview` |
| **Páginas del repo** | index · arquitectos · bitacora · ciudadania · diluvio · flota · prensa · travesia · 404 |

**Hub (el cerebro):** `~/Documents/2026/EL ASTILLERO`
Si no lo tienes montado, dilo y detente: sin canon no se escribe.

## 2 ·🔴 ANTES DE CUALQUIER DEPLOY — LEE ESTO
**La Proa NO está en este repo.** Verificado 5·ago·2026: `/conectate`, `/taller`, `/taller-b`,
`/menu` y `/qr` están vivas en `elarka.ong` pero llegaron por **direct-upload** a Cloudflare,
no por build de Astro. No existen en `src/pages/`.

**Un deploy desde `dist/` las borra.** Método espejo obligatorio: antes de publicar, descarga
el estado actual del proyecto de Pages, mete el `dist/` nuevo encima, y sube el conjunto.
Si no puedes garantizar el espejo, **no despliegues** — avisa a Ed.

## 3 · El canon manda — se LEE antes de escribir, nunca de memoria
| Tarea | Doc en el hub |
|---|---|
| Nombrar archivos | `00_EMPIEZA-AQUI/ECO_OPS_DOC_Nomenclatura-Canon_260804_v1.4.md` |
| Dónde cae cada archivo (**el YAML manda**) | `_SISTEMA/SIS_GEN_DAT_Reglas-de-Archivado_260804_v1.5.yaml` |
| Voz y vocabulario | `00_EMPIEZA-AQUI/ECO_OPS_DOC_Lexico-Canon_260627_v1.0.md` |
| Códigos `[COD]` de las Realidades | `00_EMPIEZA-AQUI/SIS_GEN_IDX_Registro-de-Entidades_260730_v2.4.md` |
| **Crear una Realidad nueva** (el árbol y los 8 pasos) | `_SISTEMA/SIS_GEN_DOC_Realidad-en-Caja_260703_v1.0.md` |
| Capacitar a un chat/agente externo | `_SISTEMA/SIS_GEN_PRM_Pase-de-Abordaje-Chats_260801_v1.3.md` |

## 4 · El motor
Toda tarea web arranca en **`/webforge`** (M7 · powered by Xplorers Startups): stack canon,
ductería compartida, Leyes Pagadas y ritual de verificación. No improvises un casco nuevo.

## 5 · Qué se queda aquí y qué se va al hub
- **Aquí (casco):** código, componentes, estilos, contenido del sitio, config de deploy.
- **Al hub (canon):** estrategia, copy aprobado, informes, bitácoras, briefs — con **pasaporte**
  y nombre canon `[COD]_[AREA]_[TIPO]_[Slug]_[YYMMDD]_v[X.Y].ext`.
  `AREA`: MKT · GEN · OPS · EST — `TIPO`: **lista cerrada** (DOC · MAN · PLN · PLANO · RUMBO ·
  PRM · SOP · FICHA · DAT · IDX · INF · EXP · CONV · BITACORA · PULSO · MIS · OPE · MODULO).
  **No acuñes TIPOs.** Si no cabe, usa el más cercano y escribe
  `TIPO PROPUESTO: [XXX] — requiere alta del Taller`.
- El estado (`borrador`/`vigente`) **nunca** va en el nombre: va en el pasaporte.

## 6 · Commits
- **Conventional commits, en español:** `feat(scope): …` · `fix:` · `perf:` · `chore:` · `refactor:`
- Solo si el commit es parte de una corrida del Taller: `YYMMDD_ADR-E_Ciudad · descripción`
- Se commitea y se hace push **cuando Ed lo pide**. Si estás en `main`, avisa antes.
- ⚠️ `git fetch` antes de tocar; nunca `git add -A` a ciegas.

## 7 · Assets pesados → Drive, jamás al repo
`~/Library/CloudStorage/GoogleDrive-soyedzam@gmail.com/Mi unidad/ACTIVOS/05_ECOSISTEMAS/ARKA_El-Arka/`
⚠️ Drive e iCloud crean duplicados `" 2"` y restauran carpetas borradas: verifica antes y después.
⚠️ Los repos viven en `~/Dev/`, **nunca** en `~/Documents` (iCloud corrompe `.git`).

## 8 · Voz — innegociable, y aquí más que en ningún casco
- ❌ Nunca lenguaje de guerra (enemigo, batalla, conquistar) **ni religioso en lo público**.
- El norte es acercar a todos a Dios, pero **por el camino suave, nunca predicando**.
  Se cuida siempre cómo se habla para no ahuyentar a nadie.
- La raíz espiritual de los Arquitectos es privada (T0): no se propaga ni se cita aquí.
- ✅ Se construye, se cruza, se acompaña. Humano: libertad, familia, paz, comunidad.
- Nunca inventes datos, cifras ni testimonios. Lo no confirmado → `[VALIDAR]`.
- Miembros del equipo **solo por código** (C01, S07) — jamás nombre civil.
- 🔴 Beca Vigía: **cero cifras**. Si preguntan, "no tienes que pagar por formarte" y se escala a Ed.
- 🔴 Padrón y datos de personas → jamás a GitHub.

## 9 · Marca
El brandbook real son los **tokens CSS del sitio vivo** (cian `#28B8D8` + terracota, tipografía Sora).
No inventes paleta: se lee del sitio.

## 10 · Verificar antes de cantar victoria
`npm run build && npm run preview` · y comprobar **con navegador**, nunca solo con `curl`.
Tras publicar, verifica que La Proa (`/conectate`, `/menu`, `/qr`) **sigue viva**.

---
*ARKA · casco web · Pase de Casco v1.0 · 5·ago·2026* 🕊️
