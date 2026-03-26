import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="bg-navy py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Take the First Step Toward a Healthier Smile
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you need a routine cleaning or specialized emergency care, our dedicated team is here to ensure your visit is surprisingly comfortable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="w-full sm:w-auto bg-teal text-white font-semibold px-8 py-4 rounded-lg hover:bg-teal-light transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            Book Your Visit
          </Link>
          <a
            href="tel:+918851169748"
            className="w-full sm:w-auto bg-white/10 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-lg backdrop-blur-sm"
          >
            Call 88511 69748
          </a>
        </div>
        <p className="text-white/60 text-sm mt-6 flex items-center justify-center gap-2">
           <CheckCircle className="w-4 h-4 text-teal-light shrink-0" strokeWidth={2} /> Gladly Accepting New Families 
           <span className="opacity-40">|</span> 
           <CheckCircle className="w-4 h-4 text-teal-light shrink-0" strokeWidth={2} /> Walk-ins & Emergencies Welcome
        </p>
      </div>
    </section>
  );
}
