import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { submitContactForm } from "../services/api";
import InternationalPhoneInput from "./InternationalPhoneInput";

export default function Contact({ settings }) {
  const [formData, setFormData] = useState({
    full_name: "",
    business_name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const phone = settings?.phone || "+91 98765 43210";
  const email = settings?.email || "info@bmokumbakonam.org";
  const location = settings?.location || "Kumbakonam, Tamil Nadu";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.full_name || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await submitContactForm(formData);
      if (res && res.success) {
        setSubmitStatus("success");
        setStatusMessage(res.message || "Thank you! Your message has been received.");
        setFormData({
          full_name: "",
          business_name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(res?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-[#F7FAFD] border-t border-[#E5E7EB]"
      aria-label="Contact BMO"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Premium Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0757C9] block">
                CONTACT BMO
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#032B66] uppercase tracking-tight mt-1.5 leading-snug font-heading">
                LET&apos;S CONNECT &amp;<br />
                GROW TOGETHER.
              </h2>
              <p className="text-xs sm:text-sm text-[#667085] mt-2.5 leading-relaxed max-w-md">
                Have questions about the 150th Week Celebration or wish to connect with BMO leaders? Reach out directly or send us a message.
              </p>
            </div>

            {/* Organized Interactive Contact Cards */}
            <div className="space-y-3 pt-1">
              
              {/* Location Card */}
              <div className="group bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-xs hover:border-[#0757C9]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] text-[#0757C9] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#0757C9] group-hover:text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085] block">
                    Event &amp; Chapter Location
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#1F2937] mt-0.5 group-hover:text-[#0757C9] transition-colors">
                    {location}
                  </p>
                  <span className="text-[11px] text-[#667085] block mt-0.5">
                    Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Phone Card */}
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="group bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-xs hover:border-[#0757C9]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 block"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] text-[#0757C9] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#0757C9] group-hover:text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085] block">
                      Phone Number
                    </span>
                    <span className="text-[10px] font-semibold text-[#0757C9] bg-[#EEF6FF] px-2 py-0.5 rounded-full">
                      Direct Desk
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#1F2937] mt-0.5 group-hover:text-[#0757C9] transition-colors">
                    {phone}
                  </p>
                  <span className="text-[11px] text-[#667085] block mt-0.5">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${email}`}
                className="group bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-xs hover:border-[#0757C9]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 block"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] text-[#0757C9] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#0757C9] group-hover:text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085] block">
                    Email Address
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#1F2937] mt-0.5 truncate group-hover:text-[#0757C9] transition-colors">
                    {email}
                  </p>
                  <span className="text-[11px] text-[#667085] block mt-0.5">
                    Official queries &amp; RSVP confirmations
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-xs hover:border-[#0757C9]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 block"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] text-[#0757C9] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#0757C9] group-hover:text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085] block">
                      WhatsApp Support
                    </span>
                    <span className="text-[10px] font-semibold text-[#0757C9] bg-[#EEF6FF] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0757C9] animate-pulse" />
                      Quick Chat
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#0757C9] mt-0.5 flex items-center gap-1">
                    <span>Chat with us on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </p>
                  <span className="text-[11px] text-[#667085] block mt-0.5">
                    Instant response for meeting delegates
                  </span>
                </div>
              </a>

            </div>

            {/* Quick Assurance Strip */}
            <div className="pt-1 flex items-center gap-2 text-xs text-[#667085]">
              <Clock className="w-4 h-4 text-[#0757C9] shrink-0" />
              <span>We typically respond to inquiries within 2 to 4 business hours.</span>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 lg:p-9 rounded-2xl shadow-sm border border-[#E5E7EB] text-left">
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0757C9] block">
                  ONLINE INQUIRY
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#032B66] mt-0.5">
                  Send Us a Message
                </h3>
                <p className="text-xs text-[#667085] mt-1">
                  Fill in your details below and our team will get in touch with you shortly.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-5 p-3.5 rounded-xl bg-[#EEF6FF] text-[#0757C9] border border-[#0757C9]/30 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0757C9] shrink-0" />
                  <span className="font-medium">{statusMessage}</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-5 p-3.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-300 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-slate-600 shrink-0" />
                  <span className="font-medium">{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 2 Column on Tablet/Desktop for compact, modern balance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#1F2937] uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#0757C9]">*</span>
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh S."
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E7EB] bg-[#F7FAFD]/50 text-xs sm:text-sm text-[#1F2937] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#0757C9] focus:ring-3 focus:ring-[#0757C9]/10 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#1F2937] uppercase tracking-wider mb-1.5">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleChange}
                      placeholder="e.g. Delta Enterprises"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E7EB] bg-[#F7FAFD]/50 text-xs sm:text-sm text-[#1F2937] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#0757C9] focus:ring-3 focus:ring-[#0757C9]/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#1F2937] uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-[#0757C9]">*</span>
                    </label>
                    <InternationalPhoneInput
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#1F2937] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-[#0757C9]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E7EB] bg-[#F7FAFD]/50 text-xs sm:text-sm text-[#1F2937] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#0757C9] focus:ring-3 focus:ring-[#0757C9]/10 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#1F2937] uppercase tracking-wider mb-1.5">
                    Your Message <span className="text-[#0757C9]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you regarding the BMO 150th Week Celebration?"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E7EB] bg-[#F7FAFD]/50 text-xs sm:text-sm text-[#1F2937] placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#0757C9] focus:ring-3 focus:ring-[#0757C9]/10 transition-all duration-200 resize-y"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#0757C9] hover:bg-[#063B88] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#0757C9]/20 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#667085]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0757C9]" />
                    <span>Your information is strictly protected and will not be shared.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
