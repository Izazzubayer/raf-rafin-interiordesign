'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFilterStore, SortOption, ViewMode } from '@/lib/store'
import { ChevronDown, Grid3x3, LayoutGrid, Image as ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'area-desc', label: 'Largest Area' },
  { value: 'budget-desc', label: 'Highest Budget' },
  { value: 'a-z', label: 'A → Z' },
]

const viewModes: { value: ViewMode; label: string; icon: React.ReactNode }[] = [
  { value: 'grid', label: 'Grid View', icon: <Grid3x3 className="w-4 h-4" /> },
  { value: 'masonry', label: 'Masonry View', icon: <LayoutGrid className="w-4 h-4" /> },
  { value: 'large', label: 'Large Photo View', icon: <ImageIcon className="w-4 h-4" /> },
]

export default function SortAndViewControls() {
  const { sortBy, viewMode, setSortBy, setViewMode } = useFilterStore()
  const [isSortOpen, setIsSortOpen] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentSortLabel = sortOptions.find((opt) => opt.value === sortBy)?.label || 'Newest First'

  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      {/* View Toggle */}
      <div className="flex items-center gap-2 bg-white rounded-sm p-1 shadow-sm">
        {viewModes.map((mode) => (
          <button
            key={mode.value}
            onClick={() => setViewMode(mode.value)}
            className={cn(
              'p-2 rounded-sm transition-all duration-300',
              viewMode === mode.value
                ? 'bg-gold text-white'
                : 'text-neutral-600 hover:text-slate hover:bg-neutral-100'
            )}
            aria-label={mode.label}
            title={mode.label}
          >
            {mode.icon}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div ref={sortRef} className="relative">
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="flex items-center space-x-2 px-4 py-2 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow text-sm font-medium text-slate"
        >
          <span>Sort: {currentSortLabel}</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-300',
              isSortOpen && 'rotate-180'
            )}
          />
        </button>

        <AnimatePresence>
          {isSortOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-sm shadow-lg border border-neutral-200 z-50 overflow-hidden"
            >
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value)
                    setIsSortOpen(false)
                  }}
                  className={cn(
                    'w-full text-left px-4 py-3 text-sm transition-colors duration-200',
                    sortBy === option.value
                      ? 'bg-gold/10 text-gold font-medium'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

