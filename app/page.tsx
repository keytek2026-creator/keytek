import { Hero } from "@/components/sections/Hero"
import { ServiciosGrid } from "@/components/sections/ServiciosGrid"
import { PorQueElegirnos } from "@/components/sections/PorQueElegirnos"
import { ZonasCobertura } from "@/components/sections/ZonasCobertura"
import { CTAEmergencia } from "@/components/sections/CTAEmergencia"
import { ContactForm } from "@/components/sections/ContactForm"

export default function Home() {
  return (
    <>
      {/* 1. Hero & Trust Badges */}
      <Hero />

      {/* 2. Operational Advantages Info (Why Choose Us) */}
      <PorQueElegirnos />

      {/* 3. Services Grid (6 cards) */}
      <ServiciosGrid />

      {/* 4. Direct Conversion Emergency Banner */}
      <CTAEmergencia />

      {/* 5. Coverage Zones & Sector Fallback Alerts */}
      <ZonasCobertura />

      {/* 6. Capture Lead Form Section */}
      <section id="contacto" className="py-20 bg-keytek-bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
