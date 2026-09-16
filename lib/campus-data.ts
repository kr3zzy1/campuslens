export type Confidence = "verified" | "likely" | "unverified"

export type Category =
  | "Dormitories"
  | "Classrooms"
  | "Library"
  | "City"
  | "Sports"
  | "Labs"
  | "Student Life"

export const CATEGORIES: Category[] = [
  "Dormitories",
  "Classrooms",
  "Library",
  "City",
  "Sports",
  "Labs",
  "Student Life",
]

export type CampusPhoto = {
  id: string
  imageUrl: string
  category: Category
  confidence: Confidence
  confidenceReason: string
  sourceUrl: string
  sourceDomain: string
  sourceDate: string | null
}

export type UniversityProfile = {
  name: string
  city: string
  description: string
}

/**
 * Mock dataset shaped exactly like a future real API response, so the UI can be
 * repointed at a live endpoint without any component changes.
 *
 * Intentional coverage for demoing honest uncertainty:
 * - at least two "unverified" items
 * - the "Labs" category is deliberately left empty to trigger the empty state
 */
export const MOCK_PHOTOS: CampusPhoto[] = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/400/300?random=1",
    category: "Dormitories",
    confidence: "verified",
    confidenceReason: "Matched official university domain",
    sourceUrl: "https://en.wikipedia.org/wiki/University_housing",
    sourceDomain: "wikipedia.org",
    sourceDate: "Jul 2024",
  },
  {
    id: "2",
    imageUrl: "https://picsum.photos/400/300?random=2",
    category: "Dormitories",
    confidence: "likely",
    confidenceReason: "Caption references the campus, source location unconfirmed",
    sourceUrl: "https://commons.wikimedia.org",
    sourceDomain: "wikimedia.org",
    sourceDate: "Mar 2023",
  },
  {
    id: "3",
    imageUrl: "https://picsum.photos/400/300?random=3",
    category: "Dormitories",
    confidence: "unverified",
    confidenceReason: "Could not confirm source location",
    sourceUrl: "https://www.flickr.com",
    sourceDomain: "flickr.com",
    sourceDate: null,
  },
  {
    id: "4",
    imageUrl: "https://picsum.photos/400/300?random=4",
    category: "Classrooms",
    confidence: "verified",
    confidenceReason: "Published in the university news archive",
    sourceUrl: "https://en.wikipedia.org/wiki/Lecture_hall",
    sourceDomain: "wikipedia.org",
    sourceDate: "Sep 2024",
  },
  {
    id: "5",
    imageUrl: "https://picsum.photos/400/300?random=5",
    category: "Classrooms",
    confidence: "verified",
    confidenceReason: "Matched official university domain",
    sourceUrl: "https://commons.wikimedia.org",
    sourceDomain: "wikimedia.org",
    sourceDate: "Jan 2024",
  },
  {
    id: "6",
    imageUrl: "https://picsum.photos/400/300?random=6",
    category: "Classrooms",
    confidence: "likely",
    confidenceReason: "Geotag near campus, exact building unconfirmed",
    sourceUrl: "https://www.openstreetmap.org",
    sourceDomain: "openstreetmap.org",
    sourceDate: "May 2023",
  },
  {
    id: "7",
    imageUrl: "https://picsum.photos/400/300?random=7",
    category: "Library",
    confidence: "verified",
    confidenceReason: "Matched official university domain",
    sourceUrl: "https://en.wikipedia.org/wiki/Academic_library",
    sourceDomain: "wikipedia.org",
    sourceDate: "Aug 2024",
  },
  {
    id: "8",
    imageUrl: "https://picsum.photos/400/300?random=8",
    category: "Library",
    confidence: "verified",
    confidenceReason: "Cross-referenced with two independent sources",
    sourceUrl: "https://commons.wikimedia.org",
    sourceDomain: "wikimedia.org",
    sourceDate: "Nov 2023",
  },
  {
    id: "9",
    imageUrl: "https://picsum.photos/400/300?random=9",
    category: "Library",
    confidence: "likely",
    confidenceReason: "Source describes the library but image date is unknown",
    sourceUrl: "https://www.flickr.com",
    sourceDomain: "flickr.com",
    sourceDate: "2022",
  },
  {
    id: "10",
    imageUrl: "https://picsum.photos/400/300?random=10",
    category: "City",
    confidence: "verified",
    confidenceReason: "Landmark verified against municipal records",
    sourceUrl: "https://en.wikipedia.org/wiki/City",
    sourceDomain: "wikipedia.org",
    sourceDate: "Jun 2024",
  },
  {
    id: "11",
    imageUrl: "https://picsum.photos/400/300?random=11",
    category: "City",
    confidence: "verified",
    confidenceReason: "Geotag matches the city center",
    sourceUrl: "https://www.openstreetmap.org",
    sourceDomain: "openstreetmap.org",
    sourceDate: "Apr 2024",
  },
  {
    id: "12",
    imageUrl: "https://picsum.photos/400/300?random=12",
    category: "City",
    confidence: "likely",
    confidenceReason: "Likely the same city, taken from a nearby district",
    sourceUrl: "https://commons.wikimedia.org",
    sourceDomain: "wikimedia.org",
    sourceDate: "Feb 2023",
  },
  {
    id: "13",
    imageUrl: "https://picsum.photos/400/300?random=13",
    category: "Sports",
    confidence: "verified",
    confidenceReason: "Matched official athletics department domain",
    sourceUrl: "https://en.wikipedia.org/wiki/College_athletics",
    sourceDomain: "wikipedia.org",
    sourceDate: "Oct 2024",
  },
  {
    id: "14",
    imageUrl: "https://picsum.photos/400/300?random=14",
    category: "Sports",
    confidence: "likely",
    confidenceReason: "Team colors match, venue not confirmed",
    sourceUrl: "https://www.flickr.com",
    sourceDomain: "flickr.com",
    sourceDate: "Dec 2023",
  },
  {
    id: "15",
    imageUrl: "https://picsum.photos/400/300?random=15",
    category: "Sports",
    confidence: "unverified",
    confidenceReason: "Could not confirm source location",
    sourceUrl: "https://www.flickr.com",
    sourceDomain: "flickr.com",
    sourceDate: null,
  },
  {
    id: "16",
    imageUrl: "https://picsum.photos/400/300?random=16",
    category: "Student Life",
    confidence: "verified",
    confidenceReason: "Published by the official student union",
    sourceUrl: "https://en.wikipedia.org/wiki/Student_society",
    sourceDomain: "wikipedia.org",
    sourceDate: "Sep 2024",
  },
  {
    id: "17",
    imageUrl: "https://picsum.photos/400/300?random=17",
    category: "Student Life",
    confidence: "likely",
    confidenceReason: "Event tagged to the campus, attendee source",
    sourceUrl: "https://commons.wikimedia.org",
    sourceDomain: "wikimedia.org",
    sourceDate: "Jul 2023",
  },
  {
    id: "18",
    imageUrl: "https://picsum.photos/400/300?random=18",
    category: "Student Life",
    confidence: "likely",
    confidenceReason: "Matches campus setting, date estimated",
    sourceUrl: "https://www.flickr.com",
    sourceDomain: "flickr.com",
    sourceDate: "2024",
  },
]

const KNOWN_PROFILES: Record<string, Omit<UniversityProfile, "name">> = {
  mit: {
    city: "Cambridge, Massachusetts",
    description:
      "The Massachusetts Institute of Technology is a private research university known for its rigorous programs in science, engineering, and technology. Its riverside campus blends historic neoclassical buildings with bold modern architecture. Student life centers on hands-on making, research labs, and a famously playful hacking culture.",
  },
  stanford: {
    city: "Stanford, California",
    description:
      "Stanford University is a private research university in the heart of Silicon Valley, celebrated for entrepreneurship and interdisciplinary study. Its sprawling campus features sandstone arcades, palm-lined walks, and open California landscapes. Campus life balances academics with athletics, the arts, and a strong startup ethos.",
  },
  kbtu: {
    city: "Almaty, Kazakhstan",
    description:
      "Kazakh-British Technical University is a leading technical university in Almaty, focused on engineering, IT, and business. Its compact urban campus sits near the city center, close to cafes, parks, and the mountain backdrop of the Tien Shan. Student life mixes academic clubs with a vibrant, international community.",
  },
}

export function getUniversityProfile(name: string): UniversityProfile {
  const trimmed = name.trim()
  const key = trimmed.toLowerCase()
  const known = KNOWN_PROFILES[key]
  if (known) {
    return {
      name:
        key === "mit"
          ? "Massachusetts Institute of Technology"
          : key === "kbtu"
            ? "Kazakh-British Technical University"
            : "Stanford University",
      ...known,
    }
  }

  return {
    name: trimmed || "Unknown University",
    city: "City not confirmed",
    description: `A visual profile assembled from public sources for ${
      trimmed || "this university"
    }. Photos below are grouped by area and labelled with a confidence level so you can judge each one. Verification is based on source domains, captions, and geotags — not every image could be independently confirmed.`,
  }
}

export function getCampusPhotos(_name: string): CampusPhoto[] {
  // A real implementation would fetch photos for the given university.
  // The mock returns the same verified sample set regardless of name.
  return MOCK_PHOTOS
}

export const EXAMPLE_UNIVERSITIES = ["MIT", "Stanford", "KBTU", "Oxford"]
