import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RetreatCard } from "@/components/RetreatCard";
import { retreats } from "@/lib/data";
import { toTitleCase } from "@/lib/utils";

const filters = ["luxury", "affordable", "detox", "meditation", "beginner"] as const;

type Filter = (typeof filters)[number];

type Props = { params: Promise<{ filter: Filter }> };

export function generateStaticParams() {
  return filters.map((filter) => ({ filter }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { filter } = await params;
  const filterTitle = toTitleCase(filter);
  return {
    title: `${filterTitle} Yoga Retreats in Bali`,
    description: `Browse ${filter} yoga retreats in Bali with trusted ratings and package details.`,
  };
}

export default async function FilterPage({ params }: Props) {
  const { filter } = await params;
  if (!filters.includes(filter)) notFound();
  const filterTitle = toTitleCase(filter);

  const filtered = retreats.filter((retreat) => retreat.style === filter);

  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-slate-900">{filterTitle} Yoga Retreats in Bali</h1>
      <p className="text-slate-700">Compare {filter} programs and book via WhatsApp concierge support.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((retreat) => (
          <RetreatCard key={retreat.slug} retreat={retreat} />
        ))}
      </div>
    </main>
  );
}
