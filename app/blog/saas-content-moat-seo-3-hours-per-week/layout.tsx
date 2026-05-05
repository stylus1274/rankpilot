import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How a SaaS Startup Built a Content Moat with 3 Hours of SEO Work Per Week | RankPilot Blog',
  description: 'Learn how Meridian, a B2B SaaS startup, grew from zero to 38,000 monthly organic visitors using a focused 3-hour weekly SEO workflow powered by RankPilot — no agency, no shortcuts.',
  openGraph: {
    title: 'How a SaaS Startup Built a Content Moat with 3 Hours of SEO Work Per Week',
    description: 'Learn how Meridian, a B2B SaaS startup, grew from zero to 38,000 monthly organic visitors using a focused 3-hour weekly SEO workflow powered by RankPilot.',
    type: 'article',
    url: 'https://rankpilot-sand.vercel.app/blog/saas-content-moat-seo-3-hours-per-week',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'SaaS startup team reviewing SEO analytics dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How a SaaS Startup Built a Content Moat with 3 Hours of SEO Work Per Week',
    description: 'Learn how Meridian grew from zero to 38,000 monthly organic visitors using a focused 3-hour weekly SEO workflow.',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
