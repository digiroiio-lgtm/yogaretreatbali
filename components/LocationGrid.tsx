import Link from "next/link";

export function LocationGrid({ locations }: { locations: string[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">Popular Bali Locations</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {locations.map((location) => (
          <Link
            key={location}
            href={`/retreats/location/${location.toLowerCase()}`}
            className="rounded-xl bg-emerald-50 px-4 py-4 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            {location}
          </Link>
        ))}
      </div>
    </section>
  );
}
