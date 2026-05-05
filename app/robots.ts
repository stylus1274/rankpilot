// ─── robots.ts ────────────────────────────────────────────────────────────────
// Serves /robots.txt via Next.js App Router metadata convention
// Points crawlers to the sitemap index so both sitemaps are discovered.
// ─────────────────────────────────────────────────────────────────────────────
import type { MetadataRoute } from 'next'

const SITE_URL =
  process.env.NEXTAUTH_URL ?? 'https://rankpilot-sand.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap-index.xml`,
  }
}
