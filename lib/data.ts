// src/lib/data.ts

export type Product = {
  id: string
  name: string
  price: number
  image: string
  gallery: string[]
  category: string
  description: string
  details: string[]
  material: string
  sizes: { size: string; available: boolean }[]
}

export const products: Record<string, Product> = {
  "hoodie-nike-tech-fleece-stussy": {
    id: "hoodie-nike-tech-fleece-stussy",
    name: "Nike Tech Fleece x Stüssy Hoodie",
    price: 38000,
    image: "/images/product-hoodie.jpg",
    gallery: [
      "/images/product-hoodie.jpg",
      "/images/product-hoodie.jpg",
      "/images/product-hoodie.jpg",
      "/images/product-hoodie.jpg",
    ],
    category: "Hoodies",
    description:
      "Hoodie oversized de corte premium con capucha ajustable y bolsillo canguro. Fabricado con algodon organico de alta calidad para maxima comodidad urbana.",
    details: [
      "100% Algodon Organico",
      "Capucha con cordon premium",
      "Bolsillo canguro funcional",
      "Costuras reforzadas",
      "Lavado a maquina",
    ],
    material: "100% Algodon Organico Premium",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: false },
      { size: "XXL", available: false },
    ],
  },

  "Valley-Dreams-tshirt": {
    id: "Valley-Dreams-tshirt",
    name: "Valley Dreams",
    price: 18900,
    image: "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.37.18_AM_fmplzh.jpg",
    gallery: [
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.37.18_AM_fmplzh.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.37.18_AM_fmplzh.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.37.18_AM_fmplzh.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.37.18_AM_fmplzh.jpg",
    ],
    category: "Camisetas",
    description:
      "Camiseta esencial de corte relajado con cuello redondo reforzado. El basico perfecto para cualquier outfit urbano.",
    details: [
      "100% Algodon Premium",
      "Cuello reforzado",
      "Costuras dobles",
      "Etiqueta impresa",
      "Lavado a maquina",
    ],
    material: "100% Algodon Premium",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: true },
      { size: "M", available: false },
      { size: "L", available: false },
      { size: "XL", available: false },
      { size: "XXL", available: false },
    ],
  },

  "Jersey-Black-21": {
    id: "Jersey-Black-21",
    name: "Jersey Black 21",
    price: 12000,
    image: "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.38.46_AM_atsb26.jpg",
    gallery: [
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.38.46_AM_atsb26.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.38.46_AM_atsb26.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.38.46_AM_atsb26.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.38.46_AM_atsb26.jpg",
    ],
    category: "Camisetas",
    description:
      "Camiseta esencial de corte relajado con cuello redondo reforzado. El basico perfecto para cualquier outfit urbano.",
    details: [
      "100% Algodon Premium",
      "Cuello reforzado",
      "Costuras dobles",
      "Etiqueta impresa",
      "Lavado a maquina",
    ],
    material: "100% Algodon Premium",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: false },
      { size: "M", available: true },
      { size: "L", available: false },
      { size: "XL", available: false },
      { size: "XXL", available: false },
    ],
  },
  "Stussy-Polo-White": {
    id: "Stussy-Polo-White",
    name: "Stüssy Polo White",
    price: 18900,
    image: "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.39.29_AM_gdctrn.jpg",
    gallery: [
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.39.29_AM_gdctrn.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.39.29_AM_gdctrn.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.39.29_AM_gdctrn.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.39.29_AM_gdctrn.jpg",
    ],
    category: "Camisetas",
    description:
      "Camiseta esencial de corte relajado con cuello redondo reforzado. El basico perfecto para cualquier outfit urbano.",
    details: [
      "100% Algodon Premium",
      "Cuello reforzado",
      "Costuras dobles",
      "Etiqueta impresa",
      "Lavado a maquina",
    ],
    material: "100% Algodon Premium",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: false },
      { size: "XXL", available: false },
    ],
  },
  "Stussy-Polo-Black": {
    id: "Stussy-Polo-Black",
    name: "Stüssy Polo Black",
    price: 18900,
    image: "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.40.13_AM_1_k95cin.jpg",
    gallery: [
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.40.13_AM_1_k95cin.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.40.13_AM_1_k95cin.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.40.13_AM_1_k95cin.jpg",
      "https://res.cloudinary.com/dks9ffhea/image/upload/v1769643691/WhatsApp_Image_2026-01-28_at_11.40.13_AM_1_k95cin.jpg",
    ],
    category: "Camisetas",
    description:
      "Camiseta esencial de corte relajado con cuello redondo reforzado. El basico perfecto para cualquier outfit urbano.",
    details: [
      "100% Algodon Premium",
      "Cuello reforzado",
      "Costuras dobles",
      "Etiqueta impresa",
      "Lavado a maquina",
    ],
    material: "100% Algodon Premium",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: false },
      { size: "XXL", available: false },
    ],
  },

  "cargo-pants-urban": {
    id: "cargo-pants-urban",
    name: "Cargo Urban",
    price: 79.99,
    image: "/images/product-pants.jpg",
    gallery: [
      "/images/product-pants.jpg",
      "/images/product-pants.jpg",
      "/images/product-pants.jpg",
      "/images/product-pants.jpg",
    ],
    category: "Pantalones",
    description:
      "Pantalon cargo con multiples bolsillos funcionales y corte comodo. Disenado para el movimiento urbano.",
    details: [
      "98% Algodon, 2% Elastano",
      "6 bolsillos funcionales",
      "Cintura elastica ajustable",
      "Corte relaxed tapered",
      "Lavado a maquina",
    ],
    material: "98% Algodon, 2% Elastano",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
      { size: "XXL", available: false },
    ],
  },

  "bomber-jacket-night": {
    id: "bomber-jacket-night",
    name: "Bomber Night",
    price: 129.99,
    image: "/images/product-jacket.jpg",
    gallery: [
      "/images/product-jacket.jpg",
      "/images/product-jacket.jpg",
      "/images/product-jacket.jpg",
      "/images/product-jacket.jpg",
    ],
    category: "Chaquetas",
    description:
      "Chaqueta bomber clasica con acabado mate premium. Perfecta para las noches urbanas.",
    details: [
      "Exterior: Nylon Premium",
      "Forro: Poliester suave",
      "Cremallera YKK",
      "Punos y cintura elasticos",
      "Lavado en seco recomendado",
    ],
    material: "Nylon Premium / Poliester",
    sizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: true },
      { size: "XXL", available: true },
    ],
  },
}

export const allProducts = Object.values(products).map(
  ({ id, name, price, image, category }) => ({
    id,
    name,
    price,
    image,
    category,
  })
)
