import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-2">
            Patient Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            What Our Families Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-offwhite rounded-2xl p-8 border border-border/50 card-hover flex flex-col h-full"
            >
              <div className="flex gap-1 text-amber-400 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" strokeWidth={1.5} />
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-6 flex-grow italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-xs font-semibold text-teal uppercase tracking-wider mt-1">
                  Case: {t.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
