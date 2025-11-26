"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center" aria-label="Amber's Hair Parlour">
      <Image
        src="/AH 1 (1).png"
        alt="AMBER"
        title="AMBER"
        width={300}
        height={90}
        className="h-11 sm:h-14 md:h-[60px] w-auto"
        priority
      />
    </div>
  );
}

