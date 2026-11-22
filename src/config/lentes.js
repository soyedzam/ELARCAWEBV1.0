/* Guía de lentes inteligentes · datos de la página /bitacora/lentes-inteligentes
   Config-driven (E5): precios, estrellas y fuentes viven aquí, no en el marcado.
   Fuente canon: EL ASTILLERO/_SISTEMA/_Laboratorio/Investigacion/SIS_LAB_DAT_Banco-de-Gadgets-del-Humano
   Corte de datos: 21 nov 2026 (Google Shopping MX · Mercado Libre · Amazon MX). Caduca: refrescar antes de publicar. */

export const CORTE = "21 nov 2026";

export const LENTES = [
  {
    id: "meta-display", uso: "crear", top: true,
    nombre: "Meta Ray-Ban Display",
    img: "/assets/lentes/meta-display.jpg", fondo: "foto",
    precio: "USD 799", donde: "Aún no se vende en México",
    estrellas: null, resenas: null, fuenteResenas: "Sin reseñas de compradores en México",
    hace: [["📜", "Teleprompter"], ["📸", "Cámara"], ["⌚", "Control con pulsera"]],
    ventajas: ["El único con teleprompter", "Pantalla a color, discreta"],
    desventajas: ["Hay que importarlo", "El más caro del grupo"],
    url: "https://www.meta.com/mx/ai-glasses/meta-ray-ban-display/", cta: "Ver en Meta",
  },
  {
    id: "rayban-gen2", uso: "crear",
    nombre: "Ray-Ban Meta Gen 2",
    img: "/assets/lentes/rayban-gen2.jpg", fondo: "foto",
    precio: "$8,999", donde: "Tienda oficial de Meta México",
    estrellas: 4.0, resenas: null, fuenteResenas: "Amazon MX",
    hace: [["📸", "Cámara"], ["🎧", "Audio"], ["🤖", "IA de Meta"]],
    ventajas: ["Se compra hoy en México", "Hay versión graduada"],
    desventajas: ["Sin pantalla: no hay teleprompter"],
    url: "https://www.meta.com/mx/ai-glasses/ray-ban-meta-gen-2/", cta: "Ver en Meta México",
  },
  {
    id: "rokid", uso: "crear",
    nombre: "Rokid Glasses",
    img: null, fondo: "claro",
    precio: "USD 599", donde: "Aún no se vende en México",
    estrellas: null, resenas: null, fuenteResenas: "Sin reseñas de compradores en México",
    hace: [["🟩", "Pantalla"], ["📸", "Cámara"], ["🪶", "49 g"]],
    ventajas: ["Pantalla y cámara en un equipo", "Ligeros"],
    desventajas: ["Batería corta", "Graduación cara"],
    url: "https://global.rokid.com/es-hispano/pages/rokid-glasses", cta: "Ver en Rokid",
  },
  {
    id: "xreal-one-pro", uso: "viajar", top: true,
    nombre: "XREAL One Pro",
    img: "/assets/lentes/xreal-one-pro-3d.jpg", fondo: "foto",
    precio: "desde $8,384", donde: "Mercado Libre · USD 599",
    estrellas: 4.5, resenas: 376, fuenteResenas: "Mercado Libre",
    hace: [["🖥️", "Monitor de Mac"], ["🔤", "Texto nítido"], ["🔌", "Un cable USB-C"]],
    ventajas: ["La imagen más nítida", "Funciona con Mac"],
    desventajas: ["Pesa 87 g: no para la cama", "Va con cable, sin batería"],
    url: "https://xreal.com/one-pro", cta: "Ver en XREAL",
  },
  {
    id: "viture-luma-pro", uso: "viajar",
    nombre: "VITURE Luma Pro",
    img: "/assets/lentes/viture-luma-pro.png", fondo: "claro",
    precio: "$8,494", donde: "Mercado Libre",
    estrellas: 4.8, resenas: 244, fuenteResenas: "Mercado Libre",
    hace: [["🖥️", "Monitor"], ["👓", "Corrige miopía"], ["🔌", "USB-C"]],
    ventajas: ["Corrige miopía sin micas", "La mejor reputación del grupo"],
    desventajas: ["Nitidez para código sin confirmar"],
    url: "https://www.viture.com/", cta: "Ver en VITURE",
  },
  {
    id: "viture-beast", uso: "viajar",
    nombre: "VITURE Beast",
    img: "/assets/lentes/viture-beast-p.png", fondo: "claro",
    precio: "$15,806", donde: "AliExpress",
    estrellas: 3.8, resenas: null, fuenteResenas: "Amazon MX",
    hace: [["📐", "58° de visión"], ["🖥️", "Monitor"], ["🔘", "Botón de modo"]],
    ventajas: ["La pantalla más amplia"],
    desventajas: ["Texto menos nítido", "Caro en México"],
    url: "https://www.viture.com/", cta: "Ver en VITURE",
  },
];

/* Lógica del cuestionario: respuestas → id recomendado por uso. */
export function recomendar({ uso, graduacion, yaEnMexico }) {
  const crear = yaEnMexico ? "rayban-gen2" : "meta-display";
  const viajar = graduacion ? "viture-luma-pro" : "xreal-one-pro";
  if (uso === "crear") return [crear];
  if (uso === "viajar") return [viajar];
  return [crear, viajar];
}
