import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200/60 bg-white/70 dark:border-neutral-800/60 dark:bg-neutral-950/70">
      <div className="container grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="mb-3 font-display text-xl">The Whet Palette</div>
          <p className="muted max-w-md">Food, wine, travel, and lifestyle stories crafted with taste and intention.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-2 font-medium">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#latest">Latest</Link></li>
              <li><Link href="/#restaurants">Restaurants</Link></li>
              <li><Link href="/#wine">Wine</Link></li>
              <li><Link href="/#travel">Travel</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 font-medium">Follow</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" aria-label="Instagram">Instagram</a></li>
              <li><a href="#" aria-label="YouTube">YouTube</a></li>
              <li><a href="#" aria-label="Podcast">Podcast</a></li>
            </ul>
          </div>
        </div>
        <div id="subscribe" className="lg:justify-self-end">
          <div className="mb-2 font-medium">Subscribe</div>
          <p className="muted mb-3 max-w-sm">Get the monthly newsletter and new posts directly in your inbox.</p>
          <form className="flex max-w-md gap-2">
            <input type="email" placeholder="Email address" className="flex-1 rounded-[var(--radius)] border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-brand-400 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900" />
            <button type="submit" className="rounded-[var(--radius)] bg-brand-600 px-4 text-sm font-medium text-white hover:bg-brand-500">Subscribe</button>
          </form>
          <p className="mt-2 text-xs text-neutral-500">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-neutral-200/60 py-6 text-center text-xs text-neutral-500 dark:border-neutral-800/60">© {new Date().getFullYear()} The Whet Palette. All rights reserved.</div>
    </footer>
  )
}
