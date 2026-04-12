import Image from "next/image"

export function FoxLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/fox-logoo.png"
      alt="PANDA URBAN Fox Logo"
      width={100}
      height={100}
      className={className}
    />
  )
}
