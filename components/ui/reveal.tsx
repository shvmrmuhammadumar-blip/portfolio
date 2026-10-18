"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { fadeUp } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  /** Delay in seconds, baked directly into the visible-state transition. */
  delay?: number;
  as?: "div" | "li";
}

const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

/**
 * Reveals its children once when they scroll into view. Falls back to a
 * simple opacity fade with no motion when the user prefers reduced motion.
 * For staggered groups, prefer a parent `staggerChildren` variant over the
 * `delay` prop here.
 */
export function Reveal({ children, className, variants = fadeUp, delay = 0, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  let effectiveVariants: Variants = prefersReducedMotion ? reducedMotionVariants : variants;

  if (!prefersReducedMotion && delay > 0) {
    const visible = effectiveVariants.visible;
    const baseTransition =
      visible && typeof visible === "object" && "transition" in visible ? visible.transition : undefined;
    effectiveVariants = {
      ...effectiveVariants,
      visible: {
        ...(visible as object),
        transition: { ...baseTransition, delay },
      },
    };
  }

  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={effectiveVariants}
    >
      {children}
    </Component>
  );
}
