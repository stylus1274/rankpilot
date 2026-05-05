// ─── Layout (Server Component) ───────────────────────────────────────────────
// Metadata lives here because page.tsx is a Client Component.
// Next.js merges layout metadata with page metadata automatically.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Do a Content Audit in 90 Minutes Using AI Tools | RankPilot',
  description: 'A step-by-step framework for running a complete content audit in 90 minutes using AI tools — no spreadsheet marathon required.',
  openGraph: {
    title: 'How to Do a Content Audit in 90 Minutes Using AI Tools | RankPilot',
    description: 'A step-by-step framework for running a complete content audit in 90 minutes using AI tools — no spreadsheet marathon required.',
  
    images: [{ url: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/NXGboSFzGQESepeZ.webp', width: 1200, height: 630, alt: 'RankPilot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Do a Content Audit in 90 Minutes Using AI Tools | RankPilot',
    description: 'A step-by-step framework for running a complete content audit in 90 minutes using AI tools — no spreadsheet marathon required.',
    images: ['https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/NXGboSFzGQESepeZ.webp'],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
