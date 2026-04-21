import Image from "next/image";
import { FilterBar } from "@/components/FilterBar";
import { RetreatCard } from "@/components/RetreatCard";
import { CategoryGrid } from "@/components/CategoryGrid";
import { LocationGrid } from "@/components/LocationGrid";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import {
  activityCategories,
  popularSearches,
  retreats,
  trustLogos,
  userSegments,
  wellnessCategories,
} from "@/lib/data";

function RetreatSection({ title, badge }: { title: string; badge: "mostBooked" | "topRated" | "bestValue" }) {
  const items = retreats.filter((retreat) => retreat.badges.includes(badge));

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((retreat) => (
          <RetreatCard key={retreat.slug} retreat={retreat} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <Image
            src="/hero-bali.svg"
            alt="Bali yoga retreat hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/50" />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">yogaretreatbali.com</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
              Yoga Retreats in Bali – Compare & Book the Best Options
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200">
              Discover curated retreats from affordable wellness escapes to premium luxury experiences, with instant WhatsApp concierge support.
            </p>
            <div className="mt-8 max-w-4xl">
              <FilterBar />
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Top Retreats</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {retreats.map((retreat) => (
                <RetreatCard key={retreat.slug} retreat={retreat} />
              ))}
            </div>
          </section>

          <CategoryGrid title="Popular Searches" items={popularSearches} />
          <CategoryGrid title="Wellness Categories" items={wellnessCategories} />
          <CategoryGrid title="Activity-Based Retreats" items={activityCategories} />
          <CategoryGrid title="Retreats by Traveler Type" items={userSegments} />
          <LocationGrid locations={["Ubud", "Canggu", "Uluwatu", "Sidemen", "Seminyak", "Sanur"]} />

          <RetreatSection title="Most Booked Retreats This Month" badge="mostBooked" />
          <RetreatSection title="Top Rated Retreats" badge="topRated" />
          <RetreatSection title="Best Value Retreats" badge="bestValue" />

          <TestimonialSlider />
          <LeadForm />

          <section className="rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">Trusted by Global Wellness Travelers</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
              {trustLogos.map((logo) => (
                <span key={logo} className="rounded-full border border-slate-200 px-4 py-2">
                  {logo}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
      <WhatsAppFloatingButton />
    </>
  );
}
