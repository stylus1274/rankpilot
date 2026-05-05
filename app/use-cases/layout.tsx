// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RankPilot Use Cases | SEO for Every Team',
  description: 'Whether you run an agency, in-house team, or niche site - RankPilot has a workflow built for your situation.',
  openGraph: {
    title: 'RankPilot Use Cases | SEO for Every Team',
    description: 'Whether you run an agency, in-house team, or niche site - RankPilot has a workflow built for your situation.',
  
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RankPilot Use Cases | SEO for Every Team',
    description: 'Whether you run an agency, in-house team, or niche site - RankPilot has a workflow built for your situation.',
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
