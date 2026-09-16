"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS = [
  "Searching sources...",
  "Verifying images...",
  "Removing duplicates...",
  "Categorizing...",
]

const STEP_INTERVAL = 850

type LoadingChecklistProps = {
  onComplete: () => void
}

export function LoadingChecklist({ onComplete }: LoadingChecklistProps) {
  const [completed, setCompleted] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const start = Date.now()
    const timer = setInterval(() => {
      setElapsed((Date.now() - start) / 1000)
    }, 100)

    const stepTimers = STEPS.map((_, i) =>
      setTimeout(() => setCompleted(i + 1), STEP_INTERVAL * (i + 1)),
    )

    const finish = setTimeout(
      () => onCompleteRef.current(),
      STEP_INTERVAL * (STEPS.length + 1),
    )

    return () => {
      clearInterval(timer)
      stepTimers.forEach(clearTimeout)
      clearTimeout(finish)
    }
  }, [])

  return (
    <section className="mx-auto flex w-full max-w-md flex-col gap-6 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Building the profile</h2>
        <span
          className="font-mono text-sm tabular-nums text-muted-foreground"
          aria-live="off"
        >
          {elapsed.toFixed(1)}s
        </span>
      </div>

      <ol className="flex flex-col gap-1">
        {STEPS.map((step, i) => {
          const isDone = i < completed
          const isActive = i === completed
          return (
            <li
              key={step}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-300",
                isDone && "text-foreground",
                isActive && "bg-muted/60 text-foreground",
                !isDone && !isActive && "text-muted-foreground/50",
              )}
            >
              <span
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isDone && "border-verified bg-verified text-white",
                  isActive && "border-brand text-brand",
                  !isDone && !isActive && "border-border",
                )}
              >
                {isDone ? (
                  <Check className="size-3.5 animate-in zoom-in-50 duration-300" />
                ) : isActive ? (
                  <Loader2 className="size-3.5 animate-spin" />
                ) : null}
              </span>
              <span className="text-sm">{step}</span>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
