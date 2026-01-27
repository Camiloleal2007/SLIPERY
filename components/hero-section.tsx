"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-model.jpg"
          alt="SLIPERY Streetwear"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Nueva Temporada 2026
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="text-balance">STREETWEAR</span>
            <br />
            <span className="text-gold">SIN REGLAS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Viste urbano. Viste real. Ropa premium para los que no siguen tendencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-background font-semibold tracking-widest uppercase px-8"
            >
              <Link href="/tienda">
                Explorar Coleccion
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background tracking-widest uppercase px-8 bg-transparent"
            >
              <Link href="/tienda">
                Comprar Ahora
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
