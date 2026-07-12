// ─── Sitemap Index Route ──────────────────────────────────────────────────────
// Serves a sitemap index XML at /sitemap-index.xml
// Points to /sitemap/0.xml (pages) and /sitemap/1.xml (posts)
// Submit this URL to Google Search Console for the split sitemap approach.
// ─────────────────────────────────────────────────────────────────────────────
import { NextResponse } from 'next/server'

const SITE_URL =
  process.env.NEXTAUTH_URL ?? 'https://rankpilot.cc'

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap/pages.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE_URL}/sitemap/posts.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=600',
    },
  })
}
