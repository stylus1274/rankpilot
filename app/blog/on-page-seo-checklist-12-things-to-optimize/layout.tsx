import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'On-Page SEO Checklist: 12 Things to Optimize Before You Publish',
  description:
    'A practical 12-point on-page SEO checklist covering title tags, meta descriptions, heading structure, internal links, image alt text, page speed, and more. Use it before every publish.',
  openGraph: {
    title: 'On-Page SEO Checklist: 12 Things to Optimize Before You Publish',
    description:
      'A practical 12-point on-page SEO checklist covering title tags, meta descriptions, heading structure, internal links, image alt text, page speed, and more.',
    type: 'article',
    publishedTime: '2026-06-01T00:00:00.000Z',
    authors: ['Charlie Boudreau'],
    images: [
      {
        url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/onpage-seo-checklist-hero-focY6GTChkz3oWM9eJ6XF8.png',
        width: 2560,
        height: 1440,
        alt: 'On-Page SEO Checklist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On-Page SEO Checklist: 12 Things to Optimize Before You Publish',
    description:
      'A practical 12-point on-page SEO checklist covering title tags, meta descriptions, heading structure, internal links, image alt text, page speed, and more.',
    images: [
      'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/onpage-seo-checklist-hero-focY6GTChkz3oWM9eJ6XF8.png',
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
