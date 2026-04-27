'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Calendar,
  Clock,
  Gauge,
  Zap,
  Play,
  Menu,
  X,
} from 'lucide-react'

// ─── Design tokens (matches rankpilot-landing.tsx) ───────────────────────────
// Font: Plus Jakarta Sans (--font-display) + DM Sans (--font-sans)
// Primary: #2457f5  Dark: #071225 / #1a2233  Body: #4b5568 / #667085
// Background: #fbfaf4  Cards: white  Border-radius: 28px cards, pill tabs
// ─────────────────────────────────────────────────────────────────────────────

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
}

type Post = {
  category: string
  date: string
  readTime: string
  title: string
  excerpt: string
  slug: string
}

const posts: Post[] = [
  {
    category: 'Content Strategy',
    date: 'April 11, 2026',
    readTime: '12 min read',
    title: 'How to Do a Content Audit in 90 Minutes Using AI Tools',
    excerpt:
      'Most content audits never get finished. They start as a good idea, balloon into a weeks-long spreadsheet project, and quietly get abandoned. This guide shows you how to complete a focused, actionable content audit in 90 minutes — using RankPilot\'s AI tools to do the heavy lifting.',
    slug: 'content-audit-90-minutes-ai-tools',
  },
  {
    category: 'AI Tools',
    date: 'February 22, 2026',
    readTime: '10 min read',
    title: '7 Ways Businesses Benefit from SEO Automation Using AI',
    excerpt:
      'SEO has become more competitive than ever in 2026, with millions of websites fighting for the same top search positions. Small and medium businesses are struggling to keep up with the constant algorithm updates, technical requirements, and content demands that modern search engines require.',
    slug: '7-ways-businesses-benefit-seo-automation-ai',
  },
  {
    category: 'Marketing',
    date: 'January 23, 2026',
    readTime: '10 min read',
    title: '5 Common Digital Marketing Challenges in 2026 and How to Overcome Them',
    excerpt:
      'In 2026, digital marketing has become more complex than ever. According to recent industry reports, a significant percentage of marketers report increased difficulty managing campaigns, thanks to evolving AI algorithms and stricter privacy rules.',
    slug: '5-digital-marketing-challenges-2026',
  },
  {
    category: 'AI Tools',
    date: 'January 21, 2026',
    readTime: '8 min read',
    title: 'The Role of AI Tools in SEO Audits: What to Expect in 2026',
    excerpt:
      'Remember when SEO audits meant drowning in spreadsheets for hours? Those days are fading fast. AI is here to automate the grunt work, and SEO pros aren\'t just dabbling. Most are already hooked on AI-powered tools and showing no signs of slowing down in 2026.',
    slug: 'ai-tools-seo-audits-2026',
  },
  {
    category: 'Local SEO',
    date: 'January 20, 2026',
    readTime: '9 min read',
    title: 'How to Use AI Tools to Optimize Your Google My Business Listing',
    excerpt:
      'Your Google Business Profile is often the first place customers see your business online. It shows your hours, reviews, location, and key info that can influence whether someone clicks or keeps scrolling.',
    slug: 'ai-tools-google-my-business-optimization',
  },
  {
    category: 'GEO/AIO',
    date: 'January 19, 2026',
    readTime: '16 min read',
    title: 'Generative Engine Optimization Explained: What GEO Is and How AI Overviews Use Content',
    excerpt:
      'Search is still doing the same core job it always has. Helping people find useful information. But the interface between searcher and answer is changing fast — and GEO is how you stay visible.',
    slug: 'generative-engine-optimization-explained',
  },
  {
    category: 'GEO/AIO',
    date: 'January 18, 2026',
    readTime: '14 min read',
    title: 'AI Overviews and the Zero Click Reality',
    excerpt:
      'SEO dashboards are telling a strange story lately. Impressions are rising. Clicks are falling. CTR is trending down. Rankings often look stable or improved, yet organic traffic feels softer and performance questions start piling up.',
    slug: 'ai-overviews-zero-click-reality',
  },
  {
    category: 'Google Search Console',
    date: 'January 10, 2026',
    readTime: '7 min read',
    title: 'Google Keyword Planner: How to Use It for Smarter Keyword Research',
    excerpt:
      'Google Keyword Planner is a free tool inside Google Ads that helps you discover new keyword ideas, estimate search volume, and understand seasonal demand — all without spending a cent.',
    slug: 'google-keyword-planner-smarter-research',
  },
  {
    category: 'GEO/AIO',
    date: 'January 8, 2026',
    readTime: '9 min read',
    title: "Proven Content Formats That Perform Well in Google's AI Overviews",
    excerpt:
      "Google's AI Overviews are changing how content gets seen and used. Instead of linking out to a single source, these summaries pull structured answers from multiple pages and piece together a complete response directly in the search result.",
    slug: 'content-formats-google-ai-overviews',
  },
]

const categories = ['All', 'AI Tools', 'Marketing', 'Local SEO', 'GEO/AIO', 'Google Search Console', 'Content Strategy']

// Category colour accents
const categoryColor: Record<string, string> = {
  'Content Strategy': '#7c3aed',
  'AI Tools': '#2457f5',
  'Marketing': '#0891b2',
  'Local SEO': '#059669',
  'GEO/AIO': '#d97706',
  'Google Search Console': '#dc2626',
}

function smoothScrollTo(href: string) {
  if (typeof window === 'undefined') return
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const textClass = variant === 'dark' ? 'text-white' : 'text-[#101828]'
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1c6bff]`}>
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

function BlogCard({ post }: { post: Post }) {
  const accent = categoryColor[post.category] ?? '#2457f5'
  return (
    <motion.article
      variants={reveal}
      className="group flex flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(16,24,40,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(29,99,255,0.13)]"
    >
      {/* Image placeholder area */}
      <div className="relative h-[200px] overflow-hidden bg-[#eef5ff]">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: `radial-gradient(circle at 30% 50%, ${accent}, transparent 70%)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-2xl opacity-20" style={{ background: accent }} />
        </div>
        {/* Category badge */}
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white"
          style={{ background: accent }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-4 text-sm text-[#94a3b8]">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
        <h2 className="font-display mb-3 text-xl font-black leading-snug tracking-tight text-[#071225] transition-colors duration-200 group-hover:text-[#2457f5]">
          {post.title}
        </h2>
        <p className="mb-5 flex-1 text-base leading-7 text-[#667085] line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#2457f5] transition-all duration-200 hover:gap-3"
        >
          Read Article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  )
}

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="bg-[#f0f5ff] py-20">
      <div className="mx-auto max-w-[680px] px-5 text-center sm:px-8">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
          <h2 className="font-display mb-4 text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
            Stay Ahead of the SEO Curve
          </h2>
          <p className="mb-8 text-lg leading-8 text-[#667085]">
            Get the latest insights on AI-powered SEO, content strategy, and ranking tactics delivered to your inbox.
          </p>
          {submitted ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2457f5] px-8 py-4 text-base font-bold text-white">
              <Zap className="h-4 w-4" />
              You&apos;re subscribed — welcome aboard!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full flex-1 rounded-lg border border-[#d6dce8] bg-white px-5 py-4 text-base text-[#1a2233] placeholder-[#94a3b8] shadow-[0_4px_16px_rgba(16,24,40,0.05)] outline-none transition focus:border-[#2457f5] focus:ring-2 focus:ring-[#2457f5]/20"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#2457f5] px-8 py-4 text-base font-extrabold text-white shadow-[0_14px_35px_rgba(36,87,245,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071225] pt-20 text-white">
      <div className="relative mx-auto max-w-[1200px] px-5 pb-10 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="dark" />
            <p className="mt-5 max-w-xs text-base leading-7 text-white/55">
              The all-in-one SEO content platform that helps you research, plan, and create content that ranks.
            </p>
          </div>
          {/* Product */}
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-white/40">Product</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {['Features', 'Pricing', 'Keyword Research', 'Content Generation'].map((item) => (
                <li key={item}>
                  <Link href="/" className="transition-colors hover:text-white">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-white/40">Company</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {['About', 'Contact', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Blog' ? '/blog' : '/'} className="transition-colors hover:text-white">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-white/40">Resources</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {['Documentation', 'API Reference', 'Help Center', 'Status'].map((item) => (
                <li key={item}>
                  <Link href="/" className="transition-colors hover:text-white">{item}</Link>
                </li>
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

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fbfaf4] pb-16 pt-36 sm:pb-20 sm:pt-40">
        {/* Background blobs — same as landing hero */}
        <div className="absolute -left-28 -top-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,245,205,0.95)_0%,rgba(255,245,205,0.55)_42%,transparent_68%)]" />
        <div className="absolute left-0 top-0 h-full w-[56%] bg-[radial-gradient(circle_at_32%_52%,rgba(231,242,255,0.95)_0%,rgba(231,242,255,0.7)_36%,transparent_67%)]" />
        <div className="absolute right-[20%] top-0 h-[360px] w-[520px] rounded-b-full bg-[linear-gradient(115deg,rgba(234,243,255,0.96),rgba(234,243,255,0.2)_72%)]" />
        <div className="absolute -bottom-48 right-[-80px] h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,225,211,0.8)_0%,rgba(255,225,211,0.45)_45%,transparent_72%)]" />

        <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#bdd7ff] bg-[#edf6ff]/80 px-5 py-2 text-sm font-bold text-[#1d63ff] shadow-[0_10px_30px_rgba(29,99,255,0.08)] backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              <span>RankPilot Blog</span>
            </div>
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-black tracking-[-0.055em] text-[#1a2233] sm:text-6xl lg:text-[68px] lg:leading-[0.97]">
              Practical SEO for{' '}
              <span className="block text-[#2457f5]">Sustainable Growth</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-[#4b5568] sm:text-2xl sm:leading-9">
              Actionable insights on AI-powered optimization, content strategy, and technical SEO that help you get more traffic without guessing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[78px] z-40 border-b border-[#e8edf5] bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#2457f5] text-white shadow-[0_8px_20px_rgba(36,87,245,0.25)]'
                    : 'bg-[#f4f8ff] text-[#25324b] hover:bg-[#e8f0ff] hover:text-[#2457f5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#f8fafc] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <motion.div
            key={activeCategory}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-[#94a3b8]">
              <p className="text-lg font-medium">No posts in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  )
}
