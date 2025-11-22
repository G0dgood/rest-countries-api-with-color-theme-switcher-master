"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full sm:w-auto sm:min-w-[400px]">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--input)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a country..."
        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-[var(--elements)] text-[var(--text)] placeholder:text-[var(--input)] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

