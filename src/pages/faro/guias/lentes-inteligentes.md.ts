/* Versión Markdown de la guía de lentes, generada desde los mismos datos que la página. */
import type { APIRoute } from "astro";
import { LENTES, CORTE } from "../../../config/lentes.js";
import { GUIAS } from "../../../config/faro.js";
import { origen } from "../../../lib/faro.js";

export const GET: APIRoute = () => {
  const g = GUIAS.find((x) => x.slug === "lentes-inteligentes");
  const bloque = (uso, titulo) => [`## ${titulo}`, "",
    ...LENTES.filter((l) => l.uso === uso).map((l) => [
      `### ${l.nombre}${l.top ? " (recomendado)" : ""}`,
      `- Precio: ${l.precio} · ${l.donde}`,
      `- Reputación: ${l.estrellas != null ? `${l.estrellas} de 5` : "sin dato"}${l.resenas ? ` (${l.resenas} reseñas)` : ""} · ${l.fuenteResenas}`,
      `- Ventajas: ${l.ventajas.join("; ")}`,
      `- Desventajas: ${l.desventajas.join("; ")}`,
      `- Más información: ${l.url}`, ""].join("\n"))].join("\n");
  const md = [`# ${g.titulo}`, "", `> ${g.descripcion}`, "",
    `- Fuente: ${origen}/faro/guias/${g.slug}/ · Datos abiertos: ${origen}${g.datos}`,
    `- Editor: EL ARKA · Corte de datos: ${CORTE}`, "",
    `**Respuesta corta:** ${g.respuesta}`, "",
    bloque("crear", "Para crear (teleprompter, cámara, día a día)"),
    bloque("viajar", "Para viajar (monitor de Mac)"),
    "## Antes de pagar", "", "1. ¿Acepta tu graduación?", "2. ¿El vendedor tiene buena reputación y garantía?", "3. ¿Lo vas a usar más de 1 hora al día?", "",
    "Ningún lente está probado como protección de la vista.", ""].join("\n");
  return new Response(md, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
