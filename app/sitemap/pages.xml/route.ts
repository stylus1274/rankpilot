// ─── Pages Sitemap ────────────────────────────────────────────────────────────
// Serves /sitemap/0.xml — all main pages
// Referenced by /sitemap-index.xml
// ─────────────────────────────────────────────────────────────────────────────
import { NextResponse } from 'next/server'

const SITE_URL =
  process.env.NEXTAUTH_URL ?? 'https://rankpilot.cc'

const pages = [
  { url: '/', lastmod: '2026-04-11', changefreq: 'weekly', priority: '1.0' },
  { url: '/features', lastmod: '2026-04-11', changefreq: 'weekly', priority: '0.9' },
  { url: '/how-it-works', lastmod: '2026-04-11', changefreq: 'weekly', priority: '0.9' },
  { url: '/use-cases', lastmod: '2026-04-11', changefreq: 'weekly', priority: '0.9' },
  { url: '/pricing', lastmod: '2026-04-11', changefreq: 'weekly', priority: '0.9' },
  { url: '/about', lastmod: '2026-04-11', changefreq: 'monthly', priority: '0.8' },
  { url: '/contact', lastmod: '2026-04-11', changefreq: 'monthly', priority: '0.8' },
  { url: '/blog', lastmod: '2026-04-11', changefreq: 'weekly', priority: '0.8' },
]

export function GET() {
  const urls = pages
    .map(
      (p) => `
  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=600',
    },
  })
}
