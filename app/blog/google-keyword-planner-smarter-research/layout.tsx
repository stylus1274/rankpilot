// ─── Blog Post Layout (Server Component) ─────────────────────────────────────
// Metadata is defined here because the page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Using Google Keyword Planner for Smarter Research | RankPilot',
  description: 'How to get more out of Google Keyword Planner with AI-assisted research techniques that go beyond basic volume data.',
  openGraph: {
    title: 'Using Google Keyword Planner for Smarter Research | RankPilot',
    description: 'How to get more out of Google Keyword Planner with AI-assisted research techniques that go beyond basic volume data.',
  
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/keyword-planner-blog-featured-TBR5dCfk4T5FpcDXSQ8atA.webp', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Using Google Keyword Planner for Smarter Research | RankPilot',
    description: 'How to get more out of Google Keyword Planner with AI-assisted research techniques that go beyond basic volume data.',
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/keyword-planner-blog-featured-TBR5dCfk4T5FpcDXSQ8atA.webp'],
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
