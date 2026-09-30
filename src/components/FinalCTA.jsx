import React from "react";
import { ArrowRight } from "lucide-react";
import { formatEventDate } from "../utils/date";
import { images } from "../config/images";

export default function FinalCTA({ eventData }) {
  const rawDate = eventData?.event_date || "2026-10-13";
  const location = "KUMBAKONAM";
  const { fullDateUpper } = formatEventDate(rawDate);

  return (
    <section
      className="relative py-20 md:py-28 bg-[#032B66] text-white overflow-hidden text-center"
      aria-label="Final Call to Action"
    >
      {/* Background with conference silhouettes overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={images.ctaBg || images.hero}
          alt="BMO Grand Celebration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#032B66] via-[#032B66]/95 to-[#0757C9]/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight font-heading">
          LET&apos;S CELEBRATE<br />
          150 WEEKS<br />
          TOGETHER.
        </h2>

        <p className="text-xs sm:text-sm font-bold tracking-widest text-blue-200 uppercase">
          {fullDateUpper} &bull; {location}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#celebration"
            className="inline-flex items-center gap-2 bg-white text-[#0757C9] hover:bg-[#EEF6FF] font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-lg transition-all"
          >
            <span>Join the Celebration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#0757C9] font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full border border-white/30 backdrop-blur-sm transition-all"
          >
            <span>Contact BMO</span>
          </a>
        </div>
      </div>
    </section>
  );
}
