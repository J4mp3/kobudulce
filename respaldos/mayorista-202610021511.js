/* =====================================================================
   KOBU DULCE · LISTA MAYORISTA  (página /mayoristas)
   Lo guarda KobuEditor (pestaña Mayorista). Es una lista aparte del menú:
   secciones, productos, ingredientes, precio mayorista y precio al público
   (este último se muestra tachado). Sin precio mayorista = "Precio a consultar".
   Última edición: 1/10/2026, 04:57:59
   ===================================================================== */

window.KOBU_MAYORISTA = {
  actualizado: "2026-10-01",
  categorias: [
    {
      id: "clasicos",
      titulo: "Budines",
      cursiva: "clásicos",
      oscuro: true,
      productos: [
        {
          id: "vainilla",
          nombre: "Vainilla",
          precio: 2800,
          precioPublico: 3500
        },
        {
          id: "limon",
          nombre: "Limón",
          precio: 2800,
          precioPublico: 3500
        },
        {
          id: "naranja",
          nombre: "Naranja",
          precio: 2800,
          precioPublico: 3500
        },
        {
          id: "banana",
          nombre: "Banana",
          precio: 2800,
          precioPublico: 3500
        },
        {
          id: "marmolado",
          nombre: "Marmolado",
          precio: 2800,
          precioPublico: 3500
        },
        {
          id: "chips-chocolate",
          nombre: "Chips de chocolate",
          precio: 2800,
          precioPublico: 3500
        },
        {
          id: "naranja-miel",
          nombre: "Naranja y miel",
          precio: 3200,
          precioPublico: 4000
        },
        {
          id: "budin-xl",
          nombre: "Budín XL",
          descripcion: "Cualquiera de los sabores clásicos, en tamaño grande.",
          precio: 6000,
          precioPublico: 7500
        }
      ]
    },
    {
      id: "premium",
      titulo: "Budines",
      cursiva: "Premium XL",
      productos: [
        {
          id: "budin-kobu",
          nombre: "Budín Kobu",
          subtitulo: "Budín de Malbec",
          descripcion: "Con chocolate y chips de chocolate.",
          precio: 7600,
          precioPublico: 9500
        },
        {
          id: "budin-blues",
          nombre: "Budín Blues",
          subtitulo: "Budín de vino blanco",
          descripcion: "Con vainilla y chips de chocolate blanco.",
          precio: 7600,
          precioPublico: 9500
        },
        {
          id: "cafe-almendras",
          nombre: "Café y almendras",
          precio: 7400,
          precioPublico: 9300
        },
        {
          id: "licor-ddl",
          nombre: "Licor de dulce de leche",
          precio: 6600,
          precioPublico: 8300
        }
      ]
    },
    {
      id: "bocaditos",
      titulo: "Bocaditos",
      cursiva: "dulces & salados",
      bajada: "Brownies, lemonies, kobulitos y skoncitos",
      icono: "pila",
      productos: [
        {
          id: "brownies",
          nombre: "Brownies",
          descripcion: "Cuadraditos húmedos de chocolate intenso.",
          variantes: [
            {
              id: "porcion",
              nombre: "Cada porción",
              precio: 2200,
              precioPublico: 2800
            },
            {
              id: "chico",
              nombre: "Entero chico",
              detalle: "Bandeja 19 × 19 cm, rinde 6 porciones",
              precio: 12800,
              precioPublico: 16000
            },
            {
              id: "grande",
              nombre: "Entero grande",
              detalle: "Bandeja 22 × 28 cm, rinde 8 porciones",
              precio: 16000,
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
              precio: 2000,
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
              precio: 1400,
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
              precio: 2100,
              precioPublico: 2600
            }
          ]
        }
      ]
    }
  ]
};
