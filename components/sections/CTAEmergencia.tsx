import { MessageSquare, Clock, ShieldAlert, ArrowRight } from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"
import Link from "next/link"

export function CTAEmergencia() {
  const phoneRaw = CONTACT_INFO.phoneRaw
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappText)}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A2F] via-[#0F2A4A] to-[#143B66] py-16 lg:py-20 text-white text-center">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1B5FA8]/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-5xl">
        <div className="rounded-3xl bg-white/5 border border-white/15 p-8 sm:p-12 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-6">
          
          {/* Pulsing indicator */}
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 px-4 py-1.5 text-xs font-bold text-red-300 uppercase tracking-wider animate-pulse">
            <span className="h-2 w-2 rounded-full bg-red-400"></span>
            <span>Mesa de Ayuda y Coordinación 24/7</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
            ¿Bloqueo o requerimiento urgente en cajeros automáticos (ATM)?
          </h2>
          
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed text-center">
            Asistencia técnica autorizada a nivel nacional. Escríbenos directamente por WhatsApp para coordinar el despacho o asignación técnica inmediata.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-4 max-w-lg">
            {/* WhatsApp button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageSquare className="h-5 w-5 fill-current shrink-0" />
              <span>WhatsApp Urgencias ATM</span>
            </a>

            {/* Direct Form link */}
            <Link
              href="/emergencias"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:scale-105"
            >
              <span>Ver Protocolo de Urgencia</span>
              <ArrowRight className="h-4 w-4 text-[#9CE0FF]" />
            </Link>
          </div>

          <p className="text-xs text-gray-300 font-medium tracking-wide mt-4">
            Atención sujeta a coordinación operativa en todo Chile • Protocolos de reserva bancaria
          </p>

        </div>
      </div>
    </section>
  )
}
