"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, AlertTriangle, Lightbulb, Info, CheckCircle2, ChevronDown, Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const FEATURED_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/ai-tools-seo-audits-2026-featured-TfTcS9g78cdPk7ZKMrpTWK.webp";

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
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-[#4b5568] hover:text-[#071225]">
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-[#e8edf5] pt-4">
              <Link href="/" className="rounded-xl bg-[#f4f8ff] px-4 py-3 text-center text-sm font-bold text-[#25324b]">Log In</Link>
              <Link href="/pricing" className="rounded-xl bg-[#1d63ff] px-4 py-3 text-center text-sm font-extrabold text-white">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071225] pt-20 text-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-8 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
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
    <div className="not-prose my-10 grid grid-cols-1 gap-4 rounded-2xl bg-[#eef2ff] p-6 sm:grid-cols-3">
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
    <div className={`not-prose my-8 flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${s.bg}`}>
      {s.icon}
      <div><span className="font-bold">{s.label}: </span>{children}</div>
    </div>
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
    <div className="not-prose my-4 flex gap-4 rounded-xl border border-[#e8edf5] bg-[#f8faff] p-5">
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

function PullQuote({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <blockquote className="not-prose my-10 border-l-4 border-[#2457f5] pl-6">
      <p className="font-display text-xl font-bold italic leading-snug text-[#071225]">&ldquo;{quote}&rdquo;</p>
      {attribution && <cite className="mt-2 block text-sm not-italic text-[#94a3b8]">{attribution}</cite>}
    </blockquote>
  );
}

function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="not-prose my-10 rounded-2xl border border-[#2457f5]/20 bg-[#eef2ff] p-6">
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
    <div className="not-prose my-10 space-y-3">
      <p className="mb-5 font-display text-2xl font-black text-[#071225]">Frequently Asked Questions</p>
      {faqs.map((faq, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-[#e8edf5] bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold text-[#071225] transition-colors hover:bg-[#f8faff]"
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

function AuditPhaseCard({ phase, title, tools, aiRole }: { phase: string; title: string; tools: string[]; aiRole: string }) {
  return (
    <div className="not-prose my-4 rounded-xl border border-[#e8edf5] bg-white p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2457f5]/10 font-display text-xs font-black text-[#2457f5]">
          {phase}
        </div>
        <div className="flex-1">
          <p className="font-display text-base font-black text-[#071225]">{title}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tools.map((t) => (
              <span key={t} className="rounded-full bg-[#f0f5ff] px-2.5 py-0.5 text-xs font-semibold text-[#2457f5]">{t}</span>
            ))}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#4a5568]"><span className="font-semibold text-[#071225]">AI role: </span>{aiRole}</p>
        </div>
      </div>
    </div>
  );
}

function InlineCta() {
  return (
    <div className="not-prose my-10 rounded-2xl bg-[#071225] px-8 py-8 text-center">
      <p className="font-display text-xl font-black text-white">Run your next SEO audit in a fraction of the time.</p>
      <p className="mt-2 text-sm text-[#94a3b8]">
        RankPilot combines crawl analysis, content scoring, rank tracking, and AI-powered recommendations in a single workflow.
      </p>
      <Link
        href="/pricing"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2457f5] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
      >
        <Zap className="h-4 w-4" />
        Start Free Trial
      </Link>
    </div>
  );
}

export default function AiToolsSeoAudits2026Page() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#eef2ff] to-[#f8faff] pb-16 pt-[94px]">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-4 flex items-center gap-3">
                <Link href="/blog" className="flex items-center gap-1 text-sm font-semibold text-[#2457f5] hover:underline">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
                <span className="rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">SEO Tools</span>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight text-[#071225] sm:text-5xl">
                The Best AI Tools for SEO Audits in 2026
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> February 28, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 16 min read</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured image */}
        <div className="mx-auto mt-10 max-w-[860px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img src={FEATURED_IMAGE} alt="AI-powered magnifying glass scanning a website structure for SEO issues" className="w-full object-cover" />
          </div>
        </div>

        {/* Article */}
        <article className="mx-auto max-w-[860px] px-5 py-12 sm:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">

            <p className="lead text-xl leading-9 text-[#4a5568]">A thorough SEO audit used to take a week. You would crawl the site, export the data, manually review hundreds of rows in spreadsheets, cross-reference against Search Console, and then write up a prioritized action plan. In 2026, AI tools have compressed that timeline dramatically - but only if you know which tools to use for which part of the process, and how to avoid the common traps that turn AI-assisted audits into shallow checklists.</p>

            <p>This guide covers the full audit workflow, the AI tools that are genuinely useful at each stage, and the parts of an audit where human judgment still cannot be replaced.</p>

          </div>

          <StatCards stats={[
            { value: "74%", label: "Faster audit completion", sub: "with AI-assisted workflows vs. manual" },
            { value: "3.2x", label: "More issues identified", sub: "per audit hour with AI pattern recognition" },
            { value: "89%", label: "Of technical issues", sub: "can be detected automatically by AI crawlers" },
          ]} />

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>What a Complete SEO Audit Covers in 2026</h2>
            <p>Before choosing tools, it helps to be clear about what a complete audit actually covers. The scope has expanded significantly in the past two years, primarily because of two additions: AI Overview citation analysis and content quality scoring. A 2026 audit that only covers technical SEO and backlinks is missing the signals that are increasingly driving organic performance.</p>
          </div>

          <AuditPhaseCard phase="01" title="Technical Crawl and Site Health" tools={["Screaming Frog", "Sitebulb", "RankPilot"]} aiRole="Automatically categorizes issues by severity, identifies patterns across large sites, and prioritizes fixes by estimated traffic impact." />
          <AuditPhaseCard phase="02" title="Content Quality and Topical Coverage" tools={["RankPilot", "Clearscope", "Surfer SEO"]} aiRole="Scores content against top-ranking competitors, identifies topical gaps, and flags thin or duplicate content that is suppressing domain authority." />
          <AuditPhaseCard phase="03" title="Keyword and Ranking Analysis" tools={["Ahrefs", "Semrush", "RankPilot"]} aiRole="Clusters keywords by intent, identifies cannibalization, and surfaces quick-win opportunities where small content improvements could move rankings significantly." />
          <AuditPhaseCard phase="04" title="AI Overview Citation Analysis" tools={["RankPilot", "Manual search sampling"]} aiRole="Identifies which pages are being cited in AI Overviews, which queries trigger citations, and what content structure changes could increase citation frequency." />
          <AuditPhaseCard phase="05" title="Backlink Profile Review" tools={["Ahrefs", "Majestic", "Google Search Console"]} aiRole="Identifies toxic links, finds link building opportunities from competitor profiles, and flags anchor text patterns that may be triggering algorithmic penalties." />

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>The Tools That Are Actually Worth Using</h2>
            <p>The AI SEO tool market has exploded in the past 18 months. Many tools make impressive claims that do not hold up in practice. The following breakdown focuses on tools that have demonstrated consistent, reliable results in real audit workflows - not tools that are impressive in demos but unreliable in production.</p>

            <h3>For Technical Audits</h3>
            <p><strong>Screaming Frog with AI analysis:</strong> The gold standard for technical crawls. The 2025 and 2026 versions added AI-powered issue categorization that significantly reduces the time spent sorting through crawl data. It still requires a human to interpret the output and prioritize fixes, but the raw data collection and initial categorization are now largely automated.</p>
            <p><strong>Google Search Console:</strong> Still irreplaceable for understanding how Google actually sees your site. No third-party tool has access to the same data. Use it alongside crawl tools, not instead of them.</p>

            <h3>For Content Audits</h3>
            <p>Content audits are where AI tools have made the most dramatic difference. What previously required manually reviewing dozens of pages can now be done at scale. Our guide on <Link href="/blog/content-audit-90-minutes-ai-tools">completing a content audit in 90 minutes</Link> covers the specific workflow in detail, but the core principle is using AI to handle the data collection and initial scoring, then applying human judgment to the prioritization decisions.</p>
          </div>

          <PullQuote quote="AI tools are excellent at identifying what is wrong. They are less reliable at telling you what to do about it. That judgment still requires someone who understands the business, the audience, and the competitive landscape." attribution="Common observation among experienced SEO practitioners" />

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h3>For AI Overview and GEO Analysis</h3>
            <p>This is the newest category and the one where tooling is still maturing. The core capability you need is the ability to systematically check which of your target queries are triggering AI Overviews, which pages are being cited, and what the citation frequency looks like over time. Understanding <Link href="/blog/generative-engine-optimization-explained">how generative engine optimization works</Link> is the prerequisite for using these tools effectively.</p>

            <h2>Where Human Judgment Still Cannot Be Replaced</h2>
            <p>AI tools are genuinely excellent at pattern recognition at scale. They can identify technical issues, flag content that is underperforming relative to competitors, and surface keyword opportunities that a human reviewer would miss. But there are several parts of an audit where AI output needs to be treated as a starting point, not a conclusion.</p>
          </div>

          <LabeledCard letter="!" color="amber" title="Business context and prioritization" body="An AI tool can tell you that 47 pages have thin content. It cannot tell you which 5 of those pages are worth investing in based on your business model, your sales cycle, and your competitive positioning. Prioritization requires business context that AI tools do not have." />
          <LabeledCard letter="!" color="red" title="Diagnosing the root cause of ranking drops" body="AI tools can identify correlations between changes and ranking movements. Diagnosing whether a drop was caused by a technical change, a content quality issue, a competitor improvement, or an algorithm update requires reasoning about multiple factors simultaneously in ways that current AI tools handle poorly." />
          <LabeledCard letter="!" color="purple" title="Evaluating content quality for a specific audience" body="Automated content scoring tools measure topical coverage and keyword density. They cannot evaluate whether a piece of content is genuinely useful and trustworthy for the specific audience it is targeting. That judgment requires a human who understands the audience." />

          <Callout type="tip">The most effective audit workflow in 2026 is AI-first for data collection and pattern identification, human-first for interpretation and prioritization. Teams that try to use AI for the interpretation step end up with long lists of issues and no clear sense of what to actually do.</Callout>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>Building a Repeatable Audit Process</h2>
            <p>A one-time audit is useful. A repeatable audit process is a competitive advantage. The teams that are getting the most value from AI SEO tools are not running audits once a quarter - they have set up continuous monitoring that surfaces issues as they emerge, with periodic deep-dive audits to catch the patterns that continuous monitoring misses.</p>
            <p>The <Link href="/features">RankPilot features</Link> are built around this model: continuous rank tracking and content monitoring with scheduled audit workflows that pull everything together into a prioritized action list. The goal is to make the audit process something that runs in the background, not something that requires a dedicated week of work every quarter.</p>
          </div>

          <InlineCta />

          <KeyTakeaways items={[
            "A complete 2026 SEO audit covers technical health, content quality, keyword analysis, AI Overview citation analysis, and backlink profile.",
            "AI tools have compressed audit timelines by 74% on average, but primarily for data collection and pattern identification - not for interpretation and prioritization.",
            "AI Overview citation analysis is now a required component of any complete SEO audit; it is the fastest-growing source of organic visibility change.",
            "Human judgment is still essential for business context, root cause diagnosis, and audience-specific content quality evaluation.",
            "The highest-value audit setup is continuous monitoring with periodic deep-dive reviews, not quarterly one-time audits.",
          ]} />

          <FaqAccordion faqs={[
            { q: "How often should we run a full SEO audit?", a: "For most sites, a comprehensive audit every quarter is appropriate, supplemented by continuous monitoring for technical issues and ranking changes. Large sites with frequent content updates may benefit from monthly audits. Small sites with stable content can often get by with semi-annual deep dives." },
            { q: "Can AI tools replace an SEO consultant for audits?", a: "AI tools can replace the data collection and initial categorization work that used to require significant consultant time. They cannot replace the strategic judgment, business context, and interpretation that experienced consultants provide. The most effective model is using AI tools to make consultants more efficient, not to replace them." },
            { q: "What is the most common mistake teams make with AI SEO audits?", a: "Treating AI output as a final recommendation rather than a starting point. AI tools produce long lists of issues. Without human prioritization based on business context, teams end up working on low-impact issues while high-impact problems go unaddressed." },
            { q: "How do we audit for AI Overview citations?", a: "The most reliable method is systematic manual sampling of your target queries combined with a tool that tracks AI Overview appearances over time. Search your top 50 queries, note which trigger AI Overviews, and check whether your pages are cited. Track this monthly to identify trends." },
            { q: "Is technical SEO still important given AI Overviews?", a: "Yes. Technical SEO is the foundation that everything else builds on. A site with crawl issues, slow page speed, or poor mobile experience will underperform regardless of content quality. AI Overviews have changed the goals of content SEO, but they have not changed the importance of technical fundamentals." },
          ]} />
        </article>

        {/* Related Posts */}
        <section className="border-t border-[#e8edf5] bg-[#f8faff] py-16">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <p className="mb-8 font-display text-2xl font-black text-[#071225]">Related Articles</p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Link href="/blog/content-audit-90-minutes-ai-tools" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">Content Strategy</span>
                <p className="mt-3 font-display text-base font-black text-[#071225] transition-colors group-hover:text-[#2457f5]">How to Do a Content Audit in 90 Minutes Using AI Tools</p>
                <p className="mt-2 text-sm text-[#94a3b8]">Apr 11, 2026 · 12 min read</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">A step-by-step guide to completing a focused, actionable content audit in 90 minutes using AI to do the heavy lifting.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2457f5]">Read Article &#8594;</span>
              </Link>
              <Link href="/blog/7-ways-businesses-benefit-seo-automation-ai" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">SEO Automation</span>
                <p className="mt-3 font-display text-base font-black text-[#071225] transition-colors group-hover:text-[#2457f5]">7 Ways Businesses Benefit from SEO Automation Using AI</p>
                <p className="mt-2 text-sm text-[#94a3b8]">Feb 12, 2026 · 15 min read</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">From rank tracking to content briefs, here is how AI automation is changing what is possible for SEO teams of every size.</p>
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
