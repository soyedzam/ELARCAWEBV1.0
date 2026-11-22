/* EL FARO · colección de piezas escritas. Una pieza nueva = un archivo .md en src/content/faro/.
   Regla del canon: el Eje nombra formatos de casa; los motores nombran series. */
import { defineCollection, z } from "astro:content";

const faro = defineCollection({
  type: "content",
  schema: z.object({
    tipo: z.enum(["respuestas", "laboratorio", "ensayos", "glosario"]),
    titulo: z.string(),
    descripcion: z.string().max(170),
    respuesta: z.string().max(400).optional(), // la respuesta directa, arriba de todo (AEO)
    fecha: z.coerce.date(),
    actualizada: z.coerce.date().optional(),
    autor: z.enum(["Ed Zam", "Val Mosquera", "EL ARKA"]).default("EL ARKA"),
    serie: z.enum(["El Laboratorio", "Pulso", "EL FARO · El Taller", "EL FARO · El Cruce"]).optional(),
    capa: z.enum(["Descubrimiento", "Nutrición", "Intimidad"]),
    tema: z.string().optional(),
    guia: z.string().optional(),          // slug de la guía interactiva que acompaña
    imagen: z.string().optional(),
    borrador: z.boolean().default(true),  // nace borrador: publicar es decisión de Ed
  }),
});

export const collections = { faro };
