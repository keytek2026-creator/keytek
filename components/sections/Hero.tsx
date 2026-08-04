import { Phone, Clock, ShieldCheck, UserCheck, Key } from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"

export function Hero() {
  const phoneRaw = CONTACT_INFO.phoneRaw
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappText)}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F2A4A] via-[#0F2A4A] to-[#1B5FA8] py-20 lg:py-28 text-white">
      
      {/* SVG PCB Circuit Watermark Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg
          className="absolute right-0 top-0 h-full w-[60%] text-[#4FA8E0]"
          viewBox="0 0 800 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Circuit Paths */}
          <path d="M 200,100 L 400,100 L 450,150 L 600,150 L 650,200 L 750,200" />
          <path d="M 150,300 L 300,300 L 350,350 L 500,350 L 550,400 L 700,400" />
          <path d="M 300,500 L 450,500 L 500,450 L 750,450" />
          
          {/* Connecting Branches */}
          <path d="M 400,100 L 400,200 L 420,220" />
          <path d="M 500,350 L 500,250 L 550,200" />
          
          {/* Circuit Nodes (Dots) */}
          <circle cx="200" cy="100" r="4" fill="currentColor" />
          <circle cx="600" cy="150" r="4" fill="currentColor" />
          <circle cx="750" cy="200" r="6" fill="#9CE0FF" className="animate-pulse" />
          <circle cx="150" cy="300" r="4" fill="currentColor" />
          <circle cx="550" cy="400" r="4" fill="currentColor" />
          <circle cx="700" cy="400" r="6" fill="#9CE0FF" className="animate-pulse" />
          <circle cx="300" cy="500" r="4" fill="currentColor" />
          <circle cx="750" cy="450" r="6" fill="#9CE0FF" className="animate-pulse" />
          <circle cx="420" cy="220" r="3" fill="currentColor" />
          <circle cx="550" cy="200" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Emergency Tag */}
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 px-4 py-1.5 text-xs font-semibold text-red-300 mb-6 uppercase tracking-wider animate-pulse">
            <span className="flex h-2 w-2 rounded-full bg-red-500"></span>
            Servicio de Cerrajería de Emergencia 24/7
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6 max-w-3xl">
            Cerrajeros de Confianza con Respuesta en <span className="text-[#4FA8E0]">20 Minutos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            ¿Perdiste tus llaves, olvidaste tu clave o necesitas un cambio de cerradura? Atendemos emergencias residenciales, automotrices y comerciales en todo Santiago.
          </p>

          {/* Double Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
            
            {/* Primary Phone Button */}
            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-red-500/30 hover:scale-105 active:scale-95 transition-all duration-200 group"
            >
              <Phone className="h-5 w-5 text-white animate-bounce group-hover:scale-110" />
              <span>Llamar al Cerrajero</span>
            </a>

            {/* Secondary WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#25D366]/20 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {/* WhatsApp Icon */}
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Escribir por WhatsApp</span>
            </a>

          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl border-t border-white/10 pt-10">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#9CE0FF] backdrop-blur-md">
                <Clock className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Llegada Rápida</span>
              <span className="text-sm font-bold">20 Minutos Promedio</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#9CE0FF] backdrop-blur-md">
                <UserCheck className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Profesionales</span>
              <span className="text-sm font-bold">Técnicos Certificados</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#9CE0FF] backdrop-blur-md">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Calidad</span>
              <span className="text-sm font-bold">Garantía en Trabajos</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#9CE0FF] backdrop-blur-md">
                <Key className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Horario</span>
              <span className="text-sm font-bold">Servicio 24 Horas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
