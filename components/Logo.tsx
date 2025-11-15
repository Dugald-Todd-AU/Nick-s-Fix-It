"use client";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3" aria-label="Brendan Coonan Plumbing & Gasfitting">
      {/* Water Drop Icon */}
      <div className="flex-shrink-0" aria-hidden="true">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Water Drop Icon */}
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight whitespace-nowrap">
          BRENDAN COONAN
        </span>
        <span className="text-white/70 text-[10px] sm:text-xs md:text-sm font-normal whitespace-nowrap">
          Plumbing & Gasfitting
        </span>
      </div>
    </div>
  );
}

