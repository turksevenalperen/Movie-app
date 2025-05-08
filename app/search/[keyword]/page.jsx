import Movies from "@/components/Movies"
import { searchMovies } from "@/lib/api"

export async function generateMetadata({ params }) {
  return {
    title: `Search results for "${params.keyword}" | MovieApp`,
  }
}

export default async function SearchPage({ params }) {
  const keyword = params.keyword
  const movies = await searchMovies(keyword)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search results for: {keyword}</h1>

      {!movies?.length ? (
        <div className="p-8 text-center bg-muted rounded-lg">
          <h2 className="text-xl font-medium">No results found</h2>
          <p className="mt-2 text-muted-foreground">Try searching with different keywords</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Movies key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

