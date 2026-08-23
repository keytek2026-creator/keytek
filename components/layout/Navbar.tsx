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

  // Prevent background scrolling when mobile menu is open
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
          ? "bg-white shadow-md border-b border-gray-100 py-1"
          : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-1"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent py-2"
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

        {/* Action CTAs removed */}

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
            
            <Link
              href="/emergencias"
              className="flex items-center justify-center gap-3 w-full rounded-xl bg-red-600 py-3.5 text-base font-semibold text-white shadow-xl shadow-red-500/10 hover:bg-red-700 transition-all"
            >
              <Shield className="h-5 w-5 fill-current" />
              <span>Servicio de Emergencia</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
