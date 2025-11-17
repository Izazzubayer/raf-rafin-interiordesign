'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form data:', data)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="max-w-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
            className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300 resize-none"
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary w-full md:w-auto inline-flex items-center"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </motion.button>
        </motion.div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-sm"
          >
            <p className="text-green-800 text-sm">
              Thank you for your message! We&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}
      </form>

      {/* Alternative Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 pt-8 border-t border-neutral-200"
      >
        <p className="text-sm text-neutral-600 mb-4">
          Prefer to email directly?
        </p>
        <a
          href="mailto:hello@umbrellainteriors.com"
          className="text-gold hover:text-gold-dark font-medium transition-colors duration-300"
        >
          hello@umbrellainteriors.com
        </a>
      </motion.div>
    </div>
  )
}

