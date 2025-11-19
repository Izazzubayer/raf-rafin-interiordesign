'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFilterStore } from '@/lib/store'
import { cities, budgetRanges, spaces, styles, projectTypes } from '@/lib/data'
import { cn } from '@/lib/utils'
import { X, Filter } from 'lucide-react'

export default function FilterSidebar() {
  const {
    selectedCities,
    selectedBudgets,
    selectedSpaces,
    selectedStyles,
    selectedProjectTypes,
    toggleCity,
    toggleBudget,
    toggleSpace,
    toggleStyle,
    toggleProjectType,
    resetFilters,
  } = useFilterStore()

  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const hasActiveFilters =
    selectedCities.length > 0 ||
    selectedBudgets.length > 0 ||
    selectedSpaces.length > 0 ||
    selectedStyles.length > 0 ||
    selectedProjectTypes.length > 0

  const FilterCheckbox = ({
    label,
    isSelected,
    onToggle,
  }: {
    label: string
    isSelected: boolean
    onToggle: () => void
  }) => (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
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
        {label}
      </span>
    </label>
  )

  const FilterSection = ({
    title,
    items,
    selectedItems,
    onToggle,
  }: {
    title: string
    items: string[] | { value: string; label: string }[]
    selectedItems: string[]
    onToggle: (value: string) => void
  }) => (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-neutral-700 mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item) => {
          const value = typeof item === 'string' ? item : item.value
          const label = typeof item === 'string' ? item : item.label
          const isSelected = selectedItems.includes(value)
          return (
            <FilterCheckbox
              key={value}
              label={label}
              isSelected={isSelected}
              onToggle={() => onToggle(value)}
            />
          )
        })}
      </div>
    </div>
  )

  const sidebarContent = (
    <div className="bg-white rounded-sm p-6 md:p-8 shadow-sm h-fit">
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

      <FilterSection
        title="By City"
        items={cities}
        selectedItems={selectedCities}
        onToggle={toggleCity}
      />

      <FilterSection
        title="By Budget"
        items={budgetRanges}
        selectedItems={selectedBudgets}
        onToggle={toggleBudget}
      />

      <FilterSection
        title="By Space"
        items={spaces}
        selectedItems={selectedSpaces}
        onToggle={toggleSpace}
      />

      <FilterSection
        title="By Style"
        items={styles}
        selectedItems={selectedStyles}
        onToggle={toggleStyle}
      />

      <FilterSection
        title="By Project Type"
        items={projectTypes}
        selectedItems={selectedProjectTypes}
        onToggle={toggleProjectType}
      />

      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 pt-6 border-t border-neutral-200"
        >
          <p className="text-sm text-neutral-600">
            <span className="font-medium text-gold">
              {selectedCities.length +
                selectedBudgets.length +
                selectedSpaces.length +
                selectedStyles.length +
                selectedProjectTypes.length}
            </span>{' '}
            {selectedCities.length +
              selectedBudgets.length +
              selectedSpaces.length +
              selectedStyles.length +
              selectedProjectTypes.length ===
            1
              ? 'filter'
              : 'filters'}{' '}
            active
          </p>
        </motion.div>
      )}
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block sticky top-28">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {sidebarContent}
        </motion.div>
      </aside>

      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-slate">Filters</span>
            {hasActiveFilters && (
              <span className="px-2 py-0.5 bg-gold text-white text-xs rounded-full">
                {selectedCities.length +
                  selectedBudgets.length +
                  selectedSpaces.length +
                  selectedStyles.length +
                  selectedProjectTypes.length}
              </span>
            )}
          </div>
          <span className="text-sm text-neutral-600">Tap to filter</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between z-10">
                <h2 className="text-lg font-serif text-slate">Filters</h2>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-5 h-5 text-slate" />
                </button>
              </div>
              <div className="p-6">{sidebarContent}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
