'use client';

import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section className="relative flex min-h-[82vh] items-center justify-center px-6 pt-24 text-center">
      {/* Decorative circuit SVG behind text */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Circuit paths */}
        <path d="M100 300 H300 V150 H500 V300 H700" stroke="#1e3a5f" strokeWidth="2" className="animate-draw-path" />
        <path d="M200 100 V200 H400 V400 H600 V200" stroke="#1e3a5f" strokeWidth="1.5" className="animate-draw-path" style={{ animationDelay: '0.5s' }} />
        <path d="M50 450 H250 V350 H450 V500 H650" stroke="#2563eb" strokeWidth="1.5" className="animate-draw-path" style={{ animationDelay: '1s' }} />
        {/* Nodes */}
        {[[100, 300], [300, 150], [500, 300], [700, 300], [200, 100], [400, 400], [250, 350], [650, 500]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="#1e3a5f" opacity="0.5" />
        ))}
      </svg>

      {/* Soft gradient wash */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(30,58,95,0.04), transparent)',
        }}
      />

      <AnimatedSection direction="up">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            Precision-Engineered &middot; CEA Aligned &middot; Made in India
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-navy md:text-6xl">
            Precision Electrical Components for India&apos;s Power Infrastructure
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            CEA-aligned manufacturing of critical electrical equipment &mdash; from epoxy insulation systems
            to smart grid networking. Reducing import dependence, one component at a time.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="rounded-full bg-navy px-6 py-3 font-medium text-white hover:bg-navy-dark transition-colors"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="rounded-full border border-navy px-6 py-3 font-medium text-navy hover:bg-slate-50 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
