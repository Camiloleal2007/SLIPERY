"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { FoxLogo } from "./fox-logoo";
import { useCart } from "@/components/CartContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Iluminación superior */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/40 via-white/20 to-transparent blur-xl" />

      <div className="relative bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu */}
            <button
              type="button"
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <FoxLogo className="w-28 md:w-40 h-auto text-gold drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: "Inicio", href: "/" },
                { name: "Conjuntos", href: "/categoria/conjuntos" },
                { name: "Bottomwear", href: "/categoria/bottomwear" },
                { name: "Topwear", href: "/categoria/topwear" },
                { name: "Nosotros", href: "/nosotros" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-foreground/80 transition-all hover:text-gold"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="text-foreground hover:text-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>

              <button className="hidden md:block text-foreground hover:text-gold transition-colors">
                <User className="w-5 h-5" />
              </button>

              {/* 🛒 Carrito */}
              <Link
                href="/checkout"
                className="relative text-foreground hover:text-gold transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gold text-black text-xs flex items-center justify-center rounded-full">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile nav */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {[
                  { name: "Inicio", href: "/" },
                  { name: "Conjuntos", href: "/categoria/conjuntos" },
                  { name: "Bottomwear", href: "/categoria/bottomwear" },
                  { name: "Topwear", href: "/categoria/topwear" },
                  { name: "Nosotros", href: "/nosotros" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm tracking-widest uppercase text-muted-foreground hover:text-gold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
