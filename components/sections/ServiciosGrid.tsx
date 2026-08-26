import Link from "next/link"
import * as Icons from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"
import { ArrowRight, Shield, Video, CheckCircle2, Lock, Camera, Server, Bell, Wrench, Unlock } from "lucide-react"

export function ServiciosGrid() {
  const phoneRaw = CONTACT_INFO.phoneRaw

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#F4F8FC]">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#1B5FA8] uppercase tracking-widest bg-[#1B5FA8]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
            Nuestros Pilares de Seguridad
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2A4A] mb-4 mt-2">
            Soluciones Especializadas en Alta Seguridad
          </h2>
          <p className="text-keytek-text-muted text-base sm:text-lg">
            Combinamos cerrajería técnica de bóvedas bancarias con sistemas de videovigilancia IP y CCTV para proteger activos críticos en todo Chile.
          </p>
        </div>

        {/* Bento Grid Layout (2 Master Pillars) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto mb-12">
          
          {/* Pillar 1: Cerrajería ATM (Master Card 6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-gray-150 p-8 shadow-xl shadow-gray-200/50 flex flex-col justify-between hover:border-[#1B5FA8]/40 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1B5FA8] border border-blue-200">
                  <Shield className="h-3.5 w-3.5" />
                  Especialidad Bancaria
                </span>
                <span className="text-xs font-mono font-semibold text-gray-400">01 // ATM LOCKS</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F2A4A] text-[#9CE0FF] shadow-lg group-hover:scale-110 transition-transform">
                  <Lock className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#0F2A4A]">
                    Cerrajería de Cajeros Automáticos
                  </h3>
                  <p className="text-xs font-semibold text-[#1B5FA8] uppercase tracking-wider">Apertura y Bóvedas</p>
                </div>
              </div>

              <p className="text-keytek-text-muted text-sm leading-relaxed mb-6">
                Servicio técnico y confidencial para la apertura no destructiva de bóvedas de cajeros automáticos (ATM), reprogramación de claves electrónicas y auditorías de seguridad.
              </p>

              {/* Sub-features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100 text-xs font-medium text-keytek-text mb-6">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F4F8FC]">
                  <Unlock className="h-4 w-4 text-[#1B5FA8] shrink-0" />
                  <span>Apertura Técnica de Bóvedas</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F4F8FC]">
                  <Icons.Key className="h-4 w-4 text-[#1B5FA8] shrink-0" />
                  <span>Cerraduras Cencon / Kaba / La Gard</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F4F8FC]">
                  <Wrench className="h-4 w-4 text-[#1B5FA8] shrink-0" />
                  <span>Mantención de Pasadores y Cierres</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F4F8FC]">
                  <Icons.ShieldAlert className="h-4 w-4 text-[#1B5FA8] shrink-0" />
                  <span>Reparación Post-Vandalismo</span>
                </div>
              </div>
            </div>

            <Link
              href="/servicios/cerrajeria-cajeros-automaticos"
              className="inline-flex items-center justify-between w-full rounded-2xl bg-[#0F2A4A] hover:bg-[#1B5FA8] p-4 text-sm font-bold text-white transition-colors"
            >
              <span>Ver Especificaciones Técnicas ATM</span>
              <ArrowRight className="h-4 w-4 text-[#9CE0FF]" />
            </Link>
          </div>

          {/* Pillar 2: Instalación de Cámaras (Master Card 6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-gray-150 p-8 shadow-xl shadow-gray-200/50 flex flex-col justify-between hover:border-[#1B5FA8]/40 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Video className="h-3.5 w-3.5" />
                  CCTV & Analítica
                </span>
                <span className="text-xs font-mono font-semibold text-gray-400">02 // CCTV & IP</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B5FA8] text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Camera className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#0F2A4A]">
                    Instalación de Cámaras de Seguridad
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">IP / 4K / CCTV</p>
                </div>
              </div>

              <p className="text-keytek-text-muted text-sm leading-relaxed mb-6">
                Diseño, instalación y configuración de sistemas de videovigilancia de alta definición con visión nocturna, analítica inteligente de movimiento y monitoreo remoto continuo.
              </p>

              {/* Sub-features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100 text-xs font-medium text-keytek-text mb-6">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F4F8FC]">
                  <Icons.Eye className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Cámaras IP HD y 4K Int/Ext</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F4F8FC]">
                  <Server className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Grabación NVR/DVR y Nube</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F4F8FC]">
                  <Bell className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Alertas y Detección Inteligente</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F4F8FC]">
                  <Icons.Smartphone className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Monitoreo Remoto en Móvil</span>
                </div>
              </div>
            </div>

            <Link
              href="/servicios/instalacion-camaras"
              className="inline-flex items-center justify-between w-full rounded-2xl bg-[#1B5FA8] hover:bg-[#0F2A4A] p-4 text-sm font-bold text-white transition-colors"
            >
              <span>Ver Planes de Videovigilancia</span>
              <ArrowRight className="h-4 w-4 text-[#9CE0FF]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
