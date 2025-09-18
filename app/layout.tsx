import type { Metadata } from 'next'
import './globals.css'
import { Inter, Playfair_Display, Lora } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getSiteUrl } from '@/lib/site'

const baseUrl = getSiteUrl()

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const lora = Lora({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'The Whet Palette — Food. Wine. Travel. Life.',
    template: '%s — The Whet Palette',
  },
  description: 'A premium editorial website celebrating food, wine, travel, and lifestyle with beautifully crafted stories and guides.',
  openGraph: {
    title: 'The Whet Palette',
    description: 'Premium editorial site for food, wine, travel, and lifestyle.',
    type: 'website',
    url: baseUrl,
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'The Whet Palette',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Whet Palette',
    description: 'Premium editorial site for food, wine, travel, and lifestyle.',
    images: ['/og.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${lora.variable} font-sans`}>        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
