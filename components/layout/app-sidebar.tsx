"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Search,
  Car,
  PlaneTakeoff,
  Waves,
  Mountain,
  TreePine,
  Building2,
  Ship,
  TrainFront,
  CloudSun,
  Bird,
  Squirrel,
  PawPrint,
  Landmark,
  ChevronDown,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { CATEGORIES } from "@/constants"
import { mockCountries } from "@/lib/mock-data"

const ICON_MAP: Record<string, LucideIcon> = {
  Car,
  Plane: PlaneTakeoff,
  Waves,
  Mountain,
  TreePine,
  Building2,
  Ship,
  TrainFront,
  CloudSun,
  Bird,
  Squirrel,
  PawPrint,
  Landmark,
  Trees: TreePine,
}

export function AppSidebar() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")
  const [showAllCountries, setShowAllCountries] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [viewerRange, setViewerRange] = useState(50)

  const visibleCountries = showAllCountries
    ? mockCountries
    : mockCountries.slice(0, 6)

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((c) => c !== value)
        : [...prev, value]
    )
  }

  return (
    <aside className="w-[320px] h-screen flex-shrink-0 border-r border-border border-glow bg-[#0D0E14] flex flex-col overflow-hidden">
      {/* Sidebar Header / Brand */}
      <div className="p-5 border-b border-border/50">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center glow-cyan">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse-live" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wider text-foreground uppercase">
              CyberWatch
            </h1>
            <p className="text-[10px] font-mono text-muted-foreground tracking-widest">
              LIVE HUB v2.0
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-primary/70" />
          <input
            type="text"
            placeholder="Search streams..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchValue.trim()) {
                router.push(`/search?q=${encodeURIComponent(searchValue)}`)
              }
            }}
            className="w-full h-9 rounded-full bg-white/5 border border-border/50 pl-9 pr-16 text-xs text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:border-primary/50 focus:glow-cyan"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-muted-foreground bg-white/5 px-1.5 py-0.5 rounded border border-border/30">
            ⌘K
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto scrollbar-cyber px-4 pb-4">
        {/* Categories */}
        <div className="mt-4">
          <h3 className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Categories
          </h3>
          <div className="space-y-0.5">
            {CATEGORIES.map((cat) => {
              const Icon = ICON_MAP[cat.icon] || Building2
              const isSelected = selectedCategories.includes(cat.value)
              return (
                <button
                  key={cat.value}
                  onClick={() => toggleCategory(cat.value)}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 group/item",
                    isSelected
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-hologram-silver hover:text-foreground hover:bg-white/5 hover:translate-x-1"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5 flex-shrink-0 transition-colors",
                      isSelected ? "text-primary" : "text-muted-foreground group-hover/item:text-primary/70"
                    )}
                  />
                  <span className="flex-1 text-left">{cat.label}</span>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Geographic Filter */}
        <div className="mt-6">
          <h3 className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Region Filter
          </h3>
          <div className="space-y-1">
            {visibleCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => router.push(`/countries?iso=${country.iso}`)}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-[#A0AEC0] hover:text-foreground hover:bg-white/5 transition-all duration-200 hover:translate-x-1 group/country"
              >
                <span className="text-base leading-none">{country.flag}</span>
                <span className="flex-1 text-left font-medium">{country.name}</span>
                <span className="text-[10px] font-mono text-muted-foreground bg-white/5 px-1.5 py-0.5 rounded">
                  {country.cameraCount.toLocaleString()}
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowAllCountries(!showAllCountries)}
            className="mt-2 flex items-center gap-1 px-3 text-[10px] font-mono text-primary/70 hover:text-primary transition-colors"
          >
            <ChevronDown
              className={cn(
                "h-3 w-3 transition-transform",
                showAllCountries && "rotate-180"
              )}
            />
            {showAllCountries ? "Show less" : "Show all regions"}
          </button>
        </div>

        {/* Popularity / Viewer Slider */}
        <div className="mt-6">
          <h3 className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
            <SlidersHorizontal className="h-3 w-3" />
            Viewer Threshold
          </h3>
          <div className="px-1">
            <input
              type="range"
              min={0}
              max={100}
              value={viewerRange}
              onChange={(e) => setViewerRange(Number(e.target.value))}
              className="w-full h-1 bg-border rounded-full appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-[0_0_6px_#00F0FF]"
            />
            <div className="flex justify-between mt-1.5 text-[10px] font-mono text-muted-foreground">
              <span>1k</span>
              <span className="text-primary/70">{Math.round(viewerRange * 5)}k+</span>
              <span>500k+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14] animate-pulse-live" />
          <span>SYSTEM ONLINE</span>
          <span className="ml-auto opacity-50">v2.0.1</span>
        </div>
      </div>
    </aside>
  )
}
