'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'
import { Project } from '@/lib/data'
import { formatBudget } from '@/lib/utils'

interface QuickViewModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function QuickViewModal({ project, isOpen, onClose }: QuickViewModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-neutral-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-slate" />
              </button>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Images */}
                <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px]">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {project.gallery.length > 1 && (
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto">
                      {project.gallery.slice(0, 3).map((img, idx) => (
                        <div key={idx} className="relative w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden border-2 border-white">
                          <Image
                            src={img}
                            alt={`${project.title} preview ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-8 md:p-12 flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4 text-sm text-neutral-600">
                      <span className="font-medium text-gold">{project.city}</span>
                      <span>•</span>
                      <span>{formatBudget(project.budget)}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <h2 className="text-3xl font-serif text-slate-dark mb-4">{project.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-neutral-600 mb-6">
                      <span>{project.area}</span>
                      {project.style && (
                        <>
                          <span>•</span>
                          <span>{project.style}</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-neutral-200">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      onClick={onClose}
                      className="btn-primary inline-flex items-center group w-full justify-center"
                    >
                      <span>View Full Project</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

