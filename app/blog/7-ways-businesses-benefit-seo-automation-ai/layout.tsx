// ─── Blog Post Layout (Server Component) ─────────────────────────────────────
// Metadata is defined here because the page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7 Ways Businesses Benefit from SEO Automation Using AI | RankPilot',
  description: 'How AI-powered SEO automation is saving time, improving rankings, and giving businesses a measurable competitive edge.',
  openGraph: {
    title: '7 Ways Businesses Benefit from SEO Automation Using AI | RankPilot',
    description: 'How AI-powered SEO automation is saving time, improving rankings, and giving businesses a measurable competitive edge.',
  
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/seo-automation-blog-featured-hCb3vTX8d3HVGLbsVDra7G.webp', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Ways Businesses Benefit from SEO Automation Using AI | RankPilot',
    description: 'How AI-powered SEO automation is saving time, improving rankings, and giving businesses a measurable competitive edge.',
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/seo-automation-blog-featured-hCb3vTX8d3HVGLbsVDra7G.webp'],
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
