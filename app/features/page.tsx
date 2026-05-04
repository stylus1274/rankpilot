"use client"

// ─── Design tokens (matches how-it-works/page.tsx & blog/page.tsx) ────────────
// Font: Plus Jakarta Sans (--font-display) + DM Sans (--font-sans)
// Primary: #1d63ff / #2457f5   Dark bg: #071225   Body text: #667085
// Background: #fbfaf4   Cards: white, rounded-[28px], shadow soft-blue
// Header: fixed white/95 backdrop-blur, pill nav in #f4f8ff
// Section rhythm: py-24 / py-32, max-w-[1200px] px-5 sm:px-8
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import content from '@/content/features.json'
import {
  AlignLeft,
  ArrowRight,
  BarChart2,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  Database,
  Eye,
  FileSearch,
  FileText,
  Gauge,
  Layers,
  Lightbulb,
  LineChart,
  List,
  Menu,
  Network,
  PenLine,
  Search,
  Settings,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Wand2,
  X,
  Zap,
} from 'lucide-react'

// ─── Motion helpers ───────────────────────────────────────────────────────────
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}
const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
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

// ─── Icon maps ────────────────────────────────────────────────────────────────
const researchIcons = [Search, FileSearch, Eye, TrendingUp, Database, Lightbulb, BarChart2, AlignLeft]
const planningIcons = [Brain, Network, CalendarDays]
const creationIcons = [Wand2, List, Star, BookOpen]
const brandIcons = [Settings, Users, FileText, CheckCircle2]

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

// ─── Tool card ────────────────────────────────────────────────────────────────
function ToolCard({ icon: Icon, title, desc, accent = '#1d63ff' }: {
  icon: React.ElementType; title: string; desc: string; accent?: string
}) {
  return (
    <motion.div
      variants={reveal}
      className="group relative flex flex-col gap-4 rounded-[28px] bg-white p-7 shadow-[0_8px_40px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(29,99,255,0.12)]"
    >
      <div
        className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110"
        style={{ background: accent, boxShadow: `0 10px 24px ${accent}40` }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-display text-lg font-black tracking-tight text-[#071225]">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-[#667085]">{desc}</p>
      </div>
    </motion.div>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, desc, accent = '#1d63ff' }: {
  eyebrow: string; title: string; desc: string; accent?: string
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-14"
    >
      <div
        className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white"
        style={{ background: accent }}
      >
        {eyebrow}
      </div>
      <h2 className="font-display max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#667085]">{desc}</p>
    </motion.div>
  )
}

// ─── Comparison table ─────────────────────────────────────────────────────────
const COMPARISON_ROWS = [
  { feature: 'Keyword Research (Autocomplete)', rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: 'GSC Analyzer (Near Jumps, Cannibalization)', rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: 'Competitor URL Analyzer', rankpilot: true, surfer: true, frase: true, jasper: false },
  { feature: 'Topic Clusters & Coverage Tracking', rankpilot: true, surfer: false, frase: true, jasper: false },
  { feature: 'AI Article Generation', rankpilot: true, surfer: true, frase: true, jasper: true },
  { feature: 'Brand Voice Per Project', rankpilot: true, surfer: false, frase: false, jasper: true },
  { feature: 'ICP (Ideal Customer Profile)', rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: 'Cross Check Fact Verification', rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: 'Negative Keywords System', rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: 'Internal Linking via Sitemap', rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: 'Content Grader (E-E-A-T, AIO)', rankpilot: true, surfer: true, frase: true, jasper: false },
  { feature: 'Position Tracker', rankpilot: true, surfer: true, frase: false, jasper: false },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fbfaf4] pt-[78px]">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fbfaf4] pb-20 pt-16 sm:pb-24 sm:pt-20">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#1d63ff]/20 blur-[120px]" />
            <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/15 blur-[120px]" />
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
                <span className="text-[#1d63ff]">
                  {content.hero.headlineAccent}
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#667085]">
                {content.hero.subheadline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SEO Research Tools ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
          <SectionHeader
            eyebrow={content.research.eyebrow}
            title={content.research.title}
            desc={content.research.desc}
            accent="#1d63ff"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {content.research.tools.map((tool, i) => (
              <ToolCard
                key={i}
                icon={researchIcons[i] ?? Search}
                title={tool.title}
                desc={tool.desc}
                accent="#1d63ff"
              />
            ))}
          </motion.div>
        </section>

        {/* ── Planning & Strategy ──────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <SectionHeader
              eyebrow={content.planning.eyebrow}
              title={content.planning.title}
              desc={content.planning.desc}
              accent="#7c3aed"
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-6 sm:grid-cols-3"
            >
              {content.planning.tools.map((tool, i) => (
                <ToolCard
                  key={i}
                  icon={planningIcons[i] ?? Brain}
                  title={tool.title}
                  desc={tool.desc}
                  accent="#7c3aed"
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Content Creation & Optimization ─────────────────────────────── */}
        <section className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
          <SectionHeader
            eyebrow={content.creation.eyebrow}
            title={content.creation.title}
            desc={content.creation.desc}
            accent="#059669"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Featured first card */}
            {content.creation.tools[0] && (
              <motion.div
                variants={reveal}
                className="group relative col-span-full flex flex-col gap-5 rounded-[28px] bg-gradient-to-br from-[#071225] to-[#0d1e3a] p-8 shadow-[0_20px_60px_rgba(7,18,37,0.3)] sm:col-span-2 lg:col-span-2"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#1d63ff] text-white shadow-[0_10px_24px_rgba(29,99,255,0.4)]">
                  <Wand2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black tracking-tight text-white">{content.creation.tools[0].title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/60">{content.creation.tools[0].desc}</p>
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#1d63ff]/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#6ea8fe]">
                    <Zap className="h-3 w-3" /> AI-Powered
                  </span>
                </div>
              </motion.div>
            )}
            {content.creation.tools.slice(1).map((tool, i) => (
              <ToolCard
                key={i}
                icon={creationIcons[i + 1] ?? List}
                title={tool.title}
                desc={tool.desc}
                accent="#059669"
              />
            ))}
          </motion.div>
        </section>

        {/* ── Brand & Project Management ───────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <SectionHeader
              eyebrow={content.brand.eyebrow}
              title={content.brand.title}
              desc={content.brand.desc}
              accent="#0891b2"
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {content.brand.tools.map((tool, i) => (
                <ToolCard
                  key={i}
                  icon={brandIcons[i] ?? Settings}
                  title={tool.title}
                  desc={tool.desc}
                  accent="#0891b2"
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Comparison Table ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14 text-center"
          >
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
              {content.comparison.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#667085]">
              {content.comparison.desc}
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="overflow-hidden rounded-[28px] bg-white shadow-[0_8px_40px_rgba(16,24,40,0.08)]"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#f0f4ff]">
                    <th className="px-8 py-5 text-left font-bold text-[#374151]">Feature</th>
                    <th className="px-6 py-5 text-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1d63ff] px-4 py-2 text-xs font-extrabold text-white">
                        <Zap className="h-3 w-3" /> RankPilot
                      </span>
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-[#9ca3af]">Surfer SEO</th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-[#9ca3af]">Frase</th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-[#9ca3af]">Jasper</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className={`border-b border-[#f8f9ff] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafbff]'}`}>
                      <td className="px-8 py-4 font-medium text-[#374151]">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-[#1d63ff]" strokeWidth={2.5} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.surfer
                          ? <CheckCircle2 className="mx-auto h-4 w-4 text-emerald-500" />
                          : <X className="mx-auto h-4 w-4 text-gray-200" />}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.frase
                          ? <CheckCircle2 className="mx-auto h-4 w-4 text-emerald-500" />
                          : <X className="mx-auto h-4 w-4 text-gray-200" />}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.jasper
                          ? <CheckCircle2 className="mx-auto h-4 w-4 text-emerald-500" />
                          : <X className="mx-auto h-4 w-4 text-gray-200" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* ── Why RankPilot ────────────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-6 sm:grid-cols-3"
            >
              {([Zap, Shield, Target] as React.ElementType[]).map((Icon, i) => {
                const item = content.whyUs[i]
                if (!item) return null
                return (
                  <motion.div
                    key={i}
                    variants={reveal}
                    className="rounded-[28px] bg-[#f4f8ff] p-8"
                  >
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#1d63ff] text-white shadow-[0_10px_24px_rgba(29,99,255,0.3)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-black tracking-tight text-[#071225]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">{item.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#071225] py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#1d63ff]/20 blur-[120px]" />
            <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#7c3aed]/15 blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {content.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-xl leading-8 text-white/55">
                {content.cta.desc}
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={content.cta.buttonHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1d63ff] px-8 py-4 text-base font-extrabold text-white shadow-[0_14px_40px_rgba(29,99,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]"
                >
                  {content.cta.buttonText} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  See How It Works
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
