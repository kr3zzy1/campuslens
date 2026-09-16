"use client"

import { useState } from "react"
import { GraduationCap, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EXAMPLE_UNIVERSITIES } from "@/lib/campus-data"

type SearchBarProps = {
  onSearch: (name: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("")

  function submit(name: string) {
    const trimmed = name.trim()
    if (!trimmed) return
    onSearch(trimmed)
  }

  return (
    <section className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 px-4 text-center">
      <div className="flex flex-col items-center gap-4">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/20">
          <GraduationCap className="size-7" aria-hidden="true" />
        </span>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            See any university, verified.
          </h1>
          <p className="text-pretty text-muted-foreground">
            CampusLens builds a visual profile of a university from public
            sources, with a confidence label on every photo.
          </p>
        </div>
      </div>

      <form
        className="flex w-full flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault()
          submit(value)
        }}
      >
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter university name (e.g. MIT, Stanford, KBTU)"
            aria-label="University name"
            className="h-11 pl-9 text-base"
            autoFocus
          />
        </div>
        <Button type="submit" size="lg" className="h-11 px-6">
          Find
        </Button>
      </form>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-sm text-muted-foreground">Try:</span>
        {EXAMPLE_UNIVERSITIES.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => {
              setValue(name)
              submit(name)
            }}
            className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  )
}
