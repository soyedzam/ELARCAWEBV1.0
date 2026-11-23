/* EL FARO · Diagnóstico «¿Qué tanto puede la IA cambiar tu negocio?»
   Dos ejes: EXPOSICIÓN (cuánto de tu negocio ya puede hacerlo la IA) y PREPARACIÓN
   (cuánto estás listo para dirigirla). Autoevaluación: no mide, orienta. Nada viaja a un servidor.
   Voz: Eje Rector — sin prompts ni atajos; cada acción es de raíz.
   Cada respuesta puede disparar un HALLAZGO con su ACCIÓN; el plan de 4 semanas se arma
   con los hallazgos de mayor peso. Ningún dato externo: todo sale de lo que contestó la persona. */

/* h(peso, hallazgo, accion) — peso 3 = urgente, 2 = importante, 1 = a cuidar */
const h = (peso, hallazgo, accion) => ({ peso, hallazgo, accion });

export const PREGUNTAS = [
  // ── EXPOSICIÓN ──
  { eje: "exposicion", q: "¿Cuánto de tu trabajo diario es responder mensajes, cotizar o llenar documentos?",
    o: ["Casi nada", "Una parte", "La mayor parte"],
    h: [null,
      h(2, "Una parte de tu día se va en tareas que la IA ya hace.", "Cronometra una semana cuánto tiempo te llevan mensajes, cotizaciones y documentos."),
      h(3, "La mayor parte de tu día es trabajo que la IA ya hace mejor y más rápido.", "Escribe cómo cotizas hoy, paso a paso: ese documento es lo primero que un agente puede tomar.")] },
  { eje: "exposicion", q: "Lo que vendes, ¿se puede explicar o entregar por escrito o en pantalla?",
    o: ["No, es físico o presencial", "Una parte", "Sí, casi todo"],
    h: [null,
      h(1, "Una parte de lo que vendes puede copiarse o automatizarse.", "Separa lo que entregas en pantalla de lo que sólo tú puedes dar en persona."),
      h(3, "Lo que vendes se puede replicar en pantalla: tu competencia ya puede hacerlo con IA.", "Define qué parte de tu oferta depende de tu criterio y de tu relación, no del entregable.")] },
  { eje: "exposicion", q: "¿Tus clientes ya te comparan con opciones más baratas o automáticas?",
    o: ["No", "A veces", "Cada vez más"],
    h: [null,
      h(2, "Ya empiezan a compararte por precio.", "Pregunta a tus 3 mejores clientes por qué te eligen a ti y no a la opción barata."),
      h(3, "Te están comparando con opciones automáticas: el precio ya no te protege.", "Escribe la promesa que sólo tú puedes cumplir, y deja de competir por la que la IA ya cumple.")] },
  { eje: "exposicion", q: "Si tú faltas una semana, ¿el negocio se detiene?",
    o: ["No, sigue solo", "Se frena", "Se detiene"],
    h: [null,
      h(2, "El negocio se frena sin ti.", "Anota qué decisiones sólo tomas tú y cuáles podría tomar otra persona con una regla escrita."),
      h(3, "Tú eres el cuello de botella: sin ti, el negocio se detiene.", "Elige una decisión que tomas cada semana y escríbela como regla para que otro la tome.")] },
  { eje: "exposicion", q: "¿Cuántas tareas repites igual cada semana?",
    o: ["Pocas", "Varias", "Muchas"],
    h: [null,
      h(1, "Tienes tareas repetidas que pueden volverse sistema.", "Haz una lista de las tareas que repites igual cada semana."),
      h(2, "Muchas tareas se repiten igual: ahí está tu mayor ahorro de tiempo.", "Elige la tarea repetida que más odias y descríbela paso a paso.")] },
  // ── PREPARACIÓN ──
  { eje: "preparacion", q: "¿Usas IA en tu negocio hoy?",
    o: ["No", "A veces, para cosas sueltas", "Todos los días, en procesos"],
    h: [h(3, "Todavía no usas IA: tu competencia sí está aprendiendo.", "Usa IA 15 minutos diarios en una tarea real de tu negocio, no en curiosidades."),
      h(2, "Usas IA suelta, sin proceso: aprovechas una fracción.", "Convierte tu uso suelto más frecuente en un paso fijo de un proceso."),
      null] },
  { eje: "preparacion", q: "¿Tus procesos están escritos en algún lado?",
    o: ["Viven en mi cabeza", "Algunos", "Casi todos"],
    h: [h(3, "Tus procesos viven en tu cabeza: ni una persona ni una IA pueden ayudarte así.", "Escribe tu proceso de venta en una hoja: de cómo llega un cliente a cómo te paga."),
      h(2, "Sólo algunos procesos están escritos.", "Escribe el proceso que más dinero mueve y que todavía no está en papel."),
      null] },
  { eje: "preparacion", q: "¿Tienes claro para qué existe tu negocio, más allá de ganar dinero?",
    o: ["No lo he pensado", "Más o menos", "Sí, lo puedo decir en una frase"],
    h: [h(3, "Sin un para qué claro, la IA te hará más rápido… en cualquier dirección.", "Escribe en una frase para qué existe tu negocio. Primero el Ser, después el Poder."),
      h(1, "Tu para qué existe, pero no está afilado.", "Pide a 3 clientes que digan en una frase para qué sirves y compáralo con la tuya."),
      null] },
  { eje: "preparacion", q: "¿Tu información (clientes, ventas, precios) está ordenada en un solo lugar?",
    o: ["No", "En parte", "Sí"],
    h: [h(2, "Tu información está dispersa: la IA no puede trabajar con lo que no encuentra.", "Junta en una sola hoja tus clientes, lo que te compraron y cuánto."),
      h(1, "Tu información está ordenada a medias.", "Elige un solo lugar oficial para clientes y precios, y deja de usar los demás."),
      null] },
  { eje: "preparacion", q: "¿Tienes con quién aprender esto, o lo haces solo?",
    o: ["Solo", "Con algunas personas", "Con una comunidad o equipo"],
    h: [h(2, "Lo estás haciendo solo: es el camino más lento y el más caro.", "Busca a otras personas que estén construyendo lo mismo que tú."),
      null, null] },
];

/* Resultado por cuadrante (exposición alta = ≥ 6 de 10; preparación alta = ≥ 6 de 10). */
export const RESULTADOS = {
  "alta-baja": { titulo: "El Diluvio te alcanza primero",
    texto: "Buena parte de tu negocio ya la puede hacer la IA, y todavía no estás listo para dirigirla. No es tarde: es urgente." },
  "alta-alta": { titulo: "Listo para liderar",
    texto: "Tu negocio está expuesto, pero ya tienes base para dirigir a la IA en lugar de competir contra ella." },
  "baja-baja": { titulo: "Con tiempo, sin rumbo",
    texto: "La IA todavía no toca el centro de tu negocio. Ese tiempo es tu ventaja, si lo usas para ordenarte." },
  "baja-alta": { titulo: "Ventaja para tomar",
    texto: "Estás mejor preparado que la mayoría y tu negocio está poco expuesto. Puedes abrir camino antes que tu competencia." },
};

/* Si todo salió bien, el plan no queda vacío: estas acciones lo completan. */
const RELLENO = [
  h(1, "Tu base está sana.", "Elige un proceso completo y conviértelo en sistema de punta a punta, con una persona que lo supervise."),
  h(1, "Tienes ventaja sobre tu mercado.", "Busca qué puedes ofrecer con IA que hoy nadie en tu mercado ofrece."),
  h(1, "El siguiente nivel es enseñar lo que ya hiciste.", "Documenta cómo lo lograste: eso se vuelve un activo que trabaja sin ti."),
];

export function diagnosticar(respuestas) {
  const suma = (eje) => PREGUNTAS.reduce((t, p, i) => t + (p.eje === eje ? (respuestas[i] ?? 0) : 0), 0);
  const exp = suma("exposicion");
  // preparación: más alto = más listo
  const prep = suma("preparacion");
  const clave = `${exp >= 6 ? "alta" : "baja"}-${prep >= 6 ? "alta" : "baja"}`;
  const hallazgos = PREGUNTAS.map((p, i) => p.h[respuestas[i]]).filter(Boolean)
    .sort((a, b) => b.peso - a.peso);
  const plan = [...hallazgos, ...RELLENO].slice(0, 4);
  return { exp, prep, clave, ...RESULTADOS[clave], hallazgos: hallazgos.slice(0, 5), plan };
}

/* ── Lo que lo vuelve inteligente sin servidor: el giro del negocio ──
   La persona elige su giro; el resultado le muestra qué podría hacer la IA en SU negocio
   y por dónde empezar. Ejemplos de oficio, no cifras: nada que verificar. */
export const GIROS = [
  { id: "servicios", nombre: "Servicios profesionales (despacho, consultoría, agencia)",
    empieza: "tus propuestas y cotizaciones",
    ideas: ["Un agente que arme la primera versión de cada propuesta con tus precios y tu estilo.", "Resúmenes y minutas de cada junta con los compromisos de cada cliente.", "Seguimiento a prospectos que no contestaron, con tu voz."] },
  { id: "comercio", nombre: "Comercio o tienda (física o en línea)",
    empieza: "las preguntas que te hacen los clientes por WhatsApp",
    ideas: ["Respuestas inmediatas a precio, existencia y horarios, a cualquier hora.", "Descripciones y fotos de producto ordenadas para vender en línea.", "Aviso automático de qué se está acabando y qué no se mueve."] },
  { id: "alimentos", nombre: "Restaurante, cafetería o alimentos",
    empieza: "pedidos y reservaciones",
    ideas: ["Tomar pedidos y reservaciones por WhatsApp sin perder ninguno.", "Saber qué platillos dejan más margen y cuáles sobran.", "Responder reseñas con tu tono, todos los días."] },
  { id: "salud", nombre: "Salud o bienestar (consultorio, clínica, terapia)",
    empieza: "citas, confirmaciones y recordatorios",
    ideas: ["Agenda, confirmaciones y recordatorios sin que nadie llame.", "Preguntas frecuentes de pacientes respondidas con tu criterio.", "Notas de seguimiento ordenadas (cuidando siempre la privacidad del paciente)."] },
  { id: "educacion", nombre: "Educación, formación o coaching",
    empieza: "dudas repetidas de tus alumnos",
    ideas: ["Un asistente que responda dudas con tu material, a cualquier hora.", "Ejercicios y evaluaciones a la medida de cada alumno.", "Convertir tus clases en guías y contenido que trabajen sin ti."] },
  { id: "eventos", nombre: "Eventos, producción o turismo",
    empieza: "cotizaciones y coordinación con proveedores",
    ideas: ["Cotizar un evento en minutos con tu tabla de precios.", "Seguimiento a cada proveedor y a cada invitado sin hojas sueltas.", "El programa y la logística del día, siempre al día para todos."] },
  { id: "industria", nombre: "Manufactura, construcción o industria",
    empieza: "reportes, órdenes y control de avance",
    ideas: ["Reportes de avance que se arman solos con lo que captura tu equipo.", "Cotizaciones técnicas a partir de tus fichas y costos.", "Detectar retrasos o mermas antes de que cuesten."] },
  { id: "otro", nombre: "Otro giro",
    empieza: "la tarea que más repites cada semana",
    ideas: ["Un agente que haga la primera versión de lo que más repites.", "Responder a tus clientes con tu criterio, a cualquier hora.", "Ordenar tu información para decidir con datos y no de memoria."] },
];

/* Índice 0–100: qué tan listo estás para dirigir a la IA frente a lo expuesto que está tu negocio. */
export function indice(exp, prep) {
  const n = Math.max(0, Math.min(100, Math.round(50 + (prep - exp) * 5)));
  const banda = n < 35 ? "En riesgo" : n < 65 ? "En transición" : "Listo para liderar";
  return { n, banda };
}
