import { Globe, ShieldCheck, Wrench, Lock, ArrowUpRight } from "lucide-react"

export function PorQueElegirnos() {
  const features = [
    {
      icon: Globe,
      number: "01",
      title: "Cobertura Nacional",
      description: "Capacidad operativa y logística para coordinar servicios técnicos de alta seguridad en todas las regiones y ciudades de Chile.",
      accent: "from-blue-500/20 to-blue-600/5"
    },
    {
      icon: ShieldCheck,
      number: "02",
      title: "Técnicos Certificados",
      description: "Especialistas capacitados en sistemas bancarios Cencon, Kaba Mas, La Gard y CCTV, con verificación rigurosa de antecedentes.",
      accent: "from-emerald-500/20 to-emerald-600/5"
    },
    {
      icon: Wrench,
      number: "03",
      title: "Técnicas No Destructivas",
      description: "Apertura limpia y precisa de bóvedas de cajeros automáticos sin comprometer la integridad estructural ni los sensores de alarma.",
      accent: "from-cyan-500/20 to-cyan-600/5"
    },
    {
      icon: Lock,
      number: "04",
      title: "Confidencialidad Total",
      description: "Estricto cumplimiento de protocolos de reserva, acuerdos de no divulgación y custodia de combinaciones digitales.",
      accent: "from-indigo-500/20 to-indigo-600/5"
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#1B5FA8] uppercase tracking-widest bg-[#1B5FA8]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
            Estándar de Calidad
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2A4A] mb-4 mt-2">
            ¿Por qué elegir a Vaultec?
          </h2>
          <p className="text-keytek-text-muted text-base sm:text-lg">
            Garantizamos rigor técnico, rapidez de respuesta y máxima reserva en cada una de nuestras intervenciones.
          </p>
        </div>

        {/* Features Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.number}
                className="group relative flex flex-col justify-between p-7 bg-[#F4F8FC] rounded-3xl border border-gray-150/80 hover:border-[#1B5FA8]/40 hover:bg-white hover:shadow-xl hover:shadow-[#0F2A4A]/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1B5FA8] shadow-sm group-hover:bg-[#0F2A4A] group-hover:text-[#9CE0FF] transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#1B5FA8] transition-colors">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#0F2A4A] mb-2 group-hover:text-[#1B5FA8] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-keytek-text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
