import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import BmoLogo from "./BmoLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Event", href: "#celebration" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#032B66]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-[#032B66] py-3.5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official BMO Logo */}
          <a
            href="#hero"
            className="flex items-center focus:outline-none group cursor-pointer"
            aria-label="BMO - Business Meet Organization"
          >
            <BmoLogo variant="white" />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/85 hover:text-white font-medium text-[13px] tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#celebration"
              className="inline-flex items-center gap-2 bg-white text-[#0757C9] hover:bg-[#EEF6FF] font-semibold text-xs tracking-wider px-5 py-2 rounded-full shadow-sm hover:shadow transition-all group"
            >
              <span>Join the Celebration</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#032B66] border-t border-white/10 px-5 pt-4 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-white/90 hover:text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#celebration"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-white text-[#0757C9] font-bold text-xs tracking-wider px-5 py-3 rounded-full shadow-md"
            >
              <span>Join the Celebration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
