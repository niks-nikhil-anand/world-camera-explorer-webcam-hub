import { create } from "zustand"

interface SearchState {
  query: string
  recentSearches: string[]
  isOpen: boolean
  setQuery: (query: string) => void
  addRecentSearch: (query: string) => void
  clearRecentSearches: () => void
  setIsOpen: (isOpen: boolean) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  recentSearches: [],
  isOpen: false,
  setQuery: (query) => set({ query }),
  addRecentSearch: (query) =>
    set((state) => ({
      recentSearches: [
        query,
        ...state.recentSearches.filter((s) => s !== query),
      ].slice(0, 10),
    })),
  clearRecentSearches: () => set({ recentSearches: [] }),
  setIsOpen: (isOpen) => set({ isOpen }),
}))
