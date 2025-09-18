import type { MetadataRoute } from 'next'
import { posts } from '@/content/posts'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
  ]
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/posts/${p.slug}`,
    lastModified: new Date(p.date),
  }))
  return [...staticRoutes, ...postRoutes]
}
