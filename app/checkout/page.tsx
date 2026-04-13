"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronLeft,
  Truck,
  Shield,
  Lock,
  Trash2,
  AlertCircle,
  Copy,
  Wallet,
  Smartphone,
  CreditCard,
  Check
} from "lucide-react";
import { useCart } from "@/components/CartContext";

export default function CheckoutPage() {
  const { cart: cartItems, removeFromCart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [metodoSeleccionado, setMetodoSeleccionado] = useState<"paypal" | "sinpe" | "bac">("paypal");
  const [, setCopiandoItem] = useState<string | null>(null);

  // Verificar si el carrito está vacío
  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);

  // Validar que todos los campos requeridos estén llenos
  useEffect(() => {
    const { email, firstName, lastName, address, city, postalCode, phone } = formData;
    const isAllFieldsFilled = 
      email.trim() !== "" &&
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      address.trim() !== "" &&
      city.trim() !== "" &&
      postalCode.trim() !== "" &&
      phone.trim() !== "";
    
    setIsFormValid(isAllFieldsFilled && !isCartEmpty);
  }, [formData, isCartEmpty]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar nuevamente antes de enviar
    if (!isFormValid || isCartEmpty) {
      return;
    }
    
    // Construir el mensaje para WhatsApp
    const productsText = cartItems.map(item => 
      `* ${item.name} (Talla: ${item.size}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)} EUR`
    ).join('\n');
    
    const message = `📩 *NUEVO PEDIDO - PANDA URBAN*

👤 *Cliente*
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Teléfono: ${formData.phone}

📍 *Dirección*
${formData.address}
${formData.city}, ${formData.postalCode}

🛍️ *Productos*
${productsText}

💰 *Total:* $${total.toFixed(2)} COP`;

    const encodedMessage = encodeURIComponent(message);
    
    clearCart();
    
    window.open(`https://wa.me/573011946015?text=${encodedMessage}`, '_blank');
  };

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

        {/* Checkout Form */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground mb-2">
                  FINALIZAR COMPRA
                </h1>
              </div>

              {isCartEmpty && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Tu carrito está vacío</span>
                  </div>
                  <p className="text-sm text-destructive/80 mt-2">
                    Agrega productos al carrito antes de realizar un pedido.
                  </p>
                  <Button
                    asChild
                    className="mt-4 bg-gold hover:bg-gold-dark text-background"
                  >
                    <Link href="/tienda">
                      Ir a la Tienda
                    </Link>
                  </Button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {/* Contact */}
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-4">
                      CONTACTO
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-sm tracking-widest uppercase text-muted-foreground"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isCartEmpty}
                          className="mt-2 bg-input border-border focus:border-gold disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-sm tracking-widest uppercase text-muted-foreground"
                        >
                          Teléfono *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          disabled={isCartEmpty}
                          className="mt-2 bg-input border-border focus:border-gold disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping */}
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-4">
                      DIRECCIÓN DE ENVÍO
                    </h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="firstName"
                            className="text-sm tracking-widest uppercase text-muted-foreground"
                          >
                            Nombre *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            disabled={isCartEmpty}
                            className="mt-2 bg-input border-border focus:border-gold disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Juan"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="lastName"
                            className="text-sm tracking-widest uppercase text-muted-foreground"
                          >
                            Apellidos *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            disabled={isCartEmpty}
                            className="mt-2 bg-input border-border focus:border-gold disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Pérez García"
                          />
                        </div>
                      </div>
                      <div>
                        <Label
                          htmlFor="address"
                          className="text-sm tracking-widest uppercase text-muted-foreground"
                        >
                          Dirección *
                        </Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            disabled={isCartEmpty}
                            className="mt-2 bg-input border-border focus:border-gold disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Calle, número, piso..."
                          />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="city"
                            className="text-sm tracking-widest uppercase text-muted-foreground"
                          >
                            Ciudad *
                          </Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            disabled={isCartEmpty}
                            className="mt-2 bg-input border-border focus:border-gold disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Madrid"
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="postalCode"
                            className="text-sm tracking-widest uppercase text-muted-foreground"
                          >
                            Código Postal *
                          </Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            required
                            disabled={isCartEmpty}
                            className="mt-2 bg-input border-border focus:border-gold disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="28001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  

                  <div className="flex items-center gap-2 text-sm text-muted-foreground p-4 bg-secondary/50 rounded-lg">
                    <Lock className="w-4 h-4" />
                    <span>
                      Al hacer clic en "Realizar Pedido", serás redirigido a WhatsApp para confirmar tu compra
                    </span>
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid || isCartEmpty}
                    className={`w-full h-14 font-semibold tracking-widest uppercase transition-all duration-300 ${
                      isFormValid && !isCartEmpty
                        ? "bg-gold hover:bg-gold-dark text-background"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isCartEmpty ? "Carrito Vacío" : "Realizar Pedido por WhatsApp"}
                  </Button>
                </div>
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
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        No hay productos en el carrito
                      </p>
                      <Button
                        asChild
                        className="bg-gold hover:bg-gold-dark text-background"
                      >
                        <Link href="/tienda">
                          Ver Productos
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <div
                        key={`${item.id}-${item.size}`}
                        className="flex gap-4"
                      >
                        <div className="relative w-20 h-24 bg-secondary overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-medium text-foreground text-sm">
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Talla: {item.size}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Cantidad: {item.quantity}
                          </p>
                          <p className="text-sm text-foreground mt-1">
                            ${(item.price * item.quantity).toFixed(2)} COP
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-muted-foreground hover:text-destructive transition-colors self-start"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Totals */}
                {cartItems.length > 0 && (
                  <div className="font-[family-name:var(--font-display)] border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">
                        ${subtotal.toFixed(2)} COP
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Envío</span>
                      <span className="text-gold">GRATIS</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-border pt-3">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">
                        ${total.toFixed(2)} COP
                      </span>
                    </div>
                  </div>
                )}

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Truck className="w-5 h-5 mx-auto mb-1 text-gold" />
                      <p className="text-xs text-muted-foreground">
                        Envío 24H
                      </p>
                    </div>
                    <div>
                      <Shield className="w-5 h-5 mx-auto mb-1 text-gold" />
                      <p className="text-xs text-muted-foreground">
                        Pago ContraEntrega
                      </p>
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
      </div>

      <Footer />
    </main>
  );
}