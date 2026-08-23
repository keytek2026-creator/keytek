import { MapPin, Clock, Navigation, CheckCircle2 } from "lucide-react"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata = {
  title: "Cobertura Nacional de Cerrajería ATM | Keytek",
  description: "Soporte técnico y apertura de cajeros automáticos (ATM) en todo Chile. Cobertura en todas las regiones de Arica a Punta Arenas.",
}

const REGIONES_COBERTURA = [
  "Arica e Iquique",
  "Antofagasta y Calama",
  "Copiapó y Coquimbo",
  "La Serena y Ovalle",
  "Valparaíso y Viña del Mar",
  "Región Metropolitana",
  "Rancagua y San Fernando",
  "Talca y Curicó",
  "Chillán y Concepción",
  "Temuco y Angol",
  "Valdivia y Osorno",
  "Puerto Montt y Chiloé",
  "Coyhaique y Aysén",
  "Punta Arenas"
]

export default function ZonasPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0F2A4A] to-[#1B5FA8] py-16 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-heading text-4xl font-bold mb-4">Cobertura Nacional</h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Servicio técnico especializado y aperturas de cajeros automáticos (ATM) en todas las comunas y regiones de Chile.
          </p>
        </div>
      </section>

      {/* Coverage content details */}
      <section className="py-20 bg-keytek-bg">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
            
            {/* Info blocks */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-keytek-bg-soft border border-gray-100 flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keytek-blue/10 text-keytek-blue">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-keytek-text mb-1">Tiempos de Respuesta</h3>
                  <p className="text-keytek-text-muted text-xs md:text-sm leading-relaxed">
                    Coordinamos de manera directa y centralizada con sus equipos de seguridad o empresas de valores para resolver incidentes operativos a la brevedad.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-keytek-bg-soft border border-gray-100 flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keytek-blue/10 text-keytek-blue">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-keytek-text mb-1">Logística de Traslado</h3>
                  <p className="text-keytek-text-muted text-xs md:text-sm leading-relaxed">
                    Disponemos de la movilidad y acreditaciones necesarias para acudir a sucursales bancarias, malls, supermercados y zonas de difícil acceso de norte a sur.
                  </p>
                </div>
              </div>
            </div>

            {/* Regions grid display */}
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-150 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-keytek-text mb-2">Principales Zonas de Cobertura</h2>
              <p className="text-keytek-text-muted text-sm mb-6 leading-relaxed">
                Atendemos de forma regular cajeros automáticos (ATM) en los principales centros urbanos y logísticos del país:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {REGIONES_COBERTURA.map((region) => (
                  <div key={region} className="flex items-center gap-2.5 text-sm text-keytek-text">
                    <CheckCircle2 className="h-4.5 w-4.5 text-keytek-success shrink-0" />
                    <span>{region}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 text-xs text-keytek-navy leading-relaxed flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-keytek-blue shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">¿Soporte técnico en zonas extremas?</span>
                  Contáctenos de forma directa. Diseñamos planes de soporte especiales y rutas de traslado para sucursales bancarias y ATMs en áreas remotas o complejas de todo Chile.
                </div>
              </div>
            </div>

          </div>

          {/* Form wrapper */}
          <ContactForm
            title="Consulte Cobertura Bancaria"
            subtitle="Si tiene dudas sobre los plazos de cobertura técnica para sus cajeros automáticos en regiones, complete el formulario a continuación."
          />

        </div>
      </section>
    </>
  )
}
