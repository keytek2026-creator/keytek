import { Service, Review } from "@/types"

export const SERVICES: Service[] = [
  {
    slug: "cerrajeria-cajeros-automaticos",
    title: "Cerrajería de Cajeros Automáticos",
    shortDescription: "Soporte de seguridad, apertura técnica y cambio de combinación para cajeros automáticos (ATM) en todo Chile.",
    description: "Servicio altamente especializado y confidencial para la apertura técnica, reprogramación de claves digitales y mantención de cerraduras de alta seguridad de cajeros automáticos a nivel nacional (todo Chile).",
    iconName: "CreditCard",
    features: [
      "Cobertura a nivel nacional en todo Chile",
      "Apertura técnica no destructiva de bóvedas de ATM",
      "Reprogramación y cambio de cerraduras digitales (Cencon, Kaba, La Gard)",
      "Atención de urgencias para bancos y transporte de valores",
      "Cumplimiento riguroso de protocolos de confidencialidad"
    ],
    detailedContent: "La cerrajería de cajeros automáticos requiere una alta especialización y equipamiento de precisión. Ofrecemos asistencia técnica autorizada para la apertura de bóvedas de cajeros automáticos (ATMs) de diversas marcas y modelos con cobertura nacional en todo Chile. Realizamos configuración de cerraduras de retardo electrónico, auditorías de accesos de usuario, cambio de combinaciones electrónicas bajo protocolo bancario y reparación de daños post-vandalismo.",
    emergencia: true
  }
]

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Carolina Silva",
    rating: 5,
    text: "Excelente servicio. Llegaron súper rápido a Las Condes después de que mi llave se quebró en la cerradura. El técnico fue muy amable y resolvió todo de forma impecable sin dañar la puerta. Muy recomendados.",
    comuna: "Las Condes",
    date: "Hace 2 semanas"
  },
  {
    id: "2",
    name: "Alejandro Mendoza",
    rating: 5,
    text: "Me quedé fuera de mi departamento a las 3 AM. Llamé a Vaultec y contestaron de inmediato. El cerrajero llegó con sus herramientas profesionales y en 5 minutos abrió la puerta. El precio fue el acordado por teléfono.",
    comuna: "Providencia",
    date: "Hace 1 mes"
  },
  {
    id: "3",
    name: "María José Pardo",
    rating: 5,
    text: "Cambiaron las cerraduras de mi oficina por unas de alta seguridad. Me asesoraron sobre qué marca convenía más y el trabajo quedó impecable. Muy profesionales y puntuales.",
    comuna: "Santiago Centro",
    date: "Hace 3 semanas"
  },
  {
    id: "4",
    name: "Roberto Rojas",
    rating: 5,
    text: "Solicitamos el servicio de urgencia para el cambio de combinación electrónica de la bóveda de nuestro cajero automático. Excelente protocolo de confidencialidad, rapidez y precisión técnica.",
    comuna: "Santiago",
    date: "Hace 2 meses"
  }
]

export const COMUNAS = [
  "Santiago Centro",
  "Providencia",
  "Las Condes",
  "Vitacura",
  "Ñuñoa",
  "Lo Barnechea",
  "La Reina",
  "Peñalolén",
  "La Florida",
  "Macul",
  "San Miguel",
  "Maipú",
  "Estación Central",
  "Independencia",
  "Recoleta"
]

export const CONTACT_INFO = {
  phone: "+56 9 1234 5678",
  phoneRaw: "56912345678",
  whatsappText: "Hola, necesito soporte técnico o apertura para un cajero automático (ATM).",
  email: "contacto@keytek.cl",
  schedule: "Atención de Lunes a Domingo"
}
