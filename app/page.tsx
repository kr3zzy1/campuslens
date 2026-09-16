"use client"

import { useState } from "react"
import { GraduationCap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchBar } from "@/components/search-bar"
import { LoadingChecklist } from "@/components/loading-checklist"
import { CampusResults } from "@/components/campus-results"

type Stage = "search" | "loading" | "results"

export default function Page() {
  const [stage, setStage] = useState<Stage>("search")
  const [query, setQuery] = useState("")

  function handleSearch(name: string) {
    setQuery(name)
    setStage("loading")
  }

  function handleReset() {
    setStage("search")
    setQuery("")
  }

  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 rounded-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
              <GraduationCap className="size-4" aria-hidden="true" />
            </span>
            <span className="font-semibold tracking-tight">CampusLens</span>
          </button>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        {stage === "search" && (
          <div className="flex min-h-[calc(100svh-3.5rem)] items-center justify-center py-16">
            <SearchBar onSearch={handleSearch} />
          </div>
        )}

        {stage === "loading" && (
          <div className="flex min-h-[calc(100svh-3.5rem)] items-center justify-center py-16">
            <LoadingChecklist onComplete={() => setStage("results")} />
          </div>
        )}

        {stage === "results" && (
          <div className="py-8 sm:py-10">
            <CampusResults query={query} onReset={handleReset} />
          </div>
        )}
      </main>
    </div>
  )
}
