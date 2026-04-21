export function FilterBar() {
  return (
    <form action="/yoga-retreat-bali" method="get" className="grid gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur md:grid-cols-4">
      <input name="location" aria-label="Location" placeholder="Location (e.g. Ubud)" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-500" />
      <input name="dates" aria-label="Dates" placeholder="Dates" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-500" />
      <input name="budget" aria-label="Budget" placeholder="Budget (USD)" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-500" />
      <button type="submit" className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
        Get Best Retreat Match
      </button>
    </form>
  );
}
