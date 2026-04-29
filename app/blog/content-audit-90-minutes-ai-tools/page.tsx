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
  ChevronRight,
  CheckCircle2,
  Zap,
} from 'lucide-react'
import postContent from '@/content/blog-post-content-audit.json'

// ─── Design tokens ────────────────────────────────────────────────────────────
// Font: Plus Jakarta Sans (--font-display) + DM Sans (--font-sans)
// Primary: #2457f5  Dark: #071225 / #1a2233  Body: #4b5568 / #667085
// Background: #fbfaf4  Cards: white  Border-radius: 28px cards
// ─────────────────────────────────────────────────────────────────────────────

const post = postContent

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
  { label: 'Features', href: '/#solutions' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Use Cases', href: '/#benefits' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/' },
  { label: 'Contact', href: '/' },
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
          <Link href="/" className="rounded-full px-5 py-3 text-sm font-bold text-[#25324b] transition-all duration-300 hover:bg-[#f4f8ff] hover:text-[#1d63ff]">
            Log In
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-[#1d63ff] px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(29,99,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]">
            Get Started
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
            <Link key={`mobile-${item.label}`} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl bg-[#f4f8ff] px-5 py-4 text-left font-bold text-[#25324b]">
              {item.label}
            </Link>
          ))}
          <Link href="/" className="rounded-2xl bg-[#f4f8ff] px-5 py-4 text-left font-bold text-[#25324b]">Log In</Link>
          <Link href="/" className="rounded-2xl bg-[#1d63ff] px-5 py-4 text-left font-extrabold text-white">Get Started</Link>
        </div>
      </motion.div>
    </header>
  )
}

// ─── Table of Contents ────────────────────────────────────────────────────────
function TableOfContents({ activeId }: { activeId: string }) {
  return (
    <div className="rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-[0_8px_30px_rgba(16,24,40,0.06)]">
      <p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-[#94a3b8]">Table of Contents</p>
      <ul className="space-y-1">
        {post.tocItems.map((item) => (
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

  // Bucket color map
  const bucketColors: Record<string, { color: string; bg: string }> = {
    Update: { color: '#2457f5', bg: '#eef4ff' },
    Consolidate: { color: '#7c3aed', bg: '#f5f0ff' },
    Remove: { color: '#dc2626', bg: '#fff5f5' },
  }

  return (
    <>
      <Header />

      {/* Hero / Article Header */}
      <section className="relative overflow-hidden bg-[#fbfaf4] pb-12 pt-36 sm:pt-40">
        <div className="absolute -left-28 -top-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,245,205,0.95)_0%,rgba(255,245,205,0.55)_42%,transparent_68%)]" />
        <div className="absolute left-0 top-0 h-full w-[56%] bg-[radial-gradient(circle_at_32%_52%,rgba(231,242,255,0.95)_0%,rgba(231,242,255,0.7)_36%,transparent_67%)]" />
        <div className="relative mx-auto max-w-[860px] px-5 sm:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#2457f5] transition-all duration-200 hover:gap-3">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#7c3aed]/10 px-4 py-1.5 text-sm font-bold text-[#7c3aed]">
            {post.meta.category}
          </div>
          <h1 className="font-display mb-6 text-4xl font-black leading-tight tracking-[-0.04em] text-[#071225] sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            {post.hero.title}
          </h1>
          <div className="flex items-center gap-5 text-sm text-[#94a3b8]">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.meta.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.meta.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="mx-auto max-w-[860px] px-5 sm:px-8">
        <div className="overflow-hidden rounded-[28px]">
          <img src={post.hero.featuredImage} alt={post.hero.featuredImageAlt} className="w-full object-cover" />
        </div>
      </div>

      {/* Article Body + Sidebar */}
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">

          {/* Article Content */}
          <article ref={articleRef} className="min-w-0">
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#071225] prose-p:text-[#4b5568] prose-p:leading-8 prose-a:text-[#2457f5] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1a2233] prose-li:text-[#4b5568]">

              {/* Intro */}
              <p className="lead text-xl leading-9 text-[#4b5568]">{post.intro.lead}</p>
              <p>{post.intro.body}</p>

              {/* Sections */}
              {post.sections.map((section) => (
                <div key={section.id}>
                  <h2 id={section.id}>{section.heading}</h2>

                  {section.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                  {/* Stats callout after what-is-content-audit */}
                  {section.id === 'what-is-content-audit' && (
                    <div className="not-prose my-8 grid gap-4 rounded-2xl bg-[#f0f5ff] p-6 sm:grid-cols-3">
                      {post.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <p className="font-display text-4xl font-black text-[#2457f5]">{stat.value}</p>
                          <p className="mt-1 text-sm font-bold text-[#1a2233]">{stat.label}</p>
                          <p className="text-xs text-[#94a3b8]">{stat.sub}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Buckets after step-4 */}
                  {section.id === 'step-4' && (
                    <div className="not-prose my-8 space-y-4">
                      {post.buckets.map((bucket) => {
                        const colors = bucketColors[bucket.label] ?? { color: '#2457f5', bg: '#eef4ff' }
                        return (
                          <div key={bucket.label} className="flex gap-4 rounded-2xl p-5" style={{ background: colors.bg }}>
                            <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-black text-white" style={{ background: colors.color }}>
                              {bucket.label[0]}
                            </div>
                            <div>
                              <p className="mb-1 font-display text-lg font-black" style={{ color: colors.color }}>{bucket.label}</p>
                              <p className="text-sm leading-7 text-[#4b5568]">{bucket.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Key Takeaways */}
                  {section.id === 'key-takeaways' && (
                    <div className="not-prose my-6 space-y-3">
                      {post.keyTakeaways.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2457f5]" />
                          <p className="text-base leading-7 text-[#4b5568]">{point}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* FAQ */}
                  {section.id === 'faq' && (
                    <div>
                      {post.faqs.map((faq) => (
                        <div key={faq.q}>
                          <h3 className="font-display text-xl font-black text-[#071225]">{faq.q}</h3>
                          <p>{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Inline CTA */}
            <div className="mt-12 overflow-hidden rounded-[28px] bg-[#071225] p-8 text-white sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-2xl font-black sm:text-3xl">{post.cta.inlineTitle}</p>
                  <p className="mt-2 text-white/60">{post.cta.inlineSubtitle}</p>
                </div>
                <Link href="/" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2457f5] px-7 py-4 font-extrabold text-white shadow-[0_14px_35px_rgba(36,87,245,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]">
                  <Zap className="h-4 w-4" />
                  {post.cta.inlineButton}
                </Link>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-[100px] space-y-6">
              <TableOfContents activeId={activeId} />
              <div className="rounded-2xl bg-[#2457f5] p-6 text-white">
                <p className="font-display text-lg font-black leading-snug">{post.cta.sidebarTitle}</p>
                <p className="mt-2 text-sm text-white/75">{post.cta.sidebarSubtitle}</p>
                <Link href="/" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#2457f5] transition-all duration-200 hover:bg-[#eef4ff]">
                  {post.cta.sidebarButton}
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
            {post.relatedPosts.map((relatedPost) => (
              <motion.article
                key={relatedPost.slug + relatedPost.title}
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
                    {relatedPost.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs text-[#94a3b8]">{relatedPost.date}</p>
                  <h3 className="font-display mb-3 text-lg font-black leading-snug text-[#071225] transition-colors group-hover:text-[#2457f5]">
                    {relatedPost.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-7 text-[#667085] line-clamp-2">{relatedPost.excerpt}</p>
                  <Link href={`/blog/${relatedPost.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#2457f5] transition-all duration-200 hover:gap-3">
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
