"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, AlertTriangle, Lightbulb, Info, CheckCircle2, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const FEATURED_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/ai-overviews-zero-click-featured-9ECs9zsUuDfvLVVcMAk4DV.webp";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
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
          <Link href="/" className="rounded-2xl bg-[#f4f8ff] px-5 py-4 font-bold text-[#25324b]">Log In</Link>
          <Link href="/pricing" className="rounded-2xl bg-[#1d63ff] px-5 py-4 font-extrabold text-white">Get Started</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e8edf5] lg:hidden">
          <span className="sr-only">Menu</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071225] pt-20 text-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2457f5]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2.2"/><path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <span className="font-display text-xl font-black">RankPilot</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-white/50">The all-in-one SEO content platform that helps you research, plan, and create content that ranks.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "How It Works", "Pricing", "Use Cases"] },
            { title: "Company", links: ["About", "Blog", "Contact", "Help Center"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-white/40">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}><Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">{link}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} RankPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function StatCards({ stats }: { stats: { value: string; label: string; sub: string }[] }) {
  return (
    <div className="my-10 grid grid-cols-1 gap-4 rounded-2xl bg-[#eef2ff] p-6 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="font-display text-3xl font-black text-[#2457f5]">{s.value}</p>
          <p className="mt-1 text-sm font-bold text-[#071225]">{s.label}</p>
          <p className="text-xs text-[#94a3b8]">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}

function Callout({ type, children }: { type: "info" | "warning" | "tip"; children: React.ReactNode }) {
  const styles = {
    info:    { bg: "bg-blue-50 border-blue-200",       icon: <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />,           label: "Note" },
    warning: { bg: "bg-amber-50 border-amber-200",     icon: <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />, label: "Warning" },
    tip:     { bg: "bg-emerald-50 border-emerald-200", icon: <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />,   label: "Tip" },
  };
  const s = styles[type];
  return (
    <div className={`my-8 flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${s.bg}`}>
      {s.icon}
      <div><span className="font-bold">{s.label}: </span>{children}</div>
    </div>
  );
}

function PullQuote({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <blockquote className="my-10 border-l-4 border-[#2457f5] pl-6">
      <p className="font-display text-xl font-bold italic text-[#071225] leading-snug">&ldquo;{quote}&rdquo;</p>
      {attribution && <cite className="mt-2 block text-sm text-[#94a3b8] not-italic">{attribution}</cite>}
    </blockquote>
  );
}

function LabeledCard({ letter, color, title, body }: { letter: string; color: string; title: string; body: string }) {
  const colorMap: Record<string, string> = {
    blue:   "bg-[#2457f5] text-white",
    purple: "bg-[#7c3aed] text-white",
    green:  "bg-[#059669] text-white",
    amber:  "bg-[#d97706] text-white",
    red:    "bg-[#dc2626] text-white",
    navy:   "bg-[#071225] text-white",
  };
  return (
    <div className="my-4 flex gap-4 rounded-xl border border-[#e8edf5] bg-[#f8faff] p-5">
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-black ${colorMap[color] ?? colorMap.blue}`}>
        {letter}
      </div>
      <div>
        <p className="font-display text-base font-black text-[#071225]">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">{body}</p>
      </div>
    </div>
  );
}

function BeforeAfter({ before, after }: { before: { title: string; items: string[] }; after: { title: string; items: string[] } }) {
  return (
    <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-red-200 bg-red-50 p-5">
        <p className="mb-3 font-display text-sm font-black uppercase tracking-wide text-red-600">{before.title}</p>
        <ul className="space-y-2">
          {before.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#4a5568]">
              <span className="mt-1 text-red-400">&#x2715;</span>{item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="mb-3 font-display text-sm font-black uppercase tracking-wide text-emerald-600">{after.title}</p>
        <ul className="space-y-2">
          {after.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#4a5568]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="my-10 rounded-2xl border border-[#2457f5]/20 bg-[#eef2ff] p-6">
      <p className="mb-4 font-display text-lg font-black text-[#071225]">Key Takeaways</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#071225]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2457f5]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="my-10 space-y-3">
      <p className="mb-5 font-display text-2xl font-black text-[#071225]">Frequently Asked Questions</p>
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-xl border border-[#e8edf5] bg-white overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold text-[#071225] hover:bg-[#f8faff] transition-colors"
          >
            {faq.q}
            <ChevronDown className={`h-4 w-4 shrink-0 text-[#94a3b8] transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <div className="border-t border-[#e8edf5] px-5 py-4 text-sm leading-relaxed text-[#4a5568]">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function InlineCta() {
  return (
    <div className="my-10 rounded-2xl bg-[#071225] px-8 py-8 text-center">
      <p className="font-display text-xl font-black text-white">Stop guessing. Start optimizing for AI search.</p>
      <p className="mt-2 text-sm text-[#94a3b8]">
        RankPilot tracks your AI Overview appearances, monitors citation signals, and helps you structure content that gets cited, not just ranked.
      </p>
      <Link
        href="/pricing"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2457f5] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
      >
        Start Free Trial
      </Link>
    </div>
  );
}

export default function AiOverviewsZeroClickPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-gradient-to-b from-[#eef2ff] to-[#f8faff] pb-16 pt-[94px]">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-4 flex items-center gap-3">
                <Link href="/blog" className="flex items-center gap-1 text-sm font-semibold text-[#2457f5] hover:underline">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
                <span className="rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">GEO/AIO</span>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight text-[#071225] sm:text-5xl">
                AI Overviews and the Zero Click Reality
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> January 18, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 14 min read</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto mt-10 max-w-[860px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img src={FEATURED_IMAGE} alt="AI Overview box pushing organic results down in search" className="w-full object-cover" />
          </div>
        </div>

        <article className="mx-auto max-w-[860px] px-5 py-12 sm:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">

            <p>SEO dashboards are telling a strange story lately. Impressions are rising. Clicks are falling. CTR is trending down. Rankings often look stable or improved, yet organic traffic feels softer and performance questions start piling up.</p>
            <p>This is not a tracking glitch. It is the zero-click reality, driven primarily by Google&apos;s AI Overviews. Understanding what is happening, why it is happening, and what you can do about it is now one of the most important things an SEO professional can focus on.</p>

            <StatCards stats={[
              { value: "58.5%", label: "Zero-click searches in 2025", sub: "up from 50.3% in 2022" },
              { value: "-34%", label: "Avg. CTR drop for AI Overview queries", sub: "vs. same queries without AIO" },
              { value: "65%", label: "Queries now triggering AI Overviews", sub: "across informational intent" },
            ]} />

            <h2>What Are AI Overviews?</h2>
            <p>AI Overviews (formerly Search Generative Experience, or SGE) are Google&apos;s AI-generated summaries that appear at the top of search results for many informational queries. Instead of showing a list of ten blue links, Google synthesizes an answer directly in the SERP, pulling from multiple sources, citing a handful of them, and presenting the answer before the user ever clicks anything.</p>
            <p>The result is a search experience where the user&apos;s question gets answered without them visiting your website. For a deeper look at how AI search engines decide what to include in these summaries, see our guide on <Link href="/blog/generative-engine-optimization-explained">Generative Engine Optimization and how AI Overviews use content</Link>.</p>

            <Callout type="info">AI Overviews are not the same as Featured Snippets. Featured Snippets pull a single block of text from one page. AI Overviews synthesize content from multiple sources and generate a new response, meaning your content can be used without being directly quoted or linked.</Callout>

            <h2>Why Impressions Rise While Clicks Fall</h2>
            <p>This is the paradox that confuses most teams when they first encounter it. If you are ranking for a query that now triggers an AI Overview, Google Search Console will still record an impression every time that query is searched. But the user sees the AI-generated answer, gets what they need, and does not click through. The impression count stays the same or grows. The click count drops. CTR falls. Traffic softens. And your rankings report still looks fine.</p>

            <PullQuote quote="Ranking #1 used to mean traffic. Now it means you might be a source for an answer the user reads without ever visiting your site." attribution="Common observation among SEO practitioners in 2025-2026" />

            <h2>Which Query Types Are Most Affected?</h2>
            <p>Not all queries are equally impacted. The effect is heavily concentrated in specific intent categories.</p>

            <LabeledCard letter="H" color="red" title="High Impact: Informational Queries" body="How-to guides, definitions, explanations, and factual questions. These are the queries most likely to trigger an AI Overview and least likely to generate a click even when they do rank." />
            <LabeledCard letter="M" color="amber" title="Medium Impact: Comparison and Research Queries" body="Best-of lists, product comparisons, and research-stage queries. AI Overviews appear here but users are more likely to click through for deeper detail or to verify recommendations." />
            <LabeledCard letter="L" color="green" title="Low Impact: Transactional and Navigational Queries" body="Queries with commercial intent (buy, pricing, sign up) or brand-specific navigation are largely unaffected. Users searching to take action still click through." />

            <Callout type="warning">If your site&apos;s traffic is heavily weighted toward informational content, you are in the highest-impact category. This is not a reason to panic, but it is a reason to adapt your content strategy now rather than later.</Callout>

            <h2>The Citation Opportunity Inside the Problem</h2>
            <p>Being cited in an AI Overview is not worthless. While it does not generate the same click volume as a traditional #1 ranking, it builds brand visibility, signals authority to Google, and the clicks it does generate tend to be from users further along in their research who are more likely to convert.</p>

            <h2>How to Adapt Your SEO Strategy</h2>
            <BeforeAfter
              before={{ title: "Old Approach", items: ["Optimize every page for click-through rate", "Measure success by organic traffic volume", "Treat all query types the same", "Ignore AI Overview appearances", "Focus only on blue-link rankings"] }}
              after={{ title: "Adapted Approach", items: ["Optimize informational content for citation, not just clicks", "Measure brand impressions and citation appearances alongside traffic", "Segment strategy by query intent type", "Track AI Overview presence as a KPI", "Build transactional content to capture high-intent traffic"] }}
            />

            <h2>Practical Steps to Take Right Now</h2>
            <p><strong>Step 1 - Audit your traffic by intent type.</strong> Use Google Search Console to segment your queries into informational, commercial, and transactional buckets. Our guide on <Link href="/blog/content-audit-90-minutes-ai-tools">running a content audit in 90 minutes</Link> walks through exactly how to do this efficiently.</p>
            <p><strong>Step 2 - Check which pages are being cited.</strong> Search your target queries and look at the AI Overview source citations. Track this systematically using <Link href="/features">RankPilot&apos;s rank tracking and content monitoring features</Link>.</p>
            <p><strong>Step 3 - Restructure informational content for citation.</strong> AI Overviews favor content that is direct, structured, and authoritative. Add clear definitions at the top of articles, use structured headings that match common question formats, and include original data or statistics.</p>
            <p><strong>Step 4 - Shift investment toward transactional content.</strong> Review your <Link href="/use-cases">use case pages</Link> and commercial content to make sure they are well-optimized and regularly updated, since these pages are largely unaffected by AI Overviews.</p>
            <p><strong>Step 5 - Redefine your success metrics.</strong> Add brand impression volume, AI Overview citation count, and conversion rate from organic to your reporting dashboard alongside traditional traffic and ranking data.</p>

            <InlineCta />

            <Callout type="tip">A practical content portfolio for 2026: 60% informational content optimized for citation and topical authority, 40% commercial and transactional content optimized for traffic and conversion.</Callout>

            <KeyTakeaways items={[
              "AI Overviews are causing impressions to rise and clicks to fall — this is a structural shift in how search works, not a tracking error.",
              "Informational queries are most affected; transactional and navigational queries remain largely unaffected.",
              "Being cited in an AI Overview provides brand visibility and authority signals even when it does not generate clicks.",
              "Adapt by segmenting your content strategy by intent type and restructuring informational content for AI citation.",
              "Redefine success metrics to include brand impressions and citation volume alongside traditional traffic and ranking data.",
              "Shift investment toward transactional and commercial content that AI Overviews are less likely to replace.",
            ]} />

            <FaqAccordion faqs={[
              { q: "Will AI Overviews eventually replace all organic search traffic?", a: "No. AI Overviews primarily affect informational queries. Transactional, navigational, and commercial queries still drive significant click-through traffic because users need to take action, not just get an answer." },
              { q: "How do I know if my pages are being cited in AI Overviews?", a: "Search your target queries manually and look at the source citations in the AI Overview box. For systematic tracking at scale, RankPilot can monitor AI Overview appearances across your keyword set." },
              { q: "Should I stop creating informational content?", a: "No. Informational content still builds topical authority, earns backlinks, and supports your commercial pages. The goal is to optimize it for citation rather than just clicks." },
              { q: "Does being cited in an AI Overview help my rankings?", a: "Indirectly, yes. Google choosing your content as a citation source signals that it considers your page authoritative and trustworthy, which likely has positive downstream effects on how your other pages are evaluated." },
              { q: "How is this different from the Featured Snippet problem?", a: "Featured Snippets pulled a single block of text from one page and still showed a link. AI Overviews synthesize content from multiple sources and generate a new response, so your content can be used without being directly quoted or prominently linked. The scale of the zero-click effect is significantly larger." },
            ]} />

          </div>
        </article>

        <section className="border-t border-[#e8edf5] bg-[#f8faff] py-16">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <p className="mb-8 font-display text-2xl font-black text-[#071225]">Related Articles</p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Link href="/blog/generative-engine-optimization-explained" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">GEO/AIO</span>
                <p className="mt-3 font-display text-base font-black text-[#071225] group-hover:text-[#2457f5] transition-colors">Generative Engine Optimization Explained: What GEO Is and How AI Overviews Use Content</p>
                <p className="mt-2 text-sm text-[#94a3b8]">Jan 19, 2026 · 16 min read</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">AI search engines don&apos;t rank pages, they cite them. Learn what GEO is and the three content traits that get you cited.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2457f5]">Read Article &#8594;</span>
              </Link>
              <Link href="/blog/content-audit-90-minutes-ai-tools" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">Content Strategy</span>
                <p className="mt-3 font-display text-base font-black text-[#071225] group-hover:text-[#2457f5] transition-colors">How to Do a Content Audit in 90 Minutes Using AI Tools</p>
                <p className="mt-2 text-sm text-[#94a3b8]">Apr 11, 2026 · 12 min read</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">A step-by-step guide to completing a focused, actionable content audit in 90 minutes using AI to do the heavy lifting.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2457f5]">Read Article &#8594;</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
