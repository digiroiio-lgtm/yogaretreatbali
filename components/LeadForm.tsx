export function LeadForm() {
  return (
    <section className="rounded-2xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Get Best Retreat Match</h2>
      <p className="mt-2 text-sm text-slate-200">Tell us your dates and budget, and we will shortlist high-fit retreats.</p>
      <form action="/api/leads" method="post" className="mt-4 grid gap-3 md:grid-cols-2">
        <input name="name" aria-label="Name" placeholder="Name" className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:border-emerald-400" />
        <input name="email" aria-label="Email" placeholder="Email" type="email" className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:border-emerald-400" />
        <input name="budget" aria-label="Budget" placeholder="Budget" className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:border-emerald-400" />
        <input name="dates" aria-label="Dates" placeholder="Preferred dates" className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm outline-none focus:border-emerald-400" />
        <button type="submit" className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold hover:bg-emerald-700 md:col-span-2">
          Get Best Retreat Match
        </button>
      </form>
    </section>
  );
}
