import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Clinic" },
  { href: "/services", label: "All Treatments" },
  { href: "/contact", label: "Location & Hours" },
];

export default function Footer() {
  const { business, footer } = siteConfig;
  const whatsappUrl = `https://wa.me/${business.whatsappNumber}`;

  return (
    <footer className="bg-navy text-white pt-16 md:pt-24 pb-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-dark rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand - Span 4 */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <span className="text-teal-light text-2xl font-bold transition-transform group-hover:scale-110">⊕</span>
              <span className="text-xl font-bold tracking-tight text-white">
                {business.name}
              </span>
            </Link>
            <p className="text-[15px] text-white/70 leading-relaxed mb-8">
              {footer.tagline}
            </p>
            <Link href="/book" className="inline-block bg-teal/10 text-teal-light border border-teal/20 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal hover:text-white hover:border-teal transition-all">
              Book a Visit
            </Link>
          </div>

          {/* Quick Links - Span 2 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-teal-light mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Span 3 */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-teal-light mb-6">
              Our Expertise
            </h3>
            <ul className="space-y-4">
              {footer.servicesList.map((s) => (
                <li key={s} className="text-[15px] text-white/60 hover:text-white transition-colors cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Span 3 */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-teal-light mb-6">
              Reach Out
            </h3>
            <address className="not-italic text-[15px] text-white/60 space-y-4 leading-relaxed">
              <p className="text-white">{business.address.line1}<br />{business.address.line2}</p>
              <div className="space-y-1 pt-2">
                <a href={`tel:${business.phone}`} className="block hover:text-teal-light transition-colors text-white font-medium">
                  {business.phoneDisplay}
                </a>
                <a href={`mailto:${business.email}`} className="block hover:text-white transition-colors">
                  {business.email}
                </a>
              </div>
              <div className="pt-2">
                <p>{business.hours.weekdays}: <span className="text-white">{business.hours.weekdayTime}</span></p>
                <p>{business.hours.weekend}: <span className="text-white">{business.hours.weekendTime}</span></p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/40 hover:text-teal-light transition-colors font-medium">
              WhatsApp Us
            </a>
            <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/40 hover:text-teal-light transition-colors font-medium">
              Get Directions
            </a>
            <Link href="/contact" className="text-[13px] text-white/40 hover:text-teal-light transition-colors font-medium">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
