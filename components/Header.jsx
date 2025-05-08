"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()

    if (searchQuery.trim().length < 3) {
      setError("Search query must be at least 3 characters")
      return
    }

    setError("")
    router.push(`/search/${encodeURIComponent(searchQuery.trim())}`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-lg p-2 text-xl font-bold text-primary-foreground">MovieApp</div>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 mx-4 md:mx-8 lg:mx-16 relative">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for movies..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {error && <p className="text-destructive text-sm mt-1 absolute">{error}</p>}
        </form>

        <div className="flex items-center gap-4">
          <ThemeToggle />
         
        </div>
      </div>
    </header>
  )
}

