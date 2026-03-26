import { HeartHandshake, Microscope, CalendarDays, Users } from "lucide-react";

const trustItems = [
  { icon: <HeartHandshake className="w-5 h-5 text-teal-light" strokeWidth={1.5} />, label: "Gentle Care" },
  { icon: <Microscope className="w-5 h-5 text-teal-light" strokeWidth={1.5} />, label: "Modern Equipment" },
  { icon: <CalendarDays className="w-5 h-5 text-teal-light" strokeWidth={1.5} />, label: "Easy Appointments" },
  { icon: <Users className="w-5 h-5 text-teal-light" strokeWidth={1.5} />, label: "Trusted by Local Families" },
];

export default function TrustStrip() {
  return (
    <section className="bg-navy py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 text-white/90"
            >
              <span className="flex items-center justify-center shrink-0">{item.icon}</span>
              <span className="text-sm font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
