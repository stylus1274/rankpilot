// ─── Blog Post Layout (Server Component) ─────────────────────────────────────
// Metadata is defined here because the page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Digital Marketing Challenges in 2026 (and How to Solve Them) | RankPilot',
  description: 'The five biggest challenges digital marketers face in 2026 — and the practical strategies to overcome each one.',
  openGraph: {
    title: '5 Digital Marketing Challenges in 2026 (and How to Solve Them) | RankPilot',
    description: 'The five biggest challenges digital marketers face in 2026 — and the practical strategies to overcome each one.',
  
    images: [{ url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/digital-marketing-challenges-2026-featured-Znwxuh3oQS9miWVSuSv3Pd.webp', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Digital Marketing Challenges in 2026 (and How to Solve Them) | RankPilot',
    description: 'The five biggest challenges digital marketers face in 2026 — and the practical strategies to overcome each one.',
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/digital-marketing-challenges-2026-featured-Znwxuh3oQS9miWVSuSv3Pd.webp'],
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
