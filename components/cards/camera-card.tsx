"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, MapPin, Satellite } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Camera } from "@/types"

interface CameraCardProps {
  camera: Camera
  className?: string
}

export function CameraCard({ camera, className }: CameraCardProps) {
  return (
    <Link
      href={`/camera/${camera.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-border/50 bg-card/80 backdrop-blur-md transition-all duration-300 hover:border-primary/60 dark:hover:glow-cyan-strong hover:shadow-lg",
        className
      )}
    >
      {/* Thumbnail - 16:9 */}
      <div className="relative aspect-video overflow-hidden bg-muted/30">
        <Image
          src={camera.thumbnail}
          alt={camera.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Status Badge - Top Left */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-sm px-2 py-1 backdrop-blur-sm",
              camera.isLive ? "bg-black/60" : "bg-red-900/40"
            )}
          >
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                camera.isLive
                  ? "bg-green-500 dark:bg-[#39FF14] animate-pulse-live"
                  : "bg-red-400"
              )}
            />
            <span
              className={cn(
                "text-[10px] font-mono font-bold uppercase tracking-wider",
                camera.isLive
                  ? "text-green-400 dark:text-[#39FF14] dark:text-glow-green"
                  : "text-red-300"
              )}
            >
              {camera.isLive ? "LIVE" : "OFFLINE"}
            </span>
          </span>
        </div>

        {/* View Count - Top Right */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-black/60 px-2 py-1 backdrop-blur-sm">
            <Satellite className="h-3 w-3 text-primary/80" />
            <span className="text-[10px] font-mono text-primary/90">
              {camera.viewCount.toLocaleString()}
            </span>
          </span>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-8">
          <h3 className="text-sm font-semibold text-white truncate leading-tight group-hover:text-primary transition-colors">
            {camera.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1 text-[11px] text-white/70">
            <MapPin className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">
              {camera.city}, {camera.country}
            </span>
            <span className="text-white/50">•</span>
            <span className="capitalize">{camera.category}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
