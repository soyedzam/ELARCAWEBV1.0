/* EL FARO · Diagnóstico «¿Qué tanto puede la IA cambiar tu negocio?»
   Dos ejes: EXPOSICIÓN (cuánto de tu negocio ya puede hacerlo la IA) y PREPARACIÓN
   (cuánto estás listo para dirigirla). Autoevaluación: no mide, orienta. Nada viaja a un servidor.
   Voz: Eje Rector — sin prompts ni atajos; el primer paso es de raíz. */

export const PREGUNTAS = [
  // EXPOSICIÓN
  { eje: "exposicion", q: "¿Cuánto de tu trabajo diario es responder mensajes, cotizar o llenar documentos?",
    o: ["Casi nada", "Una parte", "La mayor parte"] },
  { eje: "exposicion", q: "Lo que vendes, ¿se puede explicar o entregar por escrito o en pantalla?",
    o: ["No, es físico o presencial", "Una parte", "Sí, casi todo"] },
  { eje: "exposicion", q: "¿Tus clientes ya te comparan con opciones más baratas o automáticas?",
    o: ["No", "A veces", "Cada vez más"] },
  { eje: "exposicion", q: "Si tú faltas una semana, ¿el negocio se detiene?",
    o: ["No, sigue solo", "Se frena", "Se detiene"] },
  { eje: "exposicion", q: "¿Cuántas tareas repites igual cada semana?",
    o: ["Pocas", "Varias", "Muchas"] },
  // PREPARACIÓN
  { eje: "preparacion", q: "¿Usas IA en tu negocio hoy?",
    o: ["No", "A veces, para cosas sueltas", "Todos los días, en procesos"] },
  { eje: "preparacion", q: "¿Tus procesos están escritos en algún lado?",
    o: ["Viven en mi cabeza", "Algunos", "Casi todos"] },
  { eje: "preparacion", q: "¿Tienes claro para qué existe tu negocio, más allá de ganar dinero?",
    o: ["No lo he pensado", "Más o menos", "Sí, lo puedo decir en una frase"] },
  { eje: "preparacion", q: "¿Tu información (clientes, ventas, precios) está ordenada en un solo lugar?",
    o: ["No", "En parte", "Sí"] },
  { eje: "preparacion", q: "¿Tienes con quién aprender esto, o lo haces solo?",
    o: ["Solo", "Con algunas personas", "Con una comunidad o equipo"] },
];

/* Resultado por cuadrante (exposición alta = ≥ 6 de 10; preparación alta = ≥ 6 de 10). */
export const RESULTADOS = {
  "alta-baja": {
    titulo: "El Diluvio te alcanza primero",
    texto: "Buena parte de tu negocio ya la puede hacer la IA, y todavía no estás listo para dirigirla. No es tarde: es urgente.",
    paso: "Escribe en una hoja los 3 procesos que más repites. Ese es tu mapa: por ahí entra el orden, antes que cualquier herramienta.",
  },
  "alta-alta": {
    titulo: "Listo para liderar",
    texto: "Tu negocio está expuesto, pero ya tienes base para dirigir a la IA en lugar de competir contra ella.",
    paso: "Elige un proceso completo y conviértelo en sistema de punta a punta, con un agente y una persona que lo supervise.",
  },
  "baja-baja": {
    titulo: "Con tiempo, sin rumbo",
    texto: "La IA todavía no toca el centro de tu negocio. Ese tiempo es tu ventaja, si lo usas para ordenarte.",
    paso: "Escribe para qué existe tu negocio en una frase. Todo lo demás se decide desde ahí.",
  },
  "baja-alta": {
    titulo: "Ventaja para tomar",
    texto: "Estás mejor preparado que la mayoría y tu negocio está poco expuesto. Puedes abrir camino antes que tu competencia.",
    paso: "Busca dónde la IA te deja ofrecer algo que hoy nadie en tu mercado ofrece.",
  },
};

export function diagnosticar(respuestas) {
  const suma = (eje) => PREGUNTAS.reduce((t, p, i) => t + (p.eje === eje ? (respuestas[i] ?? 0) : 0), 0);
  const exp = suma("exposicion"), prep = suma("preparacion");
  const clave = `${exp >= 6 ? "alta" : "baja"}-${prep >= 6 ? "alta" : "baja"}`;
  return { exp, prep, clave, ...RESULTADOS[clave] };
}
