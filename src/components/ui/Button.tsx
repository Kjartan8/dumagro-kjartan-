"use client";

import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-lime text-black hover:bg-lime-light shadow-lg shadow-lime/20",
  secondary:
    "border-2 border-black/30 text-black hover:border-lime hover:text-lime",
  dark: "bg-dark-lighter text-black hover:bg-dark-light border border-black/10",
};

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
