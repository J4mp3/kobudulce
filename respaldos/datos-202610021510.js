/* =====================================================================
   KOBU DULCE · DATOS DE LA PÁGINA
   Este archivo lo guarda KobuEditor. Lo más cómodo es cambiarlo desde
   el editor, pero también se puede editar a mano con cuidado:
   · textos entre comillas, precios solo con números, una coma después de cada cosa.
   · no cambies los "id" de lo que ya existe.
   Última edición: 30/9/2026, 03:48:12
   ===================================================================== */

window.KOBU = {
  negocio: {
    whatsapp: "5491127929909",
    horaDeCorte: 16,
    diasSinEntrega: [],
    retiro: "Paso 1405, Ingeniero Maschwitz",
    mapa: "Kobu Dulce, Paso 1405, Ingeniero Maschwitz",
    mapaInsertado: ""
  },
  mostrarAlergenos: false,
  estadisticas: "",
  categorias: [
    {
      id: "clasicos",
      pestana: "Budines clásicos",
      titulo: "Budines",
      cursiva: "clásicos",
      oscuro: true,
      etiquetaNegocios: "Enteros",
      productos: [
        {
          id: "vainilla",
          nombre: "Vainilla",
          precio: 3500,
          alergenos: []
        },
        {
          id: "limon",
          nombre: "Limón",
          precio: 3500,
          opciones: {
            titulo: "Glasé",
            lista: [
              "Con glasé cítrico"
            ],
            sin: "Sin glasé",
            ayuda: "Con glasé cítrico o sin glasé",
            visual: "glase"
          },
          colorMasa: "#EBC96E",
          alergenos: []
        },
        {
          id: "naranja",
          nombre: "Naranja",
          precio: 3500,
          opciones: {
            titulo: "Glasé",
            lista: [
              "Con glasé cítrico"
            ],
            sin: "Sin glasé",
            ayuda: "Con glasé cítrico o sin glasé",
            visual: "glase"
          },
          colorMasa: "#E6A953",
          alergenos: []
        },
        {
          id: "banana",
          nombre: "Banana",
          precio: 3500,
          alergenos: []
        },
        {
          id: "marmolado",
          nombre: "Marmolado",
          precio: 3500,
          alergenos: []
        },
        {
          id: "chips-chocolate",
          nombre: "Chips de chocolate",
          precio: 3500,
          alergenos: []
        },
        {
          id: "naranja-miel",
          nombre: "Naranja y miel",
          precio: 4000,
          opciones: {
            titulo: "Glasé",
            lista: [
              "Con glasé cítrico"
            ],
            sin: "Sin glasé",
            ayuda: "Con glasé cítrico o sin glasé",
            visual: "glase"
          },
          colorMasa: "#D99A4C",
          alergenos: []
        },
        {
          id: "budin-xl",
          nombre: "Budín XL",
          precio: 7500,
          aPedido: true,
          enNegocios: false,
          descripcion: "Cualquiera de los sabores clásicos, en tamaño grande.",
          opciones: {
            titulo: "Sabor",
            prefijo: "Sabor: ",
            ayuda: "Limón, naranja y naranja y miel: con o sin glasé cítrico",
            lista: [
              "Vainilla",
              "Limón con glasé cítrico",
              "Limón sin glasé",
              "Naranja con glasé cítrico",
              "Naranja sin glasé",
              "Banana",
              "Marmolado",
              "Chips de chocolate",
              "Naranja y miel con glasé cítrico",
              "Naranja y miel sin glasé"
            ]
          },
          alergenos: []
        }
      ]
    },
    {
      id: "premium",
      pestana: "Premium XL",
      titulo: "Budines",
      cursiva: "Premium XL",
      nota: "• Únicamente con pedido previo •",
      aPedido: true,
      sello: true,
      nombreNegocios: "Budines Premium XL",
      etiquetaNegocios: "A pedido",
      productos: [
        {
          id: "budin-kobu",
          nombre: "Budín Kobu",
          subtitulo: "Budín de Malbec",
          descripcion: "Con chocolate y chips de chocolate.",
          precio: 9500,
          opciones: {
            titulo: "Cobertura",
            prefijo: "Cobertura: ",
            lista: [
              "Chocolate semi-amargo",
              "Chocolate blanco"
            ],
            sin: "Sin cobertura",
            ayuda: "Sin cobertura, o con chocolate semi-amargo o blanco",
            visual: "cobertura"
          },
          colorMasa: "#5E2B26",
          alergenos: [
            "alcohol"
          ]
        },
        {
          id: "budin-blues",
          nombre: "Budín Blues",
          subtitulo: "Budín de vino blanco",
          descripcion: "Con vainilla y chips de chocolate blanco.",
          precio: 9500,
          opciones: {
            titulo: "Cobertura",
            prefijo: "Cobertura: ",
            lista: [
              "Chocolate semi-amargo",
              "Chocolate blanco"
            ],
            sin: "Sin cobertura",
            ayuda: "Sin cobertura, o con chocolate semi-amargo o blanco",
            visual: "cobertura"
          },
          colorMasa: "#E2B462",
          alergenos: [
            "alcohol"
          ]
        },
        {
          id: "cafe-almendras",
          nombre: "Café y almendras",
          precio: 9300,
          colorMasa: "#9A6A43",
          opciones: {
            titulo: "Cobertura",
            prefijo: "Cobertura: ",
            lista: [
              "Chocolate semi-amargo"
            ],
            sin: "Sin cobertura",
            ayuda: "Sin cobertura o con chocolate semi-amargo",
            visual: "cobertura"
          },
          alergenos: [
            "frutos secos"
          ]
        },
        {
          id: "licor-ddl",
          nombre: "Licor de dulce de leche",
          precio: 8300,
          alergenos: [
            "alcohol"
          ]
        }
      ]
    },
    {
      id: "dulce",
      pestana: "Un toque dulce",
      titulo: "Un toque dulce",
      etiquetaNegocios: "Porción o bandeja",
      detalleNegocios: true,
      productos: [
        {
          id: "brownies",
          nombre: "Brownies",
          descripcion: "Cuadraditos húmedos de chocolate intenso.",
          variantes: [
            {
              id: "porcion",
              nombre: "Cada porción",
              precio: 2800
            },
            {
              id: "chico",
              nombre: "Entero chico",
              detalle: "Bandeja 19 × 19 cm, rinde 6 porciones",
              precio: 16000
            },
            {
              id: "grande",
              nombre: "Entero grande",
              detalle: "Bandeja 22 × 28 cm, rinde 8 porciones",
              precio: 20000
            }
          ],
          alergenos: []
        },
        {
          id: "lemonies",
          nombre: "Lemonies",
          etiquetaNegocios: "Por porción",
          descripcion: "Cuadraditos húmedos de limón con glasé cítrico.",
          variantes: [
            {
              id: "porcion",
              nombre: "Cada porción",
              precio: 2500
            }
          ],
          alergenos: []
        },
        {
          id: "kobulitos",
          nombre: "Kobulitos de Malbec",
          etiquetaNegocios: "Por porción",
          descripcion: "Cuadraditos húmedos de chocolate con Malbec.",
          variantes: [
            {
              id: "porcion",
              nombre: "Cada porción",
              precio: 1800
            }
          ],
          alergenos: [
            "alcohol"
          ]
        }
      ]
    },
    {
      id: "salado",
      pestana: "Alguito salado",
      titulo: "Alguito salado",
      etiquetaNegocios: "Bolsita x 8 unidades",
      detalleNegocios: true,
      productos: [
        {
          id: "skoncitos",
          nombre: "Skoncitos de queso",
          descripcion: "Bocaditos tiernos y mantecosos con intenso sabor a queso.",
          variantes: [
            {
              id: "bolsita",
              nombre: "Cada bolsita",
              detalle: "8 unidades",
              precio: 2600
            }
          ],
          alergenos: []
        }
      ]
    },
    {
      id: "combos",
      pestana: "Cajas y combos",
      titulo: "Cajas",
      cursiva: "y combos",
      productos: []
    }
  ],
  resenas: [
    {
      autor: "Natalia Otero",
      texto: "Todo delicioso!!! Mi favorito es el brownie! Dani es impecable, muy dedicada, super cálida y cocina como los dioses!! La super recomiendo, se nota la pasión en todo lo que hace!!🙌💓 Sigan así!!"
    },
    {
      autor: "Juan Lopez",
      texto: "Probé los budines y brownies y son una locura Súper ricos, frescos y con un sabor increíble. Se nota la calidad y el amor que le pone a cada cosa. ¡Recomendadísimos! ❤"
    },
    {
      autor: "Candela Del Curto",
      texto: "Muy rico y presentable! Super resolutiva, ya que encargué justo sobre la hora en que necesitaba, e hizo lo posible para entregarme a tiempo."
    },
    {
      autor: "Jime Torrico",
      texto: "He comprado varias veces… la verdad riquísimo, porciones grandes y a un precio amigable. El brownie espectacular!"
    },
    {
      autor: "Agustina Velazquez",
      texto: "Son súper ricos , siempre a horario y calentitos , te salvan la tarde para tomar mate y chismear con amigas 🫶🏻♥️"
    },
    {
      autor: "Yasmin Castellano",
      texto: "La verdad excelentes productos la calidad y la atención todo muy rico, fresco y a un muy buen precio se los recomiendo"
    },
    {
      autor: "Beto Moruzzi",
      texto: "Es el mejor brownie, que comí. Recomendable 100%"
    },
    {
      autor: "Sol Renata Hazeldine",
      texto: "El mejor brownie que comí en la vida, súper recomendado"
    },
    {
      autor: "Arian Andrés Moreyra",
      texto: "Nanana, lo que juegan estos budines no tiene nombre\nNi hablar de los skoncitos, tremendos…"
    },
    {
      autor: "Agustin Perafan",
      texto: "Los mejores scones del mundooo. Muy amables los chicos en especial Juan, gran tipo"
    },
    {
      autor: "Ignacio Vitelli",
      texto: "Buena atención y muy rico el budín de Limón!"
    },
    {
      autor: "Santiago Ruibal",
      texto: "Muy rico y buena atención!\nSkones y Brownie excelentes\nVolveré a comprar ⭐️"
    },
    {
      autor: "Joscy",
      texto: "Recomiendo mucho los sconcitos de queso , no se los pierdan ❤️😊"
    },
    {
      autor: "María del Rosario Nuñez",
      texto: "Todo excelente, los brownies son un espectáculo ❤️"
    },
    {
      autor: "Dylan Moruzzi",
      texto: "compré varias veces y nunca me decepcionó, los budines son buenisimos"
    },
    {
      autor: "Sofia Fassio",
      texto: "La atención excelente y la calidad de diez, súper ligera para una merienda"
    },
    {
      autor: "Yarelis Sanchez",
      texto: "Son demasiado divinos y siempre fresquitos.. súper recomiendo"
    },
    {
      autor: "Carolina Fernandez",
      texto: "Super rico! Bien casero todo, y super amable en la atención"
    },
    {
      autor: "Torrico Shop",
      texto: "Muy rico todo, super amable la atención"
    },
    {
      autor: "Agustin Moreyra",
      texto: "10/10 excelente atención y todo muy rico! Prueben los budines!!!"
    },
    {
      autor: "Hector Enrique Espinoza",
      texto: "Excelente atención, y muy rico todo los recomiendo."
    },
    {
      autor: "Caterina Guarnuccio",
      texto: "Muy rico y atención rápida"
    },
    {
      autor: "Isabel Nieto",
      texto: "Es excelente!! Muy ricooo!!"
    },
    {
      autor: "Magali Ibarra",
      texto: "Todo muy rico!! Muy recomendable"
    },
    {
      autor: "Guadalupe Molina",
      texto: "muy rico todoo!!"
    },
    {
      autor: "Ignacio Paolantonio",
      texto: "Muy rico todo"
    }
  ]
};
