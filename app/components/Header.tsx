"use client";

import { useTheme } from "./ThemeProvider";

export function Header() {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className="sticky top-0 z-50 bg-[var(--elements)] shadow-md">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6">
				<div className="flex items-center justify-between">
					<h1 className="text-lg sm:text-xl font-extrabold text-[var(--text)]">
						Where in the world?
					</h1>
					<button
						onClick={toggleTheme}
						className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[var(--text)] hover:opacity-80 transition-opacity whitespace-nowrap"
						aria-label="Toggle dark mode"
					>
						<svg
							className="w-4 h-4 sm:w-5 sm:h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							{theme === "light" ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							)}
						</svg>
						<span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
					</button>
				</div>
			</div>
		</header>
	);
}

