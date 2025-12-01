"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center" aria-label="Nick's Fix It">
      <Image
        src="/NF Logo.png"
        alt="Nick's Fix It - Mechanic in St George, Queensland"
        title="Nick's Fix It"
        width={300}
        height={90}
        className="h-11 sm:h-14 md:h-[60px] w-auto"
        priority
      />
    </div>
  );
}

