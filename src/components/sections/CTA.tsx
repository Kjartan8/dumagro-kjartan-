"use client";

import ScrollReveal from "../ui/ScrollReveal";
import {
  CalendarCheck2,
  MapPinned,
  FileText,
  HardHat,
  BadgeCheck,
  Wrench,
} from "lucide-react";

const roadmapSteps = [
  {
    icon: CalendarCheck2,
    title: "Plan uw afspraak",
    description: "Neem contact op via telefoon of e-mail en wij plannen samen een moment in.",
    highlight: true,
  },
  {
    icon: MapPinned,
    title: "Gratis plaatsbezoek",
    description: "Wij analyseren de situatie ter plaatse en geven gericht advies.",
    highlight: false,
  },
  {
    icon: FileText,
    title: "Offerte op maat",
    description: "U ontvangt een helder en transparant prijsvoorstel zonder verrassingen.",
    highlight: false,
  },
  {
    icon: HardHat,
    title: "Uitvoering werken",
    description: "De werken worden strak gepland en professioneel uitgevoerd.",
    highlight: false,
  },
  {
    icon: BadgeCheck,
    title: "Oplevering & tevredenheid",
    description: "Wij leveren kwaliteit af met focus op een tevreden eindresultaat.",
    highlight: false,
  },
] as const;
export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-dark-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -right-10 top-12 hidden lg:block">
        <div className="relative">
          <div className="absolute top-8 right-0 h-px w-40 bg-lime/30" />
          <Wrench className="w-8 h-8 text-lime/60" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-4">
            Klaar om te starten met uw project?
          </h2>
          <p className="text-black/60 text-center text-lg mb-12 max-w-3xl mx-auto">
            Een duidelijk stappenplan voor een vlotte samenwerking van eerste
            afspraak tot oplevering.
          </p>

          <div className="relative">
            <div className="absolute left-6 top-4 bottom-4 w-px bg-black/12 md:hidden" />
            <div className="hidden md:block absolute left-[10%] right-[10%] top-[2.9rem] h-px bg-black/12" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
              {roadmapSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className={`relative rounded-2xl border p-5 md:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 hover:shadow-[0_10px_30px_rgba(139,195,74,0.12)] ${
                      step.highlight
                        ? "bg-lime/10 border-lime/60"
                        : "bg-dark border-black/10"
                    }`}
                  >
                    <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-3">
                      <div
                        className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border ${
                          step.highlight
                            ? "bg-lime text-black border-lime"
                            : "bg-dark-light text-lime border-black/15"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="md:text-center">
                        <h3 className="text-black font-semibold text-base leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-black/60 text-sm mt-2 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}