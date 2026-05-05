"use client";

import Link from "next/link";
import { CheckCircle2, HeartPulse, User, ChevronDown, ChevronUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import {
  Sparkles,
  Activity,
  Smile,
  Settings,
  Gem,
  Baby,
  ClipboardList,
  Star,
} from "lucide-react";
import type { ReactElement } from "react";
import { useState } from "react";

const iconMap: Record<string, ReactElement> = {
  Sparkles: <Sparkles className="w-10 h-10" strokeWidth={1.5} />,
  Activity: <Activity className="w-10 h-10" strokeWidth={1.5} />,
  Smile: <Smile className="w-10 h-10" strokeWidth={1.5} />,
  Settings: <Settings className="w-10 h-10" strokeWidth={1.5} />,
  Gem: <Gem className="w-10 h-10" strokeWidth={1.5} />,
  HeartPulse: <HeartPulse className="w-10 h-10" strokeWidth={1.5} />,
  Baby: <Baby className="w-10 h-10" strokeWidth={1.5} />,
  ClipboardList: <ClipboardList className="w-10 h-10" strokeWidth={1.5} />,
  Star: <Star className="w-10 h-10" strokeWidth={1.5} />,
};

const bgImages = [
  "/images/service_implants.png",
  "/images/service_root_canal.png",
  "/images/service_cleaning.png",
  "/images/service_cosmetic.png",
  "/images/tools.jpg",
  "/images/treatment.jpg",
  "/images/consultation.jpg",
];

export default function ServicesGrid() {
  const { fullServices, servicesPreview } = siteConfig;
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setExpandedIdx((prev) => (prev === idx ? null : idx));

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {fullServices.map((service, idx) => {
            const preview = servicesPreview[idx];
            const icon = preview
              ? (iconMap[preview.iconName] ?? <Sparkles className="w-10 h-10" strokeWidth={1.5} />)
              : <Sparkles className="w-10 h-10" strokeWidth={1.5} />;
            const bgImage = bgImages[idx % bgImages.length];
            const isOpen = expandedIdx === idx;

            return (
              <div key={service.title} className="flex flex-col">
                {/* ── Card ── */}
                <div
                  className="service-card group relative overflow-hidden rounded-2xl border border-border/50 bg-white flex flex-col"
                  style={{ minHeight: "340px" }}
                >
                  {/* Background image revealed on hover */}
                  <div
                    className="service-card-bg absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{ backgroundImage: `url('${bgImage}')` }}
                    aria-hidden="true"
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0 bg-navy/80 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full p-6 sm:p-7">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-offwhite text-teal transition-all duration-400 group-hover:bg-teal group-hover:text-white">
                        {icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-navy mb-3 transition-colors duration-400 group-hover:text-white">
                      {service.title}
                    </h2>

                    {/* Summary */}
                    <p className="text-sm text-muted leading-relaxed mb-6 flex-1 transition-colors duration-400 group-hover:text-white/80">
                      {service.summary}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <button
                        onClick={() => toggle(idx)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 border-2 border-border text-navy font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-300 group-hover:border-white group-hover:text-white hover:bg-white/10"
                        aria-expanded={isOpen}
                      >
                        {isOpen ? (
                          <>Less Info <ChevronUp className="w-4 h-4" /></>
                        ) : (
                          <>Read More <ChevronDown className="w-4 h-4" /></>
                        )}
                      </button>
                      <Link
                        href="/book"
                        className="flex-1 inline-flex items-center justify-center bg-teal text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-300 hover:bg-teal-light shadow-sm hover:shadow-md"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── Expandable Detail Panel ── */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-offwhite/70 border border-border/50 rounded-2xl p-6 space-y-5">
                    <div>
                      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy mb-2">
                        <CheckCircle2 className="w-4 h-4 text-teal" strokeWidth={2.5} />
                        Why It Matters
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">{service.whyItMatters}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy mb-2">
                          <HeartPulse className="w-4 h-4 text-teal" strokeWidth={2.5} />
                          Helps With
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">{service.helpsWith}</p>
                      </div>
                      <div>
                        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy mb-2">
                          <User className="w-4 h-4 text-teal" strokeWidth={2.5} />
                          Who Is It For?
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">{service.whoItIsFor}</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Link
                        href="/book"
                        className="inline-flex items-center bg-teal text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-teal-light transition-all shadow-sm hover:shadow-md"
                      >
                        Book This Treatment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
