import { Phone, Clock, ShieldAlert, Award, ShieldCheck, CheckCircle } from "lucide-react"
import { CONTACT_INFO, COMUNAS } from "@/lib/data"
import { ContactForm } from "@/components/sections/ContactForm"

export const metadata = {
  title: "Cerrajero de Urgencia en Santiago | Keytek Emergencias",
  description: "Servicio de cerrajería express a domicilio. Llegada de acuerdo a coordinación con el cliente. Aperturas limpias y cambio de cerraduras de urgencia.",
}

export default function EmergenciasPage() {
  const phoneRaw = CONTACT_INFO.phoneRaw
  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hola, necesito un cerrajero urgente de inmediato...")}`

  return (
    <>
      {/* Emergency Main Banner (Warning Red & Deep Navy Theme) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-700 via-[#0F2A4A] to-[#0F2A4A] py-16 lg:py-24 text-white text-center">
        
        {/* Subtle PCB line decoration */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full text-white" viewBox="0 0 1000 400" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 50,50 L 250,50 L 300,100 L 700,100 L 750,50 L 950,50" />
            <path d="M 150,350 L 350,350 L 400,300 L 800,300 L 850,350" />
            <circle cx="250" cy="50" r="3" fill="currentColor" />
            <circle cx="700" cy="100" r="3" fill="currentColor" />
            <circle cx="400" cy="300" r="3" fill="currentColor" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl flex flex-col items-center">
          
          {/* Active pulse status */}
          <div className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider mb-8 animate-pulse shadow-lg shadow-red-600/30">
            <span className="flex h-2.5 w-2.5 rounded-full bg-white"></span>
            Técnicos de turno disponibles ahora
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Cerrajero de Urgencia <span className="text-red-500">Express</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-250 mb-12 max-w-2xl leading-relaxed">
            ¿Perdiste tus llaves, te las robaron o la puerta quedó trabada? No te preocupes. Llámanos o escríbenos. Llegada y atención **de acuerdo a coordinación** en todo Santiago.
          </p>

          {/* GIANT mobile-friendly CTA button */}
          <div className="w-full max-w-sm flex justify-center mb-16">
            
            {/* GIANT WHATSAPP BUTTON */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] px-8 py-5 text-xl font-extrabold text-white shadow-2xl shadow-[#25D366]/35 hover:scale-105 active:scale-95 transition-transform"
            >
              {/* WhatsApp Icon */}
              <svg className="h-6 w-6 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WHATSAPP URGENTE</span>
            </a>
          </div>

          {/* Quick checklist indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl border-t border-white/10 pt-10 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-sm">Respuesta Express</span>
                <span className="text-xs text-gray-300">Llegada en 20 min promedio</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-sm">Sin Daños Extra</span>
                <span className="text-xs text-gray-300">Apertura técnica no invasiva</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-sm">Precio Justo</span>
                <span className="text-xs text-gray-300">Tarifa fija acordada previamente</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-sm">Garantía Keytek</span>
                <span className="text-xs text-gray-300">Respaldo total en el servicio</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Emergency Comunas Coverage Alert */}
      <section className="py-12 bg-keytek-bg border-b border-gray-150">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="font-heading text-lg font-bold text-keytek-text mb-4">
            Comunas con unidades móviles activas hoy:
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {COMUNAS.map((comuna) => (
              <span
                key={comuna}
                className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20"
              >
                {comuna}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Backup Form for non-lockouts */}
      <section className="py-20 bg-keytek-bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto mb-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-keytek-text mb-2">
              ¿No tienes prisa? Envía un mensaje
            </h2>
            <p className="text-keytek-text-muted text-sm leading-relaxed">
              Si es un requerimiento programado (cambio de chapa para mañana, cotización de cajas fuertes, etc.), completa el formulario y te responderemos por correo o teléfono.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
