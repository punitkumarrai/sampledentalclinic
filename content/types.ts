// ─── Business / Contact ─────────────────────────────────────────────
export interface BusinessHours {
  weekdays: string;   // e.g. "Mon – Sat"
  weekdayTime: string; // e.g. "9:00 AM – 8:00 PM"
  weekend: string;     // e.g. "Sunday"
  weekendTime: string; // e.g. "10:00 AM – 2:00 PM"
}

export interface BusinessInfo {
  name: string;
  phone: string;          // e.g. "+918851169748"
  phoneDisplay: string;   // e.g. "+91 88511 69748"
  email: string;
  whatsappNumber: string; // digits only, e.g. "918851169748"
  whatsappMessage: string;
  address: {
    line1: string;
    line2: string;
  };
  googleMapsUrl: string;
  mapEmbedUrl: string;
  hours: BusinessHours;
  /** Optional social links — if omitted, TopBar social section is hidden */
  social?: {
    facebook?: string;   // full URL e.g. "https://facebook.com/yourclinic"
    instagram?: string;  // full URL e.g. "https://instagram.com/yourclinic"
    whatsapp?: string;   // full URL e.g. "https://wa.me/918851169748"
  };
}

// ─── Metadata ───────────────────────────────────────────────────────
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface MetadataConfig {
  home: PageMeta;
  about: PageMeta;
  services: PageMeta;
  contact: PageMeta;
}

// ─── Hero ───────────────────────────────────────────────────────────
export interface HeroContent {
  tagline: string;
  heading: string;
  headingAccent: string;
  headingSuffix: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  trustBadge: {
    rating: string;
    subtitle: string;
  };
}

// ─── Doctor ─────────────────────────────────────────────────────────
export interface DoctorContent {
  sectionTagline: string;
  sectionHeading: string;
  name: string;
  degree: string;
  experience: string;
  bio: string;
  quote: string;
  imagePath: string;
  imageAlt: string;
}

// ─── Services ───────────────────────────────────────────────────────
export interface ServicePreviewItem {
  iconName: string;
  title: string;
  description: string;
}

export interface FullServiceItem {
  title: string;
  summary: string;
  helpsWith: string;
  whoItIsFor: string;
  whyItMatters: string;
}

// ─── Testimonials ───────────────────────────────────────────────────
export interface TestimonialItem {
  name: string;
  text: string;
  treatment: string;
  stars: number;
}

// ─── FAQ ────────────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

// ─── About Page ─────────────────────────────────────────────────────
export interface PhilosophyPillar {
  iconName: string;
  title: string;
  description: string;
}

export interface FirstVisitStep {
  title: string;
  description: string;
}

export interface AboutPageContent {
  heroTagline: string;
  heroHeading: string;
  heroDescription: string;
  storyHeading: string;
  storyParagraphs: string[];
  storyImage: string;
  storyImageAlt: string;
  philosophyHeading: string;
  philosophyDescription: string;
  pillars: PhilosophyPillar[];
  firstVisitTagline: string;
  firstVisitHeading: string;
  firstVisitIntro: string;
  firstVisitSteps: FirstVisitStep[];
}

// ─── Book Page ──────────────────────────────────────────────────────
export interface BookPageContent {
  sidebarTagline: string;
  sidebarHeading: string;
  sidebarDescription: string;
  confirmationHeading: string;
  confirmationMessage: string;
  treatmentOptions: { value: string; label: string }[];
  timeSlots: { value: string; label: string }[];
}

// ─── Contact Page ───────────────────────────────────────────────────
export interface ContactPageContent {
  heroHeading: string;
  heroDescription: string;
}

// ─── Gallery ────────────────────────────────────────────────────────
export interface GalleryImage {
  src: string;
  alt: string;
}

// ─── Before & After ─────────────────────────────────────────────────
export interface BeforeAfterContent {
  sectionTagline: string;
  sectionHeading: string;
  sectionDescription: string;
  beforeImage: string;
  afterImage: string;
  caption: string;
}

// ─── Trust Strip ────────────────────────────────────────────────────
export interface TrustStripItem {
  iconName: string;
  label: string;
}

// ─── Why Choose Us ──────────────────────────────────────────────────
export interface WhyChooseUsItem {
  iconName: string;
  title: string;
  description: string;
}

export interface WhyChooseUsContent {
  sectionTagline: string;
  sectionHeading: string;
  image: string;
  imageAlt: string;
  reasons: WhyChooseUsItem[];
}

// ─── Appointment CTA ────────────────────────────────────────────────
export interface AppointmentCTAContent {
  heading: string;
  description: string;
  phoneDisplayText: string;
  badges: string[];
}

// ─── Footer ─────────────────────────────────────────────────────────
export interface FooterContent {
  tagline: string;
  servicesList: string[];
}

// ─── Email / Notifications ──────────────────────────────────────────
export interface EmailConfig {
  clinicName: string;
  senderName: string;
  recipientEmail: string;
}

// ─── Services Page ──────────────────────────────────────────────────
export interface ServicesPageContent {
  heroHeading: string;
  heroDescription: string;
}

// ─── Top-Level Site Config ──────────────────────────────────────────
export interface SiteConfig {
  /** Unique slug for this preset, e.g. "sample-dental" */
  presetId: string;

  business: BusinessInfo;
  metadata: MetadataConfig;
  hero: HeroContent;
  doctor: DoctorContent;
  servicesPreview: ServicePreviewItem[];
  fullServices: FullServiceItem[];
  servicesPage: ServicesPageContent;
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
  aboutPage: AboutPageContent;
  bookPage: BookPageContent;
  contactPage: ContactPageContent;
  gallery: GalleryImage[];
  beforeAfter: BeforeAfterContent;
  trustStrip: TrustStripItem[];
  whyChooseUs: WhyChooseUsContent;
  appointmentCTA: AppointmentCTAContent;
  footer: FooterContent;
  email: EmailConfig;
}
