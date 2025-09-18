"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation, useMotionValue, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Article } from './article-card'

export function FeaturedCarousel({ items }: { items: Article[] }) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0])
  const next = () => setIndex(([i]) => [(i + 1) % items.length, 1])
  const prev = () => setIndex(([i]) => [(i - 1 + items.length) % items.length, -1])

  useEffect(() => {
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft dark:border-neutral-800 dark:bg-neutral-950">
      <div className="relative aspect-[21/9] w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="absolute inset-0"
          >
            <Image
              src={items[index].image}
              alt={items[index].alt ?? items[index].title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="mb-2 text-xs uppercase tracking-wider text-brand-300">{items[index].category}</div>
              <Link href={`/posts/${items[index].slug}`} className="headline-hero text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                {items[index].title}
              </Link>
              <p className="mt-3 max-w-3xl text-neutral-200">{items[index].excerpt}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
        <button onClick={prev} className="pointer-events-auto rounded-full bg-white/80 p-2 shadow hover:bg-white dark:bg-neutral-900/80 dark:hover:bg-neutral-900" aria-label="Previous">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={next} className="pointer-events-auto rounded-full bg-white/80 p-2 shadow hover:bg-white dark:bg-neutral-900/80 dark:hover:bg-neutral-900" aria-label="Next">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
