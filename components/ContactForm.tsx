'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  location: string
  budget: string
  timeline: string
  style: string
  message: string
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const selectBase =
    'select-arrow w-full px-4 py-3 border border-neutral-300 rounded-sm bg-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300 appearance-none pr-12 bg-no-repeat bg-[length:14px_14px]'

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

        {/* Phone Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              required: 'Phone is required',
              minLength: { value: 8, message: 'Please enter a valid phone number' },
            })}
            className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
            placeholder="+8801XXXXXXXXX"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
              Project Type *
            </label>
            <select
              id="projectType"
              {...register('projectType', { required: 'Project type is required' })}
              className={selectBase}
              defaultValue=""
            >
              <option value="" disabled>Select an option</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="hospitality">Hospitality</option>
              <option value="office">Office</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>
            {errors.projectType && (
              <p className="mt-2 text-sm text-red-600">{errors.projectType.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
              Project Location *
            </label>
            <input
              type="text"
              id="location"
              {...register('location', { required: 'Location is required' })}
              className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
              placeholder="Neighborhood / City"
            />
            {errors.location && (
              <p className="mt-2 text-sm text-red-600">{errors.location.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
              Budget Range *
            </label>
            <select
              id="budget"
              {...register('budget', { required: 'Budget range is required' })}
              className={selectBase}
              defaultValue=""
            >
              <option value="" disabled>Select budget</option>
              <option value="below-5l">Below ৳5 Lakh</option>
              <option value="5l-10l">৳5-10 Lakh</option>
              <option value="10l-20l">৳10-20 Lakh</option>
              <option value="20l-plus">৳20 Lakh+</option>
            </select>
            {errors.budget && (
              <p className="mt-2 text-sm text-red-600">{errors.budget.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-2">
              Desired Timeline *
            </label>
            <select
              id="timeline"
              {...register('timeline', { required: 'Timeline is required' })}
              className={selectBase}
              defaultValue=""
            >
              <option value="" disabled>Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-3mo">1-3 months</option>
              <option value="3-6mo">3-6 months</option>
              <option value="6-12mo">6-12 months</option>
              <option value="12plus">12+ months</option>
            </select>
            {errors.timeline && (
              <p className="mt-2 text-sm text-red-600">{errors.timeline.message}</p>
            )}
          </motion.div>
        </div>

        {/* Style Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <label htmlFor="style" className="block text-sm font-medium text-neutral-700 mb-2">
            Preferred Style (optional)
          </label>
          <select
            id="style"
            {...register('style')}
            className={selectBase}
            defaultValue=""
          >
            <option value="">Select style (optional)</option>
            <option value="modern">Modern</option>
            <option value="minimal">Minimal</option>
            <option value="contemporary">Contemporary</option>
            <option value="luxury">Luxury</option>
            <option value="traditional">Traditional</option>
            <option value="mixed">Mixed / Not sure</option>
          </select>
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
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
          transition={{ delay: 0.6 }}
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
