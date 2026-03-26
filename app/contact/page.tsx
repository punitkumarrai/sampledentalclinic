import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Sample Dental Clinic",
  description: "Get in touch with Sample Dental Clinic in Alpha 2 Main Market, Greater Noida. Call +91 88511 69748 or message us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about a treatment, need help finding the clinic, or want to say hello, our team is always ready to assist.
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
                    Alpha 2 Main Market,<br />
                    Greater Noida, UP 201310
                  </p>
                  <a
                    href="https://maps.google.com/?q=Alpha+2+Main+Market+Greater+Noida"
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
                    <span className="font-medium text-charcoal">Mon - Sat:</span>
                    <span>9:00 AM – 8:00 PM</span>
                  </p>
                  <p className="text-muted leading-relaxed text-lg flex justify-between max-w-xs mt-2">
                    <span className="font-medium text-charcoal">Sunday:</span>
                    <span>10:00 AM – 2:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="border-t border-border/50 pt-8" />

              <div className="flex gap-4">
                <Phone className="w-6 h-6 mt-1 text-teal shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-navy mb-2 text-xl">Contact Information</h3>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+918851169748" className="text-lg text-muted hover:text-teal transition-colors font-medium">
                      +91 88511 69748
                    </a>
                    <a href="https://wa.me/918851169748" target="_blank" rel="noopener noreferrer" className="text-lg text-green-600 hover:text-green-700 transition-colors font-medium">
                      Message on WhatsApp
                    </a>
                    <a href="mailto:hello@sampledentalclinic.com" className="text-lg text-muted hover:text-teal transition-colors font-medium">
                      hello@sampledentalclinic.com
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
              {/* Replace src with actual Google Maps Embed link for production */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.034789851614!2d77.514330!3d28.473523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea65b4c19f55%3A0xc07ce6ad0b1f201d!2sAlpha%20II%20Commercial%20Belt%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 transition-all hover:grayscale-0 hover:opacity-100 duration-500"
                title="Sample Dental Clinic Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
