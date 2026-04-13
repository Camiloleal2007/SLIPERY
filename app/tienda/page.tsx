"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products } from "@/lib/data"

// 🔥 CATEGORÍAS REALES
const categories = ["Todos", "topwear", "bottomwear", "conjuntos"]

// 🔥 TALLAS
const sizes = ["S", "M", "L", "XL"]

// 🔥 PRECIOS EN COP
const priceRanges = [
  { label: "Todos", min: 0, max: 1000000 },
  { label: "Menos de 50k", min: 0, max: 50000 },
  { label: "50k - 80k", min: 50000, max: 80000 },
  { label: "Más de 80k", min: 80000, max: 1000000 },
]

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // 🔥 FILTRO REAL
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "Todos" || product.category === selectedCategory

    const sizeMatch =
      !selectedSize ||
      product.sizes.some(
        (s) => s.size === selectedSize && s.available
      )

    const priceMatch =
      product.price >= selectedPriceRange.min &&
      product.price <= selectedPriceRange.max

    return categoryMatch && sizeMatch && priceMatch
  })

  const clearFilters = () => {
    setSelectedCategory("Todos")
    setSelectedSize(null)
    setSelectedPriceRange(priceRanges[0])
  }

  const hasActiveFilters =
    selectedCategory !== "Todos" ||
    selectedSize ||
    selectedPriceRange.label !== "Todos"

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="pt-20 md:pt-24 pb-12 border-b border-border">
        <div className="container mx-auto px-4 pt-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">
            Colección Completa
          </p>
          <h1 className="text-5xl md:text-6xl font-bold">
            TIENDA
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-50">

          <p className="text-muted-foreground">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
          </p>

          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filtros
          </Button>

          {/* DESKTOP FILTERS */}
          <div className="hidden md:flex items-center gap-6">

            {/* CATEGORY */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm uppercase">
                Categoría: {selectedCategory}
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-full right-0 mt-2 w-48 bg-card border z-[999] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="block w-full text-left px-4 py-2 hover:bg-secondary"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm uppercase">
                Talla: {selectedSize || "Todas"}
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-full right-0 mt-2 w-32 bg-card border z-[999] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button
                  onClick={() => setSelectedSize(null)}
                  className="block w-full text-left px-4 py-2 hover:bg-secondary"
                >
                  Todas
                </button>
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="block w-full text-left px-4 py-2 hover:bg-secondary"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* PRICE */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm uppercase">
                Precio: {selectedPriceRange.label}
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-full right-0 mt-2 w-48 bg-card border z-[999] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPriceRange(range)}
                    className="block w-full text-left px-4 py-2 hover:bg-secondary"
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-gold"
              >
                <X className="w-4 h-4" />
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

        {/* EMPTY */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p>No se encontraron productos</p>
            <Button onClick={clearFilters}>
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}