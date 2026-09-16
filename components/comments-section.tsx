"use client"

import { useMemo, useState } from "react"
import { ChevronDown, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  formatRelativeTime,
  getComments,
  type CampusComment,
  type Category,
} from "@/lib/campus-data"

export function CommentsSection({ category }: { category: Category }) {
  const seeded = useMemo(() => getComments(category), [category])
  const [comments, setComments] = useState<CampusComment[]>(seeded)
  const [expanded, setExpanded] = useState(false)
  const [draft, setDraft] = useState("")

  function post(e: React.FormEvent) {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    const next: CampusComment = {
      id: `local-${Date.now()}`,
      author: "You",
      createdAt: Date.now(),
      text,
    }
    setComments((prev) => [next, ...prev])
    setDraft("")
  }

  return (
    <div className="rounded-xl border border-border bg-muted/30">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between gap-2 rounded-xl px-4 py-3 text-left transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          <MessageSquare className="size-4 text-muted-foreground" aria-hidden="true" />
          {expanded ? "Hide comments" : "Show comments"} ({comments.length})
        </span>
        <ChevronDown
          className={`size-4 text-muted-foreground transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {expanded && (
        <div className="flex flex-col gap-4 border-t border-border px-4 py-4">
          <form onSubmit={post} className="flex gap-2">
            <Input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={`Share a tip about ${category.toLowerCase()}...`}
              aria-label={`Add a comment about ${category}`}
              className="h-9"
            />
            <Button type="submit" size="sm" className="h-9 shrink-0" disabled={!draft.trim()}>
              <Send className="size-4" aria-hidden="true" />
              Post
            </Button>
          </form>

          <ul className="flex flex-col gap-3">
            {comments.map((c) => (
              <li key={c.id} className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">{c.author}</span>
                  <span className="text-xs text-muted-foreground">
                    {formatRelativeTime(c.createdAt)}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
