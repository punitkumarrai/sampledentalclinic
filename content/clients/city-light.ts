import type { SiteConfig } from "../types";

const cityLight: SiteConfig = {
  presetId: "city-light",

  business: {
    name: "City Light Dental Care",
    phone: "+919999044511",
    phoneDisplay: "+91 99990 44511",
    email: "hello@citylightdentalcare.com",
    whatsappNumber: "919999044511",
    whatsappMessage: "Hi, I'd like to book an appointment",
    address: {
      line1: "Shop No. UG-21, Block-E, Alpha Plaza,",
      line2: "Near Community Centre, Alpha 1, Greater Noida, UP 201310",
    },
    googleMapsUrl:
      "https://maps.google.com/?q=City+Light+Dental+Care+Alpha+1+Greater+Noida",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.034789851614!2d77.5123966!3d28.4744341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebb36e85736d%3A0xe1b411827ad1e150!2sCity+Light+Dental+Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    hours: {
      weekdays: "Mon \u2013 Sat",
      weekdayTime: "9:00 AM \u2013 8:00 PM",
      weekend: "Sunday",
      weekendTime: "10:00 AM \u2013 2:00 PM",
    },
  },

  metadata: {
    home: {
      title: "City Light Dental Care \u2014 Premium Dental Care in Greater Noida",
      description:
        "Trusted dental clinic near Alpha Plaza, Alpha 1, Greater Noida. Expert care from Dr. Richa & Dr. Sachin Bansal \u2014 teeth cleaning, braces, implants, root canal & more.",
      keywords: [
        "dentist greater noida",
        "dental clinic alpha 1",
        "city light dental care",
        "Dr Sachin Bansal dentist",
        "braces greater noida",
        "dental implants greater noida",
        "root canal treatment",
      ],
    },
    about: {
      title: "About Us | City Light Dental Care",
      description:
        "Learn why families in Greater Noida trust City Light Dental Care for modern, comfortable, and expert dental care.",
    },
    services: {
      title: "Services | City Light Dental Care",
      description:
        "Comprehensive dental care in Greater Noida: Teeth Cleaning, Root Canals, Aligners, Implants, Braces and Kids Dentistry.",
    },
    contact: {
      title: "Contact Us | City Light Dental Care",
      description:
        "Get in touch with City Light Dental Care at Alpha Plaza, Alpha 1, Greater Noida. Call +91 99990 44511 or message us on WhatsApp.",
    },
  },

  hero: {
    tagline: "Trusted Dental Care in Alpha 1, Greater Noida",
    heading: "Your Smile Deserves ",
    headingAccent: "Gentle,\u00a0Expert",
    headingSuffix: " Care",
    description:
      "At City Light Dental Care, we combine modern technology with a warm, family-friendly approach. From routine cleanings to advanced braces and implants \u2014 your comfort always comes first.",
    heroImage: "/images/hero-dentist.jpg",
    heroImageAlt:
      "Friendly dentist consulting with a patient at City Light Dental Care, Greater Noida",
    trustBadge: {
      rating: "4.7 Rating",
      subtitle: "52+ Happy Families",
    },
  },

  doctor: {
    sectionTagline: "Meet Your Dentist",
    sectionHeading: "In Safe, Caring Hands",
    name: "Dr. Sachin Bansal",
    degree: "BDS, MDS \u2014 Orthodontics",
    experience: "10+ Years of Experience",
    bio: "Dr. Sachin Bansal is highly regarded for his expertise in braces treatment and achieving excellent results with teeth alignment. His patient-first approach ensures every visit is comfortable, clear, and respectful.",
    quote:
      "\u201cEvery patient deserves a smile they are proud of. I believe in honest, gentle care that transforms both teeth and confidence.\u201d",
    imagePath: "/images/doctor.jpg",
    imageAlt: "Dr. Sachin Bansal \u2014 Lead Dentist at City Light Dental Care",
  },

  servicesPreview: [
    {
      iconName: "Sparkles",
      title: "Teeth Cleaning",
      description:
        "Professional cleaning to remove plaque and keep your smile bright and healthy.",
    },
    {
      iconName: "Activity",
      title: "Root Canal",
      description:
        "Gentle, pain-free root canal treatment to save your natural tooth.",
    },
    {
      iconName: "Smile",
      title: "Braces & Orthodontics",
      description:
        "Expert braces treatment for a confident, aligned smile \u2014 for teens and adults alike.",
    },
    {
      iconName: "Settings",
      title: "Dental Implants",
      description: "Permanent, natural-looking replacements for missing teeth.",
    },
    {
      iconName: "Gem",
      title: "Aligners",
      description:
        "Clear, invisible aligners for a discreet path to perfectly aligned teeth.",
    },
    {
      iconName: "HeartPulse",
      title: "Gum Care",
      description:
        "Healthy gums are the foundation of healthy teeth. We help you maintain both.",
    },
    {
      iconName: "Baby",
      title: "Kids Dentistry",
      description:
        "Fun, gentle dental care designed to make kids feel comfortable and safe.",
    },
  ],

  fullServices: [
    {
      title: "Teeth Cleaning & Scaling",
      summary: "A foundational step for long-term oral health.",
      helpsWith: "Plaque buildup, bad breath, mild gum disease.",
      whoItIsFor: "Everyone. We recommend a checkup every 6 months.",
      whyItMatters:
        "Professional cleaning removes tartar that regular brushing cannot handle, preventing cavities and gingivitis before they start.",
    },
    {
      title: "Root Canal Treatment",
      summary: "Comfortable, precise treatment to save infected teeth.",
      helpsWith: "Severe tooth pain, deep decay, infected pulp.",
      whoItIsFor:
        "Patients experiencing intense toothache or prolonged sensitivity to hot and cold.",
      whyItMatters:
        "A root canal relieves pain immediately and saves the natural structure of your tooth, avoiding the need for an extraction and implant.",
    },
    {
      title: "Braces & Orthodontics",
      summary: "Expert orthodontic care for a perfectly aligned smile.",
      helpsWith: "Crooked teeth, bite issues, gaps.",
      whoItIsFor:
        "Children, teens, and adults looking to improve their bite and smile aesthetics.",
      whyItMatters:
        "Straight teeth aren\u2019t just about looks \u2014 they are easier to clean and reduce the risk of jaw strain and abnormal tooth wear.",
    },
    {
      title: "Dental Implants",
      summary: "The closest thing to a natural tooth replacement.",
      helpsWith: "Missing teeth, difficulty chewing, bone loss prevention.",
      whoItIsFor:
        "Adults who have lost one or more teeth and want a permanent, stable solution.",
      whyItMatters:
        "Implants stimulate the jawbone just like natural roots, preventing bone loss and facial sagging while restoring full chewing function.",
    },
    {
      title: "Invisible Aligners",
      summary: "Discreet, removable trays to straighten teeth without wires.",
      helpsWith: "Mild to moderate crowding or spacing issues.",
      whoItIsFor:
        "Adults and responsible teens who want orthodontic treatment without the look of traditional metal braces.",
      whyItMatters:
        "Aligners are virtually invisible, easy to clean, and allow you to eat whatever you want without restrictions.",
    },
    {
      title: "Gum Care & Periodontics",
      summary: "Targeted treatments for the foundation of your smile.",
      helpsWith: "Bleeding gums, receding gum lines, advanced periodontitis.",
      whoItIsFor:
        "Patients noticing blood while brushing, loose teeth, or chronic bad breath.",
      whyItMatters:
        "Healthy gums are essentially the soil for your teeth. Untreated gum disease is the leading cause of tooth loss in adults.",
    },
    {
      title: "Kids Dentistry",
      summary:
        "Gentle, fear-free dental care tailored specifically for children.",
      helpsWith: "Early cavity prevention, habit breaking, fluoride treatments.",
      whoItIsFor: "Infants (after first tooth), toddlers, and young teens.",
      whyItMatters:
        "Positive early experiences at the dentist set the stage for a lifetime of healthy dental habits without anxiety or fear.",
    },
  ],

  servicesPage: {
    heroHeading: "Comprehensive Dental Care",
    heroDescription:
      "From routine checkups to complete smile restorations, we offer everything your family needs under one thoroughly sterilized roof.",
  },

  testimonials: [
    {
      name: "Priya Sharma",
      text: "Dr. Richa is so compassionate and kind. I was nervous about my treatment but she made me feel completely at ease. The clinic is spotless and very professional.",
      treatment: "Teeth Cleaning",
      stars: 5,
    },
    {
      name: "Rahul Verma",
      text: "Got braces from Dr. Sachin Bansal. Excellent results with my teeth alignment. He is highly skilled and explains every step clearly. Highly recommend!",
      treatment: "Braces & Orthodontics",
      stars: 5,
    },
    {
      name: "Anjali Desai",
      text: "The team at City Light Dental Care is truly professional. The experience was joyful and completely pain-free. Will definitely be coming back!",
      treatment: "Root Canal",
      stars: 5,
    },
  ],

  faqs: [
    {
      question: "Do I need an appointment before visiting?",
      answer:
        "While we do accept walk-ins for dental emergencies, we highly recommend booking an appointment to ensure you don\u2019t have to wait and our doctors can dedicate ample time to your consultation.",
    },
    {
      question: "Is root canal treatment painful?",
      answer:
        "Not at all. With modern anesthetics and advanced techniques, a root canal feels no different than getting a standard filling. Our priority is your absolute comfort throughout the procedure.",
    },
    {
      question: "Do you treat kids?",
      answer:
        "Yes! We specialize in pediatric dentistry and strive to make every child\u2019s visit fun, gentle, and completely fear-free.",
    },
    {
      question: "Do you offer aligners and braces?",
      answer:
        "Absolutely. Dr. Sachin Bansal is an orthodontic expert \u2014 we offer traditional metal and ceramic braces as well as clear, invisible aligners for both teens and adults.",
    },
    {
      question: "How often should I get teeth cleaning?",
      answer:
        "For most people, a professional cleaning and check-up every 6 months is ideal to prevent plaque buildup, cavities, and gum disease.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment easily by clicking the \u2018Book Appointment\u2019 button on our website, calling us directly, or sending a quick message on WhatsApp.",
    },
  ],

  aboutPage: {
    heroTagline: "Our Story & Values",
    heroHeading: "A Better Kind of Dental Care",
    heroDescription:
      "At City Light Dental Care, we believe dentistry shouldn\u2019t feel intimidating. We\u2019ve built a practice rooted in transparency, advanced hygiene protocols, and a genuine commitment to your comfort.",
    storyHeading: "Rooted in Greater Noida.\nDriven by Excellence.",
    storyParagraphs: [
      "When we first opened our doors at Alpha Plaza, Alpha 1, we had one simple goal: to change how people genuinely feel about going to the dentist. We knew that fear of pain and lack of transparency were keeping families away from the care they deserved.",
      "Today, we are incredibly proud to be the trusted dental home for hundreds of local families in Greater Noida. From toddlers having their first tooth looked at, to adults receiving complete smile transformations, our team is equipped to handle every generation under one roof.",
      "We invest heavily in the latest dental technology \u2014 not just because it\u2019s modern, but because it makes treatments faster, safer, and entirely painless for you.",
    ],
    storyImage: "/images/reception.jpg",
    storyImageAlt:
      "Modern, clean, and welcoming reception area at City Light Dental Care",
    philosophyHeading: "The Pillars of Our Practice",
    philosophyDescription:
      "Everything we do is built upon these four core values to ensure you receive world-class care localized for your convenience.",
    pillars: [
      {
        iconName: "Users",
        title: "Family-First Care",
        description:
          "We adapt our treatments and bedside manner to suit every single generation with patience and warmth.",
      },
      {
        iconName: "ShieldCheck",
        title: "Absolute Hygiene",
        description:
          "Our sterilization protocols comfortably exceed international medical standards. Your safety is guaranteed.",
      },
      {
        iconName: "Heart",
        title: "Painless Promise",
        description:
          "By utilizing modern anesthetics and gentle techniques, we ensure your time in the chair is completely relaxed.",
      },
      {
        iconName: "Lightbulb",
        title: "Clear Honesty",
        description:
          "We show you digital x-rays so you see what we see. No hidden fees, no unnecessary or rushed treatments.",
      },
    ],
    firstVisitTagline: "Patient Journey",
    firstVisitHeading: "What to Expect on Your First Visit",
    firstVisitIntro:
      "We know that visiting a new clinic can be daunting. From the moment you step through our doors, our priority is removing all guesswork so you can focus entirely on your health.",
    firstVisitSteps: [
      {
        title: "Warm Welcome & Intake",
        description:
          "You\u2019ll be greeted with a smile, offered a comfortable seat, and efficiently guided through your brief new-patient medical history forms.",
      },
      {
        title: "Detailed Consultation",
        description:
          "You\u2019ll meet your doctor for an unhurried conversation about your dental goals, followed by a thorough, gentle digital examination.",
      },
      {
        title: "Transparent Plan",
        description:
          "If treatment is needed, we will provide a clear, easy-to-understand plan outlining options, timelines, and exact pricing upfront. No surprises.",
      },
    ],
  },

  bookPage: {
    sidebarTagline: "Book Appointment",
    sidebarHeading: "Prioritizing Your\nTime & Comfort",
    sidebarDescription:
      "Requesting an appointment is completely stress-free. We will swiftly review your preferences and personally call you to firmly confirm your slot.",
    confirmationHeading: "Request Received!",
    confirmationMessage:
      "Thank you for reaching out. A member of our team will contact you shortly to confirm your exact appointment time.",
    treatmentOptions: [
      { value: "", label: "General Checkup" },
      { value: "cleaning", label: "Teeth Cleaning" },
      { value: "pain", label: "Toothache / Root Canal" },
      { value: "braces", label: "Braces / Aligners" },
      { value: "implants", label: "Implants / Missing Tooth" },
      { value: "kids", label: "Kids Dentistry" },
      { value: "other", label: "Other" },
    ],
    timeSlots: [
      { value: "morning", label: "Morning (9 AM - 12 PM)" },
      { value: "afternoon", label: "Afternoon (12 PM - 4 PM)" },
      { value: "evening", label: "Evening (4 PM - 8 PM)" },
    ],
  },

  contactPage: {
    heroHeading: "We\u2019d Love to Hear From You",
    heroDescription:
      "Whether you have a question about a treatment, need help finding the clinic, or want to say hello, our team is always ready to assist.",
  },

  gallery: [
    { src: "/images/reception.jpg", alt: "Modern, welcoming reception area at City Light Dental Care" },
    { src: "/images/treatment.jpg", alt: "Clean, state-of-the-art dental treatment room" },
    { src: "/images/tools.jpg", alt: "Sterilized, modern dental equipment ready for use" },
    { src: "/images/consultation-room.jpg", alt: "Comfortable consultation room for discussion" },
  ],

  beforeAfter: {
    sectionTagline: "Real Results",
    sectionHeading: "Before & After",
    sectionDescription: "See the transformative power of modern, expert dental care.",
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    caption: "Drag the slider to compare before and after. Case: Complete Smile Makeover.",
  },

  trustStrip: [
    { iconName: "HeartHandshake", label: "Gentle Care" },
    { iconName: "Microscope", label: "Modern Equipment" },
    { iconName: "CalendarDays", label: "Easy Appointments" },
    { iconName: "Users", label: "Trusted by Local Families" },
  ],

  whyChooseUs: {
    sectionTagline: "Why Us",
    sectionHeading: "Why Families Choose Us",
    image: "/images/consultation.jpg",
    imageAlt: "Dentist explaining treatment plan to a comfortable patient at City Light Dental Care",
    reasons: [
      { iconName: "UserCheck", title: "Experienced Professionals", description: "Our dentists bring years of clinical expertise and continued education in modern techniques." },
      { iconName: "Heart", title: "Comfort-Focused Care", description: "We prioritize your comfort at every step \u2014 from the waiting room to the chair." },
      { iconName: "Droplets", title: "Hygiene-First Environment", description: "International-grade sterilization protocols and a spotlessly clean clinic, every time." },
      { iconName: "ClipboardList", title: "Clear Treatment Guidance", description: "No jargon, no pressure. We explain every option so you can decide with confidence." },
      { iconName: "Monitor", title: "Modern Technology", description: "Digital X-rays, advanced tools, and the latest techniques for faster, better results." },
      { iconName: "Users", title: "Family-Friendly", description: "From toddlers to grandparents, our clinic is designed to welcome every age group." },
    ],
  },

  appointmentCTA: {
    heading: "Take the First Step Toward a Healthier Smile",
    description:
      "Whether you need a routine cleaning or specialized emergency care, our dedicated team is here to ensure your visit is surprisingly comfortable.",
    phoneDisplayText: "Call 99990 44511",
    badges: ["Gladly Accepting New Families", "Walk-ins & Emergencies Welcome"],
  },

  footer: {
    tagline:
      "Your family\u2019s trusted dental care partner in Greater Noida. Modern treatments, gentle hands, and sincere smiles in a spotless environment.",
    servicesList: [
      "Teeth Cleaning & Prevention",
      "Painless Root Canals",
      "Braces & Orthodontics",
      "Dental Implants",
      "Invisible Aligners",
      "Advanced Gum Care",
      "Gentle Kids Dentistry",
    ],
  },

  email: {
    clinicName: "City Light Dental Care",
    senderName: "City Light Dental Care",
    recipientEmail: "zerotozone08@gmail.com",
  },
};

export default cityLight;
