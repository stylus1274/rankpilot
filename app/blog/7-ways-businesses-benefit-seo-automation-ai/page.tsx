"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Info,
  Zap,
  BarChart2,
  FileSearch,
  RefreshCw,
  Globe,
  Users,
  TrendingUp,
} from "lucide-react";

/* ─── Nav ─────────────────────────────────────────────────────────────────── */
const navItems = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#e8edf5] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2457f5]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="2" />
              <path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-display text-xl font-black text-[#071225]">RankPilot</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-[#e8edf5] bg-white px-3 py-1.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-[#4a5568] transition-colors hover:bg-[#f0f5ff] hover:text-[#2457f5]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-sm font-medium text-[#4a5568] hover:text-[#2457f5] lg:block">
            Log In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#071225] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2457f5]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ─── FAQ Accordion ───────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8edf5] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-bold text-[#071225]">{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-[#2457f5]" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-[#94a3b8]" />
        )}
      </button>
      {open && <p className="pb-5 text-[15px] leading-relaxed text-[#4a5568]">{a}</p>}
    </div>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-[#e8edf5] bg-[#071225] py-12 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2457f5]">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="2" />
                <path d="M9 5v4l2.5 2.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-display text-lg font-black">RankPilot</span>
          </Link>
          <p className="text-sm text-[#94a3b8]">© 2026 RankPilot. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-[#94a3b8]">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/features" className="hover:text-white">Features</Link>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function SevenWaysSEOAutomationPage() {
  const ways = [
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "Automated Keyword Research at Scale",
      color: "bg-blue-50 text-[#2457f5]",
      body: "Manual keyword research is slow and prone to blind spots. AI-powered tools scan millions of search queries, cluster them by intent, and surface opportunities your competitors haven't found yet. RankPilot's keyword engine continuously monitors ranking shifts so your strategy stays current without weekly manual audits.",
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Real-Time Rank Tracking Without the Spreadsheet",
      color: "bg-indigo-50 text-indigo-600",
      body: "Checking rankings manually across hundreds of keywords is unsustainable. Automated rank tracking delivers daily position data, flags drops before they become traffic losses, and surfaces pages that are close to breaking into the top 3 — where click-through rates jump dramatically.",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Content Gap Analysis and Update Prioritization",
      color: "bg-violet-50 text-violet-600",
      body: "Most sites have more to gain from updating existing content than from publishing new articles. AI audits your entire content library, identifies pages with decaying traffic, and scores them by update ROI. You get a prioritized action list instead of a guessing game.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "On-Page Optimization Recommendations in Seconds",
      color: "bg-amber-50 text-amber-600",
      body: "AI reads the top-ranking pages for your target keyword, extracts the patterns that correlate with high positions — heading structure, semantic coverage, word count, internal link density — and translates them into specific, actionable edits for your page. What used to take an hour takes under a minute.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Technical SEO Monitoring on Autopilot",
      color: "bg-emerald-50 text-emerald-600",
      body: "Crawl errors, broken links, missing meta descriptions, slow Core Web Vitals — technical issues silently drain rankings. Automated monitoring catches these the moment they appear and alerts your team before Google's crawlers penalize the site.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Competitor Intelligence Without Manual Research",
      color: "bg-rose-50 text-rose-600",
      body: "Knowing what your competitors are ranking for, which pages they're building links to, and how their content strategy is shifting used to require hours of manual research every week. AI aggregates and summarizes competitor movements so you can react quickly and strategically.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Reporting That Writes Itself",
      color: "bg-cyan-50 text-cyan-600",
      body: "Client and stakeholder reporting is one of the biggest time sinks in SEO. Automated reporting pulls rank data, traffic trends, and content performance into clean, shareable dashboards — no copy-pasting from five different tools, no reformatting spreadsheets at 11pm before a client call.",
    },
  ];

  const faqs = [
    {
      q: "Does SEO automation replace human SEO expertise?",
      a: "No — it amplifies it. Automation handles the data collection, monitoring, and pattern recognition that would otherwise consume most of an SEO professional's time. The strategic decisions, creative content direction, and relationship-building that drive long-term results still require human judgment.",
    },
    {
      q: "How quickly can a business see results from SEO automation?",
      a: "Time-to-value varies by starting point. Most businesses see measurable improvements in crawl health and on-page optimization within the first 30 days. Ranking and traffic improvements typically become visible within 60 to 90 days, depending on domain authority and competition.",
    },
    {
      q: "Is SEO automation suitable for small businesses?",
      a: "Absolutely — in fact, small businesses often benefit the most. A solo founder or small marketing team can compete with larger organizations by using automation to cover ground that would otherwise require a full SEO department.",
    },
    {
      q: "What's the difference between SEO automation and AI-generated content?",
      a: "SEO automation covers the research, monitoring, and optimization workflow. AI-generated content is one specific output of that workflow. The two are complementary but distinct — you can automate your entire SEO process without using AI to write content, or vice versa.",
    },
    {
      q: "Will automated SEO strategies work with Google's evolving algorithms?",
      a: "Good automation tools adapt to algorithm changes by updating their ranking models continuously. RankPilot monitors Google's guidance and core update patterns to ensure recommendations stay aligned with what the algorithm rewards.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#f0f5ff] to-white pb-12 pt-[94px]">
        <div className="mx-auto max-w-[860px] px-5 pt-12 sm:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="flex items-center gap-1.5 text-sm font-medium text-[#2457f5] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span className="rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">
              AI Tools
            </span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-black leading-tight text-[#071225] sm:text-5xl">
            7 Ways Businesses Benefit from SEO Automation Using AI
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-[#94a3b8]">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              February 22, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              10 min read
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured image ────────────────────────────────────────────────── */}
      <div className="mx-auto mt-10 max-w-[860px] px-5 sm:px-8">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/Fr9ZuNYEY37aSYMryA5gnX/seo-automation-blog-featured-hCb3vTX8d3HVGLbsVDra7G.webp"
            alt="AI-powered SEO automation workflow showing keyword research, content audit, rank tracking, and auto-optimize"
            className="w-full rounded-2xl object-cover"
            width={860}
            height={480}
          />
        </div>
      </div>

      {/* ── Article body ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[860px] px-5 py-16 sm:px-8">
        <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#374151] prose-p:leading-relaxed prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225]">

          <p className="lead text-xl font-medium text-[#374151]">
            SEO has become more competitive than ever in 2026, with millions of websites fighting for the same top search positions. Small and medium businesses are struggling to keep up with the constant algorithm updates, technical requirements, and content demands that modern search engines require. AI-powered SEO automation changes that equation entirely.
          </p>

          {/* ── Stat cards ──────────────────────────────────────────────── */}
          <div className="not-prose my-10 grid grid-cols-1 gap-4 rounded-2xl bg-[#f0f5ff] p-6 sm:grid-cols-3">
            {[
              { stat: "14.6%", label: "Average close rate", sub: "for organic SEO leads vs 1.7% outbound" },
              { stat: "3x", label: "Faster content output", sub: "with AI-assisted SEO workflows" },
              { stat: "68%", label: "Of marketers", sub: "say automation saves 5+ hours per week" },
            ].map(({ stat, label, sub }) => (
              <div key={stat} className="text-center">
                <p className="font-display text-3xl font-black text-[#2457f5]">{stat}</p>
                <p className="mt-1 text-sm font-bold text-[#071225]">{label}</p>
                <p className="mt-0.5 text-xs text-[#94a3b8]">{sub}</p>
              </div>
            ))}
          </div>

          {/* ── Info callout ────────────────────────────────────────────── */}
          <div className="not-prose my-8 flex gap-4 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#2457f5]" />
            <div>
              <p className="font-semibold text-[#1e40af]">Why automation matters now</p>
              <p className="mt-1 text-sm text-[#1e40af]/80">
                Google processes over 8.5 billion searches per day. Manual SEO simply cannot keep pace with the volume of data, the speed of algorithm changes, or the breadth of competitor activity that modern search requires. Automation isn't a shortcut — it's a necessity.
              </p>
            </div>
          </div>

          <p>
            Below are the seven most impactful ways businesses are using AI-powered SEO automation to grow organic traffic, reduce costs, and outpace competitors who are still doing things manually.
          </p>

          {/* ── 7 Ways labeled cards ────────────────────────────────────── */}
          <div className="not-prose my-10 space-y-4">
            {ways.map((way, i) => (
              <div key={i} className={`flex gap-4 rounded-xl border border-transparent p-5 ${way.color.split(" ")[0]}`}>
                <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${way.color}`}>
                  {way.icon}
                </div>
                <div>
                  <p className="font-display text-base font-bold text-[#071225]">
                    {i + 1}. {way.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">{way.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>The Compounding Effect of Automation</h2>
          <p>
            The real power of SEO automation isn't any single benefit in isolation — it's the compounding effect when all seven work together. Automated keyword research feeds better content briefs. Better content briefs produce pages that rank faster. Faster rankings generate data that improves future keyword targeting. The cycle accelerates over time.
          </p>

          {/* ── Before / After ──────────────────────────────────────────── */}
          <div className="not-prose my-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100 bg-red-50 p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-400">Without Automation</p>
              <ul className="space-y-2">
                {[
                  "8+ hours/week on manual rank checks",
                  "Keyword research done quarterly at best",
                  "Technical issues caught weeks late",
                  "Reporting takes half a day per client",
                  "Competitor moves go unnoticed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#4a5568]">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-500">With RankPilot Automation</p>
              <ul className="space-y-2">
                {[
                  "Daily rank data delivered automatically",
                  "Continuous keyword opportunity scanning",
                  "Real-time technical issue alerts",
                  "One-click client-ready reports",
                  "Competitor shift notifications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#4a5568]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2>Who Benefits Most from SEO Automation?</h2>
          <p>
            While any business with an online presence can benefit, certain profiles see the highest return on investment from automation.
          </p>

          {/* ── Comparison table ────────────────────────────────────────── */}
          <div className="not-prose my-8 overflow-hidden rounded-xl border border-[#e8edf5]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#f8faff]">
                  <th className="px-5 py-3 text-left font-semibold text-[#071225]">Business Type</th>
                  <th className="px-5 py-3 text-left font-semibold text-[#071225]">Primary Benefit</th>
                  <th className="px-5 py-3 text-left font-semibold text-[#071225]">Time Saved / Week</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SEO Agency", "Scalable client reporting & audits", "10 - 20 hrs"],
                  ["E-commerce Store", "Product page optimization at scale", "8 - 15 hrs"],
                  ["SaaS Company", "Keyword gap & competitor tracking", "5 - 10 hrs"],
                  ["Local Business", "GMB + local keyword monitoring", "3 - 6 hrs"],
                  ["Content Publisher", "Content decay alerts & update queue", "6 - 12 hrs"],
                ].map(([type, benefit, time], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8faff]"}>
                    <td className="px-5 py-3 font-medium text-[#071225]">{type}</td>
                    <td className="px-5 py-3 text-[#4a5568]">{benefit}</td>
                    <td className="px-5 py-3 font-semibold text-[#2457f5]">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Internal link callout 1 ─────────────────────────────────── */}
          <div className="not-prose my-8 flex gap-4 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-5">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#2457f5]" />
            <div>
              <p className="font-semibold text-[#1e40af]">See how it works in practice</p>
              <p className="mt-1 text-sm text-[#1e40af]/80">
                Want to understand the step-by-step workflow behind RankPilot's automation engine?{" "}
                <Link href="/how-it-works" className="font-semibold underline">
                  Read the How It Works overview
                </Link>{" "}
                to see exactly how keyword research, content briefs, and rank tracking connect into a single automated loop.
              </p>
            </div>
          </div>

          <h2>Getting Started: What to Automate First</h2>
          <p>
            If you're new to SEO automation, trying to automate everything at once is a recipe for overwhelm. Start with the highest-leverage, lowest-risk workflows and expand from there.
          </p>

          {/* ── Numbered steps ──────────────────────────────────────────── */}
          <div className="not-prose my-8 space-y-4">
            {[
              {
                n: "01",
                title: "Start with rank tracking",
                body: "It's the lowest-risk automation and delivers immediate value. Set up daily position monitoring for your 20 most important keywords and let the data surface where to focus first.",
              },
              {
                n: "02",
                title: "Add a content audit",
                body: "Run an automated audit of your existing content library. Most sites discover 20-30% of their pages are underperforming and can be improved with targeted updates rather than new content.",
              },
              {
                n: "03",
                title: "Automate competitor monitoring",
                body: "Set up alerts for when competitors publish new content, earn significant backlinks, or shift their keyword targeting. Reactive strategy is far cheaper than proactive guessing.",
              },
              {
                n: "04",
                title: "Build automated reporting",
                body: "Once you have data flowing, automate the reporting layer. Weekly or monthly performance summaries should require zero manual effort.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-5 rounded-xl border border-[#e8edf5] bg-white p-5">
                <span className="font-display text-3xl font-black text-[#e8edf5]">{n}</span>
                <div>
                  <p className="font-display font-bold text-[#071225]">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Warning callout ─────────────────────────────────────────── */}
          <div className="not-prose my-8 flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <div>
              <p className="font-semibold text-amber-800">Don't automate strategy — automate execution</p>
              <p className="mt-1 text-sm text-amber-700">
                The biggest mistake businesses make with SEO automation is treating it as a replacement for strategy. Automation executes your strategy faster and more consistently — but the strategy itself still needs human thinking. Define your goals and target audience first, then let automation handle the execution.
              </p>
            </div>
          </div>

          <h2>How SEO Automation Connects to Your Broader Marketing Stack</h2>
          <p>
            The most effective SEO automation doesn't operate in isolation. When rank tracking data feeds into your content calendar, when keyword gaps inform your paid search strategy, and when technical audit alerts trigger developer tickets automatically, the entire marketing operation becomes more coherent and faster to execute.
          </p>

          {/* ── Internal link callout 2 ─────────────────────────────────── */}
          <div className="not-prose my-8 rounded-xl border border-[#e8edf5] bg-[#f8faff] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8]">Related Reading</p>
            <p className="mt-3 font-display text-lg font-black text-[#071225]">
              Is your content library working as hard as it should?
            </p>
            <p className="mt-2 text-sm text-[#4a5568]">
              A content audit is the fastest way to find ranking opportunities hiding in your existing pages. Learn how to run one in 90 minutes using AI tools.
            </p>
            <Link
              href="/blog/content-audit-90-minutes-ai-tools"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#2457f5] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1a3fd4]"
            >
              Read: Content Audit in 90 Minutes →
            </Link>
          </div>

          <h2>Measuring the ROI of SEO Automation</h2>
          <p>
            The return on investment from SEO automation comes from two directions: time savings and performance gains. Both are measurable.
          </p>

          {/* ── Key takeaways ───────────────────────────────────────────── */}
          <div className="not-prose my-8 rounded-xl border border-[#e8edf5] bg-[#f8faff] p-6">
            <p className="mb-4 font-display text-lg font-black text-[#071225]">Key Takeaways</p>
            <ul className="space-y-3">
              {[
                "SEO automation saves 5 to 20 hours per week depending on team size and scope",
                "The biggest gains come from combining rank tracking, content audits, and reporting automation",
                "Automation works best when it executes a clear human-defined strategy — not as a replacement for one",
                "Most businesses see measurable ranking improvements within 60 to 90 days of implementing automation",
                "Small businesses benefit disproportionately because automation levels the playing field against larger competitors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#4a5568]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2457f5]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Internal link callout 3 ─────────────────────────────────── */}
          <div className="not-prose my-8 flex gap-4 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#2457f5]" />
            <div>
              <p className="font-semibold text-[#1e40af]">Explore RankPilot's full feature set</p>
              <p className="mt-1 text-sm text-[#1e40af]/80">
                Curious which specific automation tools are available on each plan?{" "}
                <Link href="/features" className="font-semibold underline">
                  Browse the Features page
                </Link>{" "}
                for a complete breakdown of keyword research, content optimization, rank tracking, and reporting capabilities — and compare them against{" "}
                <Link href="/pricing" className="font-semibold underline">
                  pricing tiers
                </Link>{" "}
                to find the right fit for your team.
              </p>
            </div>
          </div>

          {/* ── Pull quote ──────────────────────────────────────────────── */}
          <blockquote className="not-prose my-10 border-l-4 border-[#2457f5] pl-6">
            <p className="font-display text-xl font-bold italic text-[#071225]">
              "The businesses winning at SEO in 2026 aren't working harder than their competitors — they're working smarter, with automation handling the execution while humans focus on strategy."
            </p>
          </blockquote>

          <h2>Frequently Asked Questions</h2>
        </article>

        {/* ── FAQ accordion ───────────────────────────────────────────────── */}
        <div className="mt-6 rounded-2xl border border-[#e8edf5] bg-white px-6">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* ── Inline CTA ──────────────────────────────────────────────────── */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-[#071225] px-8 py-10 text-center text-white">
          <p className="font-display text-2xl font-black sm:text-3xl">
            Ready to automate your SEO workflow?
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#94a3b8]">
            RankPilot handles the research, monitoring, and reporting so your team can focus on strategy and results.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-full bg-[#2457f5] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a3fd4]"
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See All Features
            </Link>
          </div>
        </div>
      </div>


      {/* ── Related Posts ─────────────────────────────────────────────────── */}
      <section className="border-t border-[#e8edf5] bg-[#f8faff] py-16">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8">
          <p className="mb-8 font-display text-2xl font-black text-[#071225]">Related Articles</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Link
              href="/blog/content-audit-90-minutes-ai-tools"
              className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">Content Strategy</span>
              <p className="mt-3 font-display text-base font-black text-[#071225] group-hover:text-[#2457f5] transition-colors">
                How to Do a Content Audit in 90 Minutes Using AI Tools
              </p>
              <p className="mt-2 text-sm text-[#94a3b8]">Apr 11, 2026 · 12 min read</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                A step-by-step guide to completing a focused, actionable content audit in 90 minutes — using AI to do the heavy lifting.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2457f5]">Read Article →</span>
            </Link>
            <Link
              href="/blog/generative-engine-optimization-explained"
              className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-[#2457f5]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2457f5]">GEO/AIO</span>
              <p className="mt-3 font-display text-base font-black text-[#071225] group-hover:text-[#2457f5] transition-colors">
                Generative Engine Optimization Explained: What GEO Is and How AI Overviews Use Content
              </p>
              <p className="mt-2 text-sm text-[#94a3b8]">Jan 19, 2026 · 16 min read</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                AI search engines don't rank pages — they cite them. Learn what GEO is, how it differs from traditional SEO, and the three content traits that get you cited.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2457f5]">Read Article →</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
