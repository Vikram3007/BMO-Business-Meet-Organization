import React from "react";
import { ArrowRight } from "lucide-react";

export default function Journey({ journeyData, loading, error }) {
  const defaultMilestones = [
    { week_number: "Week 1", title: "The Beginning", description: "" },
    { week_number: "Week 25", title: "Growing Community", description: "" },
    { week_number: "Week 50", title: "More Opportunities", description: "" },
    { week_number: "Week 100", title: "Stronger Together", description: "" },
    { week_number: "Week 150", title: "A Milestone to Celebrate", description: "" },
  ];

  const milestones = journeyData && journeyData.length > 0 ? journeyData : defaultMilestones;

  return (
    <section
      id="journey"
      className="py-16 md:py-24 bg-[#032B66] text-white overflow-hidden relative"
      aria-label="150 Week Journey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big 150 & Text */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200">
              THE CELEBRATION
            </span>

            <div className="flex items-baseline gap-4 flex-wrap">
              <span className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tighter font-heading">
                150
              </span>
              <h2 className="flex flex-col font-heading">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight leading-tight font-heading">
                  WEEKS
                </span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase tracking-tight leading-tight font-heading">
                  OF A REMARKABLE JOURNEY
                </span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-blue-100 max-w-lg leading-relaxed pt-2">
              From ideas to opportunities, from meetings to meaningful partnerships — 150 weeks of continuous growth.
            </p>

            <div className="pt-2">
              <a
                href="#celebration"
                className="inline-flex items-center gap-2 bg-white text-[#0757C9] hover:bg-[#EEF6FF] font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-all"
              >
                <span>Our Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Vertical Timeline with round dots matching reference */}
          <div className="lg:col-span-5">
            <div className="relative pl-6 sm:pl-8 border-l border-white/30 space-y-6 my-2">
              {milestones.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline circle node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-white ring-4 ring-[#032B66] shadow-sm" />

                  <div className="text-left">
                    <span className="block text-xs font-bold uppercase tracking-wider text-blue-200">
                      {item.week_number}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-blue-100/80 mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
