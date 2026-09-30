import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureStrip from "../components/FeatureStrip";
import AboutBMO from "../components/AboutBMO";
import CoreValues from "../components/CoreValues";
import Journey from "../components/Journey";
import Celebration from "../components/Celebration";
import WhatToExpect from "../components/WhatToExpect";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

import {
  getEvent,
  getSettings,
  getJourney,
  getTestimonials,
  getGallery,
} from "../services/api";

export default function Home() {
  const [eventData, setEventData] = useState(null);
  const [settings, setSettings] = useState(null);
  const [journeyData, setJourneyData] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [galleryData, setGalleryData] = useState(null);

  const [loadingEvent, setLoadingEvent] = useState(true);
  const [loadingJourney, setLoadingJourney] = useState(true);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const [loadingGallery, setLoadingGallery] = useState(true);

  const [eventError, setEventError] = useState(null);
  const [journeyError, setJourneyError] = useState(null);
  const [testimonialsError, setTestimonialsError] = useState(null);
  const [galleryError, setGalleryError] = useState(null);

  useEffect(() => {
    // 1. Fetch Event & General Settings
    async function loadEventAndSettings() {
      setLoadingEvent(true);
      const res = await getEvent();
      if (res && res.success && res.data) {
        setEventData(res.data);
      } else {
        setEventError(res?.message || "Unable to load event details");
      }

      const setRes = await getSettings();
      if (setRes && setRes.success && setRes.data) {
        setSettings(setRes.data);
      }
      setLoadingEvent(false);
    }

    // 2. Fetch Journey Milestones
    async function loadJourney() {
      setLoadingJourney(true);
      const res = await getJourney();
      if (res && res.success && res.data) {
        setJourneyData(res.data);
      } else {
        setJourneyError(res?.message || "Milestones unavailable");
      }
      setLoadingJourney(false);
    }

    // 3. Fetch Testimonials
    async function loadTestimonials() {
      setLoadingTestimonials(true);
      const res = await getTestimonials();
      if (res && res.success && res.data) {
        setTestimonials(res.data);
      } else {
        setTestimonialsError(res?.message || "Testimonials unavailable");
      }
      setLoadingTestimonials(false);
    }

    // 4. Fetch Gallery
    async function loadGallery() {
      setLoadingGallery(true);
      const res = await getGallery();
      if (res && res.success && res.data) {
        setGalleryData(res.data);
      } else {
        setGalleryError(res?.message || "Gallery unavailable");
      }
      setLoadingGallery(false);
    }

    loadEventAndSettings();
    loadJourney();
    loadTestimonials();
    loadGallery();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFD] text-[#1F2937]">
      {/* 1. Header */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero eventData={eventData} />

        {/* 3. Feature Strip */}
        <FeatureStrip />

        {/* 4. About BMO */}
        <AboutBMO />

        {/* 5. Core Values */}
        <CoreValues />

        {/* 6. 150 Week Journey */}
        <Journey
          journeyData={journeyData}
          loading={loadingJourney}
          error={journeyError}
        />

        {/* 7, 8, 9. Celebration / Countdown / Event Details */}
        <Celebration
          eventData={eventData}
          loading={loadingEvent}
          error={eventError}
        />

        {/* 10. What To Expect */}
        <WhatToExpect />

        {/* 11. Member Stories / Testimonials */}
        <Testimonials
          testimonials={testimonials}
          loading={loadingTestimonials}
          error={testimonialsError}
        />

        {/* 12. Memories / Gallery */}
        <Gallery
          galleryData={galleryData}
          loading={loadingGallery}
          error={galleryError}
        />

        {/* 13. Contact BMO */}
        <Contact settings={settings || eventData} />

        {/* 14. Final CTA */}
        <FinalCTA eventData={eventData} />
      </main>

      {/* 15. Footer */}
      <Footer settings={settings || eventData} />
    </div>
  );
}
