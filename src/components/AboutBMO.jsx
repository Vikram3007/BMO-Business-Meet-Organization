import React from "react";
import { ArrowRight, ShieldCheck, Repeat, TrendingUp } from "lucide-react";
import { images } from "../config/images";

export default function AboutBMO() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FFFFFF]" aria-label="About BMO">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0757C9]">
              ABOUT BMO
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#032B66] leading-tight tracking-tight font-heading">
              More Than Meetings.<br />
              A Community Built<br />
              on Trust.
            </h2>

            <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-xl">
              BMO brings local business owners together regularly to build meaningful relationships, exchange referrals, share experiences, and create opportunities for one another.
            </p>

            <div className="pt-2">
              <a
                href="#celebration"
                className="inline-flex items-center gap-2 bg-[#0757C9] hover:bg-[#063B88] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Know More About BMO</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Photo + Floating Pillars Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB]">
              <img
                src={images.about}
                alt="Business owners in discussion"
                className="w-full h-auto aspect-[16/10] object-cover"
              />
            </div>

            {/* Overlaid Card in bottom-right matching reference mockup */}
            <div className="mt-4 sm:-mt-16 sm:ml-auto sm:mr-4 relative z-10 bg-white p-5 rounded-2xl shadow-xl border border-[#E5E7EB] space-y-3.5 max-w-sm">
              {/* Trust */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EEF6FF] flex items-center justify-center shrink-0 text-[#0757C9] mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1F2937]">Trust</h4>
                  <p className="text-[11px] text-[#667085]">Relationships beyond business</p>
                </div>
              </div>

              {/* Referrals */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EEF6FF] flex items-center justify-center shrink-0 text-[#0757C9] mt-0.5">
                  <Repeat className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1F2937]">Referrals</h4>
                  <p className="text-[11px] text-[#667085]">Opportunities within community</p>
                </div>
              </div>

              {/* Growth */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EEF6FF] flex items-center justify-center shrink-0 text-[#0757C9] mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1F2937]">Growth</h4>
                  <p className="text-[11px] text-[#667085]">Businesses growing together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
