"use client";

import { useState, useEffect, useRef } from "react";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartContext";
import ModalCarrito from "@/components/modalcarrito";
import {
  ChevronLeft,
  Minus,
  Plus,
  Heart,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";

import { products, getProductById } from "@/lib/data";

// 🔥 CAROUSEL
function InfiniteCarousel({ currentProductId }: { currentProductId: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProducts = products.filter(
    (p) => p.id !== currentProductId
  );

  const duplicatedProducts = [
    ...filteredProducts,
    ...filteredProducts,
    ...filteredProducts,
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        const singleWidth = scrollContainer.scrollWidth / 3;
        if (scrollPosition >= singleWidth) scrollPosition = 0;
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={scrollRef} className="flex gap-6 overflow-x-hidden">
        {duplicatedProducts.map((product, idx) => (
          <Link
            key={`${product.id}-${idx}`}
            href={`/producto/${product.id}`}
            className="flex-shrink-0 w-[220px] md:w-[280px] group"
          >
            <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              {product.category}
            </p>

            <h3 className="font-semibold group-hover:text-gold transition-colors">
              {product.name}
            </h3>

            <p>${product.price.toLocaleString()} COP</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// 🔥 PAGE
export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // ✅ AHORA SÍ CORRECTO
  const product = getProductById(id);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-2xl">Producto no encontrado</h1>
      </main>
    );
  }

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity,
      image: product.image,
    });

    setShowModal(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 container mx-auto px-4 pb-24">
        <Link
          href="/tienda"
          className="flex items-center text-muted-foreground hover:text-gold mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Volver a la tienda
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* IMÁGENES */}
          <div>
            <div className="relative aspect-[3/4] bg-card mb-4">
              <Image
                src={product.gallery?.[selectedImage] || product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`border-2 ${
                    selectedImage === idx
                      ? "border-gold"
                      : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" width={200} height={200} />
                </button>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div>
            <p className="text-gold uppercase tracking-widest">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <p className="text-3xl mb-6">
              ${product.price.toLocaleString()} COP
            </p>

            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>

            {/* MATERIAL */}
            <div className="mb-4">
              <p className="uppercase text-xs tracking-widest text-muted-foreground">
                Material
              </p>
              <p>{product.material}</p>
            </div>

            {/* DETALLES */}
            <ul className="mb-8 space-y-2 text-sm text-muted-foreground">
              {product.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  {detail}
                </li>
              ))}
            </ul>

            {/* TALLAS */}
            <div className="flex gap-3 mb-8">
              {product.sizes.map(({ size, available }) => (
                <button
                  key={size}
                  disabled={!available}
                  onClick={() => available && setSelectedSize(size)}
                  className={`relative w-14 h-14 border transition-all
                    ${
                      !available
                        ? "opacity-40 cursor-not-allowed"
                        : selectedSize === size
                        ? "bg-gold text-black"
                        : ""
                    }
                  `}
                >
                  {size}

                  {!available && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-full h-[2px] bg-current rotate-45" />
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* CANTIDAD */}
            <div className="flex items-center mb-8">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 hover:bg-secondary rounded-full"
              >
                <Minus />
              </button>

              <span className="mx-4 text-lg font-semibold w-8 text-center">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 hover:bg-secondary rounded-full"
              >
                <Plus />
              </button>
            </div>

            {/* BOTÓN */}
            <Button
              disabled={!selectedSize}
              onClick={handleAddToCart}
              className={`w-full h-16 text-lg font-bold uppercase
                ${
                  selectedSize
                    ? "bg-gold text-black hover:scale-[1.02]"
                    : "bg-gold/50 text-black/60 cursor-not-allowed"
                }
              `}
            >
              {selectedSize
                ? "Agregar al carrito"
                : "Selecciona una talla"}
            </Button>

            {/* FAVORITOS */}
            <Button
              variant="outline"
              className="w-full h-12 mt-4 border-border hover:bg-secondary"
            >
              <Heart className="w-5 h-5 mr-2" />
              Agregar a favoritos
            </Button>

            {/* INFO EXTRA */}
            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-gold" />
                <span className="text-sm">Envío gratis en Colombia</span>
              </div>

              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-gold" />
                <span className="text-sm">
                  Devoluciones hasta 7 días
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-sm">Pago seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ModalCarrito
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        productName={product.name}
        productImage={product.image}
        size={selectedSize || ""}
        quantity={quantity}
      />

      {/* RECOMENDADOS */}
      <section className="py-20 bg-card">
        <h2 className="text-center text-3xl font-bold mb-10">
          TAMBIÉN TE PUEDE GUSTAR
        </h2>
        <InfiniteCarousel currentProductId={product.id} />
      </section>

      <Footer />
    </main>
  );
}