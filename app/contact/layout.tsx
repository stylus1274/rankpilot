// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact RankPilot | Get in Touch',
  description: 'Have a question or want to see RankPilot in action? Reach out to our team.',
  openGraph: {
    title: 'Contact RankPilot | Get in Touch',
    description: 'Have a question or want to see RankPilot in action? Reach out to our team.',
  
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact RankPilot | Get in Touch',
    description: 'Have a question or want to see RankPilot in action? Reach out to our team.',
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
