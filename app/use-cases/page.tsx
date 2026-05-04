'use client'

// ─── Design tokens ─────────────────────────────────────────────────────────────
// Font: Plus Jakarta Sans (--font-display) + DM Sans (--font-sans)
// Primary: #1d63ff   Dark bg: #071225   Body text: #667085
// Background: #fbfaf4   Cards: white, rounded-[28px], shadow soft-blue
// Header: fixed white/95 backdrop-blur, pill nav in #f4f8ff
// Section rhythm: py-24 / py-32, max-w-[1200px] px-5 sm:px-8
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import content from '@/content/use-cases.json'
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Gauge,
  Globe,
  Menu,
  PenLine,
  Shield,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'

// ─── Motion helpers ───────────────────────────────────────────────────────────
const reveal = {
  hidden: { opacity: 0, y: 28 },
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

// ─── Tab icons ────────────────────────────────────────────────────────────────
const tabIcons: Record<string, React.ElementType> = {
  'seo-agencies': Briefcase,
  'in-house-teams': Building2,
  'niche-site-builders': Globe,
  'freelance-marketers': PenLine,
  'regulated-industries': Shield,
}

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
  const pathname = usePathname()
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
              className={`rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  ? 'bg-white text-[#1d63ff] shadow-[0_10px_25px_rgba(16,24,40,0.07)]'
                  : 'text-[#25324b] hover:bg-white hover:text-[#1d63ff] hover:shadow-[0_10px_25px_rgba(16,24,40,0.07)]'
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
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full bg-[#1d63ff] px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(29,99,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]">
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
          <Link href="/pricing" className="rounded-2xl bg-[#1d63ff] px-5 py-4 text-left font-extrabold text-white">Get Started</Link>
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

// ─── Use Case Panel ───────────────────────────────────────────────────────────
function UseCasePanel({ useCase }: { useCase: typeof content.useCases[0] }) {
  const TabIcon = tabIcons[useCase.id] ?? Users
  return (
    <motion.div
      key={useCase.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="grid gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* Left: context */}
      <div>
        {/* Eyebrow badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#eef3ff] px-4 py-2 text-sm font-bold text-[#1d63ff]">
          <TabIcon className="h-4 w-4" />
          {useCase.eyebrow}
        </div>
        <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-[#071225] sm:text-4xl">
          {useCase.headline}
        </h2>
        <p className="mt-4 text-lg leading-8 text-[#667085]">{useCase.description}</p>

        {/* Pain points */}
        <div className="mt-8">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#667085]">Common Pain Points</p>
          <ul className="space-y-2.5">
            {useCase.painPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-6 text-[#344054]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f04438]" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href={useCase.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-[#1d63ff] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(29,99,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]"
          >
            {useCase.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Right: how RankPilot helps */}
      <div>
        <p className="mb-5 text-xs font-extrabold uppercase tracking-widest text-[#667085]">How RankPilot Helps</p>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {useCase.helpItems.map((item, i) => (
            <motion.div
              key={i}
              variants={reveal}
              className="flex items-start gap-4 rounded-[20px] bg-white p-5 shadow-[0_4px_20px_rgba(16,24,40,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(29,99,255,0.10)]"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#eef3ff]">
                <CheckCircle2 className="h-4 w-4 text-[#1d63ff]" />
              </div>
              <p className="text-sm leading-6 font-medium text-[#344054]">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stat card */}
        <div className="mt-6 rounded-[20px] bg-[#eef3ff] p-6">
          <p className="font-display text-5xl font-black tracking-tight text-[#1d63ff]">{useCase.stat.value}</p>
          <p className="mt-1 text-sm font-medium text-[#344054]">{useCase.stat.label}</p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function UseCasesPage() {
  const [activeTab, setActiveTab] = useState(content.useCases[0].id)
  const activeUseCase = content.useCases.find((uc) => uc.id === activeTab) ?? content.useCases[0]

  return (
    <>
      <Header />
      <main className="bg-[#fbfaf4] pt-[78px]">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fbfaf4] pb-16 pt-16 sm:pb-20 sm:pt-20">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#1d63ff]/15 blur-[120px]" />
            <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/10 blur-[120px]" />
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
                {content.hero.eyebrow}
              </div>
              <h1 className="font-display text-5xl font-black tracking-[-0.04em] text-[#071225] sm:text-6xl lg:text-7xl">
                Built for Every Kind of{' '}
                <span className="text-[#1d63ff]">SEO Professional</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#667085]">
                {content.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Tab navigation ───────────────────────────────────────────────── */}
        <section className="sticky top-[78px] z-40 border-b border-[#e8e8e8] bg-white/95 backdrop-blur-md">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
              {content.useCases.map((uc) => {
                const Icon = tabIcons[uc.id] ?? Users
                const isActive = uc.id === activeTab
                return (
                  <button
                    key={uc.id}
                    type="button"
                    onClick={() => setActiveTab(uc.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-[#1d63ff] text-white shadow-[0_8px_20px_rgba(29,99,255,0.25)]'
                        : 'text-[#344054] hover:bg-[#f4f8ff] hover:text-[#1d63ff]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {uc.tabLabel}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Use Case panels ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24">
          <AnimatePresence mode="wait">
            <UseCasePanel key={activeTab} useCase={activeUseCase} />
          </AnimatePresence>
        </section>

        {/* ── All use cases overview ───────────────────────────────────────── */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-14 text-center"
            >
              <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
                Every Workflow, One Platform
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#667085]">
                No matter how you work, RankPilot adapts to your process — not the other way around.
              </p>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {content.useCases.map((uc) => {
                const Icon = tabIcons[uc.id] ?? Users
                return (
                  <motion.button
                    key={uc.id}
                    variants={reveal}
                    type="button"
                    onClick={() => {
                      setActiveTab(uc.id)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="group flex flex-col gap-4 rounded-[28px] bg-[#fbfaf4] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(29,99,255,0.10)]"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef3ff] text-[#1d63ff] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-black tracking-tight text-[#071225]">{uc.tabLabel}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#667085]">{uc.headline}</p>
                    </div>
                    <div className="mt-auto flex items-center gap-1.5 text-sm font-bold text-[#1d63ff] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.button>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="bg-[#1d63ff] py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                {content.cta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/80">
                {content.cta.subheadline}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={content.cta.primaryButton.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#1d63ff] shadow-[0_14px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.20)]"
                >
                  {content.cta.primaryButton.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={content.cta.secondaryButton.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
                >
                  {content.cta.secondaryButton.label}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
