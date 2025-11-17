'use client'

import { motion } from 'framer-motion'
import { useFilterStore } from '@/lib/store'
import { cities, budgetRanges } from '@/lib/data'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export default function FilterSidebar() {
  const { selectedCities, selectedBudgets, toggleCity, toggleBudget, resetFilters } = useFilterStore()

  const hasActiveFilters = selectedCities.length > 0 || selectedBudgets.length > 0

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-sm p-6 md:p-8 shadow-sm sticky top-28 h-fit"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif text-slate">Filter Projects</h2>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-sm text-gold hover:text-gold-dark transition-colors duration-300 inline-flex items-center space-x-1"
          >
            <X className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* City Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-neutral-700 mb-4 uppercase tracking-wider">
          By City
        </h3>
        <div className="space-y-3">
          {cities.map((city) => {
            const isSelected = selectedCities.includes(city)
            return (
              <label
                key={city}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleCity(city)}
                    className="sr-only peer"
                  />
                  <div
                    className={cn(
                      'w-5 h-5 border-2 rounded transition-all duration-300',
                      isSelected
                        ? 'bg-gold border-gold'
                        : 'border-neutral-300 group-hover:border-gold'
                    )}
                  >
                    {isSelected && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-full h-full text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    )}
                  </div>
                </div>
                <span
                  className={cn(
                    'text-sm transition-colors duration-300',
                    isSelected
                      ? 'text-slate font-medium'
                      : 'text-neutral-600 group-hover:text-slate'
                  )}
                >
                  {city}
                </span>
              </label>
            )
          })}
        </div>
      </div>

      {/* Budget Filter */}
      <div>
        <h3 className="text-sm font-medium text-neutral-700 mb-4 uppercase tracking-wider">
          By Budget
        </h3>
        <div className="space-y-3">
          {budgetRanges.map((range) => {
            const isSelected = selectedBudgets.includes(range.value)
            return (
              <label
                key={range.value}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleBudget(range.value)}
                    className="sr-only peer"
                  />
                  <div
                    className={cn(
                      'w-5 h-5 border-2 rounded transition-all duration-300',
                      isSelected
                        ? 'bg-gold border-gold'
                        : 'border-neutral-300 group-hover:border-gold'
                    )}
                  >
                    {isSelected && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-full h-full text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    )}
                  </div>
                </div>
                <span
                  className={cn(
                    'text-sm transition-colors duration-300',
                    isSelected
                      ? 'text-slate font-medium'
                      : 'text-neutral-600 group-hover:text-slate'
                  )}
                >
                  {range.label}
                </span>
              </label>
            )
          })}
        </div>
      </div>

      {/* Active Filter Count */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 pt-6 border-t border-neutral-200"
        >
          <p className="text-sm text-neutral-600">
            <span className="font-medium text-gold">
              {selectedCities.length + selectedBudgets.length}
            </span>{' '}
            {selectedCities.length + selectedBudgets.length === 1 ? 'filter' : 'filters'} active
          </p>
        </motion.div>
      )}
    </motion.aside>
  )
}

