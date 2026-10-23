export interface Recipe {
  id: string;
  title: string;
  shortTitle: string;
  image: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  difficulty: "Fácil" | "Media" | "Difícil";
  difficultyLevel: 1 | 2 | 3;
  servings: string;
  category: string;
  tagColor: string;
  description: string;
  ingredients: {
    item: string;
    amount?: string;
  }[];
  steps: {
    number: number;
    title?: string;
    instruction: string;
  }[];
}

export const recipes: Recipe[] = [
  {
    id: "chilaquiles-verdes",
    title: "Chilaquiles verdes",
    shortTitle: "Chilaquiles Verdes",
    image: "/img/recetas/chilaquiles_verdes.jpg",
    prepTime: "20 min.",
    cookTime: "15 min.",
    totalTime: "35 min.",
    difficulty: "Media",
    difficultyLevel: 2,
    servings: "Porciones: 4",
    category: "Desayunos",
    tagColor: "#06D6A0",
    description: "Auténticos chilaquiles verdes con totopos crujientes bañados en salsa verde de tomatillo cocido con chile serrano, acompañados de pechuga de pollo deshebrada, queso fresco y Media Crema.",
    ingredients: [
      { item: "Gramos de tomates verdes cocidos", amount: "600" },
      { item: "de cebolla mediana cocida", amount: "1/4" },
      { item: "dientes de ajo cocidos", amount: "2" },
      { item: "chiles serrano cocidos", amount: "2" },
      { item: "tazas de agua", amount: "1 1/2" },
      { item: "ramas de cilantro desinfectado", amount: "5" },
      { item: "cucharadas de consomé de pollo en polvo", amount: "1 1/2" },
      { item: "cucharada de aceite vegetal", amount: "1" },
      { item: "bolsa de totopos (350 g)", amount: "1" },
      { item: "pechuga de pollo cocida y deshebrada (500 g)", amount: "1" },
      { item: "envase de Media Crema (190 g), refrigerada", amount: "1" },
      { item: "de queso fresco desmoronado", amount: "200 g" }
    ],
    steps: [
      {
        number: 1,
        title: "Elaborar la salsa verde",
        instruction: "Para comprender cómo hacer chilaquiles verdes, el primer paso consiste en elaborar la salsa verde. Los tomates, cebolla, ajo, chiles, agua, cilantro y consomé se integran en la licuadora hasta obtener una mezcla homogénea. Posteriormente, el aceite se calienta y la salsa se cocina hasta que suelte hervor, desarrollando color y aroma."
      },
      {
        number: 2,
        title: "Incorporar los totopos",
        instruction: "Los totopos se incorporan a la salsa caliente y se mezclan suavemente para que absorban parte del líquido sin perder completamente su textura. Este punto define si se prefieren chilaquiles más crujientes o más suaves."
      },
      {
        number: 3,
        title: "Montaje y servicio",
        instruction: "Al servir, los chilaquiles en salsa verde se complementan con pollo deshebrado, queso fresco y un toque de Media Crema. El resultado son chilaquiles verdes con pollo equilibrados en sabor y consistencia."
      }
    ]
  },
  {
    id: "camaron-capeado",
    title: "Cómo hacer camarones capeados estilo Baja California",
    shortTitle: "Camarones Capeados",
    image: "/img/recetas/camaron_capeado.jpg",
    prepTime: "25 min.",
    cookTime: "15 min.",
    totalTime: "40 min.",
    difficulty: "Media",
    difficultyLevel: 2,
    servings: "Para personas: 4",
    category: "Mariscos",
    tagColor: "#FF6B6B",
    description: "Camarones capeados estilo Baja California, crujientes y dorados, ideales para servir en tacos con tortillas de maíz, col morada, pico de gallo y salsa chipotle.",
    ingredients: [
      { item: "Camarones medianos pelados y desvenados", amount: "500 g" },
      { item: "taza de harina de trigo", amount: "1" },
      { item: "huevo", amount: "1" },
      { item: "taza de cerveza clara bien fría", amount: "1/2" },
      { item: "cucharadita de polvo de hornear", amount: "1" },
      { item: "Sal y pimienta al gusto", amount: "" },
      { item: "Aceite vegetal para freír", amount: "" },
      { item: "Tortillas de maíz", amount: "" },
      { item: "Col morada", amount: "" },
      { item: "Pico de gallo", amount: "" },
      { item: "Crema o aderezo de mayonesa con chipotle", amount: "" },
      { item: "Limones partidos", amount: "" }
    ],
    steps: [
      {
        number: 1,
        title: "Secar y sazonar",
        instruction: "Seca bien los camarones con papel absorbente y sazónalos con sal y pimienta."
      },
      {
        number: 2,
        title: "Preparar la mezcla del capeado",
        instruction: "Prepara la mezcla del capeado: en un tazón combina harina, polvo para hornear y una pizca de sal. Agrega el huevo y la cerveza fría poco a poco, mezclando sin batir demasiado, hasta lograr una textura semilíquida."
      },
      {
        number: 3,
        title: "Calentar el aceite",
        instruction: "Calienta suficiente aceite en una sartén profunda."
      },
      {
        number: 4,
        title: "Freír los camarones",
        instruction: "Pasa cada camarón por la mezcla de capeado y fríelos hasta que estén dorados y crujientes, unos 3 o 4 minutos por lado. Retíralos y colócalos en papel absorbente."
      },
      {
        number: 5,
        title: "Servir en tacos",
        instruction: "Sirve los camarones capeados en tortillas de maíz calientes con col rallada, pico de gallo, un toque de crema o chipotle y unas gotas de limón."
      }
    ]
  }
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

export function getAllRecipes(): Recipe[] {
  return recipes;
}
