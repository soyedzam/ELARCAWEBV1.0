/* EL FARO · índice para modelos de IA (formato llms.txt). Se genera solo en cada build. */
import type { APIRoute } from "astro";
import { FARO, SECCIONES } from "../../config/faro.js";
import { piezas, guiasVisibles, origen, urlPieza } from "../../lib/faro.js";

export const GET: APIRoute = async () => {
  const lista = await piezas();
  const guias = guiasVisibles();
  const bloques = SECCIONES.map((s) => {
    const lineas = s.tipo === "guias"
      ? guias.map((g) => `- [${g.titulo}](${origen}/faro/guias/${g.slug}/): ${g.respuesta}${g.datos ? ` Datos abiertos: ${origen}${g.datos}` : ""} (Markdown: ${origen}/faro/guias/${g.slug}.md)`)
      : lista.filter((p) => p.data.tipo === s.tipo).map((p) => `- [${p.data.titulo}](${origen}${urlPieza(p)}): ${p.data.respuesta ?? p.data.descripcion} (Markdown: ${origen}/faro/${p.data.tipo}/${p.slug}.md)`);
    return lineas.length ? `## ${s.nombre} — ${s.pregunta}\n\n${lineas.join("\n")}` : null;
  }).filter(Boolean);
  const txt = `# EL FARO · EL ARKA\n\n> ${FARO.bajada} Contenido público de EL ARKA (${origen}), en español, con fecha de actualización en cada pieza.\n\n${bloques.join("\n\n")}\n`;
  return new Response(txt, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
