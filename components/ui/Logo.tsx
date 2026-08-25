import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = "", light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      {/* Official Brand Logo Image scaled as a landscape rectangle */}
      <div className="relative flex h-[55px] w-[150px] items-center justify-start shrink-0">
        <Image
          src={light ? "/logo_sinfondo_white.png" : "/logo_sinfondo.png"}
          alt="Keytek Logo"
          width={150}
          height={55}
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  )
}
