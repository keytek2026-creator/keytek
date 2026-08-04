import Link from "next/link"
import { MapPin, Phone, MessageSquare, ShieldCheck } from "lucide-react"
import { COMUNAS, CONTACT_INFO } from "@/lib/data"

export function ZonasCobertura() {
  const phoneRaw = CONTACT_INFO.phoneRaw

  return (
    <section className="py-20 bg-keytek-bg-soft">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-keytek-navy mb-4">
            Zonas de Cobertura en Santiago
          </h2>
          <p className="text-keytek-text-muted text-lg">
            Nuestros cerrajeros están distribuidos estratégicamente para garantizar tiempos de respuesta rápidos ante emergencias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: Map/Indicator Block */}
          <div className="bg-[#0F2A4A] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between border border-[#1B5FA8]/20 lg:col-span-1">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#4FA8E0] mb-6">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Atención Rápida Garantizada
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Contamos con talleres móviles equipados con herramientas de diagnóstico y corte computarizado circulando de forma permanente por la Región Metropolitana.
              </p>
              
              <ul className="flex flex-col gap-4 text-sm text-gray-200">
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#4FA8E0] shrink-0" />
                  <span>Cobertura en comunas residenciales y comerciales</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#4FA8E0] shrink-0" />
                  <span>Tiempos de llegada entre 15 a 30 minutos máximo</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-white/15 mt-8 flex flex-col gap-3">
              <a
                href={`tel:${phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-red-600 to-red-500 py-3 text-sm font-bold text-white hover:scale-105 active:scale-95 transition-transform"
              >
                <Phone className="h-4 w-4 text-white" />
                <span>Llamar por Urgencia</span>
              </a>
            </div>
          </div>

          {/* Card 2: Grid list of comunas */}
          <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-xl font-bold text-keytek-text mb-6">
                Comunas que atendemos
              </h3>
              
              {/* Comunas Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3.5">
                {COMUNAS.map((comuna) => (
                  <div
                    key={comuna}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-keytek-bg-soft border border-gray-50 text-sm font-medium text-keytek-text"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#1B5FA8] shrink-0"></span>
                    <span className="truncate">{comuna}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning banner for unlisted comunas */}
            <div className="mt-8 pt-6 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-50/50 p-4 rounded-2xl">
              <div className="text-xs md:text-sm text-keytek-navy">
                <span className="font-bold block mb-0.5">¿No ves tu comuna en la lista?</span>
                Contáctanos igual. Evaluamos traslados según disponibilidad inmediata de técnicos.
              </div>
              <a
                href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hola, quería consultar si tienen cobertura en mi sector...")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-[#1B5FA8]/20 px-4 py-2.5 text-xs font-bold text-[#1B5FA8] hover:bg-[#1B5FA8] hover:text-white transition-all shadow-sm shrink-0"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Consultar Cobertura</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
