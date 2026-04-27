'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Bot,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Cloud,
  Code2,
  FileText,
  Fingerprint,
  Gauge,
  Layers3,
  LockKeyhole,
  Menu,
  MessageSquare,
  MousePointer2,
  PackageCheck,
  PieChart,
  Play,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TimerReset,
  Users2,
  X,
  Zap,
} from 'lucide-react'

type IconComponent = typeof Sparkles

type Feature = {
  title: string
  icon: IconComponent
  image: string
  tone: string
}

type WorkStep = {
  title: string
  icon: IconComponent
}

type BenefitTab = {
  label: string
  title: string
  text: string
  image: string
  icon: IconComponent
}

type PricingPlan = {
  name: string
  monthly: number
  yearly: number
  icon: IconComponent
  featured?: boolean
  features: string[]
}

type Testimonial = {
  name: string
  quote: string
  avatar: string
  title: string
}

type Faq = {
  q: string
  a: string
  link: string
}

type Integration = {
  name: string
  image: string
}

const ASSET_BASE = '/assets/reference/'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Questions', href: '#questions' },
]

const features: Feature[] = [
  { title: 'AI-power generated apps', icon: Bot, image: 'features1.webp', tone: 'from-blue-50 to-white' },
  { title: 'Build-in Integrations', icon: Cloud, image: 'features2.webp', tone: 'from-sky-50 to-white' },
  { title: 'User-inter face design', icon: MousePointer2, image: 'features3.webp', tone: 'from-indigo-50 to-white' },
  { title: 'Track Your Success', icon: BarChart3, image: 'features4.webp', tone: 'from-cyan-50 to-white' },
  { title: 'Real-time Collaborations', icon: Users2, image: 'features5.webp', tone: 'from-blue-50 to-white' },
  { title: 'Track Your Productivity', icon: TimerReset, image: 'features6.webp', tone: 'from-slate-50 to-white' },
]

const steps: WorkStep[] = [
  { title: 'Create Your Account & Unlock Possibilities', icon: Fingerprint },
  { title: 'Seamless Real-Time Collaboration', icon: MessageSquare },
  { title: 'Track Progress & Stay Organized', icon: CalendarDays },
  { title: 'Analyze & Optimize for Growth', icon: PieChart },
]

const benefitTabs: BenefitTab[] = [
  {
    label: 'Smart task organization',
    title: 'Tame the Chaos with Smart Task Organization',
    text: 'Organizing your work has never been easier smart task structuring, you can break projects into subtasks assign priorities, set deadlines use custom.',
    image: 'image-tab1.webp',
    icon: Layers3,
  },
  {
    label: 'Built-in time tracking',
    title: 'Seamless Built-In Time Management',
    text: 'Track project effort, daily focus, and team capacity from one uncluttered dashboard built for momentum.',
    image: 'image-tab2.webp',
    icon: Clock3,
  },
  {
    label: 'Mobile-optimize access',
    title: 'Fully Mobile-Optimized SaaS Platform',
    text: 'Stay productive wherever you are with our fully mobile-optimized platform. Access your projects, track progress, and collaborate.',
    image: 'image-tab3-mobile.webp',
    icon: Smartphone,
  },
  {
    label: 'Secure and reliable',
    title: 'Enterprise-Grade Security You Can Trust',
    text: 'Organizing your work has never been easier smart task structuring, you can break projects into subtasks assign priorities, set deadlines use custom.',
    image: 'image-tab4.webp',
    icon: ShieldCheck,
  },
  {
    label: 'User-friendly design',
    title: 'Experience a Truly User-Friendly Interface',
    text: 'A calm, readable workspace keeps priorities clear and helps every team member move from planning to execution faster.',
    image: 'image-tab5.webp',
    icon: Sparkles,
  },
]

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    monthly: 13,
    yearly: 113,
    icon: Rocket,
    features: ['Up to 3 Task Projects', '5 Team Members includes', 'Basic Task Management', 'Real-Time Collaboration', 'Calendar View & email support'],
  },
  {
    name: 'Professional',
    monthly: 48,
    yearly: 468,
    featured: true,
    icon: Zap,
    features: ['Unlimited Projects & Tasks', 'Unlimited (8) Team Members', 'Advanced Task Organization', 'Time Tracking File Attachments', 'Integration with Slack, Google Drive'],
  },
  {
    name: 'Enterprise',
    monthly: 96,
    yearly: 969,
    icon: LockKeyhole,
    features: ['All Professional Features', 'Custom Workflows & Permissions', 'Dedicated Account Manager', 'Advanced Security & Compliance', 'Single Sign-On (SSO)'],
  },
]

const testimonials: Testimonial[] = [
  { name: 'Sarah Linda', title: 'Operations Lead', avatar: 'avatar-image3.webp', quote: '"We\'ve tried multiple tools, but this one hits the sweet spot between simplicity and powerful features team\'s."' },
  { name: 'James Bond', title: 'Product Manager', avatar: 'avatar-image8.webp', quote: '"I love how easy it is to organize tasks, assign roles, and track progress. It helps me stay of everything without ."' },
  { name: 'Priya Donald', title: 'Growth Director', avatar: 'avatar-image7.webp', quote: '"The integration options and the clean interface make this to best task manage tool we\'ve used so far recommend!"' },
  { name: 'Elena Rossi', title: 'Agency Founder', avatar: 'avatar-image6.webp', quote: '"After testing countless apps, this one finally balances ease of use with the depth our team needs."' },
  { name: 'Anna Carter', title: 'Team Strategist', avatar: 'avatar-image9.webp', quote: '"It\'s rare to find a tool that\'s both intuitive and packed with everything a growing team requires."' },
  { name: 'Maria Lopez', title: 'Delivery Manager', avatar: 'avatar-image2.webp', quote: '"From setup to daily use, it delivers exactly what we need — clean, smart, and incredibly efficient."' },
]

const faqs: Faq[] = [
  { q: '1. How is this different from other task management tools?', a: 'Our tool blends modern design with advanced workflow automation, intuitive scheduling, and real-time team insights — giving you control without complexity.', link: 'real-time team insights' },
  { q: '2. Do I need technical skills to use this platform?', a: 'Our platform combines simplicity with powerful features like real-time collaboration, smart task organization, and seamless integrations — all in a clean, intuitive interface.', link: 'seamless integrations' },
  { q: '3. Can I invite team members to my workspace?', a: 'Yes — you can easily invite teammates to collaborate in real time, assign roles, share updates, and manage projects together — all within one unified workspace.', link: 'manage projects together' },
  { q: '4. What happens if I reach the limit of my plan?', a: 'When you reach your plan\'s limit, you\'ll still keep full access to your existing data, but advanced features, extra seats, and premium automation will pause until you upgrade or adjust your workspace.', link: 'premium automation' },
  { q: '5. Do you offer a trial for premium features?', a: 'Yes — you can explore all premium tools free for a limited time, including advanced reporting, custom workflows, and priority support access — no credit card required.', link: 'priority support access' },
]

const integrations: Integration[] = [
  { name: 'Dropbox', image: 'logo-dropbox.webp' },
  { name: 'Pinterest', image: 'logo-pinterest.webp' },
  { name: 'Discord', image: 'logo-discord.webp' },
  { name: 'Telegram', image: 'logo-telegram.webp' },
  { name: 'Mailchimp', image: 'mailchimp.webp' },
  { name: 'Shopify', image: 'shopify.webp' },
  { name: 'Zoom', image: 'zoom.webp' },
  { name: 'MC360', image: 'mc360.webp' },
  { name: 'Team', image: 'logo-team.webp' },
  { name: 'Disqus', image: 'disqus.webp' },
  { name: 'Notion', image: 'notion.webp' },
  { name: 'Linksters', image: 'linksters.webp' },
]

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

function smoothScrollTo(href?: string): void {
  const safeHref = href ?? '#home'
  if (typeof window === 'undefined') return
  const target = document?.querySelector?.(safeHref)
  target?.scrollIntoView?.({ behavior: 'smooth', block: 'start' })
}

function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const textClass = variant === 'dark' ? 'text-white' : 'text-[#101828]'
  const ringOffset = variant === 'dark' ? 'focus:ring-offset-[#071225]' : 'focus:ring-offset-white'
  return (
    <button
      type="button"
      onClick={() => smoothScrollTo('#home')}
      className={`group inline-flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1c6bff] ${ringOffset}`}
      aria-label="RankPilot home"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#1d63ff] text-white shadow-[0_12px_30px_rgba(29,99,255,0.22)] transition-transform duration-300 group-hover:scale-105">
        <Gauge className="h-5 w-5" />
      </span>
      <span className={`font-display text-2xl font-black tracking-tight ${textClass}`}>RankPilot</span>
    </button>
  )
}

function SectionHeading({ eyebrow, title, text, center = true }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}
    >
      <div className={`mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#1d63ff] shadow-[0_10px_35px_rgba(16,24,40,0.07)] ${center ? 'justify-center' : ''}`}>
        <Sparkles className="h-4 w-4" />
        <span>{eyebrow ?? 'RankPilot'}</span>
      </div>
      <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl lg:text-[58px] lg:leading-[1.02]">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-[#667085]">{text}</p> : null}
    </motion.div>
  )
}

function HeroVisual() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 70])

  return (
    <motion.div
      style={{ y }}
      className="relative mx-auto mt-14 max-w-6xl rounded-[28px] bg-white p-3 shadow-[0_36px_100px_rgba(29,99,255,0.18)]"
      initial={{ opacity: 0, y: 44, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
    >
      <div className="relative aspect-[1935/1328] overflow-hidden rounded-[20px] bg-[#eef5ff]">
        <Image src={`${ASSET_BASE}dashboard-banner.webp`} fill priority sizes="(max-width: 768px) 96vw, 1120px" alt="RankPilot task management dashboard preview" className="object-cover" />
      </div>
    </motion.div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const safeNavItems = useMemo(() => navItems ?? [], [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full bg-white/95 shadow-[0_8px_35px_rgba(16,24,40,0.08)] backdrop-blur-md">
      <div className="mx-auto flex h-[78px] w-full max-w-none items-center justify-between px-5 sm:px-8 lg:px-14">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-full bg-[#f4f8ff] p-1 lg:flex" aria-label="Primary navigation">
          {safeNavItems?.map?.((item: { label: string; href: string }) => (
            <button
              key={item?.label ?? item?.href}
              type="button"
              onClick={() => smoothScrollTo(item?.href)}
              className="rounded-full px-5 py-3 text-sm font-bold text-[#25324b] transition-all duration-300 hover:bg-white hover:text-[#1d63ff] hover:shadow-[0_10px_25px_rgba(16,24,40,0.07)]"
            >
              {item?.label ?? ''}
            </button>
          )) ?? null}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => smoothScrollTo('#trial')}
            className="inline-flex items-center gap-2 rounded-full bg-[#101828] px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(16,24,40,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d63ff]"
          >
            <Play className="h-4 w-4" />
            Get a Demo
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value: boolean) => !value)}
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
          {safeNavItems?.map?.((item: { label: string; href: string }) => (
            <button
              key={`mobile-${item?.label ?? item?.href}`}
              type="button"
              onClick={() => {
                smoothScrollTo(item?.href)
                setOpen(false)
              }}
              className="rounded-2xl bg-[#f4f8ff] px-5 py-4 text-left font-bold text-[#25324b]"
            >
              {item?.label ?? ''}
            </button>
          )) ?? null}
          <button type="button" onClick={() => smoothScrollTo('#trial')} className="rounded-2xl bg-[#1d63ff] px-5 py-4 text-left font-extrabold text-white">
            Get a Demo
          </button>
        </div>
      </motion.div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fbfaf4] pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="absolute -left-28 -top-44 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,245,205,0.95)_0%,rgba(255,245,205,0.55)_42%,transparent_68%)]" />
      <div className="absolute left-0 top-0 h-full w-[56%] bg-[radial-gradient(circle_at_32%_52%,rgba(231,242,255,0.95)_0%,rgba(231,242,255,0.7)_36%,transparent_67%)]" />
      <div className="absolute right-[20%] top-0 h-[360px] w-[520px] rounded-b-full bg-[linear-gradient(115deg,rgba(234,243,255,0.96),rgba(234,243,255,0.2)_72%)]" />
      <div className="absolute -bottom-48 right-[-80px] h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,225,211,0.8)_0%,rgba(255,225,211,0.45)_45%,transparent_72%)]" />
      <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="mx-auto max-w-5xl">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-[#bdd7ff] bg-[#edf6ff]/80 px-5 py-2 text-sm font-bold text-[#1d63ff] shadow-[0_10px_30px_rgba(29,99,255,0.08)] backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            <span>AI-Powered SEO Content Platform</span>
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-black tracking-[-0.055em] text-[#1a2233] sm:text-6xl lg:text-[68px] lg:leading-[0.97]">
            Research, Plan, and Create
            <span className="mt-1 block text-[#2457f5]">Content That Ranks</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-8 text-[#4b5568] sm:text-2xl sm:leading-9">
            RankPilot combines keyword research, competitor analysis, content planning, and AI-powered article generation into one seamless workflow. Stop juggling tools and start ranking.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => smoothScrollTo('#pricing')}
              className="inline-flex min-w-[290px] items-center justify-center gap-4 rounded-lg bg-[#2457f5] px-8 py-4 text-lg font-extrabold text-white shadow-[0_18px_40px_rgba(29,99,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b52e7] sm:min-w-0"
            >
              Start Free 14-Day Trial
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => smoothScrollTo('#solutions')}
              className="inline-flex min-w-[220px] items-center justify-center rounded-lg border border-[#d6dce8] bg-white/70 px-8 py-4 text-lg font-extrabold text-[#3b4658] shadow-[0_14px_30px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2457f5] hover:text-[#2457f5] sm:min-w-0"
            >
              See How It Works
            </button>
          </div>
          <p className="mt-5 text-base font-medium text-[#566179]">No credit card required · 14-day free trial · Cancel anytime</p>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  )
}


function FeaturesSection() {
  return (
    <section id="solutions" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading eyebrow="Solutions" title="Powerful Features to Boost Your Productivity" text="Stay ahead with features built for performance grow SaaS and productivity." />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features?.map?.((feature: Feature) => {
            const Icon = feature?.icon ?? Sparkles
            return (
              <motion.article
                variants={reveal}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                key={feature?.title ?? feature?.image}
                className={`group overflow-hidden rounded-[28px] bg-gradient-to-b ${feature?.tone ?? 'from-blue-50 to-white'} p-5 shadow-[0_18px_55px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(29,99,255,0.14)]`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1d63ff] text-white shadow-[0_14px_30px_rgba(29,99,255,0.22)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="font-display text-xl font-black tracking-tight text-[#101828]">{feature?.title ?? ''}</h4>
                </div>
                <div className="relative aspect-[780/460] overflow-hidden rounded-[20px] bg-white">
                  <Image src={`${ASSET_BASE}${feature?.image ?? 'features1.webp'}`} fill sizes="(max-width: 768px) 92vw, 360px" alt={`${feature?.title ?? 'RankPilot feature'} preview`} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </motion.article>
            )
          }) ?? null}
        </motion.div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="overflow-hidden bg-[#edf6ff] py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="How it works" title="No Setup Hassle — Just Start Working" text="No complex setup or training required — our platform is ready to use right out of the box." center={false} />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-9 grid gap-4">
              {steps?.map?.((step: WorkStep, index: number) => {
                const Icon = step?.icon ?? Check
                return (
                  <motion.div key={step?.title ?? index} variants={reveal} className="group flex items-center gap-4 rounded-[22px] bg-white p-5 shadow-[0_16px_45px_rgba(16,24,40,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(29,99,255,0.12)]">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#1d63ff] text-white"><Icon className="h-5 w-5" /></span>
                    <h4 className="font-display text-lg font-black tracking-tight text-[#101828]">{step?.title ?? ''}</h4>
                  </motion.div>
                )
              }) ?? null}
            </motion.div>
          </div>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="relative rounded-[32px] bg-white p-3 shadow-[0_28px_80px_rgba(29,99,255,0.16)]">
            <div className="relative aspect-[1905/900] overflow-hidden rounded-[24px] bg-[#eef5ff]">
              <Image src={`${ASSET_BASE}dashboard-2.webp`} fill sizes="(max-width: 1024px) 92vw, 650px" alt="RankPilot setup-free workflow dashboard" className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const [active, setActive] = useState(0)
  const safeActive = active >= 0 && active < (benefitTabs?.length ?? 0) ? active : 0
  const current = benefitTabs?.[safeActive] ?? benefitTabs?.[0]
  const CurrentIcon = current?.icon ?? Layers3

  return (
    <section id="benefits" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading eyebrow="Benefits" title="What Makes Our Users Stick With Us" text="Our clients love how effortless task management becomes with our platform." />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {benefitTabs?.map?.((tab: BenefitTab, index: number) => {
            const Icon = tab?.icon ?? Check
            const selected = safeActive === index
            return (
              <button key={tab?.label ?? index} type="button" onClick={() => setActive(index)} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold shadow-[0_12px_35px_rgba(16,24,40,0.07)] transition-all duration-300 ${selected ? 'bg-[#1d63ff] text-white' : 'bg-[#edf6ff] text-[#25324b] hover:bg-white hover:text-[#1d63ff]'}`}>
                <Icon className="h-4 w-4" />
                {tab?.label ?? ''}
              </button>
            )
          }) ?? null}
        </div>
        <motion.div key={current?.title ?? safeActive} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mt-12 grid items-center gap-10 rounded-[36px] bg-[#edf6ff] p-5 shadow-[0_24px_70px_rgba(16,24,40,0.08)] lg:grid-cols-2 lg:p-10">
          <div>
            <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#1d63ff] text-white shadow-[0_16px_34px_rgba(29,99,255,0.25)]"><CurrentIcon className="h-6 w-6" /></span>
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">{current?.title ?? ''}</h2>
            <p className="mt-5 text-lg leading-8 text-[#667085]">{current?.text ?? ''}</p>
            <ul className="mt-7 grid gap-3 text-[#25324b]">
              {['Transforming Complexity Into Clarity', 'Unlock Efficiency, Scale Faster, and Work Smarter']?.map?.((item: string) => (
                <li key={item} className="flex items-center gap-3 font-bold"><Check className="h-5 w-5 text-[#1d63ff]" />{item}</li>
              )) ?? null}
            </ul>
            <button type="button" onClick={() => smoothScrollTo('#pricing')} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#101828] px-7 py-4 font-extrabold text-white shadow-[0_16px_35px_rgba(16,24,40,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d63ff]">
              Get 14th-day Free Trial <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="rounded-[28px] bg-white p-3 shadow-[0_22px_60px_rgba(29,99,255,0.12)]">
            <div className="relative aspect-[930/681] overflow-hidden rounded-[20px] bg-[#eef5ff]">
              <Image src={`${ASSET_BASE}${current?.image ?? 'image-tab1.webp'}`} fill sizes="(max-width: 1024px) 88vw, 520px" alt={`${current?.title ?? 'RankPilot benefit'} preview`} className="object-contain" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
  return (
    <section id="pricing" className="bg-[#edf6ff] py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading eyebrow="Pricing" title="Transparent Pricing Plan" text="We offer flexible pricing plans designed to fit teams of all sizes — from solo" />
        <div className="mx-auto mt-10 flex w-fit rounded-full bg-white p-2 shadow-[0_14px_40px_rgba(16,24,40,0.08)]">
          {(['monthly', 'yearly'] as const)?.map?.((mode: 'monthly' | 'yearly') => (
            <button key={mode} type="button" onClick={() => setBilling(mode)} className={`rounded-full px-6 py-3 text-sm font-extrabold capitalize transition-all duration-300 ${billing === mode ? 'bg-[#1d63ff] text-white' : 'text-[#25324b] hover:bg-[#edf6ff]'}`}>
              {mode === 'monthly' ? 'Monthly Pricing' : 'Yearly Pricing'}
            </button>
          )) ?? null}
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans?.map?.((plan: PricingPlan) => {
            const Icon = plan?.icon ?? PackageCheck
            const price = billing === 'monthly' ? plan?.monthly : plan?.yearly
            return (
              <motion.article key={plan?.name ?? price} variants={reveal} className={`relative rounded-[32px] p-7 shadow-[0_24px_70px_rgba(16,24,40,0.09)] transition-all duration-300 hover:-translate-y-2 ${plan?.featured ? 'bg-[#101828] text-white' : 'bg-white text-[#101828]'}`}>
                {plan?.featured ? <div className="absolute right-6 top-6 rounded-full bg-[#1d63ff] px-4 py-2 text-xs font-black text-white">Popular</div> : null}
                <span className={`grid h-14 w-14 place-items-center rounded-2xl ${plan?.featured ? 'bg-white text-[#1d63ff]' : 'bg-[#edf6ff] text-[#1d63ff]'}`}><Icon className="h-6 w-6" /></span>
                <h3 className="mt-6 font-display text-2xl font-black tracking-tight">{plan?.name ?? ''}</h3>
                <p className="mt-6 flex items-end gap-1 font-display text-5xl font-black tracking-tighter"><span>$</span>{price?.toFixed?.(0) ?? '0'} <span className={`mb-2 text-sm font-bold tracking-normal ${plan?.featured ? 'text-white/65' : 'text-[#667085]'}`}>/per month</span></p>
                <ul className="mt-8 grid gap-4">
                  {plan?.features?.map?.((item: string) => (
                    <li key={item} className="flex gap-3 text-sm font-bold"><Check className={`mt-0.5 h-5 w-5 shrink-0 ${plan?.featured ? 'text-[#66a3ff]' : 'text-[#1d63ff]'}`} />{item}</li>
                  )) ?? null}
                </ul>
                <button type="button" onClick={() => smoothScrollTo('#trial')} className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-extrabold transition-all duration-300 ${plan?.featured ? 'bg-[#1d63ff] text-white hover:bg-white hover:text-[#1d63ff]' : 'bg-[#101828] text-white hover:bg-[#1d63ff]'}`}>
                  Choose Package <ArrowRight className="h-5 w-5" />
                </button>
                <p className={`mt-5 flex items-center gap-2 text-sm font-bold ${plan?.featured ? 'text-white/65' : 'text-[#667085]'}`}><ShieldCheck className="h-4 w-4" />No hidden charge included</p>
              </motion.article>
            )
          }) ?? null}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading eyebrow="Testimonials" title="Clients Testimonials" text="Our users are at the heart of everything we do and their feedback says it all." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials?.map?.((item: Testimonial) => (
            <motion.article key={item?.name ?? item?.avatar} variants={reveal} className="rounded-[28px] bg-[#edf6ff] p-6 shadow-[0_18px_55px_rgba(16,24,40,0.07)] transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_26px_70px_rgba(29,99,255,0.12)]">
              <div className="mb-5 flex gap-1 text-[#ffb800]">{[0, 1, 2, 3, 4]?.map?.((star: number) => <Star key={star} className="h-4 w-4 fill-current" />) ?? null}</div>
              <p className="min-h-[104px] text-base leading-7 text-[#25324b]">{item?.quote ?? ''}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-[0_10px_25px_rgba(16,24,40,0.1)]">
                  <Image src={`${ASSET_BASE}${item?.avatar ?? 'avatar-image3.webp'}`} fill sizes="56px" alt={`${item?.name ?? 'Client'} avatar`} className="object-cover" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-black tracking-tight text-[#101828]">{item?.name ?? ''}</h4>
                  <p className="text-sm font-bold text-[#667085]">{item?.title ?? ''}</p>
                </div>
              </div>
            </motion.article>
          )) ?? null}
        </motion.div>
      </div>
    </section>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="questions" className="bg-[#edf6ff] py-24">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <SectionHeading eyebrow="Questions" title="Still Curious? Find Your Answers Below" />
        <div className="mt-12 grid gap-4">
          {faqs?.map?.((faq: Faq, index: number) => {
            const isOpen = openIndex === index
            return (
              <motion.div key={faq?.q ?? index} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="overflow-hidden rounded-[24px] bg-white shadow-[0_16px_45px_rgba(16,24,40,0.07)]">
                <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left font-display text-xl font-black tracking-tight text-[#101828]">
                  <span>{faq?.q ?? ''}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#1d63ff] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} className="overflow-hidden">
                  <div className="px-6 pb-6 text-base leading-8 text-[#667085]">
                    {faq?.a ?? ''} <span className="font-bold text-[#1d63ff]">{faq?.link ?? ''}</span>
                  </div>
                </motion.div>
              </motion.div>
            )
          }) ?? null}
        </div>
      </div>
    </section>
  )
}

function IntegrationsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading eyebrow="Integrations" title="Seamless Integrations" text="Our platform seamlessly integrates with the tools your team already knows" />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {integrations?.map?.((integration: Integration) => (
            <motion.div key={integration?.name ?? integration?.image} variants={reveal} className="group rounded-[22px] bg-[#edf6ff] p-5 shadow-[0_14px_35px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_55px_rgba(29,99,255,0.12)]">
              <div className="relative mx-auto h-[42px] w-full max-w-[150px]">
                <Image src={`${ASSET_BASE}${integration?.image ?? 'notion.webp'}`} fill sizes="150px" alt={`${integration?.name ?? 'Integration'} logo`} className="object-contain" />
              </div>
            </motion.div>
          )) ?? null}
        </motion.div>
      </div>
    </section>
  )
}

function TrialSection() {
  return (
    <section id="trial" className="bg-white px-5 py-10 sm:px-8">
      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mx-auto max-w-[1200px] overflow-hidden rounded-[38px] bg-[#1d63ff] p-8 text-center shadow-[0_30px_90px_rgba(29,99,255,0.25)] sm:p-14">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-3xl bg-white text-[#1d63ff] shadow-[0_18px_45px_rgba(16,24,40,0.12)]">
          <FileText className="h-7 w-7" />
        </div>
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-[58px] lg:leading-[1.03]">Take the First Step to Better Task Management</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/80">Sign up today and unlock a powerful suite of tools designed to help you organize tasks</p>
        <button type="button" onClick={() => smoothScrollTo('#pricing')} className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-extrabold text-[#1d63ff] shadow-[0_18px_45px_rgba(16,24,40,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#101828] hover:text-white">
          Get Started With Us <ArrowRight className="h-5 w-5" />
        </button>
        <div className="mt-9 flex flex-wrap justify-center gap-4 text-sm font-bold text-white/80">
          {['Special Discounts & Offers', 'Webinars & Workshops', 'User Spotlights']?.map?.((item: string) => <span key={item} className="inline-flex items-center gap-2"><Check className="h-4 w-4" />{item}</span>) ?? null}
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071225] pt-20 text-white">
      <div className="absolute inset-x-0 bottom-0 h-56 opacity-20" style={{ backgroundImage: `url(${ASSET_BASE}bg-footer.svg)`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }} />
      <div className="relative mx-auto max-w-[1200px] px-5 pb-10 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Logo variant="dark" />
            <h2 className="mt-8 max-w-lg font-display text-4xl font-black tracking-[-0.04em] text-white">Bring your website idea to life by guided SaaS assistance</h2>
            <button type="button" onClick={() => smoothScrollTo('#pricing')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1d63ff] px-7 py-4 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1d63ff]">
              Get Started With Us <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          {[
            { heading: 'Product', links: ['Documentation', 'Changelog', 'Pricing', 'Parsers', 'SDTF New', 'Use Cases', 'Launch Week'] },
            { heading: 'Resources', links: ['Guide', 'Blog', 'Customers', 'Help Center'] },
            { heading: 'Links', links: ['Contact', 'Security'] },
          ]?.map?.((group: { heading: string; links: string[] }) => (
            <div key={group?.heading ?? ''}>
              <h4 className="mb-5 font-display text-lg font-black tracking-tight text-white">{group?.heading ?? ''}</h4>
              <ul className="grid gap-3 text-sm font-bold text-white/60">
                {group?.links?.map?.((link: string) => <li key={link}><button type="button" onClick={() => smoothScrollTo(link === 'Pricing' ? '#pricing' : '#home')} className="transition-colors duration-300 hover:text-white">{link}</button></li>) ?? null}
              </ul>
            </div>
          )) ?? null}
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm font-bold text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>©2025 RankPilot · All rights reserved.</p>
          <div className="flex gap-4">
            <button type="button" onClick={() => smoothScrollTo('#solutions')} className="hover:text-white">Product</button>
            <button type="button" onClick={() => smoothScrollTo('#benefits')} className="hover:text-white">Resources</button>
            <button type="button" onClick={() => smoothScrollTo('#questions')} className="hover:text-white">Security</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function RankPilotLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#101828]">
      <Header />
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <IntegrationsSection />
      <TrialSection />
      <Footer />
    </main>
  )
}