"use client";

import { services } from "@/lib/data";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Services() {
  return (
    <section id="diensten" className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Onze Diensten"
            subtitle="Van grondverzet tot sloop — wij bieden een volledig pakket aan diensten in Staden, Roeselare, Kortrijk, Ieper, Diksmuide en omgeving."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
