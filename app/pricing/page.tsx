"use client"
// ─── Design tokens (matches how-it-works/page.tsx & features/page.tsx) ────────
// Font: Plus Jakarta Sans (--font-display) + DM Sans (--font-sans)
// Primary: #1d63ff / #0b52e7   Dark bg: #071225   Body text: #667085
// Background: #fbfaf4   Cards: white, rounded-[28px], shadow soft-blue
// Header: fixed white/95 backdrop-blur, pill nav in #f4f8ff
// Section rhythm: py-24 / py-32, max-w-[1200px] px-5 sm:px-8
// ALL CONTENT DRIVEN BY content/pricing.json — edit there, not here
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import content from '@/content/pricing.json'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Gauge,
  LockKeyhole,
  Menu,
  Rocket,
  X,
  Zap,
} from 'lucide-react'

// ─── Motion helpers ───────────────────────────────────────────────────────────
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

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

// ─── Plan icon map ─────────────────────────────────────────────────────────────
const planIcons: Record<string, React.ElementType> = {
  Starter: Rocket,
  Professional: Zap,
  Enterprise: LockKeyhole,
}

// ─── Comparison rows (visual table — kept static, not in JSON) ────────────────
const comparisonRows = [
  { feature: 'Projects', starter: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Keyword Lookups', starter: '50 / mo', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'AI Article Generator', starter: '5 / mo', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'GSC Analyzer', starter: false, pro: true, enterprise: true },
  { feature: 'Competitor Analyzer', starter: false, pro: true, enterprise: true },
  { feature: 'Topic Clusters', starter: false, pro: true, enterprise: true },
  { feature: 'Brand Voice & ICP', starter: false, pro: true, enterprise: true },
  { feature: 'Internal Linking', starter: false, pro: true, enterprise: true },
  { feature: 'Cross Check', starter: false, pro: true, enterprise: true },
  { feature: 'White-label Reports', starter: false, pro: false, enterprise: true },
  { feature: 'API Access', starter: false, pro: false, enterprise: true },
  { feature: 'SSO / SAML', starter: false, pro: false, enterprise: true },
  { feature: 'Dedicated Account Manager', starter: false, pro: false, enterprise: true },
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
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden border-t border-[#f0f4ff] bg-white lg:hidden"
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                item.href === '/pricing' ? 'bg-[#eef4ff] text-[#1d63ff]' : 'text-[#25324b] hover:bg-[#f4f8ff]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2 border-t border-[#f0f4ff] pt-3">
            <Link href="/" className="rounded-xl border border-[#e4e9f0] px-4 py-3 text-center text-sm font-bold text-[#25324b]">Log In</Link>
            <Link href="/" className="rounded-xl bg-[#1d63ff] px-4 py-3 text-center text-sm font-extrabold text-white">Get Started</Link>
          </div>
        </nav>
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

// ─── FAQ item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#e8edf5]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-black text-[#071225]">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#1d63ff] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-7 text-[#667085]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Cell helper ─────────────────────────────────────────────────────────────
function Cell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value
      ? <Check className="mx-auto h-5 w-5 text-[#1d63ff]" strokeWidth={2.5} />
      : <X className="mx-auto h-4 w-4 text-gray-200" />
  }
  return <span className="text-sm font-semibold text-[#374151]">{value}</span>
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  const { seo, hero, plans, faqs, cta } = content

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <Header />
      <main className="bg-[#fbfaf4] pt-[78px]">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#fbfaf4] pb-20 pt-[94px] sm:pb-24 sm:pt-[94px]">
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
                {hero.badge}
              </div>
              <h1 className="font-display text-5xl font-black tracking-[-0.04em] text-[#071225] sm:text-6xl lg:text-7xl">
                {hero.headline}{' '}
                <span className="bg-gradient-to-r from-[#1d63ff] to-[#7c3aed] bg-clip-text text-transparent">
                  {hero.headlineAccent}
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#667085]">
                {hero.subheadline}
              </p>
              {/* Billing toggle */}
              <div className="mt-10 inline-flex items-center gap-1 rounded-full border border-[#e4e9f0] bg-white p-1 shadow-[0_8px_30px_rgba(16,24,40,0.07)]">
                {(['monthly', 'yearly'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setBilling(mode)}
                    className={`rounded-full px-6 py-2.5 text-sm font-extrabold transition-all duration-300 ${
                      billing === mode
                        ? 'bg-[#1d63ff] text-white shadow-[0_8px_20px_rgba(29,99,255,0.4)]'
                        : 'text-[#667085] hover:text-[#1d63ff]'
                    }`}
                  >
                    {mode === 'monthly' ? 'Monthly' : 'Yearly'}
                    {mode === 'yearly' && (
                      <span className={`ml-2 rounded-full px-2 py-0.5 text-xs font-black ${billing === 'yearly' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-50 text-emerald-600'}`}>
                        Save 20%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Plan cards ───────────────────────────────────────────────────── */}
        <section className="relative z-10 mx-auto -mt-16 max-w-[1200px] px-5 pb-24 sm:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid gap-6 lg:grid-cols-3"
          >
            {plans.map((plan) => {
              const Icon = planIcons[plan.name] ?? Zap
              const price = billing === 'monthly' ? plan.monthly : plan.yearly
              return (
                <motion.article
                  key={plan.name}
                  variants={reveal}
                  className={`relative flex flex-col rounded-[32px] p-8 shadow-[0_24px_70px_rgba(16,24,40,0.1)] transition-all duration-300 hover:-translate-y-2 ${
                    plan.featured
                      ? 'bg-[#071225] text-white'
                      : 'bg-white text-[#071225]'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute right-6 top-6 rounded-full bg-[#1d63ff] px-4 py-1.5 text-xs font-black text-white shadow-[0_8px_20px_rgba(29,99,255,0.4)]">
                      Most Popular
                    </div>
                  )}
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${plan.featured ? 'bg-white text-[#1d63ff]' : 'bg-[#edf6ff] text-[#1d63ff]'}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-black tracking-tight">{plan.name}</h3>
                  <p className={`mt-2 text-sm leading-6 ${plan.featured ? 'text-white/55' : 'text-[#667085]'}`}>{plan.desc}</p>
                  <div className="mt-6 flex items-end gap-1">
                    <span className="font-display text-5xl font-black tracking-tighter">${price}</span>
                    <span className={`mb-2 text-sm font-bold ${plan.featured ? 'text-white/55' : 'text-[#667085]'}`}>/mo</span>
                  </div>
                  {billing === 'yearly' && (
                    <p className={`mt-1 text-xs font-bold ${plan.featured ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      Billed annually · Save ${(plan.monthly - plan.yearly) * 12}/yr
                    </p>
                  )}
                  <ul className="mt-8 flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm font-semibold">
                        <Check className={`mt-0.5 h-5 w-5 shrink-0 ${plan.featured ? 'text-[#66a3ff]' : 'text-[#1d63ff]'}`} />
                        <span className={plan.featured ? 'text-white/80' : 'text-[#374151]'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <Link
                      href="/"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5 ${
                        plan.featured
                          ? 'bg-[#1d63ff] text-white shadow-[0_14px_30px_rgba(29,99,255,0.35)] hover:bg-[#0b52e7]'
                          : 'bg-[#071225] text-white hover:bg-[#1d63ff]'
                      }`}
                    >
                      Start Free Trial <ArrowRight className="h-4 w-4" />
                    </Link>
                    <p className={`mt-3 text-center text-xs font-bold ${plan.featured ? 'text-white/40' : 'text-[#9ca3af]'}`}>
                      14-day free trial · No credit card required
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </section>

        {/* ── Feature comparison table ──────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-14 text-center"
            >
              <h2 className="font-display text-4xl font-black tracking-[-0.04em] text-[#071225] sm:text-5xl">
                Compare All Features
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[#667085]">
                See exactly what&apos;s included in each plan before you commit.
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
                      <th className="px-6 py-5 text-center text-sm font-semibold text-[#9ca3af]">{plans[0]?.name}</th>
                      <th className="px-6 py-5 text-center">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1d63ff] px-4 py-2 text-xs font-extrabold text-white">
                          <Zap className="h-3 w-3" /> {plans[1]?.name}
                        </span>
                      </th>
                      <th className="px-6 py-5 text-center text-sm font-semibold text-[#9ca3af]">{plans[2]?.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className={`border-b border-[#f8f9ff] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafbff]'}`}>
                        <td className="px-8 py-4 font-medium text-[#374151]">{row.feature}</td>
                        <td className="px-6 py-4 text-center"><Cell value={row.starter} /></td>
                        <td className="px-6 py-4 text-center"><Cell value={row.pro} /></td>
                        <td className="px-6 py-4 text-center"><Cell value={row.enterprise} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
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
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[#667085]">
              Everything you need to know before getting started.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto max-w-3xl"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={reveal}>
                <FaqItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
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
                {cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-xl leading-8 text-white/55">
                {cta.desc}
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={cta.buttonHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1d63ff] px-8 py-4 text-base font-extrabold text-white shadow-[0_14px_40px_rgba(29,99,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]"
                >
                  {cta.buttonText} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={cta.secondaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {cta.secondaryText}
                </Link>
              </div>
              <p className="mt-6 text-sm font-bold text-white/35">
                {cta.trustLine}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
