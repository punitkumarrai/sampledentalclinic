import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: siteConfig.metadata.contact.title,
  description: siteConfig.metadata.contact.description,
};

export default function ContactPage() {
  const { business, contactPage } = siteConfig;
  const whatsappUrl = `https://wa.me/${business.whatsappNumber}`;

  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            {contactPage.heroHeading}
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            {contactPage.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info blocks */}
            <div className="space-y-10">
              <h2 className="text-3xl font-bold text-navy mb-8">Get in Touch</h2>
              
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-navy mb-2 text-xl">Our Address</h3>
                  <p className="text-muted leading-relaxed text-lg">
                    {business.address.line1}<br />
                    {business.address.line2}
                  </p>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-semibold text-white bg-teal px-6 py-2.5 rounded-lg hover:bg-teal-dark transition-colors shadow-sm"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="border-t border-border/50 pt-8" />

              <div className="flex gap-4">
                <Clock className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-navy mb-2 text-xl">Opening Hours</h3>
                  <p className="text-muted leading-relaxed text-lg flex justify-between max-w-xs">
                    <span className="font-medium text-charcoal">{business.hours.weekdays}:</span>
                    <span>{business.hours.weekdayTime}</span>
                  </p>
                  <p className="text-muted leading-relaxed text-lg flex justify-between max-w-xs mt-2">
                    <span className="font-medium text-charcoal">{business.hours.weekend}:</span>
                    <span>{business.hours.weekendTime}</span>
                  </p>
                </div>
              </div>

              <div className="border-t border-border/50 pt-8" />

              <div className="flex gap-4">
                <Phone className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-navy mb-2 text-xl">Contact Information</h3>
                  <div className="flex flex-col gap-3">
                    <a href={`tel:${business.phone}`} className="text-lg text-muted hover:text-teal transition-colors font-medium">
                      {business.phoneDisplay}
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-green-600 hover:text-green-700 transition-colors font-medium">
                      Message on WhatsApp
                    </a>
                    <a href={`mailto:${business.email}`} className="text-lg text-muted hover:text-teal transition-colors font-medium">
                      {business.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/book"
                  className="w-full block bg-navy text-white text-center font-semibold px-8 py-4 rounded-xl hover:bg-navy-light transition-colors shadow-lg hover:shadow-xl text-lg"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>

            {/* Huge Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-offwhite min-h-[500px]">
              <iframe
                src={business.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 transition-all hover:grayscale-0 hover:opacity-100 duration-500"
                title={`${business.name} Location Map`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
