import Image from 'next/image'
import Link from 'next/link'
import { cn, formatDate } from '@/lib/utils'
import { CategoryPill } from '@/components/category-pill'

export type Article = {
  slug: string
  title: string
  excerpt: string
  image: string
  alt?: string
  category: string
  date: string
  author?: string
}

export function ArticleCard({ article, className }: { article: Article; className?: string }) {
  return (
    <article className={cn('group grid overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-soft dark:border-neutral-800 dark:bg-neutral-950', className)}>
      <Link href={`/posts/${article.slug}`} className="relative aspect-[16/9] overflow-hidden">
        <Image src={article.image} alt={article.alt ?? article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
      </Link>
      <div className="grid gap-3 p-4">
        <CategoryPill>{article.category}</CategoryPill>
        <Link href={`/posts/${article.slug}`} className="line-clamp-2 font-display text-lg leading-snug">
          {article.title}
        </Link>
        <p className="muted line-clamp-3 text-sm">{article.excerpt}</p>
        <div className="mt-1 text-xs text-neutral-500">{formatDate(article.date)}{article.author ? ` — ${article.author}` : ''}</div>
      </div>
    </article>
  )
}
