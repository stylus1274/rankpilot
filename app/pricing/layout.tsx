// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | RankPilot - AI-Powered SEO Platform',
  description: 'Simple, transparent pricing for teams of all sizes. Start free, scale as you grow. No hidden fees.',
  openGraph: {
    type: 'website',
    title: 'Pricing | RankPilot - AI-Powered SEO Platform',
    description: 'Simple, transparent pricing for teams of all sizes. Start free, scale as you grow. No hidden fees.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RankPilot Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | RankPilot - AI-Powered SEO Platform',
    description: 'Simple, transparent pricing for teams of all sizes. Start free, scale as you grow. No hidden fees.',
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
