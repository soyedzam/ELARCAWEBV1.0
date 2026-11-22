/* EL FARO · versión Markdown de cada pieza: lo que lee un agente sin cargar diseño. */
import type { APIRoute } from "astro";
import { piezas, origen, urlPieza, fechaLarga } from "../../../lib/faro.js";

export async function getStaticPaths() {
  const lista = await piezas();
  return lista.map((p) => ({ params: { tipo: p.data.tipo, slug: p.slug }, props: { p } }));
}

export const GET: APIRoute = ({ props }) => {
  const { p } = props as any;
  const d = p.data;
  const cabeza = [
    `# ${d.titulo}`,
    "",
    `> ${d.descripcion}`,
    "",
    `- Fuente: ${origen}${urlPieza(p)}`,
    `- Autor: ${d.autor} · Publicado: ${fechaLarga(d.fecha)}${d.actualizada ? ` · Actualizado: ${fechaLarga(d.actualizada)}` : ""}`,
    d.guia ? `- Guía interactiva: ${origen}/faro/guias/${d.guia}/` : null,
    "",
    d.respuesta ? `**Respuesta corta:** ${d.respuesta}\n` : null,
  ].filter((x) => x !== null).join("\n");
  return new Response(`${cabeza}\n${p.body.trim()}\n`, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
