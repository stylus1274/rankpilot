// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About RankPilot | Our Story & Mission',
  description: 'Learn how RankPilot was built to solve the broken SEO content workflow — and the team behind the platform.',
  openGraph: {
    title: 'About RankPilot | Our Story & Mission',
    description: 'Learn how RankPilot was built to solve the broken SEO content workflow — and the team behind the platform.',
  
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RankPilot | Our Story & Mission',
    description: 'Learn how RankPilot was built to solve the broken SEO content workflow — and the team behind the platform.',
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
