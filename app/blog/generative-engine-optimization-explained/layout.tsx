// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) Explained | RankPilot',
  description: 'What GEO is, how it differs from traditional SEO, and the specific content signals that drive AI Overview citations.',
  openGraph: {
    title: 'Generative Engine Optimization (GEO) Explained | RankPilot',
    description: 'What GEO is, how it differs from traditional SEO, and the specific content signals that drive AI Overview citations.',
  
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/geo-blog-featured-5uXcEuVGzqtdSuKF3XnUMP.webp', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative Engine Optimization (GEO) Explained | RankPilot',
    description: 'What GEO is, how it differs from traditional SEO, and the specific content signals that drive AI Overview citations.',
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/geo-blog-featured-5uXcEuVGzqtdSuKF3XnUMP.webp'],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
