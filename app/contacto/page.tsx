import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { CONTACT_INFO } from "@/lib/data"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata = {
  title: "Contacto | Vaultec Cerrajería",
  description: "Ponte en contacto con Vaultec. Teléfono de urgencias rápido, correo electrónico y formulario de cotizaciones para cerrajería en Santiago.",
}

export default function ContactoPage() {
  const phoneRaw = CONTACT_INFO.phoneRaw

  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0F2A4A] to-[#1B5FA8] py-16 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-heading text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            ¿Necesitas presupuesto, tienes consultas o requieres asistencia de urgencia en terreno? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="py-20 bg-keytek-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
            
            {/* Column 1: Contact info & Map (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
              
              {/* Contact info details */}
              <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-sm flex flex-col gap-6">
                <h2 className="font-heading text-xl font-bold text-keytek-text">Información de Contacto</h2>
                
                <div className="flex flex-col gap-5 text-sm text-keytek-text-muted">
                  {/* Phone */}
                  <a href={`tel:${phoneRaw}`} className="flex items-start gap-3 hover:text-keytek-blue transition-colors group">
                    <Phone className="h-5 w-5 text-keytek-blue shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="block text-xs font-bold text-keytek-text uppercase tracking-wider mb-0.5">Urgencias y Llamadas</span>
                      <span className="font-semibold text-keytek-navy text-base">{CONTACT_INFO.phone}</span>
                    </div>
                  </a>

                  {/* Mail */}
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-3 hover:text-keytek-blue transition-colors group">
                    <Mail className="h-5 w-5 text-keytek-blue shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="block text-xs font-bold text-keytek-text uppercase tracking-wider mb-0.5">Correo Electrónico</span>
                      <span className="font-medium text-keytek-navy text-base">{CONTACT_INFO.email}</span>
                    </div>
                  </a>

                  {/* Schedule */}
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-keytek-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-keytek-text uppercase tracking-wider mb-0.5">Horario de Atención</span>
                      <span className="font-medium text-keytek-navy text-base">{CONTACT_INFO.schedule}</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-keytek-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-keytek-text uppercase tracking-wider mb-0.5">Cobertura Principal</span>
                      <span className="font-medium text-keytek-navy text-base">Santiago, Región Metropolitana, Chile</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[280px] rounded-3xl overflow-hidden shadow-sm border border-gray-150 bg-gray-50 relative flex-grow min-h-[250px]">
                <iframe
                  src="https://maps.google.com/maps?q=Santiago,Chile&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de cobertura Vaultec"
                ></iframe>
              </div>

            </div>

            {/* Column 2: Form (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
