import { Phone, MessageSquare, Clock } from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"

export function CTAEmergencia() {
  const phoneRaw = CONTACT_INFO.phoneRaw
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappText)}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2A4A] to-[#1B5FA8] py-16 text-white text-center">
      
      {/* Sutil background grid of PCB dots/lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full text-[#4FA8E0]" viewBox="0 0 1000 300" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 100,50 L 300,50 L 350,100 L 700,100 L 750,150 L 900,150" />
          <path d="M 200,250 L 400,250 L 450,200 L 800,200 L 850,250" />
          <circle cx="300" cy="50" r="3" fill="currentColor" />
          <circle cx="700" cy="100" r="3" fill="currentColor" />
          <circle cx="450" cy="200" r="3" fill="currentColor" />
          <circle cx="800" cy="200" r="3" fill="#9CE0FF" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          
          {/* Pulsing indicator */}
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 px-4 py-1 text-xs font-semibold text-red-300 uppercase tracking-wider animate-pulse">
            <Clock className="h-3.5 w-3.5" />
            <span>Servicio Técnico 24/7 Disponible</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            ¿Te quedaste fuera o necesitas cambiar cerraduras urgente?
          </h2>
          
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            No esperes más. Llámanos por teléfono o escríbenos directamente por WhatsApp. Despachamos un cerrajero a tu comuna en menos de 5 minutos.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
            
            {/* Call button */}
            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-red-500/20 hover:scale-105 active:scale-95 transition-transform"
            >
              <Phone className="h-5 w-5 animate-bounce" />
              <span>Llamar al Cerrajero</span>
            </a>

            {/* WhatsApp button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-xl bg-[#25D366] px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-[#25D366]/20 hover:scale-105 active:scale-95 transition-transform"
            >
              <MessageSquare className="h-5 w-5 fill-current" />
              <span>Contactar por WhatsApp</span>
            </a>

          </div>

          <p className="text-xs text-gray-300 font-semibold tracking-wide uppercase mt-4">
            Llegada promedio: 20 minutos • Presupuesto transparente sin compromiso
          </p>

        </div>
      </div>
    </section>
  )
}
