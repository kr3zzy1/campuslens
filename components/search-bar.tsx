"use client"

import { useMemo, useRef, useState } from "react"
import Image from "next/image"
import { GraduationCap, Search, MapPin, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  EXAMPLE_UNIVERSITIES,
  searchLocations,
  searchUniversities,
  getUniversitiesByLocation,
  type SearchMode,
  type University,
} from "@/lib/campus-data"

type SearchBarProps = {
  onSelectUniversity: (name: string) => void
  onSelectLocation: (label: string, universities: University[]) => void
}

const MODES: { id: SearchMode; label: string }[] = [
  { id: "university", label: "University" },
  { id: "city", label: "City" },
  { id: "country", label: "Country" },
]

type Suggestion =
  | { kind: "university"; university: University }
  | { kind: "location"; value: string; count: number; thumbnailUrl: string }

export function SearchBar({ onSelectUniversity, onSelectLocation }: SearchBarProps) {
  const [mode, setMode] = useState<SearchMode>("university")
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const blurTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const suggestions = useMemo<Suggestion[]>(() => {
    if (mode === "university") {
      return searchUniversities(value).map((university) => ({
        kind: "university" as const,
        university,
      }))
    }
    return searchLocations(value, mode).map((m) => ({
      kind: "location" as const,
      value: m.value,
      count: m.universities.length,
      thumbnailUrl: m.thumbnailUrl,
    }))
  }, [mode, value])

  function resolveLocation(locationValue: string) {
    if (mode === "university") return
    const unis = getUniversitiesByLocation(locationValue, mode)
    if (unis.length === 0) return
    if (unis.length === 1) {
      onSelectUniversity(unis[0].name)
      return
    }
    onSelectLocation(locationValue, unis)
  }

  function pickSuggestion(s: Suggestion) {
    setOpen(false)
    if (s.kind === "university") {
      setValue(s.university.name)
      onSelectUniversity(s.university.name)
    } else {
      setValue(s.value)
      resolveLocation(s.value)
    }
  }

  function submitTyped() {
    const trimmed = value.trim()
    if (!trimmed) return
    setOpen(false)
    if (mode === "university") {
      // Prefer an exact/first suggestion if the free text matches one.
      const first = suggestions[0]
      if (first && first.kind === "university") {
        onSelectUniversity(first.university.name)
      } else {
        onSelectUniversity(trimmed)
      }
      return
    }
    // City / country: resolve against the first matching group, else the raw value.
    const first = suggestions[0]
    if (first && first.kind === "location") {
      resolveLocation(first.value)
    } else {
      resolveLocation(trimmed)
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing || e.keyCode === 229) return
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true)
      return
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      const chosen = open ? suggestions[active] : undefined
      if (chosen) pickSuggestion(chosen)
      else submitTyped()
    } else if (e.key === "Escape") {
      setOpen(false)
    }
  }

  const placeholder =
    mode === "university"
      ? "Enter university name (e.g. MIT, Stanford, KBTU)"
      : mode === "city"
        ? "Enter a city (e.g. London, Cambridge)"
        : "Enter a country (e.g. United States)"

  return (
    <section className="relative mx-auto flex w-full max-w-xl flex-col items-center gap-8 px-4 text-center">
      <div className="flex flex-col items-center gap-4">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/25 backdrop-blur">
          <GraduationCap className="size-7" aria-hidden="true" />
        </span>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-white drop-shadow-sm sm:text-4xl">
            See any university, verified.
          </h1>
          <p className="text-pretty text-white/80 drop-shadow-sm">
            CampusLens builds a visual profile of a university from public
            sources, with a confidence label on every photo.
          </p>
        </div>
      </div>

      {/* Mode toggle */}
      <div
        role="tablist"
        aria-label="Search by"
        className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/30 p-1 backdrop-blur"
      >
        {MODES.map((m) => {
          const selected = mode === m.id
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={selected}
              type="button"
              onClick={() => {
                setMode(m.id)
                setActive(0)
                setOpen(false)
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                selected
                  ? "bg-white text-neutral-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {m.label}
            </button>
          )
        })}
      </div>

      <form
        className="relative w-full"
        onSubmit={(e) => {
          e.preventDefault()
          submitTyped()
        }}
      >
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            {mode === "university" ? (
              <Search
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
            ) : mode === "city" ? (
              <MapPin
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
            ) : (
              <Globe
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
            )}
            <Input
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                setOpen(true)
                setActive(0)
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => {
                blurTimeout.current = setTimeout(() => setOpen(false), 120)
              }}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              aria-label={MODES.find((m) => m.id === mode)?.label}
              aria-expanded={open}
              aria-autocomplete="list"
              role="combobox"
              className="h-11 bg-background/95 pl-9 text-base backdrop-blur"
              autoFocus
            />

            {open && (
              <ul
                role="listbox"
                className="absolute top-full left-0 z-20 mt-2 max-h-80 w-full overflow-auto rounded-xl border border-border bg-popover p-1.5 text-left shadow-xl"
                onMouseDown={(e) => {
                  // Keep focus so blur doesn't close before click registers.
                  e.preventDefault()
                  if (blurTimeout.current) clearTimeout(blurTimeout.current)
                }}
              >
                {suggestions.length === 0 ? (
                  <li className="px-3 py-6 text-center text-sm text-muted-foreground">
                    No matches — try a different name, city, or country
                  </li>
                ) : (
                  suggestions.map((s, i) => {
                    const isActive = i === active
                    const key = s.kind === "university" ? s.university.id : s.value
                    const thumb =
                      s.kind === "university" ? s.university.thumbnailUrl : s.thumbnailUrl
                    const title = s.kind === "university" ? s.university.name : s.value
                    const subtitle =
                      s.kind === "university"
                        ? `${s.university.city}, ${s.university.country}`
                        : `${s.count} ${s.count === 1 ? "university" : "universities"}`
                    return (
                      <li key={key} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(i)}
                          onClick={() => pickSuggestion(s)}
                          className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors ${
                            isActive ? "bg-accent" : "hover:bg-accent/60"
                          }`}
                        >
                          <Image
                            src={thumb || "/placeholder.svg"}
                            alt=""
                            width={40}
                            height={40}
                            className="size-10 shrink-0 rounded-md object-cover"
                            unoptimized
                          />
                          <span className="flex min-w-0 flex-col">
                            <span className="truncate text-sm font-medium text-foreground">
                              {title}
                            </span>
                            <span className="truncate text-xs text-muted-foreground">
                              {subtitle}
                            </span>
                          </span>
                        </button>
                      </li>
                    )
                  })
                )}
              </ul>
            )}
          </div>
          <Button type="submit" size="lg" className="h-11 px-6">
            Find
          </Button>
        </div>
      </form>

      {mode === "university" && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-white/70">Try:</span>
          {EXAMPLE_UNIVERSITIES.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => {
                setValue(name)
                onSelectUniversity(name)
              }}
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
