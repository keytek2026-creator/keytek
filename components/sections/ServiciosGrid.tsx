import Link from "next/link"
import * as Icons from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface AtmSubService {
  title: string
  description: string
  iconName: keyof typeof Icons
}

const ATM_SUB_SERVICES: AtmSubService[] = [
  {
    title: "Apertura Técnica de Bóvedas",
    description: "Apertura técnica y no destructiva de bóvedas de cajeros automáticos (ATMs) ante fallos de cerradura, pérdida de claves o vandalismo.",
    iconName: "Unlock"
  },
  {
    title: "Sistemas de Bloqueo y Cerraduras de Retardo",
    description: "Instalación, reprogramación y auditoría de cerraduras electrónicas avanzadas homologadas por la industria (Cencon, Kaba, La Gard, S&G).",
    iconName: "Key"
  },
  {
    title: "Mantenimiento Operativo y Correctivo",
    description: "Mantención preventiva del sistema de pasadores, pestillos y mecanismos de cierre para evitar bloqueos operativos imprevistos.",
    iconName: "Wrench"
  },
  {
    title: "Reparación Post-Vandalismo",
    description: "Restauración inmediata de la seguridad física de bóvedas y cajeros tras intentos de robo, sabotaje, o daños estructurales.",
    iconName: "ShieldAlert"
  }
]

function ServiceIcon({ name, className }: { name: keyof typeof Icons; className?: string }) {
  const IconComponent = Icons[name] as any
  if (!IconComponent) return <Icons.Lock className={className} />
  return <IconComponent className={className} />
}

export function ServiciosGrid() {
  const phoneRaw = CONTACT_INFO.phoneRaw
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hola, necesito cotizar un servicio para cajero automático (ATM).")}`

  return (
    <section id="servicios" className="py-20 bg-keytek-bg">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-keytek-blue uppercase tracking-widest bg-keytek-blue/10 px-3.5 py-1.5 rounded-full mb-3 inline-block">
            Nuestra Especialidad
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-keytek-navy mb-4 mt-2">
            Servicios Especializados en Cajeros Automáticos (ATM)
          </h2>
          <p className="text-keytek-text-muted text-lg">
            Soporte técnico integral y confidencial para la protección e integridad física de bóvedas y sistemas de seguridad electrónica de ATMs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ATM_SUB_SERVICES.map((subService) => (
            <Card
              key={subService.title}
              className="group relative flex flex-col justify-between overflow-hidden border border-gray-150 hover:shadow-xl hover:border-keytek-blue/30 transition-all duration-300 rounded-2xl bg-white"
            >
              {/* Top Accent circuit glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-keytek-blue to-keytek-blue-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <CardHeader className="pt-8 px-6">
                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keytek-bg-soft text-keytek-blue mb-5 group-hover:bg-keytek-blue group-hover:text-white transition-all duration-300">
                  <ServiceIcon name={subService.iconName} className="h-6 w-6" />
                </div>
                
                {/* Title */}
                <CardTitle className="font-heading text-xl font-bold text-keytek-text group-hover:text-keytek-blue transition-colors duration-200">
                  {subService.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-6 pb-8 flex-grow">
                <CardDescription className="text-keytek-text-muted leading-relaxed text-sm mb-6">
                  {subService.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dynamic CTA Link below grid */}
        <div className="text-center mt-12">
          <Link
            href="/servicios/cerrajeria-cajeros-automaticos"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-keytek-blue to-[#1B5FA8] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform"
          >
            <span>Ver Detalles Técnicos Completos</span>
            <Icons.ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
