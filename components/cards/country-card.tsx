import Link from "next/link"
import { Camera } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Country } from "@/types"

interface CountryCardProps {
  country: Country
  className?: string
}

export function CountryCard({ country, className }: CountryCardProps) {
  return (
    <Link
      href={`/countries/${country.iso.toLowerCase()}`}
      className={cn(
        "group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:shadow-md hover:border-primary/20",
        className
      )}
    >
      <span className="text-3xl" role="img" aria-label={country.name}>
        {country.flag}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold truncate group-hover:text-primary transition-colors">
          {country.name}
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Camera className="h-3 w-3" />
          <span>{country.cameraCount.toLocaleString()} cameras</span>
        </div>
      </div>
    </Link>
  )
}
