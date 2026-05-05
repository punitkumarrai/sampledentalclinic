import AppointmentCTA from "@/components/AppointmentCTA";
import ServicesGrid from "@/components/ServicesGrid";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.metadata.services.title,
  description: siteConfig.metadata.services.description,
};

export default function ServicesPage() {
  const { servicesPage } = siteConfig;

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            {servicesPage.heroHeading}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            {servicesPage.heroDescription}
          </p>
        </div>
      </section>

      {/* ── Interactive Card Grid (Client Component) ── */}
      <ServicesGrid />

      <AppointmentCTA />
    </>
  );
}
