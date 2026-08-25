import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = "", light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {/* Official Brand Logo Image — fluid width, never clips */}
      <div className="relative flex h-[50px] w-full max-w-[140px] items-center justify-start shrink-0">
        <Image
          src={light ? "/logo_sinfondo_white.png?v=5" : "/logo_sinfondo.png?v=5"}
          alt="Keytek Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  )
}
