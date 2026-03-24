"use client";

import { testimonials } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Wat Onze Klanten Zeggen"
            subtitle="Ontdek waarom bedrijven en particulieren kiezen voor Dumagro."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
