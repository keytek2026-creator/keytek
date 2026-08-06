import { MapPin, Clock, Navigation, CheckCircle2 } from "lucide-react"
import { COMUNAS } from "@/lib/data"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata = {
  title: "Cobertura de Cerrajería en Santiago | Keytek",
  description: "Revisa las comunas donde atendemos con servicio rápido de cerrajería. Llegamos en 20 minutos promedio en Providencia, Las Condes, Vitacura y más.",
}

export default function ZonasPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0F2A4A] to-[#1B5FA8] py-16 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-heading text-4xl font-bold mb-4">Zonas de Cobertura</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Atención express de cerrajería de urgencia en terreno a lo largo de la Región Metropolitana.
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
                  <h3 className="font-heading text-base font-bold text-keytek-text mb-1">Tiempos de Llegada</h3>
                  <p className="text-keytek-text-muted text-xs md:text-sm leading-relaxed">
                    Nuestras unidades móviles patrullan comunas clave de forma constante para garantizar una llegada entre 15 a 30 minutos desde tu llamada.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-keytek-bg-soft border border-gray-100 flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-keytek-blue/10 text-keytek-blue">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-keytek-text mb-1">Talleres Móviles</h3>
                  <p className="text-keytek-text-muted text-xs md:text-sm leading-relaxed">
                    Vehículos equipados con herramientas para ganzuado, copiado de llaves con chip y reparación de cilindros en el acto.
                  </p>
                </div>
              </div>
            </div>

            {/* Comunas grid display */}
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-150 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-keytek-text mb-2">Comunas con Atención Prioritaria</h2>
              <p className="text-keytek-text-muted text-sm mb-6 leading-relaxed">
                Atendemos de forma regular las siguientes zonas residenciales y comerciales de Santiago:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {COMUNAS.map((comuna) => (
                  <div key={comuna} className="flex items-center gap-2.5 text-sm text-keytek-text">
                    <CheckCircle2 className="h-4.5 w-4.5 text-keytek-success shrink-0" />
                    <span>{comuna}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 text-xs text-keytek-navy leading-relaxed flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-keytek-blue shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">¿No encuentras tu comuna en la lista?</span>
                  No te preocupes. Escríbenos por WhatsApp o llámanos para evaluar el traslado inmediato a tu ubicación. Resolvemos solicitudes especiales de cobertura de forma diaria.
                </div>
              </div>
            </div>

          </div>

          {/* Form wrapper */}
          <ContactForm
            title="Consulte por Cobertura o Solicite Asistencia"
            subtitle="Si tienes dudas sobre el costo de traslado a tu ubicación o el tiempo de espera estimado, completa los datos a continuación."
          />

        </div>
      </section>
    </>
  )
}
