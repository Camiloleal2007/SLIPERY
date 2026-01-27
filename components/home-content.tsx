import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCard } from "@/components/product-card"
import { Footer } from "@/components/footer"
import { FoxLogo } from "@/components/fox-logo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: "hoodie-oversized-black",
    name: "Hoodie Oversized",
    price: 89.99,
    image: "/images/product-hoodie.jpg",
    category: "Hoodies",
  },
  {
    id: "tshirt-essential-black",
    name: "Camiseta Essential",
    price: 45.99,
    image: "/images/product-tshirt.jpg",
    category: "Camisetas",
  },
  {
    id: "cargo-pants-urban",
    name: "Cargo Urban",
    price: 79.99,
    image: "/images/product-pants.jpg",
    category: "Pantalones",
  },
  {
    id: "bomber-jacket-night",
    name: "Bomber Night",
    price: 129.99,
    image: "/images/product-jacket.jpg",
    category: "Chaquetas",
  },
]

const trendingProducts = [
  {
    id: "hoodie-shadow-black",
    name: "Hoodie Shadow",
    price: 95.99,
    image: "/images/product-hoodie.jpg",
    category: "Hoodies",
  },
  {
    id: "cargo-stealth",
    name: "Cargo Stealth",
    price: 85.99,
    image: "/images/product-pants.jpg",
    category: "Pantalones",
  },
  {
    id: "tshirt-minimal",
    name: "Camiseta Minimal",
    price: 39.99,
    image: "/images/product-tshirt.jpg",
    category: "Camisetas",
  },
  {
    id: "bomber-urban",
    name: "Bomber Urban",
    price: 139.99,
    image: "/images/product-jacket.jpg",
    category: "Chaquetas",
  },
]

export function HomeContent() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Trending Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Lo Mas Hot</p>
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
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Exclusivo</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              COLECCIONES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Collection Card 1 */}
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
                  URBAN NIGHTS
                </h3>
                <span className="inline-flex items-center text-sm tracking-widest uppercase text-foreground group-hover:text-gold transition-colors">
                  Explorar
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Collection Card 2 */}
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
                <span className="inline-flex items-center text-sm tracking-widest uppercase text-foreground group-hover:text-gold transition-colors">
                  Explorar
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Section - Acerca de la Marca */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="flex-1 text-center md:text-left">
              <FoxLogo className="w-24 h-24 text-gold mx-auto md:mx-0 mb-8" />
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                NO SEGUIMOS
                <br />
                <span className="text-gold">TENDENCIAS</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                SLIPERY nacio en las calles. Cada prenda es una declaracion de identidad, 
                disenada para los que no encajan en moldes. Calidad premium, actitud autentica.
                Somos la voz de una generacion que no pide permiso.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-gold">100%</p>
                  <p className="text-sm text-muted-foreground tracking-widest uppercase">Premium</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-gold">+5K</p>
                  <p className="text-sm text-muted-foreground tracking-widest uppercase">Clientes</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-gold">24H</p>
                  <p className="text-sm text-muted-foreground tracking-widest uppercase">Envio</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="relative aspect-square">
                <Image
                  src="/images/product-hoodie.jpg"
                  alt="SLIPERY Brand"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border border-gold/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Lo Mas Vendido</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              BESTSELLERS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-background font-semibold tracking-widest uppercase px-12"
            >
              <Link href="/tienda">
                Ver Todos los Productos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Newsletter</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            UNETE AL PACK
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Recibe novedades y nuevos lanzamientos directamente en tu correo. Acceso exclusivo a ofertas especiales.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu Gmail"
              className="flex-1 px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
            />
            <Button
              type="submit"
              className="bg-gold hover:bg-gold-dark text-background font-semibold tracking-widest uppercase px-8"
            >
              Suscribirse
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
