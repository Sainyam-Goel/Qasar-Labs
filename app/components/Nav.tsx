'use client';

import { useState } from 'react';

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-page/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-navy to-[#2563eb]" />
          <span className="font-semibold tracking-wide text-navy">Qasar Labs</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {links.map((l) => (
            <a key={l.href} className="hover:text-navy transition-colors" href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            className="rounded-full bg-navy px-5 py-2 text-sm font-medium text-white hover:bg-navy-dark transition-colors"
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
              <a key={l.href} className="hover:text-navy transition-colors" href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              className="rounded-full bg-navy px-5 py-2 text-sm font-medium text-white hover:bg-navy-dark transition-colors text-center"
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
