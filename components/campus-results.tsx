"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
import { FilterChips } from "@/components/filter-chips"
import { CategorySection } from "@/components/category-section"
import {
  CATEGORIES,
  getCampusPhotos,
  getUniversityProfile,
  type Category,
} from "@/lib/campus-data"

export function CampusResults({
  query,
  onReset,
}: {
  query: string
  onReset: () => void
}) {
  const [filters, setFilters] = useState<Category[]>([])

  const profile = useMemo(() => getUniversityProfile(query), [query])
  const photos = useMemo(() => getCampusPhotos(query), [query])

  const counts = useMemo(() => {
    return {
      verified: photos.filter((p) => p.confidence === "verified").length,
      likely: photos.filter((p) => p.confidence === "likely").length,
      unverified: photos.filter((p) => p.confidence === "unverified").length,
    }
  }, [photos])

  const visibleCategories =
    filters.length === 0 ? CATEGORIES : CATEGORIES.filter((c) => filters.includes(c))

  return (
    <TooltipProvider delay={150}>
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-5">
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="-ml-2 w-fit text-muted-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            New search
          </Button>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                {profile.name}
              </h1>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-4" aria-hidden="true" />
                {profile.city}
              </p>
            </div>
            <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {profile.description}
            </p>
          </div>

          <dl className="flex flex-wrap gap-2">
            <Stat dot="bg-verified" label="Verified" value={counts.verified} />
            <Stat dot="bg-likely" label="Likely" value={counts.likely} />
            <Stat
              dot="bg-unverified"
              label="Unverified"
              value={counts.unverified}
            />
          </dl>
        </header>

        <FilterChips active={filters} onChange={setFilters} />

        <div className="flex flex-col gap-10">
          {visibleCategories.map((category) => (
            <CategorySection
              key={category}
              category={category}
              photos={photos.filter((p) => p.category === category)}
            />
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}

function Stat({
  dot,
  label,
  value,
}: {
  dot: string
  label: string
  value: number
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
      <span className={`size-2 rounded-full ${dot}`} aria-hidden="true" />
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-sm font-semibold tabular-nums">{value}</dd>
    </div>
  )
}
