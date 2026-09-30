import React, { useState } from "react";
import { ArrowRight, Play, Calendar, MapPin, X } from "lucide-react";
import { formatEventDate } from "../utils/date";
import { images } from "../config/images";

export default function Hero({ eventData }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const rawDate = eventData?.event_date || "2026-10-13";
  const location = eventData?.location || "KUMBAKONAM, TAMIL NADU";

  const { fullDateUpper, weekdayUpper } = formatEventDate(rawDate);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#032B66]"
      aria-label="Hero - BMO 150th Week Celebration"
    >
      {/* Background Graphic & Conference Lighting Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero || images.heroBg}
          alt="BMO Business Gala Stage"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032B66] via-[#032B66]/90 to-[#0757C9]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/25 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content exactly matching reference image */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Brand Title */}
            <div>
              <span className="block font-black text-2xl tracking-tight text-white leading-none">
                BMO
              </span>
              <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-blue-200 mt-1">
                BUSINESS MEET ORGANIZATION
              </span>
            </div>

            {/* Giant 150th Week Celebration */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-none font-heading">
                  150
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight -translate-y-6 sm:-translate-y-8 font-heading">
                  TH
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase leading-none font-heading">
                WEEK CELEBRATION
              </h1>
            </div>

            {/* Sub-tagline */}
            <p className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-widest max-w-xl leading-relaxed">
              A COMMUNITY OF BUSINESS OWNERS BUILDING CONNECTIONS THAT MATTER.
            </p>

            {/* Two Information Blocks: Date & Location with crisp white icons */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-2">
              {/* Date Block */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white tracking-wide leading-tight">
                    {fullDateUpper}
                  </span>
                  <span className="block text-[11px] text-blue-200 uppercase font-medium tracking-wider">
                    {weekdayUpper}
                  </span>
                </div>
              </div>

              {/* Location Block */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white tracking-wide leading-tight uppercase">
                    KUMBAKONAM
                  </span>
                  <span className="block text-[11px] text-blue-200 uppercase font-medium tracking-wider">
                    TAMIL NADU
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#celebration"
                className="inline-flex items-center gap-2 bg-white text-[#0757C9] hover:bg-[#EEF6FF] font-bold text-xs sm:text-sm tracking-wider px-6 py-3 rounded-full shadow-lg transition-all"
              >
                <span>JOIN THE CELEBRATION</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#journey"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#0757C9] font-semibold text-xs sm:text-sm tracking-wider px-6 py-3 rounded-full border border-white/30 backdrop-blur-sm transition-all"
              >
                <span>WATCH OUR JOURNEY</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Keynote Stage Speaker photo with Watch Video circle (matching mockup) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Speaker at Podium Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] bg-[#063B88]">
                <img
                  src={images.heroFeatured}
                  alt="BMO Keynote Speaker on Stage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#032B66]/90 via-transparent to-transparent" />

                {/* Circular Watch Video trigger overlaid right on image */}
                <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-[#032B66]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 cursor-pointer hover:bg-[#032B66] transition-all"
                     onClick={() => setIsVideoModalOpen(true)}>
                  <div className="w-8 h-8 rounded-full bg-white text-[#0757C9] flex items-center justify-center shadow-md">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Watch Video
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#032B66] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
              <h3 className="font-bold text-sm sm:text-base">BMO 150th Week Journey Story</h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-lg text-white hover:bg-white/10"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
                title="BMO Journey Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
