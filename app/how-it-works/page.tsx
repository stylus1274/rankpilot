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
  { label: 'Features', href: '/#solutions' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Use Cases', href: '/#benefits' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/' },
  { label: 'Contact', href: '/' },
]

// ─── Data ─────────────────────────────────────────────────────────────────────

const phases = [
  { id: '01', label: 'Research & Analyze', color: '#1d63ff' },
  { id: '02', label: 'Plan & Strategize', color: '#7c3aed' },
  { id: '03', label: 'Create & Optimize', color: '#059669' },
]

const researchTools = [
  {
    icon: Search,
    title: 'Auto Complete',
    desc: 'Seed any keyword and instantly surface hundreds of Google Autocomplete variations — including question-based keywords (how, what, why, when, where) for featured snippet and voice search targeting.',
  },
  {
    icon: Globe,
    title: 'Competitor Analyzer',
    desc: 'Enter any competitor URL and get a full breakdown of their content structure, heading hierarchy, word count, internal/external links, and keyword targeting. Understand what makes their page rank so you can build something better.',
  },
  {
    icon: LineChart,
    title: 'Position Tracker',
    desc: 'Track competitor keyword rankings over time and build a Threat Leaderboard scored by ranking position. Know exactly which competitors are gaining ground on your most valuable keywords.',
  },
  {
    icon: BarChart2,
    title: 'GSC Analyzer',
    desc: 'Upload your Google Search Console export and instantly surface near-jump keywords (positions 11–30), high-impression/low-CTR pages, and zero-click opportunities. Turn raw GSC data into a prioritized action list.',
  },
  {
    icon: TrendingUp,
    title: 'Keyword Insights',
    desc: 'Upload keyword exports from Semrush, Ahrefs, or SE Ranking. RankPilot auto-detects the format, scores each keyword by opportunity, clusters them into semantic groups, and identifies content gaps.',
  },
  {
    icon: FileSearch,
    title: 'Site Scanner',
    desc: 'Scan any sitemap for thin content and metadata issues. The Thin Content Scanner flags underperforming pages by depth and topical coverage. The Metadata Scan audits every title and description for SEO quality.',
  },
  {
    icon: Layers,
    title: 'Header Extractor',
    desc: 'Paste up to 20 URLs and extract every H1–H6 heading from each page simultaneously. Filter by heading level. Essential for bulk SERP analysis and understanding how top-ranking pages structure their content.',
  },
  {
    icon: Target,
    title: 'Keyword Auditor',
    desc: 'Analyze any live URL or pasted HTML for keyword density, placement, and on-page SEO factors. Get specific recommendations for meta titles, descriptions, headings, and body content.',
  },
]

const planTools = [
  {
    icon: Brain,
    title: 'Article Ideas Generator',
    desc: 'Enter a seed keyword and generate targeted article ideas with suggested titles, target keywords, and content angles. Filter by content type: How-to Guides, Listicles, FAQs, Local Guides, Service Pages, and more. Configurable count and custom AI instructions.',
  },
  {
    icon: Network,
    title: 'Topic Clusters',
    desc: 'Build pillar + supporting article cluster maps that visualize your topical authority coverage. Each cluster tracks how many articles are published, in draft, or still unwritten — with a coverage percentage so you can see gaps at a glance.',
  },
  {
    icon: CalendarDays,
    title: 'Content Calendar',
    desc: 'Schedule and manage your content pipeline with a full calendar view. Assign priority levels (High, Medium, Low), filter by project and status, and track overdue tasks. Quick Views for Today, This Week, and Completed tasks keep your team aligned.',
  },
]

const createTools = [
  {
    icon: Wand2,
    title: 'AI Article Generator',
    desc: 'A 3-step wizard: Configure your article (keyword, audience, tone, word count, AI model, internal links), review and edit the AI-generated outline, then generate the full article. The outline review step ensures you control the structure before a word is written.',
  },
  {
    icon: LayoutTemplate,
    title: 'Outline Builder',
    desc: 'Generate a structured article outline from any topic, or paste an existing outline and have RankPilot enhance it. The Research First toggle pulls in live SERP data before building the structure.',
  },
  {
    icon: Star,
    title: 'Content Grader',
    desc: 'Paste any article and receive a GEO (Generative Engine Optimization) score across four dimensions: E-E-A-T Trust (30 pts), Accuracy (25 pts), AIO Answer Readiness (20 pts), and Readability & UX (10 pts). Know exactly where to improve before publishing.',
  },
  {
    icon: BookOpen,
    title: 'Article Manager',
    desc: 'A searchable, filterable library of every article across all your projects. Filter by project, status (draft/published/completed), or keyword. Track word counts, dates, and archive articles you no longer need.',
  },
]

const wizardSteps = [
  {
    num: '1',
    title: 'Configure',
    desc: 'Set your target keyword, location, audience, tone, word count, AI model, secondary keywords, and internal linking preferences. Toggle People Also Ask, statistics with citation placeholders, and more.',
    icon: ClipboardList,
    color: '#1d63ff',
  },
  {
    num: '2',
    title: 'Review Outline',
    desc: 'Before a single paragraph is written, RankPilot generates a full structured outline for your review. Edit headings, reorder sections, add notes — you control the structure.',
    icon: PenLine,
    color: '#7c3aed',
  },
  {
    num: '3',
    title: 'Generate Article',
    desc: 'With your approved outline as the blueprint, RankPilot generates the full article — complete with internal links, People Also Ask, and statistics flagged for citation. Ready to grade and publish.',
    icon: Sparkles,
    color: '#059669',
  },
]

const projectConfig = [
  {
    icon: Users,
    title: 'Brand Voice',
    desc: 'Define your writing tone, perspective (1st/2nd/3rd person), sentence style, and words to avoid. Create multiple named voice profiles per project — each article can use a different voice.',
    color: '#1d63ff',
  },
  {
    icon: Target,
    title: 'Ideal Customer Profile (ICP)',
    desc: 'Define who the content is written for: their pain points, goals, objections, and buying triggers. ICP influences what the content addresses; Brand Voice controls how it sounds. They work together.',
    color: '#7c3aed',
  },
  {
    icon: Globe,
    title: 'Sitemaps & Internal Linking',
    desc: 'Add your site\'s sitemaps and RankPilot automatically inserts contextually relevant internal links during article generation. Supports multiple sitemaps per project and manual URL entry.',
    color: '#0891b2',
  },
  {
    icon: FileText,
    title: 'Cross Check',
    desc: 'Upload a reference document containing proprietary data, facts, or domain-specific information. After an article is generated, Cross Check verifies its factual accuracy against your source material — without influencing the creative output.',
    color: '#059669',
  },
]

const workflowSteps = [
  'Run Auto Complete on a seed keyword to surface hundreds of variations',
  'Upload your keyword export to Keyword Insights for scoring and clustering',
  'Analyze top-ranking competitor pages with the Competitor Analyzer',
  'Check your GSC export for near-jump and quick-win opportunities',
  'Generate article ideas and organize them into Topic Clusters',
  'Schedule your pipeline in the Content Calendar',
  'Configure your project\'s Brand Voice, ICP, Sitemaps, and Cross Check document',
  'Run the Generate wizard: configure → review outline → generate article',
  'Grade the finished article with the Content Grader before publishing',
  'Track rankings and repeat for the next cluster',
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

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#fbfaf4] pb-20 pt-36 sm:pb-24 sm:pt-44">
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
              The Full Workflow
            </div>
            <h1 className="font-display mx-auto max-w-4xl text-5xl font-black tracking-[-0.04em] text-[#071225] sm:text-6xl lg:text-[72px] lg:leading-[1.0]">
              From Keyword to Published Article{' '}
              <span className="text-[#1d63ff]">— In One Platform</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-[#667085]">
              RankPilot is built around a single, end-to-end workflow. Every tool connects to the next — so you never have to export a spreadsheet, switch tabs, or lose context between research and creation.
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
            phaseId="01"
            phaseLabel="Research & Analyze"
            title="Understand your market before you write a single word"
            desc="RankPilot's research layer gives you a complete picture of your keyword landscape, your competitors, and your existing content — all before you plan or create anything."
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
            phaseId="02"
            phaseLabel="Plan & Strategize"
            title="Turn research into a structured content roadmap"
            desc="The planning layer bridges the gap between raw data and execution. Organize your keyword research into topic clusters, generate targeted article ideas, and schedule your content pipeline."
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
            phaseId="03"
            phaseLabel="Create & Optimize"
            title="Generate, refine, and grade content that actually ranks"
            desc="The content layer is where research and planning become published articles. Every piece is shaped by your project's Brand Voice, ICP, and Citation Library — and verified for accuracy before it goes live."
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
              Inside the Generate Wizard
            </div>
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
              You Review the Outline Before a Word Is Written
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#667085]">
              Unlike tools that dump a wall of AI text, RankPilot&apos;s 3-step Generate wizard puts you in control of the structure before the article is written. The result is content that matches your intent — not the AI&apos;s interpretation of it.
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
              Project Configuration
            </div>
            <h2 className="font-display max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
              Every Project Has Its Own Brain
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#667085]">
              Each RankPilot project is configured with its own Brand Voice, Ideal Customer Profile, Citation Library, CTAs, and Cross Check reference document. This is what makes every article sound like it was written by someone who deeply understands the niche — because the AI is given that context before it writes a single word.
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
              The Complete Workflow at a Glance
            </div>
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
              10 Steps from Zero to Published
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
              Ready to Run the Full Workflow?
            </h2>
            <p className="mb-10 text-xl leading-8 text-white/75">
              Start your free 14-day trial and run the complete RankPilot workflow on your own site — no credit card required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-extrabold text-[#1d63ff] shadow-[0_14px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)]"
              >
                Start Free Trial — No Card Required
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-extrabold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
