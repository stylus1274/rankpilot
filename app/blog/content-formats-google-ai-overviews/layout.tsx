// ─── Blog Post Layout (Server Component) ─────────────────────────────────────
// Metadata is defined here because the page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Formats That Win Google AI Overviews | RankPilot',
  description: 'The specific content formats and structures that Google AI Overviews cite most frequently — and how to implement them.',
  openGraph: {
    title: 'Content Formats That Win Google AI Overviews | RankPilot',
    description: 'The specific content formats and structures that Google AI Overviews cite most frequently — and how to implement them.',
  
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/content-formats-ai-overviews-featured-ZRczuotaW6cAySdqkSnh98.webp', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Formats That Win Google AI Overviews | RankPilot',
    description: 'The specific content formats and structures that Google AI Overviews cite most frequently — and how to implement them.',
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/content-formats-ai-overviews-featured-ZRczuotaW6cAySdqkSnh98.webp'],
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
