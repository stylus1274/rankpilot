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
  ChevronDown,
  Gauge,
  BarChart2,
  TrendingUp,
  Target,
  Users,
  ShoppingCart,
  Search,
  BookOpen,
  Compass,
} from 'lucide-react'

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
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Company</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">Resources</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/use-cases" className="hover:text-white">Use Cases</Link></li>
              <li><Link href="/blog/generative-engine-optimization-explained" className="hover:text-white">GEO Guide</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} RankPilot. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function SearchVolumeVsSearchIntent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Is search intent more important than search volume?',
      a: 'For most content strategies, yes. A keyword with 200 monthly searches and clear transactional intent will typically drive more conversions than a keyword with 20,000 searches and vague informational intent. Volume tells you the size of the audience. Intent tells you what that audience actually wants. Both matter, but intent should guide your content format and strategy while volume helps you prioritize.',
    },
    {
      q: 'How do I find the search intent of a keyword?',
      a: 'The most reliable method is to look at the top-ranking results for that keyword in Google. If the first page is dominated by blog posts and guides, the intent is informational. If it is full of product pages and category listings, the intent is transactional or commercial. If one brand\'s homepage dominates, the intent is navigational. The SERP itself is Google\'s best signal of what it believes users want.',
    },
    {
      q: 'Can the same keyword have multiple intents?',
      a: 'Yes, this is called mixed or blended intent. A query like "best running shoes" has both commercial intent (comparing products) and informational intent (learning what makes a good shoe). Google handles this by showing a mix of content types. When you encounter a keyword with blended intent, you can often address both angles in a single well-structured piece of content.',
    },
    {
      q: 'What happens if my content does not match search intent?',
      a: 'Google will likely rank your page lower over time, or not at all. Even if you temporarily rank, users who land on your page and immediately leave because it does not answer their question send a strong negative signal. High bounce rates and low dwell time tell Google that your content did not satisfy the query. This is called an intent mismatch, and it is one of the most common reasons technically solid content fails to rank.',
    },
    {
      q: 'Should I target low-volume, high-intent keywords?',
      a: 'Absolutely. Low-volume keywords with strong transactional or commercial intent are often the most valuable targets for businesses. A keyword like "buy project management software for small teams" may have only a few hundred monthly searches, but every person searching it is close to making a purchase decision. These keywords are also typically easier to rank for because fewer competitors have recognized their value.',
    },
    {
      q: 'How does search intent affect AI Overviews?',
      a: 'AI Overviews appear most frequently for informational queries. Google\'s AI is designed to synthesize answers to questions, so content that clearly addresses informational intent with well-structured, factual answers is more likely to be cited. Transactional queries are less likely to trigger AI Overviews, though this is changing as Google expands AI Mode to more query types.',
    },
  ]

  return (
    <>
      <Nav />
      <main className="bg-white pt-[78px]">

        {/* Hero */}
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
              <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-bold text-[#2457f5]">Keyword Research</span>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-display text-4xl font-black leading-tight text-[#071225] sm:text-5xl">
                The Difference Between Search Volume and Search Intent (And Why It Matters)
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> July 26, 2026</span>
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

        {/* Featured image */}
        <div className="mx-auto mt-10 max-w-[860px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/search-intent-hero-8m6taauxMuoU9Yd5rsYkzJ.png"
              alt="Search volume versus search intent comparison illustration showing a bar chart on the left and a brain with intent icons on the right"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Article body */}
        <article className="mx-auto mt-12 max-w-[860px] px-5 pb-24 sm:px-8">

          {/* Key Takeaways */}
          <div className="mb-10 rounded-2xl border border-[#bfdbfe] bg-[#eef4ff] p-6">
            <p className="mb-3 font-display text-base font-black text-[#2457f5]">Key Takeaways</p>
            <ul className="space-y-2">
              {[
                'Search volume measures how many people search for a keyword. Search intent explains why they are searching.',
                'There are four types of search intent: informational, navigational, commercial, and transactional.',
                'Google ranks content based on how well it satisfies intent, not just how well it matches keywords.',
                'A keyword with low volume and clear transactional intent can drive more revenue than a high-volume informational keyword.',
                'Intent mismatch is one of the most common reasons well-optimized content fails to rank.',
                'AI Overviews are most likely to appear for informational queries, making intent analysis critical for AI search visibility.',
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
              Open any keyword research tool and the first number you see is search volume. It is the most visible metric in SEO, the one that gets highlighted in reports and used to justify content decisions. But search volume is also one of the most misunderstood metrics in the industry. It tells you how many people are searching for a keyword. It tells you nothing about what those people actually want when they type it.
            </p>
            <p>
              That second question, what does the searcher actually want, is what search intent is about. And in 2026, with Google's algorithm more sophisticated than ever and AI Overviews reshaping how results are displayed, understanding intent is no longer optional. It is the foundation of any content strategy that works.
            </p>
            <p>
              This guide breaks down the difference between the two concepts, explains the four types of search intent, and shows you how to use both signals together to build content that ranks and converts. If you are already thinking about how to optimize for <Link href="/blog/generative-engine-optimization-explained">generative engine optimization</Link>, intent analysis is the place to start.
            </p>
          </div>

          {/* Stat cards */}
          <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: <BarChart2 className="h-5 w-5" />, stat: 'Volume', label: 'How many people search for a keyword per month', color: '#2457f5', bg: '#eef4ff' },
              { icon: <Target className="h-5 w-5" />, stat: 'Intent', label: 'Why those people are searching and what they want', color: '#7c3aed', bg: '#f5f3ff' },
              { icon: <TrendingUp className="h-5 w-5" />, stat: '4 types', label: 'Informational, navigational, commercial, transactional', color: '#16a34a', bg: '#f0fdf4' },
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

            <h2>What Is Search Volume?</h2>
            <p>
              Search volume is the average number of times a keyword is searched in a given month, typically measured across a specific country or globally. Tools like Google Keyword Planner, Ahrefs, and Semrush pull this data from search engine APIs and historical query logs to give you an estimate of demand.
            </p>
            <p>
              Volume is useful for prioritization. If you are choosing between two similar keywords, the one with higher volume represents a larger potential audience. It is also a reasonable proxy for topic popularity. A keyword with 50,000 monthly searches is almost certainly a more widely discussed subject than one with 200.
            </p>
            <p>
              The problem is that volume says nothing about what the searcher wants to do. Two keywords can have identical search volumes and completely different intents. "Running shoes" and "buy running shoes" might both show 10,000 monthly searches, but the person searching the first query is browsing and learning, while the person searching the second is ready to purchase. Treating them the same way in your content strategy is a mistake that costs rankings and conversions.
            </p>

            <h2>What Is Search Intent?</h2>
            <p>
              Search intent, also called user intent or keyword intent, is the underlying goal behind a search query. It is the answer to the question: what does this person actually want to find? Google has invested heavily in understanding intent because its core mission is to return results that satisfy the searcher, not just results that contain the right words.
            </p>
            <p>
              Since the Hummingbird algorithm update in 2013 and the BERT update in 2019, Google has moved away from pure keyword matching toward semantic understanding. It now evaluates whether a page satisfies the intent behind a query, not just whether the page contains the query's words. This shift is why pages that thoroughly answer a question often outrank pages that are technically optimized but miss the point of what the searcher was looking for.
            </p>

          </div>

          {/* Four types infographic */}
          <div className="my-10 overflow-hidden rounded-2xl border border-[#e8edf5]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/search-intent-four-types-PoVZLADaKLMcA5Ya7DmCBm.png"
              alt="The four types of search intent: informational, navigational, commercial, and transactional, each with example queries"
              className="w-full"
            />
            <p className="bg-[#f8fafc] px-5 py-3 text-center text-xs text-[#94a3b8]">The four types of search intent and example queries for each</p>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">
            <h2>The Four Types of Search Intent</h2>
            <p>
              SEO practitioners and Google itself recognize four primary categories of search intent. Understanding which category a keyword falls into tells you what type of content to create, how to structure it, and what the user needs to find before they will be satisfied.
            </p>
          </div>

          {/* Intent type cards */}
          <div className="my-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <BookOpen className="h-5 w-5" />,
                type: 'Informational',
                color: '#2457f5',
                bg: '#eef4ff',
                border: '#bfdbfe',
                description: 'The user wants to learn something. They are looking for answers, explanations, how-to guides, or definitions.',
                examples: ['what is search intent', 'how does Google rank pages', 'types of SEO'],
                content: 'Blog posts, guides, tutorials, FAQs, explainer videos',
              },
              {
                icon: <Compass className="h-5 w-5" />,
                type: 'Navigational',
                color: '#16a34a',
                bg: '#f0fdf4',
                border: '#bbf7d0',
                description: 'The user wants to reach a specific website, brand, or page. They already know where they want to go.',
                examples: ['Google Search Console login', 'RankPilot pricing', 'Ahrefs keyword explorer'],
                content: 'Homepage, login pages, brand pages, product pages',
              },
              {
                icon: <Search className="h-5 w-5" />,
                type: 'Commercial',
                color: '#d97706',
                bg: '#fffbeb',
                border: '#fde68a',
                description: 'The user is researching before making a decision. They are comparing options, reading reviews, and evaluating solutions.',
                examples: ['best SEO tools 2026', 'Ahrefs vs Semrush', 'keyword research tool review'],
                content: 'Comparison articles, reviews, best-of lists, case studies',
              },
              {
                icon: <ShoppingCart className="h-5 w-5" />,
                type: 'Transactional',
                color: '#7c3aed',
                bg: '#f5f3ff',
                border: '#ddd6fe',
                description: 'The user is ready to take action. They want to buy, sign up, download, or complete a specific task right now.',
                examples: ['buy keyword research tool', 'RankPilot free trial', 'download SEO checklist'],
                content: 'Product pages, pricing pages, landing pages, sign-up forms',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="rounded-2xl border p-5"
                style={{ backgroundColor: item.bg, borderColor: item.border }}
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <p className="font-display text-base font-black" style={{ color: item.color }}>{item.type}</p>
                </div>
                <p className="text-sm leading-7 text-[#4b5568]">{item.description}</p>
                <div className="mt-3">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#94a3b8]">Example queries</p>
                  <ul className="space-y-1">
                    {item.examples.map((ex, j) => (
                      <li key={j} className="text-xs text-[#4b5568]">"{ex}"</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 rounded-lg bg-white/60 px-3 py-2">
                  <p className="text-xs font-semibold text-[#4b5568]">Best content format: <span className="font-normal">{item.content}</span></p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">

            <h2>Why Volume Without Intent Is Dangerous</h2>
            <p>
              The classic SEO mistake is chasing high-volume keywords without considering what the searcher actually wants. A keyword with 50,000 monthly searches looks attractive in a spreadsheet. But if your content does not match what those 50,000 people are looking for, you will not rank for it, and even if you temporarily do, users will leave immediately.
            </p>
            <p>
              Google measures user satisfaction signals including dwell time, bounce rate, and pogo-sticking (when a user clicks your result, leaves quickly, and clicks a different result). When a page consistently fails to satisfy searchers, Google interprets this as evidence that the page is not a good match for the query and lowers its ranking accordingly. This is called an intent mismatch, and it is one of the most common reasons technically well-optimized content underperforms.
            </p>
            <p>
              Consider a concrete example. Imagine you write a detailed blog post about "running shoes" because the keyword has high volume. But the top-ranking results for "running shoes" are all product category pages from Nike, Adidas, and running specialty retailers. Google has determined that people searching this query want to browse and buy shoes, not read an article about them. Your blog post, no matter how well-written, is fighting against the intent signal Google has already established for that query. You are unlikely to rank, and if you do, visitors will leave quickly.
            </p>

          </div>

          {/* Intent mismatch infographic */}
          <div className="my-10 overflow-hidden rounded-2xl border border-[#e8edf5]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/search-intent-mismatch-CgmDRDmUXxZKu8jVRS53DV.png"
              alt="Side-by-side comparison of intent mismatch showing 85% bounce rate versus intent match showing 22% bounce rate for the query buy running shoes"
              className="w-full"
            />
            <p className="bg-[#f8fafc] px-5 py-3 text-center text-xs text-[#94a3b8]">Intent mismatch leads to high bounce rates and poor rankings. Intent match drives engagement and conversions.</p>
          </div>

          {/* Warning callout */}
          <div className="my-8 flex gap-4 rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#d97706]" />
            <div>
              <p className="font-display text-sm font-black text-[#92400e]">The Volume Trap</p>
              <p className="mt-1 text-sm leading-7 text-[#78350f]">
                High-volume keywords are often dominated by large brands with massive domain authority. Even if you match the intent perfectly, competing for a keyword with 100,000 monthly searches is a multi-year project for most sites. Lower-volume keywords with clear intent are often faster to rank for, easier to convert, and more strategically valuable for growing sites.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">

            <h2>How to Identify Search Intent for Any Keyword</h2>
            <p>
              The most reliable way to determine the intent behind a keyword is to look at the search engine results page (SERP) for that keyword. Google has already done the work of classifying intent. The types of pages that dominate the first page tell you exactly what Google believes searchers want.
            </p>
            <p>
              If the top results are blog posts, guides, and how-to articles, the intent is informational. If they are product pages and category listings, the intent is transactional or commercial. If one brand's homepage or login page appears at the top, the intent is navigational. The SERP is your most accurate intent signal, more reliable than any keyword tool's intent classification.
            </p>
            <p>
              Beyond the SERP, look at the "People Also Ask" boxes and related searches at the bottom of the page. These surfaces reveal the adjacent questions and concepts Google associates with the query, which helps you understand the full scope of what the searcher might be looking for. This is also useful for <Link href="/blog/on-page-seo-checklist-12-things-to-optimize">on-page SEO optimization</Link>, where covering related questions in your content signals topical completeness to Google.
            </p>

          </div>

          {/* Comparison table */}
          <div className="my-10 overflow-hidden rounded-2xl border border-[#e8edf5]">
            <div className="bg-[#071225] px-6 py-4">
              <p className="font-display text-base font-black text-white">Search Volume vs. Search Intent: A Practical Comparison</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e8edf5] bg-[#f8fafc]">
                    <th className="px-5 py-3 text-left font-bold text-[#071225]">Factor</th>
                    <th className="px-5 py-3 text-left font-bold text-[#2457f5]">Search Volume</th>
                    <th className="px-5 py-3 text-left font-bold text-[#7c3aed]">Search Intent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['What it measures', 'Monthly search frequency', 'The reason behind the search'],
                    ['Where to find it', 'Keyword research tools (Ahrefs, Semrush, GKP)', 'SERP analysis, PAA boxes, related searches'],
                    ['What it tells you', 'Size of the potential audience', 'What content format and angle to use'],
                    ['Risk of ignoring it', 'Missing high-opportunity topics', 'Creating content that does not rank or convert'],
                    ['Impact on rankings', 'Indirect (higher volume = more competition)', 'Direct (intent match is a core ranking signal)'],
                    ['Impact on conversions', 'None on its own', 'High (transactional intent drives purchases)'],
                    ['Role in AI Overviews', 'No direct role', 'Informational intent queries most likely to trigger AI Overviews'],
                  ].map(([factor, vol, intent], i) => (
                    <tr key={i} className={`border-b border-[#e8edf5] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}`}>
                      <td className="px-5 py-3.5 font-semibold text-[#071225]">{factor}</td>
                      <td className="px-5 py-3.5 text-[#4b5568]">{vol}</td>
                      <td className="px-5 py-3.5 text-[#4b5568]">{intent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Intent and buyer journey infographic */}
          <div className="my-10 overflow-hidden rounded-2xl border border-[#e8edf5]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/search-intent-funnel-ZWMXfCJEGM7h27mJoMUyyC.png"
              alt="Search intent mapped to the buyer journey funnel showing informational at the top, commercial in the middle, and transactional at the bottom"
              className="w-full"
            />
            <p className="bg-[#f8fafc] px-5 py-3 text-center text-xs text-[#94a3b8]">Search intent maps directly to the buyer journey. Each stage requires different content.</p>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">

            <h2>How Intent Maps to the Buyer Journey</h2>
            <p>
              One of the most practical frameworks for thinking about search intent is to map it to the stages of the buyer journey. Informational intent corresponds to the awareness stage. The searcher is learning about a problem or topic. They are not ready to buy, but they are open to being educated. This is where blog posts, guides, and explainer content live.
            </p>
            <p>
              Commercial intent corresponds to the consideration stage. The searcher knows what they need and is evaluating their options. Comparison articles, product reviews, and "best of" lists serve this intent. These searchers are closer to a decision and are actively looking for reasons to choose one solution over another.
            </p>
            <p>
              Transactional intent corresponds to the decision stage. The searcher is ready to act. They want a pricing page, a sign-up form, or a product page with a clear call to action. This is where your conversion-focused content lives. Navigational intent sits outside this funnel entirely because the searcher already knows what they want and is simply trying to find it.
            </p>
            <p>
              A complete content strategy covers all three funnel stages. Informational content builds awareness and earns backlinks. Commercial content captures searchers who are evaluating options. Transactional content converts. If your site only has one type, you are leaving traffic and revenue on the table. This is also the foundation of a strong <Link href="/blog/saas-content-moat-seo-3-hours-per-week">content moat strategy</Link> that compounds over time.
            </p>

            <h2>Search Intent and AI Overviews in 2026</h2>
            <p>
              The relationship between search intent and AI Overviews is one of the most important dynamics in SEO right now. Google's AI is designed to answer questions, which means it is primarily triggered by informational intent. When someone searches "how does photosynthesis work" or "what is search intent," Google generates an AI Overview that synthesizes an answer from multiple sources. Your content can be cited in that answer if it clearly addresses the informational intent behind the query.
            </p>
            <p>
              Transactional queries are much less likely to trigger AI Overviews. When someone searches "buy running shoes," Google knows they want to shop, not read an AI-generated summary. The results are product pages and shopping carousels, not an AI answer. This means that if your content strategy is heavily weighted toward transactional keywords, your AI Overview exposure will be limited.
            </p>
            <p>
              The practical implication is that informational content, which has historically been seen as "top of funnel" and less directly tied to revenue, is now also your primary vehicle for AI search visibility. A well-structured guide that clearly answers an informational query can appear in both organic results and AI Overviews simultaneously, giving you two points of exposure for the same piece of content. Understanding how <Link href="/blog/content-formats-google-ai-overviews">content formats affect AI Overview citations</Link> is the next step in building a strategy around this dynamic.
            </p>

            <h2>How to Use Both Signals Together</h2>
            <p>
              The right approach is not to choose between volume and intent. It is to use both signals in sequence. Start with intent to determine what type of content to create and what the searcher needs to find. Then use volume to prioritize which topics to tackle first and to estimate the potential traffic opportunity.
            </p>
            <p>
              A practical workflow looks like this. First, identify a topic area relevant to your business. Second, generate a list of related keywords using a research tool. Third, analyze the SERP for each keyword to determine its intent. Fourth, group keywords by intent type. Fifth, use volume to rank the opportunities within each intent group. Finally, create content that matches the intent of each keyword group, using the highest-volume keywords as your primary targets within each group.
            </p>
            <p>
              This approach prevents the most common mistake in keyword research, which is building a content calendar based entirely on volume and then wondering why the content does not rank. It also helps you build a balanced content library that covers the full buyer journey rather than clustering all your content in one intent category.
            </p>

          </div>

          {/* Pro tip callout */}
          <div className="my-8 flex gap-4 rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-5">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#16a34a]" />
            <div>
              <p className="font-display text-sm font-black text-[#14532d]">Pro Tip: Check the SERP Before You Write</p>
              <p className="mt-1 text-sm leading-7 text-[#166534]">
                Before writing any piece of content, search your target keyword in an incognito window and study the first page. Count how many results are blog posts versus product pages versus comparison articles. The ratio tells you exactly what content format Google rewards for that query. If eight of the top ten results are listicles, write a listicle. If they are all long-form guides, write a guide. Match the dominant format before you optimize anything else.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#071225] prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline">

            <h2>Common Intent Mistakes to Avoid</h2>
            <p>
              The most frequent error is writing informational content for transactional keywords. If someone searches "project management software pricing," they want a pricing page, not a blog post about the history of project management. Publishing a blog post for this query means you are competing against pricing pages, which Google overwhelmingly prefers for this intent. You will not rank, and even if you do, the visitor will not convert because you gave them the wrong thing.
            </p>
            <p>
              The reverse mistake is creating transactional content for informational queries. If someone searches "how to choose project management software," they are in research mode. A page that immediately pushes them to sign up for a trial will have a high bounce rate because it does not answer their question. The right approach is to answer the question thoroughly first, then include a natural call to action at the end for readers who are ready to move forward.
            </p>
            <p>
              A third common mistake is ignoring navigational intent entirely. If people are searching for your brand name, your competitors' brand names, or specific features of your product, these are navigational queries. Making sure your brand pages, feature pages, and comparison pages are well-optimized for navigational intent captures searchers who are already close to a decision.
            </p>

            <h2>Putting It Into Practice</h2>
            <p>
              The shift from volume-first to intent-first keyword research does not require a new tool. It requires a new habit: before you add any keyword to your content plan, look at the SERP and ask what the person searching this query actually wants. That question, asked consistently, will prevent most of the intent mismatches that cause content to underperform.
            </p>
            <p>
              For teams that want to scale this process, tools like RankPilot are designed to surface both the volume and the intent signals for keywords, so you can evaluate opportunities in one place rather than switching between a keyword tool and a browser. The goal is to make intent analysis a standard part of the research workflow, not an afterthought. You can see how this fits into a broader content workflow on our <Link href="/how-it-works">how it works page</Link>.
            </p>
            <p>
              Search volume will always matter. It is a measure of real demand, and demand is the foundation of any content opportunity. But volume without intent is like knowing how many people are in a room without knowing why they are there. Intent is what tells you what to say when you walk in.
            </p>

          </div>

          {/* CTA Banner */}
          <div className="my-12 overflow-hidden rounded-2xl bg-[#1d63ff] px-8 py-10">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-2xl font-black text-white">Build a Smarter Keyword Strategy</p>
                <p className="mt-2 text-sm leading-7 text-white/80">
                  RankPilot helps you research keywords with both volume and intent in mind, so you create content that ranks and converts.
                </p>
              </div>
              <Link
                href="/pricing"
                className="shrink-0 rounded-2xl bg-white px-6 py-3.5 font-bold text-[#1d63ff] transition-opacity hover:opacity-90"
              >
                Sign Up Free
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-14">
            <p className="mb-6 font-display text-2xl font-black text-[#071225]">Frequently Asked Questions</p>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-[#e8edf5]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-sm font-bold text-[#071225]">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-[#94a3b8] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-[#e8edf5] px-5 py-4 text-sm leading-7 text-[#4b5568]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Author */}
          <div className="mt-14 flex items-center gap-4 rounded-2xl border border-[#e8edf5] bg-[#f8fafc] p-6">
            <img
              src="https://rankpilot-fr9zunye.manus.space/manus-storage/charlie-headshot_dd8e4e37.png"
              alt="Charlie Boudreau"
              className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-white shadow-sm"
            />
            <div>
              <p className="font-display text-base font-black text-[#071225]">Charlie Boudreau</p>
              <p className="text-sm text-[#94a3b8]">Founder, RankPilot</p>
              <p className="mt-1 text-sm leading-6 text-[#4b5568]">Charlie writes about SEO strategy, AI search, and content marketing for the RankPilot blog.</p>
            </div>
          </div>

        </article>

        {/* Related Articles */}
        <section className="border-t border-[#e8edf5] bg-white py-16">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <div className="not-prose">
              <p className="mb-6 font-display text-2xl font-black text-[#071225]">Related Articles</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link href="/blog/on-page-seo-checklist-12-things-to-optimize" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="mb-3 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">On-Page SEO</span>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-[#2457f5]">On-Page SEO Checklist: 12 Things to Optimize on Every Page</p>
                </Link>
                <Link href="/blog/generative-engine-optimization-explained" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="mb-3 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">GEO</span>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-[#2457f5]">Generative Engine Optimization Explained: The Complete Guide</p>
                </Link>
                <Link href="/blog/content-formats-google-ai-overviews" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="mb-3 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">AI Overviews</span>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-[#2457f5]">Content Formats That Get Cited in Google AI Overviews</p>
                </Link>
                <Link href="/blog/what-are-semantic-keywords" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="mb-3 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">Keyword Research</span>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-[#2457f5]">What Are Semantic Keywords and Why Do They Matter for SEO?</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
