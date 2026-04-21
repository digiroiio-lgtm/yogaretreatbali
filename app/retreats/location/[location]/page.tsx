import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RetreatCard } from "@/components/RetreatCard";
import { retreats } from "@/lib/data";

const locations = Array.from(new Set(retreats.map((retreat) => retreat.location.toLowerCase())));

type Props = { params: Promise<{ location: string }> };

export function generateStaticParams() {
  return locations.map((location) => ({ location }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  return {
    title: `${location} Yoga Retreats in Bali`,
    description: `Compare yoga retreats in ${location}, Bali with pricing, duration, and ratings.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  if (!locations.includes(location)) notFound();

  const locationRetreats = retreats.filter((retreat) => retreat.location.toLowerCase() === location);

  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-slate-900">Yoga Retreats in {location}</h1>
      <p className="text-slate-700">Explore curated retreats in {location} with transparent prices and package details.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {locationRetreats.map((retreat) => (
          <RetreatCard key={retreat.slug} retreat={retreat} />
        ))}
      </div>
    </main>
  );
}
