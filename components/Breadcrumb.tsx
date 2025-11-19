'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn('flex items-center space-x-2 text-sm', className)} aria-label="Breadcrumb">
      <Link
        href="/"
        className="text-neutral-600 hover:text-gold transition-colors duration-300 flex items-center"
      >
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-neutral-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-neutral-600 hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-dark font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

