export function FilterBar() {
  return (
    <form className="grid gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur md:grid-cols-4">
      <input aria-label="Location" placeholder="Location (e.g. Ubud)" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-500" />
      <input aria-label="Dates" placeholder="Dates" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-500" />
      <input aria-label="Budget" placeholder="Budget (USD)" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-500" />
      <button type="button" className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
        Get Best Retreat Match
      </button>
    </form>
  );
}
