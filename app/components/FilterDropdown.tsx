"use client";

import { useState, useRef, useEffect } from "react";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"];

interface FilterDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export function FilterDropdown({ value, onChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (region: string) => {
    onChange(region === "All" ? "" : region);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-8 sm:gap-12 px-4 sm:px-6 py-3 sm:py-4 bg-[var(--elements)] text-[var(--text)] rounded-md shadow-md hover:opacity-90 transition-opacity min-w-[200px]"
        aria-label="Filter by region"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base">
          {value ? value : "Filter by Region"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[var(--elements)] rounded-md shadow-lg z-10 overflow-hidden">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleSelect(region)}
              className="w-full text-left px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-[var(--text)] hover:bg-[var(--bg)] transition-colors"
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

