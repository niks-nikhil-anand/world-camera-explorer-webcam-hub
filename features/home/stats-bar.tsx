"use client"

import { Video, Globe2, Radio, Eye } from "lucide-react"

const stats = [
  { label: "Live Streams", value: "12,547", icon: Video, color: "text-green-500 dark:text-[#39FF14]" },
  { label: "Countries", value: "194", icon: Globe2, color: "text-primary" },
  { label: "Active Nodes", value: "8,312", icon: Radio, color: "text-purple-500 dark:text-[#A855F7]" },
  { label: "Viewers Now", value: "1.2M", icon: Eye, color: "text-amber-500 dark:text-[#F59E0B]" },
]

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card/60 border border-border/50 backdrop-blur-sm"
        >
          <stat.icon className={`h-4 w-4 ${stat.color} flex-shrink-0`} />
          <div className="min-w-0">
            <p className="text-sm font-mono font-bold text-foreground">
              {stat.value}
            </p>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
