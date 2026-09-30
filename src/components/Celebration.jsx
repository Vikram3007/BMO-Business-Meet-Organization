import React from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Countdown from "./Countdown";
import EventDetails from "./EventDetails";
import BmoLogo from "./BmoLogo";
import { formatEventDate } from "../utils/date";

export default function Celebration({ eventData, loading, error }) {
  const rawDate = eventData?.event_date || "2026-10-13";
  const location = eventData?.location || "Kumbakonam, Tamil Nadu";
  const { fullDateUpper, weekday } = formatEventDate(rawDate);

  return (
    <section id="celebration" className="py-16 md:py-24 bg-[#FFFFFF]" aria-label="BMO Celebration">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Heading, description, date & location badges, button */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0757C9]">
              THE CELEBRATION
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#032B66] leading-tight font-heading">
              BMO 150th Week Celebration
            </h2>

            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Join us for a special milestone as we celebrate 150 weeks of trust, connections and growth with our BMO family.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EEF6FF] flex items-center justify-center text-[#0757C9]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#1F2937]">{fullDateUpper}</span>
                  <span className="block text-[11px] text-[#667085]">{weekday}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EEF6FF] flex items-center justify-center text-[#0757C9]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#1F2937]">KUMBAKONAM</span>
                  <span className="block text-[11px] text-[#667085]">Tamil Nadu</span>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0757C9] hover:bg-[#063B88] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all"
              >
                <span>Be Part of the Celebration</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center Column: Official Poster Card (matching center card in user reference) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl bg-[#032B66] text-white border border-[#E5E7EB] relative flex flex-col justify-between p-6 aspect-[9/13]">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0757C9]/60 via-[#032B66]/90 to-[#032B66] pointer-events-none" />
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1677FF_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Poster Top */}
              <div className="relative z-10 text-center flex justify-center">
                <BmoLogo variant="white" className="h-10 w-auto" />
              </div>

              {/* Poster Center Big 150 */}
              <div className="relative z-10 text-center my-auto">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-7xl font-bold text-white tracking-tighter leading-none font-heading">
                    150
                  </span>
                  <span className="text-2xl font-bold text-white font-heading">TH</span>
                </div>
                <span className="text-sm font-bold tracking-widest text-white uppercase block mt-1 font-heading">
                  WEEK CELEBRATION
                </span>
              </div>

              {/* Poster Bottom Audience Silhouette / Detail */}
              <div className="relative z-10 pt-4 border-t border-white/20 text-center">
                <span className="text-[10px] text-blue-200 block uppercase tracking-wider">
                  Kumbakonam &bull; Tamil Nadu
                </span>
                <span className="text-[11px] font-bold text-white block mt-0.5">
                  Building Connections That Matter
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Countdown Card & Event Details Card */}
          <div className="lg:col-span-4 space-y-5">
            <Countdown targetDateString={rawDate} />
            <EventDetails eventData={eventData} />
          </div>

        </div>
      </div>
    </section>
  );
}
