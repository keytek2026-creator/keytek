import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = "", light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3.5 ${className}`}>
      {/* Official Brand Logo Image scaled to 100px */}
      <div className="relative flex h-[100px] w-[100px] items-center justify-center shrink-0">
        <Image
          src="/logo_sinfondo.png"
          alt="Keytek Logo"
          width={100}
          height={100}
          className="object-contain"
          priority
        />
      </div>

      {/* Brand Name Typography scaled up to match the 100px logo icon */}
      <span className="font-heading text-3xl font-extrabold tracking-tight leading-none">
        <span className={light ? "text-white" : "text-[#0F2A4A]"}>KEY</span>
        <span className="text-[#4FA8E0]">TEK</span>
      </span>
    </Link>
  )
}
