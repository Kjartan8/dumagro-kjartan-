"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";
import type { Project } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface ModalProps {
  image: string;
  alt: string;
  project: Project;
  onClose: () => void;
}

function ProjectModal({ image, alt, project, onClose }: ModalProps) {
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Fade in on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 250);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 transition-all duration-250 ${
        visible ? "bg-black/80 backdrop-blur-sm" : "bg-black/0"
      }`}
    >
      <div
        className={`relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-250 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black flex items-center justify-center transition-colors"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Image */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-lime/15 text-lime text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-black font-bold text-lg">{project.title}</h3>
          </div>

          <div className="relative pl-4 border-l-2 border-lime">
            <p className="text-black/70 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasBeforeAfter = Boolean(project.beforeImage && project.afterImage);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    if (project.description) setModalImage({ src, alt });
  };

  return (
    <>
      <ScrollReveal delay={index * 0.1}>
        <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
          {hasBeforeAfter ? (
            <div className="absolute inset-0 grid grid-cols-2">
              <div
                className="relative"
                onClick={() =>
                  openModal(project.beforeImage as string, `${project.title} voor`)
                }
              >
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
                {project.description && (
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                    <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                )}
              </div>
              <div
                className="relative"
                onClick={() =>
                  openModal(project.afterImage as string, `${project.title} na`)
                }
              >
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
                {project.description && (
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
                    <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                )}
              </div>
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/60" />
            </div>
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
            <span className="text-lime text-sm font-semibold uppercase tracking-wider mb-2">
              {project.category}
            </span>
            <h3 className="text-white text-lg font-bold">{project.title}</h3>
          </div>
        </div>
      </ScrollReveal>

      {modalImage && (
        <ProjectModal
          image={modalImage.src}
          alt={modalImage.alt}
          project={project}
          onClose={() => setModalImage(null)}
        />
      )}
    </>
  );
}
