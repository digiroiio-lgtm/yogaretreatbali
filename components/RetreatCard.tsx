import Image from "next/image";
import type { Retreat } from "@/lib/data";
import { whatsappPhone } from "@/lib/config";

export function RetreatCard({ retreat }: { retreat: Retreat }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-52 w-full">
        <Image src={retreat.images[0]} alt={retreat.title} fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{retreat.title}</h3>
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">{retreat.rating.toFixed(1)} ★</span>
        </div>
        <p className="text-sm text-slate-600">{retreat.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-700">
          <span className="rounded-full bg-slate-100 px-2 py-1">{retreat.location}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1">{retreat.duration} days</span>
          <span className="rounded-full bg-slate-100 px-2 py-1">${retreat.price}</span>
        </div>
        <a href={`https://wa.me/${whatsappPhone}?text=I'm%20interested%20in%20${encodeURIComponent(retreat.title)}`} className="inline-flex w-full justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
          Book via WhatsApp
        </a>
      </div>
    </article>
  );
}
