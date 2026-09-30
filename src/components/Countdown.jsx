import React, { useState, useEffect } from "react";

export default function Countdown({ targetDateString = "2026-10-13" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    // Parse target date dynamically
    let targetTime;
    if (targetDateString && targetDateString.includes("-")) {
      const parts = targetDateString.split("-").map(Number);
      targetTime = new Date(parts[0], parts[1] - 1, parts[2], 8, 0, 0).getTime();
    } else {
      targetTime = new Date(targetDateString || "2026-10-13T08:00:00").getTime();
    }

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateString]);

  if (timeLeft.isExpired) {
    return (
      <div className="bg-white text-[#032B66] p-5 sm:p-6 rounded-2xl text-center shadow-sm border border-[#E5E7EB]">
        <h4 className="text-base font-bold uppercase tracking-wider text-[#0757C9]">
          THE CELEBRATION HAS BEGUN
        </h4>
        <p className="text-xs text-[#667085] mt-1">
          Welcome to the BMO 150th Week Gala Celebration!
        </p>
      </div>
    );
  }

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-white text-[#1F2937] p-5 sm:p-6 rounded-2xl shadow-sm border border-[#E5E7EB]">
      <span className="block text-xs font-bold tracking-wider uppercase text-[#032B66] mb-4 text-center">
        THE CELEBRATION BEGINS IN
      </span>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-[#1F2937] tracking-tight leading-none">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#667085] mt-1 font-semibold uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
