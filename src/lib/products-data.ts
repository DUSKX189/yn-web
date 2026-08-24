export type Brand = {
  name: string;
  products: string[];
};

export const BRANDS: Brand[] = [
  {
    name: "EME",
    products: [
      "Hylauronic Intensive Serum",
      "Purifyn Care",
      "Essential Care",
      "Miracieyz Contour",
      "Essential Cleanser",
      "Purifying Cleanser",
    ],
  },
  {
    name: "DLUCANNI",
    products: [
      "Felbo Relax Plus",
      "K-Lift",
      "Vita A Serum",
      "Sun Care SPF50+ Protección Natural",
      "Excell10 Loción Tónica",
      "Glas Booster",
      "Triple A Loción Equilibrante Queratolítico",
      "Matipur Night",
      "Matipur Day",
      "Vita C 2 Pure",
      "Matipur Serum",
      "Vita C Booster",
      "Exoionic Cream",
      "Serum Coenzima Q10 Drops",
    ],
  },
  {
    name: "INTEGRA",
    products: [
      "Jalea Real Day Cream",
      "Azulene Cream",
      "Loción de Azuleno",
      "Leche Desmaquillante",
      "Sun Defense Emulsión de Zanahorias",
      "Sun Defense Foto Protector Extreme",
      "Natural Glow Serum C",
      "Natural Cream Special C",
      "Sun Defense Magic Glow Mist",
      "Active Cream",
      "Active Contorno de Ojos",
    ],
  },
  {
    name: "GRANDE COSMETICS",
    products: ["Grande Lips", "Grande Lash-MD", "Grande Brow 2-in-1"],
  },
];

export type CategoryProduct = {
  name: string;
  brand: string;
};

export type ProductCategory = {
  name: string;
  items: CategoryProduct[];
};

// Clasificación orientativa deducida a partir del nombre de cada producto.
// Pendiente de confirmar con el proveedor antes de darla por definitiva.
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    name: "Limpieza y desmaquillado",
    items: [
      { name: "Essential Cleanser", brand: "EME" },
      { name: "Purifying Cleanser", brand: "EME" },
      { name: "Purifyn Care", brand: "EME" },
      { name: "Leche Desmaquillante", brand: "INTEGRA" },
    ],
  },
  {
    name: "Tónicos y lociones",
    items: [
      { name: "Excell10 Loción Tónica", brand: "DLUCANNI" },
      {
        name: "Triple A Loción Equilibrante Queratolítico",
        brand: "DLUCANNI",
      },
      { name: "Felbo Relax Plus", brand: "DLUCANNI" },
      { name: "Loción de Azuleno", brand: "INTEGRA" },
    ],
  },
  {
    name: "Sérums",
    items: [
      { name: "Hylauronic Intensive Serum", brand: "EME" },
      { name: "Vita A Serum", brand: "DLUCANNI" },
      { name: "Matipur Serum", brand: "DLUCANNI" },
      { name: "Vita C 2 Pure", brand: "DLUCANNI" },
      { name: "Vita C Booster", brand: "DLUCANNI" },
      { name: "Glas Booster", brand: "DLUCANNI" },
      { name: "Serum Coenzima Q10 Drops", brand: "DLUCANNI" },
      { name: "Natural Glow Serum C", brand: "INTEGRA" },
    ],
  },
  {
    name: "Cremas y tratamientos",
    items: [
      { name: "Essential Care", brand: "EME" },
      { name: "K-Lift", brand: "DLUCANNI" },
      { name: "Matipur Night", brand: "DLUCANNI" },
      { name: "Matipur Day", brand: "DLUCANNI" },
      { name: "Exoionic Cream", brand: "DLUCANNI" },
      { name: "Jalea Real Day Cream", brand: "INTEGRA" },
      { name: "Azulene Cream", brand: "INTEGRA" },
      { name: "Natural Cream Special C", brand: "INTEGRA" },
      { name: "Active Cream", brand: "INTEGRA" },
    ],
  },
  {
    name: "Contorno de ojos",
    items: [
      { name: "Miracieyz Contour", brand: "EME" },
      { name: "Active Contorno de Ojos", brand: "INTEGRA" },
    ],
  },
  {
    name: "Protección solar",
    items: [
      {
        name: "Sun Care SPF50+ Protección Natural",
        brand: "DLUCANNI",
      },
      { name: "Sun Defense Emulsión de Zanahorias", brand: "INTEGRA" },
      { name: "Sun Defense Foto Protector Extreme", brand: "INTEGRA" },
      { name: "Sun Defense Magic Glow Mist", brand: "INTEGRA" },
    ],
  },
  {
    name: "Cejas, pestañas y labios",
    items: [
      { name: "Grande Lips", brand: "GRANDE COSMETICS" },
      { name: "Grande Lash-MD", brand: "GRANDE COSMETICS" },
      { name: "Grande Brow 2-in-1", brand: "GRANDE COSMETICS" },
    ],
  },
];
