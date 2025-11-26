"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center" aria-label="Amber's Hair Parlour">
      <Image
        src="/AH 1 (1).png"
        alt="AMBER"
        title="AMBER"
        width={200}
        height={60}
        className="h-7 sm:h-9 md:h-10 w-auto"
        priority
      />
    </div>
  );
}

