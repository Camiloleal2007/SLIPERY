"use client"

import { useState, useEffect, useRef } from "react"
import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Minus, Plus, Heart, Truck, RotateCcw, Shield, CreditCard } from "lucide-react"

const products: Record<string, {
  id: string
  name: string
  price: number
  image: string
  gallery: string[]
  category: string
  description: string
  details: string[]
  material: string
  fit: string
  style: string
  sizes: { size: string; available: boolean }[]
}> = {
  "hoodie-oversized-black": {
    id: "hoodie-oversized-black",
    name: "Hoodie Oversized",
    price: 89.99,
    image: "/images/product-hoodie.jpg",
    gallery: ["/images/product-hoodie.jpg", "/images/product-hoodie.jpg", "/images/product-hoodie.jpg", "/images/product-hoodie.jpg"],
    category: "Hoodies",
    description: "Hoodie oversized de corte premium con capucha ajustable y bolsillo canguro. Fabricado con algodon organico de alta calidad para maxima comodidad urbana.",
    details: ["100% Algodon Organico", "Capucha con cordon premium", "Bolsillo canguro funcional", "Costuras reforzadas", "Lavado a maquina"],
    material: "100% Algodon Organico Premium",
    fit: "Oversized / Relaxed",
    style: "Urban Streetwear",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: false },
      { size: "XXL", available: true },
    ],
  },
  "tshirt-essential-black": {
    id: "tshirt-essential-black",
    name: "Camiseta Essential",
    price: 45.99,
    image: "/images/product-tshirt.jpg",
    gallery: ["/images/product-tshirt.jpg", "/images/product-tshirt.jpg", "/images/product-tshirt.jpg", "/images/product-tshirt.jpg"],
    category: "Camisetas",
    description: "Camiseta esencial de corte relajado con cuello redondo reforzado. El basico perfecto para cualquier outfit urbano.",
    details: ["100% Algodon Premium", "Cuello reforzado", "Costuras dobles", "Etiqueta impresa", "Lavado a maquina"],
    material: "100% Algodon Premium",
    fit: "Regular / Relaxed",
    style: "Essential Streetwear",
    sizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: false },
      { size: "XL", available: true },
      { size: "XXL", available: false },
    ],
  },
  "cargo-pants-urban": {
    id: "cargo-pants-urban",
    name: "Cargo Urban",
    price: 79.99,
    image: "/images/product-pants.jpg",
    gallery: ["/images/product-pants.jpg", "/images/product-pants.jpg", "/images/product-pants.jpg", "/images/product-pants.jpg"],
    category: "Pantalones",
    description: "Pantalon cargo con multiples bolsillos funcionales y corte comodo. Disenado para el movimiento urbano.",
    details: ["98% Algodon, 2% Elastano", "6 bolsillos funcionales", "Cintura elastica ajustable", "Corte relaxed tapered", "Lavado a maquina"],
    material: "98% Algodon, 2% Elastano",
    fit: "Relaxed Tapered",
    style: "Urban Cargo",
    sizes: [
      { size: "XS", available: false },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
      { size: "XXL", available: false },
    ],
  },
  "bomber-jacket-night": {
    id: "bomber-jacket-night",
    name: "Bomber Night",
    price: 129.99,
    image: "/images/product-jacket.jpg",
    gallery: ["/images/product-jacket.jpg", "/images/product-jacket.jpg", "/images/product-jacket.jpg", "/images/product-jacket.jpg"],
    category: "Chaquetas",
    description: "Chaqueta bomber clasica con acabado mate premium. Perfecta para las noches urbanas.",
    details: ["Exterior: Nylon Premium", "Forro: Poliester suave", "Cremallera YKK", "Punos y cintura elasticos", "Lavado en seco recomendado"],
    material: "Nylon Premium / Poliester",
    fit: "Regular",
    style: "Night Bomber",
    sizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: false },
      { size: "L", available: true },
      { size: "XL", available: true },
      { size: "XXL", available: true },
    ],
  },
}

const allProducts = [
  { id: "hoodie-oversized-black", name: "Hoodie Oversized", price: 89.99, image: "/images/product-hoodie.jpg", category: "Hoodies" },
  { id: "tshirt-essential-black", name: "Camiseta Essential", price: 45.99, image: "/images/product-tshirt.jpg", category: "Camisetas" },
  { id: "cargo-pants-urban", name: "Cargo Urban", price: 79.99, image: "/images/product-pants.jpg", category: "Pantalones" },
  { id: "bomber-jacket-night", name: "Bomber Night", price: 129.99, image: "/images/product-jacket.jpg", category: "Chaquetas" },
  { id: "hoodie-oversized-black", name: "Hoodie Oversized", price: 89.99, image: "/images/product-hoodie.jpg", category: "Hoodies" },
  { id: "tshirt-essential-black", name: "Camiseta Essential", price: 45.99, image: "/images/product-tshirt.jpg", category: "Camisetas" },
  { id: "cargo-pants-urban", name: "Cargo Urban", price: 79.99, image: "/images/product-pants.jpg", category: "Pantalones" },
  { id: "bomber-jacket-night", name: "Bomber Night", price: 129.99, image: "/images/product-jacket.jpg", category: "Chaquetas" },
]

function InfiniteCarousel({ currentProductId }: { currentProductId: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  
  const filteredProducts = allProducts.filter(p => p.id !== currentProductId)
  const duplicatedProducts = [...filteredProducts, ...filteredProducts, ...filteredProducts]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed
        
        const singleSetWidth = scrollContainer.scrollWidth / 3
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0
        }
        
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedProducts.map((product, idx) => (
          <Link
            key={`${product.id}-${idx}`}
            href={`/producto/${product.id}`}
            className="flex-shrink-0 w-[220px] md:w-[280px] group"
          >
            <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300" />
            </div>
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-1">{product.category}</p>
            <h3 className="font-semibold text-foreground group-hover:text-gold transition-colors">{product.name}</h3>
            <p className="text-foreground mt-1">${product.price.toFixed(2)} EUR</p>
          </Link>
        ))}
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent pointer-events-none z-10" />
    </div>
  )
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = products[id] || products["hoodie-oversized-black"]
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/tienda"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Volver a la tienda
          </Link>
        </div>

        {/* Product Detail */}
        <div className="container mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] bg-card overflow-hidden">
                <Image
                  src={product.gallery[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square bg-card overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === idx 
                        ? "border-gold" 
                        : "border-transparent hover:border-gold/50"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-4">
              {/* Category Badge */}
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">{product.category}</p>
              
              {/* Product Name */}
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                {product.name.toUpperCase()}
              </h1>
              
              {/* Price */}
              <p className="text-3xl font-semibold text-foreground mb-6">${product.price.toFixed(2)} <span className="text-lg text-muted-foreground">EUR</span></p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{product.description}</p>

              {/* Product Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-card/50 border border-border">
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Material</p>
                  <p className="text-sm text-foreground">{product.material}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Fit</p>
                  <p className="text-sm text-foreground">{product.fit}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Estilo</p>
                  <p className="text-sm text-foreground">{product.style}</p>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-sm tracking-widest uppercase text-foreground font-semibold">Selecciona tu talla</p>
                  <button type="button" className="text-sm text-gold hover:underline">Guia de tallas</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(({ size, available }) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => available && setSelectedSize(size)}
                      disabled={!available}
                      className={`relative w-14 h-14 border text-sm font-semibold transition-all duration-300 ${
                        !available
                          ? "border-border/50 text-muted-foreground/40 cursor-not-allowed bg-secondary/30 line-through"
                          : selectedSize === size
                            ? "border-gold bg-gold text-background"
                            : "border-border text-foreground hover:border-gold hover:text-gold"
                      }`}
                    >
                      {size}
                      {!available && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-full h-[1px] bg-muted-foreground/40 rotate-45 absolute" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-sm text-gold/80 mt-3 animate-pulse">Selecciona tu talla para continuar</p>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-sm tracking-widest uppercase text-foreground font-semibold mb-4">Cantidad</p>
                <div className="flex items-center">
                  <div className="flex items-center border border-border">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center hover:bg-gold/10 hover:text-gold transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-14 text-center font-semibold text-lg">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center hover:bg-gold/10 hover:text-gold transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Buy Now Button */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <Button
                    disabled={!selectedSize}
                    className={`flex-1 h-16 text-lg font-bold tracking-widest uppercase transition-all duration-300 ${
                      selectedSize 
                        ? "bg-gold hover:bg-gold/90 text-background hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/20" 
                        : "bg-gold/50 text-background/70 cursor-not-allowed"
                    }`}
                  >
                    Comprar ahora
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 w-16 border-border hover:border-gold hover:text-gold hover:bg-gold/10 bg-transparent transition-all duration-300"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-6 h-6" />
                  </Button>
                </div>
                
                {/* Trust Message */}
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CreditCard className="w-4 h-4 text-gold" />
                  <p className="text-sm">Pago contra entrega disponible</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-gold" />
                  <p className="text-xs text-muted-foreground tracking-wide uppercase">Envio 24H</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-6 h-6 mx-auto mb-2 text-gold" />
                  <p className="text-xs text-muted-foreground tracking-wide uppercase">30 Dias Devolucion</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-gold" />
                  <p className="text-xs text-muted-foreground tracking-wide uppercase">Pago Seguro</p>
                </div>
              </div>

              {/* Details */}
              <div className="pt-6">
                <p className="text-sm tracking-widest uppercase text-foreground font-semibold mb-4">Detalles del Producto</p>
                <ul className="space-y-3">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products - Infinite Carousel */}
        <section className="py-20 bg-card border-t border-border">
          <div className="container mx-auto px-4 mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
              TAMBIEN TE PUEDE GUSTAR
            </h2>
            <p className="text-muted-foreground text-center mt-2">Productos similares que podrian interesarte</p>
          </div>
          
          <InfiniteCarousel currentProductId={product.id} />
        </section>

        {/* Minimal separator before footer */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <Footer />
    </main>
  )
}
