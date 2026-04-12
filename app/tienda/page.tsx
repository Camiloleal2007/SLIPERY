"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"

const allProducts = [
  {
    id: "hoodie-oversized-black",
    name: "Hoodie Oversized",
    price: 89.99,
    image: "https://s.alicdn.com/@sc04/kf/H11eb846a75914400a07167102cb0644fR.jpg?avif=close&webp=close",
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "tshirt-essential-black",
    name: "Camiseta Essential",
    price: 45.99,
    image: "https://s.alicdn.com/@sc04/kf/Hd817733d5a3c4a1a8995f442508d6f92D.jpg",
    category: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "cargo-pants-urban",
    name: "Cargo Urban",
    price: 79.99,
    image: "/images/product-pants.jpg",
    category: "Pantalones",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "bomber-jacket-night",
    name: "Bomber Night",
    price: 129.99,
    image: "/images/product-jacket.jpg",
    category: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "hoodie-street-grey",
    name: "Hoodie Street",
    price: 94.99,
    image: "/images/product-hoodie.jpg",
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "tshirt-logo-white",
    name: "Camiseta Logo",
    price: 49.99,
    image: "/images/product-tshirt.jpg",
    category: "Camisetas",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jogger-urban-black",
    name: "Jogger Urban",
    price: 69.99,
    image: "/images/product-pants.jpg",
    category: "Pantalones",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "windbreaker-night",
    name: "Windbreaker Night",
    price: 119.99,
    image: "/images/product-jacket.jpg",
    category: "Chaquetas",
    sizes: ["S", "M", "L", "XL"],
  },
]

const categories = ["Todos", "Hoodies", "Camisetas", "Pantalones", "Chaquetas"]
const sizes = ["S", "M", "L", "XL"]
const priceRanges = [
  { label: "Todos", min: 0, max: 1000 },
  { label: "Menos de 50EUR", min: 0, max: 50 },
  { label: "50EUR - 100EUR", min: 50, max: 100 },
  { label: "Mas de 100EUR", min: 100, max: 1000 },
]

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === "Todos" || product.category === selectedCategory
    const sizeMatch = !selectedSize || product.sizes.includes(selectedSize)
    const priceMatch = product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
    return categoryMatch && sizeMatch && priceMatch
  })

  const clearFilters = () => {
    setSelectedCategory("Todos")
    setSelectedSize(null)
    setSelectedPriceRange(priceRanges[0])
  }

  const hasActiveFilters = selectedCategory !== "Todos" || selectedSize || selectedPriceRange.label !== "Todos"

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-20 md:pt-24 pb-12 border-b border-border">
        <div className="container mx-auto px-4 pt-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">Coleccion Completa</p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            TIENDA
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <p className="text-muted-foreground">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
          </p>

          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            className="md:hidden border-border text-foreground bg-transparent"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filtros
          </Button>

          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-6">
            {/* Category Filter */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                Categoria: {selectedCategory}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                      selectedCategory === cat ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                Talla: {selectedSize || "Todas"}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-32 bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                <button
                  type="button"
                  onClick={() => setSelectedSize(null)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                    !selectedSize ? "text-gold" : "text-foreground"
                  }`}
                >
                  Todas
                </button>
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                      selectedSize === size ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                Precio: {selectedPriceRange.label}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    type="button"
                    onClick={() => setSelectedPriceRange(range)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                      selectedPriceRange.label === range.label ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-gold hover:text-gold-dark transition-colors"
              >
                <X className="w-4 h-4" />
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {isFilterOpen && (
          <div className="md:hidden mb-8 p-4 bg-card border border-border animate-in slide-in-from-top-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-foreground">Filtros</h3>
              <button type="button" onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2 tracking-widest uppercase">Categoria</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 text-sm border transition-colors ${
                      selectedCategory === cat
                        ? "border-gold text-gold"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2 tracking-widest uppercase">Talla</p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSize(null)}
                  className={`px-3 py-1 text-sm border transition-colors ${
                    !selectedSize
                      ? "border-gold text-gold"
                      : "border-border text-foreground hover:border-foreground"
                  }`}
                >
                  Todas
                </button>
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 text-sm border transition-colors ${
                      selectedSize === size
                        ? "border-gold text-gold"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2 tracking-widest uppercase">Precio</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    type="button"
                    onClick={() => setSelectedPriceRange(range)}
                    className={`px-3 py-1 text-sm border transition-colors ${
                      selectedPriceRange.label === range.label
                        ? "border-gold text-gold"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <Button
                variant="outline"
                className="w-full border-gold text-gold bg-transparent"
                onClick={clearFilters}
              >
                Limpiar Filtros
              </Button>
            )}
          </div>
        )}

        {/* Product Grid */}
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted-foreground text-lg mb-4">No se encontraron productos</p>
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-background bg-transparent"
              onClick={clearFilters}
            >
              Limpiar Filtros
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
