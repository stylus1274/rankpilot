'use client'

import Link from 'next/link'
import { useMemo, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Fingerprint,
  GitCompare,
  Layers3,
  Menu,
  MessageSquare,
  MousePointer2,
  PieChart,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  TrendingUp,
  Users2,
  X,
  Zap,
  Cloud,
} from 'lucide-react'
import homepageContent from '@/content/homepage.json'

// ─── ICON MAPS ────────────────────────────────────────────────────────────────
type IconComponent = typeof Sparkles
const featureIcons: IconComponent[] = [Bot, Cloud, MousePointer2, BarChart3, Users2, TimerReset]
const stepIcons: IconComponent[] = [Fingerprint, MessageSquare, CalendarDays, PieChart]

function smoothScrollTo(selector: string) {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ─── HEADER ───────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const router = useRouter()
  const content = homepageContent as any
  const safeNavItems = useMemo(
    () => (content?.navItems ?? []) as Array<{ label: string; href: string }>,
    [content]
  )

  const handleNavClick = useCallback(
    (href: string) => {
      setOpen(false)
      if (href.startsWith('#')) smoothScrollTo(href)
      else router.push(href)
    },
    [router]
  )

  const featureDropdownItems = [
    { label: 'Rank Tracking', desc: 'Monitor keyword positions daily', href: '/features#rank-tracking', icon: TrendingUp },
    { label: 'AI Overview Monitoring', desc: 'Track AI Overview appearances', href: '/features#ai-overview', icon: Sparkles },
    { label: 'Content Gap Analysis', desc: 'Find missing topic opportunities', href: '/features#content-gap', icon: GitCompare },
    { label: 'Keyword Research', desc: 'Discover high-intent keywords', href: '/features#keyword-research', icon: SearchCheck },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2457f5]">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="font-display text-xl font-black tracking-tight text-[#1a2233]">RankPilot</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold text-[#3b4658] transition hover:bg-[#f4f6fb] hover:text-[#2457f5]"
            >
              Features <ChevronDown className={`h-3.5 w-3.5 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
            </button>
            {featuresOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-72 rounded-2xl border border-[#e8eaf0] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                {featureDropdownItems.map((item) => (
                  <Link key={item.label} href={item.href} className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-[#f4f6fb]">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef3ff]">
                      <item.icon className="h-4 w-4 text-[#2457f5]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a2233]">{item.label}</p>
                      <p className="text-xs text-[#8a94a6]">{item.desc}</p>
                    </div>
                  </Link>
                ))}
                <div className="mt-1 border-t border-[#f0f2f8] pt-1">
                  <Link href="/features" className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-[#2457f5] transition hover:bg-[#f4f6fb]">
                    View all features <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
          {safeNavItems
            .filter((n) => n.label !== 'Features')
            .map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-[#3b4658] transition hover:bg-[#f4f6fb] hover:text-[#2457f5]"
              >
                {item.label}
              </button>
            ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="https://app.rankpilot.cc/login" className="text-sm font-semibold text-[#3b4658] transition hover:text-[#2457f5]">
            Log in
          </Link>
          <Link href="/pricing" className="rounded-lg bg-[#2457f5] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(36,87,245,0.25)] transition hover:bg-[#0b52e7]">
            Start Free Trial
          </Link>
        </div>

        <button type="button" className="rounded-lg p-2 text-[#3b4658] md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#f0f2f8] bg-white px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#8a94a6]">Features</div>
            {featureDropdownItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#1a2233] transition hover:bg-[#f4f6fb]">
                <item.icon className="h-4 w-4 text-[#2457f5]" />
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-[#f0f2f8]" />
            {safeNavItems
              .filter((n) => n.label !== 'Features')
              .map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#3b4658] transition hover:bg-[#f4f6fb]"
                >
                  {item.label}
                </button>
              ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link href="https://app.rankpilot.cc/login" className="rounded-xl border border-[#e0e4ec] px-4 py-3 text-center text-sm font-bold text-[#3b4658]">Log in</Link>
              <Link href="/pricing" className="rounded-xl bg-[#2457f5] px-4 py-3 text-center text-sm font-bold text-white">Start Free Trial</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// ─── WORKFLOW CARD (right side of hero) ───────────────────────────────────────
function WorkflowCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      className="w-full max-w-[580px]"
    >
      <div className="flex flex-col gap-3">
        {/* Step 01 - collapsed */}
        <div className="rounded-2xl border border-[#e8eaf0] bg-white/70 px-6 py-4 backdrop-blur-sm">
          <span className="font-mono text-sm font-semibold tracking-widest text-[#c0c4d0]">01 RESEARCH</span>
        </div>
        {/* Step 02 - collapsed */}
        <div className="rounded-2xl border border-[#e8eaf0] bg-white/70 px-6 py-4 backdrop-blur-sm">
          <span className="font-mono text-sm font-semibold tracking-widest text-[#c0c4d0]">02 PLAN</span>
        </div>
        {/* Step 03 - active */}
        <div className="rounded-2xl border border-[#dce3f8] bg-white px-6 py-5 shadow-[0_8px_40px_rgba(36,87,245,0.10)]">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-sm font-bold tracking-widest text-[#2457f5]">03 CREATE</span>
            <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">drafting</span>
          </div>
          <p className="mb-2 text-[15px] font-bold text-[#1a2233]">Best AI content optimization tools for SEO</p>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#f0f4ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">2,900 vol</span>
            <span className="rounded-full bg-[#f0f4ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">KD 34</span>
            <span className="rounded-full bg-[#f0f4ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">9 clusters</span>
          </div>
          <div className="mb-4 flex h-[120px] items-center justify-center rounded-xl bg-[#f8f9fc] text-sm text-[#b0b8cc]">
            editor screenshot
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2457f5]" />
              <span className="text-sm text-[#566179]">Generating section 4 of 9</span>
            </div>
            <button type="button" className="rounded-xl bg-[#1a2233] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#2457f5]">
              Publish
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── V2 HERO ──────────────────────────────────────────────────────────────────
function HeroV2() {
  const stats = [
    { value: '12', unit: 'min', label: 'keyword to publishable brief' },
    { value: '3.4x', unit: '', label: 'publishing velocity' },
    { value: '40+', unit: '', label: 'SERPs read per brief' },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f7f2] pb-20 pt-28 sm:pb-28 sm:pt-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute right-0 top-0 h-[70%] w-[55%] bg-[radial-gradient(ellipse_at_top_right,rgba(210,220,255,0.55)_0%,rgba(230,235,255,0.25)_45%,transparent_75%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-[40%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,240,255,0.3)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-center lg:gap-12">
          {/* LEFT */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d0d8f0] bg-white px-4 py-2 text-sm font-semibold text-[#1a2233] shadow-sm"
            >
              <span>Six tools replaced by one</span>
              <span className="rounded-full bg-[#2457f5] px-2.5 py-0.5 text-xs font-bold text-white">v3.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display text-[52px] font-black leading-[1.0] tracking-[-0.04em] text-[#1a2233] sm:text-[64px] lg:text-[72px]"
            >
              Stop juggling SEO<br />tools.<br />
              <span className="text-[#2457f5]">Start shipping<br />content that ranks.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-[480px] text-lg leading-7 text-[#566179]"
            >
              RankPilot runs the whole loop — keyword research, competitor teardown, cluster planning, AI drafting — against one source of truth per client.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2457f5] px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_32px_rgba(36,87,245,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#0b52e7]"
              >
                Start free 14-day trial
              </Link>
              <button
                type="button"
                onClick={() => smoothScrollTo('#features-v2')}
                className="inline-flex items-center gap-2 text-base font-semibold text-[#1a2233] transition hover:text-[#2457f5]"
              >
                See how it works <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 border-t border-[#e0e4ec]"
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl font-black tracking-tight text-[#1a2233]">{s.value}</span>
                    {s.unit && <span className="text-sm font-semibold text-[#566179]">{s.unit}</span>}
                  </div>
                  <p className="mt-0.5 text-sm text-[#8a94a6]">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[48%] lg:flex-shrink-0">
            <WorkflowCard />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
function FeaturesV2() {
  const content = homepageContent as any
  const safeFeatures = useMemo(
    () => (content?.features ?? []) as Array<{ title: string; text: string }>,
    [content]
  )
  return (
    <section id="features-v2" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-black tracking-tight text-[#1a2233] sm:text-5xl">
            {content?.featuresTitle ?? 'Everything you need to rank'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#566179]">{content?.featuresSubtitle ?? ''}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safeFeatures.map((f, i) => {
            const Icon = featureIcons[i] ?? Sparkles
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-[#eaecf0] bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef3ff]">
                  <Icon className="h-5 w-5 text-[#2457f5]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1a2233]">{f.title}</h3>
                <p className="text-sm leading-6 text-[#566179]">{f.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
function HowItWorksV2() {
  const content = homepageContent as any
  const safeSteps = useMemo(
    () => (content?.steps ?? []) as Array<{ title: string; text: string }>,
    [content]
  )
  return (
    <section className="bg-[#f8f9fc] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-black tracking-tight text-[#1a2233] sm:text-5xl">
            {content?.stepsTitle ?? 'How it works'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#566179]">{content?.stepsSubtitle ?? ''}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {safeSteps.map((s, i) => {
            const Icon = stepIcons[i] ?? Sparkles
            return (
              <div key={s.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2457f5] shadow-[0_8px_24px_rgba(36,87,245,0.22)]">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#2457f5]">Step {i + 1}</div>
                <h3 className="mb-2 text-lg font-bold text-[#1a2233]">{s.title}</h3>
                <p className="text-sm leading-6 text-[#566179]">{s.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── PRICING ──────────────────────────────────────────────────────────────────
function PricingV2() {
  const content = homepageContent as any
  const safePlans = useMemo(
    () => (content?.pricing ?? []) as Array<{ name: string; monthly: number; yearly: number; featured?: boolean; features: string[] }>,
    [content]
  )
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-black tracking-tight text-[#1a2233] sm:text-5xl">
            {content?.pricingTitle ?? 'Simple pricing'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#566179]">{content?.pricingSubtitle ?? ''}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safePlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${plan.featured ? 'border-[#2457f5] bg-[#2457f5] text-white shadow-[0_20px_60px_rgba(36,87,245,0.3)]' : 'border-[#eaecf0] bg-white'}`}
            >
              <h3 className={`mb-1 text-xl font-black ${plan.featured ? 'text-white' : 'text-[#1a2233]'}`}>{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-1">
                <span className={`font-display text-4xl font-black ${plan.featured ? 'text-white' : 'text-[#1a2233]'}`}>${plan.monthly}</span>
                <span className={`text-sm ${plan.featured ? 'text-blue-200' : 'text-[#8a94a6]'}`}>/mo</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.featured ? 'text-blue-200' : 'text-[#2457f5]'}`} />
                    <span className={plan.featured ? 'text-blue-100' : 'text-[#566179]'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className={`block rounded-xl py-3 text-center text-sm font-bold transition ${plan.featured ? 'bg-white text-[#2457f5] hover:bg-blue-50' : 'bg-[#2457f5] text-white hover:bg-[#0b52e7]'}`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA + FOOTER ─────────────────────────────────────────────────────────────
function CtaV2() {
  return (
    <section className="bg-[#1a2233] py-20">
      <div className="mx-auto max-w-[800px] px-5 text-center sm:px-8">
        <h2 className="font-display text-4xl font-black text-white sm:text-5xl">Ready to rank faster?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#8a94a6]">
          Join thousands of SEO teams using RankPilot to research, plan, and publish content that ranks.
        </p>
        <Link
          href="/pricing"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2457f5] px-8 py-4 text-base font-bold text-white shadow-[0_12px_32px_rgba(36,87,245,0.35)] transition hover:bg-[#0b52e7]"
        >
          Start Free Trial <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

function FooterV2() {
  return (
    <footer className="border-t border-[#eaecf0] bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2457f5]">
              <Zap className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-display text-lg font-black text-[#1a2233]">RankPilot</span>
          </div>
          <p className="text-sm text-[#8a94a6]">© {new Date().getFullYear()} RankPilot. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/blog" className="text-sm text-[#566179] hover:text-[#2457f5]">Blog</Link>
            <Link href="/pricing" className="text-sm text-[#566179] hover:text-[#2457f5]">Pricing</Link>
            <Link href="/contact" className="text-sm text-[#566179] hover:text-[#2457f5]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── PAGE EXPORT ──────────────────────────────────────────────────────────────
export default function HomeV2() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#101828]">
      <Header />
      <HeroV2 />
      <FeaturesV2 />
      <HowItWorksV2 />
      <PricingV2 />
      <CtaV2 />
      <FooterV2 />
    </main>
  )
}
