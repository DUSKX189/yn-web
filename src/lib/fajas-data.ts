export type FajaProduct = {
  ref: string;
  name: string;
  images: string[];
  tagline: string;
  description: string;
  features: string[];
  uses: string[];
  sizes: string[];
  colors: string[];
};

export type SizeChartRow = {
  size: string;
  waist: string;
  waistIn: string;
  hip: string;
  hipIn: string;
  upperBust: string;
  upperBustIn: string;
  underBust: string;
  underBustIn: string;
  sleeve34: string;
  sleeve34In: string;
  longSleeve: string;
  longSleeveIn: string;
};

export const SIZE_CHART: SizeChartRow[] = [
  {
    size: "XS",
    waist: "60-66",
    waistIn: "23.6-26",
    hip: "74-82",
    hipIn: "29.1-32.3",
    upperBust: "70-78",
    upperBustIn: "27.6-30.7",
    underBust: "64-72",
    underBustIn: "25.2-28.4",
    sleeve34: "35",
    sleeve34In: "13.8",
    longSleeve: "47",
    longSleeveIn: "18.5",
  },
  {
    size: "S",
    waist: "66-72",
    waistIn: "26-28.4",
    hip: "82-90",
    hipIn: "32.3-35.4",
    upperBust: "78-86",
    upperBustIn: "30.7-33.1",
    underBust: "72-80",
    underBustIn: "28.4-31.5",
    sleeve34: "35",
    sleeve34In: "13.8",
    longSleeve: "47",
    longSleeveIn: "18.5",
  },
  {
    size: "M",
    waist: "72-78",
    waistIn: "28.4-30.7",
    hip: "90-98",
    hipIn: "35.4-38.6",
    upperBust: "86-92",
    upperBustIn: "33.1-36.2",
    underBust: "80-88",
    underBustIn: "31.5-34.7",
    sleeve34: "35.5",
    sleeve34In: "14",
    longSleeve: "47.5",
    longSleeveIn: "18.7",
  },
  {
    size: "L",
    waist: "78-84",
    waistIn: "30.7-33.1",
    hip: "98-106",
    hipIn: "38.6-41.7",
    upperBust: "92-100",
    upperBustIn: "36.2-39.4",
    underBust: "88-97",
    underBustIn: "34.7-38.2",
    sleeve34: "36",
    sleeve34In: "14.2",
    longSleeve: "48",
    longSleeveIn: "18.9",
  },
  {
    size: "XL",
    waist: "84-90",
    waistIn: "33.1-35.4",
    hip: "106-114",
    hipIn: "41.7-44.9",
    upperBust: "100-109",
    upperBustIn: "39.4-42.9",
    underBust: "97-106",
    underBustIn: "38.2-41.7",
    sleeve34: "36.5",
    sleeve34In: "14.4",
    longSleeve: "48.5",
    longSleeveIn: "19.1",
  },
  {
    size: "XXL",
    waist: "90-96",
    waistIn: "35.4-37.8",
    hip: "114-120",
    hipIn: "44.9-47.2",
    upperBust: "109-118",
    upperBustIn: "42.9-46.5",
    underBust: "106-115",
    underBustIn: "41.7-45.3",
    sleeve34: "37",
    sleeve34In: "14.6",
    longSleeve: "49",
    longSleeveIn: "19.3",
  },
  {
    size: "XXXL",
    waist: "96-102",
    waistIn: "37.8-40.2",
    hip: "120-128",
    hipIn: "47.2-50.4",
    upperBust: "118-127",
    upperBustIn: "46.5-50",
    underBust: "115-125",
    underBustIn: "45.3-49.2",
    sleeve34: "37.5",
    sleeve34In: "14.8",
    longSleeve: "49.5",
    longSleeveIn: "19.5",
  },
];

export const FAJAS_PRODUCTS: FajaProduct[] = [
  {
    ref: "C1",
    name: "Peggy",
    images: [
      "/images/fajas/faja-c1-peggy.jpg",
      "/images/fajas/faja-c1-peggy-2.jpg",
      "/images/fajas/faja-c1-peggy-3.jpg",
      "/images/fajas/faja-c1-peggy-4.jpg",
      "/images/fajas/faja-c1-peggy-5.jpg",
    ],
    tagline: "Alta compresión con tirantes anchos",
    description:
      "Faja de alta compresión con tirantes anchos, 3 niveles de corchetes y cremallera en la zona renal. Moldea la cintura y levanta glúteos.",
    features: [
      "Alta compresión firme y efectiva en abdomen y cintura",
      "Tirantes anchos para soporte adicional en espalda y hombros",
      "3 niveles de corchetes ajustables",
      "Cremallera en la zona renal para facilitar la colocación",
      "Moldea la cintura y levanta los glúteos",
    ],
    uses: ["Post quirúrgico", "Post parto", "Uso diario"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"],
    colors: ["Beige", "Negro"],
  },
  {
    ref: "C2",
    name: "Leire",
    images: [
      "/images/fajas/faja-c2-leire.jpg",
      "/images/fajas/faja-c2-leire-2.jpg",
      "/images/fajas/faja-c2-leire-3.jpg",
      "/images/fajas/faja-c2-leire-4.jpg",
      "/images/fajas/faja-c2-leire-5.jpg",
    ],
    tagline: "Short levanta glúteos con cremallera",
    description:
      "Faja short levanta glúteos con compresión en el abdomen. Cremallera en zona personal, corte alto y encaje de silicona para mayor adherencia en las piernas.",
    features: [
      "Levanta glúteos y comprime el abdomen",
      "Cremallera en zona personal para facilidad al vestir",
      "Corte alto para mayor ajuste en el abdomen",
      "Encaje de silicona: evita que la faja se enrolle",
    ],
    uses: ["Uso diario", "Post quirúrgico", "Post parto"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"],
    colors: ["Beige", "Negro"],
  },
  {
    ref: "C3",
    name: "Sofía",
    images: [
      "/images/fajas/faja-c3-sofia-3.jpg",
      "/images/fajas/faja-c3-sofia-4.jpg",
    ],
    tagline: "Short levanta glúteos, corte alto",
    description:
      "Faja short levanta glúteos con compresión en el abdomen. Corte alto para mayor ajuste y encaje de silicona para mayor adherencia en las piernas.",
    features: [
      "Levanta glúteos y define la silueta",
      "Corte alto: ajuste excepcional en el abdomen",
      "Encaje de silicona con adherencia perfecta, sin enrollamientos",
    ],
    uses: ["Uso diario", "Post quirúrgico", "Post parto"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"],
    colors: ["Beige", "Negro"],
  },
  {
    ref: "C4",
    name: "Brida",
    images: [
      "/images/fajas/faja-c4-brida.jpg",
      "/images/fajas/faja-c4-brida-2.jpg",
      "/images/fajas/faja-c4-brida-3.jpg",
      "/images/fajas/faja-c4-brida-4.jpg",
    ],
    tagline: "Body moldeador reductor sin costuras",
    description:
      "Body reductor abdominal que se adapta como una segunda piel gracias a su elasticidad. Tirantes ajustables y diseño de sujetador que se adapta a cualquier copa.",
    features: [
      "Reducción abdominal con ajuste elástico total",
      "Tirantes ajustables y diseño de sujetador universal",
      "Tela elástica de alta calidad, suave y duradera",
      "Diseño invisible sin costuras bajo la ropa",
      "Abertura práctica en la entrepierna",
    ],
    uses: ["Uso diario", "Post quirúrgico", "Post parto"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"],
    colors: ["Beige", "Negro"],
  },
  {
    ref: "C5",
    name: "Alessia",
    images: [
      "/images/fajas/faja-c5-alessia.jpg",
      "/images/fajas/faja-c5-alessia-2.jpg",
      "/images/fajas/faja-c5-alessia-3.jpg",
    ],
    tagline: "Body moldeador estilo tanga",
    description:
      "Body moldeador reductor abdominal que se adapta como una segunda piel. Tirantes ajustables, diseño de sujetador universal y estilo tanga con apertura práctica.",
    features: [
      "Ajuste como segunda piel sin limitar el movimiento",
      "Tirantes ajustables y diseño de sujetador para cualquier copa",
      "Estilo tanga con dos ganchos en la entrepierna",
    ],
    uses: ["Uso diario", "Post quirúrgico", "Post parto"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colors: ["Beige", "Negro"],
  },
];
