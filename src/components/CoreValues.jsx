import React from "react";
import { Handshake, Network, Users, TrendingUp } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      num: "01",
      title: "BUILD TRUST",
      description: "Strong businesses begin with strong relationships.",
      icon: Handshake,
    },
    {
      num: "02",
      title: "EXCHANGE",
      description: "Share ideas, experiences and opportunities.",
      icon: Network,
    },
    {
      num: "03",
      title: "CONNECT",
      description: "Bring business owners together regularly.",
      icon: Users,
    },
    {
      num: "04",
      title: "GROW",
      description: "Help each other grow and succeed together.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F7FAFD] border-t border-[#E5E7EB]" aria-label="Our Core Values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#032B66] uppercase tracking-wide font-heading">
            OUR CORE VALUES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.num}
                className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm hover-lift flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-[#667085]">
                      {val.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] flex items-center justify-center text-[#0757C9]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#1F2937] mb-2">
                    {val.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
