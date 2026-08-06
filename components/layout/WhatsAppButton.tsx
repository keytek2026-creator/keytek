"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const phone = CONTACT_INFO.phoneRaw
  const message = encodeURIComponent(CONTACT_INFO.whatsappText)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 md:bottom-8 md:right-8">
      {showTooltip && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 relative flex max-w-xs items-center gap-2 rounded-xl bg-white p-3 shadow-2xl border border-gray-100 ring-1 ring-black/5">
          <div className="text-xs md:text-sm font-medium text-keytek-text pr-4">
            <span className="font-semibold text-keytek-success block">¿Necesitas ayuda?</span>
            Escríbenos ahora por WhatsApp para una respuesta inmediata.
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-keytek-text-muted hover:text-keytek-text rounded-full p-0.5 hover:bg-gray-100 transition-colors"
            aria-label="Cerrar mensaje"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}
      
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTooltip(false)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 md:h-16 md:w-16"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulsing ring outline */}
        <span className="absolute -inset-1 animate-ping rounded-full bg-[#25D366]/40 opacity-75 duration-1000"></span>
        
        {/* WhatsApp Icon SVG */}
        <svg
          className="h-7 w-7 transition-transform group-hover:rotate-12 md:h-8 md:w-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
