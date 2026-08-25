import Link from "next/link"
import * as Icons from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface SubService {
  title: string
  description: string
  iconName: keyof typeof Icons
  href: string
  badge: string
}

const ALL_SUB_SERVICES: SubService[] = [
  // ATM Locksmithing
  {
    title: "Apertura Técnica de Bóvedas",
    description: "Apertura técnica y no destructiva de bóvedas de cajeros automáticos (ATMs) ante fallos de cerradura, pérdida de claves o vandalismo.",
    iconName: "Unlock",
    href: "/servicios/cerrajeria-cajeros-automaticos",
    badge: "Cerrajería ATM"
  },
  {
    title: "Cerraduras de Retardo y Bloqueo",
    description: "Instalación, reprogramación y auditoría de cerraduras electrónicas avanzadas homologadas por la industria (Cencon, Kaba, La Gard, S&G).",
    iconName: "Key",
    href: "/servicios/cerrajeria-cajeros-automaticos",
    badge: "Cerrajería ATM"
  },
  {
    title: "Mantenimiento Operativo y Correctivo",
    description: "Mantención preventiva del sistema de pasadores, pestillos y mecanismos de cierre para evitar bloqueos operativos imprevistos.",
    iconName: "Wrench",
    href: "/servicios/cerrajeria-cajeros-automaticos",
    badge: "Cerrajería ATM"
  },
  {
    title: "Reparación Post-Vandalismo",
    description: "Restauración inmediata de la seguridad física de bóvedas y cajeros tras intentos de robo, sabotaje, o daños estructurales.",
    iconName: "ShieldAlert",
    href: "/servicios/cerrajeria-cajeros-automaticos",
    badge: "Cerrajería ATM"
  },
  // Camera Installation
  {
    title: "Instalación de Cámaras IP y CCTV",
    description: "Instalación de cámaras de alta definición (HD, 4K) para interiores y exteriores, con visión nocturna y resistencia a la intemperie.",
    iconName: "Camera",
    href: "/servicios/instalacion-camaras",
    badge: "Videovigilancia"
  },
  {
    title: "Sistemas NVR/DVR y Grabación en Nube",
    description: "Configuración de grabadores locales o en la nube para almacenamiento seguro de video con acceso remoto en tiempo real desde cualquier dispositivo.",
    iconName: "MonitorPlay",
    href: "/servicios/instalacion-camaras",
    badge: "Videovigilancia"
  },
  {
    title: "Detección de Movimiento y Alertas",
    description: "Configuración de analítica de video inteligente con alertas automáticas al celular ante intrusiones o eventos sospechosos.",
    iconName: "BellRing",
    href: "/servicios/instalacion-camaras",
    badge: "Videovigilancia"
  },
  {
    title: "Mantención de Sistemas de Vigilancia",
    description: "Revisión periódica, actualización de firmware y soporte técnico para sistemas de videovigilancia existentes en hogares y empresas.",
    iconName: "ScanEye",
    href: "/servicios/instalacion-camaras",
    badge: "Videovigilancia"
  }
]

function ServiceIcon({ name, className }: { name: keyof typeof Icons; className?: string }) {
  const IconComponent = Icons[name] as any
  if (!IconComponent) return <Icons.Lock className={className} />
  return <IconComponent className={className} />
}

const BADGE_COLORS: Record<string, string> = {
  "Cerrajería ATM": "bg-blue-100 text-blue-700",
  "Videovigilancia": "bg-emerald-100 text-emerald-700"
}

export function ServiciosGrid() {
  const phoneRaw = CONTACT_INFO.phoneRaw
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hola, necesito cotizar un servicio de seguridad.")}`

  return (
    <section id="servicios" className="py-20 bg-keytek-bg">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-keytek-blue uppercase tracking-widest bg-keytek-blue/10 px-3.5 py-1.5 rounded-full mb-3 inline-block">
            Nuestros Servicios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-keytek-navy mb-4 mt-2">
            Seguridad Integral para tu Negocio
          </h2>
          <p className="text-keytek-text-muted text-lg">
            Cerrajería especializada en cajeros automáticos (ATM) e instalación profesional de sistemas de videovigilancia en todo Chile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ALL_SUB_SERVICES.map((subService) => (
            <Link key={subService.title} href={subService.href}>
              <Card className="group relative flex flex-col justify-between overflow-hidden border border-gray-150 hover:shadow-xl hover:border-keytek-blue/30 transition-all duration-300 rounded-2xl bg-white h-full cursor-pointer">
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-keytek-blue to-keytek-blue-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <CardHeader className="pt-8 px-6">
                  {/* Badge */}
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit mb-3 ${BADGE_COLORS[subService.badge]}`}>
                    {subService.badge}
                  </span>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-keytek-bg-soft text-keytek-blue mb-4 group-hover:bg-keytek-blue group-hover:text-white transition-all duration-300">
                    <ServiceIcon name={subService.iconName} className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg font-bold text-keytek-text group-hover:text-keytek-blue transition-colors duration-200">
                    {subService.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-8 flex-grow">
                  <CardDescription className="text-keytek-text-muted leading-relaxed text-sm">
                    {subService.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="/servicios/cerrajeria-cajeros-automaticos"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-keytek-blue to-[#1B5FA8] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform"
          >
            <Icons.CreditCard className="h-4 w-4" />
            <span>Cerrajería ATM</span>
          </Link>
          <Link
            href="/servicios/instalacion-camaras"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-keytek-blue px-6 py-3.5 text-sm font-bold text-keytek-blue hover:bg-keytek-blue hover:text-white shadow-lg hover:scale-105 transition-all"
          >
            <Icons.Camera className="h-4 w-4" />
            <span>Instalación de Cámaras</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
