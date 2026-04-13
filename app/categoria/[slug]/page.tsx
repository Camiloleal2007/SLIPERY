import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/lib/data" // 👈 IMPORTANTE

// 🔥 SOLO INFO VISUAL DE CATEGORÍA (SIN PRODUCTOS)
const categories: Record<string, {
  name: string
  description: string
  heroImage: string
}> = {
  conjuntos: {
    name: "Conjuntos",
    description: "Sets completos listos para destacar. Estilo urbano sin esfuerzo.",
    heroImage: "/images/category-hoodies.jpg",
  },
  bottomwear: {
    name: "Bottomwear",
    description: "Pantalones urbanos diseñados para comodidad y flow.",
    heroImage: "/images/category-pants.jpg",
  },
  topwear: {
    name: "Topwear",
    description: "Camisetas y prendas superiores con actitud street.",
    heroImage: "/images/category-shirts.jpg",
  }
}

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = categories[slug]

  if (!category) {
    notFound()
  }

  // 🔥 FILTRAR PRODUCTOS DESDE DATA
  const filteredProducts = Object.values(products).filter(
    (product) => product.category === slug
  )

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
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
              <Link href="/" className="hover:text-gold transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-foreground">{category.name}</span>
            </nav>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {category.name.toUpperCase()}
            </h1>

            <p className="text-muted-foreground text-lg max-w-xl">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              {filteredProducts.length} productos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}