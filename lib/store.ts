import { create } from 'zustand'

export type SortOption = 'newest' | 'oldest' | 'area-desc' | 'budget-desc' | 'a-z'
export type ViewMode = 'grid' | 'masonry' | 'large'

interface FilterState {
  selectedCities: string[]
  selectedBudgets: string[]
  selectedSpaces: string[]
  selectedStyles: string[]
  selectedProjectTypes: string[]
  sortBy: SortOption
  viewMode: ViewMode
  toggleCity: (city: string) => void
  toggleBudget: (budget: string) => void
  toggleSpace: (space: string) => void
  toggleStyle: (style: string) => void
  toggleProjectType: (type: string) => void
  setSortBy: (sort: SortOption) => void
  setViewMode: (mode: ViewMode) => void
  resetFilters: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedCities: [],
  selectedBudgets: [],
  selectedSpaces: [],
  selectedStyles: [],
  selectedProjectTypes: [],
  sortBy: 'newest',
  viewMode: 'grid',
  toggleCity: (city) =>
    set((state) => ({
      selectedCities: state.selectedCities.includes(city)
        ? state.selectedCities.filter((c) => c !== city)
        : [...state.selectedCities, city],
    })),
  toggleBudget: (budget) =>
    set((state) => ({
      selectedBudgets: state.selectedBudgets.includes(budget)
        ? state.selectedBudgets.filter((b) => b !== budget)
        : [...state.selectedBudgets, budget],
    })),
  toggleSpace: (space) =>
    set((state) => ({
      selectedSpaces: state.selectedSpaces.includes(space)
        ? state.selectedSpaces.filter((s) => s !== space)
        : [...state.selectedSpaces, space],
    })),
  toggleStyle: (style) =>
    set((state) => ({
      selectedStyles: state.selectedStyles.includes(style)
        ? state.selectedStyles.filter((s) => s !== style)
        : [...state.selectedStyles, style],
    })),
  toggleProjectType: (type) =>
    set((state) => ({
      selectedProjectTypes: state.selectedProjectTypes.includes(type)
        ? state.selectedProjectTypes.filter((t) => t !== type)
        : [...state.selectedProjectTypes, type],
    })),
  setSortBy: (sort) => set({ sortBy: sort }),
  setViewMode: (mode) => set({ viewMode: mode }),
  resetFilters: () =>
    set({
      selectedCities: [],
      selectedBudgets: [],
      selectedSpaces: [],
      selectedStyles: [],
      selectedProjectTypes: [],
    }),
}))

