"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-6 py-2 bg-[var(--elements)] text-[var(--text)] rounded-md shadow-md hover:opacity-80 transition-opacity mb-12 sm:mb-16"
      aria-label="Go back"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span className="text-sm sm:text-base font-light">Back</span>
    </button>
  );
}

