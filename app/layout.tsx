import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://yogaretreatbali.com"),
  title: {
    default: "YogaRetreatBali | Compare & Book Yoga Retreats in Bali",
    template: "%s | YogaRetreatBali",
  },
  description:
    "SEO-first yoga retreat marketplace for Bali. Compare retreats by budget, duration, and style. Book via WhatsApp or lead form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-extrabold tracking-tight text-emerald-700">
              YogaRetreatBali
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
              <Link href="/yoga-retreat-bali">Retreats</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-20 border-t border-slate-200 bg-white">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 text-sm text-slate-700 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div>
              <h2 className="font-semibold text-slate-900">YogaRetreatBali</h2>
              <p className="mt-2">Compare curated Bali yoga retreats by duration, location, style, and budget to book with confidence.</p>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Popular SEO Pages</h2>
              <ul className="mt-2 space-y-1">
                <li><Link href="/yoga-retreat-bali">Yoga Retreat Bali</Link></li>
                <li><Link href="/7-day-yoga-retreat-bali">7 Day Yoga Retreat Bali</Link></li>
                <li><Link href="/affordable-yoga-retreat-bali">Affordable Yoga Retreat Bali</Link></li>
                <li><Link href="/luxury-yoga-retreat-bali">Luxury Yoga Retreat Bali</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Conversion Support</h2>
              <p className="mt-2">WhatsApp concierge support for quick recommendations, transparent pricing, and affiliate booking assistance.</p>
            </div>
          </div>
        </footer>
        <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      </body>
    </html>
  );
}
