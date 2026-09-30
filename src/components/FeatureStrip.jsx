import React from "react";
import { Users, Award, Repeat, TrendingUp } from "lucide-react";

export default function FeatureStrip() {
  const features = [
    {
      title: "Business Connections",
      icon: Users,
    },
    {
      title: "Knowledge Sharing",
      icon: Award,
    },
    {
      title: "Referral Opportunities",
      icon: Repeat,
    },
    {
      title: "Growth Together",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-[#032B66] text-white border-y border-white/10" aria-label="BMO Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0757C9] flex items-center justify-center shrink-0 text-white shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-white tracking-wide">
                  {feature.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
