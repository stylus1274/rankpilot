"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, AlertTriangle, Lightbulb, Info, CheckCircle2, ChevronDown, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const FEATURED_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/keyword-planner-blog-featured-TBR5dCfk4T5FpcDXSQ8atA.webp";

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
  const pathname = usePathname();
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
            <Link key={item.href} href={item.href} className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
              pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                ? 'bg-white text-[#071225] shadow-sm'
                : 'text-[#4b5568] hover:bg-white hover:text-[#071225]'
            }`}>
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

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="not-prose my-10 overflow-x-auto rounded-2xl border border-[#e8edf5]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#e8edf5] bg-[#f8faff]">
            {headers.map((h) => (
              <th key={h} className="px-5 py-3 text-left text-xs font-extrabold uppercase tracking-widest text-[#94a3b8]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-[#e8edf5] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#f8faff]"}`}>
              {row.map((cell, j) => (
                <td key={j} className={`px-5 py-3 leading-relaxed text-[#4a5568] ${j === 0 ? "font-semibold text-[#071225]" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NumberedSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="not-prose my-10 space-y-4">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4 rounded-xl border border-[#e8edf5] bg-white p-5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2457f5] font-display text-sm font-black text-white">
            {i + 1}
          </div>
          <div>
            <p className="font-display text-base font-black text-[#071225]">{step.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">{step.body}</p>
          </div>
        </div>
      ))}
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

function InlineCta() {
  return (
    <div className="not-prose my-10 rounded-2xl bg-[#071225] px-8 py-8 text-center">
      <p className="font-display text-xl font-black text-white">Stop guessing. Start ranking with data.</p>
      <p className="mt-2 text-sm text-[#94a3b8]">
        RankPilot combines keyword research, rank tracking, and AI-assisted content planning in one workflow so you can move from research to published post faster.
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

export default function GoogleKeywordPlannerPage() {
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
                <span className="rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">Keyword Research</span>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight text-[#071225] sm:text-5xl">
                How to Use Google Keyword Planner for Smarter SEO Research
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> February 18, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 12 min read</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured image */}
        <div className="mx-auto mt-10 max-w-[860px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img src={FEATURED_IMAGE} alt="Google Keyword Planner dashboard showing search volume bars, trend lines, and keyword suggestion grid" className="w-full object-cover" />
          </div>
        </div>

        {/* Article */}
        <article className="mx-auto max-w-[860px] px-5 py-12 sm:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">

            <p className="lead text-xl leading-9 text-[#4a5568]">Google Keyword Planner is one of the most underestimated tools in SEO. Most practitioners use it to check search volume and move on. But the data it contains - when read correctly and combined with the right workflow - can reveal keyword opportunities, content gaps, and seasonal patterns that paid tools often miss or present with less accuracy. This guide covers how to extract maximum value from Keyword Planner in 2026, and how to connect that research to a content strategy that actually moves rankings.</p>

            <p>The key insight that most guides skip: Keyword Planner is a tool built for Google Ads buyers, not SEO practitioners. Understanding that distinction changes how you interpret every number it gives you.</p>

          </div>

          <StatCards stats={[
            { value: "Free", label: "Cost to use", sub: "Requires a Google Ads account, no spend required" },
            { value: "93%", label: "Of online experiences", sub: "begin with a search engine - keyword research is foundational" },
            { value: "70%", label: "Of search queries", sub: "are long-tail - where Keyword Planner's data is most actionable" },
          ]} />

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>Why Keyword Planner Is Still Worth Using in 2026</h2>
            <p>Paid keyword tools like Ahrefs and Semrush are excellent, but they derive their data from panel data, clickstream data, and their own crawls - not directly from Google. Keyword Planner pulls directly from Google's own search data, which means its volume figures, while often presented as ranges rather than exact numbers, reflect actual Google search behavior.</p>
            <p>For SEO practitioners, the most valuable use cases are: discovering keywords that paid tools undercount because they are too new or too niche, understanding seasonal demand patterns with monthly breakdown data, and validating keyword ideas before investing in content. When you combine Keyword Planner data with <Link href="/features">RankPilot's rank tracking and content planning features</Link>, you get a feedback loop that connects research to results.</p>

            <h2>The Problem with How Most People Use It</h2>
            <p>The most common mistake is treating Keyword Planner volume ranges as precise numbers. When Keyword Planner shows "1K-10K monthly searches," that range could mean 1,100 or 9,800 - a massive difference for content prioritization. The tool aggregates similar queries and rounds numbers to protect advertiser data, which means the displayed volume is often an approximation of a cluster of related queries, not just the exact phrase you entered.</p>
          </div>

          <Callout type="warning">
            If you are not running Google Ads, Keyword Planner will show you volume ranges (1K-10K) instead of exact numbers. To unlock exact monthly search volumes, you need an active Google Ads campaign with at least some spend history. Even a small campaign budget will unlock the precise data.
          </Callout>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>Five Advanced Techniques for SEO Research</h2>
          </div>

          <NumberedSteps steps={[
            {
              title: "Use competitor URLs as seed inputs",
              body: "Instead of entering keywords manually, enter your competitors' URLs into the 'Start with a website' option. Keyword Planner will surface the keywords Google associates with that page, revealing what your competitors are targeting and what you might be missing. This is particularly useful for finding keyword clusters you haven't considered.",
            },
            {
              title: "Export and filter by competition column",
              body: "The 'Competition' column in Keyword Planner reflects advertiser competition, not SEO difficulty - but they are correlated. Keywords with Low advertiser competition often have lower SEO difficulty too, because fewer businesses are actively targeting them. Export the full list and filter for Low competition keywords with meaningful volume as a starting point for content opportunities.",
            },
            {
              title: "Use the monthly breakdown for seasonal content planning",
              body: "Click on any keyword to see its month-by-month search volume for the past 12 months. This is invaluable for planning content that needs to be published before peak demand. If a keyword spikes every October, you need your content live by September at the latest to have any chance of ranking in time.",
            },
            {
              title: "Group keywords by landing page intent, not just topic",
              body: "Keyword Planner's grouping feature clusters keywords by theme, but the clusters are built for ad groups, not content pages. Re-group the exported keywords by search intent: informational (how to, what is), commercial (best, vs, review), and transactional (buy, pricing, sign up). Each intent type needs a different content format and page structure.",
            },
            {
              title: "Cross-reference with Search Console data",
              body: "Your Google Search Console shows you keywords you already rank for. Import that data alongside Keyword Planner results to identify: keywords where you rank on page 2 (positions 11-20) with meaningful volume - these are your highest-priority optimization targets. The combination of Keyword Planner's volume data and Search Console's position data is more actionable than either tool alone.",
            },
          ]} />

          <Callout type="tip">
            Export your Keyword Planner results to a spreadsheet and add a column for your current Search Console ranking position. Keywords where you rank 11-20 with 1,000+ monthly searches are your fastest wins - you are already in the game, you just need to move up one page.
          </Callout>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>Keyword Planner vs. Paid Tools: When to Use Each</h2>
          </div>

          <ComparisonTable
            headers={["Use Case", "Keyword Planner", "Paid Tools (Ahrefs/Semrush)"]}
            rows={[
              ["Volume accuracy for new/niche keywords", "Better (direct Google data)", "Can undercount very new queries"],
              ["Keyword difficulty score", "Not available", "Available, but methodology varies"],
              ["Competitor backlink analysis", "Not available", "Core feature"],
              ["Seasonal volume breakdown", "Excellent (monthly data)", "Available but derived"],
              ["SERP feature analysis", "Not available", "Available"],
              ["Cost", "Free", "$99-$499/month"],
              ["Long-tail keyword discovery", "Good via URL input", "Excellent"],
              ["Content gap analysis", "Manual process", "Automated feature"],
            ]}
          />

          <PullQuote
            quote="Keyword Planner is not a replacement for paid SEO tools - it is a complement. The practitioners who get the most out of it are the ones who understand what it is actually measuring and use it accordingly."
            attribution="A consistent finding among SEO practitioners who benchmark tool accuracy"
          />

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>Connecting Keyword Research to Content Execution</h2>
            <p>The gap between keyword research and published content is where most SEO strategies break down. You can have a perfect keyword list and still see no results if the content you create does not match search intent, does not cover the topic with sufficient depth, or does not get promoted effectively after publication.</p>
            <p>This is the workflow that consistently produces results: research keywords in Keyword Planner, validate them against Search Console data, prioritize by the gap between volume and current ranking position, then use a tool like <Link href="/how-it-works">RankPilot's content workflow</Link> to move from keyword to brief to published post without losing momentum between steps. The research is only valuable if it leads to action.</p>
            <p>For businesses running content at scale, understanding <Link href="/blog/5-digital-marketing-challenges-2026">the five digital marketing challenges that define 2026</Link> - including the shift from keyword targeting to intent matching - is essential context for how keyword research needs to evolve alongside the tools you use to execute it.</p>
          </div>

          <InlineCta />

          <KeyTakeaways items={[
            "Keyword Planner uses direct Google data, making it more accurate than paid tools for new or niche keywords - but volume ranges require interpretation, not face-value reading.",
            "The 'Competition' column reflects advertiser competition, not SEO difficulty - but the two are correlated and Low competition keywords are often good SEO targets.",
            "Monthly volume breakdowns make Keyword Planner invaluable for seasonal content planning - publish before the peak, not during it.",
            "Cross-referencing Keyword Planner data with Search Console positions reveals your fastest ranking opportunities: keywords where you already rank on page 2.",
            "Keyword research only produces results when it connects directly to content execution - the research-to-published-post workflow is where most strategies fail.",
          ]} />

          <FaqAccordion faqs={[
            { q: "Do I need to spend money on Google Ads to use Keyword Planner?", a: "No, you can access Keyword Planner with a free Google Ads account. However, without an active campaign with spend history, you will see volume ranges (1K-10K) instead of exact monthly search volumes. A small campaign budget will unlock the precise data, which is worth it for serious keyword research." },
            { q: "How accurate is Keyword Planner's search volume data?", a: "More accurate than most paid tools for direct Google query data, but the numbers are aggregated and rounded. Google groups similar queries together and shows combined volume, which means the volume for a specific phrase may include closely related variants. Treat the numbers as directional signals rather than precise counts." },
            { q: "Can I use Keyword Planner for local keyword research?", a: "Yes, and it is particularly useful for local research. You can filter results by specific geographic locations - down to city level in many markets. This is valuable for local businesses that need to understand search demand in their specific service area rather than nationally." },
            { q: "How often should I run keyword research?", a: "For established sites, a quarterly review is typically sufficient to catch seasonal trends and emerging topics. For new sites or rapidly changing industries, monthly research is more appropriate. The key is to treat keyword research as an ongoing process rather than a one-time setup activity." },
            { q: "What is the best way to organize keyword research output?", a: "Export to a spreadsheet and organize by three dimensions: search intent (informational/commercial/transactional), priority score (volume multiplied by gap from current ranking), and content type needed (new page, update existing page, consolidate with another page). This structure makes it immediately actionable rather than just a list of keywords." },
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
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">A step-by-step framework for auditing your content library in under two hours using AI tools to categorize, prioritize, and act.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2457f5]">Read Article &#8594;</span>
              </Link>
              <Link href="/blog/ai-tools-seo-audits-2026" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">SEO Tools</span>
                <p className="mt-3 font-display text-base font-black text-[#071225] transition-colors group-hover:text-[#2457f5]">AI Tools for SEO Audits in 2026: The Complete Workflow</p>
                <p className="mt-2 text-sm text-[#94a3b8]">Feb 3, 2026 · 14 min read</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">How to run a comprehensive SEO audit using AI tools that surface issues faster and prioritize fixes by impact.</p>
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
