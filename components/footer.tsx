import Link from "next/link"
import { Instagram, Twitter } from "lucide-react"
import { FoxLogo } from "./fox-logo"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <FoxLogo className="w-10 h-10 text-gold" />
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.2em] text-foreground">
                L  E  A  L
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Streetwear premium para los que no siguen reglas. Viste urbano, viste real.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest uppercase text-foreground mb-4">
              Tienda
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tienda" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Todos los Productos
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Camisetas
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Pantalones
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest uppercase text-foreground mb-4">
              Informacion
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Envios
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest uppercase text-foreground mb-4">
              Siguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            2026 L  E  A  L. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-xs text-muted-foreground hover:text-gold transition-colors tracking-widest uppercase">
              Privacidad
            </Link>
            <Link href="/" className="text-xs text-muted-foreground hover:text-gold transition-colors tracking-widest uppercase">
              Terminos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
