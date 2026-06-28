"use client"

import { cn } from "@/lib/utils"

interface StatCardProps {
  label: string
  value: string
  className?: string
}

export function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-6 text-center",
        className
      )}
    >
      <span className="text-3xl font-bold tracking-tight">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}
