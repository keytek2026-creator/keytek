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
            href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hola, tengo una consulta sobre sus servicios.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-[#25D366]/20 hover:scale-105 transition-transform"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Escríbenos por WhatsApp</span>
          </a>
        </div>
      </section>
    </>
  )
}
