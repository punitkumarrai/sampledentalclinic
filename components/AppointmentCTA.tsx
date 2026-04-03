import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function AppointmentCTA() {
  const { appointmentCTA, business } = siteConfig;

  return (
    <section className="bg-navy py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {appointmentCTA.heading}
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {appointmentCTA.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="w-full sm:w-auto bg-teal text-white font-semibold px-8 py-4 rounded-lg hover:bg-teal-light transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            Book Your Visit
          </Link>
          <a
            href={`tel:${business.phone}`}
            className="w-full sm:w-auto bg-white/10 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-lg backdrop-blur-sm"
          >
            {appointmentCTA.phoneDisplayText}
          </a>
        </div>
        <p className="text-white/60 text-sm mt-6 flex items-center justify-center gap-2">
           <CheckCircle className="w-4 h-4 text-teal-light shrink-0" strokeWidth={2} /> {appointmentCTA.badges[0]} 
           <span className="opacity-40">|</span> 
           <CheckCircle className="w-4 h-4 text-teal-light shrink-0" strokeWidth={2} /> {appointmentCTA.badges[1]}
        </p>
      </div>
    </section>
  );
}
