export function CountryCardSkeleton() {
  return (
    <div className="bg-[var(--elements)] rounded-lg overflow-hidden shadow-md h-full flex flex-col animate-pulse">
      <div className="w-full h-48 sm:h-40 bg-[var(--bg)] opacity-20"></div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="h-6 bg-[var(--bg)] opacity-20 rounded mb-4 w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-[var(--bg)] opacity-20 rounded w-full"></div>
          <div className="h-4 bg-[var(--bg)] opacity-20 rounded w-5/6"></div>
          <div className="h-4 bg-[var(--bg)] opacity-20 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}

