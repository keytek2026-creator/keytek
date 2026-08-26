import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import Script from "next/script"
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
  title: "Vaultec | Cerrajería de Alta Seguridad para Cajeros Automáticos (ATM) en Chile",
  description: "Servicios altamente especializados de apertura técnica, cambio de combinación y soporte de seguridad para cajeros automáticos (ATM) a nivel nacional en todo Chile.",
  keywords: ["cerrajero cajeros", "cerrajeria cajeros automaticos", "apertura cajeros", "seguridad atm chile", "cerrajería vaultec", "cencon chile", "kaba mas", "la gard chile"],
  metadataBase: new URL("https://www.keytek.cl"),
  icons: {
    icon: [
      { url: "/favicon.png?v=solov1", type: "image/png" },
      { url: "/favicon.ico?v=solov1" }
    ],
    shortcut: "/favicon.ico?v=solov1",
    apple: "/favicon.png?v=solov1",
  },
  openGraph: {
    title: "Vaultec | Cerrajería de Alta Seguridad para Cajeros Automáticos (ATM) en Chile",
    description: "Soporte técnico, aperturas no destructivas y cambio de combinación para cajeros automáticos (ATM) en todo Chile.",
    type: "website",
    locale: "es_CL",
    siteName: "Vaultec Cerrajería",
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
    "name": "Vaultec Cerrajería de Cajeros Automáticos (ATM)",
    "image": "https://www.keytek.cl/images/og-image.jpg",
    "description": "Cerrajería de cajeros automáticos de alta seguridad. Apertura técnica, cambio de combinación y mantención de cerraduras de retardo a nivel nacional en todo Chile.",
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6LKBXJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6LKBXJ');`,
          }}
        />

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
