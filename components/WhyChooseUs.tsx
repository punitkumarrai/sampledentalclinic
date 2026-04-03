import { UserCheck, Heart, Droplets, ClipboardList, Monitor, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { ReactElement } from "react";

const iconMap: Record<string, ReactElement> = {
  UserCheck: <UserCheck className="w-6 h-6 text-teal" strokeWidth={1.5} />,
  Heart: <Heart className="w-6 h-6 text-teal" strokeWidth={1.5} />,
  Droplets: <Droplets className="w-6 h-6 text-teal" strokeWidth={1.5} />,
  ClipboardList: <ClipboardList className="w-6 h-6 text-teal" strokeWidth={1.5} />,
  Monitor: <Monitor className="w-6 h-6 text-teal" strokeWidth={1.5} />,
  Users: <Users className="w-6 h-6 text-teal" strokeWidth={1.5} />,
};

export default function WhyChooseUs() {
  const { whyChooseUs } = siteConfig;

  return (
    <section className="py-16 md:py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src={whyChooseUs.image}
              alt={whyChooseUs.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-2">
              {whyChooseUs.sectionTagline}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              {whyChooseUs.sectionHeading}
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {whyChooseUs.reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {iconMap[reason.iconName] ?? <Heart className="w-6 h-6 text-teal" strokeWidth={1.5} />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
