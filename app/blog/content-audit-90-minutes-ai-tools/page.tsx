'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  Gauge,
  Menu,
  X,
  Play,
  ChevronRight,
  CheckCircle2,
  Zap,
} from 'lucide-react'

// ─── Design tokens ────────────────────────────────────────────────────────────
// Font: Plus Jakarta Sans (--font-display) + DM Sans (--font-sans)
// Primary: #2457f5  Dark: #071225 / #1a2233  Body: #4b5568 / #667085
// Background: #fbfaf4  Cards: white  Border-radius: 28px cards
// ─────────────────────────────────────────────────────────────────────────────

// ─── Header ──────────────────────────────────────────────────────────────────
function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const textClass = variant === 'dark' ? 'text-white' : 'text-[#101828]'
  return (
    <Link href="/" className="group inline-flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1c6bff]">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#1d63ff] text-white shadow-[0_12px_30px_rgba(29,99,255,0.22)] transition-transform duration-300 group-hover:scale-105">
        <Gauge className="h-5 w-5" />
      </span>
      <span className={`font-display text-2xl font-black tracking-tight ${textClass}`}>RankPilot</span>
    </Link>
  )
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Questions', href: '/#questions' },
  { label: 'Blog', href: '/blog' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full bg-white/95 shadow-[0_8px_35px_rgba(16,24,40,0.08)] backdrop-blur-md">
      <div className="mx-auto flex h-[78px] w-full max-w-none items-center justify-between px-5 sm:px-8 lg:px-14">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-full bg-[#f4f8ff] p-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-5 py-3 text-sm font-bold text-[#25324b] transition-all duration-300 hover:bg-white hover:text-[#1d63ff] hover:shadow-[0_10px_25px_rgba(16,24,40,0.07)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#trial"
            className="inline-flex items-center gap-2 rounded-full bg-[#101828] px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(16,24,40,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d63ff]"
          >
            <Play className="h-4 w-4" />
            Get a Demo
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full bg-[#f4f8ff] text-[#101828] shadow-[0_10px_25px_rgba(16,24,40,0.07)] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden bg-white lg:hidden"
      >
        <div className="grid gap-2 px-5 pb-5">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.label}`}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-[#f4f8ff] px-5 py-4 text-left font-bold text-[#25324b]"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#trial" className="rounded-2xl bg-[#1d63ff] px-5 py-4 text-left font-extrabold text-white">
            Get a Demo
          </Link>
        </div>
      </motion.div>
    </header>
  )
}

// ─── Table of Contents ────────────────────────────────────────────────────────
const tocItems = [
  { id: 'what-is-content-audit', label: 'What Is a Content Audit (and Why You Need One in 2026)' },
  { id: 'before-you-start', label: 'Before You Start: What You Need' },
  { id: 'step-1', label: 'Step 1 — Export Your Content Inventory (10 minutes)' },
  { id: 'step-2', label: 'Step 2 — Pull Performance Data with RankPilot\'s GSC Analyzer (15 minutes)' },
  { id: 'step-3', label: 'Step 3 — Use RankPilot to Score Content Quality and Find Gaps (20 minutes)' },
  { id: 'step-4', label: 'Step 4 — Sort Every Post into Three Buckets (15 minutes)' },
  { id: 'step-5', label: 'Step 5 — Build Your Priority Action List Using Quick Win Keywords (15 minutes)' },
  { id: 'step-6', label: 'Step 6 — Set a Recurring Audit Schedule (5 minutes)' },
  { id: 'key-takeaways', label: 'Key Takeaways' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'start-today', label: 'Start Your First Content Audit Today' },
]

function TableOfContents({ activeId }: { activeId: string }) {
  return (
    <div className="rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-[0_8px_30px_rgba(16,24,40,0.06)]">
      <p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-[#94a3b8]">Table of Contents</p>
      <ul className="space-y-1">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`flex items-start gap-2 rounded-lg px-3 py-2 text-sm leading-snug transition-all duration-150 ${
                activeId === item.id
                  ? 'bg-[#eef4ff] font-bold text-[#2457f5]'
                  : 'text-[#667085] hover:bg-[#f8fafc] hover:text-[#1a2233]'
              }`}
            >
              <ChevronRight className={`mt-0.5 h-3.5 w-3.5 shrink-0 transition-colors ${activeId === item.id ? 'text-[#2457f5]' : 'text-[#cbd5e1]'}`} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Related Posts ────────────────────────────────────────────────────────────
const relatedPosts = [
  {
    date: 'February 22, 2026',
    title: '7 Ways Businesses Benefit from SEO Automation Using AI',
    excerpt: 'SEO has become more competitive than ever in 2026, with millions of websites fighting for the same top search positions.',
    slug: 'how-to-do-a-content-audit-in-90-minutes-using-ai-tools',
    category: 'AI Tools',
  },
  {
    date: 'January 23, 2026',
    title: '5 Common Digital Marketing Challenges in 2026 and How to Overcome Them',
    excerpt: 'In 2026, digital marketing has become more complex than ever. A significant percentage of marketers report increased difficulty managing campaigns.',
    slug: 'how-to-do-a-content-audit-in-90-minutes-using-ai-tools',
    category: 'Marketing',
  },
  {
    date: 'January 21, 2026',
    title: 'The Role of AI Tools in SEO Audits: What to Expect in 2026',
    excerpt: 'Remember when SEO audits meant drowning in spreadsheets for hours? Those days are fading fast.',
    slug: 'how-to-do-a-content-audit-in-90-minutes-using-ai-tools',
    category: 'AI Tools',
  },
]

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071225] pt-20 text-white">
      <div className="relative mx-auto max-w-[1200px] px-5 pb-10 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="dark" />
            <p className="mt-5 max-w-xs text-base leading-7 text-white/55">
              The all-in-one SEO content platform that helps you research, plan, and create content that ranks.
            </p>
          </div>
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-white/40">Product</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {['Features', 'Pricing', 'Keyword Research', 'Content Generation'].map((item) => (
                <li key={item}><Link href="/" className="transition-colors hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-white/40">Company</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {['About', 'Contact', 'Blog', 'Careers'].map((item) => (
                <li key={item}><Link href={item === 'Blog' ? '/blog' : '/'} className="transition-colors hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-white/40">Resources</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {['Documentation', 'API Reference', 'Help Center', 'Status'].map((item) => (
                <li key={item}><Link href="/" className="transition-colors hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm font-bold text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 RankPilot. All rights reserved.</span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} href="/" className="transition-colors hover:text-white">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ContentAuditPost() {
  const [activeId, setActiveId] = useState('')
  const articleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    const headings = articleRef.current?.querySelectorAll('h2[id], h3[id]')
    headings?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />

      {/* Hero / Article Header */}
      <section className="relative overflow-hidden bg-[#fbfaf4] pb-12 pt-36 sm:pt-40">
        <div className="absolute -left-28 -top-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,245,205,0.95)_0%,rgba(255,245,205,0.55)_42%,transparent_68%)]" />
        <div className="absolute left-0 top-0 h-full w-[56%] bg-[radial-gradient(circle_at_32%_52%,rgba(231,242,255,0.95)_0%,rgba(231,242,255,0.7)_36%,transparent_67%)]" />
        <div className="relative mx-auto max-w-[860px] px-5 sm:px-8">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#2457f5] transition-all duration-200 hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#7c3aed]/10 px-4 py-1.5 text-sm font-bold text-[#7c3aed]">
            Content Strategy
          </div>
          <h1 className="font-display mb-6 text-4xl font-black leading-tight tracking-[-0.04em] text-[#071225] sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            How to Do a Content Audit in 90 Minutes Using AI Tools
          </h1>
          <div className="flex items-center gap-5 text-sm text-[#94a3b8]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              April 11, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              12 min read
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="mx-auto max-w-[860px] px-5 sm:px-8">
        <div className="overflow-hidden rounded-[28px]">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/NXGboSFzGQESepeZ.webp"
            alt="Content audit dashboard showing analytics, keyword rankings and audit score on a laptop screen"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Article Body + Sidebar */}
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">

          {/* Article Content */}
          <article ref={articleRef} className="min-w-0">
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-a:text-[#2457f5] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1a2233] prose-li:text-[#4b5568]">

              <p className="lead text-xl leading-9 text-[#4b5568]">
                Most content audits never get finished. They start as a good idea, balloon into a weeks-long spreadsheet project, and quietly get abandoned somewhere around page 47 of a URL export. The result? Hundreds of underperforming posts that continue dragging down your domain authority while you keep publishing new content that faces an uphill battle from the start.
              </p>
              <p>
                There is a better way. This guide walks you through a focused, repeatable 90-minute content audit framework — one that uses <strong>RankPilot&apos;s AI tools</strong> to eliminate the most time-consuming parts of the process. By the end, you will have a prioritized action list you can act on this week, not a spreadsheet you will revisit in six months.
              </p>

              <h2 id="what-is-content-audit">What Is a Content Audit (and Why You Need One in 2026)</h2>
              <p>
                A content audit is a systematic review of every published page on your site — evaluating each one for performance, quality, and strategic value. The goal is not to judge your past writing. The goal is to identify which posts are worth improving, which should be merged, and which are actively hurting your site by diluting topical authority.
              </p>
              <p>
                In 2026, this matters more than ever. Google&apos;s quality signals have raised the bar significantly. Thin content, outdated statistics, and keyword cannibalization — where two of your own posts compete for the same search term — are no longer just missed opportunities. They are active ranking liabilities. A well-executed content audit addresses all three.
              </p>
              <p>
                The business case is straightforward: improving an existing post that already has impressions and some ranking history is almost always faster and higher-ROI than publishing a brand new post targeting the same keyword from scratch. Posts already ranking at position 4–10 that receive a targeted update see an average traffic lift of <strong>68% within 90 days</strong>. Posts at position 11–20 — the classic page-two trap — average a 41% lift after an update. Compare that to a new post targeting a competitive keyword, which averages just 8% traffic growth in the same window. The math strongly favors the audit-first approach.
              </p>

              {/* Stats callout */}
              <div className="not-prose my-8 grid gap-4 rounded-2xl bg-[#f0f5ff] p-6 sm:grid-cols-3">
                {[
                  { label: 'Positions 4–10 after update', value: '+68%', sub: 'avg. traffic lift in 90 days' },
                  { label: 'Positions 11–20 after update', value: '+41%', sub: 'avg. traffic lift in 90 days' },
                  { label: 'New post, competitive keyword', value: '+8%', sub: 'avg. traffic growth in 90 days' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-4xl font-black text-[#2457f5]">{stat.value}</p>
                    <p className="mt-1 text-sm font-bold text-[#1a2233]">{stat.label}</p>
                    <p className="text-xs text-[#94a3b8]">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <h2 id="before-you-start">Before You Start: What You Need</h2>
              <p>
                The 90-minute audit requires four things: a <Link href="/">RankPilot account</Link> (a free 14-day trial is available with no credit card required), Google Search Console connected to your site, your CMS login, and 90 uninterrupted minutes. That is it. No additional tools, no complex setup, no agency required.
              </p>
              <p>
                If you do not yet have RankPilot connected to your Google Search Console, that connection takes about five minutes to set up inside the platform. Once it is live, RankPilot begins pulling your site&apos;s keyword and performance data automatically.
              </p>

              <h2 id="step-1">Step 1 — Export Your Content Inventory (10 minutes)</h2>
              <p>
                Start by pulling a complete list of every published URL on your site. Inside RankPilot, the GSC Analyzer imports your sitemap and organizes all URLs automatically — no manual export required. You will see each URL alongside its title, publish date, and word count in a single organized view.
              </p>
              <p>
                If you are not yet using RankPilot, the manual fallback is to export your Performance report from Google Search Console (set the date range to the last 90 days and export all pages) or run a quick crawl using Screaming Frog. The key columns you need are: URL, page title, publish date, last updated date, and word count. Everything else comes in the next step.
              </p>

              <h2 id="step-2">Step 2 — Pull Performance Data with RankPilot&apos;s GSC Analyzer (15 minutes)</h2>
              <p>
                This is where RankPilot does the work that used to take hours. The GSC Analyzer pulls your site&apos;s full keyword and page performance data from Google Search Console and organizes it into an actionable view — impressions, clicks, average position, and click-through rate for every page, all in one place.
              </p>
              <p>As you scan through the data, you are looking for three specific patterns:</p>
              <ul>
                <li><strong>High impressions but low CTR</strong> — these are ranking but not getting clicked, which usually means the title tag or meta description needs improvement.</li>
                <li><strong>Pages sitting at position 8–20</strong> — these are your highest-priority quick win candidates, already on the edge of page one and needing only a targeted push.</li>
                <li><strong>Pages with zero impressions in the last 90 days</strong> — these are candidates for consolidation or removal.</li>
              </ul>
              <p>
                RankPilot surfaces all three of these patterns automatically in the Quick Win Keywords view, which means you are not hunting through rows of data manually. The tool flags the opportunities and lets you focus on decisions rather than data wrangling.
              </p>

              <h2 id="step-3">Step 3 — Use RankPilot to Score Content Quality and Find Gaps (20 minutes)</h2>
              <p>
                Performance data tells you how a post is doing. Quality scoring tells you why. This step uses RankPilot&apos;s keyword clustering feature to identify two of the most common and most fixable content problems: <strong>topical coverage gaps</strong> and <strong>keyword cannibalization</strong>.
              </p>
              <p>
                Topical coverage gaps occur when your post ranks for a keyword but fails to address the full range of subtopics that top-ranking competitors cover. RankPilot&apos;s content gap analysis compares your post against the top 10 ranking pages for your target keyword and highlights the specific sections and questions your content is missing. Adding those sections is often enough to move a position-12 post to position 4.
              </p>
              <p>
                Keyword cannibalization is the more insidious problem. It happens when two or more pages on your site target the same keyword cluster, causing Google to split ranking signals between them rather than concentrating authority on one strong page. RankPilot&apos;s keyword clustering groups your posts by semantic similarity, making cannibalization obvious — posts that belong in the same cluster are flagged together, and the fix becomes a clear decision rather than a guessing game.
              </p>

              <h2 id="step-4">Step 4 — Sort Every Post into Three Buckets (15 minutes)</h2>
              <p>
                By this point you have performance data and quality signals for every post. Now you sort. Every post on your site belongs in exactly one of three buckets:
              </p>

              <div className="not-prose my-8 space-y-4">
                {[
                  {
                    color: '#2457f5',
                    bg: '#eef4ff',
                    label: 'Update',
                    desc: 'Posts ranking at position 4–20 with impressions in GSC, but underperforming relative to their potential. These posts have proven keyword relevance and need stronger topical coverage, fresher data, or a better-optimized title and meta description.',
                  },
                  {
                    color: '#7c3aed',
                    bg: '#f5f0ff',
                    label: 'Consolidate',
                    desc: 'Posts targeting the same keyword cluster as another post on your site. Merge the weaker post into the stronger one, redirect the old URL with a 301, and let the combined authority work for a single, more comprehensive page.',
                  },
                  {
                    color: '#dc2626',
                    bg: '#fff5f5',
                    label: 'Remove',
                    desc: 'Posts with zero impressions for 90+ days, no meaningful backlinks, and no strategic purpose. Before removing, check for backlinks. If a post has inbound links worth preserving, redirect it. If it has nothing, deletion is the cleaner choice.',
                  },
                ].map((bucket) => (
                  <div key={bucket.label} className="flex gap-4 rounded-2xl p-5" style={{ background: bucket.bg }}>
                    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-black text-white" style={{ background: bucket.color }}>
                      {bucket.label[0]}
                    </div>
                    <div>
                      <p className="mb-1 font-display text-lg font-black" style={{ color: bucket.color }}>{bucket.label}</p>
                      <p className="text-sm leading-7 text-[#4b5568]">{bucket.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="step-5">Step 5 — Build Your Priority Action List Using Quick Win Keywords (15 minutes)</h2>
              <p>
                Your Update bucket likely has more posts than you can address in a week. This step is about ruthless prioritization. Inside RankPilot, the Quick Win Keywords view automatically ranks your update candidates by opportunity score — a composite of current position, search volume, and estimated traffic lift from a single update.
              </p>
              <p>
                Work from the top of that list. The posts at the top are the ones where a single focused update — adding a missing section, refreshing statistics, improving the title tag — will produce the fastest and largest traffic gains. Aim to identify your top five to ten priority posts in this step. That is your action list for the next two weeks.
              </p>
              <p>
                For each priority post, RankPilot generates a specific update brief: the exact keywords to target, the sections to add or expand, the competitors to reference, and the internal links to add. You are not guessing what to fix. You are executing a precise, data-driven improvement plan.
              </p>

              <h2 id="step-6">Step 6 — Set a Recurring Audit Schedule (5 minutes)</h2>
              <p>
                A one-time audit is useful. A recurring audit is a competitive advantage. The final five minutes of your 90-minute session are spent setting up a repeating audit cadence inside RankPilot so that the process runs automatically going forward.
              </p>
              <p>
                For most sites, a quarterly audit cadence is sufficient — once every 90 days, RankPilot re-scans your content inventory, refreshes the performance data, and surfaces new quick win opportunities. Sites publishing more than four posts per week may benefit from a monthly cadence. Sites with fewer than 50 published posts can often get away with a bi-annual review.
              </p>
              <p>
                The key is consistency. A content audit done once and forgotten is a wasted afternoon. A content audit done quarterly is a systematic process that compounds over time — each cycle improving the baseline that the next cycle builds on.
              </p>

              <h2 id="key-takeaways">Key Takeaways</h2>
              <div className="not-prose my-6 space-y-3">
                {[
                  'Improving existing posts that already rank is almost always faster and higher-ROI than publishing new content.',
                  'Posts at positions 4–20 are your highest-priority quick win candidates — they need only a targeted push to break through.',
                  'Keyword cannibalization is invisible without tooling. RankPilot\'s clustering makes it obvious.',
                  'Every post belongs in one of three buckets: Update, Consolidate, or Remove.',
                  'A recurring quarterly audit cadence compounds over time and is more valuable than any single audit.',
                  'The entire process takes 90 minutes with RankPilot. Without it, expect 8–12 hours.',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2457f5]" />
                    <p className="text-base leading-7 text-[#4b5568]">{point}</p>
                  </div>
                ))}
              </div>

              <h2 id="faq">Frequently Asked Questions</h2>

              <h3 className="font-display text-xl font-black text-[#071225]">How often should I do a content audit?</h3>
              <p>
                For most sites, quarterly is the right cadence. If you publish more than four posts per week, consider monthly. If you have fewer than 50 published posts, bi-annual is sufficient. The goal is to catch underperforming content before it becomes a drag on your domain authority.
              </p>

              <h3 className="font-display text-xl font-black text-[#071225]">Do I need RankPilot to do a content audit?</h3>
              <p>
                No — the manual process works, but it takes 8–12 hours instead of 90 minutes. You will need Google Search Console data, a crawl tool like Screaming Frog, and a spreadsheet to replicate what RankPilot does automatically. The 90-minute timeframe in this guide is specifically enabled by RankPilot&apos;s automation.
              </p>

              <h3 className="font-display text-xl font-black text-[#071225]">What is keyword cannibalization and how do I fix it?</h3>
              <p>
                Keyword cannibalization happens when two or more pages on your site target the same keyword cluster, causing Google to split ranking signals between them. The fix is to consolidate: merge the weaker post into the stronger one, redirect the old URL with a 301, and update internal links to point to the consolidated page.
              </p>

              <h3 className="font-display text-xl font-black text-[#071225]">Should I delete underperforming content?</h3>
              <p>
                Only if it has had zero impressions for 90+ days, has no meaningful backlinks, and serves no strategic purpose. Before deleting, always check for inbound links. If a post has links worth preserving, redirect it to the most relevant live page rather than deleting outright.
              </p>

              <h2 id="start-today">Start Your First Content Audit Today</h2>
              <p>
                The 90-minute content audit is not a shortcut. It is a smarter use of the data you already have. Most sites are sitting on dozens of posts that are one targeted update away from a meaningful traffic increase — posts that are already indexed, already have some ranking history, and just need a focused improvement to break through.
              </p>
              <p>
                RankPilot makes the process fast enough to actually finish. <Link href="/">Start your free 14-day trial</Link> and run your first audit today — no credit card required.
              </p>
            </div>

            {/* Inline CTA */}
            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#071225] p-8 text-white sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-2xl font-black sm:text-3xl">Start Your Free 14-Day RankPilot Trial</p>
                  <p className="mt-2 text-white/60">No credit card required. Cancel anytime.</p>
                </div>
                <Link
                  href="/"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2457f5] px-7 py-4 font-extrabold text-white shadow-[0_14px_35px_rgba(36,87,245,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]"
                >
                  <Zap className="h-4 w-4" />
                  Get Started Free
                </Link>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-[100px] space-y-6">
              <TableOfContents activeId={activeId} />

              {/* Mini CTA */}
              <div className="rounded-2xl bg-[#2457f5] p-6 text-white">
                <p className="font-display text-lg font-black leading-snug">Ready to audit your content?</p>
                <p className="mt-2 text-sm text-white/75">Start your free 14-day trial — no credit card required.</p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#2457f5] transition-all duration-200 hover:bg-[#eef4ff]"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      <section className="bg-[#f8fafc] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <h2 className="font-display mb-10 text-3xl font-black tracking-tight text-[#071225]">Related Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <motion.article
                key={post.slug + post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(16,24,40,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(29,99,255,0.13)]"
              >
                <div className="relative h-[160px] overflow-hidden bg-[#eef5ff]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-xl bg-[#2457f5]/20" />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-[#2457f5] px-3 py-1 text-xs font-bold text-white">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs text-[#94a3b8]">{post.date}</p>
                  <h3 className="font-display mb-3 text-lg font-black leading-snug text-[#071225] transition-colors group-hover:text-[#2457f5]">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-7 text-[#667085] line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2457f5] transition-all duration-200 hover:gap-3"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
