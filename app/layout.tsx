import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Image from "next/image"
import './globals.css'
import ScrollToTop from "@/components/ScrollToTop";
import { CartProvider } from "@/components/CartContext";

const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700", "800", "900"] });
const _inter = Inter({ subsets: ["latin"] });
const _oswald = { variable: "--font-oswald" }; // Declared _oswald variable

export const metadata: Metadata = {
  title: 'SLIPERY | Streetwear Premium',
  description: 'Streetwear sin reglas. Viste urbano. Viste real. Ropa urbana premium para los que no siguen tendencias.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased ${_playfair.variable}`}>
         <ScrollToTop />
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
<header className="flex items-center px-6 py-4">
  
  <Image 
    src="/logo.png"
    alt="SLIPERY logo"
    width={160}
    height={60}
    priority
  />
</header>

