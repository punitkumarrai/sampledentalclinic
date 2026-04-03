import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const { hero, business } = siteConfig;

  return (
    <section className="relative bg-gradient-to-br from-offwhite via-white to-offwhite pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Wire motif background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-50 300 Q100 200 200 350 T400 280 T600 350 T850 250" stroke="#0f2a4a" strokeWidth="2" fill="none" />
        <path d="M-50 400 Q150 300 250 420 T450 350 T650 420 T850 320" stroke="#0d9488" strokeWidth="1.5" fill="none" />
        <path d="M-50 200 Q80 120 180 250 T380 180 T580 250 T850 150" stroke="#0f2a4a" strokeWidth="1" fill="none" />
        <circle cx="200" cy="350" r="4" fill="#0d9488" opacity="0.3" />
        <circle cx="400" cy="280" r="3" fill="#0f2a4a" opacity="0.2" />
        <circle cx="600" cy="350" r="5" fill="#0d9488" opacity="0.2" />
        <path d="M100 100 Q200 50 300 150 T500 100" stroke="#0d9488" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M300 500 Q400 450 500 530 T700 480" stroke="#0f2a4a" strokeWidth="0.8" fill="none" opacity="0.5" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-3">
              {hero.tagline}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy leading-[1.12] mb-4">
              {hero.heading}
              <span className="text-teal">{hero.headingAccent}</span>{hero.headingSuffix}
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book"
                className="bg-teal text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-teal-dark transition-colors shadow-md hover:shadow-lg"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="border-2 border-navy text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-navy hover:text-white transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-fade-up delay-200 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={hero.heroImage}
                alt={hero.heroImageAlt}
                className="w-full h-full object-cover"
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
            </div>
            {/* Floating trust badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
              <span className="text-teal text-2xl">★</span>
              <div>
                <p className="text-sm font-bold text-navy">{hero.trustBadge.rating}</p>
                <p className="text-xs text-muted">{hero.trustBadge.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
