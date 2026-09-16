"use client"

import { useEffect, useState } from "react"
import { UNIVERSITIES } from "@/lib/campus-data"

const IMAGES = UNIVERSITIES.map((u) => u.backgroundUrl)

export function AnimatedBackground() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
      {/* Dark gradient + wash so hero text and the search field stay readable on any photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/75" />
    </div>
  )
}
