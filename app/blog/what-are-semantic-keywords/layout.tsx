import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Are Semantic Keywords and Why Do They Matter for SEO? | RankPilot',
  description: 'Semantic keywords are terms that share meaning with your target keyword. Learn what they are, why Google uses them, and how to use them to improve your rankings.',
  openGraph: {
    title: 'What Are Semantic Keywords and Why Do They Matter for SEO? | RankPilot',
    description: 'Semantic keywords are terms that share meaning with your target keyword. Learn what they are, why Google uses them, and how to use them to improve your rankings.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Are Semantic Keywords and Why Do They Matter for SEO? | RankPilot',
    description: 'Semantic keywords are terms that share meaning with your target keyword. Learn what they are, why Google uses them, and how to use them to improve your rankings.',
  },
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
