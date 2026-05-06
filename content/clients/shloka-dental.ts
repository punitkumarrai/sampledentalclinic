import type { SiteConfig } from "../types";

const shlokaDental: SiteConfig = {
  presetId: "shloka-dental",

  // ── Business Info ────────────────────────────────────────────────
  business: {
    name: "Shloka Dental and Implant Centre",
    phone: "+918744831533",
    phoneDisplay: "+91 87448 31533",
    email: "hello@shlokadental.com",
    whatsappNumber: "918744831533",
    whatsappMessage: "Hi, I'd like to book an appointment at Shloka Dental",
    address: {
      line1: "Shop No 44, Ground Floor, K B Complex,",
      line2: "Sector Alpha II, Greater Noida, UP 201308",
    },
    googleMapsUrl:
      "https://www.google.com/maps/place/Shloka+Dental+and+Implant+Centre/@28.4775627,77.5175752,17z",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.5175752!3d28.4775627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb1625cc36df%3A0x4c930fae3934537b!2sShloka%20Dental%20and%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    hours: {
      weekdays: "Mon – Sat",
      weekdayTime: "10:00 AM – 7:00 PM",
      weekend: "Sunday",
      weekendTime: "Closed",
    },
  },

  // ── Metadata ─────────────────────────────────────────────────────
  metadata: {
    home: {
      title: "Shloka Dental and Implant Centre — Expert Dental Care in Greater Noida",
      description:
        "Trusted dental clinic in Sector Alpha II, Greater Noida. Specialising in dental implants, painless root canals, cosmetic dentistry & general care. Rated 4.9★. Book today.",
      keywords: [
        "dentist greater noida",
        "dental implants greater noida",
        "shloka dental alpha 2",
        "root canal greater noida",
        "teeth cleaning greater noida",
        "dental clinic alpha sector 2",
        "Dr Ayushi Srivastava dentist",
        "implant centre greater noida",
      ],
    },
    about: {
      title: "About Us | Shloka Dental and Implant Centre",
      description:
        "Learn why families in Greater Noida trust Shloka Dental and Implant Centre for modern, hygienic, and expert dental care led by Dr. Ayushi Srivastava.",
    },
    services: {
      title: "Services | Shloka Dental and Implant Centre",
      description:
        "Comprehensive dental care in Greater Noida: Dental Implants, Root Canals, Teeth Cleaning, Cosmetic Dentistry, and General Checkups.",
    },
    contact: {
      title: "Contact Us | Shloka Dental and Implant Centre",
      description:
        "Get in touch with Shloka Dental and Implant Centre in Sector Alpha II, Greater Noida. Call +91 87448 31533 or message us on WhatsApp.",
    },
  },

  // ── Hero ──────────────────────────────────────────────────────────
  hero: {
    tagline: "4.9★ Rated Dental Clinic in Greater Noida",
    heading: "Advanced Implant &",
    headingAccent: "Painless\u00a0Dental",
    headingSuffix: " Care",
    description:
      "At Shloka Dental and Implant Centre, we combine cutting-edge technology with a gentle, patient-first approach. From routine checkups to dental implants — your comfort and confidence always come first.",
    heroImage: "/images/hero-dentist.jpg",
    heroImageAlt:
      "Dr. Ayushi Srivastava consulting with a patient at Shloka Dental and Implant Centre, Greater Noida",
    trustBadge: {
      rating: "4.9★ Rating",
      subtitle: "39+ Happy Patients",
    },
  },

  // ── Doctor ────────────────────────────────────────────────────────
  doctor: {
    sectionTagline: "Meet Your Dentist",
    sectionHeading: "In Safe, Caring Hands",
    name: "Dr. Ayushi Srivastava",
    degree: "BDS — Dental Surgery",
    experience: "Experienced Implantologist & General Dentist",
    bio: "Dr. Ayushi Srivastava is known for her calm, patient, and thorough approach to dental care. She takes time to explain every procedure clearly and ensures each patient feels completely at ease. Her expertise in dental implants and pain-free treatments has earned her a loyal patient base across Greater Noida.",
    quote:
      "\u201cEvery smile tells a story. I want to make sure yours is a healthy, happy, and confident one.\u201d",
    imagePath: "/images/lady_doctor.jpg",
    imageAlt: "Dr. Ayushi Srivastava — Lead Dentist at Shloka Dental and Implant Centre",
  },

  // ── Services Preview (homepage cards) ─────────────────────────────
  servicesPreview: [
    {
      iconName: "Settings",
      title: "Dental Implants",
      description:
        "Permanent, natural-looking replacements for missing teeth — our flagship speciality.",
    },
    {
      iconName: "Activity",
      title: "Root Canal Treatment",
      description:
        "Gentle, painless root canal treatment to save your natural tooth and relieve pain fast.",
    },
    {
      iconName: "Sparkles",
      title: "Teeth Cleaning & Scaling",
      description:
        "Professional cleaning to remove plaque, tartar, and keep your smile bright.",
    },
    {
      iconName: "Gem",
      title: "Cosmetic Dentistry",
      description:
        "Teeth whitening and smile makeovers for a radiant, confident appearance.",
    },
    {
      iconName: "Smile",
      title: "Braces & Aligners",
      description:
        "Straighter teeth with traditional braces or invisible aligners — for teens and adults.",
    },
    {
      iconName: "HeartPulse",
      title: "Gum Care",
      description:
        "Targeted gum treatments to protect the foundation of your healthy smile.",
    },
    {
      iconName: "ClipboardList",
      title: "General Checkup",
      description:
        "Thorough dental examinations with digital X-rays to catch issues early.",
    },
  ],

  // ── Full Services (services page) ─────────────────────────────────
  fullServices: [
    {
      title: "Dental Implants",
      summary: "Our flagship service — the gold standard for replacing missing teeth.",
      helpsWith: "Missing teeth, difficulty chewing, bone loss prevention.",
      whoItIsFor:
        "Adults who have lost one or more teeth and want a permanent, stable, natural-looking solution.",
      whyItMatters:
        "Implants function exactly like natural tooth roots — they stimulate the jawbone, prevent bone loss, and restore full chewing function without affecting neighbouring teeth.",
    },
    {
      title: "Root Canal Treatment",
      summary: "Comfortable, precise treatment to save infected or damaged teeth.",
      helpsWith: "Severe tooth pain, deep decay, cracked teeth, infected pulp.",
      whoItIsFor:
        "Patients experiencing intense toothache, prolonged sensitivity to hot/cold, or swelling near a tooth.",
      whyItMatters:
        "A modern root canal is no more uncomfortable than a filling. It relieves pain instantly and saves your natural tooth — avoiding extraction and the need for an implant.",
    },
    {
      title: "Teeth Cleaning & Scaling",
      summary: "A foundational step for long-term oral health.",
      helpsWith: "Plaque buildup, bad breath, mild gum disease, staining.",
      whoItIsFor: "Everyone — recommended every 6 months.",
      whyItMatters:
        "Professional cleaning removes tartar that regular brushing cannot tackle, preventing cavities and gum disease before they begin.",
    },
    {
      title: "Cosmetic Dentistry",
      summary: "Smile makeovers and teeth whitening for a radiant look.",
      helpsWith: "Stained, chipped, or uneven teeth affecting your confidence.",
      whoItIsFor: "Anyone wanting to improve the aesthetics of their smile.",
      whyItMatters:
        "A beautiful smile has a proven impact on self-esteem and first impressions. Our cosmetic treatments are conservative and deliver stunning, natural-looking results.",
    },
    {
      title: "Braces & Invisible Aligners",
      summary: "Straighter teeth through traditional or clear aligner options.",
      helpsWith: "Crooked teeth, bite issues, gaps, crowding.",
      whoItIsFor:
        "Children, teens, and adults looking to improve their bite and smile aesthetics.",
      whyItMatters:
        "Straight teeth are easier to clean and reduce the risk of jaw strain. Clear aligners offer a discreet, removable alternative to metal braces.",
    },
    {
      title: "Gum Care & Periodontics",
      summary: "Targeted treatments for the foundation of your smile.",
      helpsWith: "Bleeding gums, receding gumlines, advanced periodontitis.",
      whoItIsFor:
        "Patients noticing bleeding while brushing, loose teeth, or persistent bad breath.",
      whyItMatters:
        "Untreated gum disease is the leading cause of tooth loss in adults. Early intervention protects your teeth and your overall health.",
    },
    {
      title: "General Checkup & X-Rays",
      summary: "Thorough digital examination to catch problems before they grow.",
      helpsWith: "Early cavity detection, bite assessment, oral cancer screening.",
      whoItIsFor: "Everyone — even if you have no pain or complaints.",
      whyItMatters:
        "Regular checkups catch small issues before they become expensive, painful problems. Digital X-rays are quick, low-radiation, and give us a complete picture.",
    },
  ],

  // ── Services Page ─────────────────────────────────────────────────
  servicesPage: {
    heroHeading: "Complete Dental Care Under One Roof",
    heroDescription:
      "From dental implants and root canals to cosmetic smile makeovers — we offer everything your family needs in a clean, modern, and welcoming environment.",
  },

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      name: "Rohit Sharma",
      text: "Got my dental implant done here. Dr. Ayushi was extremely professional and walked me through every step. Painless experience and the result looks absolutely natural. Highly recommended!",
      treatment: "Dental Implant",
      stars: 5,
    },
    {
      name: "Priya Gupta",
      text: "I was terrified of root canals, but Dr. Ayushi made it completely painless. The clinic is spotlessly clean and the staff is so warm. I couldn\u2019t believe how easy it was!",
      treatment: "Root Canal Treatment",
      stars: 5,
    },
    {
      name: "Amit Verma",
      text: "Visited for a routine cleaning and ended up getting a full checkup. The digital X-rays and the detailed explanation of my dental health were so impressive. Prices are very fair too.",
      treatment: "Teeth Cleaning & Checkup",
      stars: 5,
    },
  ],

  // ── FAQ ────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "Do I need an appointment before visiting?",
      answer:
        "While we welcome walk-ins for emergencies, we strongly recommend booking an appointment so our doctor can dedicate enough time to your consultation without any wait.",
    },
    {
      question: "Are dental implants painful?",
      answer:
        "The procedure is performed under local anaesthesia, so you feel no pain during treatment. Most patients are surprised at how comfortable the entire process is. Post-procedure discomfort is minimal and easily managed.",
    },
    {
      question: "Is root canal treatment painful?",
      answer:
        "Not at all. With modern anaesthetics and advanced techniques, a root canal is no more uncomfortable than a standard filling. Dr. Ayushi\u2019s gentle approach ensures you remain relaxed throughout.",
    },
    {
      question: "Do you offer teeth whitening?",
      answer:
        "Yes! We offer professional in-clinic teeth whitening that delivers noticeably brighter results in a single visit, safely and comfortably.",
    },
    {
      question: "What are your clinic hours?",
      answer:
        "We are open Monday to Saturday, 10:00 AM to 7:00 PM. We are closed on Sundays. We recommend calling ahead or booking online to secure your preferred slot.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book easily by clicking \u2018Book Appointment\u2019 on our website, calling us at +91 87448 31533, or sending a quick message on WhatsApp.",
    },
  ],

  // ── About Page ────────────────────────────────────────────────────
  aboutPage: {
    heroTagline: "Our Story & Values",
    heroHeading: "A Better Kind of Dental Care",
    heroDescription:
      "At Shloka Dental and Implant Centre, we believe great dentistry starts with genuine care. We\u2019ve built our practice on transparency, clinical excellence, and ensuring every patient leaves with a smile — both literally and figuratively.",
    storyHeading: "Rooted in Greater Noida.\nDriven by Excellence.",
    storyParagraphs: [
      "When we opened Shloka Dental and Implant Centre in Sector Alpha II, our mission was clear: to bring world-class dental care to the heart of Greater Noida — without the intimidation, the hidden costs, or the long waits.",
      "Today, with a 4.9-star rating and dozens of satisfied patients, we are proud to be the trusted dental home for families and individuals across the community. From first teeth to full smile restorations, we handle every stage of dental health under one roof.",
      "We invest in the latest dental technology because it means faster, safer, and more comfortable treatments for you. Our digital X-rays, modern sterilisation protocols, and implant expertise set us apart.",
    ],
    storyImage: "/images/reception.jpg",
    storyImageAlt:
      "Modern, clean reception area at Shloka Dental and Implant Centre, Greater Noida",
    philosophyHeading: "The Pillars of Our Practice",
    philosophyDescription:
      "Everything we do is built on these four core values to ensure you receive the highest standard of dental care.",
    pillars: [
      {
        iconName: "Users",
        title: "Patient-First Care",
        description:
          "Every decision we make is guided by what is best for our patient\u2019s health, comfort, and confidence.",
      },
      {
        iconName: "ShieldCheck",
        title: "Absolute Hygiene",
        description:
          "Our sterilisation protocols exceed international medical standards. Your safety is non-negotiable.",
      },
      {
        iconName: "Heart",
        title: "Painless Promise",
        description:
          "Modern anaesthetics and Dr. Ayushi\u2019s gentle technique ensure your time in the chair is entirely relaxed.",
      },
      {
        iconName: "Lightbulb",
        title: "Full Transparency",
        description:
          "We show you your X-rays, explain every option, and provide clear pricing upfront. No surprises.",
      },
    ],
    firstVisitTagline: "Patient Journey",
    firstVisitHeading: "What to Expect on Your First Visit",
    firstVisitIntro:
      "We know visiting a new clinic can feel daunting. From the moment you arrive, our team removes all the guesswork so you can focus on your health.",
    firstVisitSteps: [
      {
        title: "Warm Welcome",
        description:
          "You\u2019ll be greeted by our friendly team, made comfortable, and guided through a brief medical history form.",
      },
      {
        title: "Detailed Consultation",
        description:
          "Dr. Ayushi will have an unhurried conversation about your dental goals, followed by a thorough digital examination.",
      },
      {
        title: "Transparent Treatment Plan",
        description:
          "If treatment is needed, you\u2019ll receive a clear plan with options, timelines, and exact pricing — no pressure, no surprises.",
      },
    ],
  },

  // ── Book Page ─────────────────────────────────────────────────────
  bookPage: {
    sidebarTagline: "Book Appointment",
    sidebarHeading: "We\u2019re Ready\nWhen You Are",
    sidebarDescription:
      "Booking is completely stress-free. Share your preferences and our team will call you promptly to confirm your slot.",
    confirmationHeading: "Request Received!",
    confirmationMessage:
      "Thank you for reaching out to Shloka Dental and Implant Centre. A member of our team will contact you shortly to confirm your appointment time.",
    treatmentOptions: [
      { value: "", label: "General Checkup" },
      { value: "implant", label: "Dental Implant" },
      { value: "rootcanal", label: "Root Canal Treatment" },
      { value: "cleaning", label: "Teeth Cleaning / Scaling" },
      { value: "cosmetic", label: "Cosmetic / Whitening" },
      { value: "braces", label: "Braces / Aligners" },
      { value: "pain", label: "Toothache / Emergency" },
      { value: "other", label: "Other" },
    ],
    timeSlots: [
      { value: "morning", label: "Morning (10 AM – 12 PM)" },
      { value: "afternoon", label: "Afternoon (12 PM – 4 PM)" },
      { value: "evening", label: "Evening (4 PM – 7 PM)" },
    ],
  },

  // ── Contact Page ──────────────────────────────────────────────────
  contactPage: {
    heroHeading: "We\u2019d Love to Hear From You",
    heroDescription:
      "Have a question about a treatment, need directions, or want to say hello? Our team at Shloka Dental is always ready to help.",
  },

  // ── Gallery ───────────────────────────────────────────────────────
  gallery: [
    {
      src: "/images/reception.jpg",
      alt: "Modern, welcoming reception area at Shloka Dental and Implant Centre",
    },
    {
      src: "/images/treatment.jpg",
      alt: "Clean, state-of-the-art dental treatment room",
    },
    {
      src: "/images/tools.jpg",
      alt: "Sterilised, modern dental instruments ready for use",
    },
    {
      src: "/images/consultation-room.jpg",
      alt: "Comfortable consultation room at Shloka Dental",
    },
  ],

  // ── Before & After ────────────────────────────────────────────────
  beforeAfter: {
    sectionTagline: "Real Results",
    sectionHeading: "Before & After",
    sectionDescription:
      "See the transformative power of modern implant and cosmetic dental care.",
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    caption:
      "Drag the slider to compare before and after. Case: Full Smile Restoration with Implants.",
  },

  // ── Trust Strip ───────────────────────────────────────────────────
  trustStrip: [
    { iconName: "HeartHandshake", label: "Gentle, Caring Team" },
    { iconName: "Microscope", label: "Modern Equipment" },
    { iconName: "CalendarDays", label: "Easy Appointments" },
    { iconName: "Users", label: "Trusted by Local Families" },
  ],

  // ── Why Choose Us ─────────────────────────────────────────────────
  whyChooseUs: {
    sectionTagline: "Why Us",
    sectionHeading: "Why Patients Choose Shloka Dental",
    image: "/images/consultation.jpg",
    imageAlt:
      "Dr. Ayushi Srivastava explaining a treatment plan to a patient at Shloka Dental",
    reasons: [
      {
        iconName: "UserCheck",
        title: "Implant Specialists",
        description:
          "Dental implants are our flagship service. Dr. Ayushi brings focused expertise and precision to every case.",
      },
      {
        iconName: "Heart",
        title: "Genuinely Painless Care",
        description:
          "From numbing to needle technique, every step is designed to keep you completely comfortable.",
      },
      {
        iconName: "Droplets",
        title: "International Hygiene Standards",
        description:
          "Spotless clinic, rigorous sterilisation, and fresh disposables for every patient — always.",
      },
      {
        iconName: "ClipboardList",
        title: "Honest Treatment Plans",
        description:
          "No upselling, no pressure. We explain your options clearly and respect your decisions.",
      },
      {
        iconName: "Monitor",
        title: "Digital X-Rays & Modern Tech",
        description:
          "Faster diagnosis with low-radiation digital X-rays and up-to-date dental equipment.",
      },
      {
        iconName: "Star",
        title: "4.9★ Patient Rating",
        description:
          "Our patients say it best — consistent 5-star reviews for care, hygiene, and results.",
      },
    ],
  },

  // ── Appointment CTA ───────────────────────────────────────────────
  appointmentCTA: {
    heading: "Ready for a Healthier, More Confident Smile?",
    description:
      "Whether you need a routine cleaning or a dental implant, our expert team is here to make your experience surprisingly comfortable.",
    phoneDisplayText: "Call 87448 31533",
    badges: [
      "Accepting New Patients",
      "Walk-ins & Emergencies Welcome",
    ],
  },

  // ── Footer ────────────────────────────────────────────────────────
  footer: {
    tagline:
      "Greater Noida\u2019s trusted implant and dental care centre. Modern technology, painless treatments, and genuine smiles — in a spotlessly clean environment.",
    servicesList: [
      "Dental Implants",
      "Painless Root Canals",
      "Teeth Cleaning & Scaling",
      "Cosmetic Dentistry",
      "Braces & Aligners",
      "Gum Care",
      "General Checkups",
    ],
  },

  // ── Email Config ──────────────────────────────────────────────────
  email: {
    clinicName: "Shloka Dental and Implant Centre",
    senderName: "Shloka Dental and Implant Centre",
    recipientEmail: "thenewstar0808@gmail.com",
  },
};

export default shlokaDental;
