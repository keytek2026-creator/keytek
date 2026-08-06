import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { Toaster } from "@/components/ui/toast"
import { CONTACT_INFO } from "@/lib/data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Keytek | Cerrajería de Urgencia en Santiago — Respuesta Rápida",
  description: "Servicio de cerrajería de cajeros automáticos, residencial y comercial de urgencia en Santiago. Llegada según coordinación. Presupuestos transparentes.",
  keywords: ["cerrajero santiago", "cerrajero urgente", "cerrajeria de urgencia", "apertura de puertas", "cerrajero cajeros", "cambio de cerradura", "cerrajería keytek"],
  metadataBase: new URL("https://www.keytek.cl"),
  openGraph: {
    title: "Keytek | Cerrajería de Urgencia en Santiago",
    description: "Cerrajeros de confianza con atención express. Llegada de acuerdo a coordinación.",
    type: "website",
    locale: "es_CL",
    siteName: "Keytek Cerrajería",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // LocalBusiness Schema.org JSON-LD
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": "Keytek Cerrajería de Urgencia",
    "image": "https://www.keytek.cl/images/og-image.jpg",
    "description": "Cerrajería de cajeros automáticos, residencial y comercial de urgencia en Santiago de Chile. Apertura de puertas, duplicado de llaves, cerraduras inteligentes y cambio de cilindros.",
    "telephone": CONTACT_INFO.phone,
    "email": CONTACT_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "addressRegion": "Metropolitana",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.4489,
      "longitude": -70.6693
    },
    "url": "https://www.keytek.cl",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Provincia de Santiago"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Región Metropolitana"
      }
    ]
  }

  return (
    <html lang="es" className={cn("scroll-smooth", inter.variable, poppins.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-keytek-text bg-keytek-bg min-h-screen flex flex-col justify-between">
        <Toaster>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Toaster>
      </body>
    </html>
  )
}
