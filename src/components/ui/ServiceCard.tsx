"use client";

import type { Service } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group relative bg-dark-light border border-black/10 rounded-2xl p-6 md:p-8 hover:border-lime/40 transition-all duration-300 h-full">
        <div className="w-14 h-14 rounded-xl bg-lime/10 flex items-center justify-center mb-5 group-hover:bg-lime/20 transition-colors">
          <Icon className="w-7 h-7 text-lime" />
        </div>
        <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
        <ul className="space-y-2.5 text-black/60 leading-relaxed">
          {service.description.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}
