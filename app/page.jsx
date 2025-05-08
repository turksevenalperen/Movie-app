import Movies from "@/components/Movies"
import { getMovies } from "@/lib/api"

export default async function Home({ searchParams }) {
 
  const movies = await getMovies(searchParams.genre)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies?.map((movie) => (
          <Movies key={movie.id} movie={movie} />
        ))}
        
      </div>
    </main>
  )
}

