'use client';

import AnimatedSection from './AnimatedSection';

const stats = [
  { label: 'Switchgear Market', value: '\u20B929,000 Cr', context: 'Growing 7\u20139% CAGR' },
  { label: 'RDSS Investment', value: '\u20B93.04L Cr', context: 'Smart grid & distribution' },
  { label: 'Solar Target', value: '500 GW', context: 'Driving BOS demand' },
  { label: 'CEA Priority Items', value: '73', context: 'Critical imports flagged' },
];

const phases = [
  {
    phase: 'Phase 1',
    timeline: 'Year 0\u20131',
    title: 'Foundation',
    body: 'Epoxy APG casting facility + VCB/switchgear distribution network.',
    investment: '\u20B98\u201310 Cr',
    products: ['Epoxy APG', 'VCB Distribution'],
  },
  {
    phase: 'Phase 2',
    timeline: 'Year 2\u20133',
    title: 'Expansion',
    body: 'Add heat shrink tubing extrusion line for busbar insulation.',
    investment: '\u20B92\u20133 Cr',
    products: ['Heat Shrink Tubing'],
  },
  {
    phase: 'Phase 3',
    timeline: 'Year 3\u20135',
    title: 'Full Portfolio',
    body: 'Busbar trunking assembly or IEC 61850 switch manufacturing.',
    investment: '\u20B95\u201310 Cr',
    products: ['Busbar Trunking', 'IEC 61850'],
  },
];

export default function RoadmapMarket() {
  return (
    <section id="roadmap" className="relative bg-navy-dark py-24 text-white overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <AnimatedSection direction="up">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Market Opportunity &amp; Growth Roadmap
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
            India&apos;s power sector transformation creates a generational opportunity for domestic manufacturers.
          </p>
        </AnimatedSection>

        {/* Market stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} direction="up" delay={i * 100}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-[10px] uppercase tracking-widest text-slate-400">{s.label}</div>
                <div className="mt-2 text-2xl font-semibold text-white md:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-slate-400">{s.context}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-auto my-14 h-px w-24 bg-white/20" />

        {/* Timeline */}
        <AnimatedSection direction="up" delay={200}>
          <p className="mb-8 text-center text-sm text-slate-300">
            Year 5 target: &#8377;40&ndash;60 Cr revenue at 15&ndash;20% EBITDA margins
          </p>
        </AnimatedSection>

        {/* Timeline connector (desktop) */}
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-0.5 bg-white/20">
            <div className="h-full bg-accent/60 animate-draw-path" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {phases.map((p, i) => (
              <AnimatedSection key={p.phase} direction="up" delay={300 + i * 150}>
                <div className="relative">
                  {/* Node dot */}
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-navy-dark">
                    <span className="text-sm font-bold text-accent">{i + 1}</span>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="text-xs font-medium text-accent">
                      {p.phase} &middot; {p.timeline}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{p.body}</p>
                    <div className="mt-3 text-sm font-semibold text-accent">{p.investment}</div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {p.products.map((pr) => (
                        <span key={pr} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-300">
                          {pr}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
