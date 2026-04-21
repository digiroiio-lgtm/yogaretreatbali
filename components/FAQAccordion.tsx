import type { FaqItem } from "@/lib/seo-pages";

export function FAQAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">{faq.question}</summary>
            <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
