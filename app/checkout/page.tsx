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
import { FoxLogo } from "@/components/fox-logo";
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
  const [copiandoItem, setCopiandoItem] = useState<string | null>(null);

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
    
    const message = `📩 NUEVO PEDIDO - SLIPERY

👤 Cliente
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Teléfono: ${formData.phone}

📍 Dirección
${formData.address}
${formData.city}, ${formData.postalCode}

🛍️ Productos
${productsText}

💰 Total: $${total.toFixed(2)} EUR`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Limpiar el carrito antes de redirigir
    clearCart();
    
    // Redirigir a WhatsApp
    window.open(`https://wa.me/573011946015?text=${encodedMessage}`, '_blank');
  };

  const copiarAlPortapapeles = async (texto: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      
      // Mostrar animación de "Copiado!!!"
      setCopiandoItem(itemId);
      
      // Ocultar después de 1.5 segundos
      setTimeout(() => {
        setCopiandoItem(null);
      }, 1500);
      
    } catch (err) {
      console.error('Error al copiar: ', err);
      // Fallback con alerta si falla
      alert("Error al copiar. Intenta nuevamente.");
    }
  };

  // Datos de las cuentas
  const datosCuentas = {
    paypal: {
      nombre: "Kendall Ortiz López",
      cuenta: "Kendallortizlopez@gmail.com",
      tipo: "Email PayPal",
      referencia: "Transferencia PayPal"
    },
    sinpe: {
      nombre: "Kendall Ortiz López",
      cuenta: "71880901",
      tipo: "sinpemovil",
      referencia: "Sinpe Móvil - Kendall Ortiz López"
    },
    bac: {
      nombre: "SLIPERY S.L.",
      cuenta: "CR18010200009510484120",
      tipo: "Cuenta BAC",
      referencia: "Banco BAC - Cuenta Corriente"
    }
  };

  const cuentaActual = datosCuentas[metodoSeleccionado];

  // IDs para cada elemento copiable
  const copiableItems = {
    nombre: `${metodoSeleccionado}-nombre`,
    cuenta: `${metodoSeleccionado}-cuenta`,
    referencia: `${metodoSeleccionado}-referencia`
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

                  {/* SECCIÓN DE DATOS BANCARIOS */}
                  <div className="pt-6">
                    <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-4">
                      DATOS PARA TRANSFERENCIA
                    </h2>
                    
                    {/* Selección de método */}
                    <div className="mb-6">
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <button
                          type="button"
                          onClick={() => setMetodoSeleccionado("paypal")}
                          className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                            metodoSeleccionado === "paypal"
                              ? "border-red-500/50 bg-red-500/10 text-white"
                              : "border-gray-800 bg-gray-900/50 text-gray-400 hover:bg-gray-800/50"
                          }`}
                        >
                          <Wallet className={`w-5 h-5 mb-1 ${metodoSeleccionado === "paypal" ? "text-red-400" : ""}`} />
                          <span className="text-sm font-medium">PayPal</span>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setMetodoSeleccionado("sinpe")}
                          className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                            metodoSeleccionado === "sinpe"
                              ? "border-red-500/50 bg-red-500/10 text-white"
                              : "border-gray-800 bg-gray-900/50 text-gray-400 hover:bg-gray-800/50"
                          }`}
                        >
                          <Smartphone className={`w-5 h-5 mb-1 ${metodoSeleccionado === "sinpe" ? "text-red-400" : ""}`} />
                          <span className="text-sm font-medium">Sinpe</span>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setMetodoSeleccionado("bac")}
                          className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                            metodoSeleccionado === "bac"
                              ? "border-red-500/50 bg-red-500/10 text-white"
                              : "border-gray-800 bg-gray-900/50 text-gray-400 hover:bg-gray-800/50"
                          }`}
                        >
                          <CreditCard className={`w-5 h-5 mb-1 ${metodoSeleccionado === "bac" ? "text-red-400" : ""}`} />
                          <span className="text-sm font-medium">BAC</span>
                        </button>
                      </div>
                    </div>

                    {/* Información de la cuenta */}
                    <div className="bg-card border border-border rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded ${metodoSeleccionado === "paypal" ? "bg-blue-500/20" : metodoSeleccionado === "sinpe" ? "bg-green-500/20" : "bg-purple-500/20"}`}>
                            {metodoSeleccionado === "paypal" && <Wallet className="w-5 h-5 text-blue-400" />}
                            {metodoSeleccionado === "sinpe" && <Smartphone className="w-5 h-5 text-green-400" />}
                            {metodoSeleccionado === "bac" && <CreditCard className="w-5 h-5 text-purple-400" />}
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground">
                              {metodoSeleccionado === "paypal" ? "PayPal" :
                               metodoSeleccionado === "sinpe" ? "Sinpe Móvil" : "Banco BAC"}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Datos para transferencia
                            </p>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                          <span className="text-red-400 text-sm font-medium">ACTIVO</span>
                        </div>
                      </div>

                      {/* Tabla de datos */}
                      <div className="space-y-3">
                        {/* Fila 1: Nombre/Titular */}
                        <div className="flex items-center justify-between">
                          <div className="w-1/3">
                            <span className="text-sm text-muted-foreground">
                              {metodoSeleccionado === "paypal" ? "Email PayPal" :
                               metodoSeleccionado === "sinpe" ? "Titular" : 
                               "Empresa"}
                            </span>
                          </div>
                          <div className="flex-1 flex items-center justify-between bg-input rounded px-3 py-2 border border-border">
                            <span className="text-foreground">{cuentaActual.nombre}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copiarAlPortapapeles(cuentaActual.nombre, copiableItems.nombre)}
                              className="h-8 w-20 p-0 hover:bg-secondary transition-all duration-300"
                              disabled={copiandoItem === copiableItems.nombre}
                            >
                              {copiandoItem === copiableItems.nombre ? (
                                <span className="text-green-500 font-bold animate-pulse">
                                  ¡Copiado!
                                </span>
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Fila 2: Cuenta/Número */}
                        <div className="flex items-center justify-between">
                          <div className="w-1/3">
                            <span className="text-sm text-muted-foreground">
                              {metodoSeleccionado === "paypal" ? "Para transferir" :
                               metodoSeleccionado === "sinpe" ? "Número" : 
                               "Cuenta"}
                            </span>
                          </div>
                          <div className="flex-1 flex items-center justify-between bg-input rounded px-3 py-2 border border-border">
                            <span className="text-foreground font-mono">{cuentaActual.cuenta}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copiarAlPortapapeles(cuentaActual.cuenta, copiableItems.cuenta)}
                              className="h-8 w-20 p-0 hover:bg-secondary transition-all duration-300"
                              disabled={copiandoItem === copiableItems.cuenta}
                            >
                              {copiandoItem === copiableItems.cuenta ? (
                                <span className="text-green-500 font-bold animate-pulse">
                                  ¡Copiado!
                                </span>
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Fila 3: Referencia */}
                        <div className="flex items-center justify-between">
                          <div className="w-1/3">
                            <span className="text-sm text-muted-foreground">
                              Referencia
                            </span>
                          </div>
                          <div className="flex-1 flex items-center justify-between bg-input rounded px-3 py-2 border border-border">
                            <span className="text-foreground">{cuentaActual.referencia}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copiarAlPortapapeles(cuentaActual.referencia, copiableItems.referencia)}
                              className="h-8 w-20 p-0 hover:bg-secondary transition-all duration-300"
                              disabled={copiandoItem === copiableItems.referencia}
                            >
                              {copiandoItem === copiableItems.referencia ? (
                                <span className="text-green-500 font-bold animate-pulse">
                                  ¡Copiado!
                                </span>
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Instrucciones */}
                      <div className="mt-4 pt-3 border-t border-border">
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-red-400" />
                          </div>
                          <div>
                            <p className="text-foreground text-sm font-medium mb-1">Instrucciones:</p>
                            <ul className="text-muted-foreground text-xs space-y-0.5">
                              {metodoSeleccionado === "paypal" && (
                                <>
                                  <li>1. Envía el pago al email indicado</li>
                                  <li>2. Usa tu número de pedido como referencia</li>
                                </>
                              )}
                              {metodoSeleccionado === "sinpe" && (
                                <>
                                  <li>1. Realiza transferencia al número indicado</li>
                                  <li>2. Toma screenshot del comprobante</li>
                                </>
                              )}
                              {metodoSeleccionado === "bac" && (
                                <>
                                  <li>1. Transfiere a la cuenta indicada</li>
                                  <li>2. Usa tu número de pedido como referencia</li>
                                </>
                              )}
                              <li>3. Envía el comprobante por WhatsApp</li>
                            </ul>
                          </div>
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
                            ${(item.price * item.quantity).toFixed(2)} EUR
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
                  <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">
                        ${subtotal.toFixed(2)} EUR
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Envío</span>
                      <span className="text-gold">GRATIS</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-border pt-3">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">
                        ${total.toFixed(2)} EUR
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
                        Pago Seguro
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