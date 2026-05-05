// ─── Blog Post Layout (Server Component) ─────────────────────────────────────
// Metadata is defined here because the page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tools for Google My Business Optimization in 2026 | RankPilot',
  description: 'The specific AI tools and workflows producing measurable results for local businesses optimizing their Google Business Profile.',
  openGraph: {
    title: 'AI Tools for Google My Business Optimization in 2026 | RankPilot',
    description: 'The specific AI tools and workflows producing measurable results for local businesses optimizing their Google Business Profile.',
  
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/gmb-optimization-blog-featured-HWK8g6sgB6DknKy6aKwnTQ.webp', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools for Google My Business Optimization in 2026 | RankPilot',
    description: 'The specific AI tools and workflows producing measurable results for local businesses optimizing their Google Business Profile.',
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/gmb-optimization-blog-featured-HWK8g6sgB6DknKy6aKwnTQ.webp'],
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
