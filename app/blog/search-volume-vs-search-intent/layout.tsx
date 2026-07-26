import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Difference Between Search Volume and Search Intent (And Why It Matters) | RankPilot',
  description: 'Search volume tells you how many people search for a keyword. Search intent tells you why. Learn why intent is the more important signal and how to use both together to build content that actually ranks and converts.',
  openGraph: {
    title: 'The Difference Between Search Volume and Search Intent (And Why It Matters) | RankPilot',
    description: 'Search volume tells you how many people search for a keyword. Search intent tells you why. Learn why intent is the more important signal and how to use both together to build content that actually ranks and converts.',
    images: [
      {
        url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/search-intent-hero-8m6taauxMuoU9Yd5rsYkzJ.png',
        width: 2560,
        height: 1440,
        alt: 'Search Volume vs Search Intent comparison illustration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Difference Between Search Volume and Search Intent (And Why It Matters) | RankPilot',
    description: 'Search volume tells you how many people search for a keyword. Search intent tells you why. Learn why intent is the more important signal and how to use both together to build content that actually ranks and converts.',
  },
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
