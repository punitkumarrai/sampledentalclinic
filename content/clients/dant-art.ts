import type { SiteConfig } from "../types";

const dantArt: SiteConfig = {
  presetId: "dant-art",

  // ── Business Info ────────────────────────────────────────────────
  business: {
    name: "DantArt Dental Clinic",
    phone: "+919911991489",
    phoneDisplay: "+91 99119 91489",
    email: "contact@dantartindia.com", // Placeholder if not found, usually phone is primary
    whatsappNumber: "919911991489",
    whatsappMessage: "Hi, I'd like to book an appointment at DantArt Dental Clinic",
    address: {
      line1: "I-12, 1st Cross Ave, Pocket I, Sector Alpha II,",
      line2: "Greater Noida, UP 201308",
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=DantArt%20Dental%20Clinic&query_place_id=ChIJ729vUobqDDkRGgECf54OBeI",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d77.5191!3d28.4773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea86526f6fef%3A0xe2040e9e7f02011a!2sDantArt%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1715090000000!5m2!1sen!2sin",
    hours: {
      weekdays: "Monday – Saturday",
      weekdayTime: "10:00 AM – 6:00 PM",
      weekend: "Sunday",
      weekendTime: "Closed (By Appointment Only)",
    },
    social: {
      facebook: "https://www.facebook.com/DantartIndia/",
      instagram: "https://instagram.com/dantart_dental", // Estimated
      whatsapp: "https://wa.me/919911991489",
    },
  },

  // ── Metadata ─────────────────────────────────────────────────────
  metadata: {
    home: {
      title: "DantArt Dental Clinic — Expert Dental Care in Greater Noida",
      description:
        "Top-rated dental clinic in Sector Alpha II, Greater Noida. Led by Dr. Vijeta Singh, providing painless RCT, Laser Dentistry, and Smile Design. Book your appointment today.",
      keywords: [
        "dentist greater noida",
        "dental clinic alpha 2",
        "root canal treatment greater noida",
        "laser dentistry india",
        "dr vijeta singh dentist",
        "smile makeover greater noida",
        "painless dentistry",
      ],
    },
    about: {
      title: "About Us | DantArt Dental Clinic",
      description:
        "Learn about DantArt Dental Clinic's mission to provide healthy smiles through modern technology and expert care in Greater Noida.",
    },
    services: {
      title: "Services | DantArt Dental Clinic",
      description:
        "Comprehensive dental services: Laser Dentistry, Root Canal, Smile Design, Extractions, and more at DantArt Dental Clinic.",
    },
    contact: {
      title: "Contact Us | DantArt Dental Clinic",
      description:
        "Visit DantArt Dental Clinic in Sector Alpha II, Greater Noida. Call +91 99119 91489 to schedule your visit.",
    },
  },

  // ── Hero ──────────────────────────────────────────────────────────
  hero: {
    tagline: "A healthy smile starts with us",
    heading: "Advanced Care for Your ",
    headingAccent: "Perfect Smile",
    headingSuffix: "",
    description:
      "Experience world-class dental care at DantArt Dental Clinic. From painless root canals to advanced laser treatments, we combine expertise with state-of-the-art technology for your comfort.",
    heroImage: "/images/hero-dentist.jpg", 
    heroImageAlt:
      "Modern clinical setting at DantArt Dental Clinic Greater Noida",
    trustBadge: {
      rating: "5.0 Rating",
      subtitle: "Trusted by 500+ Patients",
    },
  },

  // ── Doctor ────────────────────────────────────────────────────────
  doctor: {
    sectionTagline: "Meet the Experts",
    sectionHeading: "Lead by Professional Excellence",
    name: "Dr. Vijeta Singh",
    degree: "Dental Surgeon",
    experience: "Experienced in Laser & Cosmetic Dentistry",
    bio: "Dr. Vijeta Singh is a dedicated dental surgeon known for her precise clinical skills and patient-centric approach. She specializes in providing painless dental treatments and aesthetic smile enhancements, ensuring every patient leaves with confidence.",
    quote:
      "“We believe every smile is unique and deserves the highest standard of artistic and clinical care.”",
    imagePath: "/images/lady_doctor.jpg", 
    imageAlt: "Dr. Vijeta Singh — Lead Dentist at DantArt Dental Clinic",
  },

  // ── Services Preview (homepage cards) ─────────────────────────────
  servicesPreview: [
    {
      iconName: "Zap",
      title: "Laser Dentistry",
      description:
        "Minimally invasive and virtually painless treatments using advanced laser technology.",
    },
    {
      iconName: "Activity",
      title: "Painless Root Canal",
      description:
        "Expert RCT procedures to save your natural teeth with maximum comfort.",
    },
    {
      iconName: "Smile",
      title: "Smile Design",
      description:
        "Transform your appearance with professional tooth reshaping and cosmetic enhancements.",
    },
    {
      iconName: "ShieldCheck",
      title: "Oral Surgery",
      description:
        "Safe and precise extractions, including complex impacted tooth procedures.",
    },
    {
      iconName: "Sparkles",
      title: "Teeth Whitening",
      description:
        "Get a brighter, whiter smile in just one visit with our clinical whitening systems.",
    },
    {
      iconName: "HeartPulse",
      title: "General Checkups",
      description:
        "Comprehensive oral health assessments and preventive care for the whole family.",
    },
  ],

  // ── Full Services (services page) ─────────────────────────────────
  fullServices: [
    {
      title: "Advanced Laser Dentistry",
      summary: "The future of dentistry is here — less pain, faster healing.",
      helpsWith: "Gum treatments, cavity preparation, and soft tissue surgeries.",
      whoItIsFor: "Patients seeking precise treatments with minimal discomfort.",
      whyItMatters:
        "Laser procedures often require no anesthesia and result in significantly less bleeding and swelling compared to traditional methods.",
    },
    {
      title: "Painless Root Canal Treatment",
      summary: "Saving your natural teeth is our priority.",
      helpsWith: "Severe toothaches, deep decay, and dental infections.",
      whoItIsFor: "Anyone suffering from acute dental pain who wants to avoid extraction.",
      whyItMatters:
        "Our advanced techniques ensure the procedure is comfortable, effective, and preserves your natural smile.",
    },
    {
      title: "Cosmetic Smile Makeovers",
      summary: "Art meets science for your most beautiful smile.",
      helpsWith: "Chipped, stained, or misaligned teeth.",
      whoItIsFor: "Anyone looking to boost their confidence with a perfect smile.",
      whyItMatters:
        "We combine tooth reshaping, whitening, and veneers to create a smile that is both healthy and stunning.",
    },
    {
      title: "Surgical Extractions",
      summary: "Safe removal of problematic teeth with expert care.",
      helpsWith: "Impacted wisdom teeth, severely damaged teeth.",
      whoItIsFor: "Patients with teeth that cannot be saved or are causing crowding issues.",
      whyItMatters:
        "Our surgical expertise ensures that even complex extractions are performed safely and with a focus on quick recovery.",
    },
    {
      title: "Dental Fillings & Restorations",
      summary: "Seamless repairs for a healthy tooth structure.",
      helpsWith: "Cavities, minor fractures, and worn-down teeth.",
      whoItIsFor: "Patients with early-stage decay or minor tooth damage.",
      whyItMatters:
        "We use tooth-colored composite materials that blend perfectly with your natural teeth while restoring strength.",
    },
  ],

  // ── Services Page ─────────────────────────────────────────────────
  servicesPage: {
    heroHeading: "Excellence in Modern Dentistry",
    heroDescription:
      "DantArt Dental Clinic offers a complete suite of dental solutions under one roof, utilizing the latest innovations for superior patient outcomes.",
  },

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      name: "Amit Kasana",
      text: "Best dental clinic in Greater Noida. Dr. Vijeta is very professional and the treatment was completely painless. Highly recommended!",
      treatment: "Laser Treatment",
      stars: 5,
    },
    {
      name: "Deepak Bhati",
      text: "Had a great experience with my root canal. I was very nervous but the team made me comfortable. The clinic is very clean.",
      treatment: "Root Canal",
      stars: 5,
    },
    {
      name: "Savita Singh",
      text: "I am very happy with my smile makeover. Dr. Vijeta explained everything clearly and the results are amazing.",
      treatment: "Smile Design",
      stars: 5,
    },
  ],

  // ── FAQ ────────────────────────────────────────────────────────────
  faqs: [
    {
      question: "Is Laser Dentistry safe?",
      answer:
        "Absolutely. Laser dentistry is one of the safest and most precise methods available today. It often requires less anesthesia and promotes faster healing.",
    },
    {
      question: "Where is the clinic located?",
      answer:
        "We are located at I-12, Sector Alpha II, Greater Noida, right opposite Navin Hospital. We have easy parking available for patients.",
    },
    {
      question: "Do you offer emergency dental services?",
      answer:
        "Yes, we prioritize dental emergencies like severe pain or injuries. Please call us immediately at 9911991489 for emergency assistance.",
    },
    {
      question: "Are treatments at DantArt painless?",
      answer:
        "Yes, our goal is to provide a 'Painless Promise.' We use modern anesthetics and advanced laser technology to ensure your comfort throughout the procedure.",
    },
  ],

  // ── About Page ────────────────────────────────────────────────────
  aboutPage: {
    heroTagline: "Artistic Care, Clinical Precision",
    heroHeading: "Defining the Art of Dentistry",
    heroDescription:
      "At DantArt Dental Clinic, we view dental care as a blend of artistic vision and clinical excellence. Our mission is to provide high-end dental solutions that are accessible and comfortable for everyone.",
    storyHeading: "Trusted in Greater Noida.\nCommitted to You.",
    storyParagraphs: [
      "Founded in Sector Alpha II, DantArt Dental Clinic was established to bridge the gap between advanced dental technology and personalized patient care. We understood that many patients avoid the dentist out of fear, so we built our practice around the concept of 'Painless Dentistry'.",
      "Over the years, we have become a preferred choice for families in Greater Noida. Whether it is a child's first checkup or a complex surgical procedure, our commitment to hygiene and excellence remains unwavering.",
      "We continually invest in the latest equipment, like dental lasers and digital imaging, to ensure that our patients receive the most accurate diagnoses and efficient treatments possible.",
    ],
    storyImage: "/images/reception.jpg",
    storyImageAlt: "Modern reception and patient lounge at DantArt Dental Clinic",
    philosophyHeading: "Our Core Philosophy",
    philosophyDescription:
      "We operate on four fundamental principles that guide every interaction and treatment in our clinic.",
    pillars: [
      {
        iconName: "Sparkles",
        title: "Artistic Excellence",
        description:
          "We treat every smile as a unique work of art, focusing on aesthetics as much as health.",
      },
      {
        iconName: "ShieldCheck",
        title: "Sterilization Guarantee",
        description:
          "Our clinic follows strict international protocols for sterilization and hygiene to ensure your safety.",
      },
      {
        iconName: "Heart",
        title: "Painless Experience",
        description:
          "Using laser technology and gentle techniques, we minimize discomfort and anxiety for all patients.",
      },
      {
        iconName: "Lightbulb",
        title: "Patient Education",
        description:
          "We believe in transparency. We show you exactly what is happening and explain all your options before we begin.",
      },
    ],
    firstVisitTagline: "Your First Visit",
    firstVisitHeading: "What to Expect at DantArt",
    firstVisitIntro:
      "We want your first visit to be the start of a long-term relationship. Here is how we ensure a smooth experience from start to finish.",
    firstVisitSteps: [
      {
        title: "Consultation & History",
        description:
          "We begin with a detailed discussion of your dental history and any concerns or goals you have for your smile.",
      },
      {
        title: "Comprehensive Exam",
        description:
          "Using digital imaging and gentle techniques, Dr. Vijeta will perform a thorough examination of your oral health.",
      },
      {
        title: "Personalized Roadmap",
        description:
          "We provide a clear treatment plan with transparent pricing and timelines, so you can make informed decisions.",
      },
    ],
  },

  // ── Book Page ─────────────────────────────────────────────────────
  bookPage: {
    sidebarTagline: "Book Appointment",
    sidebarHeading: "Schedule Your\nVisit Today",
    sidebarDescription:
      "Ready for a healthier smile? Select your preferred time and treatment, and our team will get back to you to confirm your appointment.",
    confirmationHeading: "Request Received!",
    confirmationMessage:
      "Thank you for choosing DantArt Dental Clinic. We will call you shortly to confirm your exact slot.",
    treatmentOptions: [
      { value: "", label: "General Consultation" },
      { value: "laser", label: "Laser Dentistry" },
      { value: "rct", label: "Root Canal Treatment" },
      { value: "cosmetic", label: "Smile Design / Cosmetic" },
      { value: "extraction", label: "Tooth Extraction" },
      { value: "filling", label: "Dental Filling" },
      { value: "other", label: "Other" },
    ],
    timeSlots: [
      { value: "morning", label: "Morning (10 AM - 1 PM)" },
      { value: "afternoon", label: "Afternoon (1 PM - 4 PM)" },
      { value: "evening", label: "Evening (4 PM - 6 PM)" },
    ],
  },

  // ── Contact Page ──────────────────────────────────────────────────
  contactPage: {
    heroHeading: "Get in Touch with Us",
    heroDescription:
      "Have questions or need an appointment? Our friendly team at Sector Alpha II is here to help you with all your dental needs.",
  },

  // ── Gallery ───────────────────────────────────────────────────────
  gallery: [
    {
      src: "/images/reception.jpg",
      alt: "Welcoming reception at DantArt Dental Clinic",
    },
    {
      src: "/images/treatment.jpg",
      alt: "Modern laser dental treatment setup",
    },
    {
      src: "/images/tools.jpg",
      alt: "Sterilized equipment at DantArt Clinic",
    },
  ],

  // ── Before & After ────────────────────────────────────────────────
  beforeAfter: {
    sectionTagline: "Real Results",
    sectionHeading: "Before & After",
    sectionDescription:
      "See the transformative power of modern, expert dental care.",
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    caption:
      "Drag the slider to compare before and after. Case: Complete Smile Makeover.",
  },

  // ── Trust Strip ───────────────────────────────────────────────────

  trustStrip: [
    { iconName: "HeartHandshake", label: "Painless Promise" },
    { iconName: "Zap", label: "Laser Technology" },
    { iconName: "ShieldCheck", label: "100% Sterilized" },
    { iconName: "Users", label: "5-Star Rated Clinic" },
  ],

  // ── Why Choose Us ─────────────────────────────────────────────────
  whyChooseUs: {
    sectionTagline: "The DantArt Advantage",
    sectionHeading: "Why Patients Trust Our Care",
    image: "/images/consultation.jpg",
    imageAlt: "Dr. Vijeta Singh consulting with a patient",
    reasons: [
      {
        iconName: "UserCheck",
        title: "Expert Dental Surgeons",
        description:
          "Led by Dr. Vijeta Singh, our team brings specialized skills in modern dental procedures.",
      },
      {
        iconName: "Zap",
        title: "Advanced Technology",
        description:
          "We use dental lasers and digital diagnostics for superior precision and faster recovery.",
      },
      {
        iconName: "Heart",
        title: "Focus on Comfort",
        description:
          "Our 'Painless Dentistry' approach ensures a stress-free experience for even the most anxious patients.",
      },
      {
        iconName: "Droplets",
        title: "Strict Sterilization",
        description:
          "We follow rigorous hygiene protocols to ensure a safe and clinical environment for every visit.",
      },
    ],
  },

  // ── Appointment CTA ───────────────────────────────────────────────
  appointmentCTA: {
    heading: "Start Your Journey to a Healthier Smile",
    description:
      "Join hundreds of happy families who trust DantArt Dental Clinic for their oral health. Experience the difference of modern, gentle care.",
    phoneDisplayText: "Call 99119 91489",
    badges: ["Laser Dentistry Available", "Emergency Cases Welcome"],
  },

  // ── Footer ────────────────────────────────────────────────────────
  footer: {
    tagline:
      "Providing the perfect blend of art and science for your dental health. Trusted by families across Greater Noida for painless and modern treatments.",
    servicesList: [
      "Laser Dentistry",
      "Painless Root Canal",
      "Cosmetic Smile Design",
      "Surgical Extractions",
      "Dental Restorations",
      "Preventive Checkups",
    ],
  },

  // ── Email Config ──────────────────────────────────────────────────
  email: {
    clinicName: "DantArt Dental Clinic",
    senderName: "DantArt Dental",
    recipientEmail: "contact@dantartindia.com",
  },
};

export default dantArt;
