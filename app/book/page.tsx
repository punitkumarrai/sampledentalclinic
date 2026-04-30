"use client";

import { useState } from "react";
import { Phone, MessageCircle, CheckCircle, Lock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function BookNowPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { business, bookPage } = siteConfig;
  const whatsappUrl = `https://wa.me/${business.whatsappNumber}`;
  const sidebarHeadingParts = bookPage.sidebarHeading.split("\n");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      treatment: formData.get("treatment"),
      date: formData.get("date"),
      time: formData.get("time"),
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit request. Please try again or call us.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-offwhite py-16 md:py-24 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-border/50 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side — Info / Reassurance */}
          <div className="bg-navy p-10 md:p-14 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <p className="text-teal-light font-semibold text-sm tracking-wider uppercase mb-3">
                {bookPage.sidebarTagline}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {sidebarHeadingParts.map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < sidebarHeadingParts.length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-white/80 leading-relaxed text-sm mb-10">
                {bookPage.sidebarDescription}
              </p>
            </div>

            <div className="space-y-6 border-t border-white/20 pt-8">
              <div className="flex items-center gap-4 text-sm font-medium">
                <Phone className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                <a href={`tel:${business.phone}`} className="hover:text-teal-light transition-colors">
                  {business.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium">
                <MessageCircle className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-light transition-colors">
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="p-10 md:p-14 md:w-3/5 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-up">
                <div className="w-16 h-16 bg-teal/10 text-teal rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">{bookPage.confirmationHeading}</h2>
                <p className="text-muted leading-relaxed">
                  {bookPage.confirmationMessage}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                >
                  Book another appointment →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-navy mb-6">Patient Details</h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-charcoal">Full Name <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-offwhite border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-charcoal transition-all"
                      placeholder="e.g. Rahul Verma"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-charcoal">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-offwhite border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-charcoal transition-all"
                      placeholder="+91 90000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="treatment" className="text-sm font-bold text-charcoal">Treatment Needed (if known)</label>
                  <select
                    id="treatment"
                    name="treatment"
                    className="w-full bg-offwhite border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-charcoal transition-all appearance-none"
                  >
                    {bookPage.treatmentOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pb-2">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-bold text-charcoal">Preferred Date <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="date"
                      id="date"
                      name="date"
                      className="w-full bg-offwhite border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-charcoal transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-bold text-charcoal">Preferred Time</label>
                    <select
                      id="time"
                      name="time"
                      className="w-full bg-offwhite border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-charcoal transition-all appearance-none"
                    >
                      {bookPage.timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>{slot.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {errorMsg && (
                  <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-teal-dark transition-all shadow-md hover:shadow-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                       <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Request Appointment"}
                </button>

                <p className="text-center text-xs text-muted mt-4 flex items-center justify-center gap-1.5">
                  <Lock className="w-4 h-4 text-teal shrink-0" strokeWidth={1.5} /> Your details are kept strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
