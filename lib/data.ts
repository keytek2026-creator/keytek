import { Service, Review } from "@/types"

export const SERVICES: Service[] = [
  {
    slug: "apertura-puertas",
    title: "Apertura de Puertas",
    shortDescription: "Apertura rápida y profesional sin daños de casas, departamentos y locales.",
    description: "Si perdiste tus llaves o se quedaron adentro, abrimos tu puerta sin causar daños estructurales. Contamos con herramientas de última generación y cerrajeros expertos en todo tipo de cerraduras, rejas y puertas blindadas.",
    iconName: "LockOpen",
    features: [
      "Servicio de urgencia express",
      "Apertura no destructiva garantizada",
      "Llegada en 20 minutos promedio",
      "Atención en casas, departamentos y comercios"
    ],
    detailedContent: "Perder las llaves o dejarlas puestas por dentro es una de las situaciones de urgencia más comunes. Nuestro equipo está altamente capacitado en técnicas avanzadas de ganzuado y decodificación para abrir puertas sin dañar el marco, la puerta o el cilindro. Si la cerradura está trabada, procedemos con métodos profesionales para reemplazar el cilindro en el acto y devolver la seguridad a tu hogar de inmediato.",
    emergencia: true
  },
  {
    slug: "cambio-cerraduras",
    title: "Cambio de Cerraduras",
    shortDescription: "Instalación y cambio de cerraduras y bombines de alta seguridad.",
    description: "Actualiza la seguridad de tu hogar con la instalación de cerraduras nuevas de alta gama, cerrojos suplementarios y cilindros anti-bumping, anti-ganzúa y anti-taladro.",
    iconName: "KeyRound",
    features: [
      "Asesoría en seguridad del hogar",
      "Marcas líderes (Scanavini, Yale, Odis, Mul-T-Lock)",
      "Cilindros con llaves incopiables",
      "Instalación en menos de 1 hora"
    ],
    detailedContent: "El cambio de cerradura o bombín es fundamental al mudarse a una nueva propiedad, ante un robo, extravío de llaves, o simplemente por obsolescencia. Trabajamos con cilindros patentados de alta seguridad que cuentan con protección activa contra técnicas de intrusión comunes como el bumping, la ganzúa y la extracción. Además, instalamos cerrojos de seguridad adicionales para duplicar la resistencia física de tus accesos.",
    emergencia: false
  },
  {
    slug: "cerrajeria-cajeros-automaticos",
    title: "Cerrajería de Cajeros Automáticos",
    shortDescription: "Apertura técnica, cambio de combinación y soporte de seguridad para cajeros automáticos (ATM).",
    description: "Servicio altamente especializado y confidencial para la apertura técnica, reprogramación de claves digitales y mantención de cerraduras de alta seguridad de cajeros automáticos.",
    iconName: "CreditCard",
    features: [
      "Apertura técnica no destructiva de bóvedas de ATM",
      "Reprogramación y cambio de cerraduras digitales (Cencon, Kaba, La Gard)",
      "Atención de urgencias express para bancos y empresas de valores",
      "Cumplimiento riguroso de protocolos de confidencialidad"
    ],
    detailedContent: "La cerrajería de cajeros automáticos requiere una alta especialización y equipamiento de precisión. Ofrecemos asistencia técnica autorizada para la apertura de bóvedas de cajeros automáticos (ATMs) de diversas marcas y modelos. Realizamos configuración de cerraduras de retardo electrónico, auditorías de accesos de usuario, cambio de combinaciones electrónicas bajo protocolo bancario y reparación de daños post-vandalismo.",
    emergencia: true
  },
  {
    slug: "cajas-fuertes",
    title: "Cajas Fuertes",
    shortDescription: "Apertura técnica, cambio de clave y mantención de cajas fuertes.",
    description: "Servicio confidencial y altamente especializado en apertura de cajas fuertes mecánicas y digitales. Cambio de combinaciones, mantenimiento preventivo y reparación.",
    iconName: "ShieldAlert",
    features: [
      "Apertura técnica y confidencial",
      "Cambio de clave digital y mecánica",
      "Servicio para particulares, bancos y joyerías",
      "Garantía absoluta de confidencialidad"
    ],
    detailedContent: "Las cajas fuertes requieren un conocimiento profundo de mecanismos mecánicos y electrónicos de seguridad. Si olvidaste la clave o se dañó el sistema digital, nuestros técnicos utilizan técnicas de perforación controlada, endoscopía y ganzuado de borjas para abrir la caja causando el menor impacto posible, permitiendo reconstruir la seguridad del sistema y dejarla 100% operativa nuevamente.",
    emergencia: false
  },
  {
    slug: "cerraduras-inteligentes",
    title: "Cerraduras Inteligentes",
    shortDescription: "Instalación y configuración de cerraduras electrónicas y biométricas.",
    description: "Migra hacia la comodidad sin llaves. Instalación profesional de cerraduras digitales con acceso por huella dactilar, clave numérica, tarjetas de proximidad y control por App Móvil.",
    iconName: "Cpu",
    features: [
      "Configuración WiFi y Bluetooth con celular",
      "Apertura por huella dactilar, pin o tarjeta",
      "Compatibilidad con Alexa y Google Home",
      "Instalación limpia y estética en madera o metal"
    ],
    detailedContent: "La cerrajería inteligente combina la seguridad física con la tecnología moderna. Instalamos y configuramos cerraduras de marcas como Samsung, Yale, Tuya o Ultraloq. Te asesoramos para elegir la mejor opción según el tipo de puerta (madera, metal, vidrio) y te enseñamos a configurar los accesos de usuario, llaves temporales para visitas o personal de servicio, y a revisar el historial de apertura desde tu smartphone.",
    emergencia: false
  },
  {
    slug: "cerrajeria-comercial",
    title: "Cerrajería Comercial",
    shortDescription: "Soluciones de seguridad integral para locales comerciales y oficinas.",
    description: "Protección a gran escala para empresas: instalación de barras antipánico, brazos hidráulicos cierrapuertas, cierres para cortinas metálicas y amaestramiento de llaves.",
    iconName: "Building",
    features: [
      "Barras antipánico certificadas",
      "Brazo hidráulico y cierrapuertas automáticos",
      "Cerraduras especiales para vitrinas y puertas de vidrio",
      "Planes de amaestramiento de cilindros (una llave abre todo)"
    ],
    detailedContent: "Un negocio requiere normativas específicas de seguridad y flujo de personas. Instalamos cerraduras de alta resistencia para cortinas de comercio, sistemas de salida de emergencia (barras antipánico) homologados, y brazos hidráulicos para control de climatización y portazos. Ofrecemos además sistemas de llaves maestras que simplifican el control de accesos permitiendo a los administradores abrir múltiples oficinas con una sola llave jerarquizada.",
    emergencia: false
  }
]

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Carolina Silva",
    rating: 5,
    text: "Excelente servicio. Llegaron en 15 minutos a Las Condes después de que mi llave se quebró en la cerradura. El técnico fue muy amable y resolvió todo súper rápido sin dañar la puerta. Muy recomendados.",
    comuna: "Las Condes",
    date: "Hace 2 semanas"
  },
  {
    id: "2",
    name: "Alejandro Mendoza",
    rating: 5,
    text: "Me quedé fuera de mi departamento a las 3 AM. Llamé a Keytek y contestaron de inmediato. El cerrajero llegó con sus herramientas profesionales y en 5 minutos abrió la puerta. El precio fue el acordado por teléfono.",
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
    text: "Perdí la llave de mi camioneta. Vinieron hasta mi casa en La Reina, abrieron el vehículo de manera limpia y me hicieron una copia de la llave codificada en su taller móvil. Un ahorro de tiempo increíble.",
    comuna: "La Reina",
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
  whatsappText: "Hola, necesito un cerrajero urgente.",
  email: "contacto@keytek.cl",
  schedule: "Atención de Lunes a Domingo"
}
