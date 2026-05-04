'use client'

// ─── Design tokens (matches all inner pages) ──────────────────────────────────
// Font: Plus Jakarta Sans (--font-display) + DM Sans (--font-sans)
// Primary: #1d63ff / #2457f5   Dark bg: #071225   Body text: #667085
// Background: #f4f8ff   Cards: white, rounded-[28px], shadow soft-blue
// Header: fixed white/95 backdrop-blur, pill nav in #f4f8ff
// Section rhythm: py-24 / py-32, max-w-[1200px] px-5 sm:px-8
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import content from '@/content/about.json'
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Database,
  Gauge,
  Globe,
  Lightbulb,
  Menu,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react'

// ─── Motion helpers ───────────────────────────────────────────────────────────
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}
const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
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

// ─── Icon map for "What We Believe" values ────────────────────────────────────
const valueIcons = [BarChart2, Zap, Sparkles, Users]
const valueColors = ['#1d63ff', '#7c3aed', '#059669', '#0891b2']

// ─── Icon map for audience cards ─────────────────────────────────────────────
const audienceIcons = [Globe, Database, Rocket]

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
                item.href === '/about' ? 'bg-white text-[#1d63ff] shadow-[0_10px_25px_rgba(16,24,40,0.07)]' : 'text-[#25324b]'
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
                <li key={item}><Link href={item === 'Features' ? '/features' : item === 'Pricing' ? '/pricing' : '/'} className="transition-colors hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-white/40">Company</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/' },
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="transition-colors hover:text-white">{item.label}</Link></li>
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const values = content.values.items.map((v, i) => ({
    ...v,
    icon: valueIcons[i] ?? Lightbulb,
    color: valueColors[i] ?? '#1d63ff',
  }))

  const audiences = content.audience.cards.map((a, i) => ({
    ...a,
    icon: audienceIcons[i] ?? Globe,
  }))

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />

      <main className="bg-white pt-[78px]">
      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#f4f8ff] pb-24 pt-16">
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#1d63ff]/8 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/6 blur-[100px]" />

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1d63ff]/10 px-5 py-2 text-sm font-extrabold uppercase tracking-widest text-[#1d63ff]">
              {content.hero.badge}
            </div>
            <h1 className="font-display text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#071225] sm:text-6xl lg:text-7xl">
              {content.hero.headline}{' '}
              <span className="bg-gradient-to-r from-[#1d63ff] to-[#7c3aed] bg-clip-text text-transparent">
                {content.hero.headlineAccent}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#667085]">
              {content.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── The Problem We Solve ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left: text */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
                {content.problem.title}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#667085]">
                {content.problem.paragraphs.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>

            {/* Right: audience cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4"
            >
              {audiences.map((card) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.title}
                    variants={reveal}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex gap-5 rounded-[20px] border border-[#e8edf5] bg-white p-6 shadow-[0_8px_30px_rgba(29,99,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,99,255,0.12)]"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#1d63ff]/10">
                      <Icon className="h-6 w-6 text-[#1d63ff]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-black text-[#071225]">{card.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-[#667085]">{card.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="border-y border-[#e8edf5] bg-[#f4f8ff] py-14">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {content.stats.map((stat: { value: string; label: string }) => (
              <motion.div
                key={stat.label}
                variants={reveal}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-center"
              >
                <div className="font-display text-4xl font-black tracking-tight text-[#1d63ff] sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-bold text-[#667085]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── What We Believe ───────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1d63ff]/10 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-[#1d63ff]">
              {content.values.eyebrow}
            </div>
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
              {content.values.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#667085]">{content.values.subtitle}</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {values.map((val) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={val.title}
                  variants={reveal}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="group relative overflow-hidden rounded-[28px] border border-[#e8edf5] bg-white p-8 shadow-[0_8px_30px_rgba(29,99,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,99,255,0.12)]"
                >
                  {/* Accent corner */}
                  <div
                    className="absolute right-0 top-0 h-32 w-32 rounded-bl-[80px] opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                    style={{ background: val.color }}
                  />
                  <div
                    className="mb-5 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg"
                    style={{ background: val.color, boxShadow: `0 12px 28px ${val.color}40` }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-black text-[#071225]">{val.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#667085]">{val.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── Mission timeline ──────────────────────────────────────────────── */}
      <section className="bg-[#f4f8ff] py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1d63ff]/10 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-[#1d63ff]">
              {content.mission.eyebrow}
            </div>
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
              {content.mission.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#667085]">{content.mission.subtitle}</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#1d63ff]/30 via-[#7c3aed]/20 to-transparent sm:block" />

            <div className="grid gap-8">
              {content.mission.milestones.map((m: { year: string; title: string; desc: string }, i: number) => (
                <motion.div
                  key={m.year}
                  variants={reveal}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="flex gap-8"
                >
                  {/* Dot */}
                  <div className="relative hidden shrink-0 sm:block">
                    <div className="mt-1 h-3 w-3 rounded-full bg-[#1d63ff] shadow-[0_0_0_4px_rgba(29,99,255,0.15)]" style={{ marginLeft: '18px' }} />
                  </div>
                  <div className="flex-1 rounded-[20px] border border-[#e8edf5] bg-white p-6 shadow-[0_4px_20px_rgba(29,99,255,0.05)]">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#1d63ff]/10 px-3 py-1 text-xs font-extrabold text-[#1d63ff]">
                      {m.year}
                    </div>
                    <h3 className="font-display text-lg font-black text-[#071225]">{m.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#667085]">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#071225] py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-[#1d63ff] shadow-[0_16px_40px_rgba(29,99,255,0.35)]">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-display max-w-2xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              {content.cta.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
              {content.cta.desc}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#1d63ff] px-8 py-4 text-base font-extrabold text-white shadow-[0_14px_30px_rgba(29,99,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]"
              >
                {content.cta.primaryButton} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-extrabold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
              >
                {content.cta.secondaryButton}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm font-bold text-white/40">
              {content.cta.trustItems.map((item: string) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1d63ff]" /> {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  )
}
