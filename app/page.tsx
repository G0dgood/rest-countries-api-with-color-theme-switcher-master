"use client";

import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { FilterDropdown } from "./components/FilterDropdown";
import { CountryCard } from "./components/CountryCard";
import countriesData from "./data/data.json";

interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  alpha3Code: string;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredCountries = useMemo(() => {
    return (countriesData as Country[]).filter((country) => {
      const matchesSearch =
        country.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion =
        !selectedRegion || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div className="min-h-screen bg-var(--bg)">
      <Header />
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between mb-8 sm:mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterDropdown value={selectedRegion} onChange={setSelectedRegion} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-12">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <CountryCard key={country.alpha3Code} country={country} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-var(--text) text-lg">
                No countries found. Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
