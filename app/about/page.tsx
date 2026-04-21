import { LeadForm } from "@/components/LeadForm";

export const metadata = {
  title: "About Us",
  description:
    "Learn why travelers trust YogaRetreatBali for curated, transparent, and conversion-ready yoga retreat recommendations.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-black text-slate-900">About YogaRetreatBali</h1>
        <p className="text-base text-slate-700">
          We are a specialist retreat marketplace focused on helping travelers compare and book Bali programs with clarity and speed.
        </p>
      </header>

      <section className="space-y-3 rounded-2xl bg-white p-6">
        <h2 className="text-2xl font-bold text-slate-900">Why trust us</h2>
        <p className="text-base text-slate-700">
          Our team curates retreat options by value, guest satisfaction, and fit for different traveler segments. We prioritize transparent package details so guests can make confident decisions.
        </p>
        <p className="text-base text-slate-700">
          We support WhatsApp-first concierge matching to reduce search friction and help users convert from discovery to inquiry in minutes.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl bg-white p-6">
        <h2 className="text-2xl font-bold text-slate-900">Expert positioning</h2>
        <p className="text-base text-slate-700">
          We combine full-stack marketplace infrastructure with SEO-first information architecture so high-intent users can find the exact retreat style, budget band, and duration they need.
        </p>
      </section>

      <LeadForm />
    </main>
  );
}
