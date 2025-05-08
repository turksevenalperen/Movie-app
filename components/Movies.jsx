"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Calendar, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Movies({ movie }) {
  const router = useRouter()
  const imagePath = movie.backdrop_path || movie.poster_path

  return (
    <Card
      className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={() => router.push(`/movie/${movie.id}`)}
    >
      <div className="aspect-video relative overflow-hidden">
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${imagePath}`}
            alt={movie.title || "Movie poster"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No image available</span>
          </div>
        )}

        {movie.vote_average > 0 && (
          <Badge variant="secondary" className="absolute top-2 right-2 flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            {movie.vote_average.toFixed(1)}
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h2 className="font-semibold text-lg line-clamp-1 mb-1">{movie.title}</h2>

        {movie.release_date && (
          <div className="flex items-center text-sm text-muted-foreground gap-1 mt-2">
            <Calendar className="h-3 w-3" />
            {new Date(movie.release_date).toLocaleDateString()}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

