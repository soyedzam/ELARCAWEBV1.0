/* ══════════════════════════════════════════════════════════════════
   EL ARKA · Configuración canónica
   Nada de la instancia vive en código: textos, rutas, contactos y datos
   se declaran aquí. Fuente rectora:
   ADR_MKT_MAN_El-Arca-Carta-Fundacional_260627_v1.7
   ══════════════════════════════════════════════════════════════════ */

export const SITIO = {
  origen: "https://elarka.ong",
  nombre: "EL ARKA",
  descriptor: "Formación humana para liderar la era de la IA.",
  /* Frase-bandera principal (Carta · sección D) */
  bandera: "El mundo entrena para usar la IA. EL ARKA te forma para liderarla.",
  tagline: "Lidera esta era. Construye tu libertad.",
};

/* CTA de conversión. El mensaje lo envía el visitante: declara identidad,
   ecoa el Juramento y pide el primer paso. */
export const WA_CTA =
  "https://wa.me/528181388108?text=" +
  encodeURIComponent(
    "Vi venir el diluvio y decido no quedarme a la intemperie. Quiero ser Constructor de EL ARKA. ¿Cuál es el primer paso para subir?"
  );

/* Arquitectura del ecosistema: cinco páginas, no un scroll infinito. */
export const NAV = [
  { numero: "I",   corto: "El diluvio",    titulo: "El diluvio",      ruta: "/diluvio/" },
  { numero: "II",  corto: "La Travesía",   titulo: "La Travesía",     ruta: "/travesia/" },
  { numero: "III", corto: "La ciudadanía", titulo: "La ciudadanía",   ruta: "/ciudadania/" },
  { numero: "IV",  corto: "La Flota",      titulo: "La Flota",        ruta: "/flota/" },
  { numero: "V",   corto: "Arquitectos",   titulo: "Los Arquitectos", ruta: "/arquitectos/" },
  { numero: "VI",  corto: "Bitácora",      titulo: "Bitácora",        ruta: "/bitacora/" },
];

/* ── LOS DOS NICHOS (Carta · sección III) ──
   "los emprendedores y empresarios que, viendo venir el diluvio,
    decidieron no hundirse y se pusieron a construir" */
export const NICHOS = [
  {
    id: "emprendedor",
    titulo: "Emprendedores",
    linea: "Tienes una idea, un oficio o un negocio joven — y ves que las reglas cambiaron antes de que terminaras de aprenderlas.",
    dolor: "Que tu conocimiento se vuelva commodity antes de que llegue a sostenerte.",
    orilla: "Un activo propio que produce aunque tú descanses.",
  },
  {
    id: "empresario",
    titulo: "Empresarios",
    linea: "Ya levantaste algo que sostiene familias — y ahora ves que la IA puede volverlo prescindible en un año.",
    dolor: "Que lo que costó una década se evapore, y no saber por dónde empezar sin romper lo que funciona.",
    orilla: "Una empresa que cruza la era y sigue en pie cuando tú ya no estés.",
  },
];

/* ── LA TRAVESÍA · 7 PILARES (Carta · sección B) ──
   El orden ES la tesis: la IA (El Motor) llega en el pilar 4, nunca antes.
   Cada pilar vence un sabotaje nombrado: esa columna es del canon. */
export const PILARES = [
  { n: 1, bloque: "SER", nombre: "El Ancla", tema: "Soberanía",
    sabotaje: "Vivir sin propósito ni merecimiento",
    capa: "Espíritu — no se hereda: es la capa soberana que gobierna. Por eso va primero." },
  { n: 2, bloque: "SER", nombre: "El Timón", tema: "Reprogramación",
    sabotaje: "El techo invisible heredado antes de los siete años",
    capa: "Subconsciente y cultura — se desinstalan." },
  { n: 3, bloque: "SER", nombre: "El Casco", tema: "Vitalidad",
    sabotaje: "El sistema nervioso en alerta, sin energía",
    capa: "Biología — se sana." },
  { n: 4, bloque: "HACER", nombre: "El Motor", tema: "IA aplicada",
    sabotaje: "El poder en manos de un operador no consciente",
    capa: "Aquí, y no antes, entra la máquina.", esAgua: true },
  { n: 5, bloque: "HACER", nombre: "La Voz", tema: "Comunicación",
    sabotaje: "No saber hacer creer ni conectar",
    capa: "La visión que no se comunica no existe." },
  { n: 6, bloque: "HACER", nombre: "La Corriente", tema: "Ventas",
    sabotaje: "La visión que no se vuelve libertad",
    capa: "El músculo que vuelve sostenible todo lo demás." },
  { n: 7, bloque: "TRASCENDER", nombre: "La Estela", tema: "Legado",
    sabotaje: "Construir solo para uno mismo, sin dejar huella",
    capa: "Lo único que permanece." },
];

export const BLOQUES = [
  { id: "SER", titulo: "Ser", linea: "Primero se repara al operador.", rango: [1, 3] },
  { id: "HACER", titulo: "Hacer", linea: "Solo entonces se entrega el poder.", rango: [4, 6] },
  { id: "TRASCENDER", titulo: "Trascender", linea: "Y todo apunta a lo que permanece.", rango: [7, 7] },
];

/* ── LOS TRES NOMBRES (Carta · sección A) ── */
export const NOMBRES = [
  { nombre: "ARKA", raiz: "latín arca, de arcēre — guardar, proteger",
    significado: "El cofre que resguarda lo más valioso y lo cruza a salvo.",
    momento: "El refugio · el origen", color: "tormenta" },
  { nombre: "ARKAI", raiz: "ARKA + IA · resonancia con el griego arkhḗ — origen y mando",
    significado: "La única Arka, equipada y nombrada para cruzar la era de la Inteligencia Artificial.",
    momento: "La nave que cruza esta era · la ciudadanía", color: "lluvia" },
  { nombre: "ARKADIA", raiz: "griego Arkadía — el paraíso terrenal",
    significado: "La orilla a la que esa misma Arka llega.",
    momento: "El destino · la ofrenda", color: "arkadia" },
];

/* ── LAS DOS CASTAS (Carta · sección C) ── */
export const CASTAS = [
  { nombre: "Los Constructores", cuando: "Ahora — antes de que rompan las tempestades",
    que: "Levantan el Arka por fe, antes de las pruebas.",
    estatus: "Fundadores. Casta cerrada: se nombran una sola vez.", ahora: true },
  { nombre: "Los Soberanos", cuando: "Después, cuando el Arka ya navega",
    que: "Abordan lo ya construido.",
    estatus: "Ciudadanos plenos, soberanos de su propia vida.", ahora: false },
];

/* ── LA FLOTA · nodos ──
   Canon (Carta · sección C): los nodos son parte del Arka; las alianzas
   la acompañan pero NO son parte de la ciudadanía. Se muestran aparte. */
export const NODOS = [
  { nombre: "EL ARKA", rol: "Nodo cero", url: "/",
    linea: "El punto de origen del que nace todo lo demás. La única que habrá.", centro: true },
  { nombre: "La Proa", rol: "Formación en campo", url: "/conectate/",
    linea: "El taller que se lleva a cada territorio: donde el Arka toca tierra." },
];

/* ── LAS ALIANZAS ──
   "EL ARKA teje alianzas y apoya a otras causas e instituciones —ONGs,
    cámaras, comunidad— para que más gente cruce."
   [VALIDAR con Ed] la clasificación de cada una y su descripción. */
export const ALIANZAS = [
  { nombre: "Club Conéctate", tipo: "Comunidad · encuentro", url: "https://clubconectate.elarka.ong",
    linea: "Encuentros donde la comunidad se reconoce cara a cara.", externo: true },
  { nombre: "Techo Venezuela", tipo: "Causa social", url: "https://techovenezuela.elarka.ong",
    linea: "Un techo para quien cruza sin tenerlo.", externo: true },
];

/* ── Territorio: habla hispana · LATAM y España ── */
export const PAISES = [
  { b: "🇲🇽", n: "México" },      { b: "🇬🇹", n: "Guatemala" },
  { b: "🇸🇻", n: "El Salvador" }, { b: "🇭🇳", n: "Honduras" },
  { b: "🇳🇮", n: "Nicaragua" },   { b: "🇨🇷", n: "Costa Rica" },
  { b: "🇵🇦", n: "Panamá" },      { b: "🇨🇺", n: "Cuba" },
  { b: "🇩🇴", n: "R. Dominicana" },{ b: "🇵🇷", n: "Puerto Rico" },
  { b: "🇨🇴", n: "Colombia" },    { b: "🇻🇪", n: "Venezuela" },
  { b: "🇪🇨", n: "Ecuador" },     { b: "🇵🇪", n: "Perú" },
  { b: "🇧🇴", n: "Bolivia" },     { b: "🇨🇱", n: "Chile" },
  { b: "🇦🇷", n: "Argentina" },   { b: "🇺🇾", n: "Uruguay" },
  { b: "🇵🇾", n: "Paraguay" },    { b: "🇪🇸", n: "España" },
];

/* ── Los Arquitectos ── */
export const ARQUITECTOS = [
  { nombre: "Ed Zam", rol: "El Arquitecto de Realidades",
    voto: "Yo veo la Realidad antes de que exista, y trazo el plano hacia ella." },
  { nombre: "Val Mosquera", rol: "La Arquitecta de Realidades",
    voto: "Yo le doy voz, rostro y relato, y hago que el mundo la crea, la desee y la defienda." },
];

/* ── El Juramento del Constructor (Carta) ── */
export const JURAMENTO = [
  "Yo, que vi venir el diluvio, decido no hundirme.",
  "Elijo construir antes de que rompan las tempestades, cuando todavía cuesta creer.",
  "Me comprometo a reprogramarme antes de exigirle al mundo,",
  "a remar por los que aún no suben,",
  "y a no soltar jamás a quien suba después de mí.",
  "No busco mi nombre: busco dejar huella.",
];
export const JURAMENTO_SELLO = "Subo al Arka. Soy Constructor.";

/* ── BITÁCORA · lo trazado y lo que falta ──
   Todo lo de aquí sale de la Carta Fundacional v1.7. Lo marcado como
   pendiente está literalmente [VALIDAR] en el canon: no se inventa. */
export const TRAZADO = [
  { que: "La Travesía · los siete pilares",
    detalle: "El método completo, en estructura 3 + 3 + 1, con el sabotaje que vence cada pilar. Trazado y en uso." },
  { que: "La doctrina y el léxico",
    detalle: "Los tres nombres, las dos castas, la identidad del Arkadiano y la voz de la casa. Escritos y vigentes." },
  { que: "La Proa · el taller en campo",
    detalle: "El Taller Conéctate ya se imparte y tiene su propio material. Es el primer contacto real con el Arka." },
  { que: "Las primeras alianzas",
    detalle: "Club Conéctate y Techo Venezuela acompañan al Arka con causas y encuentros propios." },
];

export const POR_TRAZAR = [
  { que: "Las 7 Estaciones de ARKAI",
    detalle: "Si La Travesía te transforma a ti, las Estaciones construyen tu negocio. Están nombradas como concepto, pero su detalle aún no se dibuja. No las inventamos: se trazan cuando los Arquitectos las dibujen." },
  { que: "La constitución legal",
    detalle: "El Arka opera hoy como comunidad y organización sin fines de lucro. Su constitución jurídica formal está prevista para 2027, autofinanciada por el propio Arka — cuando haya recursos, no antes." },
  { que: "La prueba real de un nodo",
    detalle: "La Soberanía de Nodo está definida en doctrina. Falta la prueba en campo: un nodo sosteniéndose solo, con sus propios ingresos y su comunidad." },
  { que: "El motor de monetización, en detalle",
    detalle: "Sabemos que los ingresos se reinvierten íntegramente en la misión. El detalle de membresías y niveles se está afinando." },
];

/* Entradas de bitácora. Solo hechos verificables, con fecha.
   Las siguientes las escriben Ed o Val. */
export const BITACORAS = [
  {
    iso: "2026-08-03",
    fecha: "3 · ago · 2026",
    titulo: "Abrimos el plano",
    texto: "Publicamos esta bitácora con lo que ya está en pie y —sobre todo— con lo que todavía no está trazado. Casi nadie enseña su plano incompleto. Nosotros preferimos que quien suba sepa exactamente en qué momento del viaje está entrando: temprano, cuando aún cuesta creer.",
    firma: "Los Arquitectos",
  },
];

/* Fundación: por instrucción de los Arquitectos, este dato vive
   ÚNICAMENTE en /arquitectos. No se repite en el resto del sitio. */
export const FUNDACION = {
  fecha: "23 de julio de 2026",
  lugar: "Mérida, Yucatán, México",
};
