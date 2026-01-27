"use client";

import { useState, useEffect, useRef } from "react";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/CartContext";

import {
  ChevronLeft,
  Minus,
  Plus,
  Heart,
  Truck,
  RotateCcw,
  Shield,
  CreditCard,
} from "lucide-react";
import { products, allProducts } from "@/lib/data";

function InfiniteCarousel({ currentProductId }: { currentProductId: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProducts = allProducts.filter((p) => p.id !== currentProductId);
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
            <p>${product.price.toFixed(2)} EUR</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products[id] || products["hoodie-oversized-black"];

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

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
          <div>
            <div className="relative aspect-[3/4] bg-card mb-4">
              <Image
                src={product.gallery[selectedImage]}
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
                    selectedImage === idx ? "border-gold" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" width={200} height={200} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gold uppercase tracking-widest">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl mb-6">${product.price.toFixed(2)} EUR</p>

            <p className="text-muted-foreground mb-8">{product.description}</p>

            <div className="flex gap-3 mb-8">
              {product.sizes.map(({ size, available }) => (
                <button
                  key={size}
                  disabled={!available}
                  onClick={() => available && setSelectedSize(size)}
                  className={`relative w-14 h-14 border transition-all duration-300
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

                  {/* Línea diagonal para talla agotada */}
                  {!available && (
                    <span className="absolute inset-0 pointer-events-none">
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-full h-[2px] bg-current rotate-45" />
                      </span>
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center mb-8">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                <Minus />
              </button>
              <span className="mx-4">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>
                <Plus />
              </button>
            </div>

            <Button
              disabled={!selectedSize}
              onClick={() => {
                if (!selectedSize) return;

                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  size: selectedSize,
                  quantity: quantity,
                  image: product.image,
                });
              }}
              className={`w-full h-16 text-lg font-bold tracking-widest uppercase transition-all duration-300
    ${
      selectedSize
        ? "bg-gold text-black hover:scale-[1.02]"
        : "bg-gold/50 text-black/60 cursor-not-allowed"
    }
  `}
            >
              {selectedSize ? "Agregar al carrito" : "Selecciona una talla"}
            </Button>
          </div>
        </div>
      </div>

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
