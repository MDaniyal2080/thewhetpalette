import { cn } from '@/lib/utils'

export function CategoryPill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-full border border-brand-300/50 bg-brand-50 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-brand-800 dark:border-brand-700/40 dark:bg-brand-900/20 dark:text-brand-300', className)}>
      {children}
    </span>
  )
}
