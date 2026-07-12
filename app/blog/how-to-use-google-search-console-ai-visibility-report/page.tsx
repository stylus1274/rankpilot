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
  BarChart2,
  Globe,
  Smartphone,
  FileText,
  Search,
  TrendingUp,
  Eye,
  Zap,
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
    slug: 'ai-overviews-zero-click-reality',
    category: 'AI Search',
    date: 'February 3, 2026',
    title: 'AI Overviews and the Zero-Click Reality: What SEOs Need to Know',
    excerpt: 'AI Overviews are changing how users interact with search results. Here is what the data says and how to adapt your strategy.',
  },
  {
    slug: 'generative-engine-optimization',
    category: 'AI Search',
    date: 'March 17, 2026',
    title: 'Generative Engine Optimization (GEO): How to Rank in AI Search',
    excerpt: 'GEO is the practice of optimizing content to appear in AI-generated answers. Here is what it means and how to do it.',
  },
  {
    slug: 'content-formats-google-ai-overviews',
    category: 'Content Strategy',
    date: 'April 28, 2026',
    title: 'Which Content Formats Get Cited in Google AI Overviews?',
    excerpt: 'Not all content formats are equally likely to appear in AI Overviews. Here is what the data shows about format, structure, and citation patterns.',
  },
]

export default function GscAiVisibilityReport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Why is the Generative AI tab not showing in my Search Console?',
      a: 'The report is still rolling out incrementally. Your property may not be included yet, or your site may not have generated enough AI impressions to trigger the report. Check that you have not opted out of AI features in your Search Console settings, and confirm that Google-Extended is allowed in your robots.txt file. If everything looks correct, you may simply need to wait for the rollout to reach your property.',
    },
    {
      q: 'Does the AI Visibility Report show clicks, not just impressions?',
      a: 'Currently, the report shows impressions only. Google has not yet added click data, CTR, or average position to the generative AI report. An impression is recorded each time a link to your site appears within an AI Overview or AI Mode result, regardless of whether the user clicked it.',
    },
    {
      q: 'What is the difference between AI Overviews and AI Mode impressions?',
      a: 'AI Overviews are the AI-generated summaries that appear above organic results for eligible queries. AI Mode is Google\'s fully AI-driven search experience, now available globally. Both generate impressions that appear in the same report, but they represent different user experiences. A page can appear in one, both, or neither.',
    },
    {
      q: 'What does a dotted line in the AI impressions chart mean?',
      a: 'Dotted lines in the chart indicate preliminary data that is still being collected and may change. Solid lines represent finalized data. When you see a dotted line at the end of your chart, it typically means the most recent days are still being processed.',
    },
    {
      q: 'How can I increase my AI impressions?',
      a: 'Focus on informational and how-to queries, which are more likely to trigger AI Overviews than transactional ones. Structure your content with clear headings, direct answers in the opening paragraph, and FAQ sections. Make sure Google-Extended is allowed in your robots.txt. Earning high-quality backlinks and maintaining strong on-page SEO fundamentals also increases the likelihood that Google\'s AI will draw from your content.',
    },
    {
      q: 'Is AI impressions data available for all countries?',
      a: 'The Countries dimension in the report shows where searches originated, so you can see geographic breakdowns of your AI impressions. However, AI Overviews and AI Mode availability varies by country and query type, so your data will reflect where these features are active for your content.',
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
              <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-bold text-[#2457f5]">AI Search</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-display text-4xl font-black leading-tight text-[#071225] sm:text-5xl">
                How to Use Google Search Console&apos;s New AI Visibility Report
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> July 12, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 9 min read</span>
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
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/gsc-ai-visibility-hero-UzcR5q3KkjJphvEpLVQmdR.webp"
              alt="Google Search Console AI Visibility Report dashboard showing AI Overviews and AI Mode impressions"
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
                'Google launched the Generative AI Performance Report on June 3, 2026. It is still rolling out incrementally.',
                'The report lives at Search Console > Performance > Generative AI and covers AI Overviews and AI Mode.',
                'It shows impressions only. Click data, CTR, and average position are not yet included.',
                'Four dimensions are available: Pages, Countries, Devices, and Dates.',
                'Dotted lines in the chart indicate preliminary data that may still change.',
                'To appear in the report, allow Google-Extended in robots.txt and target informational queries with clear structure.',
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
              For years, SEOs have been flying blind when it comes to AI search. You could see that AI Overviews were appearing for your target queries. You could watch your organic click-through rates decline. But you had no native tool inside Google Search Console to measure how often your content was actually being cited in those AI results. That changed on June 3, 2026, when Google launched the Generative AI Performance Report.
            </p>
            <p>
              The report gives site owners their first direct window into AI search visibility. It is not complete yet, and it does not answer every question you might have. But it is the most important new measurement tool Google has released for SEO since the Core Web Vitals report, and understanding how to read it is now a foundational skill for anyone managing search performance. This guide walks through exactly what the report shows, how to find it, how to interpret the data, and what to do with the insights you find.
            </p>
            <p>
              If you are already familiar with how AI Overviews are reshaping organic traffic, you know why this data matters. If you are newer to the topic, our breakdown of <Link href="/blog/ai-overviews-zero-click-reality">AI Overviews and the zero-click reality</Link> is a good place to start before diving into the measurement side.
            </p>
          </div>

          {/* Stat cards */}
          <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: <TrendingUp className="h-5 w-5" />, stat: 'June 3, 2026', label: 'Report launch date', color: '#2457f5', bg: '#eef4ff' },
              { icon: <Eye className="h-5 w-5" />, stat: 'Impressions only', label: 'No clicks or CTR yet', color: '#7c3aed', bg: '#f5f3ff' },
              { icon: <BarChart2 className="h-5 w-5" />, stat: '4 dimensions', label: 'Pages, Countries, Devices, Dates', color: '#16a34a', bg: '#f0fdf4' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="rounded-2xl border border-[#e8edf5] p-5"
                style={{ backgroundColor: card.bg }}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ backgroundColor: card.color }}>
                  {card.icon}
                </div>
                <p className="font-display text-xl font-black" style={{ color: card.color }}>{card.stat}</p>
                <p className="mt-1 text-sm text-[#4b5568]">{card.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">
            <h2>Where to Find the Report</h2>
            <p>
              The report is located inside Google Search Console under <strong>Performance &gt; Generative AI</strong>. If you do not see a Generative AI tab in your Performance section, your property has not yet been included in the rollout. Google is releasing access incrementally and reviewing feedback as it goes. John Mueller from Google confirmed on Bluesky that the rollout is intentionally gradual: "We are just rolling these out incrementally to sites, and reviewing the feedback along the way."
            </p>
            <p>
              There are three reasons a property might not show the report. First, the rollout simply has not reached it yet. Second, the site has not generated enough AI impressions to produce meaningful data. Third, the site has been configured to opt out of generative AI features in Search Console settings. You can check and adjust the AI feature settings directly inside Search Console to confirm your site is eligible to appear.
            </p>
          </div>

          {/* Workflow infographic */}
          <div className="my-10 overflow-hidden rounded-2xl border border-[#e8edf5]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/gsc-ai-report-workflow-NEGTjiswv62N6D7CDLDemw.webp"
              alt="Step-by-step workflow for using the Google Search Console AI Performance Report"
              className="w-full"
            />
            <p className="bg-[#f8fafc] px-5 py-3 text-center text-xs text-[#94a3b8]">The 5-step workflow for accessing and using the AI Performance Report in Search Console</p>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">
            <h2>What the Report Measures</h2>
            <p>
              The Generative AI Performance Report tracks one metric: <strong>impressions</strong>. An impression is recorded each time a link to your site appears within a generative AI result during a search session. This is a fundamentally different measurement from organic impressions in the standard Search performance report. A page can generate AI impressions without appearing in the top organic results, and a page that ranks number one organically may generate zero AI impressions if Google does not draw from it for AI-generated answers.
            </p>
            <p>
              The report currently covers two features. AI Overviews are the AI-generated summaries that appear above organic results for eligible queries. AI Mode is Google's fully AI-driven search experience, now available globally. Google has confirmed that the list of covered features will expand as new generative AI experiences are developed in Search. A separate report covers AI impressions from Google Discover.
            </p>
          </div>

          {/* Comparison table: AI Overviews vs AI Mode */}
          <div className="my-10 overflow-hidden rounded-2xl border border-[#e8edf5]">
            <div className="bg-[#071225] px-6 py-4">
              <p className="font-display text-base font-black text-white">AI Overviews vs. AI Mode: Key Differences</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e8edf5] bg-[#f8fafc]">
                    <th className="px-5 py-3 text-left font-bold text-[#071225]">Feature</th>
                    <th className="px-5 py-3 text-left font-bold text-[#2457f5]">AI Overviews</th>
                    <th className="px-5 py-3 text-left font-bold text-[#7c3aed]">AI Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8edf5]">
                  {[
                    ['Appearance', 'Above organic results for eligible queries', 'Replaces the traditional results page entirely'],
                    ['User experience', 'Summary with source links below organic results', 'Fully AI-driven conversational search interface'],
                    ['Availability', 'Most markets, expanding', 'Global rollout completed 2026'],
                    ['Query types', 'Informational and how-to queries', 'Broad range including complex, multi-step queries'],
                    ['Source attribution', 'Links shown below the AI summary', 'Citations embedded within the AI response'],
                    ['Impression tracking', 'Yes, in GSC Generative AI report', 'Yes, in GSC Generative AI report'],
                    ['Click tracking in GSC', 'Not yet available', 'Not yet available'],
                  ].map(([feature, aiOverviews, aiMode], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
                      <td className="px-5 py-3 font-semibold text-[#071225]">{feature}</td>
                      <td className="px-5 py-3 text-[#4b5568]">{aiOverviews}</td>
                      <td className="px-5 py-3 text-[#4b5568]">{aiMode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dimensions infographic */}
          <div className="my-10 overflow-hidden rounded-2xl border border-[#e8edf5]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/gsc-ai-report-dimensions-BCfH4MAxbhqxSQodNk4CGQ.webp"
              alt="The 4 dimensions of the Google Search Console AI Performance Report: Pages, Countries, Devices, Dates"
              className="w-full"
            />
            <p className="bg-[#f8fafc] px-5 py-3 text-center text-xs text-[#94a3b8]">The four dimensions available in the AI Performance Report</p>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">
            <h2>Reading the Four Dimensions</h2>
            <p>
              The report lets you slice AI impression data across four dimensions. Each one answers a different question about your AI visibility, and the most useful analysis comes from combining them.
            </p>
          </div>

          {/* Dimension cards */}
          <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                icon: <FileText className="h-5 w-5" />,
                title: 'Pages',
                color: '#2457f5',
                bg: '#eef4ff',
                border: '#bfdbfe',
                body: 'Groups impressions by the final URL shown in the AI result, assigned to the canonical URL after any redirects. This is the most actionable dimension because it tells you exactly which content Google\'s AI is drawing from. Pages with high AI impressions are your strongest candidates for further optimization.',
              },
              {
                icon: <Globe className="h-5 w-5" />,
                title: 'Countries',
                color: '#0891b2',
                bg: '#ecfeff',
                border: '#a5f3fc',
                body: 'Shows where the searches originated. This is particularly useful for sites targeting multiple markets. If your AI impressions are concentrated in one country but your organic traffic is global, it may indicate that AI features are more active in certain markets or that your content resonates differently across regions.',
              },
              {
                icon: <Smartphone className="h-5 w-5" />,
                title: 'Devices',
                color: '#7c3aed',
                bg: '#f5f3ff',
                border: '#ddd6fe',
                body: 'Breaks down impressions by desktop, tablet, or mobile. AI Overviews and AI Mode behave differently on different screen sizes, and user behavior in AI search varies by device. If mobile AI impressions are significantly lower than desktop, it may point to mobile-specific content or rendering issues worth investigating.',
              },
              {
                icon: <Calendar className="h-4 w-4" />,
                title: 'Dates',
                color: '#ea580c',
                bg: '#fff7ed',
                border: '#fed7aa',
                body: 'Displays data by day, week, or month in Pacific Time, consistent with the standard performance report. Use this dimension to track how your AI visibility changes over time, especially after publishing new content, making structural changes, or following a Google algorithm update that affects AI features.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="rounded-2xl border p-5"
                style={{ backgroundColor: card.bg, borderColor: card.border }}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl text-white" style={{ backgroundColor: card.color }}>
                  {card.icon}
                </div>
                <p className="mb-2 font-display text-base font-black" style={{ color: card.color }}>{card.title}</p>
                <p className="text-sm leading-7 text-[#4b5568]">{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Dotted line callout */}
          <div className="my-8 flex gap-4 rounded-2xl border border-[#bfdbfe] bg-[#eef4ff] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#2457f5]" />
            <div>
              <p className="font-bold text-[#2457f5]">What Dotted Lines Mean</p>
              <p className="mt-1 text-sm leading-7 text-[#4b5568]">Dotted lines in the AI impressions chart indicate preliminary data that is still being collected and may change. Solid lines represent finalized data. When you see a dotted line at the end of your chart, the most recent days are still being processed. Do not make major strategic decisions based on dotted-line data alone.</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">
            <h2>How to Interpret the Data</h2>
            <p>
              The most important thing to understand about AI impressions is that they are not a substitute for organic clicks. A page can generate thousands of AI impressions and drive very little referral traffic, because AI Overviews often answer the user's question directly without requiring a click. This is the zero-click dynamic that has been reshaping SEO strategy for the past two years.
            </p>
            <p>
              The right way to use this report is to compare AI impressions against your organic click data from the standard Search performance report. Pages with high AI impressions but declining organic clicks are likely being cited in AI results that satisfy the query without a click. This is not necessarily bad, since appearing in AI results still builds brand visibility and authority, but it does mean those pages are less efficient at driving direct traffic than they used to be.
            </p>
            <p>
              Pages with high AI impressions and stable or growing organic clicks are your best performers. They are appearing in AI results and still compelling users to click through. Study what makes those pages different. They are likely structured clearly, answer the query directly, and provide enough depth that users want to read the full piece. For a deeper look at which structural elements drive AI citations, our analysis of <Link href="/blog/content-formats-google-ai-overviews">content formats that get cited in Google AI Overviews</Link> covers the data in detail.
            </p>
            <p>
              Pages with zero AI impressions despite strong organic rankings are worth investigating. They may be targeting transactional queries that rarely trigger AI features, or they may have structural issues that make it harder for Google's AI to extract and cite their content. The fix is usually not a complete rewrite. Adding a clear introductory summary, restructuring with descriptive H2 and H3 headings, and adding a FAQ section at the bottom are often enough to shift a page from invisible to cited in AI results.
            </p>
          </div>

          {/* Mid-article CTA */}
          <div className="my-14 overflow-hidden rounded-2xl bg-gradient-to-br from-[#2457f5] to-[#1d3fc4] p-8 text-white">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl font-black">Start Ranking in AI Search</p>
                <p className="mt-1.5 text-sm leading-7 text-white/75">RankPilot helps you research, plan, and publish content that gets cited in AI Overviews and ranks in organic search. Try it free.</p>
              </div>
              <Link href="/pricing" className="not-prose inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#2457f5] transition-opacity hover:opacity-90">
                Sign Up Free
              </Link>
            </div>
          </div>

          {/* Report limitations callout */}
          <div className="my-8 flex gap-4 rounded-2xl border border-[#fecaca] bg-[#fff1f1] p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#dc2626]" />
            <div>
              <p className="font-bold text-[#dc2626]">What the Report Does Not Show</p>
              <p className="mt-1 text-sm leading-7 text-[#4b5568]">The current version of the report does not include click data, CTR, average position, or query-level data. It also does not cover Search Labs experiments or the Gemini app. Data is capped at 1,000 rows per dimension, the same limit as the standard Search performance report. Google has indicated these limitations will be addressed in future updates.</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">
            <h2>How to Improve Your AI Visibility</h2>
            <p>
              Improving your AI impressions is largely an extension of good SEO practice, but with a few specific adjustments that matter more for generative AI than for traditional search. The core principle is the same: create content that clearly and authoritatively answers questions people are actually asking. The execution, however, requires more attention to structure and extractability.
            </p>
            <p>
              The first step is confirming that Google can access your content for AI features. Check your robots.txt file to ensure that Google-Extended is not blocked. Google-Extended is the crawler Google uses specifically for generative AI training and citation. If it is blocked, your pages will not appear in AI results regardless of how well-optimized they are. You can verify this in your Search Console settings under the AI features controls.
            </p>
            <p>
              Beyond access, the content itself needs to be structured for extractability. Google's AI systems favor pages that answer questions directly in the first paragraph, use descriptive headings that match the language of the query, and include FAQ sections that address follow-up questions. These are the same structural principles that drive featured snippet eligibility, and they translate directly to AI citation likelihood. Our guide to <Link href="/blog/generative-engine-optimization">generative engine optimization</Link> covers the full framework for structuring content to appear in AI-generated answers.
            </p>
            <p>
              Query targeting also matters. Informational and how-to queries are far more likely to trigger AI Overviews and AI Mode responses than transactional queries. If your site is primarily focused on commercial or product pages, you may see lower AI impressions overall. Building out a content library of informational articles that target the questions your customers ask before they are ready to buy is one of the most effective ways to increase AI visibility while also building topical authority. RankPilot's <Link href="/features">keyword research and content planning tools</Link> are designed specifically to help you identify those informational query opportunities and build content around them systematically.
            </p>
          </div>

          {/* Optimization checklist */}
          <div className="my-10 rounded-2xl border border-[#e8edf5] bg-[#f8fafc] p-6">
            <p className="mb-4 font-display text-base font-black text-[#071225]">AI Visibility Optimization Checklist</p>
            <div className="space-y-3">
              {[
                { item: 'Confirm Google-Extended is allowed in robots.txt', status: 'critical' },
                { item: 'Verify AI features are not opted out in Search Console settings', status: 'critical' },
                { item: 'Add a direct answer to the primary question in the first paragraph', status: 'high' },
                { item: 'Use descriptive H2 and H3 headings that match query language', status: 'high' },
                { item: 'Add a FAQ section addressing follow-up questions', status: 'high' },
                { item: 'Target informational and how-to queries, not just transactional ones', status: 'medium' },
                { item: 'Build topical authority with a cluster of related informational content', status: 'medium' },
                { item: 'Add Article schema markup with author and publish date', status: 'medium' },
                { item: 'Earn authoritative backlinks to signal trustworthiness to AI systems', status: 'medium' },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
                    row.status === 'critical' ? 'bg-[#fee2e2] text-[#dc2626]' :
                    row.status === 'high' ? 'bg-[#fef3c7] text-[#d97706]' :
                    'bg-[#f0fdf4] text-[#16a34a]'
                  }`}>
                    {row.status === 'critical' ? 'Critical' : row.status === 'high' ? 'High' : 'Medium'}
                  </span>
                  <span className="text-sm text-[#4b5568]">{row.item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">
            <h2>Connecting AI Impressions to Business Outcomes</h2>
            <p>
              AI impressions are a visibility metric, not a business outcome metric. The gap between the two is where most of the strategic work happens. A page with 50,000 AI impressions and 200 organic clicks is generating enormous brand exposure but minimal direct traffic. Whether that is a problem depends entirely on what that page is trying to do.
            </p>
            <p>
              For top-of-funnel informational content, high AI impressions with low clicks may be perfectly acceptable. The goal of that content is to build awareness and establish authority, not to drive immediate conversions. The AI result is doing that work for you, at scale, without requiring a click. The question to ask is whether brand searches or direct traffic are increasing as a result.
            </p>
            <p>
              For content that is supposed to drive conversions, a high AI impression count with low clicks is a signal worth investigating. It may mean the AI result is fully satisfying the query, leaving users with no reason to visit your site. In those cases, the content strategy needs to shift. Rather than targeting queries that AI can fully answer in a summary, focus on queries where the value is in the depth, the tool, or the specific expertise that only your site provides. Understanding the full picture of <Link href="/how-it-works">how RankPilot tracks and improves content performance</Link> can help you connect AI visibility data to the metrics that actually drive revenue.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="my-10 border-l-4 border-[#2457f5] pl-6">
            <p className="font-display text-xl font-black leading-snug text-[#071225]">"AI impressions are a visibility metric, not a business outcome metric. The gap between the two is where most of the strategic work happens."</p>
          </blockquote>

          {/* Tip callout */}
          <div className="my-8 flex gap-4 rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-5">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
            <div>
              <p className="font-bold text-[#16a34a]">Pro Tip: Build a Comparison Dashboard</p>
              <p className="mt-1 text-sm leading-7 text-[#4b5568]">Export your AI impressions data alongside your standard Search performance data and compare them in a spreadsheet or BI tool. Pages where AI impressions are rising while organic clicks are falling are your highest-priority optimization targets. Pages where both are rising are your content models to replicate.</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">
            <h2>What to Expect as the Report Evolves</h2>
            <p>
              Google has been explicit that the Generative AI Performance Report is a first version, not a finished product. Several additions are likely in the near term. Click data is the most requested feature, and Google has acknowledged the gap. Query-level data, which would show you which specific search queries are triggering AI results that cite your pages, would be transformative for content strategy and is almost certainly on the roadmap.
            </p>
            <p>
              Coverage will also expand. The current report covers AI Overviews and AI Mode. As Google continues to develop new generative AI experiences in Search, those will likely be added to the same reporting framework. The Discover AI report is already separate, and future features may follow the same pattern or be consolidated into a single unified AI performance view.
            </p>
            <p>
              The data retention and row limits will likely improve as well. The current 1,000-row cap and standard time period constraints are the same as the traditional Search performance report, which has always been a frustration for large sites. As Google's infrastructure for AI reporting matures, these limits may expand. For now, the most important thing is to start tracking your AI impressions baseline so you have historical data to compare against when new features and metrics are added.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-14">
            <p className="mb-6 font-display text-2xl font-black text-[#071225]">Frequently Asked Questions</p>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="overflow-hidden rounded-2xl border border-[#e8edf5]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="font-semibold text-[#071225]">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-[#94a3b8] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
                        <p className="border-t border-[#e8edf5] px-6 py-4 text-sm leading-7 text-[#4b5568]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-14 overflow-hidden rounded-2xl bg-gradient-to-br from-[#071225] to-[#0f2040] p-8 text-white">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-2xl font-black">Ready to Grow Your AI Search Visibility?</p>
                <p className="mt-2 text-sm leading-7 text-white/70">RankPilot helps you identify the content opportunities that drive AI impressions and organic rankings at the same time. See how it works with a free trial.</p>
              </div>
              <Link href="/pricing" className="not-prose inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2457f5] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90">
                Start Free Trial
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <p className="mb-6 font-display text-2xl font-black text-[#071225]">Related Articles</p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl border border-[#e8edf5] bg-white p-5 transition-shadow hover:shadow-md">
                  <span className="rounded-full bg-[#eef4ff] px-2.5 py-1 text-xs font-bold text-[#2457f5]">{post.category}</span>
                  <p className="mt-3 font-display text-sm font-black leading-snug text-[#071225] group-hover:text-[#2457f5] transition-colors">{post.title}</p>
                  <p className="mt-2 text-xs leading-6 text-[#94a3b8]">{post.excerpt}</p>
                  <p className="mt-3 text-xs font-semibold text-[#94a3b8]">{post.date}</p>
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
