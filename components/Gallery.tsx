import { siteConfig } from "@/lib/site-config";

export default function Gallery() {
  return (
    <section className="py-16 md:py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-2">
            Take a Tour
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Step Inside Our Clinic
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            A premium, spotlessly clean environment designed entirely around your comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteConfig.gallery.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-square ${
                idx === 0 ? "md:col-span-2 md:row-span-2 aspect-auto md:aspect-square" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 hover:bg-navy/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
