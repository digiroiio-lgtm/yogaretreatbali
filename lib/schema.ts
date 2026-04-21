import type { FaqItem } from "@/lib/seo-pages";
import type { Retreat } from "@/lib/data";

const baseUrl = "https://yogaretreatbali.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YogaRetreatBali",
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    sameAs: ["https://www.instagram.com/yogaretreatbali"],
    description:
      "YogaRetreatBali is a curated marketplace helping travelers compare and book yoga retreats in Bali.",
  };
}

export function breadcrumbSchema(name: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${baseUrl}/${slug}`,
      },
    ],
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function productSchema(retreats: Retreat[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: retreats.map((retreat, index) => ({
      "@type": "Product",
      position: index + 1,
      name: retreat.title,
      image: retreat.images,
      description: retreat.description,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: retreat.rating,
        reviewCount: retreat.reviewCount,
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: retreat.price,
        availability: "https://schema.org/InStock",
      },
    })),
  };
}
