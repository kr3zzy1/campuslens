"use client"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Confidence } from "@/lib/campus-data"

const CONFIG: Record<
  Confidence,
  { label: string; dot: string }
> = {
  verified: { label: "Verified", dot: "bg-verified" },
  likely: { label: "Likely", dot: "bg-likely" },
  unverified: { label: "Unverified", dot: "bg-unverified" },
}

type ConfidenceBadgeProps = {
  confidence: Confidence
  reason: string
}

export function ConfidenceBadge({ confidence, reason }: ConfidenceBadgeProps) {
  const { label, dot } = CONFIG[confidence]

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <button
            type="button"
            aria-label={`${label}: ${reason}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2 py-1 text-xs font-medium text-foreground shadow-sm ring-1 ring-border backdrop-blur-sm transition-colors hover:bg-background focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          />
        }
      >
        <span className={cn("size-2 rounded-full", dot)} aria-hidden="true" />
        {label}
      </TooltipTrigger>
      <TooltipContent className="max-w-56 text-center">{reason}</TooltipContent>
    </Tooltip>
  )
}
