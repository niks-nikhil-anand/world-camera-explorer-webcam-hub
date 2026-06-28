import Link from "next/link"
import {
  Car,
  Plane,
  Waves,
  Mountain,
  PawPrint,
  TreePine,
  CloudSun,
  Ship,
  TrainFront,
  Building2,
  Bird,
  Squirrel,
  Trees,
  Landmark,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { CameraCategory } from "@/types"

const iconMap: Record<string, React.ElementType> = {
  Car,
  Plane,
  Waves,
  Mountain,
  PawPrint,
  TreePine,
  CloudSun,
  Ship,
  TrainFront,
  Building2,
  Bird,
  Squirrel,
  Trees,
  Landmark,
}

interface CategoryCardProps {
  label: string
  value: CameraCategory
  icon: string
  className?: string
}

export function CategoryCard({ label, value, icon, className }: CategoryCardProps) {
  const Icon = iconMap[icon] || Building2

  return (
    <Link
      href={`/categories/${value}`}
      className={cn(
        "group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
}
