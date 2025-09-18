import { clsx } from 'clsx'

export function cn(...inputs: any[]) {
  return clsx(inputs)
}

export function formatDate(date: string | Date) {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
