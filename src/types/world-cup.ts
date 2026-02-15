export interface HostCity {
  name: string
  stadium?: string
  coordinates: [number, number] // [lat, lng]
  googleMapsUrl?: string
}

export interface WorldCup {
  year: number
  hostCountry: string
  logo?: string
  description: string
  hostCities: HostCity[]
  winner: {
    country: string
    flag?: string
    score?: string
  }
  runnerUp?: {
    country: string
    flag?: string
  }
  funFacts?: string[]
  cancelled?: boolean
  cancelledReason?: string
}
