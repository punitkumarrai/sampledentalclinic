import { HeartHandshake, Microscope, CalendarDays, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { ReactElement } from "react";

const iconMap: Record<string, ReactElement> = {
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-teal-light" strokeWidth={1.5} />,
  Microscope: <Microscope className="w-5 h-5 text-teal-light" strokeWidth={1.5} />,
  CalendarDays: <CalendarDays className="w-5 h-5 text-teal-light" strokeWidth={1.5} />,
  Users: <Users className="w-5 h-5 text-teal-light" strokeWidth={1.5} />,
};

export default function TrustStrip() {
  return (
    <section className="bg-navy py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {siteConfig.trustStrip.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 text-white/90"
            >
              <span className="flex items-center justify-center shrink-0">
                {iconMap[item.iconName] ?? <HeartHandshake className="w-5 h-5 text-teal-light" strokeWidth={1.5} />}
              </span>
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
