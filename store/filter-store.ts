import { create } from "zustand"
import type { CameraCategory, CameraStatus, FilterState, SortOption } from "@/types"

interface FilterActions {
  setCountry: (countries: string[]) => void
  setCity: (cities: string[]) => void
  setCategory: (categories: CameraCategory[]) => void
  setProvider: (providers: string[]) => void
  setStatus: (status: CameraStatus[]) => void
  setIsLive: (isLive: boolean | null) => void
  setIsVerified: (isVerified: boolean | null) => void
  setSortBy: (sortBy: SortOption) => void
  resetFilters: () => void
}

const initialState: FilterState = {
  country: [],
  city: [],
  category: [],
  provider: [],
  status: [],
  isLive: null,
  isVerified: null,
  sortBy: "popular",
}

export const useFilterStore = create<FilterState & FilterActions>((set) => ({
  ...initialState,
  setCountry: (country) => set({ country }),
  setCity: (city) => set({ city }),
  setCategory: (category) => set({ category }),
  setProvider: (provider) => set({ provider }),
  setStatus: (status) => set({ status }),
  setIsLive: (isLive) => set({ isLive }),
  setIsVerified: (isVerified) => set({ isVerified }),
  setSortBy: (sortBy) => set({ sortBy }),
  resetFilters: () => set(initialState),
}))
