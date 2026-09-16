"use client"

import { cn } from "@/lib/utils"
import { CATEGORIES, type Category } from "@/lib/campus-data"

type FilterChipsProps = {
  active: Category[]
  onChange: (next: Category[]) => void
}

export function FilterChips({ active, onChange }: FilterChipsProps) {
  const allActive = active.length === 0

  function toggle(category: Category) {
    if (active.includes(category)) {
      onChange(active.filter((c) => c !== category))
    } else {
      onChange([...active, category])
    }
  }

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter photos by category"
    >
      <Chip label="All" active={allActive} onClick={() => onChange([])} />
      {CATEGORIES.map((category) => (
        <Chip
          key={category}
          label={category}
          active={active.includes(category)}
          onClick={() => toggle(category)}
        />
      ))}
    </div>
  )
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
        active
          ? "border-brand bg-brand text-brand-foreground"
          : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
      )}
    >
      {label}
    </button>
  )
}
