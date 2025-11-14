"use client";

import { ShieldCheckIcon, AcademicCapIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function TrustBadges() {
  const badges = [
    { icon: ShieldCheckIcon, text: "Licensed" },
    { icon: AcademicCapIcon, text: "Qualified" },
    { icon: ClockIcon, text: "24/7 Available" },
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-gray-700 rounded-lg"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-white font-semibold">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

