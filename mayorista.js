/* =====================================================================
   KOBU DULCE · LISTA MAYORISTA  (página /mayoristas)
   Lo guarda KobuEditor (pestaña Mayorista). Es una lista aparte del menú:
   secciones, productos, ingredientes, precio mayorista y precio al público
   (este último se muestra tachado). Sin precio mayorista = "Precio a consultar".
   Última edición: 6/10/2026, 11:13:04
   ===================================================================== */

window.KOBU_MAYORISTA = {
  actualizado: "2026-10-06",
  categorias: [
    {
      id: "clasicos",
      titulo: "Budines",
      cursiva: "clásicos",
      oscuro: true,
      icono: "budin",
      nota: "250 g",
      productos: [
        {
          id: "vainilla",
          nombre: "Vainilla",
          precio: 2900,
          precioPublico: 3500,
          ingredientes: "Harina, Azúcar, Leche, Aceite, Huevos, Esencia de Vainilla."
        },
        {
          id: "limon",
          nombre: "Limón",
          precio: 2900,
          precioPublico: 3500,
          ingredientes: "Harina, Azúcar, Leche, Aceite, Huevos, Ralladura de Limón."
        },
        {
          id: "naranja",
          nombre: "Naranja",
          precio: 2900,
          precioPublico: 3500,
          ingredientes: "Harina, Azúcar, Leche, Aceite, Huevos, Ralladura de Naranja."
        },
        {
          id: "banana",
          nombre: "Banana",
          precio: 2900,
          precioPublico: 3500,
          ingredientes: "Harina, Azúcar, Leche, Aceite, Huevos, Banana."
        },
        {
          id: "marmolado",
          nombre: "Marmolado",
          precio: 2900,
          precioPublico: 3500,
          ingredientes: "Harina, Azúcar, Cacao en polvo, Leche, Aceite, Huevos."
        },
        {
          id: "chips-chocolate",
          nombre: "Chips de chocolate",
          precio: 2900,
          precioPublico: 3500,
          ingredientes: "Harina, Azúcar, Leche, Aceite, Chips de chocolate, Huevos, Esencia de Vainilla."
        },
        {
          id: "naranja-miel",
          nombre: "Naranja y miel",
          precio: 3300,
          precioPublico: 4000,
          ingredientes: "Harina, Azúcar, Leche, Aceite, Miel, Huevos, Ralladura de Naranja."
        },
        {
          id: "budin-xl",
          nombre: "Budín XL",
          descripcion: "Cualquiera de los sabores clásicos, en tamaño grande.",
          precio: 6200,
          precioPublico: 7500
        }
      ]
    },
    {
      id: "premium",
      titulo: "Budines",
      cursiva: "Premium XL",
      icono: "estrella",
      nota: "600 g",
      productos: [
        {
          id: "budin-kobu",
          nombre: "Budín Kobu",
          subtitulo: "Budín de Malbec",
          descripcion: "Con chocolate y chips de chocolate.",
          precio: 7900,
          precioPublico: 9500,
          ingredientes: "Harina, Azúcar, Leche, Aceite, Cacao Amargo, Vino Malbec, Chips de chocolate, Huevos."
        },
        {
          id: "budin-blues",
          nombre: "Budín Blues",
          subtitulo: "Budín de vino blanco",
          descripcion: "Con vainilla y chips de chocolate blanco.",
          precio: 7900,
          precioPublico: 9500,
          ingredientes: "Harina, Azúcar, Leche, Aceite, Vino Blanco, Chips de chocolate blanco, Huevos, Esencia de vainilla."
        },
        {
          id: "licor-ddl",
          nombre: "Licor de dulce de leche",
          precio: 6900,
          precioPublico: 8300,
          ingredientes: "Harina, Azúcar, Leche, Aceite, Licor de dulce de leche, Huevos, Esencia de Vainilla."
        }
      ]
    },
    {
      id: "bocaditos",
      titulo: "Bocaditos",
      cursiva: "dulces & salados",
      bajada: "Brownies, lemonies, kobulitos y skoncitos",
      icono: "cafe",
      productos: [
        {
          id: "brownies",
          nombre: "Brownies",
          descripcion: "Cuadraditos húmedos de chocolate intenso.",
          ingredientes: "Harina, Cacao en polvo, Aceite, Azúcar, Huevos.",
          variantes: [
            {
              id: "porcion",
              nombre: "Cada porción",
              precio: 2300,
              precioPublico: 2800
            },
            {
              id: "grande",
              nombre: "Entero grande",
              detalle: "Bandeja 22 × 28 cm, rinde 8 porciones",
              precio: 18000,
              precioPublico: 20000
            }
          ]
        },
        {
          id: "lemonies",
          nombre: "Lemonies",
          descripcion: "Cuadraditos húmedos de limón con glasé cítrico.",
          variantes: [
            {
              id: "porcion",
              nombre: "Cada porción",
              precio: 2100,
              precioPublico: 2500
            }
          ]
        },
        {
          id: "kobulitos",
          nombre: "Kobulitos de Malbec",
          descripcion: "Cuadraditos húmedos de chocolate con Malbec.",
          variantes: [
            {
              id: "porcion",
              nombre: "Cada porción",
              precio: 1500,
              precioPublico: 1800
            }
          ]
        },
        {
          id: "skoncitos",
          nombre: "Skoncitos de queso",
          descripcion: "Bocaditos tiernos y mantecosos con intenso sabor a queso.",
          variantes: [
            {
              id: "bolsita",
              nombre: "Cada bolsita",
              detalle: "8 unidades",
              precio: 2200,
              precioPublico: 2600
            }
          ]
        }
      ]
    }
  ]
};
