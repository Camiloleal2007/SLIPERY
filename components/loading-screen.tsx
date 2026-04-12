"use client"

import { useState, useEffect } from "react"
import { FoxLogo } from "./fox-logo"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading")

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setPhase("reveal")
    }, 1500)

    return () => clearTimeout(loadingTimer)
  }, [])

  useEffect(() => {
    if (phase === "reveal") {
      const revealTimer = setTimeout(() => {
        setPhase("exit")
      }, 1200)
      return () => clearTimeout(revealTimer)
    }
    
    if (phase === "exit") {
      const exitTimer = setTimeout(() => {
        onComplete()
      }, 600)
      return () => clearTimeout(exitTimer)
    }
  }, [phase, onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-4">
        
        {/* Fox Logo */}
        <div
          className={`transition-all duration-700 ease-out ${
            phase === "loading"
              ? "animate-pulse"
              : phase === "reveal"
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-100"
          }`}
        >
          <FoxLogo
            className={`w-16 md:w-24 h-auto text-gold drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-transform duration-700 ${
              phase === "reveal" ? "translate-x-2" : ""
            }`}
          />
        </div>

        {/* Brand Name */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-out ${
            phase === "loading"
              ? "w-0 opacity-0"
              : "w-auto opacity-100"
          }`}
        >
          <h1
            className={`font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold tracking-[0.3em] text-foreground whitespace-nowrap transition-transform duration-700 ${
              phase === "loading"
                ? "-translate-x-full"
                : "translate-x-0"
            }`}
          >
            PANDA URBAN
          </h1>
        </div>
      </div>

      {/* 🔥 Loading bar PRO */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48">
        <div className="h-[2px] bg-border overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-white/40 via-white to-white/40 shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-1500 ease-out"
            style={{
              animation: phase === "loading" ? "loadingBar 1.5s ease-out forwards" : "none"
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}