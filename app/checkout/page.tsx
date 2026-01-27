"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, CreditCard, Truck, Shield, Lock, Trash2 } from "lucide-react"
import { FoxLogo } from "@/components/fox-logo"

const cartItems = [
  {
    id: "hoodie-oversized-black",
    name: "Hoodie Oversized",
    price: 89.99,
    image: "/images/product-hoodie.jpg",
    size: "L",
    quantity: 1,
  },
  {
    id: "cargo-pants-urban",
    name: "Cargo Urban",
    price: 79.99,
    image: "/images/product-pants.jpg",
    size: "M",
    quantity: 1,
  },
]

export default function CheckoutPage() {
  const [step, setStep] = useState<"info" | "payment" | "confirm">("info")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === "info") {
      setStep("payment")
    } else if (step === "payment") {
      setStep("confirm")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-20 md:pt-24">
        {/* Header */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <Link
              href="/tienda"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Continuar comprando
            </Link>
          </div>
        </div>

        {step === "confirm" ? (
          /* Confirmation */
          <div className="container mx-auto px-4 py-24 text-center max-w-lg">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <FoxLogo className="w-10 h-10 text-gold" />
              </div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-foreground mb-4">
                PEDIDO CONFIRMADO
              </h1>
              <p className="text-muted-foreground">
                Gracias por tu compra. Te hemos enviado un email de confirmacion a {formData.email || "tu correo"}.
              </p>
            </div>
            <div className="bg-card border border-border p-6 mb-8 text-left">
              <p className="text-sm text-muted-foreground mb-2">Numero de pedido</p>
              <p className="font-[family-name:var(--font-display)] text-xl font-bold text-gold mb-4">#SLP-2026-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">Total</p>
                <p className="text-2xl font-bold text-foreground">${total.toFixed(2)} EUR</p>
              </div>
            </div>
            <Button
              asChild
              className="bg-gold hover:bg-gold-dark text-background font-semibold tracking-widest uppercase px-8"
            >
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>
        ) : (
          /* Checkout Form */
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Form Section */}
              <div className="lg:col-span-7">
                {/* Progress */}
                <div className="flex items-center gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setStep("info")}
                    className={`text-sm tracking-widest uppercase ${step === "info" ? "text-gold" : "text-muted-foreground"}`}
                  >
                    1. Informacion
                  </button>
                  <span className="w-8 h-px bg-border" />
                  <button
                    type="button"
                    onClick={() => step === "payment" && setStep("payment")}
                    className={`text-sm tracking-widest uppercase ${step === "payment" ? "text-gold" : "text-muted-foreground"}`}
                  >
                    2. Pago
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === "info" && (
                    <div className="space-y-8">
                      {/* Contact */}
                      <div>
                        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-4">
                          CONTACTO
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="email" className="text-sm tracking-widest uppercase text-muted-foreground">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="mt-2 bg-input border-border focus:border-gold"
                              placeholder="tu@email.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-sm tracking-widest uppercase text-muted-foreground">
                              Telefono
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="mt-2 bg-input border-border focus:border-gold"
                              placeholder="+34 600 000 000"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Shipping */}
                      <div>
                        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-4">
                          DIRECCION DE ENVIO
                        </h2>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="firstName" className="text-sm tracking-widest uppercase text-muted-foreground">
                                Nombre
                              </Label>
                              <Input
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="mt-2 bg-input border-border focus:border-gold"
                              />
                            </div>
                            <div>
                              <Label htmlFor="lastName" className="text-sm tracking-widest uppercase text-muted-foreground">
                                Apellidos
                              </Label>
                              <Input
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="mt-2 bg-input border-border focus:border-gold"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="address" className="text-sm tracking-widest uppercase text-muted-foreground">
                              Direccion
                            </Label>
                            <Input
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              required
                              className="mt-2 bg-input border-border focus:border-gold"
                              placeholder="Calle, numero, piso..."
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="city" className="text-sm tracking-widest uppercase text-muted-foreground">
                                Ciudad
                              </Label>
                              <Input
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                                className="mt-2 bg-input border-border focus:border-gold"
                              />
                            </div>
                            <div>
                              <Label htmlFor="postalCode" className="text-sm tracking-widest uppercase text-muted-foreground">
                                Codigo Postal
                              </Label>
                              <Input
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleInputChange}
                                required
                                className="mt-2 bg-input border-border focus:border-gold"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 bg-gold hover:bg-gold-dark text-background font-semibold tracking-widest uppercase"
                      >
                        Continuar al Pago
                      </Button>
                    </div>
                  )}

                  {step === "payment" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-4">
                          METODO DE PAGO
                        </h2>
                        <div className="bg-card border border-border p-4 mb-4">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-gold" />
                            <span className="text-foreground font-medium">Tarjeta de Credito/Debito</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="cardName" className="text-sm tracking-widest uppercase text-muted-foreground">
                              Nombre en la tarjeta
                            </Label>
                            <Input
                              id="cardName"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              required
                              className="mt-2 bg-input border-border focus:border-gold"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cardNumber" className="text-sm tracking-widest uppercase text-muted-foreground">
                              Numero de tarjeta
                            </Label>
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              required
                              className="mt-2 bg-input border-border focus:border-gold"
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="cardExpiry" className="text-sm tracking-widest uppercase text-muted-foreground">
                                Fecha de expiracion
                              </Label>
                              <Input
                                id="cardExpiry"
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleInputChange}
                                required
                                className="mt-2 bg-input border-border focus:border-gold"
                                placeholder="MM/AA"
                              />
                            </div>
                            <div>
                              <Label htmlFor="cardCvc" className="text-sm tracking-widest uppercase text-muted-foreground">
                                CVC
                              </Label>
                              <Input
                                id="cardCvc"
                                name="cardCvc"
                                value={formData.cardCvc}
                                onChange={handleInputChange}
                                required
                                className="mt-2 bg-input border-border focus:border-gold"
                                placeholder="123"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Lock className="w-4 h-4" />
                        <span>Tu informacion de pago esta encriptada y segura</span>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep("info")}
                          className="flex-1 h-14 border-border text-foreground hover:bg-secondary tracking-widest uppercase"
                        >
                          Atras
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 h-14 bg-gold hover:bg-gold-dark text-background font-semibold tracking-widest uppercase"
                        >
                          Finalizar Compra
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-5">
                <div className="bg-card border border-border p-6 sticky top-24">
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-6">
                    RESUMEN DEL PEDIDO
                  </h2>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="relative w-20 h-24 bg-secondary overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground text-sm">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">Talla: {item.size}</p>
                          <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
                          <p className="text-sm text-foreground mt-1">${item.price.toFixed(2)} EUR</p>
                        </div>
                        <button type="button" className="text-muted-foreground hover:text-destructive transition-colors self-start" aria-label="Remove item">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">${subtotal.toFixed(2)} EUR</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Envio</span>
                      <span className="text-gold">GRATIS</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-border pt-3">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">${total.toFixed(2)} EUR</span>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <Truck className="w-5 h-5 mx-auto mb-1 text-gold" />
                        <p className="text-xs text-muted-foreground">Envio 24H</p>
                      </div>
                      <div>
                        <Shield className="w-5 h-5 mx-auto mb-1 text-gold" />
                        <p className="text-xs text-muted-foreground">Pago Seguro</p>
                      </div>
                      <div>
                        <Lock className="w-5 h-5 mx-auto mb-1 text-gold" />
                        <p className="text-xs text-muted-foreground">SSL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
