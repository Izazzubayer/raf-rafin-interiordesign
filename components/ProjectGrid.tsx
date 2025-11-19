'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data'
import { formatBudget } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface ProjectGridProps {
  projects: Project[]
  featured?: boolean
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ProjectGrid({ projects, featured = false }: ProjectGridProps) {
  const displayProjects = featured ? projects.slice(0, 6) : projects

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14"
    >
      {displayProjects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          className="group"
        >
          <Link href={`/portfolio/${project.slug}`} className="block">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-neutral-100">
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
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
            </div>

            {/* Content - Separate from image */}
            <div className="space-y-4">
              {/* Chips/Labels */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold/10 text-gold border border-gold/20">
                  {project.city}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate/10 text-slate border border-slate/20">
                  {formatBudget(project.budget)}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neutral-200 text-neutral-700">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-slate-dark group-hover:text-gold transition-colors duration-300 pt-1">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 pt-1">
                {project.description}
              </p>

              {/* View Project Link */}
              <div className="flex items-center text-gold text-sm font-medium group-hover:gap-2 transition-all duration-300 pt-2">
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

