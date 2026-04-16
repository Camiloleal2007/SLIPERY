import Image from "next/image"

export function FoxLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/fox-logo-blanco.png"
      alt="kanji"
      width={100}
      height={100}
      className={className}
    />
  )
}
