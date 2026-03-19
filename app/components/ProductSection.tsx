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

interface SectionStyle {
  bg: string;
  darkBg: string;
  badgeBg: string;
  badgeText: string;
  border: string;
}

const sectionStyles: Record<number, SectionStyle> = {
  0: { bg: 'from-tint-blue to-white', darkBg: 'dark:from-[#0c1528] dark:to-[#0a0f1a]', badgeBg: 'bg-blue-50 dark:bg-blue-950', badgeText: 'text-blue-600 dark:text-blue-300', border: 'border-blue-100 dark:border-blue-800/50' },
  1: { bg: 'from-tint-green to-white', darkBg: 'dark:from-[#0c1a14] dark:to-[#0a0f1a]', badgeBg: 'bg-emerald-50 dark:bg-emerald-950', badgeText: 'text-emerald-600 dark:text-emerald-300', border: 'border-emerald-100 dark:border-emerald-800/50' },
  2: { bg: 'from-tint-blue/80 to-tint-green/40', darkBg: 'dark:from-[#0c1528] dark:to-[#0c1a14]', badgeBg: 'bg-sky-50 dark:bg-sky-950', badgeText: 'text-sky-600 dark:text-sky-300', border: 'border-sky-100 dark:border-sky-800/50' },
  3: { bg: 'from-tint-green/80 to-tint-blue/40', darkBg: 'dark:from-[#0c1a14] dark:to-[#0c1528]', badgeBg: 'bg-emerald-50 dark:bg-emerald-950', badgeText: 'text-emerald-600 dark:text-emerald-300', border: 'border-emerald-100 dark:border-emerald-800/50' },
  4: { bg: 'from-tint-blue to-tint-green/30', darkBg: 'dark:from-[#0c1528] dark:to-[#0c1a14]', badgeBg: 'bg-blue-50 dark:bg-blue-950', badgeText: 'text-blue-600 dark:text-blue-300', border: 'border-blue-100 dark:border-blue-800/50' },
};

export default function ProductSection({ index, title, subtitle, description, specs, illustration, steps }: Props) {
  const isEven = index % 2 === 0;
  const style = sectionStyles[index] ?? sectionStyles[0];

  return (
    <section className={`bg-gradient-to-br ${style.bg} ${style.darkBg} py-20`} id={index === 0 ? 'products' : undefined}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={`grid items-center gap-12 md:grid-cols-2 ${!isEven ? 'md:[direction:rtl]' : ''}`}>
          {/* Text */}
          <AnimatedSection direction={isEven ? 'left' : 'right'} className={!isEven ? 'md:[direction:ltr]' : ''}>
            <span className={`inline-block rounded-full ${style.badgeBg} px-3 py-1 text-xs font-medium ${style.badgeText}`}>
              {subtitle}
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-navy dark:text-slate-100 md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {specs.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-navy/30 dark:hover:border-slate-500 hover:text-navy dark:hover:text-slate-100 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Illustration */}
          <AnimatedSection direction={isEven ? 'right' : 'left'} delay={200} className={!isEven ? 'md:[direction:ltr]' : ''}>
            <div className={`svg-illustration rounded-2xl border ${style.border} bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm p-8 shadow-sm`}>
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
