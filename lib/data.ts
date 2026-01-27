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
  fit: string
  style: string
  sizes: { size: string; available: boolean }[]
}

export const products: Record<string, Product> = {
  "hoodie-oversized-black": {
    id: "hoodie-oversized-black",
    name: "Hoodie Oversized",
    price: 89.99,
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
    fit: "Oversized / Relaxed",
    style: "Urban Streetwear",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: false },
      { size: "XXL", available: true },
    ],
  },

  "tshirt-essential-black": {
    id: "tshirt-essential-black",
    name: "Camiseta Essential",
    price: 45.99,
    image: "/images/product-tshirt.jpg",
    gallery: [
      "/images/product-tshirt.jpg",
      "/images/product-tshirt.jpg",
      "/images/product-tshirt.jpg",
      "/images/product-tshirt.jpg",
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
    fit: "Regular / Relaxed",
    style: "Essential Streetwear",
    sizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: false },
      { size: "XL", available: true },
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
    fit: "Relaxed Tapered",
    style: "Urban Cargo",
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
    fit: "Regular",
    style: "Night Bomber",
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
