"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <Link href={`/producto/${id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-card mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button className="w-full bg-gold hover:bg-gold-dark text-background font-semibold tracking-widest uppercase text-sm">
            Ver Producto
          </Button>
        </div>
      </div>
      <div className="space-y-1">
        {category && (
          <p className="text-xs tracking-widest uppercase text-gold">
            {category}
          </p>
        )}
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground tracking-wide uppercase">
          {name}
        </h3>
        <p className="font-[family-name:var(--font-display)] text-lg font-bold text-gold tracking-wide">
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
          }).format(price)}
        </p>
      </div>
    </Link>
  );
}
