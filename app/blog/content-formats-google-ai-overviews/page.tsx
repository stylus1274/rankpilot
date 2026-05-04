"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, AlertTriangle, Lightbulb, Info, CheckCircle2, ChevronDown, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const FEATURED_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/content-formats-ai-overviews-featured-ZRczuotaW6cAySdqkSnh98.webp";

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

function LabeledCard({ letter, color, title, body }: { letter: string; color: string; title: string; body: string }) {
  const colorMap: Record<string, string> = {
    blue:   "bg-[#2457f5] text-white",
    purple: "bg-[#7c3aed] text-white",
    green:  "bg-[#059669] text-white",
    amber:  "bg-[#d97706] text-white",
    red:    "bg-[#dc2626] text-white",
    navy:   "bg-[#071225] text-white",
    teal:   "bg-[#0891b2] text-white",
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
      <p className="font-display text-xl font-black text-white">Structure your content to get cited by AI.</p>
      <p className="mt-2 text-sm text-[#94a3b8]">
        RankPilot helps you identify which content formats are working for your competitors in AI Overviews and gives you the workflow to replicate and improve on them.
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

export default function ContentFormatsAiOverviewsPage() {
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
                <span className="rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">AI Search</span>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight text-[#071225] sm:text-5xl">
                Content Formats That Win in Google AI Overviews
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#94a3b8]">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> April 28, 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 11 min read</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured image */}
        <div className="mx-auto mt-10 max-w-[860px] px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img src={FEATURED_IMAGE} alt="Diagram showing four content format types (numbered list, comparison table, how-to steps, FAQ accordion) with arrows pointing up into a Google AI Overview answer box" className="w-full object-cover" />
          </div>
        </div>

        {/* Article */}
        <article className="mx-auto max-w-[860px] px-5 py-12 sm:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">

            <p className="lead text-xl leading-9 text-[#4a5568]">Not all content is equally likely to appear in Google AI Overviews. The format of your content - how it is structured, how answers are presented, how clearly it signals its own organization - has a measurable impact on whether Google's AI system extracts and cites it. This is not about gaming the algorithm. It is about understanding how AI systems consume and summarize content, and structuring your writing to make that process as easy as possible.</p>

            <p>This guide covers the specific content formats that appear most frequently in AI Overviews, why they work, and how to implement them in your existing content without a full rewrite.</p>

          </div>

          <StatCards stats={[
            { value: "46%", label: "Of AI Overview citations", sub: "come from pages not in the top 10 organic results" },
            { value: "3x", label: "More likely to be cited", sub: "content with clear answer-first structure vs. buried answers" },
            { value: "68%", label: "Of AI Overviews", sub: "include at least one structured format (list, table, or steps)" },
          ]} />

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>Why Format Matters for AI Citation</h2>
            <p>Google's AI Overview system works by retrieving candidate passages from multiple sources, extracting the most relevant information, and synthesizing it into a coherent answer. The extraction step is where format matters most. Content that is clearly structured - with explicit headings, defined answer units, and logical organization - is easier to extract accurately than content buried in long paragraphs.</p>
            <p>This is closely related to the principles behind <Link href="/blog/generative-engine-optimization-explained">generative engine optimization</Link>: making your content machine-readable is not about keyword stuffing, it is about structural clarity. The AI does not read your content the way a human does. It identifies answer-shaped passages and evaluates their relevance to the query.</p>

            <h2>The Six Formats That Appear Most Often in AI Overviews</h2>
          </div>

          <LabeledCard letter="1" color="blue" title="Direct answer paragraphs" body="A single paragraph that opens with a direct answer to a specific question, then provides supporting context. The answer comes first, the explanation follows. This mirrors how AI Overviews are structured and makes extraction straightforward. Ideal for definition queries, 'what is' questions, and factual lookups." />
          <LabeledCard letter="2" color="purple" title="Numbered step sequences" body="Step-by-step processes with numbered headings and a clear action in each step. AI systems extract these reliably because the structure is unambiguous - each numbered item is a discrete, complete unit of information. Works best for how-to content, tutorials, and process explanations." />
          <LabeledCard letter="3" color="green" title="Comparison tables" body="Two or three column tables that directly compare options, features, or approaches. Tables are highly extractable because they present structured relationships between entities. AI Overviews frequently cite comparison tables for 'X vs Y' and 'best X for Y' queries." />
          <LabeledCard letter="4" color="amber" title="FAQ sections with direct answers" body="Question-and-answer pairs where each answer is self-contained and begins with a direct response. The question provides the query context, the answer provides the citation content. FAQ sections are disproportionately cited in AI Overviews relative to their length because each Q&A pair is a pre-packaged answer unit." />
          <LabeledCard letter="5" color="teal" title="Definition blocks" body="A clearly demarcated definition or explanation of a term or concept, often set apart visually with a border or background. When a query is definitional ('what is X'), Google preferentially cites content that has a clear, concise definition rather than a definition buried in flowing prose." />
          <LabeledCard letter="6" color="navy" title="Bulleted attribute lists" body="Lists of characteristics, features, requirements, or attributes with brief explanations for each item. Works well for 'what are the X of Y' queries and 'how does X work' queries where the answer is a set of components rather than a single statement." />

          <Callout type="info">
            The formats above are not mutually exclusive. The highest-performing pages for AI Overview citations often combine multiple formats within a single article - a direct answer paragraph at the top, numbered steps in the body, a comparison table mid-article, and an FAQ section at the end. Each format targets a different type of query that might lead to that page.
          </Callout>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>Format by Query Type: A Practical Mapping</h2>
          </div>

          <ComparisonTable
            headers={["Query Type", "Example", "Best Format", "Why It Works"]}
            rows={[
              ["Definition", "What is schema markup?", "Direct answer paragraph", "AI extracts the opening sentence as the answer"],
              ["How-to", "How to set up Google Search Console", "Numbered steps", "Each step is a discrete, extractable unit"],
              ["Comparison", "Ahrefs vs Semrush for keyword research", "Comparison table", "Structured relationships are easy to extract"],
              ["Best of", "Best SEO tools for small businesses", "Bulleted list with descriptions", "Each item is a self-contained recommendation"],
              ["Factual", "How many backlinks do I need to rank?", "Direct answer + supporting context", "Specific answer first, nuance second"],
              ["Process", "How does Google index a new page?", "Numbered steps or flow description", "Sequential structure matches the query intent"],
              ["FAQ", "Is Keyword Planner free?", "FAQ section with direct answers", "Pre-packaged Q&A pairs match the query format"],
            ]}
          />

          <PullQuote
            quote="The question to ask for every section of your content is: if an AI system needed to extract a one-sentence answer to a specific question from this section, could it? If the answer is buried in a paragraph, restructure it."
            attribution="A practical test for AI-extractable content structure"
          />

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#4a5568] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225] prose-li:text-[#4a5568]">
            <h2>How to Audit Your Existing Content for Format Gaps</h2>
            <p>You do not need to rewrite your entire content library to improve AI Overview citation rates. A targeted audit focused on your highest-traffic pages will produce the most impact with the least effort. This is the same principle behind the <Link href="/blog/content-audit-90-minutes-ai-tools">90-minute content audit framework</Link> - identify the pages with the most potential and focus your optimization effort there first.</p>
            <p>For each high-traffic page, ask three questions: Does the page have a direct answer to its primary query in the first 100 words? Does the page use at least one structured format (list, table, or steps)? Does the page have an FAQ section that addresses common follow-up questions? Pages that answer "no" to all three are your highest-priority format optimization targets.</p>
            <p>The connection between content format and AI Overview performance is one of the key insights driving <Link href="/use-cases">how RankPilot is used by content teams</Link> who are actively tracking their AI Overview appearances and optimizing for citation rather than just ranking position.</p>
          </div>

          <Callout type="tip">
            When adding an FAQ section to an existing page, pull the questions from Google's "People Also Ask" box for your target keyword. These questions are directly sourced from real user queries and represent exactly the follow-up questions Google's AI is likely to be asked after displaying your content in an AI Overview.
          </Callout>

          <InlineCta />

          <KeyTakeaways items={[
            "46% of AI Overview citations come from pages not in the top 10 organic results - format optimization can surface content that keyword optimization alone cannot.",
            "The six most-cited formats are: direct answer paragraphs, numbered steps, comparison tables, FAQ sections, definition blocks, and bulleted attribute lists.",
            "Combining multiple formats within a single article targets multiple query types and increases the surface area for AI citation.",
            "A practical audit test: for each section, ask whether an AI system could extract a one-sentence answer to a specific question. If not, restructure.",
            "FAQ sections sourced from 'People Also Ask' boxes are the fastest way to add AI-extractable content to existing pages without a full rewrite.",
          ]} />

          <FaqAccordion faqs={[
            { q: "Does using these formats guarantee an AI Overview appearance?", a: "No. Format is one factor among many, including topical authority, page quality, and relevance to the specific query. But format is one of the most controllable factors - you cannot easily change your domain authority in the short term, but you can restructure a page in an afternoon. It is a high-leverage optimization because it is entirely within your control." },
            { q: "Will optimizing for AI Overviews hurt my traditional organic rankings?", a: "No. The structural improvements that make content more AI-extractable - clearer headings, more direct answers, better organization - also improve traditional SEO signals like dwell time, featured snippet eligibility, and user experience. There is no trade-off between optimizing for AI Overviews and optimizing for traditional rankings." },
            { q: "How long does it take to see results after reformatting content?", a: "Google can recrawl and reindex pages within days to weeks for established sites. AI Overview appearances can change faster than traditional rankings because the AI system re-evaluates sources more frequently. Most practitioners report seeing changes within 2-4 weeks of significant structural improvements to high-traffic pages." },
            { q: "Should I add all six formats to every page?", a: "No - use the formats that match the content and query type. A page about a single concept might only need a direct answer paragraph and an FAQ section. A comparison page needs a table. A tutorial needs numbered steps. The goal is to match the format to the intent, not to check every format box on every page." },
            { q: "What about schema markup - does it help with AI Overviews?", a: "Schema markup helps Google understand the structure and type of your content, which can indirectly support AI Overview citation. FAQ schema, HowTo schema, and Article schema are the most relevant types. However, schema is a supplement to good content structure, not a replacement for it. A well-structured page without schema will outperform a poorly structured page with schema." },
          ]} />
        </article>

        {/* Related Posts */}
        <section className="border-t border-[#e8edf5] bg-[#f8faff] py-16">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <p className="mb-8 font-display text-2xl font-black text-[#071225]">Related Articles</p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Link href="/blog/generative-engine-optimization-explained" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">GEO</span>
                <p className="mt-3 font-display text-base font-black text-[#071225] transition-colors group-hover:text-[#2457f5]">Generative Engine Optimization Explained</p>
                <p className="mt-2 text-sm text-[#94a3b8]">Mar 5, 2026 · 14 min read</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">What GEO is, how it differs from traditional SEO, and the concrete steps you can take to get your content cited by AI search engines.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2457f5]">Read Article &#8594;</span>
              </Link>
              <Link href="/blog/ai-overviews-zero-click-reality" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">AI Search</span>
                <p className="mt-3 font-display text-base font-black text-[#071225] transition-colors group-hover:text-[#2457f5]">AI Overviews and the Zero Click Reality</p>
                <p className="mt-2 text-sm text-[#94a3b8]">Mar 28, 2026 · 10 min read</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">How AI Overviews are changing click-through rates and what SEO practitioners need to do differently to maintain traffic.</p>
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
