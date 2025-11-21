'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data'
import { formatBudget } from '@/lib/utils'
import { ArrowRight, Eye, MapPin, DollarSign, Calendar, Ruler } from 'lucide-react'

interface PortfolioCardProps {
  project: Project
  index: number
  viewMode?: 'grid' | 'masonry' | 'large'
}

export default function PortfolioCard({ project, index, viewMode = 'grid' }: PortfolioCardProps) {
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

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700 border border-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-neutral-600" />
              {project.city}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700 border border-neutral-300">
              <DollarSign className="w-3.5 h-3.5 text-neutral-600" />
              {formatBudget(project.budget)}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700 border border-neutral-300">
              <Calendar className="w-3.5 h-3.5 text-neutral-600" />
              {project.year}
            </span>
          </div>

          <h3 className="text-xl font-serif text-slate-dark group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-700 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Ruler className="w-3.5 h-3.5" />
            <span>{project.area}</span>
          </div>

          <div className="flex items-center text-gold text-sm font-medium group-hover:gap-2 transition-all duration-300 pt-1">
            <Link href={`/portfolio/${project.slug}`} className="flex items-center gap-2">
              <span>View Project</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </motion.div>

    </>
  )
}
