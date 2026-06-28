"use client"

import { StreamGrid } from "@/features/home/stream-grid"
import { StatsBar } from "@/features/home/stats-bar"

export default function HomePage() {
  return (
    <div className="p-6 space-y-6">
      <StatsBar />
      <StreamGrid />
    </div>
  )
}
