/* EL FARO · la casa de contenido público de EL ARKA (sello de Ed, 21·nov·2026).
   Ordenado por la pregunta que trae el visitante. Rector:
   EL ASTILLERO/05_ECOSISTEMAS/ARKA_El-Arka/_Estrategia/ARKA_MKT_PLN_Arquitectura-de-Contenido-Web_*.md
   Una pieza nueva: texto → src/content/faro/*.md · guía → página en src/pages/faro/guias/ + fila en GUIAS. */

export const FARO = {
  ruta: "/faro/",
  titulo: "EL FARO",
  bajada: "Respuestas, guías y pruebas reales para quien lidera la era de la IA.",
};

/* Las secciones: cada una responde a una pregunta distinta. */
export const SECCIONES = [
  { tipo: "respuestas",  nombre: "Respuestas",  pregunta: "¿Qué es…? ¿Cómo…?",        schema: "FAQPage" },
  { tipo: "guias",       nombre: "Guías",       pregunta: "¿Cuál me conviene?",         schema: "ItemList" },
  { tipo: "laboratorio", nombre: "Laboratorio", pregunta: "¿Funciona de verdad?",       schema: "Article" },
  { tipo: "ensayos",     nombre: "Ensayos",     pregunta: "¿Qué piensa EL ARKA?",       schema: "Article" },
  { tipo: "glosario",    nombre: "Glosario",    pregunta: "¿Qué significa…?",           schema: "DefinedTerm" },
];

/* Guías interactivas: herramientas que se actualizan con la misma URL. */
export const GUIAS = [
  {
    slug: "diagnostico-ia",
    titulo: "¿Qué tanto puede la IA cambiar tu negocio?",
    descripcion: "Diagnóstico de 10 preguntas: tu exposición, tu preparación y tu primer paso. Tus respuestas no salen de tu teléfono.",
    respuesta: "Depende de dos cosas: cuánto de tu negocio ya puede hacerlo la IA (exposición) y cuánto estás listo para dirigirla (preparación). Este diagnóstico mide las dos en 10 preguntas y te da un primer paso.",
    tema: "liderar-la-era-de-la-ia",
    actualizada: "2026-11-23",
    imagen: "/assets/lentes/hero-meta-display-uso.jpg",
    publicada: false,
  },
  {
    slug: "lentes-inteligentes",
    titulo: "Lentes inteligentes: cuál comprar para crear y para viajar",
    descripcion: "Tres preguntas, dos recomendaciones. Precios en México y reputación real.",
    respuesta: "Para crear contenido, el Meta Ray-Ban Display es el único con teleprompter (USD 799, aún no en México). Para trabajar fuera de la oficina, el XREAL One Pro funciona como monitor de Mac (desde $8,384 en México).",
    tema: "herramientas-del-lider",
    actualizada: "2026-11-21",
    imagen: "/assets/lentes/hero-meta-display-uso.jpg",
    datos: "/datos/lentes.json",
    publicada: true,
  },
];

/* Lo no publicado sólo se ve en un build de revisión (PUBLIC_VER_BORRADORES=1). */
export const verBorradores = () => import.meta.env.PUBLIC_VER_BORRADORES === "1";
