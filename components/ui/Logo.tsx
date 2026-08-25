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
        src={light ? "/logo_sinfondo_white.png?v=7" : "/logo_sinfondo.png?v=7"}
        alt="Keytek Logo"
        width={1259}
        height={350}
        className="h-[36px] w-auto object-contain"
        priority
      />
    </Link>
  )
}
