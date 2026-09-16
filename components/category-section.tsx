import { ImageOff } from "lucide-react"
import { PhotoCard } from "@/components/photo-card"
import { CommentsSection } from "@/components/comments-section"
import type { CampusPhoto, Category, Confidence } from "@/lib/campus-data"

const CONFIDENCE_ORDER: Record<Confidence, number> = {
  verified: 0,
  likely: 1,
  unverified: 2,
}

export function CategorySection({
  category,
  photos,
}: {
  category: Category
  photos: CampusPhoto[]
}) {
  const sorted = [...photos].sort(
    (a, b) => CONFIDENCE_ORDER[a.confidence] - CONFIDENCE_ORDER[b.confidence],
  )

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline gap-2 border-b border-border pb-2">
        <h2 className="text-xl font-semibold tracking-tight">{category}</h2>
        <span className="text-sm text-muted-foreground">{photos.length}</span>
      </div>

      {sorted.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border py-12 text-center">
          <ImageOff className="size-6 text-muted-foreground" aria-hidden="true" />
          <p className="text-sm font-medium">No verified photos found</p>
          <p className="max-w-xs text-xs text-muted-foreground">
            We couldn&apos;t confirm any images for this area from public
            sources.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}

      <CommentsSection category={category} />
    </section>
  )
}
