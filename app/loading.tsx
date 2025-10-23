'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="text-slate font-medium">Loading...</p>
      </motion.div>
    </div>
  )
}

