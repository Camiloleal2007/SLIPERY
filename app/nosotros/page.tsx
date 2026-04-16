import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FoxLogo } from "@/components/fox-logo";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FoxLogo className="w-20 h-20 text-gold mx-auto mb-8" />
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Nuestra Historia
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              L E A L
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              No nacimos para ser uno más. Nacimos para destacar.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
                Nuestra Mision
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                NO SEGUIMOS
                <br />
                <span className="text-gold">TENDENCIAS</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                L E A L no es solo ropa. Es una declaracion de identidad. Cada
                prenda esta diseñada para los que caminan su propio camino, los
                que no encajan en moldes, los que entienden que el estilo es
                actitud.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Creemos en la calidad premium, en los detalles que marcan
                diferencia, y en crear piezas que hablen por ti cuando las
                palabras no alcanzan.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/fox-logo-blanco.png"
                alt="L  E  A  L Streetwear"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-gold/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-gold flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-2xl text-gold">
                  01
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground mb-4">
                CALIDAD 1.1
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Trabajamos con calidad 1.1. Materiales premium, acabados limpios
                y prendas hechas para verse duras y durar. Aquí no vendemos
                barato, vendemos bien.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-gold flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-2xl text-gold">
                  02
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground mb-4">
                CONFIANZA REAL
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Lo que ves es lo que llega. Sin cuentos, sin engaños.
                Construimos confianza con cada pedido, porque sabemos que la
                reputación lo es todo.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 border border-gold flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-2xl text-gold">
                  03
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground mb-4">
                ESTILO QUE IMPACTA
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No es solo ropa. Es presencia. Diseños pensados para destacar en
                la calle, en el gym o donde sea. Si te miran, es por algo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-gold mb-2">
                +5K
              </p>
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Clientes
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-gold mb-2">
                100%
              </p>
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Premium
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-gold mb-2">
                24H
              </p>
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Envio
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-gold mb-2">
                2024
              </p>
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Fundacion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            UNETE AL <span className="text-gold">PACK</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Descubre la coleccion completa y encuentra tu proximo statement
            piece.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-background font-semibold tracking-widest uppercase px-12"
          >
            <Link href="/tienda">
              Explorar Coleccion
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
