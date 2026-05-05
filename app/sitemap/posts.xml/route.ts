// ─── Posts Sitemap ────────────────────────────────────────────────────────────
// Serves /sitemap/1.xml — all blog post pages
// Referenced by /sitemap-index.xml
// ─────────────────────────────────────────────────────────────────────────────
import { NextResponse } from 'next/server'

const SITE_URL =
  process.env.NEXTAUTH_URL ?? 'https://rankpilot-sand.vercel.app'

const posts = [
  { slug: 'content-audit-90-minutes-ai-tools', lastmod: '2026-04-11' },
  { slug: '7-ways-businesses-benefit-seo-automation-ai', lastmod: '2026-02-22' },
  { slug: '5-digital-marketing-challenges-2026', lastmod: '2026-01-23' },
  { slug: 'ai-tools-seo-audits-2026', lastmod: '2026-01-21' },
  { slug: 'ai-tools-google-my-business-optimization', lastmod: '2026-01-20' },
  { slug: 'generative-engine-optimization-explained', lastmod: '2026-01-19' },
  { slug: 'ai-overviews-zero-click-reality', lastmod: '2026-01-18' },
  { slug: 'google-keyword-planner-smarter-research', lastmod: '2026-01-10' },
  { slug: 'content-formats-google-ai-overviews', lastmod: '2026-01-08' },
]

export function GET() {
  const urls = posts
    .map(
      (p) => `
  <url>
    <loc>${SITE_URL}/blog/${p.slug}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}
