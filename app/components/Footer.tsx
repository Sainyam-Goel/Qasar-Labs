'use client';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-page py-10 text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-3 text-navy">
          <div className="h-5 w-5 rounded-md bg-gradient-to-br from-navy to-[#2563eb]" />
          <span className="font-medium">Qasar Labs</span>
        </div>
        <div className="text-sm" suppressHydrationWarning>
          &copy; {new Date().getFullYear()} Qasar Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
