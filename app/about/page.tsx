import AppointmentCTA from "@/components/AppointmentCTA";
import DoctorSection from "@/components/DoctorSection";
import { Users, ShieldCheck, Lightbulb, Heart } from "lucide-react";

export const metadata = {
  title: "About Us | Sample Dental Clinic",
  description: "Learn why families in Greater Noida trust Sample Dental Clinic for modern, comfortable, and expert dental care.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-3">
            Our Story & Values
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            A Better Kind of Dental Care
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            At Sample Dental Clinic, we believe dentistry shouldn&apos;t feel
            intimidating. We&apos;ve built a practice rooted in transparency,
            advanced hygiene protocols, and a genuine commitment to your comfort.
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
                Rooted in Greater Noida.<br />Driven by Excellence.
              </h2>
              <div className="space-y-4 text-muted leading-relaxed text-lg">
                <p>
                  When we first opened our doors at Alpha 2 Main Market, we had one simple goal: to change how people genuinely feel about going to the dentist. We knew that fear of pain and lack of transparency were keeping families away from the care they deserved.
                </p>
                <p>
                  Today, we are incredibly proud to be the trusted dental home for hundreds of local families. From toddlers having their first tooth looked at, to grandparents receiving full mouth restorations, our team is equipped to handle every generation under one roof.
                </p>
                <p>
                  We invest heavily in the latest dental technology—not just because it&apos;s modern, but because it makes treatments faster, safer, and entirely painless for you.
                </p>
              </div>
            </div>
            
            {/* Story Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-offwhite">
                <img
                  src="/images/reception.jpg"
                  alt="Modern, clean, and welcoming reception area at Sample Dental Clinic"
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
             <h2 className="text-3xl font-bold text-navy mb-4">The Pillars of Our Practice</h2>
             <p className="text-muted leading-relaxed">Everything we do is built upon these four core values to ensure you receive world-class care localized for your convenience.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 card-hover">
              <Users className="w-10 h-10 mb-5 text-teal" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-navy mb-3">Family-First Care</h3>
              <p className="text-sm text-muted leading-relaxed">
                We adapt our treatments and bedside manner to suit every single generation with patience and warmth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 card-hover">
              <ShieldCheck className="w-10 h-10 mb-5 text-teal" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-navy mb-3">Absolute Hygiene</h3>
              <p className="text-sm text-muted leading-relaxed">
                Our sterilization protocols comfortably exceed international medical standards. Your safety is guaranteed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 card-hover">
              <Heart className="w-10 h-10 mb-5 text-teal" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-navy mb-3">Painless Promise</h3>
              <p className="text-sm text-muted leading-relaxed">
                By utilizing modern anesthetics and gentle techniques, we ensure your time in the chair is completely relaxed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 card-hover">
              <Lightbulb className="w-10 h-10 mb-5 text-teal" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-navy mb-3">Clear Honesty</h3>
              <p className="text-sm text-muted leading-relaxed">
                We show you digital x-rays so you see what we see. No hidden fees, no unnecessary or rushed treatments.
              </p>
            </div>
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
                Patient Journey
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                What to Expect on Your First Visit
              </h2>
              <p className="text-white/80 leading-relaxed text-lg mb-8">
                We know that visiting a new clinic can be daunting. From the moment you step through our doors, our priority is removing all guesswork so you can focus entirely on your health.
              </p>
            </div>
            
            <div className="space-y-8 mt-2 lg:mt-0">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-teal flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg mt-1 text-white border border-teal-light/20">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Warm Welcome & Intake</h3>
                  <p className="text-white/70 leading-relaxed">
                    You&apos;ll be greeted with a smile, offered a comfortable seat, and efficiently guided through your brief new-patient medical history forms.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-teal flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg mt-1 text-white border border-teal-light/20">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Detailed Consultation</h3>
                  <p className="text-white/70 leading-relaxed">
                    You&apos;ll meet your doctor for an unhurried conversation about your dental goals, followed by a thorough, gentle digital examination.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-teal flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg mt-1 text-white border border-teal-light/20">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Plan</h3>
                  <p className="text-white/70 leading-relaxed">
                    If treatment is needed, we will provide a clear, easy-to-understand plan outlining options, timelines, and exact pricing upfront. No surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
