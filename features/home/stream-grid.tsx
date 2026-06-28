"use client"

import Image from "next/image"
import { MapPin, Maximize2, Satellite } from "lucide-react"
import { cn } from "@/lib/utils"
import { mockCameras } from "@/lib/mock-data"
import type { Camera } from "@/types"

function StreamCard({ camera }: { camera: Camera }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border/50 bg-[#121420]/65 backdrop-blur-md transition-all duration-300 hover:border-primary/60 hover:glow-cyan-strong">
      {/* Video Container - 16:9 */}
      <div className="relative aspect-video overflow-hidden bg-black/40">
        <Image
          src={camera.thumbnail}
          alt={camera.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 340px"
        />

        {/* Top-left: LIVE indicator */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-black/60 px-2 py-1 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#39FF14] animate-pulse-live" />
            <span className="text-[10px] font-mono font-bold text-[#39FF14] uppercase tracking-wider text-glow-green">
              LIVE
            </span>
          </span>
        </div>

        {/* Top-right: Viewer count */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-black/60 px-2 py-1 backdrop-blur-sm">
            <Satellite className="h-3 w-3 text-primary/80" />
            <span className="text-[10px] font-mono text-primary/90">
              {camera.viewCount.toLocaleString()}
            </span>
          </span>
        </div>

        {/* Bottom gradient mask with data */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-8">
          <h3 className="text-sm font-semibold text-white truncate leading-tight">
            {camera.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1 text-[11px] text-[#A0AEC0]/80">
              <MapPin className="h-3 w-3" />
              <span className="font-mono">
                {camera.latitude.toFixed(2)}°, {camera.longitude.toFixed(2)}°
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground">•</span>
            <span className="text-[11px] text-[#A0AEC0]/80 capitalize font-medium">
              {camera.category} / {camera.country}
            </span>
          </div>
        </div>

        {/* Hover: Expand button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 border border-primary/40 backdrop-blur-md text-primary text-xs font-mono font-medium hover:bg-primary/30 transition-colors glow-cyan">
            <Maximize2 className="h-3.5 w-3.5" />
            EXPAND FEED
          </button>
        </div>
      </div>
    </div>
  )
}

export function StreamGrid() {
  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <h2 className="text-xs font-mono font-bold text-foreground uppercase tracking-widest">
            Live Stream Matrix
          </h2>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground">
          {mockCameras.length} FEEDS ACTIVE
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {mockCameras.map((camera) => (
          <StreamCard key={camera.id} camera={camera} />
        ))}
      </div>
    </div>
  )
}
