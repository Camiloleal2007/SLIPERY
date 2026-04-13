// src/lib/data.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  gallery: string[];
  category: "topwear" | "bottomwear" | "conjuntos";
  description: string;
  details: string[];
  material: string;
  sizes: { size: string; available: boolean }[];
};

// 🔥 BASE DE DATOS PRINCIPAL (UNA SOLA LISTA)
export const products: Product[] = [
  // 🔥 EJEMPLO TOPWEAR
  {
    id: "comprension-larga-topwear-negra",
    name: "Camiseta De Comprensión Larga Negra",
    price: 60.000,
    image: "https://s.alicdn.com/@sc04/kf/H0629038ce05e41f99819c011a6a2c4484.jpg?avif=close&webp=close",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/H0629038ce05e41f99819c011a6a2c4484.jpg?avif=close&webp=close"
    ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },

  {
    id: "comprension-larga-topwear-azul",
    name: "Camiseta De Comprensión Larga Azul",
    price: 60.000,
    image: "https://s.alicdn.com/@sc04/kf/H11eb846a75914400a07167102cb0644fR.jpg?avif=close&webp=close",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/H11eb846a75914400a07167102cb0644fR.jpg?avif=close&webp=close"
    ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },

  {
    id: "comprension-larga-topwear-blanca",
    name: "Camiseta De Comprensión Larga Blanca",
    price: 60.000,
    image: "https://s.alicdn.com/@sc04/kf/H3577548e6a6e473b92bf6e090ae8ea20n.jpg?avif=close&webp=close",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/H3577548e6a6e473b92bf6e090ae8ea20n.jpg?avif=close&webp=close"
    ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },

  {
    id: "comprension-larga-topwear-morada",
    name: "Camiseta De Comprensión Larga Morada",
    price: 60.000,
    image: "https://s.alicdn.com/@sc04/kf/Hd817733d5a3c4a1a8995f442508d6f92D.jpg",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/Hd817733d5a3c4a1a8995f442508d6f92D.jpg"
    ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },

  {
    id: "comprension-larga-topwear-gris",
    name: "Camiseta De Comprensión Larga Gris",
    price: 60.000,
    image: "https://s.alicdn.com/@sc04/kf/H6697fc93c9e74d09b093f981be0ee1d6q.jpg",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/H6697fc93c9e74d09b093f981be0ee1d6q.jpg"
    ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },

  {
    id: "comprension-corta-topwear-negra",
    name: "Camiseta De Comprensión Corta Negra",
    price: 40.000,
    image: "https://s.alicdn.com/@sc04/kf/Hd19af76ae3c5410b982b1f8be4a0e32do.jpg",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/Hd19af76ae3c5410b982b1f8be4a0e32do.jpg"
    ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },
  
  {
    id: "comprension-corta-topwear-roja",
    name: "Camiseta De Comprensión Corta Roja",
    price: 40.000,
    image: "https://s.alicdn.com/@sc04/kf/H082de8e4f8c94b95a28a809ab974b618L.jpg",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/H082de8e4f8c94b95a28a809ab974b618L.jpg"
    ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },

    {
    id: "comprension-corta-topwear-morada",
    name: "Camiseta De Comprensión Corta Morada",
    price: 40.000,
    image: "https://s.alicdn.com/@sc04/kf/H7898814c54a44d3d8f9a94ff755a82fdR.jpg",
    gallery: [
        "https://s.alicdn.com/@sc04/kf/H082de8e4f8c94b95a28a809ab974b618L.jpg"
      ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },

    {
    id: "comprension-corta-topwear-azul",
    name: "Camiseta De Comprensión Corta Azul",
    price: 40.000,
    image: "https://s.alicdn.com/@sc04/kf/H48c4913f33404ff2af3b7dad0398cf6e3.jpg",
    gallery: [
        "https://s.alicdn.com/@sc04/kf/H48c4913f33404ff2af3b7dad0398cf6e3.jpg"
      ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },
  {
    id: "comprension-corta-topwear-blanca-negra",
    name: "Camiseta De Comprensión Corta Blanca/Negra",
    price: 40.000,
    image: "https://s.alicdn.com/@sc04/kf/Hc2508865d54141dd90f9f19ed460e2edn.jpg",
    gallery: [
        "https://s.alicdn.com/@sc04/kf/Hc2508865d54141dd90f9f19ed460e2edn.jpg"
      ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },
  {
    id: "comprension-corta-topwear-blanca-roja",
    name: "Camiseta De Comprensión Corta Blanca/Roja",
    price: 40.000,
    image: "https://s.alicdn.com/@sc04/kf/Hef0106d536cf4c5cb81d5d68a83b53205.jpg",
    gallery: [
        "https://s.alicdn.com/@sc04/kf/Hef0106d536cf4c5cb81d5d68a83b53205.jpg"
      ],
    category: "topwear",
    description: "Camiseta urbana con diseño gráfico abstracto que destaca por su estilo moderno y auténtico 🔥. Confeccionada en algodón premium, ofrece comodidad, transpirabilidad y alta durabilidad 💯. Ideal para elevar cualquier outfit streetwear con un toque distintivo 👕.",
    details: [
      "Comprimido",
      "Secado rápido",
      "Transpirable",
      "Antipilling"
    ],
    material: "Lycra / poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: false },
    ],
  },

  // 🔥 EJEMPLO BOTTOMWEAR
  {
    id: "pantalon-bottomwear-blanco",
    name: "Pantalón Cargo Blanco",
    price: 80.000,
    image: "https://s.alicdn.com/@sc04/kf/Hb1f8a0ffba274e64aa14a01ace3f9739J.jpg",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/Hb1f8a0ffba274e64aa14a01ace3f9739J.jpg"
    ],
    category: "bottomwear",
    description: "Pantalón urbano de corte wide-leg con diseño gráfico en alto contraste que eleva cualquier outfit street. 🖤🔥 Su ajuste relajado brinda comodidad total, mientras que los estampados le dan una vibra agresiva y moderna. Perfecto para destacar con estilo y actitud. ⚡",
    details: [
      "100% poliéster",
      "Cintura elástica con cordón",
    ],
    material: "100% poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: false
       },
      { size: "L", available: true },
    ],
  },

  {
    id: "pantalon-bottomwear-negro",
    name: "Pantalón Cargo Negro",
    price: 80.000,
    image: "https://s.alicdn.com/@sc04/kf/H082f063d6547432bbdd98b1d4825f7d86.jpg",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/H082f063d6547432bbdd98b1d4825f7d86.jpg"
    ],
    category: "bottomwear",
    description: "Pantalón urbano de corte wide-leg con diseño gráfico en alto contraste que eleva cualquier outfit street. 🖤🔥 Su ajuste relajado brinda comodidad total, mientras que los estampados le dan una vibra agresiva y moderna. Perfecto para destacar con estilo y actitud. ⚡",
    details: [
      "100% poliéster",
      "Cintura elástica con cordón",
    ],
    material: "100% poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
    ],
  },

  
  {
    id: "pantalon-bottomwear-gris",
    name: "Pantalón Cargo Gris",
    price: 80.000,
    image: "https://s.alicdn.com/@sc04/kf/Hb96361e4e0c34a8997ac36b01ad50b00e.jpg",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/Hb96361e4e0c34a8997ac36b01ad50b00e.jpg"
    ],
    category: "bottomwear",
    description: "Pantalón urbano de corte wide-leg con diseño gráfico en alto contraste que eleva cualquier outfit street. 🖤🔥 Su ajuste relajado brinda comodidad total, mientras que los estampados le dan una vibra agresiva y moderna. Perfecto para destacar con estilo y actitud. ⚡",
    details: [
      "100% poliéster",
      "Cintura elástica con cordón",
    ],
    material: "100% poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: false },
      { size: "L", available: true },
    ],
  },

  // 🔥 EJEMPLO CONJUNTO
  {
    id: "conjunto-joggers-blanco",
    name: "Conjunto Joggers Blanco",
    price: 120.000,
    image: "https://s.alicdn.com/@sc04/kf/Ha1739e2f831948719700ea60126fa9a2F.jpg",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/Ha1739e2f831948719700ea60126fa9a2F.jpg",
    ],
    category: "conjuntos",
    description: "Conjunto personalizado de joggers a rayas para hombre; traje deportivo casual para jóvenes, estampado por sublimación; apto para primavera, otoño, verano e invierno.",
    details: [
      "Incluye hoodie + pantalón",
      "Tela premium",
    ],
    material: "Algodón / Poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: true },
      { size: "L", available: true },
    ],
  },

  {
    id: "conjunto-joggers-negro",
    name: "Conjunto Joggers Negro",
    price: 120.000,
    image: "https://s.alicdn.com/@sc04/kf/H461738ff8e8041e78496ff479d1fe463x.jpg",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/H461738ff8e8041e78496ff479d1fe463x.jpg",
    ],
    category: "conjuntos",
    description: "Conjunto personalizado de joggers a rayas para hombre; traje deportivo casual para jóvenes, estampado por sublimación; apto para primavera, otoño, verano e invierno.",
    details: [
      "Incluye hoodie + pantalón",
      "Tela premium",
    ],
    material: "Algodón / Poliéster",
    sizes: [
      { size: "S", available: false },
      { size: "M", available: true },
      { size: "L", available: true },
    ],
  },
];


// 🔥 HELPERS (CLAVE PARA TU PROYECTO)

// Buscar producto por ID (para página de producto)
export function getProductById(id: string) {
  return products.find((p) => p.id === id) || null;
}

// Filtrar por categoría (para páginas tipo /topwear /bottomwear)
export function getProductsByCategory(category: Product["category"]) {
  return products.filter((p) => p.category === category);
}
export const allProducts = Object.values(products);