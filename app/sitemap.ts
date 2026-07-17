// ─── Native Next.js Sitemap ───────────────────────────────────────────────────
// Uses Next.js App Router's built-in sitemap.ts convention.
// Generates /sitemap.xml with correct content-type and no RSC vary headers.
// ─────────────────────────────────────────────────────────────────────────────
import type { MetadataRoute } from 'next'

const SITE_URL = 'https://rankpilot.cc'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`,            lastModified: '2026-04-11', changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/features`,    lastModified: '2026-04-11', changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/how-it-works`,lastModified: '2026-04-11', changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/use-cases`,   lastModified: '2026-04-11', changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/pricing`,     lastModified: '2026-04-11', changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/about`,       lastModified: '2026-04-11', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`,     lastModified: '2026-04-11', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`,        lastModified: '2026-07-12', changeFrequency: 'weekly',  priority: 0.8 },
  ]

  const posts: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog/how-to-use-google-search-console-ai-visibility-report`, lastModified: '2026-07-12', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/on-page-seo-checklist-12-things-to-optimize`,           lastModified: '2026-06-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/what-are-semantic-keywords`,                             lastModified: '2026-05-29', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/saas-content-moat-seo-3-hours-per-week`,                lastModified: '2026-05-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/content-audit-90-minutes-ai-tools`,                     lastModified: '2026-04-11', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/7-ways-businesses-benefit-seo-automation-ai`,           lastModified: '2026-02-22', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/5-digital-marketing-challenges-2026`,                   lastModified: '2026-01-23', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/ai-tools-seo-audits-2026`,                              lastModified: '2026-01-21', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/ai-tools-google-my-business-optimization`,              lastModified: '2026-01-20', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/generative-engine-optimization-explained`,              lastModified: '2026-01-19', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/ai-overviews-zero-click-reality`,                       lastModified: '2026-01-18', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/google-keyword-planner-smarter-research`,               lastModified: '2026-01-10', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog/content-formats-google-ai-overviews`,                   lastModified: '2026-01-08', changeFrequency: 'monthly', priority: 0.7 },
  ]

  return [...pages, ...posts]
}
