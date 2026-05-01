'use client'

// ─── Design tokens (matches rankpilot-landing.tsx & blog/page.tsx) ────────────
// Font: Plus Jakarta Sans (--font-display) + DM Sans (--font-sans)
// Primary: #1d63ff / #2457f5   Dark bg: #071225   Body text: #667085
// Background: #fbfaf4   Cards: white, rounded-[28px], shadow soft-blue
// Header: fixed white/95 backdrop-blur, pill nav in #f4f8ff
// Section rhythm: py-24 / py-32, max-w-[1200px] px-5 sm:px-8
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import content from '@/content/how-it-works.json'
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileSearch,
  FileText,
  Gauge,
  Globe,
  Layers,
  LayoutTemplate,
  LineChart,
  Menu,
  Network,
  PenLine,
  Search,
  Sparkles,
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

// ─── Data (from JSON content file) ───────────────────────────────────────────

const phaseColors = ['#1d63ff', '#7c3aed', '#059669']
const phases = content.phases.map((p, i) => ({ ...p, color: phaseColors[i] ?? '#1d63ff' }))

// Icon maps — icons cannot be stored in JSON, mapped by index
const researchIcons = [Search, Globe, LineChart, BarChart2, TrendingUp, FileSearch, Layers, Target]
const planIcons = [Brain, Network, CalendarDays]
const createIcons = [Wand2, LayoutTemplate, Star, BookOpen]
const wizardIcons = [ClipboardList, PenLine, Sparkles]
const wizardColors = ['#1d63ff', '#7c3aed', '#059669']
const configIcons = [Users, Target, Globe, FileText]
const configColors = ['#1d63ff', '#7c3aed', '#0891b2', '#059669']

const researchTools = content.research.tools.map((t, i) => ({ ...t, icon: researchIcons[i] ?? Search }))
const planTools = content.plan.tools.map((t, i) => ({ ...t, icon: planIcons[i] ?? Brain }))
const createTools = content.create.tools.map((t, i) => ({ ...t, icon: createIcons[i] ?? Wand2 }))
const wizardSteps = content.wizard.steps.map((s, i) => ({ ...s, icon: wizardIcons[i] ?? Sparkles, color: wizardColors[i] ?? '#1d63ff' }))
const projectConfig = content.projectConfig.items.map((item, i) => ({ ...item, icon: configIcons[i] ?? Users, color: configColors[i] ?? '#1d63ff' }))
const workflowSteps = content.workflow.steps

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
                item.href === '/how-it-works' ? 'bg-white text-[#1d63ff] shadow-[0_10px_25px_rgba(16,24,40,0.07)]' : 'text-[#25324b]'
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

// ─── Section: Phase heading ───────────────────────────────────────────────────
function PhaseHeading({ phaseId, phaseLabel, title, desc, color }: {
  phaseId: string; phaseLabel: string; title: string; desc: string; color: string
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white" style={{ background: color }}>
        Phase {phaseId} &nbsp;·&nbsp; {phaseLabel}
      </div>
      <h2 className="font-display max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#667085]">{desc}</p>
    </motion.div>
  )
}

// ─── Tool card ────────────────────────────────────────────────────────────────
function ToolCard({ icon: Icon, title, desc, accentColor }: {
  icon: React.ElementType; title: string; desc: string; accentColor?: string
}) {
  const color = accentColor ?? '#1d63ff'
  return (
    <motion.div
      variants={reveal}
      className="group flex flex-col gap-4 rounded-[20px] bg-white p-6 shadow-[0_12px_40px_rgba(16,24,40,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(29,99,255,0.12)]"
    >
      <div className="grid h-11 w-11 place-items-center rounded-2xl text-white shadow-[0_8px_20px_rgba(29,99,255,0.18)]" style={{ background: color }}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-display mb-2 text-lg font-extrabold text-[#101828]">{title}</h3>
        <p className="text-sm leading-7 text-[#667085]">{desc}</p>
      </div>
    </motion.div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HowItWorksPage() {
  const [activePhase, setActivePhase] = useState('01')

  return (
    <>
      <Header />

      <main className="bg-[#fbfaf4] pt-[78px]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#fbfaf4] pb-20 pt-16 sm:pb-24 sm:pt-20">
        {/* Background blobs */}
        <div className="absolute -left-28 -top-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,245,205,0.95)_0%,rgba(255,245,205,0.55)_42%,transparent_68%)]" />
        <div className="absolute left-0 top-0 h-full w-[56%] bg-[radial-gradient(circle_at_32%_52%,rgba(231,242,255,0.95)_0%,rgba(231,242,255,0.7)_36%,transparent_67%)]" />
        <div className="absolute right-[20%] top-0 h-[360px] w-[520px] rounded-b-full bg-[linear-gradient(115deg,rgba(234,243,255,0.96),rgba(234,243,255,0.2)_72%)]" />
        <div className="absolute -bottom-48 right-[-80px] h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,225,211,0.8)_0%,rgba(255,225,211,0.45)_45%,transparent_72%)]" />

        <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1d63ff] shadow-[0_10px_35px_rgba(16,24,40,0.07)]">
              <Zap className="h-4 w-4" />
              {content.hero.badge}
            </div>
            <h1 className="font-display mx-auto max-w-4xl text-5xl font-black tracking-[-0.04em] text-[#071225] sm:text-6xl lg:text-[72px] lg:leading-[1.0]">
              {content.hero.headline}{' '}
              <span className="text-[#1d63ff]">{content.hero.headlineAccent}</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-[#667085]">
              {content.hero.subheadline}
            </p>

          </motion.div>

          {/* Phase tab navigator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                type="button"
                onClick={() => {
                  setActivePhase(phase.id)
                  const el = document.getElementById(`phase-${phase.id}`)
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`group flex items-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                  activePhase === phase.id
                    ? 'text-white shadow-[0_10px_28px_rgba(29,99,255,0.22)]'
                    : 'bg-white text-[#25324b] shadow-[0_8px_24px_rgba(16,24,40,0.07)] hover:shadow-[0_12px_32px_rgba(16,24,40,0.1)]'
                }`}
                style={activePhase === phase.id ? { background: phase.color } : {}}
              >
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full text-xs font-extrabold transition-colors ${
                    activePhase === phase.id ? 'bg-white/20 text-white' : 'bg-[#f4f8ff] text-[#1d63ff]'
                  }`}
                >
                  {phase.id}
                </span>
                {phase.label}
                {i < phases.length - 1 && (
                  <ChevronRight className={`ml-1 hidden h-4 w-4 sm:block ${activePhase === phase.id ? 'text-white/60' : 'text-[#94a3b8]'}`} />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Phase 01: Research & Analyze ── */}
      <section id="phase-01" className="scroll-mt-28 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <PhaseHeading
            phaseId={content.research.phaseId}
            phaseLabel={content.research.phaseLabel}
            title={content.research.title}
            desc={content.research.desc}
            color="#1d63ff"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {researchTools.map((tool) => (
              <ToolCard key={tool.title} icon={tool.icon} title={tool.title} desc={tool.desc} accentColor="#1d63ff" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Phase 02: Plan & Strategize ── */}
      <section id="phase-02" className="scroll-mt-28 bg-[#fbfaf4] py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <PhaseHeading
            phaseId={content.plan.phaseId}
            phaseLabel={content.plan.phaseLabel}
            title={content.plan.title}
            desc={content.plan.desc}
            color="#7c3aed"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {planTools.map((tool) => (
              <ToolCard key={tool.title} icon={tool.icon} title={tool.title} desc={tool.desc} accentColor="#7c3aed" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Phase 03: Create & Optimize ── */}
      <section id="phase-03" className="scroll-mt-28 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <PhaseHeading
            phaseId={content.create.phaseId}
            phaseLabel={content.create.phaseLabel}
            title={content.create.title}
            desc={content.create.desc}
            color="#059669"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {createTools.map((tool) => (
              <ToolCard key={tool.title} icon={tool.icon} title={tool.title} desc={tool.desc} accentColor="#059669" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Inside the Generate Wizard ── */}
      <section className="bg-[#fbfaf4] py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1d63ff] shadow-[0_10px_35px_rgba(16,24,40,0.07)]">
              <Sparkles className="h-4 w-4" />
              {content.wizard.badge}
            </div>
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
              {content.wizard.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#667085]">
              {content.wizard.desc}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {wizardSteps.map((step) => (
              <motion.div
                key={step.num}
                variants={reveal}
                className="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-[0_18px_55px_rgba(16,24,40,0.07)]"
              >
                {/* Large step number watermark */}
                <div
                  className="absolute -right-4 -top-4 font-display text-[120px] font-black leading-none opacity-[0.04] select-none"
                  style={{ color: step.color }}
                >
                  {step.num}
                </div>
                <div className="relative">
                  <div
                    className="mb-5 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                    style={{ background: step.color }}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="mb-1 text-xs font-extrabold uppercase tracking-widest" style={{ color: step.color }}>
                    Step {step.num}
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-black text-[#101828]">{step.title}</h3>
                  <p className="text-base leading-7 text-[#667085]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Project Configuration ── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f4f8ff] px-4 py-2 text-sm font-bold text-[#1d63ff]">
              <Layers className="h-4 w-4" />
              {content.projectConfig.badge}
            </div>
            <h2 className="font-display max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
              {content.projectConfig.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#667085]">
              {content.projectConfig.desc}
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {projectConfig.map((item) => (
              <motion.div
                key={item.title}
                variants={reveal}
                className="flex gap-5 rounded-[20px] bg-[#fbfaf4] p-7 transition-all duration-300 hover:bg-white hover:shadow-[0_18px_50px_rgba(16,24,40,0.08)]"
              >
                <div
                  className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-[0_8px_20px_rgba(0,0,0,0.10)]"
                  style={{ background: item.color }}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display mb-2 text-xl font-extrabold text-[#101828]">{item.title}</h3>
                  <p className="text-base leading-7 text-[#667085]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Complete Workflow at a Glance ── */}
      <section className="bg-[#fbfaf4] py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1d63ff] shadow-[0_10px_35px_rgba(16,24,40,0.07)]">
              <CheckCircle2 className="h-4 w-4" />
              {content.workflow.badge}
            </div>
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
              {content.workflow.title}
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto max-w-[860px] space-y-4"
          >
            {workflowSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={reveal}
                className="flex items-start gap-5 rounded-2xl bg-white px-7 py-5 shadow-[0_8px_28px_rgba(16,24,40,0.06)] transition-all duration-300 hover:shadow-[0_14px_40px_rgba(29,99,255,0.10)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1d63ff] text-sm font-extrabold text-white shadow-[0_6px_16px_rgba(29,99,255,0.25)]">
                  {i + 1}
                </span>
                <p className="pt-1 text-base font-semibold leading-7 text-[#25324b]">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#1d63ff] py-24 sm:py-28">
        <div className="mx-auto max-w-[860px] px-5 text-center sm:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="font-display mb-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              {content.cta.title}
            </h2>
            <p className="mb-10 text-xl leading-8 text-white/75">
              {content.cta.desc}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={content.cta.primaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-extrabold text-[#1d63ff] shadow-[0_14px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)]"
              >
                {content.cta.primaryText}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={content.cta.secondaryHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
              >
                {content.cta.secondaryText}
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
