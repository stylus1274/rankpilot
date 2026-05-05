// ─── Blog Post Layout (Server Component) ─────────────────────────────────────
// Metadata is defined here because the page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tools for SEO Audits in 2026 | RankPilot',
  description: 'How to use AI tools to run faster, more accurate SEO audits — and which parts of the audit still need human judgment.',
  openGraph: {
    title: 'AI Tools for SEO Audits in 2026 | RankPilot',
    description: 'How to use AI tools to run faster, more accurate SEO audits — and which parts of the audit still need human judgment.',
  
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/ai-tools-seo-audits-2026-featured-TfTcS9g78cdPk7ZKMrpTWK.webp', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools for SEO Audits in 2026 | RankPilot',
    description: 'How to use AI tools to run faster, more accurate SEO audits — and which parts of the audit still need human judgment.',
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/ai-tools-seo-audits-2026-featured-TfTcS9g78cdPk7ZKMrpTWK.webp'],
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
