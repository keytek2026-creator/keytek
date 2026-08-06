import Link from "next/link"
import { Shield, Clock, Award, Hammer, Phone } from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"

export const metadata = {
  title: "Nosotros | Keytek Cerrajería",
  description: "Conoce a Keytek, cerrajeros certificados y con antecedentes intachables. Equipamiento de alta gama para aperturas limpias en Santiago.",
}

export default function NosotrosPage() {
  const phoneRaw = CONTACT_INFO.phoneRaw

  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0F2A4A] to-[#1B5FA8] py-16 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-heading text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Seguridad, rapidez y profesionalismo a tu servicio. Conoce por qué somos el servicio de cerrajería mejor valorado en Santiago.
          </p>
        </div>
      </section>

      {/* Main Pitch */}
      <section className="py-20 bg-keytek-bg">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual block */}
            <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1B5FA8] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[300px]">
              <div className="absolute -right-20 -bottom-20 opacity-10 text-white">
                <Shield className="h-64 w-64" />
              </div>
              
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9CE0FF] block mb-3">Nuestra Esencia</span>
                <h2 className="font-heading text-3xl font-bold leading-tight mb-4">
                  Cerrajería con estándares de calidad modernos
                </h2>
                <p className="text-gray-200 text-sm leading-relaxed mb-6">
                  Keytek nació para redefinir el rubro de la cerrajería. Enfocamos nuestro servicio en la transparencia comercial, la máxima rapidez ante emergencias y el uso de herramientas especializadas para evitar daños a la propiedad de nuestros clientes.
                </p>
              </div>

              <div className="relative z-10 border-t border-white/10 pt-6">
                <p className="text-xs text-gray-300 italic">&ldquo;Garantizamos aperturas limpias de puertas residenciales y de vehículos de todas las gamas.&rdquo;</p>
              </div>
            </div>

            {/* Text details */}
            <div className="flex flex-col gap-6">
              <h3 className="font-heading text-2xl font-bold text-keytek-text">
                Profesionales con antecedentes verificados
              </h3>
              
              <p className="text-keytek-text-muted text-sm leading-relaxed">
                Sabemos que la seguridad de tu hogar, oficina o comercio no puede quedar en manos de cualquiera. Por eso, en **Keytek** implementamos un estricto proceso de reclutamiento y verificación de antecedentes de todo nuestro personal técnico.
              </p>

              <p className="text-keytek-text-muted text-sm leading-relaxed">
                Nuestros cerrajeros están equipados con unidades de respuesta rápida que funcionan como talleres móviles. Cuentan con computadoras de corte de llaves para reproducir copias exactas en el acto, y ganzúas de alta tecnología adaptadas a cerraduras multipunto modernas.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-xl bg-keytek-bg-soft border border-gray-100 flex items-center gap-3">
                  <Award className="h-5 w-5 text-keytek-blue shrink-0" />
                  <span className="text-xs font-bold text-keytek-text">Técnicos Certificados</span>
                </div>
                <div className="p-4 rounded-xl bg-keytek-bg-soft border border-gray-100 flex items-center gap-3">
                  <Shield className="h-5 w-5 text-keytek-blue shrink-0" />
                  <span className="text-xs font-bold text-keytek-text">100% Veteados</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-20 bg-keytek-bg-soft border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold text-keytek-navy mb-4">
              Nuestros Pilares de Servicio
            </h2>
            <p className="text-keytek-text-muted text-sm md:text-base">
              Nos enfocamos en cuatro principios clave para entregar la mejor experiencia del mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keytek-bg-soft text-keytek-blue mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-keytek-text mb-2">Rapidez</h3>
              <p className="text-keytek-text-muted text-xs md:text-sm leading-relaxed">
                Minimizamos la espera. Despachamos un cerrajero apenas recibimos tu llamado, coordinados mediante geolocalización.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keytek-bg-soft text-keytek-blue mb-4">
                <Hammer className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-keytek-text mb-2">Precisión Técnica</h3>
              <p className="text-keytek-text-muted text-xs md:text-sm leading-relaxed">
                Utilizamos técnicas limpias para mantener intacta la integridad de tus rejas, puertas y chapas.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keytek-bg-soft text-keytek-blue mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-keytek-text mb-2">Confianza</h3>
              <p className="text-keytek-text-muted text-xs md:text-sm leading-relaxed">
                Precios claros, técnicos identificados y garantía total en todos los servicios de instalación y reparación.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="bg-gradient-to-r from-[#0F2A4A] to-[#1B5FA8] py-12 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="font-heading text-2xl font-bold mb-4">¿Tienes alguna duda o necesitas cotizar?</h3>
          <p className="text-gray-300 text-sm mb-6">Estamos a tu disposición. Llámanos o escríbenos directamente.</p>
          <a
            href={`tel:${phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-red-500/25 hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4 animate-bounce" />
            <span>Llamar al {CONTACT_INFO.phone}</span>
          </a>
        </div>
      </section>
    </>
  )
}
