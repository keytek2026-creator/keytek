import { notFound } from "next/navigation"
import Link from "next/link"
import * as Icons from "lucide-react"
import { SERVICES, CONTACT_INFO } from "@/lib/data"
import { ContactForm } from "@/components/sections/ContactForm"

interface ServiceDetailPageProps {
  params: {
    slug: string
  }
}

// Generate static routes for the 6 services at build time
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

// Dynamic SEO metadata per service
export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}

  return {
    title: `${service.title} en Todo Chile | Vaultec`,
    description: `${service.shortDescription} Soporte técnico de alta seguridad y aperturas técnicas para bancos, entidades financieras y transporte de valores.`,
  }
}

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name]
  if (!IconComponent) return <Icons.Lock className={className} />
  return <IconComponent className={className} />
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const phoneRaw = CONTACT_INFO.phoneRaw
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(`Hola, necesito cotizar el servicio de: ${service.title}`)}`

  return (
    <>
      {/* Breadcrumb & Header Banner */}
      <section className="bg-gradient-to-b from-[#0F2A4A] to-[#1B5FA8] py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb nav */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <Icons.ChevronRight className="h-3 w-3" />
            <Link href="/servicios" className="hover:text-white transition-colors">
              Servicios
            </Link>
            <Icons.ChevronRight className="h-3 w-3" />
            <span className="text-white font-semibold">{service.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#4FA8E0] mb-5">
              <ServiceIcon name={service.iconName} className="h-6 w-6" />
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 bg-keytek-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-start">
            
            {/* Column 1: Detailed Explanations */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="prose max-w-none text-keytek-text-muted leading-relaxed text-base">
                <h2 className="font-heading text-2xl font-bold text-keytek-text mb-4">
                  Descripción del Servicio
                </h2>
                <p className="mb-6">{service.description}</p>
                
                <h3 className="font-heading text-xl font-bold text-keytek-text mb-3">
                  Detalles de la Operación en Terreno
                </h3>
                <p className="mb-6">{service.detailedContent}</p>
              </div>

              {/* Quick direct contact card */}
              <div className="bg-keytek-bg-soft rounded-3xl p-6 border border-gray-150 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div>
                  <h4 className="font-heading text-lg font-bold text-keytek-text mb-1">
                    ¿Prefieres contactar directamente?
                  </h4>
                  <p className="text-keytek-text-muted text-xs md:text-sm">
                    Comunícate ahora para una atención express o cotización rápida.
                  </p>
                </div>

                <div className="flex w-full sm:w-auto">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white hover:scale-105 active:scale-95 transition-transform"
                  >
                    <Icons.MessageSquare className="h-4 w-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Form & Checklist Info */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              
              {/* Checklist */}
              <div className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-keytek-text tracking-wider uppercase mb-4">
                  Características del Servicio
                </h3>
                <ul className="flex flex-col gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-keytek-text-muted">
                      <Icons.Check className="h-4 w-4 text-keytek-success shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preselected Contact Form */}
              <ContactForm
                defaultService={service.slug}
                title="Presupuesto a Medida"
                subtitle={`Cotiza el servicio de ${service.title} en tu región o comuna.`}
                compact={true}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
