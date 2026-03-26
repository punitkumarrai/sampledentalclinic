import AppointmentCTA from "@/components/AppointmentCTA";
import Link from "next/link";
import { CheckCircle2, HeartPulse, User } from "lucide-react";

export const metadata = {
  title: "Services | Sample Dental Clinic",
  description: "Comprehensive dental care in Greater Noida: Teeth Cleaning, Root Canals, Aligners, Implants, and Kids Dentistry.",
};

const fullServices = [
  {
    title: "Teeth Cleaning & Scaling",
    summary: "A foundational step for long-term oral health.",
    helpsWith: "Plaque buildup, bad breath, mild gum disease.",
    whoItIsFor: "Everyone. We recommend a checkup every 6 months.",
    whyItMatters: "Professional cleaning removes tartar that regular brushing cannot handle, preventing cavities and gingivitis before they start.",
  },
  {
    title: "Root Canal Treatment",
    summary: "Comfortable, precise treatment to save infected teeth.",
    helpsWith: "Severe tooth pain, deep decay, infected pulp.",
    whoItIsFor: "Patients experiencing intense toothache or prolonged sensitivity to hot and cold.",
    whyItMatters: "A root canal relieves pain immediately and saves the natural structure of your tooth, avoiding the need for an extraction and implant.",
  },
  {
    title: "Braces & Orthodontics",
    summary: "Traditional and ceramic options for a perfectly aligned smile.",
    helpsWith: "Crooked teeth, bite issues, gaps.",
    whoItIsFor: "Children, teens, and adults looking to improve their bite and smile aesthetics.",
    whyItMatters: "Straight teeth aren't just about looks — they are easier to clean and reduce the risk of jaw strain and abnormal tooth wear.",
  },
  {
    title: "Dental Implants",
    summary: "The closest thing to a natural tooth replacement.",
    helpsWith: "Missing teeth, difficulty chewing, bone loss prevention.",
    whoItIsFor: "Adults who have lost one or more teeth and want a permanent, stable solution.",
    whyItMatters: "Implants stimulate the jawbone just like natural roots, preventing bone loss and facial sagging while restoring full chewing function.",
  },
  {
    title: "Invisible Aligners",
    summary: "Discreet, removable trays to straighten teeth without wires.",
    helpsWith: "Mild to moderate crowding or spacing issues.",
    whoItIsFor: "Adults and responsible teens who want orthodontic treatment without the look of traditional metal braces.",
    whyItMatters: "Aligners are virtually invisible, easy to clean, and allow you to eat whatever you want without restrictions.",
  },
  {
    title: "Gum Care & Periodontics",
    summary: "Targeted treatments for the foundation of your smile.",
    helpsWith: "Bleeding gums, receding gum lines, advanced periodontitis.",
    whoItIsFor: "Patients noticing blood while brushing, loose teeth, or chronic bad breath.",
    whyItMatters: "Healthy gums are essentially the soil for your teeth. Untreated gum disease is the leading cause of tooth loss in adults.",
  },
  {
    title: "Kids Dentistry",
    summary: "Gentle, fear-free dental care tailored specifically for children.",
    helpsWith: "Early cavity prevention, habit breaking, fluoride treatments.",
    whoItIsFor: "Infants (after first tooth), toddlers, and young teens.",
    whyItMatters: "Positive early experiences at the dentist set the stage for a lifetime of healthy dental habits without anxiety or fear.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Comprehensive Dental Care
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            From routine checkups to complete smile restorations, we offer everything your family needs under one thoroughly sterilized roof.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {fullServices.map((service, idx) => (
              <div
                key={service.title}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start border-b border-border/40 pb-16 md:pb-24 last:border-0 last:pb-0 group"
              >
                {/* Left side: Hero of the service */}
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-bold text-navy mb-4 group-hover:text-teal transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-lg text-teal font-semibold mb-8 leading-relaxed">
                    {service.summary}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/book"
                      className="bg-teal text-white text-center font-semibold px-6 py-3.5 rounded-lg hover:bg-teal-light transition-all shadow-md hover:shadow-lg text-sm"
                    >
                      Book Appointment
                    </Link>
                    <a
                      href="tel:+918851169748"
                      className="bg-white text-navy text-center border-2 border-border font-semibold px-6 py-3.5 rounded-lg hover:border-navy hover:text-navy-light transition-colors text-sm"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Right side: Detailed breakdown container */}
                <div className="lg:col-span-7 bg-offwhite/50 rounded-2xl p-6 sm:p-8 border border-border/40 shadow-sm transition-all group-hover:shadow-md group-hover:border-border/80">
                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Why It Matters (Spans both columns) */}
                    <div className="sm:col-span-2">
                      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy mb-3">
                        <CheckCircle2 className="w-4 h-4 text-teal" strokeWidth={2.5} />
                        Why It Matters
                      </h3>
                      <p className="text-muted leading-relaxed text-sm md:text-base">
                        {service.whyItMatters}
                      </p>
                    </div>
                    {/* Helps With */}
                    <div>
                      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy mb-3">
                        <HeartPulse className="w-4 h-4 text-teal" strokeWidth={2.5} />
                        Helps With
                      </h3>
                      <p className="text-muted leading-relaxed text-sm md:text-base">
                        {service.helpsWith}
                      </p>
                    </div>
                    {/* Who is it for */}
                    <div>
                      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy mb-3">
                        <User className="w-4 h-4 text-teal" strokeWidth={2.5} />
                        Who Is It For?
                      </h3>
                      <p className="text-muted leading-relaxed text-sm md:text-base">
                        {service.whoItIsFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
