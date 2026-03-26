import { MapPin, Clock, Phone } from "lucide-react";

export default function VisitSection() {
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
              We're Close By
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-navy mb-1 text-lg">Location</h3>
                  <p className="text-muted leading-relaxed">
                    Alpha 2 Main Market,<br />
                    Greater Noida, UP 201310
                  </p>
                  <a
                    href="https://maps.google.com/?q=Alpha+2+Main+Market+Greater+Noida"
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
                    <span className="block font-medium text-charcoal-light">Monday – Saturday</span>
                    9:00 AM – 8:00 PM
                  </p>
                  <p className="text-muted leading-relaxed mt-2">
                    <span className="block font-medium text-charcoal-light">Sunday</span>
                    10:00 AM – 2:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-navy mb-1 text-lg">Contact</h3>
                  <p className="text-muted leading-relaxed">
                    <a href="tel:+918851169748" className="hover:text-teal transition-colors block">
                      +91 88511 69748
                    </a>
                    <a href="mailto:hello@sampledentalclinic.com" className="hover:text-teal transition-colors block mt-1">
                      hello@sampledentalclinic.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map (Placeholder embedded style) */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square sm:aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-border/50 bg-offwhite">
              {/* Replace src with actual Google Maps Embed link for production */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.034789851614!2d77.514330!3d28.473523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea65b4c19f55%3A0xc07ce6ad0b1f201d!2sAlpha%20II%20Commercial%20Belt%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90 transition-all hover:grayscale-0 hover:opacity-100 duration-500"
                title="Sample Dental Clinic Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
