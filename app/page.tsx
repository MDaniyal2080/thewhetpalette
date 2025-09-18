import Link from 'next/link'
import { FeaturedCarousel } from '@/components/featured-carousel'
import { ArticleCard } from '@/components/article-card'
import { posts } from '@/content/posts'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const featured = posts.slice(0, 3)
  const latest = posts

  return (
    <>
      {/* Hero / Featured */}
      <section className="container-section">
        <FeaturedCarousel items={featured} />
      </section>

      {/* Latest grid */}
      <section id="latest" className="container-section">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl md:text-3xl">Latest</h2>
          <a href="#latest">
            <Button variant="outline">View all</Button>
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Restaurants / Wine / Travel teasers */}
      <section id="restaurants" className="container-section">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl md:text-3xl">Restaurants</h2>
          <a href="#restaurants"><Button variant="outline">Explore</Button></a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.slice(0,3).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section id="wine" className="container-section">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl md:text-3xl">Wine</h2>
          <a href="#wine"><Button variant="outline">Explore</Button></a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.slice(2,5).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section id="travel" className="container-section">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl md:text-3xl">Travel</h2>
          <a href="#travel"><Button variant="outline">Explore</Button></a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.slice(1,4).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container-section">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-brand-50 to-white p-8 shadow-soft dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950 md:p-12">
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-2 font-display text-3xl md:text-4xl">Tasteful stories, once a month</h2>
            <p className="subhead mb-6">Join thousands of readers who get our latest guides and interviews in their inbox.</p>
            <form className="flex max-w-md gap-2">
              <input type="email" placeholder="Email address" className="flex-1 rounded-[var(--radius)] border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-brand-400 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900" />
              <button type="submit" className="rounded-[var(--radius)] bg-neutral-900 px-4 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">Subscribe</button>
            </form>
          </div>
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-700/20" />
        </div>
      </section>
    </>
  )
}
