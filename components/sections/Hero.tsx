import Link from "next/link"
import { Shield, ShieldCheck, Lock, Video, CheckCircle2, ArrowRight, MessageSquare, Award, Clock } from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"

export function Hero() {
  const phoneRaw = CONTACT_INFO.phoneRaw
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappText)}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A2F] via-[#0F2A4A] to-[#143B66] py-16 lg:py-24 text-white">
      
      {/* High-tech circuit & glow background effects */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <svg
          className="absolute right-0 top-0 h-full w-[70%] text-[#4FA8E0]"
          viewBox="0 0 900 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M 100,120 L 350,120 L 400,170 L 650,170 L 700,220 L 850,220" />
          <path d="M 50,320 L 250,320 L 300,370 L 550,370 L 600,420 L 800,420" />
          <path d="M 250,520 L 450,520 L 500,470 L 850,470" />
          <circle cx="350" cy="120" r="4" fill="#9CE0FF" />
          <circle cx="700" cy="220" r="5" fill="#4FA8E0" className="animate-pulse" />
          <circle cx="300" cy="370" r="4" fill="#9CE0FF" />
          <circle cx="800" cy="420" r="5" fill="#4FA8E0" className="animate-pulse" />
          <circle cx="500" cy="470" r="4" fill="#9CE0FF" />
        </svg>
      </div>

      {/* Subtle radial ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1B5FA8]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-[#9CE0FF]/30 px-4 py-1.5 text-xs font-semibold text-[#9CE0FF] mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#25D366] animate-ping"></span>
              <span>Seguridad Bancaria & Videovigilancia Nacional</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Protección y Soporte Técnico para <span className="bg-gradient-to-r from-[#4FA8E0] via-[#9CE0FF] to-white bg-clip-text text-transparent">Cajeros Automáticos y Cámaras</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Especialistas en apertura técnica no destructiva de bóvedas de ATM, cambio de combinación y proyectos de videovigilancia CCTV en todo Chile.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-[#25D366] hover:bg-[#20ba59] px-7 py-4 text-base font-bold text-white shadow-xl shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-all"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>Contactar por WhatsApp</span>
              </a>

              <Link
                href="#servicios"
                className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:scale-105"
              >
                <span>Ver Servicios</span>
                <ArrowRight className="h-4 w-4 text-[#9CE0FF]" />
              </Link>
            </div>

            {/* Mini trust checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-white/10 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#4FA8E0] shrink-0" />
                <span>Todo Chile 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#4FA8E0] shrink-0" />
                <span>Protocolo Bancario</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#4FA8E0] shrink-0" />
                <span>Técnicos Certificados</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Security Terminal Card (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl bg-gradient-to-b from-white/15 to-white/5 border border-white/20 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-[#0A1A2F]/50 overflow-hidden">
              
              {/* Header inside terminal */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#9CE0FF]">
                  VAULTEC // SECURITY SYSTEM
                </span>
              </div>

              {/* Status metrics grid */}
              <div className="flex flex-col gap-4">
                
                {/* Metric 1 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0F2A4A]/60 border border-white/10">
                  <div className="p-2.5 rounded-xl bg-[#1B5FA8]/40 text-[#9CE0FF] shrink-0">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">Cerrajería Bancaria de ATMs</h3>
                    <p className="text-xs text-gray-300">Cencon, Kaba Mas, La Gard, Sargent & Greenleaf.</p>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0F2A4A]/60 border border-white/10">
                  <div className="p-2.5 rounded-xl bg-[#1B5FA8]/40 text-[#4FA8E0] shrink-0">
                    <Video className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">Videovigilancia & Cámaras IP</h3>
                    <p className="text-xs text-gray-300">Monitoreo 4K, almacenamiento NVR/DVR y nube.</p>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0F2A4A]/60 border border-white/10">
                  <div className="p-2.5 rounded-xl bg-[#1B5FA8]/40 text-[#25D366] shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">Cobertura Operativa Nacional</h3>
                    <p className="text-xs text-gray-300">Asistencia técnica programada en todo Chile.</p>
                  </div>
                </div>

              </div>

              {/* Bottom Guarantee Banner */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Award className="h-4 w-4 text-[#9CE0FF]" />
                  Garantía Técnica Certificada
                </span>
                <span className="text-[#9CE0FF] font-semibold">24/7 Disponible</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
