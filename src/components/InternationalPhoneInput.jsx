import React, { useState, useRef, useEffect, useMemo } from "react";
import { ChevronDown, Search, Check, AlertCircle } from "lucide-react";
import { COUNTRIES, formatPhoneNumber, validatePhoneNumber } from "../data/countries";

/**
 * InternationalPhoneInput
 * Fully connected, accessible, worldwide country selector and phone input component.
 * Displays: [ 🇮🇳 India +91 ▼ ] [ Enter phone number ]
 */
export default function InternationalPhoneInput({
  value = "",
  onChange,
  onValidityChange,
  required = false,
  name = "phone",
  id = "phone",
}) {
  // Default to India (+91) or detect from initial value
  const [selectedCountry, setSelectedCountry] = useState(() => {
    if (value && typeof value === "string") {
      const matched = COUNTRIES.find((c) => value.startsWith(c.dialCode));
      if (matched) return matched;
    }
    return COUNTRIES[0]; // India
  });

  const [phoneNumber, setPhoneNumber] = useState(() => {
    if (value && typeof value === "string") {
      const dialCode = selectedCountry?.dialCode || "+91";
      if (value.startsWith(dialCode)) {
        return value.replace(dialCode, "").trim();
      }
      return value.replace(/^\+\d+\s*/, "").trim();
    }
    return "";
  });

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [touched, setTouched] = useState(false);

  const containerRef = useRef(null);
  const searchInputRef = useRef(null);
  const numberInputRef = useRef(null);

  // Synchronize with external value reset (e.g. on form submission)
  useEffect(() => {
    if (!value) {
      setPhoneNumber("");
      setTouched(false);
    }
  }, [value]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Filter countries based on search query
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return COUNTRIES;
    const q = searchQuery.toLowerCase().trim();
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.dialCode.includes(q)
    );
  }, [searchQuery]);

  // Validate phone digits
  const isValid = useMemo(() => {
    if (!phoneNumber) return false;
    return validatePhoneNumber(phoneNumber, selectedCountry);
  }, [phoneNumber, selectedCountry]);

  // Notify parent of validity changes
  useEffect(() => {
    if (onValidityChange) {
      onValidityChange(isValid);
    }
  }, [isValid, onValidityChange]);

  // Handle phone number input
  const handleNumberChange = (e) => {
    const rawVal = e.target.value;
    const digitsOnly = rawVal.replace(/\D/g, "");
    
    // Enforce country max digits with a small safety margin
    const maxDigits = (selectedCountry.maxDigits || 12) + 2;
    const truncated = digitsOnly.slice(0, maxDigits);

    const formatted = formatPhoneNumber(truncated, selectedCountry);
    setPhoneNumber(formatted);

    // Full international phone string: "+91 98765 43210"
    const fullInternational = formatted
      ? `${selectedCountry.dialCode} ${formatted}`
      : "";

    if (onChange) {
      onChange({
        target: {
          name,
          value: fullInternational,
          rawValue: truncated,
          dialCode: selectedCountry.dialCode,
          countryCode: selectedCountry.code,
          isValid: validatePhoneNumber(truncated, selectedCountry),
        },
      });
    }
  };

  // Select a new country
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);

    // Re-format current digits according to new country format
    const digits = phoneNumber.replace(/\D/g, "");
    const formatted = formatPhoneNumber(digits, country);
    setPhoneNumber(formatted);

    const fullInternational = formatted
      ? `${country.dialCode} ${formatted}`
      : "";

    if (onChange) {
      onChange({
        target: {
          name,
          value: fullInternational,
          rawValue: digits,
          dialCode: country.dialCode,
          countryCode: country.code,
          isValid: validatePhoneNumber(digits, country),
        },
      });
    }

    // Refocus phone number input
    setTimeout(() => {
      numberInputRef.current?.focus();
    }, 50);
  };

  const showValidationWarning = touched && phoneNumber && !isValid;

  return (
    <div ref={containerRef} className="relative w-full text-left">
      {/* Connected Input Group */}
      <div
        className={`group relative flex items-center rounded-xl border bg-[#F7FAFD]/50 transition-all duration-200 ${
          showValidationWarning
            ? "border-blue-400 bg-blue-50/20"
            : "border-[#E5E7EB] hover:border-gray-400 focus-within:border-[#0757C9] focus-within:bg-white focus-within:ring-3 focus-within:ring-[#0757C9]/10"
        }`}
      >
        {/* Country Code Selector Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={`Select country code. Current: ${selectedCountry.name} (${selectedCountry.dialCode})`}
          className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2.5 bg-transparent border-r border-[#E5E7EB] hover:bg-gray-100/70 text-[#1F2937] text-xs sm:text-sm font-medium transition-colors shrink-0 cursor-pointer select-none rounded-l-xl focus:outline-none"
        >
          <span className="text-base sm:text-lg leading-none" role="img" aria-label={selectedCountry.name}>
            {selectedCountry.flag}
          </span>
          <span className="font-semibold text-[#1F2937] inline-block max-w-[62px] sm:max-w-[105px] truncate">
            {selectedCountry.name}
          </span>
          <span className="font-bold text-[#032B66]">
            {selectedCountry.dialCode}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 shrink-0 ${
              isOpen ? "rotate-180 text-[#0757C9]" : ""
            }`}
          />
        </button>

        {/* Phone Number Input */}
        <input
          ref={numberInputRef}
          type="tel"
          id={id}
          name={name}
          value={phoneNumber}
          onChange={handleNumberChange}
          onBlur={() => setTouched(true)}
          placeholder={selectedCountry.placeholder || "Enter phone number"}
          required={required}
          autoComplete="tel-national"
          className="flex-1 w-full px-3.5 py-2.5 bg-transparent text-xs sm:text-sm text-[#1F2937] placeholder:text-gray-400 focus:outline-none rounded-r-xl"
        />
      </div>

      {/* Validation Message (Subtle, helpful indicator) */}
      {showValidationWarning && (
        <p className="flex items-center gap-1 text-[11px] text-[#0757C9] mt-1 font-medium animate-in fade-in duration-200">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Please enter a valid {selectedCountry.name} phone number (min {selectedCountry.minDigits} digits).</span>
        </p>
      )}

      {/* Searchable Country Dropdown Modal / Popover */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute top-full left-0 mt-1.5 w-72 sm:w-84 max-h-72 bg-white rounded-xl shadow-xl border border-[#E5E7EB] z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Search Header */}
          <div className="p-2.5 border-b border-[#E5E7EB] bg-[#F7FAFD] sticky top-0 z-10">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-gray-400 absolute left-2.5 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or code..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-white text-xs text-[#1F2937] placeholder:text-gray-400 focus:outline-none focus:border-[#0757C9]"
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsOpen(false);
                  }
                }}
              />
            </div>
          </div>

          {/* Country List Options */}
          <div className="overflow-y-auto flex-1 p-1 divide-y divide-gray-50">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c) => {
                const isSelected = c.code === selectedCountry.code;
                return (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => handleSelectCountry(c)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#EEF6FF] text-[#0757C9] font-bold"
                        : "text-[#1F2937] hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base shrink-0 leading-none">{c.flag}</span>
                      <span className="truncate font-medium">{c.name}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="font-semibold text-gray-600 text-[11px]">
                        {c.dialCode}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#0757C9]" />}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center text-xs text-gray-400">
                No matching countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
