"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Shield } from "lucide-react"
import { Logo } from "@/components/ui/Logo"
import { CONTACT_INFO } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

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
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-keytek-blue",
                pathname === link.href
                  ? "text-keytek-blue font-semibold"
                  : "text-keytek-text-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-keytek-navy hover:text-keytek-blue transition-colors px-3 py-2 rounded-lg hover:bg-keytek-bg-soft"
          >
            <Phone className="h-4 w-4 text-keytek-blue animate-bounce" />
            <span>Llamar ahora</span>
          </a>
          
          <Link
            href="/emergencias"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/20 hover:scale-105 transition-all duration-200"
          >
            <span className="absolute -inset-1 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <Shield className="h-4 w-4 fill-current text-white animate-pulse" />
            <span>Urgencias 24/7</span>
          </Link>
        </div>

        {/* Mobile menu trigger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center p-2 rounded-lg text-keytek-text hover:bg-keytek-bg-soft transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-30 bg-white border-t border-gray-100 flex flex-col justify-between p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-keytek-blue py-1 border-b border-gray-50",
                  pathname === link.href ? "text-keytek-blue font-bold" : "text-keytek-text"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-col gap-4 mt-auto pb-10">
            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center justify-center gap-3 w-full rounded-xl border border-gray-200 py-3.5 text-base font-semibold text-keytek-navy bg-keytek-bg-soft hover:bg-gray-100 transition-all"
            >
              <Phone className="h-5 w-5 text-keytek-blue" />
              <span>Llamar al {CONTACT_INFO.phone}</span>
            </a>
            
            <Link
              href="/emergencias"
              className="flex items-center justify-center gap-3 w-full rounded-xl bg-red-600 py-3.5 text-base font-semibold text-white shadow-xl shadow-red-500/10 hover:bg-red-700 transition-all"
            >
              <Shield className="h-5 w-5 fill-current" />
              <span>Servicio de Emergencia 24/7</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
