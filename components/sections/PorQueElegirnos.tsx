import { Clock, ShieldCheck, Wrench, CircleDollarSign } from "lucide-react"

export function PorQueElegirnos() {
  const features = [
    {
      icon: Clock,
      title: "Llegada en 20 Minutos",
      description: "Entendemos la urgencia. Tenemos unidades móviles distribuidas estratégicamente por todo Santiago para llegar a tu ubicación en tiempo récord."
    },
    {
      icon: ShieldCheck,
      title: "Técnicos Certificados",
      description: "Nuestros cerrajeros están altamente capacitados en cerrajería clásica y digital, además de contar con antecedentes intachables verificados."
    },
    {
      icon: Wrench,
      title: "Métodos No Destructivos",
      description: "Utilizamos herramientas tecnológicas de ganzuado profesional para abrir tus puertas o vehículos sin rayar marcos, romper vidrios ni dañar cerraduras."
    },
    {
      icon: CircleDollarSign,
      title: "Precios Transparentes",
      description: "Sin sorpresas. Te entregamos un presupuesto estimado y transparente antes de salir al terreno. El precio acordado es el precio que pagas."
    }
  ]

  return (
    <section className="py-20 bg-keytek-bg-soft">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-keytek-navy mb-4">
            ¿Por qué elegir a Keytek?
          </h2>
          <p className="text-keytek-text-muted text-lg">
            Combinamos la rapidez de la cerrajería de urgencia tradicional con la precisión y el equipamiento de la cerrajería digital moderna.
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
