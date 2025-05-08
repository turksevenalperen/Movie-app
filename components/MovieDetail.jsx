import Image from "next/image"
import { Calendar, Clock, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MovieDetail({ movie }) {
  const backdropPath = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : null

  const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null

  // Format runtime to hours and minutes
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  return (
    <div className="relative">
      {/* Backdrop image */}
      {backdropPath && (
        <div className="absolute top-0 left-0 w-full h-[70vh] -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <Image
            src={backdropPath || "/placeholder.svg"}
            alt={movie.title}
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>
      )}

      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="md:col-span-1">
            <div className="sticky top-24 rounded-lg overflow-hidden shadow-xl">
              {posterPath ? (
                <Image
                  src={posterPath || "/placeholder.svg"}
                  alt={movie.title}
                  width={500}
                  height={750}
                  className="w-full h-auto"
                  priority
                />
              ) : (
                <div className="aspect-[2/3] bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">No poster available</span>
                </div>
              )}
            </div>
          </div>

          {/* Movie details */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold">{movie.title}</h1>
                {movie.tagline && <p className="text-xl text-muted-foreground mt-2 italic">{movie.tagline}</p>}
              </div>

              <div className="flex flex-wrap gap-3">
                {movie.genres?.map((genre) => (
                  <Badge key={genre.id} variant="outline">
                    {genre.name}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                {movie.release_date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(movie.release_date).toLocaleDateString()}</span>
                  </div>
                )}

                {movie.runtime > 0 && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{formatRuntime(movie.runtime)}</span>
                  </div>
                )}

                {movie.vote_average > 0 && (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span>
                      {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <p className="text-lg leading-relaxed">{movie.overview || "No overview available."}</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg">Watch Trailer</Button>
                <Button variant="outline" size="lg">
                  Add to Watchlist
                </Button>
              </div>

              {/* Additional information */}
              {(movie.production_companies?.length > 0 || movie.production_countries?.length > 0) && (
                <div className="border-t pt-6 mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {movie.production_companies?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Production Companies</h3>
                        <ul className="space-y-1">
                          {movie.production_companies.map((company) => (
                            <li key={company.id}>{company.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {movie.production_countries?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Production Countries</h3>
                        <ul className="space-y-1">
                          {movie.production_countries.map((country, index) => (
                            <li key={index}>{country.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

