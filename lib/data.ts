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
  },
  {
    slug: "instalacion-camaras",
    title: "Instalación de Cámaras de Seguridad",
    shortDescription: "Instalación profesional de sistemas de videovigilancia IP, CCTV y analítica de video para hogares, empresas y sucursales bancarias.",
    description: "Diseño, instalación y configuración de sistemas de cámaras de seguridad de última generación. Trabajamos con tecnología IP de alta definición, cámaras domo, PTZ, y sistemas de grabación en la nube o local (NVR/DVR). Soluciones personalizadas para hogares, comercios, oficinas y entornos bancarios.",
    iconName: "Camera",
    features: [
      "Cámaras IP HD, 4K y cámaras domo para interiores y exteriores",
      "Sistemas de grabación NVR/DVR con almacenamiento local o en la nube",
      "Acceso remoto desde celular o computador en tiempo real",
      "Detección de movimiento con alertas automáticas",
      "Instalación certificada para entornos bancarios y comerciales",
      "Cobertura en todo Chile"
    ],
    detailedContent: "Nuestro equipo técnico especializado diseña el sistema de videovigilancia ideal según las necesidades específicas de cada cliente. Instalamos cámaras de alta definición con visión nocturna, resistencia a la intemperie (IP66/IP67) y analítica de video inteligente. Configuramos acceso remoto seguro para que puedas monitorear tus instalaciones en tiempo real desde cualquier dispositivo. Realizamos mantención preventiva y correctiva de sistemas existentes.",
    emergencia: false
  },
  {
    slug: "pintura-interiores",
    title: "Pintura de Interiores (Casas y Departamentos)",
    shortDescription: "Servicio profesional de pintura, preparación de muros, empaste y finas terminaciones para casas, departamentos y oficinas.",
    description: "Renovación y pintura profesional de interiores para casas, departamentos, oficinas y locales comerciales. Realizamos preparación exhaustiva de superficies (reparación de grietas, empaste, lijado y sellado), aplicación de pinturas lavables, esmaltes al agua, látex antihongos y terminaciones finas de alta durabilidad con máxima limpieza.",
    iconName: "Paintbrush",
    features: [
      "Pintura de muros, cielos, molduras, puertas y rodapiés",
      "Preparación integral: reparación de fisuras, empaste y lijado prolijo",
      "Protección total de pisos, muebles, zócalos y ventanas",
      "Materiales y pinturas de primera calidad (esmaltes al agua, látex lavable, antihongos)",
      "Limpieza rigurosa y entrega de ambientes impecables listos para habitar",
      "Presupuestos claros y cumplimiento estricto de plazos acordados"
    ],
    detailedContent: "Nuestro servicio de pintura de interiores está diseñado para transformar y renovar tus espacios residenciales y comerciales con acabados perfectos. Nos encargamos de todo el proceso: desde el encintado y protección de pisos, muebles y luminarias, hasta la corrección de imperfecciones en muros con masilla y empaste. Aplicamos las mejores marcas de pintura del mercado con técnicas profesionales de rodillo y brocha para un acabado uniforme y sin marcas. Garantizamos orden, limpieza durante toda la faena y puntualidad en los tiempos de entrega.",
    emergencia: false
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
  email: "contacto@vaultec.cl",
  schedule: "Atención de Lunes a Domingo"
}
