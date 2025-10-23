import { create } from 'zustand'

interface FilterState {
  selectedCities: string[]
  selectedBudgets: string[]
  toggleCity: (city: string) => void
  toggleBudget: (budget: string) => void
  resetFilters: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedCities: [],
  selectedBudgets: [],
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
  resetFilters: () => set({ selectedCities: [], selectedBudgets: [] }),
}))

