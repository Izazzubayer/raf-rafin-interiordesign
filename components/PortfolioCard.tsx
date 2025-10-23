'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data'
import { formatBudget } from '@/lib/utils'

interface PortfolioCardProps {
  project: Project
  index: number
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* View Details Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.div
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
              className="btn-primary"
            >
              View Details →
            </motion.div>
          </div>
        </div>

        {/* Card Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <span className="font-medium text-gold">{project.city}</span>
            <span>{formatBudget(project.budget)}</span>
          </div>
          <h3 className="text-xl font-serif text-slate group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-600 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center space-x-3 text-xs text-neutral-500">
            <span>{project.area}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

