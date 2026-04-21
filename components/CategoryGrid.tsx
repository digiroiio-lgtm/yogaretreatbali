import Link from "next/link";

export function CategoryGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item}
            href="/yoga-retreat-bali"
            className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
          >
            {item}
          </Link>
        ))}
      </div>
    </section>
  );
}
