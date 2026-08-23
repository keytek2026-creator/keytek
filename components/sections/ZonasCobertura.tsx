import Link from "next/link"
import { MapPin, MessageSquare, ShieldCheck } from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"

const REGIONES_COBERTURA = [
  "Arica e Iquique",
  "Antofagasta y Calama",
  "Copiapó y Coquimbo",
  "La Serena y Ovalle",
  "Valparaíso y Viña del Mar",
  "Región Metropolitana",
  "Rancagua y San Fernando",
  "Talca y Curicó",
  "Chillán y Concepción",
  "Temuco y Angol",
  "Valdivia y Osorno",
  "Puerto Montt y Chiloé",
  "Coyhaique y Aysén",
  "Punta Arenas"
]

export function ZonasCobertura() {
  const phoneRaw = CONTACT_INFO.phoneRaw
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hola, necesito consultar cobertura para cajeros automáticos (ATM).")}`

  return (
    <section className="py-20 bg-keytek-bg-soft">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-keytek-blue uppercase tracking-widest bg-keytek-blue/10 px-3.5 py-1.5 rounded-full mb-3 inline-block">
            Alcance Logístico
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-keytek-navy mb-4 mt-2">
            Cobertura Nacional en Todo Chile
          </h2>
          <p className="text-keytek-text-muted text-lg">
            Prestamos servicios de cerrajería de alta seguridad para cajeros automáticos en todas las regiones del país.
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
                Soporte en Todo Chile
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Contamos con la capacidad logística para atender y coordinar servicios técnicos de alta seguridad en cualquier punto del territorio nacional.
              </p>
              
              <ul className="flex flex-col gap-4 text-sm text-gray-200">
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#4FA8E0] shrink-0" />
                  <span>Soporte a sucursales y faenas remotas</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#4FA8E0] shrink-0" />
                  <span>Coordinación centralizada e inmediata</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#4FA8E0] shrink-0" />
                  <span className="font-semibold text-[#9CE0FF]">Cajeros Automáticos (ATM) de norte a sur</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-white/15 mt-8 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#20ba59] py-3 text-sm font-bold text-white hover:scale-105 active:scale-95 transition-transform"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Grid list of regions */}
          <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-150 lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-xl font-bold text-keytek-text mb-6">
                Principales Zonas de Cobertura
              </h3>
              
              {/* Regions Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3.5">
                {REGIONES_COBERTURA.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-keytek-bg-soft border border-gray-50 text-sm font-medium text-keytek-text"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#1B5FA8] shrink-0"></span>
                    <span className="truncate">{region}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning banner for unlisted comunas */}
            <div className="mt-8 pt-6 border-t border-gray-150 flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-50/50 p-4 rounded-2xl">
              <div className="text-xs md:text-sm text-keytek-navy">
                <span className="font-bold block mb-0.5">¿Cajeros en zonas extremas o de difícil acceso?</span>
                Contáctanos directamente. Diseñamos planes de soporte especiales para sucursales en áreas remotas o complejas.
              </div>
              <a
                href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hola, quería consultar cobertura para cajeros automáticos en zonas extremas...")}`}
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
