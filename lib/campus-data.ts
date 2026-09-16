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

  const listed = UNIVERSITIES.find(
    (u) =>
      u.name.toLowerCase() === key ||
      u.shortName?.toLowerCase() === key,
  )
  if (listed) {
    return {
      name: listed.name,
      city: `${listed.city}, ${listed.country}`,
      description: `A visual profile assembled from public sources for ${listed.name} in ${listed.city}, ${listed.country}. Photos below are grouped by area and labelled with a confidence level so you can judge each one. Verification is based on source domains, captions, and geotags — not every image could be independently confirmed.`,
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

/* -------------------------------------------------------------------------- */
/* University directory (for autocomplete + city/country search)              */
/* -------------------------------------------------------------------------- */

export type University = {
  id: string
  name: string
  shortName?: string
  city: string
  country: string
  thumbnailUrl: string
  backgroundUrl: string
}

/**
 * Mock directory shaped like a future API/DB table. Thumbnails and background
 * photos use picsum placeholders keyed by a stable index so a real dataset can
 * be swapped in without touching the UI.
 */
export const UNIVERSITIES: University[] = [
  ["mit", "Massachusetts Institute of Technology", "MIT", "Cambridge", "United States"],
  ["harvard", "Harvard University", "Harvard", "Cambridge", "United States"],
  ["stanford", "Stanford University", "Stanford", "Stanford", "United States"],
  ["berkeley", "University of California, Berkeley", "UC Berkeley", "Berkeley", "United States"],
  ["ucla", "University of California, Los Angeles", "UCLA", "Los Angeles", "United States"],
  ["caltech", "California Institute of Technology", "Caltech", "Pasadena", "United States"],
  ["princeton", "Princeton University", "Princeton", "Princeton", "United States"],
  ["yale", "Yale University", "Yale", "New Haven", "United States"],
  ["columbia", "Columbia University", "Columbia", "New York", "United States"],
  ["nyu", "New York University", "NYU", "New York", "United States"],
  ["chicago", "University of Chicago", "UChicago", "Chicago", "United States"],
  ["michigan", "University of Michigan", "UMich", "Ann Arbor", "United States"],
  ["oxford", "University of Oxford", "Oxford", "Oxford", "United Kingdom"],
  ["cambridge", "University of Cambridge", "Cambridge", "Cambridge", "United Kingdom"],
  ["imperial", "Imperial College London", "Imperial", "London", "United Kingdom"],
  ["ucl", "University College London", "UCL", "London", "United Kingdom"],
  ["lse", "London School of Economics", "LSE", "London", "United Kingdom"],
  ["edinburgh", "University of Edinburgh", "Edinburgh", "Edinburgh", "United Kingdom"],
  ["manchester", "University of Manchester", "Manchester", "Manchester", "United Kingdom"],
  ["toronto", "University of Toronto", "UofT", "Toronto", "Canada"],
  ["mcgill", "McGill University", "McGill", "Montreal", "Canada"],
  ["ubc", "University of British Columbia", "UBC", "Vancouver", "Canada"],
  ["waterloo", "University of Waterloo", "Waterloo", "Waterloo", "Canada"],
  ["ethz", "ETH Zurich", "ETH", "Zurich", "Switzerland"],
  ["epfl", "EPFL", "EPFL", "Lausanne", "Switzerland"],
  ["tum", "Technical University of Munich", "TUM", "Munich", "Germany"],
  ["lmu", "Ludwig Maximilian University of Munich", "LMU", "Munich", "Germany"],
  ["sorbonne", "Sorbonne University", "Sorbonne", "Paris", "France"],
  ["psl", "PSL University", "PSL", "Paris", "France"],
  ["delft", "Delft University of Technology", "TU Delft", "Delft", "Netherlands"],
  ["ntu", "Nanyang Technological University", "NTU", "Singapore", "Singapore"],
  ["nus", "National University of Singapore", "NUS", "Singapore", "Singapore"],
  ["tokyo", "University of Tokyo", "UTokyo", "Tokyo", "Japan"],
  ["kyoto", "Kyoto University", "Kyoto U", "Kyoto", "Japan"],
  ["tsinghua", "Tsinghua University", "Tsinghua", "Beijing", "China"],
  ["peking", "Peking University", "PKU", "Beijing", "China"],
  ["hku", "University of Hong Kong", "HKU", "Hong Kong", "China"],
  ["melbourne", "University of Melbourne", "Melbourne", "Melbourne", "Australia"],
  ["sydney", "University of Sydney", "USyd", "Sydney", "Australia"],
  ["kbtu", "Kazakh-British Technical University", "KBTU", "Almaty", "Kazakhstan"],
].map(([id, name, shortName, city, country], i) => ({
  id,
  name,
  shortName,
  city,
  country,
  thumbnailUrl: `https://picsum.photos/seed/${id}/80/80`,
  backgroundUrl: `https://picsum.photos/1600/900?random=${i + 1}`,
}))

export type LocationField = "city" | "country"
export type SearchMode = "university" | LocationField

export type LocationMatch = {
  value: string
  universities: University[]
  thumbnailUrl: string
}

/** Substring, case-insensitive match on name, shortName, city, or country. */
export function searchUniversities(query: string, limit = 8): University[] {
  const q = query.trim().toLowerCase()
  const matches = UNIVERSITIES.filter((u) => {
    if (!q) return true
    return [u.name, u.shortName, u.city, u.country]
      .filter(Boolean)
      .some((s) => (s as string).toLowerCase().includes(q))
  })
  return matches.slice(0, limit)
}

/** Group universities by city/country for the location-search autocomplete. */
export function searchLocations(
  query: string,
  field: LocationField,
  limit = 8,
): LocationMatch[] {
  const q = query.trim().toLowerCase()
  const groups = new Map<string, University[]>()
  for (const u of UNIVERSITIES) {
    const key = u[field]
    if (q && !key.toLowerCase().includes(q)) continue
    const existing = groups.get(key)
    if (existing) existing.push(u)
    else groups.set(key, [u])
  }
  return [...groups.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([value, universities]) => ({
      value,
      universities,
      thumbnailUrl: universities[0].thumbnailUrl,
    }))
}

export function getUniversitiesByLocation(
  value: string,
  field: LocationField,
): University[] {
  return UNIVERSITIES.filter(
    (u) => u[field].toLowerCase() === value.toLowerCase(),
  )
}

/* -------------------------------------------------------------------------- */
/* Student comments                                                           */
/* -------------------------------------------------------------------------- */

export type CampusComment = {
  id: string
  author: string
  createdAt: number
  text: string
}

const DAY = 86_400_000
const HOUR = 3_600_000

/** Seeded per-category comments. Keyed like a future `comments` table. */
const MOCK_COMMENTS: Record<Category, CampusComment[]> = {
  Dormitories: [
    { id: "d1", author: "Maya R.", createdAt: Date.now() - 2 * DAY, text: "Older dorms have way more character but book early — the good rooms go fast." },
    { id: "d2", author: "Jonas", createdAt: Date.now() - 9 * DAY, text: "Laundry situation is rough on weekends. Go on a weekday morning." },
  ],
  Classrooms: [
    { id: "c1", author: "Priya", createdAt: Date.now() - 5 * HOUR, text: "The big lecture halls get cold, bring a hoodie even in summer." },
    { id: "c2", author: "Tom W.", createdAt: Date.now() - 4 * DAY, text: "Smaller seminar rooms in the east wing are the best for group work." },
    { id: "c3", author: "Ana", createdAt: Date.now() - 12 * DAY, text: "Projectors are hit or miss, arrive a few minutes early if you're presenting." },
  ],
  Library: [
    { id: "l1", author: "Kenji", createdAt: Date.now() - 1 * DAY, text: "The library gets crowded near finals, come early to grab a good desk." },
    { id: "l2", author: "Sofia", createdAt: Date.now() - 6 * DAY, text: "Top floor is silent study, ground floor is fine for chatting." },
  ],
  City: [
    { id: "ci1", author: "Leo", createdAt: Date.now() - 3 * DAY, text: "Public transit from campus to downtown is quick and cheap. Get a student pass." },
    { id: "ci2", author: "Hannah", createdAt: Date.now() - 15 * DAY, text: "Tons of affordable food spots a short walk from the main gate." },
  ],
  Sports: [
    { id: "s1", author: "Marcus", createdAt: Date.now() - 7 * HOUR, text: "Gym is packed 5–7pm. Early mornings are basically empty." },
    { id: "s2", author: "Yuki", createdAt: Date.now() - 8 * DAY, text: "Intramural leagues are super welcoming even if you've never played." },
  ],
  Labs: [
    { id: "la1", author: "Dana", createdAt: Date.now() - 2 * DAY, text: "Lab access hours vary a lot by department — check with your advisor first." },
    { id: "la2", author: "Omar", createdAt: Date.now() - 11 * DAY, text: "The newer research labs are impressive but you need a keycard to get in." },
  ],
  "Student Life": [
    { id: "sl1", author: "Bea", createdAt: Date.now() - 6 * HOUR, text: "Club fair in the first week is the best way to meet people. Show up." },
    { id: "sl2", author: "Ravi", createdAt: Date.now() - 5 * DAY, text: "Weekend campus events are underrated, especially the outdoor movie nights." },
    { id: "sl3", author: "Elena", createdAt: Date.now() - 20 * DAY, text: "Coffee shop by the quad is the unofficial hangout for everyone." },
  ],
}

export function getComments(category: Category): CampusComment[] {
  return MOCK_COMMENTS[category] ?? []
}

export function formatRelativeTime(ms: number): string {
  const diff = Math.max(0, Date.now() - ms)
  const min = Math.round(diff / 60_000)
  if (min < 1) return "just now"
  if (min < 60) return `${min} minute${min === 1 ? "" : "s"} ago`
  const hr = Math.round(min / 60)
  if (hr < 24) return `${hr} hour${hr === 1 ? "" : "s"} ago`
  const day = Math.round(hr / 24)
  if (day < 30) return `${day} day${day === 1 ? "" : "s"} ago`
  const month = Math.round(day / 30)
  if (month < 12) return `${month} month${month === 1 ? "" : "s"} ago`
  const year = Math.round(month / 12)
  return `${year} year${year === 1 ? "" : "s"} ago`
}
