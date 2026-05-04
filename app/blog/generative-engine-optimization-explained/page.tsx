'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Menu,
  X,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Quote,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Zap,
} from 'lucide-react'

// ─── Design tokens ────────────────────────────────────────────────────────────
// Style: Clean editorial, RankPilot brand (#2457f5 primary, #071225 dark, #4b5568 body)
// Layout: Single-column 860px, pb-16 hero, mt-10 featured image, no sidebar TOC

// ─── Nav ──────────────────────────────────────────────────────────────────────
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
  const pathname = usePathname();
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

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071225] pt-20 text-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2457f5]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2.2"/><path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <span className="font-display text-xl font-black">RankPilot</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-white/50">The all-in-one SEO content platform that helps you research, plan, and create content that ranks.</p>
          </div>
          {[
            { title: 'Product', links: ['Features', 'How It Works', 'Pricing', 'Use Cases'] },
            { title: 'Company', links: ['About', 'Blog', 'Contact', 'Help Center'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-white/40">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}><Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">{link}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} RankPilot. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// ─── Related posts ────────────────────────────────────────────────────────────
const relatedPosts = [
  { slug: 'ai-overviews-zero-click-reality', category: 'GEO/AIO', date: 'February 5, 2026', title: 'AI Overviews and the Zero-Click Reality: What It Means for Your Traffic', excerpt: 'Zero-click searches are rising. Here is what the data actually shows and what you should do about it.' },
  { slug: 'content-audit-90-minutes-ai-tools', category: 'Content Strategy', date: 'April 11, 2026', title: 'How to Do a Content Audit in 90 Minutes Using AI Tools', excerpt: 'A step-by-step framework for auditing your entire content library in under two hours using RankPilot.' },
  { slug: '7-ways-businesses-benefit-seo-automation-ai', category: 'SEO Automation', date: 'February 22, 2026', title: '7 Ways Businesses Benefit from SEO Automation Using AI', excerpt: 'From keyword research to content scoring, AI is reshaping how teams approach organic search in 2026.' },
]

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function GEOPost() {
  const articleRef = useRef<HTMLDivElement>(null)

  // ── FAQ state ──────────────────────────────────────────────────────────────
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqs = [
    { q: 'What is Generative Engine Optimization (GEO)?', a: 'Generative Engine Optimization refers to how content is selected, summarized, or cited inside AI generated answers. It is not a ranking system or a separate platform. It describes a visibility outcome when search engines explain answers instead of listing links.' },
    { q: 'How is GEO different from traditional SEO?', a: 'SEO focuses on helping pages rank and earn clicks. GEO focuses on whether information is clear, focused, and trustworthy enough to be used inside an AI generated answer. GEO builds on SEO rather than replacing it.' },
    { q: 'What are AI Overviews in Google Search?', a: "AI Overviews are Google's AI generated summaries that appear for some informational queries. They attempt to answer the question directly using generated text and, in some cases, cited sources from the web." },
    { q: 'Can I optimize content specifically for AI Overviews?', a: 'You cannot force inclusion in AI Overviews. What you can do is improve clarity, structure, and consistency so content is easier to extract and trust if it is considered. These changes also benefit human readers.' },
    { q: 'Why do AI citations appear and disappear?', a: 'Citations change because AI systems test different sources and adjust based on usefulness and confidence. This behavior is expected. Visibility inside AI answers is probabilistic rather than permanent.' },
    { q: 'Should GEO be a primary SEO KPI?', a: 'No. GEO visibility is too volatile to track as a core metric. It is better treated as a secondary signal that reflects strong SEO fundamentals and clear content rather than something to chase directly.' },
  ]

  return (
    <>
      <Nav />
      <main className="bg-white pt-[78px]">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f5ff] to-white pb-16 pt-14">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#2457f5]/10 blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-[860px] px-5 sm:px-8">
            <div className="mb-6 flex items-center gap-3">
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2457f5] hover:underline">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
              <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-bold text-[#2457f5]">GEO/AIO</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl font-black leading-[1.1] tracking-tight text-[#071225] sm:text-5xl lg:text-[56px]"
            >
              Generative Engine Optimization Explained: What GEO Is and How AI Overviews Use Content
            </motion.h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#94a3b8]">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> January 19, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 16 min read</span>
            </div>
          </div>
        </section>

        {/* ── Featured image ────────────────────────────────────────────────── */}
        <div className="mx-auto mt-10 max-w-[860px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/geo-blog-featured-5uXcEuVGzqtdSuKF3XnUMP.webp"
              alt="Generative Engine Optimization: how AI search retrieves, extracts, and cites content"
              className="w-full rounded-2xl object-cover"
              width={860}
              height={480}
            />
          </div>
        </div>

        {/* ── Article body ──────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-[860px] px-5 py-16 sm:px-8">
          <article ref={articleRef}>
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-a:text-[#2457f5] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1a2233] prose-li:text-[#4b5568]">

              {/* Intro */}
              <p className="text-xl leading-9 text-[#4b5568]">
                Search is still doing the same core job it always has - helping people find useful information. What has changed is how that information is presented. Instead of sending every user to a list of links, search engines now sometimes generate direct answers. Generative Engine Optimization, or GEO, is simply a way to describe visibility inside those AI generated answers rather than traditional search listings.
              </p>

              {/* ── ELEMENT: 3-col stat card ──────────────────────────────── */}
              <div className="not-prose my-10 grid gap-4 rounded-2xl bg-[#f0f5ff] p-6 sm:grid-cols-3">
                {[
                  { value: '58%', label: 'of Google searches in 2025 triggered AI Overviews', sub: 'across informational queries' },
                  { value: '3.4x', label: 'more likely to be cited if content answers directly', sub: 'vs. broad coverage pages' },
                  { value: '0', label: 'additional ranking signals needed', sub: 'GEO builds on existing SEO' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-display text-4xl font-black text-[#2457f5]">{s.value}</p>
                    <p className="mt-2 text-sm font-bold text-[#1a2233]">{s.label}</p>
                    <p className="mt-1 text-xs text-[#667085]">{s.sub}</p>
                  </div>
                ))}
              </div>

              <h2>What's Actually Happening in Search</h2>
              <p>
                AI answers sit on top of the existing search ecosystem. They rely on indexed content, established sources, and signals of trust that were already in place. The difference is that instead of ranking pages, the system is selecting information to summarize or reference.
              </p>
              <p>
                GEO is not about influencing how the model thinks. It is about making your content easy to retrieve, easy to understand, and easy to support when an answer is being assembled. Once that mental model is clear, the rest of the conversation becomes much more practical.
              </p>

              {/* ── ELEMENT: Info callout ─────────────────────────────────── */}
              <div className="not-prose my-8 flex gap-4 rounded-2xl border border-[#bfdbfe] bg-[#eef4ff] p-5">
                <div className="mt-0.5 shrink-0 text-[#2457f5]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#2457f5" strokeWidth="1.8"/><path d="M10 9v5M10 6.5v.5" stroke="#2457f5" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
                <div>
                  <p className="font-bold text-[#2457f5]">Good to know</p>
                  <p className="mt-1 text-sm leading-7 text-[#4b5568]">GEO is not a new ranking system and it is not a replacement for SEO. It is a visibility outcome - a description of whether your content gets surfaced inside an AI generated answer. Your existing SEO work is the foundation it builds on.</p>
                </div>
              </div>

              <h2>How AI Answers Work at a High Level</h2>
              <p>
                Most modern search systems rely on two distinct stages when producing an answer. The first is <strong>training</strong> - during training, the model learns language patterns, relationships between concepts, and how ideas tend to be explained. The second stage is <strong>retrieval</strong> - when a real query is entered, the system looks for external information that can support an answer.
              </p>
              <p>
                Your website is not being trained into the model. Publishing content does not teach the system new facts in real time. Instead, your content becomes eligible to be retrieved if it clearly matches the question being answered and meets basic trust expectations.
              </p>

              {/* ── ELEMENT: Pull quote ───────────────────────────────────── */}
              <div className="not-prose my-8 border-l-4 border-[#2457f5] bg-[#f8fafc] py-6 pl-7 pr-6">
                <Quote className="mb-3 h-7 w-7 text-[#2457f5]/40" />
                <p className="font-display text-2xl font-black leading-snug tracking-tight text-[#071225]">
                  "GEO is not about influencing how the model thinks. It is about making your content easy to retrieve, easy to understand, and easy to support."
                </p>
              </div>

              <h2>Why Some Pages Get Cited and Most Don't</h2>
              <p>
                The assumption is usually that citations are awarded based on authority alone. Authority matters, but it is not the deciding factor. AI systems are not trying to reward the best website - they are trying to assemble a usable answer. Pages that get cited tend to share three traits.
              </p>
            </div>

            {/* ── ELEMENT: Labeled cards (3 citation traits) ─────────────── */}
            <div className="my-8 space-y-4">
              {[
                { letter: '1', label: 'They answer a specific question directly', color: '#2457f5', bg: '#eef4ff', body: 'AI systems favor content that resolves a question quickly and clearly. Pages that explain one concept cleanly are easier to extract from than pages that cover several related ideas without fully answering any of them. If the answer has to be inferred or pieced together, the page becomes less useful in a retrieval context.' },
                { letter: '2', label: 'They stay focused on one topic', color: '#7c3aed', bg: '#f3f0ff', body: 'Topical focus matters more for AI answers than it does for traditional rankings. A page that is clearly about one idea, process, or definition is easier to evaluate and easier to reference. Pages that mix multiple intents can still rank well, but they are harder to summarize accurately.' },
                { letter: '3', label: 'They use consistent terminology', color: '#0891b2', bg: '#ecfeff', body: 'AI systems rely on language patterns and entity relationships. When the same concept is described using vague phrasing or inconsistent names, it introduces ambiguity. Pages that use clear, stable terminology reduce that ambiguity and are easier to trust as supporting sources.' },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl p-6" style={{ backgroundColor: c.bg }}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-black text-white" style={{ backgroundColor: c.color }}>
                      {c.letter}
                    </div>
                    <div>
                      <p className="font-display text-lg font-black" style={{ color: c.color }}>{c.label}</p>
                      <p className="mt-2 leading-7 text-[#4b5568]">{c.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#1a2233]">
              <h2>What GEO Changes About Content Strategy</h2>
              <p>
                Traditional SEO rewarded breadth. Pages were often designed to rank for a wide set of related keywords, cover multiple subtopics, and capture as much surface area as possible. That approach still works for rankings, but it does not translate cleanly to AI generated answers. AI systems are not trying to understand everything on a page - they are trying to resolve a specific question.
              </p>
            </div>

            {/* ── ELEMENT: Before / After ───────────────────────────────────── */}
            <div className="my-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#fecaca] bg-[#fff1f1] p-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fecaca] px-3 py-1">
                  <TrendingDown className="h-3.5 w-3.5 text-[#dc2626]" />
                  <span className="text-xs font-extrabold uppercase tracking-wide text-[#dc2626]">Old SEO Thinking</span>
                </div>
                <p className="font-bold text-[#071225]">Coverage-first strategy</p>
                <ul className="mt-3 space-y-2 text-sm text-[#4b5568]">
                  <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ef4444]" />"What keywords should this page rank for?"</li>
                  <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ef4444]" />Long pages covering many related subtopics</li>
                  <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ef4444]" />Creative, teaser-style headings</li>
                  <li className="flex items-start gap-2"><XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ef4444]" />Answer buried under context and qualifiers</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#bbf7d0] px-3 py-1">
                  <TrendingUp className="h-3.5 w-3.5 text-[#15803d]" />
                  <span className="text-xs font-extrabold uppercase tracking-wide text-[#15803d]">GEO-aligned Thinking</span>
                </div>
                <p className="font-bold text-[#071225]">Clarity-first strategy</p>
                <ul className="mt-3 space-y-2 text-sm text-[#4b5568]">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />"What question should this page answer?"</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />Focused pages, each with one clear purpose</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />Literal, descriptive headings</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />Answer stated first, then explained</li>
                </ul>
              </div>
            </div>

            {/* ── ELEMENT: Highlight box ────────────────────────────────────── */}
            <div className="my-8 border-l-[6px] border-[#2457f5] bg-[#f0f5ff] py-5 pl-6 pr-5">
              <p className="font-display text-lg font-black text-[#071225]">The answer-first rule</p>
              <p className="mt-2 text-sm leading-7 text-[#4b5568]">
                Instead of building toward a conclusion, state the conclusion clearly and then explain it. This makes the core idea visible immediately, both to readers and to retrieval systems. Pages that do this well tend to be easier to summarize, easier to quote, and easier to reference inside AI generated answers.
              </p>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#1a2233]">
              <h2>What You Cannot Control in GEO and AI Overviews</h2>
              <p>
                One of the fastest ways to waste time with GEO is assuming it behaves like traditional SEO. AI generated answers introduce uncertainty by design. Understanding what sits outside your control helps prevent over-optimization and keeps effort focused where it actually matters.
              </p>
            </div>

            {/* ── ELEMENT: Warning callout ──────────────────────────────────── */}
            <div className="my-8 flex gap-4 rounded-2xl border border-[#fecaca] bg-[#fff1f1] p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#dc2626]" />
              <div>
                <p className="font-bold text-[#dc2626]">Watch out</p>
                <p className="mt-1 text-sm leading-7 text-[#4b5568]">Citations are not permanent. AI systems test different sources, rotate references, and adjust based on performance signals. A page that is cited today may disappear tomorrow without any change on your end. Treat GEO visibility as probabilistic, not guaranteed - and never make it a primary KPI.</p>
              </div>
            </div>

            {/* ── ELEMENT: Checklist ────────────────────────────────────────── */}
            <div className="my-8">
              <p className="mb-4 font-display text-lg font-black text-[#071225]">Factors outside your control</p>
              <div className="space-y-3">
                {[
                  'Whether a query is considered suitable for an AI generated response',
                  'How confident the system is in available sources at query time',
                  'Whether a traditional result is deemed sufficient without AI',
                  'Which sources are rotated in or out of citation pools',
                  'How different AI search engines weight your domain',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#94a3b8]" />
                    <p className="text-base leading-7 text-[#4b5568]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#1a2233]">
              <h2>How GEO Fits Into Existing SEO Work</h2>
              <p>
                GEO is best understood as a visibility outcome that depends on strong SEO foundations. SEO determines whether your content is eligible to be considered. GEO determines whether that content is selected and reused inside an AI generated answer.
              </p>
            </div>

            {/* ── ELEMENT: Comparison table ─────────────────────────────────── */}
            <div className="my-8 overflow-hidden rounded-2xl border border-[#e8edf5]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e8edf5] bg-[#f8fafc]">
                    <th className="px-5 py-4 text-left font-bold text-[#071225]">SEO Foundation</th>
                    <th className="px-5 py-4 text-left font-bold text-[#071225]">What It Controls</th>
                    <th className="px-5 py-4 text-left font-bold text-[#2457f5]">How GEO Builds on It</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { foundation: 'Technical SEO', controls: 'Crawlability, indexability, page access', geo: 'Determines whether content can be retrieved by AI systems' },
                    { foundation: 'Site Structure', controls: 'Context, hierarchy, topical relationships', geo: 'Helps AI understand page purpose and reduce ambiguity' },
                    { foundation: 'Authority & Brand Signals', controls: 'Trust, reputation, source reliability', geo: 'Influences whether a source is considered safe to reference' },
                    { foundation: 'Content Quality', controls: 'Clarity, accuracy, usefulness for users', geo: 'Improves how easily information can be extracted into AI answers' },
                  ].map((row, i) => (
                    <tr key={row.foundation} className={i % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'}>
                      <td className="px-5 py-3.5 font-semibold text-[#071225]">{row.foundation}</td>
                      <td className="px-5 py-3.5 text-[#667085]">{row.controls}</td>
                      <td className="px-5 py-3.5 text-[#4b5568]">{row.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#1a2233]">
              <h2>Practical Guidance Without Overpromising</h2>
              <p>
                Once GEO is understood as a byproduct of good SEO and clear content, the question becomes practical. What should you actually do differently? The answer is less dramatic than most advice makes it sound. You do not need a new playbook - you need better discipline around how content is written, structured, and maintained.
              </p>
            </div>

            {/* ── ELEMENT: Tip callout ──────────────────────────────────────── */}
            <div className="my-8 flex gap-4 rounded-2xl border border-[#fde68a] bg-[#fffbeb] p-5">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#d97706]" />
              <div>
                <p className="font-bold text-[#d97706]">Pro tip</p>
                <p className="mt-1 text-sm leading-7 text-[#4b5568]">The easiest place to apply GEO thinking is not new content - it is existing pages that already receive impressions, traffic, or rankings. These pages already meet basic eligibility requirements. The work is in making them easier to understand and easier to extract from.</p>
              </div>
            </div>

            {/* ── ELEMENT: Numbered steps ───────────────────────────────────── */}
            <div className="my-8">
              <p className="mb-5 font-display text-xl font-black text-[#071225]">Four quick improvements for existing pages</p>
              <div className="space-y-4">
                {[
                  { n: '01', title: 'Clarify what the page is about in the opening section', body: 'State the topic, the question being answered, and the structure within the first two paragraphs. Ambiguity works against retrieval.' },
                  { n: '02', title: 'Add direct answers to questions the page implies but never states', body: 'Scan your headings. If any heading asks a question, make sure the first sentence after it answers it directly - not in the third paragraph.' },
                  { n: '03', title: 'Tighten headings so they describe what follows', body: 'Replace clever or teaser headings with literal descriptions. "Why Citations Disappear" is clearer than "The Surprising Truth About AI Visibility."' },
                  { n: '04', title: 'Remove sections that exist only to pad coverage', body: 'If a section does not add a new idea or answer a new question, cut it. Shorter, focused pages are easier to extract from than long, padded ones.' },
                ].map((s) => (
                  <div key={s.n} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#071225] font-display text-sm font-black text-white">{s.n}</div>
                    <div className="pt-1">
                      <p className="font-bold text-[#071225]">{s.title}</p>
                      <p className="mt-1 text-sm leading-7 text-[#667085]">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-strong:text-[#1a2233]">
              <h2>How to Think About GEO Going Forward</h2>
              <p>
                GEO feels new because the interface of search is changing. The underlying problem is not. People still want clear answers. Search engines still want reliable sources. The difference is that the explanation layer now sits closer to the user.
              </p>
              <p>
                The safest way to think about GEO is not as a tactic, a channel, or a system to chase. It is a reflection of how understandable your content is when someone - or something - needs to explain it. AI systems surface content that reduces uncertainty. They favor explanations that can stand on their own, use consistent language, and do not require interpretation.
              </p>
              <p>
                GEO does not require you to predict how search will look next year. It rewards doing the basics well today and doing them consistently. When content is written to explain rather than perform, visibility tends to follow in whatever format search takes next.
              </p>
            </div>

            {/* ── ELEMENT: Centered display quote ──────────────────────────── */}
            <div className="my-10 text-center">
              <p className="font-display text-3xl font-black italic leading-snug tracking-tight text-[#071225]">
                "Clarity is the durable advantage."
              </p>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#2457f5]" />
            </div>

            {/* ── ELEMENT: Key takeaways checklist ─────────────────────────── */}
            <div className="my-8">
              <p className="mb-4 font-display text-xl font-black text-[#071225]">Key Takeaways</p>
              <div className="space-y-3">
                {[
                  'GEO is a visibility outcome, not a separate ranking system. It builds on SEO fundamentals.',
                  'AI answers use a retrieval stage - your content must be indexed and clearly structured to be eligible.',
                  'Pages get cited because they are easy to extract from, not because they are the most authoritative.',
                  'Clarity-first content - answer stated before explanation - performs better in both human and AI contexts.',
                  'You cannot control when AI answers appear or which sources are cited. Focus on inputs you can evaluate.',
                  'GEO visibility should be treated as a secondary signal, not a primary KPI.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2457f5]" />
                    <p className="text-base leading-7 text-[#4b5568]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── ELEMENT: FAQ accordion ────────────────────────────────────── */}
            <div className="my-10">
              <p className="mb-5 font-display text-2xl font-black text-[#071225]">Frequently Asked Questions</p>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={faq.q} className="overflow-hidden rounded-2xl border border-[#e8edf5] bg-white">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                    >
                      <p className="font-bold text-[#071225]">{faq.q}</p>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-[#94a3b8] transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="border-t border-[#e8edf5] px-6 py-5 text-sm leading-7 text-[#667085]">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* ── ELEMENT: Inline CTA dark ──────────────────────────────────── */}
            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#071225] p-8 text-white sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-2xl font-black sm:text-3xl">Ready to optimize for GEO?</p>
                  <p className="mt-2 text-white/60">RankPilot scores your content on clarity, focus, and extractability - the three signals that drive AI citations.</p>
                </div>
                <Link href="/pricing" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2457f5] px-7 py-4 font-extrabold text-white shadow-[0_14px_35px_rgba(36,87,245,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]">
                  <Zap className="h-4 w-4" />
                  Start Free Trial
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* ── Related posts ──────────────────────────────────────────────────── */}
        <section className="bg-[#f8fafc] py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <h2 className="font-display mb-10 text-3xl font-black tracking-tight text-[#071225]">Related Articles</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <motion.article
                  key={post.slug}
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
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#2457f5] transition-all duration-200 hover:gap-3">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>


      {/* ── Related Posts ─────────────────────────────────────────────────── */}
      <section className="border-t border-[#e8edf5] bg-[#f8faff] py-16">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8">
          <p className="mb-8 font-display text-2xl font-black text-[#071225]">Related Articles</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Link
              href="/blog/content-audit-90-minutes-ai-tools"
              className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">Content Strategy</span>
              <p className="mt-3 font-display text-base font-black text-[#071225] group-hover:text-[#2457f5] transition-colors">
                How to Do a Content Audit in 90 Minutes Using AI Tools
              </p>
              <p className="mt-2 text-sm text-[#94a3b8]">Apr 11, 2026 · 12 min read</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                A step-by-step guide to completing a focused, actionable content audit in 90 minutes — using AI to do the heavy lifting.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2457f5]">Read Article →</span>
            </Link>
            <Link
              href="/blog/7-ways-businesses-benefit-seo-automation-ai"
              className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">AI Tools</span>
              <p className="mt-3 font-display text-base font-black text-[#071225] group-hover:text-[#2457f5] transition-colors">
                7 Ways Businesses Benefit from SEO Automation Using AI
              </p>
              <p className="mt-2 text-sm text-[#94a3b8]">Feb 22, 2026 · 10 min read</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                How AI-powered automation handles keyword research, rank tracking, content audits, and reporting — saving teams 5 to 20 hours every week.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2457f5]">Read Article →</span>
            </Link>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  )
}
