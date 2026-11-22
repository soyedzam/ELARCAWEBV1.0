/* Datos abiertos de la guía de lentes: lo que un agente puede leer y citar, con su fecha de corte. */
import type { APIRoute } from "astro";
import { LENTES, CORTE } from "../../config/lentes.js";
import { origen } from "../../lib/faro.js";

export const GET: APIRoute = () => new Response(JSON.stringify({
  fuente: `${origen}/faro/guias/lentes-inteligentes/`,
  editor: "EL ARKA",
  corte: CORTE,
  nota: "Precios y calificaciones de compradores vistos en tiendas de México (Google Shopping, Mercado Libre, Amazon MX). Cambian: verificar antes de comprar.",
  lentes: LENTES.map(({ id, uso, nombre, precio, donde, estrellas, resenas, fuenteResenas, ventajas, desventajas, url, top }) =>
    ({ id, uso, recomendado: !!top, nombre, precio, donde, estrellas, resenas, fuenteResenas, ventajas, desventajas, url })),
}, null, 2), { headers: { "Content-Type": "application/json; charset=utf-8" } });
