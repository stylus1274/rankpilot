// ─── Single Flat Sitemap ──────────────────────────────────────────────────────
// Serves /sitemap.xml — all pages and blog posts in one file
// Submitted to Google Search Console as the canonical sitemap.
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
  { url: '/blog', lastmod: '2026-07-12', changefreq: 'weekly', priority: '0.8' },
]

const posts = [
  { slug: 'how-to-use-google-search-console-ai-visibility-report', lastmod: '2026-07-12' },
  { slug: 'on-page-seo-checklist-12-things-to-optimize', lastmod: '2026-06-01' },
  { slug: 'what-are-semantic-keywords', lastmod: '2026-05-29' },
  { slug: 'saas-content-moat-seo-3-hours-per-week', lastmod: '2026-05-05' },
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
  const pageUrls = pages
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

  const postUrls = posts
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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pageUrls}${postUrls}
</urlset>`

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=600',
    },
  })
}
