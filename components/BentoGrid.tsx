'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data'

interface BentoGridProps {
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

export default function BentoGrid({ projects, featured = false }: BentoGridProps) {
  const displayProjects = featured ? projects.slice(0, 6) : projects

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {displayProjects.map((project, index) => {
        // Create varied grid layouts
        const isLarge = featured && (index === 0 || index === 4)
        const gridSpan = isLarge ? 'md:col-span-2 md:row-span-2' : ''

        return (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className={`group relative overflow-hidden rounded-sm ${gridSpan} aspect-[4/3] ${
              isLarge ? 'md:aspect-[2/1]' : ''
            }`}
          >
            <Link href={`/portfolio/${project.slug}`} className="block h-full">
              {/* Image */}
              <div className="relative h-full overflow-hidden">
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

                {/* Gradient Overlay */}
                <div className="image-overlay-dark opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-xs uppercase tracking-widest text-gold font-medium">
                        {project.city}
                      </span>
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      <span className="text-xs text-neutral-300">{project.year}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                    <div className="flex items-center text-gold text-sm font-medium">
                      <span className="group-hover:mr-2 transition-all duration-300">View Project</span>
                      <motion.svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </motion.svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

