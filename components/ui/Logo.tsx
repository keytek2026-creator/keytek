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
        src={light ? "/logo_sinfondo_white.png?v=9" : "/logo_sinfondo.png?v=9"}
        alt="Keytek Logo"
        width={2048}
        height={682}
        className="h-[40px] w-auto"
        priority
        unoptimized
      />
    </Link>
  )
}
