/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'picsum.photos' }
    ]
  },
  // No experimental features enabled
  eslint: {
    // Avoid blocking production builds due to lint errors; Vercel should not fail build for style issues
    ignoreDuringBuilds: true,
  }
}

export default nextConfig
