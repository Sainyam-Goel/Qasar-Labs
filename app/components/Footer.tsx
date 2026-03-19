'use client';

import Logo from './svg/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-page dark:bg-[#060a12] py-10 text-slate-500 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2.5 text-navy dark:text-slate-200">
          <Logo size={24} />
          <span className="font-medium">Qasar Labs</span>
        </div>
        <div className="text-sm" suppressHydrationWarning>
          &copy; {new Date().getFullYear()} Qasar Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
