import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qasar Labs — Reliable Intelligence for the Real World",
  description: "We design, harden, and deploy edge‑to‑cloud AI systems for critical environments.",
  openGraph: {
    title: "Qasar Labs",
    description: "Applied AI • Secure Systems • Custom Hardware",
    url: "https://qasarlabs.com",
    siteName: "Qasar Labs",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Qasar Labs",
    description: "Applied AI • Secure Systems • Custom Hardware",
    images: ["/og.png"]
  },
  metadataBase: new URL("https://qasarlabs.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
