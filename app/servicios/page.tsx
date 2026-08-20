import Link from "next/link"
import * as Icons from "lucide-react"
import { SERVICES } from "@/lib/data"
import { ContactForm } from "@/components/sections/ContactForm"

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name]
  if (!IconComponent) return <Icons.Lock className={className} />
  return <IconComponent className={className} />
}

export const metadata = {
  title: "Servicios de Cerrajería | Keytek",
  description: "Apertura de puertas, cambio de cerraduras, cerrajería de cajeros automáticos, cajas fuertes, cerraduras inteligentes, cerrajería comercial e instalación de cámaras de seguridad.",
}

export default function ServiciosPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0F2A4A] to-[#1B5FA8] py-16 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-heading text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Soluciones rápidas, garantizadas y con tecnología avanzada para cualquier inconveniente de cerrajería en Santiago.
          </p>
        </div>
      </section>

      {/* Services List section */}
      <section className="py-20 bg-keytek-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 max-w-5xl mx-auto">
            {SERVICES.map((service, idx) => (
              <div
                key={service.slug}
                className={`flex flex-col lg:flex-row items-stretch gap-10 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left block: Icon & Quick features */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-keytek-bg-soft text-keytek-blue mb-6">
                      <ServiceIcon name={service.iconName} className="h-7 w-7" />
                    </div>
                    
                    <h2 className="font-heading text-2xl font-bold text-keytek-text mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-keytek-text-muted text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#1B5FA8] hover:text-[#0F2A4A] transition-colors"
                    >
                      <span>Ver detalles completos</span>
                      <Icons.ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right block: Checklist features */}
                <div className="flex-1 bg-keytek-bg-soft p-6 rounded-2xl flex flex-col justify-between border border-gray-50">
                  <div>
                    <h3 className="font-heading text-sm font-bold tracking-wider text-keytek-text uppercase mb-4">
                      ¿Qué incluye este servicio?
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm text-keytek-text-muted">
                          <Icons.CheckCircle2 className="h-5 w-5 text-keytek-success shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.emergencia && (
                    <div className="mt-6 rounded-xl bg-red-50 p-4 border border-red-100 text-xs text-red-800 flex items-start gap-2.5">
                      <Icons.AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5 animate-pulse" />
                      <div>
                        <span className="font-bold block mb-0.5">Servicio Disponible de Urgencia</span>
                        Llegamos a tu ubicación de forma inmediata. Haz click en el botón de WhatsApp o llama directamente.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 bg-keytek-bg-soft border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
