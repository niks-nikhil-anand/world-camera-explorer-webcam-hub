export interface Camera {
  id: string
  name: string
  slug: string
  country: string
  state: string
  city: string
  latitude: number
  longitude: number
  category: CameraCategory
  provider: string
  streamUrl: string
  thumbnail: string
  status: CameraStatus
  viewCount: number
  rating: number
  isLive: boolean
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

export type CameraStatus = "online" | "offline" | "unknown"

export type CameraCategory =
  | "traffic"
  | "airport"
  | "beach"
  | "mountain"
  | "zoo"
  | "nature"
  | "weather"
  | "port"
  | "railway"
  | "city"
  | "animal"
  | "wildlife"
  | "forest"
  | "national-park"

export interface Country {
  id: string
  name: string
  iso: string
  flag: string
  cameraCount: number
}

export interface City {
  id: string
  name: string
  country: string
  cameraCount: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: string
}

export interface SearchResult {
  cameras: Camera[]
  total: number
  page: number
  pageSize: number
}

export interface PaginationParams {
  page: number
  pageSize: number
}

export interface FilterState {
  country: string[]
  city: string[]
  category: CameraCategory[]
  provider: string[]
  status: CameraStatus[]
  isLive: boolean | null
  isVerified: boolean | null
  sortBy: SortOption
}

export type SortOption =
  | "popular"
  | "newest"
  | "name-asc"
  | "name-desc"
  | "rating"
  | "views"

export interface NavItem {
  title: string
  href: string
  icon?: string
  badge?: string
}
