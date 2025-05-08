export interface Movie {
  id: number
  title: string
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  release_date: string
  vote_average: number
  vote_count: number
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[]
  runtime: number
  tagline: string
  status: string
  budget: number
  revenue: number
  production_companies: {
    id: number
    name: string
    logo_path: string | null
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
}

