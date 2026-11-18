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

/* ── DÓNDE PERTENECEMOS ──
   Membresías de Ed y Val a título personal (no de la organización).
   Es la red donde ya estaban antes de zarpar. */
export const PERTENENCIAS = [
  { nombre: "Cluster Empresarial EXATEC Sureste", rol: "Miembros fundadores",
    linea: "Parte del grupo que lo levantó desde el primer día." },
  { nombre: "Comunidad EXATEC", rol: "Miembros activos",
    linea: "La red de egresados del Tecnológico de Monterrey." },
  { nombre: "Comunidad IPADE", rol: "Miembros activos",
    linea: "La comunidad de la escuela de dirección de empresas." },
];

/* ── CAUSAS E INSTITUCIONES QUE ACOMPAÑAMOS ──
   Canon: "EL ARKA teje alianzas y apoya a otras causas e instituciones
   —ONGs, cámaras, comunidad— para que más gente cruce."
   Aquí no solo se acompaña: se opera. Es la prueba de la tesis. */
export const ALIANZAS = [
  { nombre: "Cumbre Global de Liderazgo", tipo: "Formación de líderes · México",
    aporta: ["Orquestación de agentes y arneses", "Contenido y marketing"],
    linea: "El encuentro que forma a quienes conducen a otros." },
  { nombre: "Cluster Empresarial EXATEC Sureste", tipo: "Cámara empresarial",
    aporta: ["Orquestación de agentes y arneses", "Contenido y marketing"],
    linea: "La red de empresarios egresados del Tec de Monterrey en el sureste de México." },
  { nombre: "Congreso El Cielo en mi Ciudad", tipo: "Congreso · comunidad",
    aporta: ["Orquestación de agentes y arneses", "Contenido y marketing"],
    linea: "Un congreso que reúne a la ciudad entera." },
  { nombre: "Club Conéctate", tipo: "Encuentro empresarial", url: "https://clubconectate.elarka.ong",
    aporta: ["Orquestación de agentes y arneses", "Contenido y marketing"],
    linea: "Donde emprendedores y empresarios se reconocen cara a cara.", externo: true },
  { nombre: "Techo Venezuela", tipo: "Causa social", url: "https://techovenezuela.elarka.ong",
    aporta: ["Orquestación de agentes y arneses", "Contenido y marketing"],
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

/* ── LA RUTA DEL MOTOR · IA desde cero para Constructores ──
   Pilar IV aplicado: ChatGPT, Grok, Codex y Claude para gente que no programa.
   Rige: ARKA_GEN_PLN_Ruta-IA-Constructores_261118_v0.1 (hub · _Estrategia).
   Datos de cursos verificados el 18·nov·2026; lo no confirmado dice N/D.
   Aquí NO viven personas: el avance por Constructor está en el hub, por código. */
export const RUTA_IA = {
  entrada: "Cuatro niveles para aprender a trabajar con ChatGPT, Grok, Codex y Claude desde cero. Todo en español, con cursos de alta reputación verificada, y cierras cada nivel con algo hecho por ti, revisado por quien te acompaña.",
  hechos: [
    { dato: "4", que: "niveles, uno a la vez" },
    { dato: "4", que: "herramientas: ChatGPT, Grok, Codex y Claude" },
    { dato: "ES", que: "todos los cursos principales, en español" },
    { dato: "★4.6+", que: "calificación pública verificada en los niveles 1 y 2" },
  ],
  regla: "Un curso te enseña; la práctica demuestra que aprendiste. Cada nivel se cierra con una práctica de EL ARKA, no con un certificado. El certificado es opcional y nunca sustituye la práctica.",
  niveles: [
    {
      n: 0, nombre: "Arranque en español", herramientas: "ChatGPT", horas: "2 semanas · 2–3 h por semana",
      objetivo: "Pierdes el miedo. Abres tu cuenta, entiendes qué es y qué no es un modelo de lenguaje y tienes tus primeras conversaciones útiles, en tu idioma.",
      cursos: [
        { principal: true, nombre: "Introducción a ChatGPT", proveedor: "Universitat Politècnica de València · edX",
          url: "https://www.edx.org/es/learn/chatgpt/universitat-politecnica-de-valencia-introduccion-a-chatgpt-impulsa-tu-productividad-al-maximo-usando-inteligencia-artificial",
          idioma: "Español", costo: "Gratis; el certificado verificado es de paga (precio N/D)",
          evidencia: "Universidad pública detrás. Calificación pública: N/D. Inscritos: N/D (no confirmado en la página)." },
        { principal: false, nombre: "Curso Completo de ChatGPT", proveedor: "G-Talent",
          url: "https://www.g-talent.net/collections/cursos-online/products/curso-completo-de-chatgpt",
          idioma: "Español", costo: "De paga: USD 12.99 en promoción (lista USD 47); el precio cambia",
          evidencia: "5 h 43 min, 44 clases, trae un módulo de Codex. Reseñas: N/D." },
      ],
      practica: { nombre: "La primera conversación",
        que: "Tres conversaciones con ChatGPT sobre tu trabajo real: una para entender un tema, una para redactar algo que de verdad necesitas y una en la que le pides que te corrija. En la tercera buscas un error de la máquina y lo compruebas en una fuente.",
        entrega: "Las tres conversaciones (enlace o captura) y una línea: «lo que la máquina hizo bien y en qué se equivocó».",
        criterio: "sabes pedir, sabes reformular y sabes desconfiar: encontraste y comprobaste un error." },
    },
    {
      n: 1, nombre: "Fundamentos oficiales", herramientas: "ChatGPT · Claude · Grok", horas: "3 semanas · 3–4 h por semana",
      objetivo: "Entiendes qué puede y qué no puede hacer la IA generativa, aprendes de quienes la construyen y comparas tres herramientas en la misma tarea.",
      cursos: [
        { principal: true, nombre: "IA Para Todos (Español)", proveedor: "DeepLearning.AI (Andrew Ng) · Coursera",
          url: "https://www.coursera.org/learn/ai-for-everyone-es",
          idioma: "Español (versión en español del curso)", costo: "Inscripción en Coursera; certificado de paga, con ayuda financiera",
          evidencia: "★4.8 con 1,384 reseñas y 64,920 inscritos (Coursera, 18·nov·2026). ~6 h, principiante." },
        { principal: true, nombre: "Google AI Essentials", proveedor: "Google · Coursera",
          url: "https://www.coursera.org/learn/google-ai-essentials",
          idioma: "Español con doblaje hecho con IA", costo: "7 días gratis; después suscripción de Coursera (precio según país)",
          evidencia: "★4.8 con 26,326 reseñas y 1,470,153 inscritos (Coursera, 18·nov·2026). ~8 h, principiante." },
        { principal: true, nombre: "Curso de ChatGPT", proveedor: "Platzi",
          url: "https://platzi.com/cursos/chatgpt/",
          idioma: "Español", costo: "Empieza gratis; completo con suscripción Platzi (precio N/D)",
          evidencia: "★4.8 con 380 opiniones (Platzi, 18·nov·2026). 17 clases, nivel básico." },
      ],
      practica: { nombre: "La bitácora de prompts",
        que: "Eliges una tarea de tu oficio y se la das a ChatGPT, a Claude y a Grok. Comparas resultados, anotas qué pediste y cómo lo mejoraste, y verificas en una fuente un dato que dieron las tres.",
        entrega: "Una tabla de tres columnas: la misma tarea, tres respuestas, tu juicio sobre cuál sirve más y por qué.",
        criterio: "eliges herramienta con criterio, no por costumbre, y nunca usas un dato sin verificarlo." },
    },
    {
      n: 2, nombre: "Agentes: Codex y Claude", herramientas: "Claude Code · Codex", horas: "4 semanas · 3–4 h por semana",
      objetivo: "Pasas de conversar a encargar. Un agente no solo responde: abre archivos, escribe y construye. Aprendes a darle un encargo claro, a revisar lo que hizo y a ponerle límites.",
      cursos: [
        { principal: true, nombre: "Curso de Claude Code para No Programadores", proveedor: "Platzi",
          url: "https://platzi.com/cursos/claude-code-no-programadores/",
          idioma: "Español", costo: "Empieza gratis; completo con suscripción Platzi. Usar Claude Code pide plan de Claude",
          evidencia: "★4.7 con 858 opiniones (Platzi, 18·nov·2026). 7 clases, nivel básico." },
        { principal: true, nombre: "Curso de Claude Code", proveedor: "Platzi",
          url: "https://platzi.com/cursos/claude-code/",
          idioma: "Español", costo: "Suscripción Platzi (la misma del curso anterior)",
          evidencia: "★4.6 con 1,016 opiniones (Platzi, 18·nov·2026). Nivel intermedio: el paso siguiente." },
        { principal: true, nombre: "Curso de Codex", proveedor: "Platzi",
          url: "https://platzi.com/cursos/codex/",
          idioma: "Español", costo: "Suscripción Platzi. Usar Codex depende de tu plan de ChatGPT",
          evidencia: "★4.6 con 256 opiniones (Platzi, 18·nov·2026). 14 clases, intermedio: construyes un proyecto real." },
      ],
      practica: { nombre: "Tu primer agente, con red",
        que: "En una carpeta de práctica, sin datos reales de nadie: con Codex construyes una página de una sola hoja que explique tu oficio; con Claude ordenas una carpeta desordenada y le pides un LÉEME de lo que hay. Antes de cada encargo escribes en tres líneas qué quieres, qué no debe tocar y cómo sabrás que quedó bien.",
        entrega: "La página, la carpeta ordenada y tus dos encargos escritos, con lo que tuviste que corregir.",
        criterio: "das encargos claros, revisas antes de aceptar y nada sale de la carpeta de práctica sin revisión." },
    },
    {
      n: 3, nombre: "Proyecto propio", herramientas: "La herramienta que elijas", horas: "4–6 semanas",
      objetivo: "Resuelves un problema real de tu trabajo o de una causa del Arka con la herramienta que mejor le quede, y acompañas a alguien que apenas empieza.",
      cursos: [
        { principal: false, nombre: "Claude Code in Action", proveedor: "Anthropic Academy",
          url: "https://anthropic.skilljar.com/",
          idioma: "Inglés", costo: "Gratis",
          evidencia: "Oficial, nivel intermedio: solo si tu proyecto lo pide. Calificación: N/D." },
        { principal: false, nombre: "Documentación de Codex", proveedor: "OpenAI",
          url: "https://learn.chatgpt.com/docs",
          idioma: "Inglés", costo: "Gratis; el uso depende de tu plan",
          evidencia: "Oficial; trae casos de uso para operaciones, ventas, finanzas y educación." },
      ],
      practica: { nombre: "Tu misión en el Tablero",
        que: "Tu proyecto entra como misión al Tablero de Misiones de los Constructores: con un encargo escrito, un espacio de práctica, un criterio de «hecho» y una revisión antes de que toque algo real. Y mientras lo construyes acompañas a otro Constructor en su nivel 0: remar por los que aún no suben.",
        entrega: "La misión cerrada y revisada, y una bitácora corta de cómo acompañaste a quien empezaba.",
        criterio: "el resultado sirve a alguien de verdad, quedó revisado y alguien más ya subió contigo." },
    },
  ],
  tablero: {
    linea: "Cada Constructor tiene una fila y cada nivel una casilla. No hay calificaciones ni lugares en una lista: solo se registra en qué paso vas y quién te vio lograrlo.",
    estados: [
      { nombre: "No iniciado", que: "El nivel aún no empieza." },
      { nombre: "En curso", que: "Estás tomando el curso." },
      { nombre: "Práctica entregada", que: "Entregaste tu práctica." },
      { nombre: "Observada", que: "Quien te acompaña la revisó contigo." },
      { nombre: "Cumplido", que: "Lo lograste sin ayuda. Abres el siguiente nivel." },
    ],
    reglas: [
      "Cada Constructor aparece solo con su código. Nunca con su nombre, su correo ni una calificación.",
      "Un descuido de seguridad, como exponer un dato privado o publicar sin revisión, no se compensa con lo demás: se corrige y se repite la práctica.",
      "El avance de cada persona vive en el registro interno del Arka, no en este sitio.",
    ],
  },
};
