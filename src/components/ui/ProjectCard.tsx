"use client";

import Image from "next/image";
import type { Project } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasBeforeAfter = Boolean(project.beforeImage && project.afterImage);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
        {hasBeforeAfter ? (
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="relative">
              <Image
                src={project.beforeImage as string}
                alt={`${project.title} voor`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-black/65 text-white text-xs font-medium">
                Voor
              </span>
            </div>
            <div className="relative">
              <Image
                src={project.afterImage as string}
                alt={`${project.title} na`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-lime/80 text-black text-xs font-semibold">
                Na
              </span>
            </div>
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/60" />
          </div>
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
          <span className="text-lime text-sm font-semibold uppercase tracking-wider mb-2">
            {project.category}
          </span>
          <h3 className="text-white text-lg font-bold">{project.title}</h3>
        </div>
      </div>
    </ScrollReveal>
  );
}
