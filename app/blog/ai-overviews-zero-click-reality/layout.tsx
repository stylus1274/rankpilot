// ─── Blog Post Layout (Server Component) ─────────────────────────────────────
// Metadata is defined here because the page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Overviews and the Zero-Click Reality | RankPilot',
  description: 'What AI Overviews mean for organic traffic, which query types are most affected, and how to adapt your content strategy.',
  openGraph: {
    title: 'AI Overviews and the Zero-Click Reality | RankPilot',
    description: 'What AI Overviews mean for organic traffic, which query types are most affected, and how to adapt your content strategy.',
  
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/ai-overviews-zero-click-featured-9ECs9zsUuDfvLVVcMAk4DV.webp', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Overviews and the Zero-Click Reality | RankPilot',
    description: 'What AI Overviews mean for organic traffic, which query types are most affected, and how to adapt your content strategy.',
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/ai-overviews-zero-click-featured-9ECs9zsUuDfvLVVcMAk4DV.webp'],
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
