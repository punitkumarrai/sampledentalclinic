import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function VisitSection() {
  const { business } = siteConfig;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Clinic Info */}
          <div className="order-2 lg:order-1">
            <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-2">
              Visit Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              We&apos;re Close By
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-navy mb-1 text-lg">Location</h3>
                  <p className="text-muted leading-relaxed">
                    {business.address.line1}<br />
                    {business.address.line2}
                  </p>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-navy mb-1 text-lg">Hours</h3>
                  <p className="text-muted leading-relaxed">
                    <span className="block font-medium text-charcoal-light">{business.hours.weekdays}</span>
                    {business.hours.weekdayTime}
                  </p>
                  <p className="text-muted leading-relaxed mt-2">
                    <span className="block font-medium text-charcoal-light">{business.hours.weekend}</span>
                    {business.hours.weekendTime}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-navy mb-1 text-lg">Contact</h3>
                  <p className="text-muted leading-relaxed">
                    <a href={`tel:${business.phone}`} className="hover:text-teal transition-colors block">
                      {business.phoneDisplay}
                    </a>
                    <a href={`mailto:${business.email}`} className="hover:text-teal transition-colors block mt-1">
                      {business.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square sm:aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-border/50 bg-offwhite">
              <iframe
                src={business.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90 transition-all hover:grayscale-0 hover:opacity-100 duration-500"
                title={`${business.name} Location Map`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
