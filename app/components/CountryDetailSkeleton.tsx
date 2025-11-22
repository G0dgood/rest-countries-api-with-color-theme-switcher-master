export function CountryDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16 animate-pulse">
        {/* Back Button Skeleton */}
        <div className="h-10 w-24 bg-[var(--elements)] opacity-50 rounded-md mb-12 sm:mb-16"></div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Flag Skeleton */}
          <div className="w-full lg:w-1/2">
            <div className="w-full aspect-[4/3] bg-[var(--elements)] opacity-50 rounded-lg"></div>
          </div>

          {/* Details Skeleton */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Title Skeleton */}
            <div className="h-10 bg-[var(--elements)] opacity-50 rounded mb-6 sm:mb-8 w-3/4"></div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-8 sm:mb-12">
              {/* Left Column */}
              <div className="flex-1 space-y-3">
                <div className="h-5 bg-[var(--elements)] opacity-30 rounded w-full"></div>
                <div className="h-5 bg-[var(--elements)] opacity-30 rounded w-full"></div>
                <div className="h-5 bg-[var(--elements)] opacity-30 rounded w-5/6"></div>
                <div className="h-5 bg-[var(--elements)] opacity-30 rounded w-4/6"></div>
                <div className="h-5 bg-[var(--elements)] opacity-30 rounded w-3/6"></div>
              </div>

              {/* Right Column */}
              <div className="flex-1 space-y-3">
                <div className="h-5 bg-[var(--elements)] opacity-30 rounded w-full"></div>
                <div className="h-5 bg-[var(--elements)] opacity-30 rounded w-full"></div>
                <div className="h-5 bg-[var(--elements)] opacity-30 rounded w-5/6"></div>
              </div>
            </div>

            {/* Border Countries Skeleton */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="h-5 bg-[var(--elements)] opacity-50 rounded w-32"></div>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 bg-[var(--elements)] opacity-50 rounded-md w-20"></div>
                <div className="h-8 bg-[var(--elements)] opacity-50 rounded-md w-24"></div>
                <div className="h-8 bg-[var(--elements)] opacity-50 rounded-md w-28"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

