'use client';

import AnimatedSection from './AnimatedSection';

const badges = ['BIS Certified', 'IEC Compliant', 'CEA Localization Partner', 'MSME Registered', 'Make in India'];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection direction="fade">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {badges.map((b) => (
              <span key={b} className="text-sm font-semibold tracking-wide text-slate-400">
                {b}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
