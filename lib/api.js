// It's better to use environment variables for API keys
const API_KEY = process.env.TMDB_API_KEY || "391c6fe8b136c962d529332049c183ee"
const BASE_URL = "https://api.themoviedb.org/3"

/**
 * Fetch movies based on genre or trending
 */
export async function getMovies(genre) {
  try {
    const endpoint = genre
      ? `${BASE_URL}/movie/${genre}?api_key=${API_KEY}&language=en-US&page=1`
      : `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`

    const res = await fetch(endpoint, { next: { revalidate: 3600 } })

    if (!res.ok) {
      throw new Error(`Failed to fetch movies: ${res.status}`)
    }

    const data = await res.json()
    return data.results
  } catch (error) {
    console.error("Error fetching movies:", error)
    return []
  }
}

/**
 * Fetch movie details by ID
 */
export async function getMovieDetails(id) {
  try {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`, {
      next: { revalidate: 86400 },
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch movie details: ${res.status}`)
    }

    return await res.json()
  } catch (error) {
    console.error(`Error fetching movie ${id}:`, error)
    throw new Error("Failed to load movie details")
  }
}

/**
 * Search movies by keyword
 */
export async function searchMovies(keyword) {
  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(keyword)}&language=en-US&include_adult=false`,
      { next: { revalidate: 3600 } },
    )

    if (!res.ok) {
      throw new Error(`Failed to search movies: ${res.status}`)
    }

    const data = await res.json()
    return data.results
  } catch (error) {
    console.error("Error searching movies:", error)
    return []
  }
}

