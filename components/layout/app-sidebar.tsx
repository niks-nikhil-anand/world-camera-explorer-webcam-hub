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
  Globe,
  Satellite,
  ChevronDown,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Infrastructure Tiers with system codes
const INFRASTRUCTURE_TIERS = [
  {
    code: "NET_01",
    label: "Highway & Municipal Traffic",
    icon: Car,
    description: "Traffic cameras & road networks",
  },
  {
    code: "EUR_02",
    label: "European Mobility & DATEX II",
    icon: Globe,
    description: "EU standardized transit feeds",
  },
  {
    code: "MET_03",
    label: "Environmental & Meteorological",
    icon: CloudSun,
    description: "Weather & agricultural observatories",
  },
  {
    code: "AGR_04",
    label: "Global Aggregators & Leisure",
    icon: Satellite,
    description: "Tourism & commercial platforms",
  },
  {
    code: "BIO_05",
    label: "Wildlife & Marine Research",
    icon: Bird,
    description: "Conservation & telemetry feeds",
  },
  {
    code: "LOG_06",
    label: "Ports, Aviation & Rail",
    icon: Ship,
    description: "Macro-logistics infrastructure",
  },
  {
    code: "CIV_07",
    label: "Civic & Academic Campuses",
    icon: Building2,
    description: "Universities & municipalities",
  },
]

// Geographic Jurisdiction Engine — Bento Grid Dataset
const GEOGRAPHIC_REGIONS = [
  {
    flag: "🇮🇳",
    name: "India",
    iso: "IN",
    cameraCount: 3450,
    metadata: "Traffic • Smart Cities • Railways",
  },
  {
    flag: "🇺🇸",
    name: "USA",
    iso: "US",
    cameraCount: 12890,
    metadata: "Traffic • National Parks • Airports",
  },
  {
    flag: "🇯🇵",
    name: "Japan",
    iso: "JP",
    cameraCount: 5120,
    metadata: "Traffic • Tourism • Ski Resorts",
  },
  {
    flag: "🇪🇺",
    name: "Europe",
    iso: "EU",
    cameraCount: 9430,
    metadata: "Traffic • Mountain • City Centers",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    iso: "CA",
    cameraCount: 2110,
    metadata: "Highways • National Parks • Cities",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    iso: "AU",
    cameraCount: 1840,
    metadata: "Beaches • Traffic • Weather",
  },
  {
    flag: "🇳🇿",
    name: "New Zealand",
    iso: "NZ",
    cameraCount: 760,
    metadata: "Roads • Mountains • Tourism",
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    iso: "SG",
    cameraCount: 1200,
    metadata: "Traffic • City Cameras • Smart Grid",
  },
  {
    flag: "🇰🇷",
    name: "South Korea",
    iso: "KR",
    cameraCount: 2340,
    metadata: "Traffic • Tourism • Gov Networks",
  },
  {
    flag: "🇦🇪",
    name: "UAE",
    iso: "AE",
    cameraCount: 980,
    metadata: "Urban • Luxury Tourism • Traffic",
  },
  {
    flag: "🌎",
    name: "Global Nodes",
    iso: "GLOBAL",
    cameraCount: 4500,
    metadata: "Wildlife • Volcanoes • Deep Ocean",
  },
]

export function AppSidebar() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [showAllRegions, setShowAllRegions] = useState(false)

  return (
    <aside className="w-[340px] h-screen flex-shrink-0 border-r border-border/50 bg-sidebar flex flex-col overflow-hidden relative">
      {/* Micro-etched glass edge */}
      <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/5 to-primary/20" />

      {/* Sidebar Header / Brand */}
      <div className="p-5 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/logo/logo.png"
              alt="CyberWatch Logo"
              className="h-9 w-9 object-contain"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wider text-foreground uppercase font-sans">
              CyberWatch
            </h1>
            <p className="text-[10px] font-mono text-muted-foreground tracking-[0.2em]">
              LIVE HUB v2.0
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-primary/70 transition-colors group-focus-within:text-primary" />
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
            className="w-full h-10 rounded-full bg-muted/50 border border-border/40 pl-10 pr-16 text-xs text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 ease-cyber focus:outline-none focus:border-primary/50 focus:bg-muted/80 dark:focus:glow-cyan"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-muted-foreground/70 bg-muted/80 px-2 py-0.5 rounded border border-border/30">
            ⌘K
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto scrollbar-cyber px-4 pb-4">
        {/* Core Infrastructure Tiers */}
        <div className="mt-4">
          <h3 className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-3">
            Infrastructure Tiers
          </h3>
          <div className="space-y-0.5">
            {INFRASTRUCTURE_TIERS.map((tier) => {
              const Icon = tier.icon
              const isSelected = selectedTier === tier.code
              return (
                <button
                  key={tier.code}
                  onClick={() =>
                    setSelectedTier(isSelected ? null : tier.code)
                  }
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition-all duration-300 ease-cyber group/tier",
                    isSelected
                      ? "bg-primary/10 text-primary border border-primary/20 dark:glow-cyan"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:translate-x-1"
                  )}
                >
                  <div
                    className={cn(
                      "h-7 w-7 rounded-md flex items-center justify-center flex-shrink-0 border transition-all duration-300",
                      isSelected
                        ? "bg-primary/15 border-primary/30"
                        : "bg-muted/50 border-border/30 group-hover/tier:border-primary/20"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-3.5 w-3.5 transition-colors duration-300",
                        isSelected
                          ? "text-primary"
                          : "text-muted-foreground group-hover/tier:text-primary/70"
                      )}
                    />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <span className="block text-[11px] font-medium truncate">
                      {tier.label}
                    </span>
                    <span
                      className={cn(
                        "block text-[9px] font-mono tracking-wider mt-0.5",
                        isSelected ? "text-primary/60" : "text-muted-foreground/50"
                      )}
                    >
                      [{tier.code}]
                    </span>
                  </div>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Geographic Jurisdiction Engine — Bento Grid */}
        <div className="mt-6">
          <h3 className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-3">
            Geographic Jurisdiction
          </h3>

          {/* Collapsible Grid Container */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              showAllRegions ? "max-h-[1200px]" : "max-h-[340px]"
            )}
          >
            <div className="grid grid-cols-2 gap-3">
              {(showAllRegions ? GEOGRAPHIC_REGIONS : GEOGRAPHIC_REGIONS.slice(0, 6)).map((region) => (
                <button
                  key={region.iso}
                  onClick={() => router.push(`/countries?iso=${region.iso}`)}
                  className="group/card flex flex-col p-3 rounded-lg bg-card/60 border border-border/80 transition-all duration-300 ease-cyber hover:scale-[1.03] hover:bg-gradient-to-br hover:from-card hover:to-accent/30 hover:border-primary/40 text-left"
                >
                  {/* Top Row: Flag + Name + Count */}
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-sm leading-none flex-shrink-0">
                        {region.flag}
                      </span>
                      <span className="text-xs font-semibold text-foreground truncate">
                        {region.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-primary font-mono bg-primary/10 px-1.5 py-0.5 rounded flex-shrink-0 ml-1">
                      {region.cameraCount.toLocaleString()}
                    </span>
                  </div>

                  {/* Bottom Row: Metadata Tags */}
                  <p className="text-[9px] text-muted-foreground font-sans tracking-wide truncate mt-1.5 w-full">
                    {region.metadata}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* View More / Collapse Trigger Bar */}
          <button
            onClick={() => setShowAllRegions(!showAllRegions)}
            className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-muted/50 border border-border/30 text-[10px] font-mono text-primary/70 hover:text-primary hover:bg-muted/80 hover:border-primary/30 transition-all duration-300 ease-cyber"
          >
            <ChevronDown
              className={cn(
                "h-3 w-3 transition-transform duration-500 ease-in-out",
                showAllRegions && "rotate-180"
              )}
            />
            {showAllRegions ? "Collapse Region Matrix" : "View More Regions"}
          </button>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-border/30">
        <div className="flex items-center gap-3">
          <img
            src="/logo/logo.png"
            alt="CyberWatch Logo"
            className="h-7 w-7 rounded-md object-contain"
          />
          <div className="flex flex-col gap-0.5 flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 dark:bg-[#39FF14] animate-pulse-live" />
              <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
                SYSTEM ONLINE
              </span>
            </div>
            <span className="text-[9px] font-mono text-muted-foreground/50 tracking-wider">
              MICROSERVICE HEALTH: NOMINAL
            </span>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground/50">v2.0.1</span>
        </div>
      </div>
    </aside>
  )
}
