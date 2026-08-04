export interface Service {
  slug: string
  title: string
  shortDescription: string
  description: string
  iconName: string // Maps to Lucide icons
  features: string[]
  detailedContent: string
  emergencia?: boolean
}

export interface Review {
  id: string
  name: string
  rating: number
  text: string
  comuna: string
  date: string
}
