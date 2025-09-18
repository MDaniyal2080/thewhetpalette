export function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
  if (envUrl) {
    return envUrl.startsWith('http') ? envUrl : `https://${envUrl}`
  }
  // Fallback for local dev
  return 'http://localhost:3000'
}
