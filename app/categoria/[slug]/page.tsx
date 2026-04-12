import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const categories: Record<string, {
  name: string
  description: string
  heroImage: string
  products: Array<{
    id: string
    name: string
    price: number
    image: string
    category: string
  }>
}> = {
  conjuntos: {
    name: "conjuntos",
    description: "Hoodies oversized premium para los que dominan las calles. Comodidad y estilo sin compromisos.",
    heroImage: "/images/category-hoodies.jpg",
    products: [
      { id: "hoodie-oversized-black", name: "Hoodie Oversized Black", price: 89.99, image: "/images/product-hoodie.jpg", category: "Hoodies" },
      { id: "hoodie-shadow", name: "Hoodie Shadow", price: 95.99, image: "/images/product-hoodie.jpg", category: "Hoodies" },
      { id: "hoodie-nocturno", name: "Hoodie Nocturno", price: 99.99, image: "/images/product-hoodie.jpg", category: "Hoodies" },
      { id: "hoodie-stealth", name: "Hoodie Stealth", price: 92.99, image: "/images/product-hoodie.jpg", category: "Hoodies" },
      { id: "hoodie-urban-elite", name: "Hoodie Urban Elite", price: 109.99, image: "/images/product-hoodie.jpg", category: "Hoodies" },
      { id: "hoodie-minimal", name: "Hoodie Minimal", price: 85.99, image: "/images/product-hoodie.jpg", category: "Hoodies" },
    ]
  },
  bottomwear: {
    name: "bottomwear",
    description: "Cargo pants y joggers disenados para el movimiento urbano. Funcionalidad y actitud en cada costura.",
    heroImage: "/images/category-pants.jpg",
    products: [
      { id: "cargo-urban", name: "Cargo Urban", price: 79.99, image: "/images/product-pants.jpg", category: "Pantalones" },
      { id: "cargo-stealth", name: "Cargo Stealth", price: 85.99, image: "/images/product-pants.jpg", category: "Pantalones" },
      { id: "jogger-nocturno", name: "Jogger Nocturno", price: 69.99, image: "/images/product-pants.jpg", category: "Pantalones" },
      { id: "cargo-tactical", name: "Cargo Tactical", price: 89.99, image: "/images/product-pants.jpg", category: "Pantalones" },
      { id: "pants-slim-urban", name: "Pants Slim Urban", price: 75.99, image: "/images/product-pants.jpg", category: "Pantalones" },
      { id: "jogger-essential", name: "Jogger Essential", price: 65.99, image: "/images/product-pants.jpg", category: "Pantalones" },
    ]
  },
  topwear: {
    name: "topwear",
    description: "Camisetas y camisas que hacen statement. Cortes limpios, mensajes directos, actitud pura.",
    heroImage: "/images/category-shirts.jpg",
    products: [
      { id: "tshirt-essential", name: "Camiseta Essential", price: 45.99, image: "/images/product-tshirt.jpg", category: "Camisas" },
      { id: "tshirt-minimal", name: "Camiseta Minimal", price: 39.99, image: "/images/product-tshirt.jpg", category: "Camisas" },
      { id: "tshirt-oversize", name: "Camiseta Oversize", price: 49.99, image: "/images/product-tshirt.jpg", category: "Camisas" },
      { id: "tshirt-graphic", name: "Camiseta Graphic", price: 52.99, image: "/images/product-tshirt.jpg", category: "Camisas" },
      { id: "camisa-urban", name: "Camisa Urban", price: 65.99, image: "/images/product-tshirt.jpg", category: "Camisas" },
      { id: "tshirt-nocturno", name: "Camiseta Nocturno", price: 47.99, image: "/images/product-tshirt.jpg", category: "Camisas" },
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }))
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories[slug]

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Category Hero */}
      <section className="relative h-[50vh] min-h-[400px] pt-20">
        <Image
          src={category.heroImage || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-gold transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-foreground">{category.name}</span>
            </nav>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
              {category.name.toUpperCase()}
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              {category.products.length} productos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {category.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
