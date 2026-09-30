import React, { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";

export default function Gallery({ galleryData, loading, error }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Events", "Meetings", "Members", "Videos"];

  // Placeholder presentation images (clearly treated as demo/placeholder until real BMO photos supplied)
  const defaultImages = [
    { id: 1, image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80", title: "Keynote Gala Meet", category: "Events" },
    { id: 2, image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80", title: "Morning Business Circle", category: "Meetings" },
    { id: 3, image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=500&q=80", title: "Networking Banquet", category: "Members" },
    { id: 4, image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80", title: "Chapter Strategy Session", category: "Meetings" },
    { id: 5, image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80", title: "Regional Business Forum", category: "Events" },
    { id: 6, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80", title: "Synergy Round Table", category: "Members" },
    { id: 7, image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80", title: "Member Lead Passing", category: "Meetings" },
    { id: 8, image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=500&q=80", title: "100th Week Milestone", category: "Events" },
    { id: 9, image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=80", title: "Leadership Address", category: "Videos" },
    { id: 10, image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80", title: "Growth Workshop", category: "Videos" },
  ];

  const items = galleryData && galleryData.length > 0 ? galleryData : defaultImages;

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter(
      (item) => item.category && item.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [items, activeFilter]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FFFFFF] border-t border-[#E5E7EB]" aria-label="Memories from our journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#032B66] uppercase tracking-wide font-heading">
              MEMORIES FROM OUR JOURNEY
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-1">
              Moments that make BMO special.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#0757C9] text-white shadow-sm"
                    : "bg-[#F7FAFD] text-[#667085] hover:text-[#1F2937] hover:bg-gray-200 border border-[#E5E7EB]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 2-row responsive photo grid (5 columns desktop, 3 columns tablet, 2 columns mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {filteredItems.slice(0, 10).map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm border border-gray-200 group relative"
            >
              <img
                src={item.image}
                alt={item.title || "BMO Event Memory"}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#032B66]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex items-end">
                <span className="text-[11px] font-semibold text-white truncate">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Photos Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0757C9] hover:bg-[#063B88] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm transition-all"
          >
            <span>View More Photos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
