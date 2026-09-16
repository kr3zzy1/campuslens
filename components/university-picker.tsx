"use client"

import Image from "next/image"
import { ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { University } from "@/lib/campus-data"

export function UniversityPicker({
  label,
  universities,
  onSelect,
  onReset,
}: {
  label: string
  universities: University[]
  onSelect: (name: string) => void
  onReset: () => void
}) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="-ml-2 w-fit text-muted-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          New search
        </Button>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Universities in {label}
          </h1>
          <p className="text-sm text-muted-foreground">
            {universities.length} results — pick one to view its visual profile.
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {universities.map((u) => (
          <li key={u.id}>
            <button
              type="button"
              onClick={() => onSelect(u.name)}
              className="flex w-full items-center gap-3 rounded-xl border border-border bg-card p-3 text-left transition-colors hover:border-brand/40 hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Image
                src={u.thumbnailUrl || "/placeholder.svg"}
                alt=""
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-lg object-cover"
                unoptimized
              />
              <span className="flex min-w-0 flex-col">
                <span className="truncate font-medium">{u.name}</span>
                <span className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                  <MapPin className="size-3" aria-hidden="true" />
                  {u.city}, {u.country}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
