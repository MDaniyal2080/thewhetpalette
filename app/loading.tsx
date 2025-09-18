export default function Loading() {
  return (
    <div className="container-section">
      <div className="mx-auto grid max-w-3xl gap-4">
        <div className="h-8 w-2/3 animate-pulse rounded-lg bg-neutral-200/70 dark:bg-neutral-800/70" />
        <div className="h-4 w-1/2 animate-pulse rounded-lg bg-neutral-200/70 dark:bg-neutral-800/70" />
        <div className="h-64 animate-pulse rounded-2xl bg-neutral-200/70 dark:bg-neutral-800/70" />
      </div>
    </div>
  )
}
