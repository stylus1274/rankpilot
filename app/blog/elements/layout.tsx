// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Element Gallery | RankPilot',
  description: 'A living component gallery of rich blog elements available for use in RankPilot blog posts.',
  openGraph: {
    title: 'Blog Element Gallery | RankPilot',
    description: 'A living component gallery of rich blog elements available for use in RankPilot blog posts.',
  
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Element Gallery | RankPilot',
    description: 'A living component gallery of rich blog elements available for use in RankPilot blog posts.',
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
