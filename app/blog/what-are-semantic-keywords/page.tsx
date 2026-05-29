"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Menu, X, Gauge } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
              <Link key={item.href} href={item.href} className="block py-3 text-sm font-semibold text-[#4b5568]" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

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
              {[
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Use Cases', href: '/use-cases' },
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="transition-colors hover:text-white">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-white/40">Company</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Blog', href: '/blog' },
              ].map((item) => (
                <li key={item.label}><Link href={item.href} className="transition-colors hover:text-white">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-widest text-white/40">Resources</p>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              {['Help Center', 'Status'].map((item) => (
                <li key={item}><span className="cursor-default text-white/40">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} RankPilot. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SemanticKeywordsPost() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white pt-[78px]">
        {/* Hero */}
        <section className="border-b border-[#e8edf5] bg-[#f8fafc] py-14">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2457f5] hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">Keyword Research</span>
            </div>
            <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-[#071225] sm:text-5xl">
              What Are Semantic Keywords and Why Do They Matter for SEO?
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#6b7280]">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> May 29, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 2 min read</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="mx-auto max-w-[860px] px-5 py-14 sm:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:text-[#071225] prose-p:text-[#374151] prose-p:leading-8 prose-a:text-[#2457f5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#071225]">

            <p>
              If you have spent any time studying modern SEO, you have probably heard the term <strong>semantic keywords</strong>. But what does it actually mean, and why should you care?
            </p>

            <h2>The Simple Definition</h2>
            <p>
              Semantic keywords are words and phrases that are <strong>conceptually related</strong> to your primary keyword. They are not just synonyms — they are the surrounding vocabulary that helps search engines understand the full meaning and context of your content.
            </p>
            <p>
              For example, if your primary keyword is <em>coffee brewing</em>, semantic keywords might include: pour-over, grind size, water temperature, extraction, French press, and bloom. None of these are the same as "coffee brewing," but they all belong to the same topic cluster.
            </p>

            <h2>Why Google Cares About Semantics</h2>
            <p>
              Google no longer matches pages to queries based purely on keyword frequency. Since the introduction of the Hummingbird algorithm in 2013 and the BERT update in 2019, Google uses <strong>natural language processing</strong> to understand what a page is actually about — not just which words appear on it.
            </p>
            <p>
              A page that covers a topic thoroughly, using the natural vocabulary of that subject, signals to Google that it is a credible, comprehensive resource. A page that repeats a single keyword over and over without the surrounding context looks thin by comparison.
            </p>

            <h2>How to Use Semantic Keywords in Practice</h2>
            <p>
              You do not need to stuff semantic keywords into your content. The goal is to write naturally and completely. A few practical steps:
            </p>
            <ul>
              <li><strong>Study the SERPs.</strong> Look at the top-ranking pages for your target keyword and note the vocabulary they use. What subtopics do they cover?</li>
              <li><strong>Use "People Also Ask" and related searches.</strong> These surfaces reveal the questions and concepts Google associates with your topic.</li>
              <li><strong>Cover subtopics, not just the main keyword.</strong> A post about coffee brewing that also addresses grind size, water ratios, and equipment will naturally include the semantic vocabulary Google expects.</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>
              Semantic keywords are not a tactic — they are a byproduct of writing thorough, well-researched content. When you cover a topic completely, you will naturally use the language that signals topical authority to Google. The result is content that ranks for more queries, not just the one you targeted.
            </p>

          </div>
        </article>

        {/* Related Articles */}
        <section className="border-t border-[#e8edf5] bg-white py-16">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <div className="not-prose">
              <p className="mb-6 font-display text-2xl font-black text-[#071225]">Related Articles</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link href="/blog/google-keyword-planner-smarter-research" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="mb-3 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">Keyword Research</span>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-[#2457f5]">How to Use Google Keyword Planner for Smarter Research</p>
                </Link>
                <Link href="/blog/generative-engine-optimization-explained" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="mb-3 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">GEO</span>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-[#2457f5]">Generative Engine Optimization Explained: The Complete Guide</p>
                </Link>
                <Link href="/blog/7-ways-businesses-benefit-seo-automation-ai" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="mb-3 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">SEO Automation</span>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-[#2457f5]">7 Ways Businesses Benefit from SEO Automation Using AI</p>
                </Link>
                <Link href="/blog/content-formats-google-ai-overviews" className="group rounded-2xl border border-[#e8edf5] bg-white p-6 transition-shadow hover:shadow-md">
                  <span className="mb-3 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2457f5]">AI Overviews</span>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-[#2457f5]">Content Formats That Get Featured in Google AI Overviews</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
