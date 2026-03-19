import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qasar Labs — Precision Electrical Components for India's Power Infrastructure",
  description:
    "CEA-aligned electrical equipment manufacturer. Epoxy APG castings, heat shrink tubing, VCB distribution, busbar trunking systems, and IEC 61850 networking for India's power sector.",
  openGraph: {
    title: "Qasar Labs — Electrical Equipment Manufacturing",
    description:
      "Precision electrical components for India's power infrastructure. BIS certified, IEC compliant, CEA localization partner.",
    url: "https://qasarlabs.com",
    siteName: "Qasar Labs",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qasar Labs — Electrical Equipment Manufacturing",
    description:
      "Precision electrical components for India's power infrastructure. BIS certified, IEC compliant.",
    images: ["/og.png"],
  },
  metadataBase: new URL("https://qasarlabs.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-page dark:bg-[#0a0f1a] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">{children}</body>
    </html>
  );
}
