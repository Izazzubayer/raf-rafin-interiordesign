import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBudget(budget: string): string {
  const budgetMap: { [key: string]: string } = {
    'below-5l': 'Below ৳5 Lakh',
    '5l-10l': '৳5-10 Lakh',
    '10l-20l': '৳10-20 Lakh',
    '20l+': '৳20 Lakh+',
  }
  return budgetMap[budget] || budget
}

