"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { HomeContent } from "@/components/home-content"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check if we've already shown the loading screen in this session
    const hasLoaded = sessionStorage.getItem("slipery-loaded")
    if (hasLoaded) {
      setIsLoading(false)
      setShowContent(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setShowContent(true)
    sessionStorage.setItem("slipery-loaded", "true")
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showContent && <HomeContent />}
    </>
  )
}
