import { Globe, ShieldCheck, Wrench, Lock } from "lucide-react"

export function PorQueElegirnos() {
  const features = [
    {
      icon: Globe,
      title: "Cobertura Nacional",
      description: "Ofrecemos servicios especializados de cerrajería y aperturas técnicas para cajeros automáticos (ATM) de Arica a Punta Arenas."
    },
    {
      icon: ShieldCheck,
      title: "Técnicos Certificados",
      description: "Nuestro equipo está altamente capacitado en sistemas de bloqueo de alta seguridad (Cencon, Kaba Mas, La Gard) y cuenta con antecedentes intachables."
    },
    {
      icon: Wrench,
      title: "Técnicas No Destructivas",
      description: "Utilizamos herramientas de alta precisión para abrir bóvedas de cajeros sin dañar la estructura ni comprometer la seguridad física."
    },
    {
      icon: Lock,
      title: "Confidencialidad Absoluta",
      description: "Operamos bajo rigurosos protocolos de seguridad y reserva, resguardando la integridad física y la información de accesos bancarios."
    }
  ]

  return (
    <section className="py-20 bg-keytek-bg-soft">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-keytek-navy mb-4">
            ¿Por qué elegir a Vaultec?
          </h2>
          <p className="text-keytek-text-muted text-lg">
            Especialistas en cerrajería bancaria de precisión, ofreciendo soporte técnico de alta seguridad bajo rigurosos estándares y protocolos de confidencialidad.
          </p>
        </div>

        {/* Features Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-keytek-bg-soft text-keytek-blue mb-6">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-keytek-text mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-keytek-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
