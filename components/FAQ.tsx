"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer: "While we do accept walk-ins for dental emergencies, we highly recommend booking an appointment to ensure you don't have to wait and our doctors can dedicate ample time to your consultation.",
  },
  {
    question: "Is root canal treatment painful?",
    answer: "Not at all. With modern anesthetics and advanced techniques, a root canal feels no different than getting a standard filling. Our priority is your absolute comfort throughout the procedure.",
  },
  {
    question: "Do you treat kids?",
    answer: "Yes! We specialize in pediatric dentistry and strive to make every child's visit fun, gentle, and completely fear-free.",
  },
  {
    question: "Do you offer aligners and braces?",
    answer: "Absolutely. We offer traditional metal and ceramic braces as well as clear, invisible aligners for both teens and adults looking to perfect their smile.",
  },
  {
    question: "How often should I get teeth cleaning?",
    answer: "For most people, a professional cleaning and check-up every 6 months is ideal to prevent plaque buildup, cavities, and gum disease.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment easily by clicking the 'Book Appointment' button on our website, calling us directly, or sending a quick message on WhatsApp.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-offwhite">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-2">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            What Patients Ask Us
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-colors duration-300 ${
                openIndex === index ? "border-teal" : "border-border/60 hover:border-border"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-xl"
              >
                <span className={`font-semibold text-base pr-8 ${
                  openIndex === index ? "text-teal" : "text-navy"
                }`}>
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-teal transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-sm text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
