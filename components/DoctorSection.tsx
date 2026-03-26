export default function DoctorSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-2">
            Meet Your Dentist
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            In Safe, Caring Hands
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-10">
          <div className="bg-offwhite rounded-2xl overflow-hidden shadow-sm border border-border/50">
            <div className="grid sm:grid-cols-5 gap-0">
              {/* Doctor Image */}
              <div className="sm:col-span-2 aspect-[3/4] sm:aspect-auto">
                <img
                  src="/images/doctor.jpg"
                  alt="Dr. Arjun Mehta — Lead Dentist at Sample Dental Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Doctor Info */}
              <div className="sm:col-span-3 p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-navy mb-1">
                  Dr. Arjun Mehta
                </h3>
                <p className="text-sm text-teal font-semibold mb-1">
                  BDS, MDS — Prosthodontics
                </p>
                <p className="text-xs text-muted mb-4">12+ Years of Experience</p>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Dr. Mehta believes that every patient deserves a dental
                  experience that&apos;s comfortable, clear, and respectful. His
                  approach combines technical expertise with a warm,
                  patient-first philosophy — making even the most anxious
                  visitors feel at ease.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  &ldquo;Good dental care starts with honest conversation. I want
                  every patient to understand their options and feel confident
                  about their treatment.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
