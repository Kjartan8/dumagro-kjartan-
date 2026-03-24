"use client";

import { stats } from "@/lib/data";
import StatCounter from "../ui/StatCounter";
import ScrollReveal from "../ui/ScrollReveal";

export default function Stats() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-dark-light via-dark to-dark-light relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,195,74,0.08),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
