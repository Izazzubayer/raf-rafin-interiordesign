'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Search } from 'lucide-react'
import FilterSidebar from '@/components/FilterSidebar'
import PortfolioCard from '@/components/PortfolioCard'
import SortAndViewControls from '@/components/SortAndViewControls'
import Breadcrumb from '@/components/Breadcrumb'
import { projects } from '@/lib/data'
import { useFilterStore } from '@/lib/store'
import { parseArea, getBudgetValue } from '@/lib/utils'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ITEMS_PER_PAGE = 9

export default function PortfolioPage() {
  const {
    selectedCities,
    selectedBudgets,
    selectedSpaces,
    selectedStyles,
    selectedProjectTypes,
    sortBy,
    viewMode,
  } = useFilterStore()

  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const cityMatch =
        selectedCities.length === 0 || selectedCities.includes(project.city)
      const budgetMatch =
        selectedBudgets.length === 0 || selectedBudgets.includes(project.budget)
      const spaceMatch =
        selectedSpaces.length === 0 ||
        (project.space && project.space.some((s) => selectedSpaces.includes(s)))
      const styleMatch =
        selectedStyles.length === 0 ||
        (project.style && selectedStyles.includes(project.style))
      const typeMatch =
        selectedProjectTypes.length === 0 ||
        (project.projectType && selectedProjectTypes.includes(project.projectType))

      return cityMatch && budgetMatch && spaceMatch && styleMatch && typeMatch
    })

    // Sort projects
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.year - a.year || b.id - a.id
        case 'oldest':
          return a.year - b.year || a.id - b.id
        case 'area-desc':
          return parseArea(b.area) - parseArea(a.area)
        case 'budget-desc':
          return getBudgetValue(b.budget) - getBudgetValue(a.budget)
        case 'a-z':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [
    selectedCities,
    selectedBudgets,
    selectedSpaces,
    selectedStyles,
    selectedProjectTypes,
    sortBy,
  ])

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE)
  }, [selectedCities, selectedBudgets, selectedSpaces, selectedStyles, selectedProjectTypes, sortBy])

  const displayedProjects = filteredAndSortedProjects.slice(0, displayCount)
  const hasMore = filteredAndSortedProjects.length > displayCount

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredAndSortedProjects.length))
  }

  const getGridClasses = () => {
    switch (viewMode) {
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8'
      case 'large':
        return 'grid grid-cols-1 gap-8'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 gap-8'
    }
  }

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="container-width section-padding">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ label: 'Portfolio' }]}
          className="mb-8"
        />

        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 text-slate-dark mb-4">Our Portfolio</h1>
            <p className="body-text text-lg max-w-3xl text-neutral-800">
              Explore our collection of residential and commercial interior design projects across Dhaka. Each space tells a unique story of transformation, crafted with precision and care.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>

          {/* Projects Section */}
          <div className="lg:col-span-3">
            {/* Results Count & Controls */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-neutral-700">
                  <span className="font-medium text-slate-dark">{filteredAndSortedProjects.length}</span>{' '}
                  {filteredAndSortedProjects.length === 1 ? 'project' : 'projects'} found
                </p>
              </div>
              <SortAndViewControls />
            </div>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
              {displayedProjects.length > 0 ? (
                <motion.div
                  key={`${viewMode}-${sortBy}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={getGridClasses()}
                >
                  {displayedProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className={viewMode === 'masonry' ? 'break-inside-avoid mb-8' : ''}
                    >
                      <PortfolioCard
                        project={project}
                        index={index}
                        viewMode={viewMode}
                      />
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-20"
                >
                  <svg
                    className="w-20 h-20 text-neutral-300 mx-auto mb-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <h3 className="text-2xl font-serif text-slate-dark mb-3">No projects found</h3>
                  <p className="text-neutral-700 mb-6 max-w-md mx-auto">
                    Nothing matches your filters. Try adjusting them to see more results.
                  </p>
                  <button
                    onClick={() => {
                      useFilterStore.getState().resetFilters()
                    }}
                    className="btn-secondary inline-flex items-center"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More Button */}
            {hasMore && displayedProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 text-center"
              >
                <button
                  onClick={handleLoadMore}
                  className="btn-secondary inline-flex items-center"
                >
                  Load More Projects
                  <span className="ml-2 text-sm">
                    ({filteredAndSortedProjects.length - displayCount} remaining)
                  </span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
