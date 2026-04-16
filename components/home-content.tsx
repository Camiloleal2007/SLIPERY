"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCard } from "@/components/product-card"
import { Footer } from "@/components/footer"
import { FoxLogo } from "@/components/fox-logo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// 🔥 IMPORTAMOS DESDE DATA
import { getTrendingProducts, products } from "@/lib/data"

export function HomeContent() {

  // 🔥 PRODUCTOS EN TENDENCIA (LOS 4 QUE DEFINISTE)
  const trendingProducts = getTrendingProducts()

  // 🔥 BEST SELLERS (puedes cambiar lógica después)
  const bestSellerProducts = products.slice(0, 4)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* 🔥 TRENDING */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">
                Lo Mas Hot
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                EN TENDENCIA
              </h2>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-4 md:mt-0 border-foreground text-foreground hover:bg-foreground hover:text-background tracking-widest uppercase bg-transparent"
            >
              <Link href="/tienda">
                Ver Todo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trendingProducts.map((product) => (
              <ProductCard key={product!.id} {...product!} />
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 COLECCIONES */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">
              Exclusivo
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              COLECCIONES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/tienda" className="group relative aspect-[4/3] overflow-hidden bg-background">
              <Image
                src="/images/collection-urban.jpg"
                alt="Urban Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">2026</p>
                <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                  VENOM COMPRESSION
                </h3>
              </div>
            </Link>

            <Link href="/tienda" className="group relative aspect-[4/3] overflow-hidden bg-background">
              <Image
                src="/images/hero-model.jpg"
                alt="Street Essential"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Esenciales</p>
                <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                  STREET ESSENTIAL
                </h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 🔥 MARCA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

            <div className="flex-1 text-center md:text-left">
              <FoxLogo className="w-24 h-24 text-gold mx-auto md:mx-0 mb-8" />

              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                NO SEGUIMOS <br />
                <span className="text-gold">TENDENCIAS</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                L  E  A  L nació en las calles. Cada prenda es una declaración de identidad.
              </p>

            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="relative aspect-square">
                <Image
                  src="/images/product-hoodie.jpg"
                  alt="SLIPERY"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 BEST SELLERS */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">
              Lo Mas Vendido
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              BESTSELLERS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {bestSellerProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}