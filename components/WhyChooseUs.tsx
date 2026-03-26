import { UserCheck, Heart, Droplets, ClipboardList, Monitor, Users } from "lucide-react";

const reasons = [
  {
    icon: <UserCheck className="w-6 h-6 text-teal" strokeWidth={1.5} />,
    title: "Experienced Professionals",
    description: "Our dentists bring years of clinical expertise and continued education in modern techniques.",
  },
  {
    icon: <Heart className="w-6 h-6 text-teal" strokeWidth={1.5} />,
    title: "Comfort-Focused Care",
    description: "We prioritize your comfort at every step — from the waiting room to the chair.",
  },
  {
    icon: <Droplets className="w-6 h-6 text-teal" strokeWidth={1.5} />,
    title: "Hygiene-First Environment",
    description: "International-grade sterilization protocols and a spotlessly clean clinic, every time.",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-teal" strokeWidth={1.5} />,
    title: "Clear Treatment Guidance",
    description: "No jargon, no pressure. We explain every option so you can decide with confidence.",
  },
  {
    icon: <Monitor className="w-6 h-6 text-teal" strokeWidth={1.5} />,
    title: "Modern Technology",
    description: "Digital X-rays, advanced tools, and the latest techniques for faster, better results.",
  },
  {
    icon: <Users className="w-6 h-6 text-teal" strokeWidth={1.5} />,
    title: "Family-Friendly",
    description: "From toddlers to grandparents, our clinic is designed to welcome every age group.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src="/images/consultation.jpg"
              alt="Dentist explaining treatment plan to a comfortable patient in a modern clinic"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-2">
              Why Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Why Families Choose Us
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {reason.icon}
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
