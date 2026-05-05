// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RankPilot Blog | SEO Strategy, AI Search & Content Insights',
  description: 'Expert articles on SEO strategy, AI search optimization, content audits, and digital marketing in 2026.',
  openGraph: {
    title: 'RankPilot Blog | SEO Strategy, AI Search & Content Insights',
    description: 'Expert articles on SEO strategy, AI search optimization, content audits, and digital marketing in 2026.',
  
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RankPilot Blog | SEO Strategy, AI Search & Content Insights',
    description: 'Expert articles on SEO strategy, AI search optimization, content audits, and digital marketing in 2026.',
    images: ['/og-image.png'],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
