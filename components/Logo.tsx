"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center" aria-label="Amber's Hair Parlour">
      <Image
        src="/AH 1 (1).png"
        alt="Amber's Hair Parlour - Boutique Hair Salon in St George, Queensland"
        width={200}
        height={60}
        className="h-8 sm:h-10 md:h-12 w-auto"
        priority
      />
    </div>
  );
}

