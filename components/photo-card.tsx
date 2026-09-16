"use client"

import { useState } from "react"
import { ExternalLink, ImageOff } from "lucide-react"
import { cn } from "@/lib/utils"
import { ConfidenceBadge } from "@/components/confidence-badge"
import type { CampusPhoto } from "@/lib/campus-data"

export function PhotoCard({ photo }: { photo: CampusPhoto }) {
  const [broken, setBroken] = useState(false)

  return (
    <figure className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-brand/30">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {broken ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageOff className="size-6" aria-hidden="true" />
            <span className="text-xs">Image unavailable</span>
          </div>
        ) : (
          <img
            src={photo.imageUrl || "/placeholder.svg"}
            alt={`${photo.category} at the university`}
            loading="lazy"
            onError={() => setBroken(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        <span className="absolute top-2 left-2 rounded-full bg-background/90 px-2 py-1 text-xs font-medium text-foreground shadow-sm ring-1 ring-border backdrop-blur-sm">
          {photo.category}
        </span>
        <div className="absolute top-2 right-2">
          <ConfidenceBadge
            confidence={photo.confidence}
            reason={photo.confidenceReason}
          />
        </div>
      </div>

      <figcaption className="flex items-center justify-between gap-2 px-3 py-2.5">
        <span className="min-w-0 truncate text-xs text-muted-foreground">
          Source:{" "}
          <span className="text-foreground">{photo.sourceDomain}</span>
          {photo.sourceDate ? ` · ${photo.sourceDate}` : ""}
        </span>
        <a
          href={photo.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open source on ${photo.sourceDomain}`}
          className={cn(
            "inline-flex shrink-0 items-center gap-1 rounded-md px-1.5 py-1 text-xs font-medium text-brand transition-colors hover:bg-brand/10 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
          )}
        >
          View
          <ExternalLink className="size-3" aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  )
}
