import Link from "next/link"

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = "", light = false }: LogoProps) {
  // Brand color from the user's uploaded logo image: #6B1F9E (Purple)
  const brandPurple = "#6B1F9E"

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon: Purple Key based on user's logo upload */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-[#6B1F9E]"
        >
          {/* Key Head: Large Circle with concentric hole */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 50,5 C 25.147,5 5,25.147 5,50 C 5,74.853 25.147,95 50,95 C 74.853,95 95,74.853 95,50 C 95,25.147 74.853,5 50,5 Z M 50,23 C 35.088,23 23,35.088 23,50 C 23,64.912 35.088,77 50,77 C 64.912,77 77,64.912 77,50 C 77,35.088 64.912,23 50,23 Z"
            fill="currentColor"
          />
          {/* Stem/Blade going down on the left, with the steps/notches rising on the right */}
          <path
            d="M 32,50 L 32,95 L 48,95 L 48,82 C 48,77.5 51.5,74 56,74 L 62,74 C 66.5,74 70,70.5 70,66 L 70,58 C 70,53.5 73.5,50 78,50 L 84,50 C 88.5,50 92,46.5 92,42 L 92,30 L 80,30 L 80,38 C 80,42.5 76.5,46 72,46 L 66,46 C 61.5,46 58,49.5 58,54 L 58,62 H 48 V 50 H 32 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <span className="font-heading text-2xl font-bold tracking-tight">
        <span style={{ color: light ? "#FFFFFF" : brandPurple }}>KEY</span>
        <span className="text-[#4FA8E0]">TEK</span>
      </span>
    </Link>
  )
}
