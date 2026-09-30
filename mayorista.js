/* =====================================================================
   KOBU DULCE · LISTA MAYORISTA
   Precios de la página /mayoristas. Lo más cómodo es cambiarlos desde
   KobuEditor (pestaña Mayorista), pero también se puede a mano:
   · precios solo con números, sin puntos ni signo: 2800
   · cada precio va con el código del producto (el mismo de datos.js).
     Para productos con tamaños: "codigo.tamaño", ej: "brownies.porcion"
   · un producto sin precio acá NO aparece en la lista mayorista.
   · actualizado: fecha que se muestra como "Precios vigentes al…"
   ===================================================================== */

window.KOBU_MAYORISTA = {
  actualizado: "",
  precios: {},
};
