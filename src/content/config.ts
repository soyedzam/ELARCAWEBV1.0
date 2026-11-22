/* Bitácora · colecciones de contenido escrito.
   Un artículo nuevo = un archivo .md en src/content/articulos/. Nada más.
   Regla del canon: el Eje nombra formatos de casa; los motores nombran series.
   La serie de cada artículo se declara aquí, no se inventa en el texto. */
import { defineCollection, z } from "astro:content";

const articulos = defineCollection({
  type: "content",
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().max(170),
    fecha: z.coerce.date(),
    serie: z.enum(["El Laboratorio", "Pulso", "EL FARO · El Taller", "EL FARO · El Cruce"]),
    capa: z.enum(["Descubrimiento", "Nutrición", "Intimidad"]),
    guia: z.string().optional(),          // slug de la guía interactiva que acompaña
    imagen: z.string().optional(),
    borrador: z.boolean().default(true),  // nace borrador: publicar es decisión de Ed
  }),
});

export const collections = { articulos };
