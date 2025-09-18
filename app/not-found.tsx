import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-section text-center">
      <h1 className="mb-2 font-display text-4xl">Page not found</h1>
      <p className="muted mb-6">The page you’re looking for doesn’t exist or was moved.</p>
      <Link href="/" className="rounded-[var(--radius)] bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">Back to home</Link>
    </div>
  )
}
