'use client'

import { useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import FilterSidebar from '@/components/FilterSidebar'
import PortfolioCard from '@/components/PortfolioCard'
import { projects } from '@/lib/data'
import { useFilterStore } from '@/lib/store'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PortfolioPage() {
  const { selectedCities, selectedBudgets } = useFilterStore()
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

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const cityMatch =
        selectedCities.length === 0 || selectedCities.includes(project.city)
      const budgetMatch =
        selectedBudgets.length === 0 || selectedBudgets.includes(project.budget)
      return cityMatch && budgetMatch
    })
  }, [selectedCities, selectedBudgets])

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="container-width section-padding">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 text-slate mb-4">Our Portfolio</h1>
            <p className="body-text text-lg max-w-3xl">
              Explore our collection of residential interior design projects across Dhaka. Each space tells a unique story of transformation, crafted with precision and care.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-neutral-600">
                <span className="font-medium text-slate">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'} found
              </p>
            </div>

            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div
                  key="projects-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {filteredProjects.map((project, index) => (
                    <PortfolioCard key={project.id} project={project} index={index} />
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
                    className="w-16 h-16 text-neutral-300 mx-auto mb-4"
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
                  <h3 className="text-xl font-serif text-slate mb-2">No projects found</h3>
                  <p className="text-neutral-600 mb-6">
                    Try adjusting your filters to see more results
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

