import Link from "next/link";
import { Sparkles, Activity, Smile, Settings, Gem, HeartPulse, Baby } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-8 h-8 text-teal" strokeWidth={1.5} />,
    title: "Teeth Cleaning",
    description: "Professional cleaning to remove plaque and keep your smile bright and healthy.",
  },
  {
    icon: <Activity className="w-8 h-8 text-teal" strokeWidth={1.5} />,
    title: "Root Canal",
    description: "Gentle, pain-free root canal treatment to save your natural tooth.",
  },
  {
    icon: <Smile className="w-8 h-8 text-teal" strokeWidth={1.5} />,
    title: "Braces & Orthodontics",
    description: "Straighter teeth for a confident smile — for teens and adults alike.",
  },
  {
    icon: <Settings className="w-8 h-8 text-teal" strokeWidth={1.5} />,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth.",
  },
  {
    icon: <Gem className="w-8 h-8 text-teal" strokeWidth={1.5} />,
    title: "Aligners",
    description: "Clear, invisible aligners for a discreet path to perfectly aligned teeth.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-teal" strokeWidth={1.5} />,
    title: "Gum Care",
    description: "Healthy gums are the foundation of healthy teeth. We help you maintain both.",
  },
  {
    icon: <Baby className="w-8 h-8 text-teal" strokeWidth={1.5} />,
    title: "Kids Dentistry",
    description: "Fun, gentle dental care designed to make kids feel comfortable and safe.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Our Dental Services
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Comprehensive, modern dental care for every member of your family —
            all under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-offwhite rounded-xl p-6 card-hover border border-border/50"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-base font-bold text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors inline-flex items-center gap-1"
          >
            View All Services
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
