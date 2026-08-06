import Link from "next/link"
import { Phone, Mail, Clock, MapPin, ChevronRight } from "lucide-react"
import { Logo } from "@/components/ui/Logo"
import { CONTACT_INFO, SERVICES, COMUNAS } from "@/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Display only the first 8 comunas in the footer grid to keep layout clean, with a link to view all.
  const featuredComunas = COMUNAS.slice(0, 8)

  return (
    <footer className="bg-[#0F2A4A] text-white pt-16 pb-8 border-t border-[#1B5FA8]/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-4">
            <Logo light className="mb-2" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Cerrajería profesional y tecnológica para hogares, oficinas y vehículos en Santiago. Disponibilidad ante emergencias con técnicos calificados.
            </p>
            <div className="flex items-center gap-3 mt-2 text-sm text-[#4FA8E0] font-semibold">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Atención express en terreno</span>
            </div>
          </div>

          {/* Column 2: Quick Links / Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 tracking-wide text-gray-100 border-l-4 border-[#4FA8E0] pl-3">
              Servicios
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-300">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="flex items-center gap-1.5 hover:text-[#4FA8E0] transition-colors hover:translate-x-1 duration-200"
                  >
                    <ChevronRight className="h-3 w-3 text-[#4FA8E0]" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Coverage Areas */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 tracking-wide text-gray-100 border-l-4 border-[#4FA8E0] pl-3">
              Zonas de Cobertura
            </h3>
            <p className="text-xs text-gray-400 mb-3">Atendemos con rapidez en:</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm text-gray-300">
              {featuredComunas.map((comuna) => (
                <div key={comuna} className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-[#4FA8E0] shrink-0" />
                  <span className="truncate">{comuna}</span>
                </div>
              ))}
            </div>
            <Link
              href="/zonas"
              className="inline-block mt-4 text-xs font-semibold text-[#4FA8E0] hover:text-[#9CE0FF] hover:underline"
            >
              Ver todas las comunas →
            </Link>
          </div>

          {/* Column 4: Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-lg font-bold tracking-wide text-gray-100 border-l-4 border-[#4FA8E0] pl-3">
              Contacto
            </h3>
            
            <div className="flex flex-col gap-3.5 text-sm text-gray-300">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="group flex items-start gap-3 hover:text-[#4FA8E0] transition-colors"
              >
                <Phone className="h-5 w-5 text-[#4FA8E0] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-xs text-gray-400 font-medium">Llamadas de Urgencia</span>
                  <span className="font-semibold text-white">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group flex items-start gap-3 hover:text-[#4FA8E0] transition-colors"
              >
                <Mail className="h-5 w-5 text-[#4FA8E0] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-xs text-gray-400 font-medium">Correo electrónico</span>
                  <span className="font-medium">{CONTACT_INFO.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#4FA8E0] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-400 font-medium">Cobertura</span>
                  <span>Región Metropolitana, Chile</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1B5FA8]/20 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Keytek Cerrajería Comercial y Residencial. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/nosotros" className="hover:text-white transition-colors">
              Nosotros
            </Link>
            <Link href="/contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
            <Link href="/emergencias" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
              Servicio de Emergencia
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
