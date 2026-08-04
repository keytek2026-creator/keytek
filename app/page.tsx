import { Hero } from "@/components/sections/Hero"
import { ServiciosGrid } from "@/components/sections/ServiciosGrid"
import { PorQueElegirnos } from "@/components/sections/PorQueElegirnos"
import { Testimonios } from "@/components/sections/Testimonios"
import { ZonasCobertura } from "@/components/sections/ZonasCobertura"
import { CTAEmergencia } from "@/components/sections/CTAEmergencia"
import { ContactForm } from "@/components/sections/ContactForm"

export default function Home() {
  return (
    <>
      {/* 1. Hero & Trust Badges */}
      <Hero />

      {/* 2. Services Grid (6 cards) */}
      <ServiciosGrid />

      {/* 3. Operational Advantages Info */}
      <PorQueElegirnos />

      {/* 4. Coverage Zones & Sector Fallback Alerts */}
      <ZonasCobertura />

      {/* 5. Direct Conversion Emergency Banner */}
      <CTAEmergencia />

      {/* 6. Customer Testimonials Slideshow */}
      <Testimonios />

      {/* 7. Capture Lead Form Section */}
      <section id="contacto" className="py-20 bg-keytek-bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
