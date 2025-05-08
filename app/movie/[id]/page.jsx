import MovieDetail from "@/components/MovieDetail"
import { getMovieDetails } from "@/lib/api"

export async function generateMetadata({ params }) {
  const movie = await getMovieDetails(params.id)

  return {
    title: `${movie.title} | MovieApp`,
    description: movie.overview,
  }
}

export default async function MoviePage({ params }) {
  const movie = await getMovieDetails(params.id)

  return <MovieDetail movie={movie} />
}

