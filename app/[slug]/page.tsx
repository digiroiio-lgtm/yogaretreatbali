import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";
import { RetreatCard } from "@/components/RetreatCard";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { getSeoPage, getRetreatProducts, seoPages } from "@/lib/seo-pages";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import { toTitleCase } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
  };
}

function longFormContent(keyword: string, intro: string) {
  return [
    `${intro} Choosing the right ${keyword} experience is about balancing your goals, travel style, and practical constraints. This marketplace format helps you compare retreat programs by length, teaching style, location, and total package value before you inquire. Instead of browsing dozens of scattered listings, you can immediately see what each retreat emphasizes and which inclusions matter most for your budget.`,
    `When evaluating a ${keyword} option, start with the daily schedule. Some retreats focus on dynamic movement with two active classes per day, while others prioritize restorative sessions, breathwork, meditation, and quiet reflection. A high-fit program should match your current energy levels and experience level. Beginners often benefit from smaller class sizes and clear posture modifications, while experienced yogis may want advanced sequencing and workshop depth.`,
    `Location in Bali also influences the retreat outcome. Ubud is popular for jungle calm and holistic culture. Canggu works well for a social, surf-friendly atmosphere. Uluwatu attracts travelers seeking ocean views and sunset practices. Sidemen offers a quieter mountain-valley setting for digital detox and slower pacing. Comparing location details early can prevent mismatch and improve satisfaction once you arrive.`,
    `Price should be compared by total value, not headline rate alone. A lower package cost can still be excellent if meals, transfers, and core classes are included. Luxury options tend to include premium accommodation, private sessions, and spa access, which can justify the difference if comfort and personalization are priorities. The key is to assess what you actually use during your stay.`,
    `For faster decision-making, share your travel dates and budget through the lead form or WhatsApp concierge. You can receive a curated shortlist aligned to your goals, whether you want a beginner reset, a detox-focused week, or a high-end wellness immersion. This guided path improves conversion speed and reduces booking friction because your shortlist is already filtered to practical fit.`,
    `Before booking, check cancellation terms, room type flexibility, and instructor credentials. If you are traveling solo, ask about community activities and airport transfer support. If your schedule is fixed, ask for confirmation on start dates and any optional add-ons. With these checks completed, your ${keyword} plan becomes more predictable and easier to commit to.`,
  ];
}

export default async function SeoPage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const featuredRetreats = getRetreatProducts();
  const contentBlocks = longFormContent(page.keyword, page.intro);

  return (
    <>
      <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <nav className="text-sm text-slate-500">
          <Link href="/">Home</Link> / <span>{page.h1}</span>
        </nav>

        <header className="space-y-4">
          <h1 className="text-4xl font-black text-slate-900">{page.h1}</h1>
          <p className="max-w-3xl text-base text-slate-700">{page.metaDescription}</p>
        </header>

        <section className="space-y-5 rounded-2xl bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900">Why choose this Bali retreat type?</h2>
          {contentBlocks.map((paragraph, index) => (
            <p key={index} className="text-base leading-8 text-slate-700">
              {paragraph}
            </p>
          ))}
          <h3 className="text-xl font-bold text-slate-900">How to shortlist the right package</h3>
          <p className="text-base leading-8 text-slate-700">
            Compare schedule intensity, accommodation level, inclusions, and location atmosphere. Then validate availability through WhatsApp to secure the best-fit option quickly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Featured Retreat Packages</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredRetreats.map((retreat) => (
              <RetreatCard key={retreat.slug} retreat={retreat} />
            ))}
          </div>
        </section>

        <LeadForm />
        <FAQAccordion faqs={page.faqs.slice(0, 6)} />

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-slate-900">Related Bali Retreat Searches</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {page.relatedSlugs.map((relatedSlug) => (
              <Link
                key={relatedSlug}
                href={`/${relatedSlug}`}
                className="rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100"
              >
                {toTitleCase(relatedSlug)}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Script
        id={`${page.slug}-faq-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(page.faqs)) }}
      />
      <Script
        id={`${page.slug}-breadcrumb-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(page.h1, page.slug)) }}
      />
      <Script
        id={`${page.slug}-product-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(featuredRetreats)) }}
      />
      <WhatsAppFloatingButton />
    </>
  );
}
