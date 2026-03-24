"use client";

import { heroContent } from "@/lib/data";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,195,74,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,195,74,0.08),_transparent_60%)]" />

      {/* Floating ambient orbs */}
      <motion.div
        aria-hidden
        className="absolute top-1/4 right-1/3 w-[480px] h-[480px] rounded-full bg-lime/[0.06] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.12, 1], x: [0, 28, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-1/3 left-1/5 w-[360px] h-[360px] rounded-full bg-lime/[0.04] blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, -22, 0], y: [0, 26, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        aria-hidden
        className="absolute top-2/3 right-1/4 w-[260px] h-[260px] rounded-full bg-white/[0.02] blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], x: [0, 16, 0], y: [0, -14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-lime text-sm font-semibold uppercase tracking-widest mb-6">
            Grond- &amp; Afbraakwerken
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            {heroContent.headline}
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            {heroContent.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact" variant="primary">
              {heroContent.ctaPrimary}
            </Button>
            <Button href="#diensten" variant="secondary">
              {heroContent.ctaSecondary}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>

      {/* Green wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#8BC34A"
            fillOpacity="0.1"
          />
          <path
            d="M0 60C240 80 480 40 720 60C960 80 1200 40 1440 60V80H0V60Z"
            fill="#0A0A0A"
          />
        </svg>
      </div>
    </section>
  );
}
