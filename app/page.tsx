import type { Metadata } from 'next'
import { RankPilotLanding } from '@/components/rankpilot-landing'

export const metadata: Metadata = {
  title: 'RankPilot | AI-Powered SEO Platform',
  description: 'RankPilot is an AI-powered SEO platform that tracks rankings, audits content, and surfaces optimization opportunities - all in one workflow.',
  openGraph: {
    type: 'website',
    title: 'RankPilot | AI-Powered SEO Platform',
    description: 'RankPilot is an AI-powered SEO platform that tracks rankings, audits content, and surfaces optimization opportunities - all in one workflow.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RankPilot - AI-Powered SEO Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RankPilot | AI-Powered SEO Platform',
    description: 'RankPilot is an AI-powered SEO platform that tracks rankings, audits content, and surfaces optimization opportunities - all in one workflow.',
    images: ['/og-image.png'],
  },
}

export default function Home() {
  return <RankPilotLanding />
}
