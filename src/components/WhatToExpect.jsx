import React from "react";
import { Award, Tv, FileText, Handshake, Trophy } from "lucide-react";

export default function WhatToExpect() {
  const agendaItems = [
    {
      title: "Welcome & Networking",
      icon: Award,
    },
    {
      title: "BMO Journey Highlights",
      icon: Tv,
    },
    {
      title: "Member Stories",
      icon: FileText,
    },
    {
      title: "Business Connections",
      icon: Handshake,
    },
    {
      title: "Celebration & Dinner",
      icon: Trophy,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F7FAFD] border-t border-[#E5E7EB]" aria-label="What to Expect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#032B66] uppercase tracking-wide font-heading">
            WHAT TO EXPECT
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            A memorable evening with networking, inspiration and celebration.
          </p>
        </div>

        {/* 5 Cards Row matching reference mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {agendaItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm hover-lift flex flex-col items-center text-center justify-center min-h-[150px] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEF6FF] flex items-center justify-center text-[#0757C9] mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#1F2937] leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
