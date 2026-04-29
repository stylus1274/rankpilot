"use client"

// Design: Matches RankPilot design system
// Dark navy (#0a0f1e) hero, white body sections, blue (#1d63ff) accents
// Fonts: Inter (body), Geist (headings) — same as homepage
// Layout: Full-width sections, card grids, comparison table

import content from "@/content/features.json"
import Link from "next/link"
import { useState } from "react"
import {
  Search, BarChart2, Eye, TrendingUp, Database, Lightbulb,
  FileSearch, AlignLeft, Layers, Calendar, Pen, List,
  Star, BookOpen, Settings, Users, Library, CheckSquare,
  Check, X, ArrowRight, Zap, Shield, Award
} from "lucide-react"

// ─── Header ──────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#1d63ff] flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-[#0a0f1e] font-black text-lg tracking-tight">RankPilot</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {[
            { label: "Features", href: "/features" },
            { label: "How It Works", href: "/how-it-works" },
            { label: "Pricing", href: "/#pricing" },
            { label: "Blog", href: "/blog" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-semibold transition-colors ${
                label === "Features"
                  ? "text-[#1d63ff]"
                  : "text-[#374151] hover:text-[#1d63ff]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/#pricing" className="text-sm font-semibold text-[#374151] hover:text-[#1d63ff] transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link
            href="/#pricing"
            className="bg-[#1d63ff] hover:bg-[#0b52e7] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-[0_8px_20px_rgba(29,99,255,0.35)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#1d63ff] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-lg">RankPilot</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              The all-in-one SEO content platform that helps you research, plan, and create content that ranks.
            </p>
          </div>
          {[
            { heading: "Product", links: ["Features", "Pricing", "Keyword Research", "Content Generation"] },
            { heading: "Company", links: ["About", "Contact", "Blog", "Careers"] },
            { heading: "Resources", links: ["Documentation", "API Reference", "Help Center", "Status"] },
            { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-xs font-extrabold uppercase tracking-widest text-white/40 mb-4">{heading}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-white/30 mt-8">© 2026 RankPilot. All rights reserved.</p>
      </div>
    </footer>
  )
}

// ─── Tool card ───────────────────────────────────────────────────────────────
function ToolCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#1d63ff]/30 hover:shadow-[0_8px_30px_rgba(29,99,255,0.08)] transition-all group">
      <div className="w-10 h-10 rounded-xl bg-[#eef4ff] flex items-center justify-center mb-4 group-hover:bg-[#1d63ff] transition-colors">
        <Icon className="w-5 h-5 text-[#1d63ff] group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-bold text-[#0a0f1e] text-base mb-2">{title}</h3>
      <p className="text-sm text-[#6b7280] leading-relaxed">{desc}</p>
    </div>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="mb-12">
      <div className="inline-flex items-center gap-2 bg-[#eef4ff] text-[#1d63ff] text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1d63ff]" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1e] mb-4 leading-tight">{title}</h2>
      <p className="text-lg text-[#6b7280] max-w-2xl leading-relaxed">{desc}</p>
    </div>
  )
}

// ─── Comparison table ─────────────────────────────────────────────────────────
const COMPARISON_ROWS = [
  { feature: "Keyword Research (Autocomplete)", rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: "GSC Analyzer (Near Jumps, Cannibalization)", rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: "Competitor URL Analyzer", rankpilot: true, surfer: true, frase: true, jasper: false },
  { feature: "Topic Clusters & Coverage Tracking", rankpilot: true, surfer: false, frase: true, jasper: false },
  { feature: "AI Article Generation", rankpilot: true, surfer: true, frase: true, jasper: true },
  { feature: "Brand Voice Per Project", rankpilot: true, surfer: false, frase: false, jasper: true },
  { feature: "ICP (Ideal Customer Profile)", rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: "Cross Check Fact Verification", rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: "Negative Keywords System", rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: "Internal Linking via Sitemap", rankpilot: true, surfer: false, frase: false, jasper: false },
  { feature: "Content Grader (E-E-A-T, AIO)", rankpilot: true, surfer: true, frase: true, jasper: false },
  { feature: "Position Tracker", rankpilot: true, surfer: true, frase: false, jasper: false },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<"research" | "planning" | "creation" | "brand">("research")

  return (
    <>
      <Header />
      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-b from-[#f0f5ff] to-white pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-white border border-[#1d63ff]/20 text-[#1d63ff] text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d63ff]" />
              {content.hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#0a0f1e] leading-tight mb-6">
              {content.hero.headline}{" "}
              <span className="text-[#1d63ff]">{content.hero.headlineAccent}</span>
            </h1>
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
              {content.hero.subheadline}
            </p>
          </div>
        </section>

        {/* ── Tab navigator ── */}
        <div className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
              {[
                { key: "research", label: "SEO Research" },
                { key: "planning", label: "Planning & Strategy" },
                { key: "creation", label: "Content Creation" },
                { key: "brand", label: "Brand & Project" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as typeof activeTab)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    activeTab === key
                      ? "bg-[#1d63ff] text-white shadow-[0_4px_12px_rgba(29,99,255,0.3)]"
                      : "text-[#6b7280] hover:text-[#1d63ff] hover:bg-[#eef4ff]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── SEO Research Tools ── */}
        <section id="research" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              eyebrow={content.research.eyebrow}
              title={content.research.title}
              desc={content.research.desc}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[Search, FileSearch, Eye, TrendingUp, Database, Lightbulb, BarChart2, AlignLeft].map((Icon, i) => (
                content.research.tools[i] && (
                  <ToolCard key={i} icon={Icon} title={content.research.tools[i].title} desc={content.research.tools[i].desc} />
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── Planning & Strategy ── */}
        <section id="planning" className="py-20 bg-[#f8faff]">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              eyebrow={content.planning.eyebrow}
              title={content.planning.title}
              desc={content.planning.desc}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[Lightbulb, Layers, Calendar].map((Icon, i) => (
                content.planning.tools[i] && (
                  <ToolCard key={i} icon={Icon} title={content.planning.tools[i].title} desc={content.planning.tools[i].desc} />
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── Content Creation & Optimization ── */}
        <section id="creation" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              eyebrow={content.creation.eyebrow}
              title={content.creation.title}
              desc={content.creation.desc}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.creation.tools[0] && (
                <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#1d63ff]/30 hover:shadow-[0_8px_30px_rgba(29,99,255,0.08)] transition-all group md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 rounded-xl bg-[#eef4ff] flex items-center justify-center mb-5 group-hover:bg-[#1d63ff] transition-colors">
                    <Pen className="w-6 h-6 text-[#1d63ff] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-black text-[#0a0f1e] text-xl mb-3">{content.creation.tools[0].title}</h3>
                  <p className="text-[#6b7280] leading-relaxed">{content.creation.tools[0].desc}</p>
                </div>
              )}
              {[List, Star, BookOpen].map((Icon, i) => (
                content.creation.tools[i + 1] && (
                  <ToolCard key={i} icon={Icon} title={content.creation.tools[i + 1].title} desc={content.creation.tools[i + 1].desc} />
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── Brand & Project Management ── */}
        <section id="brand" className="py-20 bg-[#f8faff]">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              eyebrow={content.brand.eyebrow}
              title={content.brand.title}
              desc={content.brand.desc}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[Settings, Users, Library, CheckSquare].map((Icon, i) => (
                content.brand.tools[i] && (
                  <ToolCard key={i} icon={Icon} title={content.brand.tools[i].title} desc={content.brand.tools[i].desc} />
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1e] mb-4">
                {content.comparison.title}
              </h2>
              <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
                {content.comparison.desc}
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#f8faff]">
                    <th className="text-left px-6 py-4 font-bold text-[#374151] w-1/2">Feature</th>
                    <th className="px-4 py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 bg-[#1d63ff] text-white text-xs font-extrabold px-3 py-1.5 rounded-full">
                        <Zap className="w-3 h-3" /> RankPilot
                      </span>
                    </th>
                    <th className="px-4 py-4 text-center font-semibold text-[#9ca3af]">Surfer SEO</th>
                    <th className="px-4 py-4 text-center font-semibold text-[#9ca3af]">Frase</th>
                    <th className="px-4 py-4 text-center font-semibold text-[#9ca3af]">Jasper</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className={`border-t border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-[#fafbff]"}`}>
                      <td className="px-6 py-3.5 font-medium text-[#374151]">{row.feature}</td>
                      <td className="px-4 py-3.5 text-center">
                        <Check className="w-5 h-5 text-[#1d63ff] mx-auto" strokeWidth={2.5} />
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        {row.surfer
                          ? <Check className="w-4 h-4 text-green-500 mx-auto" />
                          : <X className="w-4 h-4 text-gray-300 mx-auto" />}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        {row.frase
                          ? <Check className="w-4 h-4 text-green-500 mx-auto" />
                          : <X className="w-4 h-4 text-gray-300 mx-auto" />}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        {row.jasper
                          ? <Check className="w-4 h-4 text-green-500 mx-auto" />
                          : <X className="w-4 h-4 text-gray-300 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Why RankPilot callouts ── */}
        <section className="py-16 bg-[#f8faff]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {([Zap, Shield, Award] as React.ElementType[]).map((Icon, i) => {
                const item = content.whyUs[i]
                if (!item) return null
                return (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 p-7">
                    <div className="w-11 h-11 rounded-xl bg-[#eef4ff] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#1d63ff]" />
                    </div>
                    <h3 className="font-black text-[#0a0f1e] text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6b7280] leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-20 bg-[#0a0f1e]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {content.cta.title}
            </h2>
            <p className="text-lg text-white/60 mb-8">
              {content.cta.desc}
            </p>
            <Link
              href={content.cta.buttonHref}
              className="inline-flex items-center gap-2 bg-[#1d63ff] hover:bg-[#0b52e7] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:shadow-[0_14px_30px_rgba(29,99,255,0.4)] hover:-translate-y-0.5"
            >
              {content.cta.buttonText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
