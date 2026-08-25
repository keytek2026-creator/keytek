import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = "", light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src={light ? "/logo_sinfondo_white.png?v=11" : "/logo_sinfondo.png?v=11"}
        alt="Vaultec Logo"
        width={2048}
        height={682}
        className="h-[70px] w-auto"
        priority
        unoptimized
      />
    </Link>
  )
}
