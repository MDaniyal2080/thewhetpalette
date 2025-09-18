"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Posts', href: '/#latest' },
  { label: 'Restaurants', href: '/#restaurants' },
  { label: 'Podcast', href: '/#podcast' },
  { label: 'Wine', href: '/#wine' },
  { label: 'Travel', href: '/#travel' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className={
      `sticky top-0 z-50 border-b backdrop-blur-md ${
        open
          ? 'border-neutral-800/60 bg-neutral-950 text-neutral-100'
          : 'border-neutral-200/60 bg-white/80 dark:border-neutral-800/60 dark:bg-neutral-950/70'
      }`
    }>
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-7 w-7 rounded-full bg-brand-600 text-white grid place-items-center font-bold">WP</span>
            <span className="font-display text-lg tracking-tight">The Whet Palette</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => {
            if (item.href === '/') {
              return (
                <Link key={item.href} href="/" className="text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
                  {item.label}
                </Link>
              )
            }
            if (item.href.includes('#')) {
              return (
                <a key={item.href} href={item.href} className="text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
                  {item.label}
                </a>
              )
            }
            return (
              <Link key={item.href} href={item.href as any} className="text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#subscribe" className="hidden sm:inline-flex">
            <Button variant="brand">Subscribe</Button>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-neutral-950 p-6 text-neutral-100 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <Link href="/" className="font-display text-xl text-white" onClick={() => setOpen(false)}>
                The Whet Palette
              </Link>
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-6 w-6 text-neutral-200" />
              </button>
            </div>
            <nav className="grid gap-4">
              {nav.map((item) => (
                item.href === '/' ? (
                  <Link key={item.href} href="/" className="text-base text-neutral-100 hover:text-white" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.href} href={item.href} className="text-base text-neutral-100 hover:text-white" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                )
              ))}
              <a href="#subscribe" className="mt-2" onClick={() => setOpen(false)}>
                <Button variant="brand">Subscribe</Button>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
