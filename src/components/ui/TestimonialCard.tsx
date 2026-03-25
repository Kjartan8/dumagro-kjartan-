"use client";

import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <div className="bg-dark-light border border-black/10 rounded-2xl p-6 md:p-8 h-full flex flex-col">
        <Quote className="w-8 h-8 text-lime mb-4 shrink-0" />
        <p className="text-black/80 leading-relaxed italic flex-1 mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div>
          <p className="text-black font-semibold">{testimonial.name}</p>
          <p className="text-lime text-sm">{testimonial.company}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
