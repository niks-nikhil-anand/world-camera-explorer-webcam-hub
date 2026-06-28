"use client"

import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  placeholder?: string
  className?: string
  size?: "default" | "lg"
  value?: string
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
}

export function SearchBar({
  placeholder = "Search cameras, countries, cities...",
  className,
  size = "default",
  value,
  onChange,
  onSubmit,
}: SearchBarProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (value && onSubmit) onSubmit(value)
      }}
      className={cn("relative w-full", className)}
    >
      <Search
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground",
          size === "lg" ? "h-5 w-5" : "h-4 w-4"
        )}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "w-full rounded-xl border border-border bg-card pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50",
          size === "lg" ? "h-14 pl-12 text-base" : "h-10"
        )}
      />
    </form>
  )
}
