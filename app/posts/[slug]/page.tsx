import { notFound } from 'next/navigation'
import Image from 'next/image'
import { posts, getPost } from '@/content/posts'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
    },
  }
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <article className="prose prose-neutral mx-auto max-w-3xl px-4 py-10 dark:prose-invert md:py-14">
      <div className="mb-6 text-xs uppercase tracking-wider text-brand-700 dark:text-brand-400">{post!.category}</div>
      <h1 className="mb-2 font-display text-4xl leading-tight md:text-5xl">{post!.title}</h1>
      <div className="muted mb-8">{formatDate(post!.date)}{post!.author ? ` — ${post!.author}` : ''}</div>
      <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <Image src={post!.image} alt={post!.alt ?? post!.title} fill className="object-cover" />
      </div>
      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          This is a sample article page. Replace this content with your MDX or CMS data. Share rich stories about food, wine, and travel with photography, pull-quotes, and helpful guides.
        </p>
        <p>
          Build a premium experience by pairing elegant typography with thoughtful layout and interactive elements like maps and embedded audio for podcast episodes.
        </p>
      </div>
    </article>
  )
}
