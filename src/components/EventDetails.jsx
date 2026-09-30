import React from "react";
import { Ticket, Calendar, CalendarDays, MapPin, Building2, Clock } from "lucide-react";
import { formatEventDate } from "../utils/date";

export default function EventDetails({ eventData }) {
  const eventName = eventData?.event_name || "BMO 150th Week Celebration";
  const location = eventData?.location || "Kumbakonam, Tamil Nadu";
  const rawDate = eventData?.event_date || "2026-10-13";
  const venue = eventData?.venue;
  const time = eventData?.event_time;

  const { fullDate, weekday } = formatEventDate(rawDate);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-sm space-y-4 text-left">
      <h3 className="text-xs sm:text-sm font-bold text-[#032B66] uppercase tracking-wider mb-2">
        EVENT DETAILS
      </h3>

      <div className="space-y-3.5">
        {/* Event */}
        <div className="flex items-start gap-3">
          <Ticket className="w-4 h-4 text-[#0757C9] shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] text-[#667085] block">Event</span>
            <span className="text-xs sm:text-sm font-semibold text-[#1F2937]">
              {eventName}
            </span>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start gap-3">
          <Calendar className="w-4 h-4 text-[#0757C9] shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] text-[#667085] block">Date</span>
            <span className="text-xs sm:text-sm font-semibold text-[#1F2937]">
              {fullDate}
            </span>
          </div>
        </div>

        {/* Day */}
        <div className="flex items-start gap-3">
          <CalendarDays className="w-4 h-4 text-[#0757C9] shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] text-[#667085] block">Day</span>
            <span className="text-xs sm:text-sm font-semibold text-[#1F2937]">
              {weekday}
            </span>
          </div>
        </div>

        {/* Optional Time - only displayed if actual value is present */}
        {time && (
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#0757C9] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-[#667085] block">Time</span>
              <span className="text-xs sm:text-sm font-semibold text-[#1F2937]">
                {time}
              </span>
            </div>
          </div>
        )}

        {/* Optional Venue - only displayed if actual value is present */}
        {venue && (
          <div className="flex items-start gap-3">
            <Building2 className="w-4 h-4 text-[#0757C9] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] text-[#667085] block">Venue</span>
              <span className="text-xs sm:text-sm font-semibold text-[#1F2937]">
                {venue}
              </span>
            </div>
          </div>
        )}

        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#0757C9] shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] text-[#667085] block">Location</span>
            <span className="text-xs sm:text-sm font-semibold text-[#1F2937]">
              {location}
            </span>
          </div>
        </div>

        {/* Organized By */}
        <div className="flex items-start gap-3">
          <Building2 className="w-4 h-4 text-[#0757C9] shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] text-[#667085] block">Organized By</span>
            <span className="text-xs sm:text-sm font-semibold text-[#1F2937]">
              Business Meet Organization
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
