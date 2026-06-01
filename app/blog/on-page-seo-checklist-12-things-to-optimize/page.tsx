'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Menu,
  X,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Info,
  ChevronDown,
  Gauge,
  FileText,
  Link2,
  Image,
  Smartphone,
  Zap,
  Search,
  Type,
  AlignLeft,
  Globe,
  BarChart2,
} from 'lucide-react'

// ─── Design tokens ────────────────────────────────────────────────────────────
// Style: Clean editorial, RankPilot brand (#2457f5 primary, #071225 dark, #4b5568 body)
// Layout: Single-column 860px, pb-16 hero, mt-10 featured image, no sidebar TOC

const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e8edf5]/60 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] w-full max-w-none items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2457f5]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2.2"/><path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <span className="font-display text-xl font-black tracking-[-0.03em] text-[#071225]">RankPilot</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-2xl border border-[#e8edf5] bg-[#f8fafc] px-2 py-1.5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
              pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                ? 'bg-white text-[#071225] shadow-sm'
                : 'text-[#4b5568] hover:bg-white hover:text-[#071225]'
            }`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/" className="rounded-2xl bg-[#f4f8ff] px-5 py-4 font-bold text-[#25324b]">Log In</Link>
          <Link href="/pricing" className="rounded-2xl bg-[#1d63ff] px-5 py-4 font-extrabold text-white">Get Started</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e8edf5] lg:hidden">
          <span className="sr-only">Menu</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-[#e8edf5] bg-white px-5 py-4 lg:hidden">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block py-3 text-sm font-semibold text-[#4b5568]" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-[#071225] px-5 py-16 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2457f5]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2.2"/><path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <span className="font-display text-xl font-black tracking-[-0.03em] text-white">RankPilot</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-white/50">AI-powered SEO content platform. Research, plan, and publish content that ranks.</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Product</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {[
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Use Cases', href: '/use-cases' },
              ].map((item) => (
                <li key={item.href}><Link href={item.href} className="transition-colors hover:text-white">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Company</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {[
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}><Link href={item.href} className="transition-colors hover:text-white">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm font-bold text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 RankPilot. All rights reserved.</span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <span key={item} className="cursor-default">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

const relatedPosts = [
  {
    slug: 'what-are-semantic-keywords',
    category: 'Keyword Research',
    date: 'May 29, 2026',
    title: 'What Are Semantic Keywords and Why Do They Matter for SEO?',
    excerpt: 'Semantic keywords help Google understand the full context of your content. Here is what they are and how to use them effectively.',
  },
  {
    slug: 'content-audit-90-minutes-ai-tools',
    category: 'Content Strategy',
    date: 'April 11, 2026',
    title: 'How to Do a Content Audit in 90 Minutes Using AI Tools',
    excerpt: 'A step-by-step framework for auditing your entire content library in under two hours using RankPilot.',
  },
  {
    slug: 'ai-tools-seo-audits-2026',
    category: 'AI Tools',
    date: 'January 21, 2026',
    title: 'The Role of AI Tools in SEO Audits: What to Expect in 2026',
    excerpt: 'AI is changing how SEO audits are done. Here is what modern AI-powered audit tools can and cannot do.',
  },
]

// ─── Checklist items ──────────────────────────────────────────────────────────
const checklistItems = [
  {
    number: '01',
    icon: <Type className="h-5 w-5" />,
    title: 'Title Tag',
    color: 'blue',
    body: `Your title tag is the single most important on-page SEO element. It tells Google what the page is about and it is what users see in search results. Keep it between 50 and 60 characters so it does not get truncated. Put your primary keyword near the front, not buried at the end. Avoid keyword stuffing — one clear, descriptive title beats a list of terms every time.`,
    tip: 'Write your title for humans first. If it reads naturally and includes your keyword, it will perform well in search.',
  },
  {
    number: '02',
    icon: <AlignLeft className="h-5 w-5" />,
    title: 'Meta Description',
    color: 'purple',
    body: `The meta description does not directly affect rankings, but it has a huge impact on click-through rate. Think of it as your 155-character sales pitch. Summarize what the page covers, hint at the value the reader gets, and include your primary keyword naturally. Google sometimes rewrites meta descriptions, but writing a good one gives you the best chance of controlling what searchers see.`,
    tip: 'Include a soft call to action in your meta description. Phrases like "Here is how" or "Find out why" consistently improve CTR.',
  },
  {
    number: '03',
    icon: <FileText className="h-5 w-5" />,
    title: 'H1 Heading',
    color: 'green',
    body: `Every page should have exactly one H1. It should match or closely mirror your title tag, and it should contain your primary keyword. The H1 is the first heading a visitor sees and it anchors the rest of your heading structure. A common mistake is using a decorative headline as the H1 while burying the actual topic further down the page.`,
    tip: null,
  },
  {
    number: '04',
    icon: <Globe className="h-5 w-5" />,
    title: 'URL Structure',
    color: 'orange',
    body: `Short, descriptive URLs outperform long, parameter-heavy ones in both rankings and click-through rate. Use your primary keyword in the URL slug, separate words with hyphens (not underscores), and remove stop words like "a", "the", and "and". A URL like /on-page-seo-checklist is far more useful to Google and users than /blog/post?id=4829.`,
    tip: 'Once a URL is indexed and receiving traffic, avoid changing it. If you must change it, set up a 301 redirect from the old URL.',
  },
  {
    number: '05',
    icon: <Search className="h-5 w-5" />,
    title: 'Keyword Placement and Density',
    color: 'blue',
    body: `Your primary keyword should appear in the first 100 words of the article, in at least one subheading, and naturally throughout the body. Do not obsess over a specific density percentage — Google has moved well beyond counting keyword frequency. What matters is that the page clearly covers the topic. Use your primary keyword where it reads naturally, and rely on related terms and semantic keywords to fill out the topical coverage. For a deeper look at how related terms work, see our guide on semantic keywords.`,
    internalLink: { href: '/blog/what-are-semantic-keywords', anchor: 'semantic keywords' },
    tip: null,
  },
  {
    number: '06',
    icon: <Image className="h-5 w-5" />,
    title: 'Image Alt Text',
    color: 'green',
    body: `Every image on the page should have a descriptive alt attribute. Alt text serves two purposes: it helps visually impaired users understand the image, and it gives Google additional context about the page content. Describe what is actually in the image, include your keyword where it fits naturally, and keep it under 125 characters. Never use "image of" or "photo of" as a prefix — just describe the subject directly.`,
    tip: 'Compress images before uploading. Oversized images are one of the most common causes of slow page load times, which hurts both rankings and user experience.',
  },
  {
    number: '07',
    icon: <Link2 className="h-5 w-5" />,
    title: 'Internal Links',
    color: 'purple',
    body: `Internal links distribute authority across your site and help Google understand how your content is related. Every new piece of content should link to at least two or three other relevant pages on your site, and those existing pages should link back to the new one where relevant. Use descriptive anchor text that tells both users and search engines what the linked page is about. Avoid generic anchors like "click here" or "this article". For example, linking to your keyword research workflow is more useful than linking to "our tool".`,
    tip: 'After publishing, go back to your three most-visited pages and add a contextual internal link to the new post. This passes authority from established pages to new ones.',
  },
  {
    number: '08',
    icon: <BarChart2 className="h-5 w-5" />,
    title: 'Heading Hierarchy (H2, H3)',
    color: 'orange',
    body: `Subheadings break up long content and signal structure to both readers and crawlers. Use H2 tags for major sections and H3 tags for subsections within those. Include secondary keywords and related phrases in your subheadings where they fit naturally. A well-structured heading hierarchy makes your content easier to scan, which reduces bounce rate, and easier to parse, which improves how Google understands the page.`,
    tip: null,
  },
  {
    number: '09',
    icon: <Zap className="h-5 w-5" />,
    title: 'Page Speed',
    color: 'blue',
    body: `Page speed is a confirmed Google ranking factor, and it has a direct impact on conversion rates. A one-second delay in load time can reduce conversions by up to 7%. Before publishing, run your page through Google PageSpeed Insights and address the top issues. The most common culprits are uncompressed images, render-blocking JavaScript, and missing browser caching headers. You do not need a perfect score, but you should aim for a mobile score above 70.`,
    tip: 'Use next-gen image formats like WebP. They are typically 25 to 35 percent smaller than JPEG at equivalent quality.',
  },
  {
    number: '10',
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Mobile Friendliness',
    color: 'green',
    body: `Google uses mobile-first indexing, which means it crawls and ranks the mobile version of your page. If your content is harder to read, navigate, or interact with on a phone than on a desktop, your rankings will suffer. Check that text is readable without zooming, buttons and links are large enough to tap, and there are no horizontal scroll issues. Use Google's Mobile-Friendly Test tool to confirm before publishing.`,
    tip: null,
  },
  {
    number: '11',
    icon: <Gauge className="h-5 w-5" />,
    title: 'Schema Markup',
    color: 'purple',
    body: `Schema markup is structured data that helps Google display rich results in search, such as star ratings, FAQs, how-to steps, and article metadata. For blog posts, at minimum add Article schema with the author name, publish date, and headline. For product or service pages, add the relevant schema type. Schema does not guarantee rich results, but it makes your content eligible for them, which can significantly improve click-through rates from search.`,
    tip: 'Use Google\'s Rich Results Test to validate your schema before publishing. It shows exactly which rich result types your page is eligible for.',
  },
  {
    number: '12',
    icon: <Info className="h-5 w-5" />,
    title: 'Readability and Content Depth',
    color: 'orange',
    body: `Google's Helpful Content system rewards pages that genuinely satisfy the searcher's intent. Before publishing, ask: does this page fully answer the question? Does it go deeper than the top-ranking results in at least one meaningful way? Aim for short paragraphs (3 to 4 sentences), active voice, and a reading level appropriate for your audience. Use the Flesch-Kincaid readability score as a rough guide. Most successful SEO content sits between grade 7 and grade 10. Running a regular content audit helps you catch pages that have drifted below this standard over time.`,
    internalLink: { href: '/blog/content-audit-90-minutes-ai-tools', anchor: 'content audit' },
    tip: null,
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  blue:   { bg: '#eef4ff', text: '#2457f5', border: '#bfdbfe', iconBg: '#2457f5' },
  purple: { bg: '#f5f3ff', text: '#7c3aed', border: '#ddd6fe', iconBg: '#7c3aed' },
  green:  { bg: '#f0fdf4', text: '#16a34a', border: '#bbf7d0', iconBg: '#16a34a' },
  orange: { bg: '#fff7ed', text: '#ea580c', border: '#fed7aa', iconBg: '#ea580c' },
}

export default function OnPageSEOChecklist() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: 'How often should I run through this checklist?',
      a: 'Run through it before every new publish. For existing content, revisit pages every 6 to 12 months or whenever you update them significantly. A quick content audit can help you prioritize which pages need attention first.',
    },
    {
      q: 'Does on-page SEO still matter with AI search?',
      a: 'Yes, more than ever. AI Overviews and generative search engines rely on well-structured, clearly written content to extract and cite information. The same on-page fundamentals that help you rank in traditional search also make your content more likely to be cited in AI-generated answers.',
    },
    {
      q: 'What is the most important item on the checklist?',
      a: 'If you had to pick one, the title tag has the highest impact on both rankings and click-through rate. But in practice, the items work together. A great title tag on a slow, poorly structured page will underperform a well-optimized page across all 12 points.',
    },
    {
      q: 'How many internal links should a blog post have?',
      a: 'There is no fixed rule, but 3 to 5 contextual internal links per post is a reasonable baseline for most content. What matters more than quantity is relevance. Every internal link should add genuine value for the reader.',
    },
    {
      q: 'Can I automate any of these checks?',
      a: 'Yes. Tools like RankPilot can automate keyword placement analysis, content scoring, and internal link suggestions so you spend less time auditing and more time writing. The goal is to make this checklist a 5-minute review rather than a 2-hour process.',
    },
  ]

  return (
    <>
      <Nav />
      <main className="bg-white pt-[78px]">
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f5ff] to-white pb-16 pt-14">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#2457f5]/10 blur-[120px]" />
            <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#7c3aed]/8 blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-[860px] px-5 sm:px-8">
            <div className="mb-6 flex items-center gap-3">
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2457f5] hover:underline">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
              <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-bold text-[#2457f5]">On-Page SEO</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-display text-4xl font-black leading-tight text-[#071225] sm:text-5xl">
                On-Page SEO Checklist: 12 Things to Optimize Before You Publish
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> June 1, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 8 min read</span>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src="https://rankpilot-fr9zunye.manus.space/manus-storage/charlie-headshot_dd8e4e37.png"
                  alt="Charlie Boudreau"
                  className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-white shadow-sm"
                />
                <div>
                  <p className="text-sm font-semibold text-[#071225]">Charlie Boudreau</p>
                  <p className="text-xs text-[#94a3b8]">Founder, RankPilot</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Featured image ────────────────────────────────────────────────── */}
        <div className="mx-auto mt-10 max-w-[860px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/onpage-seo-checklist-hero-c9YrtqDrkWkJAQ6aNREBRv.webp"
              alt="On-Page SEO Checklist: 12 Things to Optimize Before You Publish"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* ── Article body ─────────────────────────────────────────────────── */}
        <article className="mx-auto mt-12 max-w-[860px] px-5 pb-24 sm:px-8">

          {/* Key Takeaways */}
          <div className="mb-10 rounded-2xl border border-[#bfdbfe] bg-[#eef4ff] p-6">
            <p className="mb-3 font-display text-base font-black text-[#2457f5]">Key Takeaways</p>
            <ul className="space-y-2">
              {[
                'Your title tag and H1 are the highest-leverage on-page elements. Get these right first.',
                'Internal links distribute authority and help Google understand your site structure.',
                'Page speed and mobile friendliness are confirmed ranking factors. Check both before every publish.',
                'Schema markup makes your content eligible for rich results, which can significantly boost CTR.',
                'Readability and content depth matter as much as technical optimization in 2026.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-7 text-[#4b5568]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2457f5]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Intro */}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">
            <p>
              Publishing a piece of content without running through an on-page SEO checklist is like sending an email without a subject line. The content might be excellent, but you are making it harder for the right people to find it. On-page SEO is not about gaming algorithms. It is about making your content as clear, accessible, and useful as possible, for both search engines and the humans who use them.
            </p>
            <p>
              This checklist covers the 12 most impactful on-page factors. Work through it before every publish and you will consistently give your content the best possible chance of ranking. If you are looking to understand how these factors fit into a broader <Link href="/features">keyword research and content planning workflow</Link>, RankPilot handles most of this analysis automatically so you can focus on the writing.
            </p>
          </div>

          {/* Checklist items */}
          <div className="mt-12 space-y-8">
            {checklistItems.map((item) => {
              const c = colorMap[item.color]
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white" style={{ backgroundColor: c.iconBg }}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold" style={{ color: c.text }}>{item.number}</span>
                        <h2 className="font-display text-lg font-black text-[#071225]">{item.title}</h2>
                      </div>
                      <p className="mt-3 text-[15px] leading-8 text-[#4b5568]">
                        {item.internalLink
                          ? (() => {
                              const parts = item.body.split(item.internalLink.anchor)
                              return (
                                <>
                                  {parts[0]}
                                  <Link href={item.internalLink.href} className="font-semibold text-[#2457f5] hover:underline">{item.internalLink.anchor}</Link>
                                  {parts[1]}
                                </>
                              )
                            })()
                          : item.body
                        }
                      </p>
                      {item.tip && (
                        <div className="mt-4 flex gap-3 rounded-xl border p-4" style={{ backgroundColor: c.bg, borderColor: c.border }}>
                          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.text }} />
                          <p className="text-sm leading-7" style={{ color: '#4b5568' }}>
                            <span className="font-bold" style={{ color: c.text }}>Pro tip: </span>
                            {item.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mid-article CTA */}
          <div className="my-14 overflow-hidden rounded-2xl bg-gradient-to-br from-[#2457f5] to-[#1d3fc4] p-8 text-white">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl font-black">Stop Checking Boxes Manually</p>
                <p className="mt-1.5 text-sm leading-7 text-white/75">RankPilot runs this checklist automatically on every piece of content you create, so you can focus on writing instead of auditing.</p>
              </div>
              <Link href="/features" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#2457f5] transition-opacity hover:opacity-90">
                See How It Works
              </Link>
            </div>
          </div>

          {/* Warning callout */}
          <div className="my-8 flex gap-4 rounded-2xl border border-[#fecaca] bg-[#fff1f1] p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#dc2626]" />
            <div>
              <p className="font-bold text-[#dc2626]">Common mistake</p>
              <p className="mt-1 text-sm leading-7 text-[#4b5568]">Optimizing for a keyword your page does not actually cover in depth. Keyword stuffing a thin page will not help it rank. Google's ranking systems evaluate whether the content genuinely satisfies the search intent behind the keyword, not just whether the keyword appears. If your page cannot fully answer the question, expand it before optimizing it.</p>
            </div>
          </div>

          {/* Putting it together section */}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline mt-10">
            <h2>Putting It All Together</h2>
            <p>
              The 12 items on this checklist are not independent. They reinforce each other. A well-written title tag drives higher click-through rates, which signals to Google that the page is relevant, which improves rankings, which drives more traffic. Internal links pass authority from your established pages to new ones, accelerating how quickly new content gets indexed and ranked. Schema markup makes your content eligible for rich results, which increases visibility even for pages ranking in positions 4 through 10.
            </p>
            <p>
              The goal is not perfection on every point before every publish. It is consistency. A page that scores 10 out of 12 on every publish will outperform a page that scores 12 out of 12 once and 4 out of 12 the next time. Build this checklist into your publishing workflow and treat it as a non-negotiable final step, the same way you would a spell check.
            </p>
            <p>
              If you are managing a large content library, a periodic <Link href="/blog/content-audit-90-minutes-ai-tools">content audit</Link> is the best way to apply these principles retroactively to existing pages. Many sites have significant ranking potential locked in older content that was published before these optimizations were in place. Revisiting and updating those pages is often faster and more effective than publishing new ones.
            </p>
            <p>
              For teams that publish frequently, automating the checklist is worth the investment. RankPilot's <Link href="/how-it-works">content optimization workflow</Link> scores every page against these criteria in real time, flags issues before you publish, and suggests specific improvements rather than generic advice. The goal is to make on-page SEO feel less like a chore and more like a natural part of writing.
            </p>
          </div>

          {/* Info callout */}
          <div className="my-8 flex gap-4 rounded-2xl border border-[#bfdbfe] bg-[#eef4ff] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#2457f5]" />
            <div>
              <p className="font-bold text-[#2457f5]">Good to know</p>
              <p className="mt-1 text-sm leading-7 text-[#4b5568]">On-page SEO is one part of a three-part equation. Technical SEO (site speed, crawlability, indexing) and off-page SEO (backlinks, brand mentions, authority) also affect rankings. This checklist covers the on-page layer. If you are seeing strong on-page scores but weak rankings, the bottleneck is likely technical or off-page.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-black text-[#071225]">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-[#e8edf5]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-[#071225]">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[#94a3b8] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-7 text-[#4b5568]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Related posts */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-black text-[#071225]">Related Articles</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col rounded-2xl border border-[#e8edf5] bg-[#f8fafc] p-5 transition-shadow hover:shadow-md">
                  <span className="mb-2 text-xs font-bold text-[#2457f5]">{post.category}</span>
                  <p className="font-display text-sm font-black leading-snug text-[#071225] group-hover:text-[#2457f5] transition-colors">{post.title}</p>
                  <p className="mt-2 text-xs leading-6 text-[#94a3b8]">{post.excerpt}</p>
                  <span className="mt-4 text-xs font-semibold text-[#94a3b8]">{post.date}</span>
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  )
}
