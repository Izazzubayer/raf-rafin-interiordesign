'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = '+8801626436389'
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`
  const messengerUrl = 'https://m.me/ra.fin.16'

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options - Positioned absolutely above the button */}
      <div className="absolute bottom-full right-0 mb-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2, type: 'spring', stiffness: 400, damping: 25 }}
              className="space-y-3"
            >
              {/* WhatsApp Button */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.05, duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span className="font-medium text-sm">WhatsApp</span>
              </motion.a>

              {/* Facebook Messenger Button */}
              <motion.a
                href={messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-[#0084FF] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Chat on Facebook Messenger"
              >
                <FaFacebookMessenger className="w-6 h-6" />
                <span className="font-medium text-sm">Messenger</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toggle Button - Always in fixed position */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 bg-gold text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
        aria-label={isOpen ? 'Close chat options' : 'Open chat options'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

