import { testimonials } from "@/lib/data";

export function TestimonialSlider() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">What Retreat Guests Say</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-700">“{testimonial.quote}”</p>
            <footer className="mt-3 text-xs font-semibold text-slate-900">
              {testimonial.name} <span className="font-normal text-slate-500">• {testimonial.detail}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
