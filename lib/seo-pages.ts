import { retreats } from "@/lib/data";

export type FaqItem = { question: string; answer: string };

export type SeoPage = {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  keyword: string;
  intro: string;
  faqs: FaqItem[];
  relatedSlugs: string[];
};

const defaultFaqs: FaqItem[] = [
  {
    question: "What is the best time for a yoga retreat in Bali?",
    answer:
      "The dry season from April to October is most popular for outdoor activities, but Bali retreats run year-round thanks to warm weather and indoor yoga shalas.",
  },
  {
    question: "How much does a Bali yoga retreat cost?",
    answer:
      "Budget retreats start around USD 600 for 5 to 7 days, while premium packages with private villas and spa inclusions can exceed USD 2,000.",
  },
  {
    question: "Are Bali yoga retreats suitable for beginners?",
    answer:
      "Yes. Most listed programs include beginner-friendly classes, modifications, and personalized coaching so newcomers can join confidently.",
  },
  {
    question: "What is included in a retreat package?",
    answer:
      "Typical inclusions are accommodation, daily yoga classes, selected meals, and wellness activities. Transfers and excursions vary by provider.",
  },
  {
    question: "How do I choose the right retreat in Bali?",
    answer:
      "Compare duration, location, budget, teaching style, and inclusions. Use WhatsApp or the lead form to get a curated shortlist based on your goals.",
  },
  {
    question: "Can I book with flexible dates?",
    answer:
      "Yes. Many retreat partners run weekly starts or allow custom check-in dates. Share your preferred travel window to get matched options.",
  },
];

const RELATED_LINK_COUNT = 4;

const pages: Omit<SeoPage, "relatedSlugs">[] = [
  {
    slug: "yoga-retreat-bali",
    title: "Yoga Retreat Bali: Compare Packages, Prices & Best Dates",
    h1: "Yoga Retreats in Bali – Compare & Book the Best Options",
    metaDescription:
      "Compare top-rated yoga retreat Bali packages by location, duration, and budget. Find beginner to luxury retreats and book via WhatsApp.",
    keyword: "yoga retreat bali",
    intro: "Explore the most complete yoga retreat Bali marketplace with transparent pricing, verified ratings, and fast WhatsApp support.",
    faqs: defaultFaqs,
  },
  {
    slug: "bali-yoga-retreats",
    title: "Bali Yoga Retreats 2026: Trusted Programs for Every Budget",
    h1: "Bali Yoga Retreats for Every Style and Budget",
    metaDescription:
      "Browse Bali yoga retreats from affordable immersion programs to luxury wellness escapes. Get matched with the right retreat fast.",
    keyword: "bali yoga retreats",
    intro: "Bali yoga retreats combine world-class teachers, nature, and wellness experiences across Ubud, Canggu, Uluwatu, and beyond.",
    faqs: defaultFaqs,
  },
  {
    slug: "best-yoga-retreat-bali",
    title: "Best Yoga Retreat Bali: Top-Rated Picks and Value Deals",
    h1: "Best Yoga Retreat Bali Options Curated by Experts",
    metaDescription:
      "Discover the best yoga retreat Bali selections based on guest reviews, inclusions, and value. Compare and shortlist quickly.",
    keyword: "best yoga retreat bali",
    intro: "Our curated list highlights top-rated experiences for travelers looking for trusted programs and strong value.",
    faqs: defaultFaqs,
  },
  {
    slug: "7-day-yoga-retreat-bali",
    title: "7 Day Yoga Retreat Bali: Weekly Programs with Great Value",
    h1: "7 Day Yoga Retreat Bali Packages",
    metaDescription: "Find 7 day yoga retreat Bali deals with accommodation, meals, and daily classes included.",
    keyword: "7 day yoga retreat bali",
    intro: "Seven days is the sweet spot for recovery, habit reset, and meaningful yoga progress without taking long leave.",
    faqs: defaultFaqs,
  },
  {
    slug: "5-day-yoga-retreat-bali",
    title: "5 Day Yoga Retreat Bali: Short Escapes for Busy Schedules",
    h1: "5 Day Yoga Retreat Bali Escapes",
    metaDescription: "Compare 5 day yoga retreat Bali options for quick wellness breaks and restorative practices.",
    keyword: "5 day yoga retreat bali",
    intro: "A five-day retreat is ideal for short resets with high impact through focused classes and mindful downtime.",
    faqs: defaultFaqs,
  },
  {
    slug: "10-day-yoga-retreat-bali",
    title: "10 Day Yoga Retreat Bali: Deep Immersion Programs",
    h1: "10 Day Yoga Retreat Bali Experiences",
    metaDescription: "Choose 10 day yoga retreat Bali programs designed for deeper transformation and complete wellness immersion.",
    keyword: "10 day yoga retreat bali",
    intro: "Ten-day retreats offer deeper progress with expanded workshops, rest days, and structured wellness planning.",
    faqs: defaultFaqs,
  },
  {
    slug: "cheap-yoga-retreat-bali",
    title: "Cheap Yoga Retreat Bali: Budget-Friendly Packages",
    h1: "Cheap Yoga Retreat Bali Deals",
    metaDescription:
      "Book cheap yoga retreat Bali options without compromising essentials. Compare low-cost packages and inclusions.",
    keyword: "cheap yoga retreat bali",
    intro: "Budget-conscious travelers can still access quality teaching, healthy meals, and meaningful retreat experiences.",
    faqs: defaultFaqs,
  },
  {
    slug: "affordable-yoga-retreat-bali",
    title: "Affordable Yoga Retreat Bali: Best Value Picks",
    h1: "Affordable Yoga Retreat Bali Programs",
    metaDescription: "Find affordable yoga retreat Bali packages with transparent pricing and flexible dates.",
    keyword: "affordable yoga retreat bali",
    intro: "Affordable programs balance comfort, quality instruction, and practical inclusions for strong overall value.",
    faqs: defaultFaqs,
  },
  {
    slug: "luxury-yoga-retreat-bali",
    title: "Luxury Yoga Retreat Bali: Premium Wellness Escapes",
    h1: "Luxury Yoga Retreat Bali Collection",
    metaDescription: "Discover luxury yoga retreat Bali stays with private villas, curated menus, and expert-led wellness treatments.",
    keyword: "luxury yoga retreat bali",
    intro: "Luxury retreats combine personalized service, premium accommodation, and integrated spa or holistic therapies.",
    faqs: defaultFaqs,
  },
  {
    slug: "yoga-retreat-bali-for-beginners",
    title: "Yoga Retreat Bali for Beginners: Start with Confidence",
    h1: "Beginner-Friendly Yoga Retreat Bali Programs",
    metaDescription: "Find yoga retreat Bali for beginners with supportive teachers, gentle progressions, and flexible class levels.",
    keyword: "yoga retreat bali for beginners",
    intro: "New practitioners thrive in Bali's welcoming retreat culture where classes include clear guidance and modifications.",
    faqs: defaultFaqs,
  },
  {
    slug: "detox-retreat-bali",
    title: "Detox Retreat Bali: Cleanse, Recover, and Rebalance",
    h1: "Detox Retreat Bali Experiences",
    metaDescription: "Compare detox retreat Bali packages with nutrition-focused menus, yoga therapy, and recovery rituals.",
    keyword: "detox retreat bali",
    intro: "Detox retreats in Bali are designed for reset through clean meals, restorative movement, and mindful routines.",
    faqs: defaultFaqs,
  },
  {
    slug: "wellness-retreat-bali",
    title: "Wellness Retreat Bali: Holistic Programs for Mind & Body",
    h1: "Wellness Retreat Bali Programs",
    metaDescription: "Browse wellness retreat Bali packages featuring yoga, spa, meditation, and personalized wellbeing activities.",
    keyword: "wellness retreat bali",
    intro: "Wellness retreats offer holistic programming that helps guests recharge physically, mentally, and emotionally.",
    faqs: defaultFaqs,
  },
  {
    slug: "meditation-retreat-bali",
    title: "Meditation Retreat Bali: Peaceful Immersion Retreats",
    h1: "Meditation Retreat Bali Journeys",
    metaDescription:
      "Find meditation retreat Bali programs in serene settings with guided mindfulness, silent practice, and restorative yoga.",
    keyword: "meditation retreat bali",
    intro: "Meditation retreats in Bali support emotional clarity through structured practice, nature, and intentional digital downtime.",
    faqs: defaultFaqs,
  },
];

export const seoPages: SeoPage[] = pages.map((page, index) => ({
  ...page,
  relatedSlugs: pages
    .map((candidate) => candidate.slug)
    .filter((slug) => slug !== page.slug)
    .slice(index, index + RELATED_LINK_COUNT)
    .concat(
      pages
        .map((candidate) => candidate.slug)
        .filter((slug) => slug !== page.slug)
        .slice(0, Math.max(0, index + RELATED_LINK_COUNT - (pages.length - 1))),
    ),
}));

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export function getRetreatProducts(limit = 3) {
  return retreats.slice(0, limit);
}
