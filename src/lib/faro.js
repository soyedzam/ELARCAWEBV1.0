/* EL FARO · utilidades compartidas por páginas, versiones Markdown, llms.txt y datos abiertos. */
import { getCollection } from "astro:content";
import { GUIAS, SECCIONES, verBorradores } from "../config/faro.js";
import { SITIO } from "../config/arka.js";

export const origen = SITIO.origen;

/* Piezas visibles en este build: publicadas, o todas en build de revisión. */
export async function piezas() {
  const todas = await getCollection("faro");
  return todas
    .filter((p) => !p.data.borrador || verBorradores())
    .sort((a, b) => b.data.fecha - a.data.fecha);
}

export const guiasVisibles = () => GUIAS.filter((g) => g.publicada || verBorradores());

export const urlPieza = (p) => `/faro/${p.data.tipo}/${p.slug}/`;
export const seccion = (tipo) => SECCIONES.find((s) => s.tipo === tipo);

export const fechaLarga = (d) =>
  new Date(d).toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/* JSON-LD de una pieza escrita, según su tipo. */
export function jsonLdPieza(p) {
  const url = origen + urlPieza(p);
  const autor = p.data.autor === "EL ARKA"
    ? { "@type": "Organization", name: "EL ARKA", url: origen }
    : { "@type": "Person", name: p.data.autor };
  const base = {
    "@context": "https://schema.org",
    "@type": p.data.tipo === "glosario" ? "DefinedTerm" : "Article",
    headline: p.data.titulo, name: p.data.titulo, description: p.data.descripcion, url,
    inLanguage: "es-MX",
    datePublished: p.data.fecha.toISOString().slice(0, 10),
    dateModified: (p.data.actualizada ?? p.data.fecha).toISOString().slice(0, 10),
    author: autor,
    publisher: { "@type": "Organization", name: "EL ARKA", url: origen },
    ...(p.data.imagen ? { image: origen + p.data.imagen } : {}),
  };
  const grafo = [base, migas([["EL FARO", "/faro/"], [seccion(p.data.tipo)?.nombre ?? p.data.tipo, "/faro/"], [p.data.titulo, urlPieza(p)]])];
  if (p.data.respuesta) {
    grafo.push({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: [{ "@type": "Question", name: p.data.titulo,
        acceptedAnswer: { "@type": "Answer", text: p.data.respuesta } }],
    });
  }
  return grafo;
}

export function migas(pasos) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: pasos.map(([name, ruta], i) => ({ "@type": "ListItem", position: i + 1, name, item: origen + ruta })),
  };
}
