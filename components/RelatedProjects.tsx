'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data'
import { formatBudget } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface RelatedProjectsProps {
  currentProject: Project
  allProjects: Project[]
}

export default function RelatedProjects({ currentProject, allProjects }: RelatedProjectsProps) {
  // Find related projects based on style, city, or project type
  const relatedProjects = allProjects
    .filter(
      (p) =>
        p.id !== currentProject.id &&
        (p.style === currentProject.style ||
          p.city === currentProject.city ||
          p.projectType === currentProject.projectType)
    )
    .slice(0, 3)

  if (relatedProjects.length === 0) return null

  return (
    <section className="section-spacing bg-cream">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-3 text-slate-dark mb-4">Related Projects</h2>
          <p className="body-text text-lg text-neutral-700 mb-12 max-w-2xl">
            Explore more projects that share similar design philosophy or characteristics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full"
                    >
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-neutral-600">
                      <span className="font-medium text-gold">{project.city}</span>
                      <span>{formatBudget(project.budget)}</span>
                    </div>
                    <h3 className="text-xl font-serif text-slate-dark group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-700 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-sm text-gold group-hover:gap-2 transition-all">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

