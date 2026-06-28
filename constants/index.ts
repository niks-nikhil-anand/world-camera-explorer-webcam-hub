import type { CameraCategory, NavItem } from "@/types"

export const SITE_NAME = "World Camera Explorer"
export const SITE_DESCRIPTION =
  "Explore thousands of public webcams from around the world on an interactive map."
export const SITE_URL = "https://worldcameraexplorer.com"

export const NAV_ITEMS: NavItem[] = [
  { title: "Explore", href: "/map" },
  { title: "Countries", href: "/countries" },
  { title: "Categories", href: "/categories" },
  { title: "Trending", href: "/trending" },
]

export const CATEGORIES: { label: string; value: CameraCategory; icon: string }[] = [
  { label: "Traffic", value: "traffic", icon: "Car" },
  { label: "Airport", value: "airport", icon: "Plane" },
  { label: "Beach", value: "beach", icon: "Waves" },
  { label: "Mountain", value: "mountain", icon: "Mountain" },
  { label: "Zoo", value: "zoo", icon: "PawPrint" },
  { label: "Nature", value: "nature", icon: "TreePine" },
  { label: "Weather", value: "weather", icon: "CloudSun" },
  { label: "Port", value: "port", icon: "Ship" },
  { label: "Railway", value: "railway", icon: "TrainFront" },
  { label: "City", value: "city", icon: "Building2" },
  { label: "Animal", value: "animal", icon: "Bird" },
  { label: "Wildlife", value: "wildlife", icon: "Squirrel" },
  { label: "Forest", value: "forest", icon: "Trees" },
  { label: "National Park", value: "national-park", icon: "Landmark" },
]

export const STATS = [
  { label: "Live Cameras", value: "12,500+" },
  { label: "Countries", value: "190+" },
  { label: "Cities", value: "5,000+" },
  { label: "Daily Views", value: "1M+" },
]

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const
