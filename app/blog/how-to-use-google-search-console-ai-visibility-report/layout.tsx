import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use Google Search Console\'s New AI Visibility Report',
  description:
    'Google Search Console now shows how often your pages appear in AI Overviews and AI Mode. Here is a complete guide to finding the report, reading the data, and acting on what you find.',
  openGraph: {
    title: 'How to Use Google Search Console\'s New AI Visibility Report',
    description:
      'Google Search Console now shows how often your pages appear in AI Overviews and AI Mode. Here is a complete guide to finding the report, reading the data, and acting on what you find.',
    type: 'article',
    publishedTime: '2026-07-12T00:00:00.000Z',
    authors: ['Charlie Boudreau'],
    images: [
      {
        url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/gsc-ai-visibility-hero-64Q6yLMdtvidwEWyTpwpSm.png',
        width: 2560,
        height: 1440,
        alt: 'Google Search Console AI Visibility Report dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Use Google Search Console\'s New AI Visibility Report',
    description:
      'Google Search Console now shows how often your pages appear in AI Overviews and AI Mode. Here is a complete guide to finding the report, reading the data, and acting on what you find.',
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/gsc-ai-visibility-hero-64Q6yLMdtvidwEWyTpwpSm.png',
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
