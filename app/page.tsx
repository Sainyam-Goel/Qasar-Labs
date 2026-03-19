'use client';

import { useState } from "react";

/* ───────────────────────── Nav ───────────────────────── */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Products", href: "#products" },
    { label: "Manufacturing", href: "#why" },
    { label: "Market", href: "#market" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#1e3a5f] to-[#2563eb]" />
          <span className="font-semibold tracking-wide text-[#1e3a5f]">Qasar Labs</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {links.map((l) => (
            <a key={l.href} className="hover:text-[#1e3a5f] transition-colors" href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            className="rounded-full bg-[#1e3a5f] px-5 py-2 text-sm font-medium text-white hover:bg-[#15304d] transition-colors"
            href="#contact"
          >
            Request Quote
          </a>
        </nav>
        <button
          className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4">
          <nav className="flex flex-col gap-4 text-sm text-slate-600">
            {links.map((l) => (
              <a
                key={l.href}
                className="hover:text-[#1e3a5f] transition-colors"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              className="rounded-full bg-[#1e3a5f] px-5 py-2 text-sm font-medium text-white hover:bg-[#15304d] transition-colors text-center"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Request Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center px-6 pt-24 text-center">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,58,95,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500">
          Electrical Equipment Manufacturing &bull; Karnal, Haryana
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1e3a5f] md:text-6xl">
          Precision Electrical Components for India&apos;s Power Infrastructure
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-600">
          CEA-aligned manufacturing of critical electrical equipment — from epoxy insulation systems to
          smart grid networking. Reducing import dependence, one component at a time.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="rounded-full bg-[#1e3a5f] px-6 py-3 font-medium text-white hover:bg-[#15304d] transition-colors"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#1e3a5f] px-6 py-3 font-medium text-[#1e3a5f] hover:bg-slate-50 transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Trust Bar ───────────────────────── */

function TrustBar() {
  const badges = ["BIS Certified", "IEC Compliant", "CEA Localization Partner", "MSME Registered", "Make in India"];
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {badges.map((b) => (
            <span
              key={b}
              className="text-sm font-semibold tracking-wide text-slate-500"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Products ───────────────────────── */

function Products() {
  const items = [
    {
      title: "Epoxy APG Casting",
      body: "MV insulators, bushings, CT/PT castings for switchgear OEMs. Automated Pressure Gelation with in-house HV testing.",
      tag: "Phase 1",
    },
    {
      title: "Heat Shrink Tubing",
      body: "PVC & polyolefin busbar insulation rated up to 25kV. Continuous extrusion for panel builders and industrial OEMs.",
      tag: "Phase 2",
    },
    {
      title: "VCB Distribution & AMC",
      body: "11kV/33kV vacuum circuit breaker panels, vacuum interrupters, and annual maintenance contracts for utilities.",
      tag: "Phase 1",
    },
    {
      title: "Busbar Trunking Systems",
      body: "Compact air-insulated BTS for data centers, commercial buildings, and industrial power distribution.",
      tag: "Phase 3",
    },
    {
      title: "IEC 61850 Networking",
      body: "Ruggedized Ethernet switches for digital substations. CEA priority localization item — currently 100% imported.",
      tag: "Phase 3",
    },
  ];
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#1e3a5f] md:text-3xl">Products</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          A phased portfolio addressing CEA-identified critical imports — from high-margin castings to smart grid electronics.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#1e3a5f] to-[#2563eb]" />
                <span className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-medium text-[#2563eb]">
                  {it.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#1e3a5f]">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Why Qasar Labs ───────────────────────── */

function WhyQasar() {
  const items = [
    {
      title: "Strategic Location",
      body: "NH-44 corridor, Karnal — 2 hours from Delhi NCR. Direct access to North India\u2019s largest power equipment demand center.",
    },
    {
      title: "CEA Aligned",
      body: "Directly addressing the 73 critical imported components identified by India\u2019s Central Electricity Authority for localization.",
    },
    {
      title: "Quality Certified",
      body: "BIS & IEC certification pathway, in-house high-voltage testing lab, and full OEM qualification support.",
    },
    {
      title: "Import Substitution",
      body: "Reducing India\u2019s \u20B99,800 Cr dependence on Chinese electrical imports with domestically manufactured alternatives.",
    },
  ];
  return (
    <section id="why" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#1e3a5f] md:text-3xl">
          Why Qasar Labs
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 h-8 w-8 rounded-lg bg-gradient-to-br from-[#1e3a5f] to-[#2563eb]" />
              <h3 className="text-lg font-semibold text-[#1e3a5f]">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Market Opportunity ───────────────────────── */

function MarketOpportunity() {
  const stats = [
    { label: "Switchgear Market", value: "\u20B929,000 Cr", context: "Growing 7\u20139% CAGR" },
    { label: "RDSS Investment", value: "\u20B93.04L Cr", context: "Smart grid & distribution" },
    { label: "Solar Target", value: "500 GW", context: "Driving BOS demand" },
    { label: "CEA Priority Items", value: "73", context: "Critical imports flagged" },
  ];
  return (
    <section id="market" className="border-y border-slate-200 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-[#1e3a5f] md:text-3xl">
          Market Opportunity
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="text-xs uppercase tracking-widest text-slate-500">{s.label}</div>
              <div className="mt-2 text-3xl font-semibold text-[#1e3a5f]">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Roadmap ───────────────────────── */

function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      timeline: "Year 0\u20131",
      title: "Foundation",
      body: "Epoxy APG casting facility + VCB/switchgear distribution network. Investment: \u20B98\u201310 Cr.",
    },
    {
      phase: "Phase 2",
      timeline: "Year 2\u20133",
      title: "Expansion",
      body: "Add heat shrink tubing extrusion line for busbar insulation. Incremental: \u20B92\u20133 Cr.",
    },
    {
      phase: "Phase 3",
      timeline: "Year 3\u20135",
      title: "Full Portfolio",
      body: "Busbar trunking assembly or IEC 61850 switch manufacturing. Investment: \u20B95\u201310 Cr.",
    },
  ];
  return (
    <section id="roadmap" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#1e3a5f] md:text-3xl">Roadmap</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Year 5 target: &#8377;40&ndash;60 Cr revenue at 15&ndash;20% EBITDA margins.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {phases.map((p) => (
            <div key={p.phase} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-medium text-[#2563eb]">
                {p.phase} &middot; {p.timeline}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#1e3a5f]">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#1e3a5f] md:text-3xl">
            Start a Conversation
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">
            Whether you&apos;re sourcing components, exploring partnership, or evaluating investment —
            we&apos;d like to hear from you.
          </p>
          <div className="mt-8 space-y-3 text-slate-600">
            <div>&#9993; hello@qasarlabs.com</div>
            <div>&#128205; Karnal, Haryana, India</div>
            <div>Mon&ndash;Fri &middot; 09:00&ndash;18:00 IST</div>
          </div>
        </div>
        <form
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">Company</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-sm text-slate-600">I am a&hellip;</label>
              <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2">
                <option>Customer / OEM</option>
                <option>Investor</option>
                <option>Partner / Distributor</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-slate-600">Message</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-blue-200 focus:ring-2"
                placeholder="Tell us about your requirements or interest&hellip;"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-[#1e3a5f] px-4 py-2.5 font-medium text-white hover:bg-[#15304d] transition-colors"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-3 text-[#1e3a5f]">
          <div className="h-5 w-5 rounded-md bg-gradient-to-br from-[#1e3a5f] to-[#2563eb]" />
          <span className="font-medium">Qasar Labs</span>
        </div>
        <div className="text-sm" suppressHydrationWarning>
          &copy; {new Date().getFullYear()} Qasar Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <TrustBar />
      <Products />
      <WhyQasar />
      <MarketOpportunity />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}
