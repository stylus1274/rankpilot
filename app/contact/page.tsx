"use client"

// ─── Design tokens (matches how-it-works/page.tsx & about/page.tsx) ──────────
// Font: Plus Jakarta Sans (--font-display) + DM Sans (--font-sans)
// Primary: #1d63ff   Dark bg: #071225   Body text: #667085
// Background: #fbfaf4   Cards: white, rounded-[28px], shadow soft-blue
// Header: fixed white/95 backdrop-blur, pill nav in #f4f8ff
// Section rhythm: py-24 / py-32, max-w-[1200px] px-5 sm:px-8
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import content from '@/content/contact.json'
import {
  Clock,
  Gauge,
  Mail,
  Menu,
  MessageCircle,
  Send,
  X,
} from 'lucide-react'

// ─── Motion helpers ───────────────────────────────────────────────────────────
const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// ─── Shared components ────────────────────────────────────────────────────────
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
              className={`rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 hover:bg-white hover:text-[#1d63ff] hover:shadow-[0_10px_25px_rgba(16,24,40,0.07)] ${
                item.href === '/contact' ? 'bg-white text-[#1d63ff] shadow-[0_10px_25px_rgba(16,24,40,0.07)]' : 'text-[#25324b]'
              }`}
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
            <Link
              key={`mobile-${item.label}`}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-[#f4f8ff] px-5 py-4 text-left font-bold text-[#25324b]"
            >
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
                <li key={item}><Link href={item === 'Blog' ? '/blog' : item === 'About' ? '/about' : item === 'Contact' ? '/contact' : '/'} className="transition-colors hover:text-white">{item}</Link></li>
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

// ─── Contact info card ────────────────────────────────────────────────────────
const contactIcons = [Mail, MessageCircle, Clock]

function ContactCard({ icon: Icon, title, desc, link, accent = '#1d63ff' }: {
  icon: React.ElementType; title: string; desc: string; link: string; accent?: string
}) {
  return (
    <motion.div
      variants={reveal}
      className="group flex flex-col gap-4 rounded-[24px] bg-white p-7 shadow-[0_8px_40px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,99,255,0.10)]"
    >
      <div
        className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110"
        style={{ background: accent, boxShadow: `0 10px 24px ${accent}40` }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-display text-lg font-black tracking-tight text-[#071225]">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-[#667085]">{desc}</p>
        <p className="mt-3 text-sm font-bold text-[#1d63ff]">{link}</p>
      </div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />

      <main className="bg-[#fbfaf4] pt-[78px]">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fbfaf4] pb-20 pt-16 sm:pb-24 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-28 -top-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,245,205,0.95)_0%,rgba(255,245,205,0.55)_42%,transparent_68%)]" />
            <div className="absolute left-0 top-0 h-full w-[56%] bg-[radial-gradient(circle_at_32%_52%,rgba(231,242,255,0.95)_0%,rgba(231,242,255,0.7)_36%,transparent_67%)]" />
            <div className="absolute right-[20%] top-0 h-[360px] w-[520px] rounded-b-full bg-[linear-gradient(115deg,rgba(234,243,255,0.96),rgba(234,243,255,0.2)_72%)]" />
          </div>
          <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1d63ff] shadow-[0_10px_35px_rgba(16,24,40,0.07)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1d63ff]" />
                {content.hero.badge}
              </div>
              <h1 className="font-display text-5xl font-black tracking-[-0.04em] text-[#071225] sm:text-6xl lg:text-7xl">
                {content.hero.headline}{' '}
                <span className="text-[#1d63ff]">{content.hero.headlineAccent}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#667085]">
                {content.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Contact cards + Form ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">

            {/* Left: contact info cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-col gap-5"
            >
              {content.contactCards.map((card, i) => {
                const Icon = contactIcons[i] ?? Mail
                return (
                  <ContactCard
                    key={card.title}
                    icon={Icon}
                    title={card.title}
                    desc={card.desc}
                    link={card.link}
                    accent={i === 0 ? '#1d63ff' : i === 1 ? '#7c3aed' : '#059669'}
                  />
                )
              })}
            </motion.div>

            {/* Right: contact form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-[28px] bg-white p-8 shadow-[0_8px_40px_rgba(16,24,40,0.07)] sm:p-10"
            >
              <h2 className="font-display text-2xl font-black tracking-tight text-[#071225]">
                {content.form.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#667085]">{content.form.subtitle}</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-[#f0fdf4] py-14 text-center"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#059669] text-white shadow-[0_10px_24px_rgba(5,150,105,0.3)]">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-black text-[#071225]">{content.form.successTitle}</h3>
                  <p className="max-w-xs text-sm leading-6 text-[#667085]">{content.form.successMessage}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#344054]">{content.form.namePlaceholder}</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="rounded-2xl border border-[#e4e7ec] bg-[#f9fafb] px-4 py-3.5 text-sm text-[#101828] placeholder:text-[#98a2b3] focus:border-[#1d63ff] focus:outline-none focus:ring-2 focus:ring-[#1d63ff]/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#344054]">{content.form.emailPlaceholder}</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="rounded-2xl border border-[#e4e7ec] bg-[#f9fafb] px-4 py-3.5 text-sm text-[#101828] placeholder:text-[#98a2b3] focus:border-[#1d63ff] focus:outline-none focus:ring-2 focus:ring-[#1d63ff]/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#344054]">{content.form.subjectPlaceholder}</label>
                    <input
                      type="text"
                      required
                      placeholder="How can we help?"
                      value={formState.subject}
                      onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                      className="rounded-2xl border border-[#e4e7ec] bg-[#f9fafb] px-4 py-3.5 text-sm text-[#101828] placeholder:text-[#98a2b3] focus:border-[#1d63ff] focus:outline-none focus:ring-2 focus:ring-[#1d63ff]/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-[#344054]">{content.form.messagePlaceholder}</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us more about your question or request..."
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="resize-none rounded-2xl border border-[#e4e7ec] bg-[#f9fafb] px-4 py-3.5 text-sm text-[#101828] placeholder:text-[#98a2b3] focus:border-[#1d63ff] focus:outline-none focus:ring-2 focus:ring-[#1d63ff]/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1d63ff] px-8 py-4 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(29,99,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7] hover:shadow-[0_20px_40px_rgba(29,99,255,0.3)]"
                  >
                    <Send className="h-4 w-4" />
                    {content.form.submitButton}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        {content.faq && content.faq.length > 0 && (
          <section className="bg-white py-24">
            <div className="mx-auto max-w-[800px] px-5 sm:px-8">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mb-14 text-center"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1d63ff] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white">
                  FAQ
                </div>
                <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
                  Common Questions
                </h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.07 }}
                className="flex flex-col gap-4"
              >
                {content.faq.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#071225] py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#1d63ff]/15 blur-[100px]" />
            <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/10 blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {content.cta.headline}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">
                {content.cta.subheadline}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1d63ff] px-8 py-4 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(29,99,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]"
                >
                  {content.cta.primaryButton}
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-extrabold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  {content.cta.secondaryButton}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

// ─── FAQ accordion item ───────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      variants={reveal}
      className="overflow-hidden rounded-2xl border border-[#e4e7ec] bg-white transition-all duration-300 hover:border-[#1d63ff]/30 hover:shadow-[0_8px_30px_rgba(29,99,255,0.07)]"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
      >
        <span className="font-display text-base font-black text-[#071225]">{q}</span>
        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f4f8ff] text-[#1d63ff] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-7 pb-6 text-sm leading-7 text-[#667085]">{a}</p>
      </motion.div>
    </motion.div>
  )
}
