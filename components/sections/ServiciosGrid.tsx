import Link from "next/link"
import * as Icons from "lucide-react"
import { SERVICES } from "@/lib/data"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name]
  if (!IconComponent) return <Icons.Lock className={className} />
  return <IconComponent className={className} />
}

export function ServiciosGrid() {
  return (
    <section className="py-20 bg-keytek-bg">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-keytek-navy mb-4">
            Servicios Profesionales de Cerrajería
          </h2>
          <p className="text-keytek-text-muted text-lg">
            Ofrecemos soluciones definitivas y de alta calidad para proteger lo que más te importa. Servicio a domicilio con técnicos capacitados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Card
              key={service.slug}
              className="group relative flex flex-col justify-between overflow-hidden border border-gray-150 hover:shadow-xl hover:border-keytek-blue/30 transition-all duration-300 rounded-2xl"
            >
              {/* Top Accent circuit glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-keytek-blue to-keytek-blue-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <CardHeader className="pt-8 px-6">
                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keytek-bg-soft text-keytek-blue mb-5 group-hover:bg-keytek-blue group-hover:text-white transition-all duration-300">
                  <ServiceIcon name={service.iconName} className="h-6 w-6" />
                </div>
                
                {/* Title & Emergency Badge */}
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-heading text-xl font-bold text-keytek-text group-hover:text-keytek-blue transition-colors duration-200">
                    {service.title}
                  </CardTitle>
                  
                  {service.emergencia && (
                    <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/10 shrink-0">
                      Urgente 24/7
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-8 flex-grow flex flex-col justify-between">
                <CardDescription className="text-keytek-text-muted leading-relaxed text-sm mb-6">
                  {service.shortDescription}
                </CardDescription>

                {/* Navigation CTA Link */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-keytek-blue hover:text-keytek-navy transition-colors"
                  >
                    <span>Detalles del servicio</span>
                    <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
