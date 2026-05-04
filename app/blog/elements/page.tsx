'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  Quote,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Minus,
  Code2,
  Zap,
  Star,
  BookOpen,
  BarChart3,
} from 'lucide-react'

// ─── Design tokens ────────────────────────────────────────────────────────────
// Style: Clean editorial, RankPilot brand palette (#2457f5 primary, #071225 dark, #4b5568 body)
// Layout: Single-column 860px article width, generous vertical rhythm

// ─── Nav ──────────────────────────────────────────────────────────────────────
const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e8edf5]/60 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] w-full max-w-none items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2457f5]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2.2"/><path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <span className="font-display text-xl font-black tracking-[-0.03em] text-[#071225]">RankPilot</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-2xl border border-[#e8edf5] bg-[#f8fafc] px-2 py-1.5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl px-4 py-2 text-sm font-semibold text-[#4b5568] transition-colors hover:bg-white hover:text-[#071225]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/" className="rounded-2xl bg-[#f4f8ff] px-5 py-4 text-left font-bold text-[#25324b]">Log In</Link>
          <Link href="/pricing" className="rounded-2xl bg-[#1d63ff] px-5 py-4 text-left font-extrabold text-white">Get Started</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e8edf5] lg:hidden">
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5"><span className="block h-0.5 w-5 bg-[#071225]" /><span className="block h-0.5 w-5 bg-[#071225]" /><span className="block h-0.5 w-5 bg-[#071225]" /></div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-[#e8edf5] bg-white px-5 py-4 lg:hidden">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block py-3 text-sm font-semibold text-[#4b5568]" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-20 scroll-mt-24">
      <div className="mb-8 flex items-center gap-3">
        <span className="inline-block rounded-full bg-[#eef4ff] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#2457f5]">{label}</span>
        <div className="h-px flex-1 bg-[#e8edf5]" />
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  )
}

// ─── Element label ────────────────────────────────────────────────────────────
function ElementLabel({ name, description }: { name: string; description?: string }) {
  return (
    <div className="mb-3">
      <p className="text-xs font-extrabold uppercase tracking-widest text-[#94a3b8]">{name}</p>
      {description && <p className="mt-0.5 text-sm text-[#94a3b8]">{description}</p>}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// BLOG ELEMENTS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── 1. Stat Cards ────────────────────────────────────────────────────────────
function StatCards3Col() {
  const stats = [
    { value: '+68%', label: 'Positions 4-10 after update', sub: 'avg. traffic lift in 90 days' },
    { value: '+41%', label: 'Positions 11-20 after update', sub: 'avg. traffic lift in 90 days' },
    { value: '+8%', label: 'New post, competitive keyword', sub: 'avg. traffic growth in 90 days' },
  ]
  return (
    <div className="my-8 grid gap-4 rounded-2xl bg-[#f0f5ff] p-6 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="font-display text-4xl font-black text-[#2457f5]">{s.value}</p>
          <p className="mt-2 text-sm font-bold text-[#1a2233]">{s.label}</p>
          <p className="mt-1 text-xs text-[#667085]">{s.sub}</p>
        </div>
      ))}
    </div>
  )
}

function StatCards2Col() {
  const stats = [
    { value: '3.2x', label: 'More organic clicks', trend: 'up' },
    { value: '47%', label: 'Reduction in bounce rate', trend: 'up' },
    { value: '12 min', label: 'Average time on page', trend: 'up' },
    { value: '-23%', label: 'Pages removed from index', trend: 'down' },
  ]
  return (
    <div className="my-8 grid grid-cols-2 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-[#e8edf5] bg-white p-5 shadow-[0_4px_20px_rgba(16,24,40,0.05)]">
          <div className="flex items-start justify-between">
            <p className="font-display text-3xl font-black text-[#071225]">{s.value}</p>
            {s.trend === 'up'
              ? <TrendingUp className="h-5 w-5 text-[#22c55e]" />
              : <TrendingDown className="h-5 w-5 text-[#ef4444]" />
            }
          </div>
          <p className="mt-2 text-sm text-[#667085]">{s.label}</p>
        </div>
      ))}
    </div>
  )
}

function SingleBigStat() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#2457f5] to-[#7c3aed] p-8 text-center text-white">
      <p className="font-display text-7xl font-black tracking-tight">94%</p>
      <p className="mt-3 text-xl font-semibold text-white/80">of audited sites saw ranking improvements within 60 days</p>
      <p className="mt-2 text-sm text-white/50">Based on 1,200+ RankPilot audits, Q1 2026</p>
    </div>
  )
}

// ─── 2. Labeled Cards ─────────────────────────────────────────────────────────
function LabeledCards() {
  const cards = [
    { letter: 'U', label: 'Update', color: '#2457f5', bg: '#eef4ff', body: 'Posts ranking at position 4-20 with impressions in GSC, but underperforming relative to their potential. These posts have proven keyword relevance and need stronger topical coverage, fresher data, or a better-optimized title and meta description.' },
    { letter: 'C', label: 'Consolidate', color: '#7c3aed', bg: '#f3f0ff', body: 'Posts targeting the same keyword cluster as another post on your site. Merge the weaker post into the stronger one, redirect the old URL with a 301, and let the combined authority work for a single, more comprehensive page.' },
    { letter: 'R', label: 'Remove', color: '#ef4444', bg: '#fff1f1', body: 'Posts with zero impressions for 90+ days, no meaningful backlinks, and no strategic purpose. Before removing, check for backlinks. If a post has inbound links worth preserving, redirect it. If it has nothing, deletion is the cleaner choice.' },
  ]
  return (
    <div className="my-8 space-y-4">
      {cards.map((c) => (
        <div key={c.label} className="rounded-2xl p-6" style={{ backgroundColor: c.bg }}>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white" style={{ backgroundColor: c.color }}>
              {c.letter}
            </div>
            <div>
              <p className="font-display text-xl font-black" style={{ color: c.color }}>{c.label}</p>
              <p className="mt-2 leading-7 text-[#4b5568]">{c.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── 3. Callout Blocks ────────────────────────────────────────────────────────
function CalloutBlocks() {
  const callouts = [
    {
      type: 'info',
      icon: <Info className="h-5 w-5" />,
      color: '#2457f5',
      bg: '#eef4ff',
      border: '#bfdbfe',
      title: 'Good to know',
      body: 'Google Search Console data has a 2-3 day delay. Always pull your GSC data at least 3 days after your target date range ends to ensure accuracy.',
    },
    {
      type: 'tip',
      icon: <Lightbulb className="h-5 w-5" />,
      color: '#d97706',
      bg: '#fffbeb',
      border: '#fde68a',
      title: 'Pro tip',
      body: 'Sort your content inventory by organic sessions descending before scoring. This ensures your highest-traffic posts get reviewed first and any quick wins are captured early.',
    },
    {
      type: 'warning',
      icon: <AlertTriangle className="h-5 w-5" />,
      color: '#dc2626',
      bg: '#fff1f1',
      border: '#fecaca',
      title: 'Watch out',
      body: 'Never delete a URL without first checking for inbound links in Ahrefs or Search Console. Even low-traffic posts can carry link equity that would be lost permanently.',
    },
  ]
  return (
    <div className="my-8 space-y-4">
      {callouts.map((c) => (
        <div key={c.type} className="flex gap-4 rounded-2xl border p-5" style={{ backgroundColor: c.bg, borderColor: c.border }}>
          <div className="mt-0.5 shrink-0" style={{ color: c.color }}>{c.icon}</div>
          <div>
            <p className="font-bold" style={{ color: c.color }}>{c.title}</p>
            <p className="mt-1 text-sm leading-7 text-[#4b5568]">{c.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── 4. Pull Quote ────────────────────────────────────────────────────────────
function PullQuote() {
  return (
    <div className="my-8 border-l-4 border-[#2457f5] bg-[#f8fafc] py-6 pl-7 pr-6">
      <Quote className="mb-3 h-7 w-7 text-[#2457f5]/40" />
      <p className="font-display text-2xl font-black leading-snug tracking-tight text-[#071225]">
        "The sites that win in 2026 aren't publishing more - they're publishing smarter. A quarterly audit is the difference between a content library and a content liability."
      </p>
      <p className="mt-4 text-sm font-semibold text-[#667085]">- Sarah Chen, Head of SEO at Acme Corp</p>
    </div>
  )
}

function CenteredQuote() {
  return (
    <div className="my-10 text-center">
      <p className="font-display text-3xl font-black italic leading-snug tracking-tight text-[#071225]">
        "Audit first. Publish second. Always."
      </p>
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#2457f5]" />
    </div>
  )
}

// ─── 5. Numbered Steps ────────────────────────────────────────────────────────
function NumberedSteps() {
  const steps = [
    { n: '01', title: 'Export your content inventory', body: 'Pull a full URL list from Screaming Frog or your sitemap. Include title, word count, and last modified date.' },
    { n: '02', title: 'Pull GSC performance data', body: 'Export clicks, impressions, CTR, and average position for the last 90 days. Match by URL.' },
    { n: '03', title: 'Score each post', body: 'Use RankPilot\'s Content Quality Analyzer to score each URL on topical depth, keyword alignment, and freshness.' },
    { n: '04', title: 'Assign a bucket', body: 'Every post gets one label: Update, Consolidate, or Remove. No post should be left unclassified.' },
  ]
  return (
    <div className="my-8 space-y-4">
      {steps.map((s) => (
        <div key={s.n} className="flex gap-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#071225] font-display text-sm font-black text-white">
            {s.n}
          </div>
          <div className="pt-1">
            <p className="font-bold text-[#071225]">{s.title}</p>
            <p className="mt-1 text-sm leading-7 text-[#667085]">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── 6. Checklist ─────────────────────────────────────────────────────────────
function Checklist() {
  const items = [
    'Improving existing posts that already rank is almost always faster and higher-ROI than publishing new content.',
    'Posts at positions 4-20 are your highest-priority quick win candidates.',
    'Keyword cannibalization is invisible without tooling. RankPilot\'s clustering makes it obvious.',
    'Every post belongs in one of three buckets: Update, Consolidate, or Remove.',
    'A recurring quarterly audit cadence compounds over time and is more valuable than any single audit.',
  ]
  return (
    <div className="my-8 space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2457f5]" />
          <p className="text-base leading-7 text-[#4b5568]">{item}</p>
        </div>
      ))}
    </div>
  )
}

// ─── 7. Pros / Cons ───────────────────────────────────────────────────────────
function ProsCons() {
  const pros = [
    'Faster ranking improvements vs. publishing new content',
    'Reduces keyword cannibalization across your site',
    'Improves crawl budget efficiency for large sites',
    'Compounds over time with each audit cycle',
  ]
  const cons = [
    'Requires GSC access and basic data literacy',
    'Time-intensive without automation tools',
    'Risk of over-removing posts with hidden link equity',
    'Results take 4-8 weeks to appear in rankings',
  ]
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl bg-[#f0fdf4] p-6">
        <p className="mb-4 font-display text-lg font-black text-[#15803d]">Pros</p>
        <div className="space-y-3">
          {pros.map((p) => (
            <div key={p} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />
              <p className="text-sm leading-6 text-[#166534]">{p}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-[#fff1f1] p-6">
        <p className="mb-4 font-display text-lg font-black text-[#dc2626]">Cons</p>
        <div className="space-y-3">
          {cons.map((c) => (
            <div key={c} className="flex items-start gap-3">
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ef4444]" />
              <p className="text-sm leading-6 text-[#991b1b]">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── 8. Before / After ────────────────────────────────────────────────────────
function BeforeAfter() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-[#fecaca] bg-[#fff1f1] p-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fecaca] px-3 py-1">
          <Minus className="h-3.5 w-3.5 text-[#dc2626]" />
          <span className="text-xs font-extrabold uppercase tracking-wide text-[#dc2626]">Before</span>
        </div>
        <p className="font-bold text-[#071225]">Manual content audit</p>
        <ul className="mt-3 space-y-2 text-sm text-[#4b5568]">
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef4444]" />8-12 hours per audit cycle</li>
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef4444]" />Spreadsheet-based, error-prone</li>
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef4444]" />No keyword cannibalization detection</li>
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef4444]" />Subjective quality scoring</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#bbf7d0] px-3 py-1">
          <TrendingUp className="h-3.5 w-3.5 text-[#15803d]" />
          <span className="text-xs font-extrabold uppercase tracking-wide text-[#15803d]">After</span>
        </div>
        <p className="font-bold text-[#071225]">RankPilot-powered audit</p>
        <ul className="mt-3 space-y-2 text-sm text-[#4b5568]">
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />90 minutes start to finish</li>
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />Automated data pull and scoring</li>
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />Cannibalization flagged automatically</li>
          <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]" />AI-scored on 12 quality signals</li>
        </ul>
      </div>
    </div>
  )
}

// ─── 9. Comparison Table ──────────────────────────────────────────────────────
function ComparisonTable() {
  const rows = [
    { feature: 'Keyword cannibalization detection', manual: false, rankpilot: true },
    { feature: 'Automated GSC data pull', manual: false, rankpilot: true },
    { feature: 'Content quality scoring', manual: false, rankpilot: true },
    { feature: 'Bulk URL processing', manual: false, rankpilot: true },
    { feature: 'Quick win keyword view', manual: false, rankpilot: true },
    { feature: 'Recurring audit scheduling', manual: false, rankpilot: true },
    { feature: 'Free to use', manual: true, rankpilot: false },
  ]
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#e8edf5]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#e8edf5] bg-[#f8fafc]">
            <th className="px-5 py-4 text-left font-bold text-[#071225]">Feature</th>
            <th className="px-5 py-4 text-center font-bold text-[#071225]">Manual</th>
            <th className="px-5 py-4 text-center font-bold text-[#2457f5]">RankPilot</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'}>
              <td className="px-5 py-3.5 text-[#4b5568]">{row.feature}</td>
              <td className="px-5 py-3.5 text-center">
                {row.manual
                  ? <CheckCircle2 className="mx-auto h-4 w-4 text-[#22c55e]" />
                  : <XCircle className="mx-auto h-4 w-4 text-[#d1d5db]" />}
              </td>
              <td className="px-5 py-3.5 text-center">
                {row.rankpilot
                  ? <CheckCircle2 className="mx-auto h-4 w-4 text-[#2457f5]" />
                  : <XCircle className="mx-auto h-4 w-4 text-[#d1d5db]" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── 10. Progress Bars ────────────────────────────────────────────────────────
function ProgressBars() {
  const bars = [
    { label: 'Content freshness score', value: 82, color: '#2457f5' },
    { label: 'Topical depth coverage', value: 67, color: '#7c3aed' },
    { label: 'Internal link density', value: 45, color: '#d97706' },
    { label: 'Keyword alignment', value: 91, color: '#22c55e' },
  ]
  return (
    <div className="my-8 space-y-5 rounded-2xl border border-[#e8edf5] bg-white p-6">
      {bars.map((b) => (
        <div key={b.label}>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-[#1a2233]">{b.label}</p>
            <p className="text-sm font-black" style={{ color: b.color }}>{b.value}%</p>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-[#f0f5ff]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${b.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ backgroundColor: b.color }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── 11. Code Block ───────────────────────────────────────────────────────────
function CodeBlock() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#1e293b] bg-[#0f172a]">
      <div className="flex items-center gap-2 border-b border-[#1e293b] px-5 py-3">
        <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
        <div className="h-3 w-3 rounded-full bg-[#f59e0b]" />
        <div className="h-3 w-3 rounded-full bg-[#22c55e]" />
        <span className="ml-2 text-xs text-[#64748b]">rankpilot-audit.js</span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7">
        <code className="text-[#e2e8f0]">
{`// Pull content audit data from RankPilot API
const audit = await rankpilot.audit.run({
  siteId: 'your-site-id',
  dateRange: '90d',
  minImpressions: 10,
});

// Filter quick win candidates
const quickWins = audit.posts.filter(post => 
  post.position >= 4 && 
  post.position <= 20 &&
  post.impressions > 100
);

console.log(\`Found \${quickWins.length} quick wins\`);`}
        </code>
      </pre>
    </div>
  )
}

// ─── 12. Image with Caption ───────────────────────────────────────────────────
function ImageWithCaption() {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-2xl bg-[#eef4ff]">
        <div className="flex h-[280px] items-center justify-center">
          <div className="text-center">
            <BarChart3 className="mx-auto h-16 w-16 text-[#2457f5]/30" />
            <p className="mt-3 text-sm text-[#94a3b8]">Featured image placeholder</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-[#94a3b8]">
        Figure 1: RankPilot's Content Quality Analyzer scoring dashboard, showing 47 posts flagged for update across a 200-post audit.
      </figcaption>
    </figure>
  )
}

// ─── 13. FAQ Accordion ────────────────────────────────────────────────────────
function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqs = [
    { q: 'How often should I do a content audit?', a: 'For most sites, quarterly is the right cadence. Sites publishing more than four posts per week may benefit from monthly audits. Sites with fewer than 50 published posts can often get away with a bi-annual review.' },
    { q: 'What data do I need before starting?', a: 'At minimum: a full URL list, Google Search Console data for the last 90 days (clicks, impressions, average position), and your current word counts. RankPilot pulls the GSC data automatically once you connect your property.' },
    { q: 'Should I delete thin content or redirect it?', a: 'Always check for inbound links first. If a post has no backlinks and no traffic, deletion is fine. If it has inbound links - even just one or two - redirect it to the closest relevant page to preserve link equity.' },
    { q: 'How long does it take to see results?', a: 'Typically 4-8 weeks after publishing updates. Google needs to recrawl and reindex the updated content. Posts at positions 4-10 tend to respond fastest; posts at 11-20 can take 6-10 weeks to move.' },
  ]
  return (
    <div className="my-8 space-y-3">
      {faqs.map((faq, i) => (
        <div key={faq.q} className="overflow-hidden rounded-2xl border border-[#e8edf5] bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <p className="font-bold text-[#071225]">{faq.q}</p>
            <ChevronDown className={`h-5 w-5 shrink-0 text-[#94a3b8] transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="border-t border-[#e8edf5] px-6 py-5 text-sm leading-7 text-[#667085]">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

// ─── 14. Expert Quote ─────────────────────────────────────────────────────────
function ExpertQuote() {
  return (
    <div className="my-8 flex gap-5 rounded-2xl bg-[#f8fafc] p-6">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#2457f5] to-[#7c3aed]">
        <div className="flex h-full w-full items-center justify-center font-display text-xl font-black text-white">SC</div>
      </div>
      <div>
        <p className="text-base leading-7 text-[#4b5568]">
          "We ran RankPilot across our 340-post blog and identified 47 posts to update, 12 to consolidate, and 8 to remove. Three months later, organic traffic was up 34% without publishing a single new post."
        </p>
        <div className="mt-3">
          <p className="text-sm font-bold text-[#071225]">Sarah Chen</p>
          <p className="text-xs text-[#94a3b8]">Head of SEO, Acme Corp - 340k monthly organic sessions</p>
        </div>
      </div>
    </div>
  )
}

// ─── 15. Inline CTA ───────────────────────────────────────────────────────────
function InlineCTADark() {
  return (
    <div className="my-8 overflow-hidden rounded-[28px] bg-[#071225] p-8 text-white sm:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-black sm:text-3xl">Ready to audit your content?</p>
          <p className="mt-2 text-white/60">Start your free 14-day trial - no credit card required.</p>
        </div>
        <Link href="/pricing" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2457f5] px-7 py-4 font-extrabold text-white shadow-[0_14px_35px_rgba(36,87,245,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b52e7]">
          <Zap className="h-4 w-4" />
          Start Free Trial
        </Link>
      </div>
    </div>
  )
}

function InlineCTALight() {
  return (
    <div className="my-8 rounded-2xl border border-[#bfdbfe] bg-[#eef4ff] p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2457f5]">
          <BookOpen className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="font-bold text-[#071225]">Want to go deeper?</p>
          <p className="mt-1 text-sm text-[#4b5568]">Read our complete guide to keyword cannibalization and how to fix it without losing rankings.</p>
          <Link href="/blog" className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#2457f5] hover:underline">
            Read the guide <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── 16. Section Divider ──────────────────────────────────────────────────────
function SectionDivider() {
  return (
    <div className="my-10 flex items-center gap-4">
      <div className="h-px flex-1 bg-[#e8edf5]" />
      <div className="flex items-center gap-2 rounded-full border border-[#e8edf5] bg-white px-4 py-2">
        <Star className="h-3.5 w-3.5 text-[#2457f5]" />
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#94a3b8]">Key insight</span>
        <Star className="h-3.5 w-3.5 text-[#2457f5]" />
      </div>
      <div className="h-px flex-1 bg-[#e8edf5]" />
    </div>
  )
}

// ─── 17. Highlight Box ────────────────────────────────────────────────────────
function HighlightBox() {
  return (
    <div className="my-8 border-l-[6px] border-[#2457f5] bg-[#f0f5ff] py-5 pl-6 pr-5">
      <p className="font-display text-lg font-black text-[#071225]">The 90-minute rule</p>
      <p className="mt-2 text-sm leading-7 text-[#4b5568]">
        If your content audit takes longer than 90 minutes, you're either auditing too infrequently (so the backlog is large) or doing it manually. Both are fixable. RankPilot's automated scoring cuts the average audit time from 8 hours to under 90 minutes for sites with up to 500 posts.
      </p>
    </div>
  )
}

// ─── 18. Rating / Score Card ──────────────────────────────────────────────────
function ScoreCard() {
  const scores = [
    { label: 'Ease of use', score: 9.2 },
    { label: 'Time to value', score: 8.7 },
    { label: 'Data accuracy', score: 9.5 },
    { label: 'Reporting depth', score: 8.1 },
  ]
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[#e8edf5] bg-white">
      <div className="border-b border-[#e8edf5] bg-[#f8fafc] px-6 py-4">
        <p className="font-display text-lg font-black text-[#071225]">RankPilot - Editorial Score</p>
        <p className="text-sm text-[#94a3b8]">Reviewed April 2026</p>
      </div>
      <div className="p-6">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#2457f5]">
            <span className="font-display text-3xl font-black text-white">9.1</span>
          </div>
          <div>
            <p className="font-bold text-[#071225]">Outstanding</p>
            <p className="text-sm text-[#667085]">Best-in-class for content audit automation. Recommended for agencies and in-house teams managing 50+ posts.</p>
          </div>
        </div>
        <div className="space-y-4">
          {scores.map((s) => (
            <div key={s.label}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="font-semibold text-[#4b5568]">{s.label}</span>
                <span className="font-black text-[#2457f5]">{s.score}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#f0f5ff]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(s.score / 10) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="h-full rounded-full bg-[#2457f5]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── TOC sidebar ──────────────────────────────────────────────────────────────
const sections = [
  { id: 'stats', label: 'Stat Cards' },
  { id: 'labeled-cards', label: 'Labeled Cards' },
  { id: 'callouts', label: 'Callout Blocks' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'steps', label: 'Numbered Steps' },
  { id: 'checklists', label: 'Checklists' },
  { id: 'pros-cons', label: 'Pros / Cons' },
  { id: 'before-after', label: 'Before / After' },
  { id: 'table', label: 'Comparison Table' },
  { id: 'progress', label: 'Progress Bars' },
  { id: 'code', label: 'Code Block' },
  { id: 'image', label: 'Image + Caption' },
  { id: 'faq', label: 'FAQ Accordion' },
  { id: 'expert-quote', label: 'Expert Quote' },
  { id: 'cta', label: 'Inline CTAs' },
  { id: 'divider', label: 'Section Divider' },
  { id: 'highlight', label: 'Highlight Box' },
  { id: 'scorecard', label: 'Score Card' },
]

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function BlogElementsPage() {
  return (
    <>
      <Nav />
      <main className="bg-white pt-[78px]">
        {/* Hero */}
        <div className="border-b border-[#e8edf5] bg-[#f8fafc] py-14">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2457f5] hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="flex items-start justify-between gap-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eef4ff] px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#2457f5]">
                  <Code2 className="h-3.5 w-3.5" />
                  Blog Element Library
                </div>
                <h1 className="font-display text-4xl font-black tracking-tight text-[#071225] sm:text-5xl">
                  Blog Element Gallery
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#667085]">
                  A reference library of all rich content elements available for use in RankPilot blog posts. Browse, copy, and drop any element into your article to make it stand out.
                </p>
                <p className="mt-3 text-sm text-[#94a3b8]">{sections.length} elements across 6 categories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body: TOC + Content */}
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:flex lg:gap-16">
          {/* Sticky TOC */}
          <aside className="hidden shrink-0 lg:block" style={{ width: 200 }}>
            <div className="sticky top-[100px]">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#94a3b8]">Elements</p>
              <nav className="space-y-0.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-[#667085] transition-colors hover:bg-[#f0f5ff] hover:text-[#2457f5]"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Elements */}
          <div className="min-w-0 flex-1">

            <Section id="stats" label="Stat Cards">
              <div>
                <ElementLabel name="3-Column Stat Card" description="Use for data-backed claims with 3 comparable metrics" />
                <StatCards3Col />
              </div>
              <div>
                <ElementLabel name="2-Column Stat Grid with Trend" description="Use for before/after or multi-metric snapshots" />
                <StatCards2Col />
              </div>
              <div>
                <ElementLabel name="Single Big Stat" description="Use to anchor a section around one powerful number" />
                <SingleBigStat />
              </div>
            </Section>

            <Section id="labeled-cards" label="Labeled Cards">
              <div>
                <ElementLabel name="Category Cards (letter badge)" description="Use for classification systems, frameworks, or option sets" />
                <LabeledCards />
              </div>
            </Section>

            <Section id="callouts" label="Callout Blocks">
              <div>
                <ElementLabel name="Info / Tip / Warning callouts" description="Use to surface important context without breaking the reading flow" />
                <CalloutBlocks />
              </div>
              <div>
                <ElementLabel name="Highlight Box" description="Use to call out a key rule, formula, or named concept" />
                <HighlightBox />
              </div>
            </Section>

            <Section id="quotes" label="Quotes">
              <div>
                <ElementLabel name="Left-border Pull Quote" description="Use for expert statements or memorable lines from the article" />
                <PullQuote />
              </div>
              <div>
                <ElementLabel name="Centered Display Quote" description="Use as a visual break between sections for short, punchy statements" />
                <CenteredQuote />
              </div>
              <div>
                <ElementLabel name="Expert Quote with Avatar" description="Use for customer quotes, expert opinions, or case study snippets" />
                <ExpertQuote />
              </div>
            </Section>

            <Section id="steps" label="Numbered Steps">
              <div>
                <ElementLabel name="Numbered Step List" description="Use for sequential processes or how-to guides" />
                <NumberedSteps />
              </div>
            </Section>

            <Section id="checklists" label="Checklists">
              <div>
                <ElementLabel name="Checklist with Icons" description="Use for key takeaways, requirements, or action items" />
                <Checklist />
              </div>
            </Section>

            <Section id="pros-cons" label="Pros / Cons">
              <div>
                <ElementLabel name="Pros / Cons Two-Column" description="Use for product comparisons, approach trade-offs, or decision guides" />
                <ProsCons />
              </div>
            </Section>

            <Section id="before-after" label="Before / After">
              <div>
                <ElementLabel name="Before / After Two-Column" description="Use to contrast old vs. new workflows or show transformation" />
                <BeforeAfter />
              </div>
            </Section>

            <Section id="table" label="Comparison Table">
              <div>
                <ElementLabel name="Feature Comparison Table" description="Use for tool comparisons or feature matrices" />
                <ComparisonTable />
              </div>
            </Section>

            <Section id="progress" label="Progress Bars">
              <div>
                <ElementLabel name="Animated Progress Bars" description="Use for scoring breakdowns, audit results, or skill levels" />
                <ProgressBars />
              </div>
            </Section>

            <Section id="code" label="Code Block">
              <div>
                <ElementLabel name="Syntax-highlighted Code Block" description="Use for API examples, scripts, or technical walkthroughs" />
                <CodeBlock />
              </div>
            </Section>

            <Section id="image" label="Image + Caption">
              <div>
                <ElementLabel name="Image with Figure Caption" description="Use for screenshots, diagrams, or annotated visuals" />
                <ImageWithCaption />
              </div>
            </Section>

            <Section id="faq" label="FAQ Accordion">
              <div>
                <ElementLabel name="Animated FAQ Accordion" description="Use at the end of posts to address common questions and improve SEO" />
                <FaqAccordion />
              </div>
            </Section>

            <Section id="expert-quote" label="Expert Quote">
              <div>
                <ElementLabel name="Expert / Customer Quote Card" description="Use for social proof, case studies, or attributed expert opinions" />
                <ExpertQuote />
              </div>
            </Section>

            <Section id="cta" label="Inline CTAs">
              <div>
                <ElementLabel name="Dark CTA Banner" description="Use mid-article or at the end to drive trial signups" />
                <InlineCTADark />
              </div>
              <div>
                <ElementLabel name="Light Related Content CTA" description="Use to link to related guides or resources without interrupting flow" />
                <InlineCTALight />
              </div>
            </Section>

            <Section id="divider" label="Section Divider">
              <div>
                <ElementLabel name="Labeled Section Divider" description="Use between major sections to add visual rhythm and label transitions" />
                <SectionDivider />
              </div>
            </Section>

            <Section id="scorecard" label="Score Card">
              <div>
                <ElementLabel name="Editorial Score Card" description="Use for tool reviews, product roundups, or editorial evaluations" />
                <ScoreCard />
              </div>
            </Section>

          </div>
        </div>
      </main>
    </>
  )
}
