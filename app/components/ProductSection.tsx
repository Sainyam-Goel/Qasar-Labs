'use client';

import { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';
import ProcessFlow from './svg/ProcessFlow';

interface Props {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  illustration: ReactNode;
  steps: { label: string }[];
}

export default function ProductSection({ index, title, subtitle, description, specs, illustration, steps }: Props) {
  const isEven = index % 2 === 0;
  const bg = isEven ? 'bg-white' : 'bg-section-alt';

  return (
    <section className={`${bg} py-20`} id={index === 0 ? 'products' : undefined}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={`grid items-center gap-12 md:grid-cols-2 ${!isEven ? 'md:[direction:rtl]' : ''}`}>
          {/* Text */}
          <AnimatedSection direction={isEven ? 'left' : 'right'} className={!isEven ? 'md:[direction:ltr]' : ''}>
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#2563eb]">
              {subtitle}
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {specs.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-navy/30 hover:text-navy transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Illustration */}
          <AnimatedSection direction={isEven ? 'right' : 'left'} delay={200} className={!isEven ? 'md:[direction:ltr]' : ''}>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
              {illustration}
            </div>
          </AnimatedSection>
        </div>

        {/* Process flow */}
        <AnimatedSection direction="up" delay={400}>
          <ProcessFlow steps={steps} />
        </AnimatedSection>
      </div>
    </section>
  );
}
