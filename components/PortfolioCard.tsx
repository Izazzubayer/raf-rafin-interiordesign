'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data'
import { formatBudget } from '@/lib/utils'
import { ArrowRight, Eye } from 'lucide-react'
import QuickViewModal from './QuickViewModal'

interface PortfolioCardProps {
  project: Project
  index: number
  viewMode?: 'grid' | 'masonry' | 'large'
}

export default function PortfolioCard({ project, index, viewMode = 'grid' }: PortfolioCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsQuickViewOpen(true)
  }

  const cardClasses = {
    grid: 'grid-cols-1',
    masonry: 'grid-cols-1',
    large: 'grid-cols-1',
  }

  const imageAspect = {
    grid: 'aspect-[4/3]',
    masonry: 'aspect-[3/4]',
    large: 'aspect-[16/10]',
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group"
      >
        <div className="relative overflow-hidden rounded-sm mb-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${imageAspect[viewMode]} overflow-hidden`}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Action Buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button
                onClick={handleQuickView}
                className="px-4 py-2 bg-white/95 backdrop-blur-sm text-slate rounded-sm hover:bg-white transition-colors inline-flex items-center text-sm font-medium"
              >
                <Eye className="w-4 h-4 mr-2" />
                Quick View
              </button>
              <Link
                href={`/portfolio/${project.slug}`}
                className="px-4 py-2 bg-gold text-white rounded-sm hover:bg-gold-dark transition-colors inline-flex items-center text-sm font-medium"
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Card Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <span className="font-medium text-gold">{project.city}</span>
            <span>{formatBudget(project.budget)}</span>
          </div>
          <h3 className="text-xl font-serif text-slate-dark group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-700 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center space-x-3 text-sm text-neutral-600">
            <span>{project.area}</span>
            <span>•</span>
            <span>{project.year}</span>
            {project.style && (
              <>
                <span>•</span>
                <span className="text-gold">{project.style}</span>
              </>
            )}
          </div>
        </div>
      </motion.div>

      <QuickViewModal
        project={project}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  )
}

