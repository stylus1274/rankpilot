// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How RankPilot Works | Your SEO Workflow Simplified',
  description: 'See how RankPilot connects rank tracking, content audits, and AI recommendations into one seamless workflow.',
  openGraph: {
    title: 'How RankPilot Works | Your SEO Workflow Simplified',
    description: 'See how RankPilot connects rank tracking, content audits, and AI recommendations into one seamless workflow.',
  
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How RankPilot Works | Your SEO Workflow Simplified',
    description: 'See how RankPilot connects rank tracking, content audits, and AI recommendations into one seamless workflow.',
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
