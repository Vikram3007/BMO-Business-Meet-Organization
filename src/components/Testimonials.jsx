import React from "react";
import { Quote } from "lucide-react";

export default function Testimonials({ testimonials, loading, error }) {
  // Neutral sample placeholder stories (easily replaceable via backend when official member quotes arrive)
  const defaultTestimonials = [
    {
      id: 1,
      name: "Sample Member 01",
      designation: "Business Owner",
      business_name: "Local Enterprise",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      quote: "BMO provided a structured, ethical platform to share leads and learn best practices across 150 weeks of continuous collaboration.",
    },
    {
      id: 2,
      name: "Sample Member 02",
      designation: "Managing Director",
      business_name: "Regional Chapter",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      quote: "A great platform to learn, share and grow together with like-minded business owners committed to ethical business.",
    },
    {
      id: 3,
      name: "Sample Member 03",
      designation: "Founder & Partner",
      business_name: "Delta Commerce",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      quote: "The weekly meetings deliver real business value, trusted referrals, and lasting professional relationships.",
    },
  ];

  const items = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FFFFFF] border-t border-[#E5E7EB]" aria-label="Member Stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#032B66] uppercase tracking-wide font-heading">
            MEMBER STORIES
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Real experiences from our BMO family.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E7EB] shadow-sm hover-lift flex flex-col justify-between transition-all"
            >
              <div>
                {/* Avatar and Blue Quote Mark */}
                <div className="flex items-center justify-between mb-5">
                  <img
                    src={item.photo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                  />
                  <Quote className="w-6 h-6 text-[#0757C9] fill-[#0757C9]" />
                </div>

                <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1F2937]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#667085] mt-0.5">
                    {item.designation}
                    {item.business_name ? ` • ${item.business_name}` : ""}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#0757C9] bg-[#EEF6FF] px-2 py-0.5 rounded">
                  Sample
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
