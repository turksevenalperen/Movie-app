"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Tabss() {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre")

  const tabs = [
    {
      name: "Popular",
      url: "popular",
    },
    {
      name: "Top Rated",
      url: "top_rated",
    },
    {
      name: "Upcoming",
      url: "upcoming",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center gap-4 overflow-x-auto py-4 border-b">
        <Link
          href="/"
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted",
            !genre && "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
        >
          Trending
        </Link>

        {tabs.map((tab) => (
          <Link
            key={tab.url}
            href={`/?genre=${tab.url}`}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted",
              tab.url === genre && "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

