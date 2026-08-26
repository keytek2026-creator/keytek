"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Shield, ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/ui/Logo"
import { CONTACT_INFO } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Zonas de Cobertura", href: "/zonas" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ]

  const phoneRaw = CONTACT_INFO.phoneRaw

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isOpen
          ? "bg-white shadow-lg border-b border-gray-100 py-2"
          : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-150 py-2.5"
            : "bg-white/85 backdrop-blur-md border-b border-gray-100/80 py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-50/80 border border-gray-150/80 p-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200",
                pathname === link.href
                  ? "bg-[#0F2A4A] text-white shadow-sm"
                  : "text-keytek-text-muted hover:text-keytek-navy hover:bg-gray-100/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hola Vaultec, necesito cotizar un servicio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#0F2A4A] to-[#1B5FA8] hover:from-[#1B5FA8] hover:to-[#0F2A4A] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#1B5FA8]/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Cotizar Ahora</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center p-2 rounded-xl text-keytek-text bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer menu overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-30 bg-white border-t border-gray-100 flex flex-col justify-between p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-semibold transition-all px-4 py-3 rounded-xl",
                  pathname === link.href
                    ? "bg-[#0F2A4A] text-white shadow-sm"
                    : "text-keytek-text hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col gap-3 mt-auto pb-8">
            <a
              href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hola Vaultec, necesito cotizar un servicio.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#20ba59] py-3.5 text-sm font-bold text-white shadow-lg transition-transform active:scale-95"
            >
              <span>Contactar por WhatsApp</span>
            </a>

            <Link
              href="/emergencias"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-red-600 hover:bg-red-700 py-3.5 text-sm font-bold text-white shadow-lg transition-transform active:scale-95"
            >
              <Shield className="h-4 w-4" />
              <span>Servicio de Emergencia</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
