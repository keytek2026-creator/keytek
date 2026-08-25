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
        src={light ? "/logo_sinfondo_white.png?v=6" : "/logo_sinfondo.png?v=6"}
        alt="Keytek Logo"
        width={1259}
        height={350}
        className="h-[42px] w-auto max-w-[140px] object-contain object-left"
        priority
      />
    </Link>
  )
}
