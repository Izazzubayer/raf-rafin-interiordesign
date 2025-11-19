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

export function parseArea(area: string): number {
  const match = area.match(/[\d,]+/)
  if (match) {
    return parseInt(match[0].replace(/,/g, ''), 10)
  }
  return 0
}

export function getBudgetValue(budget: string): number {
  const budgetMap: { [key: string]: number } = {
    'below-5l': 2.5,
    '5l-10l': 7.5,
    '10l-20l': 15,
    '20l+': 25,
  }
  return budgetMap[budget] || 0
}

