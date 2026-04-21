export type Retreat = {
  slug: string;
  title: string;
  location: string;
  duration: number;
  price: number;
  rating: number;
  images: string[];
  description: string;
  style: "luxury" | "affordable" | "detox" | "meditation" | "beginner";
  activities: string[];
  badges: Array<"mostBooked" | "topRated" | "bestValue">;
};

const cardImage = "/retreats/card.svg";

export const retreats: Retreat[] = [
  {
    slug: "ubud-jungle-renewal",
    title: "Ubud Jungle Renewal Retreat",
    location: "Ubud",
    duration: 7,
    price: 850,
    rating: 4.9,
    images: [cardImage],
    description:
      "A balanced 7-day Bali yoga retreat with daily flow classes, guided breathwork, and nourishing local meals close to Ubud rice terraces.",
    style: "affordable",
    activities: ["hiking", "sound healing"],
    badges: ["mostBooked", "bestValue"],
  },
  {
    slug: "canggu-surf-flow",
    title: "Canggu Surf & Flow Retreat",
    location: "Canggu",
    duration: 5,
    price: 780,
    rating: 4.8,
    images: [cardImage],
    description:
      "Sunrise yoga and beginner-friendly surf coaching in Canggu with flexible schedules for digital nomads.",
    style: "beginner",
    activities: ["surf", "mobility"],
    badges: ["mostBooked"],
  },
  {
    slug: "seminyak-luxury-reset",
    title: "Seminyak Luxury Reset",
    location: "Seminyak",
    duration: 10,
    price: 2200,
    rating: 5,
    images: [cardImage],
    description:
      "Premium villa stay, private yoga coaching, spa therapies, and concierge planning for a luxury yoga retreat Bali experience.",
    style: "luxury",
    activities: ["spa", "private excursions"],
    badges: ["topRated"],
  },
  {
    slug: "sidemen-detox-escape",
    title: "Sidemen Detox Escape",
    location: "Sidemen",
    duration: 7,
    price: 990,
    rating: 4.7,
    images: [cardImage],
    description:
      "Clean eating, yoga therapy, and optional fasting guidance in a quiet valley focused on healing and reset.",
    style: "detox",
    activities: ["detox", "nature walks"],
    badges: ["bestValue"],
  },
  {
    slug: "uluwatu-ocean-meditation",
    title: "Uluwatu Ocean Meditation Retreat",
    location: "Uluwatu",
    duration: 7,
    price: 1200,
    rating: 4.9,
    images: [cardImage],
    description:
      "Meditation-led mornings, sunset yin classes, and cliffside ocean views in one of Bali's most scenic regions.",
    style: "meditation",
    activities: ["meditation", "breathwork"],
    badges: ["topRated"],
  },
  {
    slug: "sanur-affordable-immersion",
    title: "Sanur Affordable Immersion",
    location: "Sanur",
    duration: 7,
    price: 640,
    rating: 4.6,
    images: [cardImage],
    description:
      "Low-cost yoga retreat package with shared accommodation, daily practice, and cultural activities in Sanur.",
    style: "affordable",
    activities: ["temple visit", "community dinners"],
    badges: ["bestValue"],
  },
];

export const popularSearches = [
  "7 day yoga retreat bali",
  "affordable yoga retreat bali",
  "luxury yoga retreat bali",
  "women only yoga retreat bali",
  "bali meditation retreat",
  "detox retreat bali",
];

export const wellnessCategories = ["Detox", "Meditation", "Ayurveda", "Sound Healing", "Yin Yoga", "Teacher Training"];

export const activityCategories = ["Surf", "Hiking", "Waterfall Trek", "Breathwork", "Spa", "Cacao Ceremony"];

export const userSegments = ["Beginners", "Women-only", "Solo Travelers", "Couples", "Remote Workers", "Advanced Yogis"];

export const trustLogos = ["CNN", "Forbes", "Tripadvisor", "Lonely Planet", "Vogue"];

export const testimonials = [
  {
    quote:
      "We sent one WhatsApp message and got three curated options in less than an hour. Booking was effortless.",
    name: "Sarah T.",
    detail: "First-time retreat guest",
  },
  {
    quote:
      "The retreat cards made price and inclusions crystal clear. We booked a 7-day Bali yoga retreat confidently.",
    name: "Daniel K.",
    detail: "Couple from Singapore",
  },
  {
    quote:
      "I found a women-only beginner retreat that matched my budget and dates. Exactly what I needed.",
    name: "Ana M.",
    detail: "Solo traveler",
  },
];
