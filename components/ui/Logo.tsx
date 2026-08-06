import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = "", light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Brand Logo Image */}
      <div className="relative flex h-14 w-14 items-center justify-center">
        <Image
          src="/Futuristic_Logo_with_Interlocking__K_-removebg-preview.png"
          alt="Keytek Logo"
          width={56}
          height={56}
          className="object-contain"
          priority
        />
      </div>

      {/* Brand Name Typography */}
      <span className="font-heading text-2xl font-bold tracking-tight">
        <span className={light ? "text-white" : "text-[#0F2A4A]"}>KEY</span>
        <span className="text-[#4FA8E0]">TEK</span>
      </span>
    </Link>
  )
}
