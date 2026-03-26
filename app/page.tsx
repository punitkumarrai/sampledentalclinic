import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorSection from "@/components/DoctorSection";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import AppointmentCTA from "@/components/AppointmentCTA";
import VisitSection from "@/components/VisitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorSection />
      <BeforeAfter />
      <Testimonials />
      <Gallery />
      <FAQ />
      <AppointmentCTA />
      <VisitSection />
    </>
  );
}
