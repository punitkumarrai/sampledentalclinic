import AppointmentCTA from "@/components/AppointmentCTA";
import DoctorSection from "@/components/DoctorSection";
import { Users, ShieldCheck, Lightbulb, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { ReactElement } from "react";

const pillarIconMap: Record<string, ReactElement> = {
  Users: <Users className="w-10 h-10 mb-5 text-teal" strokeWidth={1.5} />,
  ShieldCheck: <ShieldCheck className="w-10 h-10 mb-5 text-teal" strokeWidth={1.5} />,
  Heart: <Heart className="w-10 h-10 mb-5 text-teal" strokeWidth={1.5} />,
  Lightbulb: <Lightbulb className="w-10 h-10 mb-5 text-teal" strokeWidth={1.5} />,
};

export const metadata = {
  title: siteConfig.metadata.about.title,
  description: siteConfig.metadata.about.description,
};

export default function AboutPage() {
  const about = siteConfig.aboutPage;
  const storyHeadingParts = about.storyHeading.split("\n");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-3">
            {about.heroTagline}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            {about.heroHeading}
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            {about.heroDescription}
          </p>
        </div>
      </section>

      {/* The Clinic Story Section */}
      <section className="py-16 md:py-20 bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Story Text */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                {storyHeadingParts.map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < storyHeadingParts.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <div className="space-y-4 text-muted leading-relaxed text-lg">
                {about.storyParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            
            {/* Story Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-offwhite">
                <img
                  src={about.storyImage}
                  alt={about.storyImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Doctor Section */}
      <DoctorSection />

      {/* Philosophy / Features Grid */}
      <section className="py-16 md:py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
             <h2 className="text-3xl font-bold text-navy mb-4">{about.philosophyHeading}</h2>
             <p className="text-muted leading-relaxed">{about.philosophyDescription}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 card-hover">
                {pillarIconMap[pillar.iconName] ?? <Heart className="w-10 h-10 mb-5 text-teal" strokeWidth={1.5} />}
                <h3 className="text-lg font-bold text-navy mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect On Your First Visit */}
      <section className="py-16 md:py-20 bg-navy text-white relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-dark rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-teal-light font-semibold text-sm tracking-wider uppercase mb-3">
                {about.firstVisitTagline}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {about.firstVisitHeading}
              </h2>
              <p className="text-white/80 leading-relaxed text-lg mb-8">
                {about.firstVisitIntro}
              </p>
            </div>
            
            <div className="space-y-8 mt-2 lg:mt-0">
              {about.firstVisitSteps.map((step, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-teal flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg mt-1 text-white border border-teal-light/20">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
