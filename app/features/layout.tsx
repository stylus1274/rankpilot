// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RankPilot Features | AI-Powered SEO Tools',
  description: "Explore RankPilot's full feature set — rank tracking, content audits, AI recommendations, and more.",
  openGraph: {
    title: 'RankPilot Features | AI-Powered SEO Tools',
    description: "Explore RankPilot's full feature set — rank tracking, content audits, AI recommendations, and more.",
  
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RankPilot Features | AI-Powered SEO Tools',
    description: 'AI-Powered SEO Platform',
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
