'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/lib/data'

interface MaterialPaletteProps {
  materials: Project['materials']
  description?: string
}

// Unsplash images for different material types
const materialImages: Record<string, string> = {
  wood: 'https://plus.unsplash.com/premium_photo-1671612828903-dc019accc402?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  fabric: 'https://plus.unsplash.com/premium_photo-1701157946903-57c2821d71b7?q=80&w=2429&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  stone: 'https://plus.unsplash.com/premium_photo-1674896186438-20c6bad8d0c9?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  metal: 'https://images.unsplash.com/photo-1638888077595-039e77b1dc70?q=80&w=2892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  paint: 'https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  tile: 'https://images.unsplash.com/photo-1580398562556-d33329a0f29b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  other: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
}

export default function MaterialPalette({ materials, description }: MaterialPaletteProps) {
  if (!materials || materials.length === 0) return null

  return (
    <section className="py-12 md:py-16 bg-white border-y border-neutral-200">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-6">
            <h2 className="heading-3 text-slate-dark mb-1 font-serif">Material Palette</h2>
            {description && (
              <p className="text-sm text-neutral-600 font-serif" style={{ fontSize: '14px' }}>
                {description}
              </p>
            )}
          </div>

          {/* Compact Grid View */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-sm bg-neutral-50 border border-neutral-200 hover:border-gold transition-all duration-300 hover:shadow-lg">
                  <Image
                    src={materialImages[material.type] || materialImages.other}
                    alt={material.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <h3 className="text-xs font-serif text-white font-medium mb-0.5">
                      {material.name}
                    </h3>
                    {material.color && (
                      <p className="text-[10px] text-white/80 leading-tight">
                        {material.color}
                      </p>
                    )}
                  </div>
                  {/* Bottom label - always visible */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-2 py-1.5">
                    <h3 className="text-[11px] font-serif text-slate-dark font-medium text-center truncate">
                      {material.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
