"use client";

import Image from "next/image";
import { aboutContent } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="over-ons" className="py-20 md:py-28 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title={aboutContent.title}
            subtitle={aboutContent.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i} className="text-white/70 leading-relaxed text-lg">
                  {p}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-4 pt-4">
                {aboutContent.values.map((value) => (
                  <div key={value} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-lime shrink-0" />
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Visual placeholder */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-lime/20 to-dark-lighter border border-white/10 overflow-hidden">
                <div className="absolute inset-1 rounded-xl overflow-hidden">
                  <Image
                    src="/ChatGPT%20Image%2024%20mrt%202026%2C%2011_02_19.png"
                    alt="Dumagro kraan op bedrijfsterrein"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-lime/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-lime/10 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
