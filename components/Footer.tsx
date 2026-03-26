import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Clinic" },
  { href: "/services", label: "All Treatments" },
  { href: "/contact", label: "Location & Hours" },
];

const services = [
  "Teeth Cleaning & Prevention",
  "Painless Root Canals",
  "Braces & Orthodontics",
  "Dental Implants",
  "Invisible Aligners",
  "Advanced Gum Care",
  "Gentle Kids Dentistry",
];

export default function Footer() {
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
                Sample Dental Clinic
              </span>
            </Link>
            <p className="text-[15px] text-white/70 leading-relaxed mb-8">
              Your family&apos;s trusted dental care partner in Greater Noida.
              Modern treatments, gentle hands, and sincere smiles in a spotless environment.
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
              {services.map((s) => (
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
              <p className="text-white">Alpha 2 Main Market,<br />Greater Noida, UP 201310</p>
              <div className="space-y-1 pt-2">
                <a href="tel:+918851169748" className="block hover:text-teal-light transition-colors text-white font-medium">
                  +91 88511 69748
                </a>
                <a href="mailto:hello@sampledentalclinic.com" className="block hover:text-white transition-colors">
                  hello@sampledentalclinic.com
                </a>
              </div>
              <div className="pt-2">
                <p>Mon – Sat: <span className="text-white">9 AM – 8 PM</span></p>
                <p>Sunday: <span className="text-white">10 AM – 2 PM</span></p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} Sample Dental Clinic. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/918851169748" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/40 hover:text-teal-light transition-colors font-medium">
              WhatsApp Us
            </a>
            <a href="https://maps.google.com/?q=Alpha+2+Main+Market+Greater+Noida" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/40 hover:text-teal-light transition-colors font-medium">
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
