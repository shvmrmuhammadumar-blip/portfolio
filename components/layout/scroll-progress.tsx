"use client";

import { motion, useReducedMotion } from "motion/react";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed top-0 left-0 z-50 h-0.5 w-full bg-transparent" aria-hidden="true">
      <motion.div
        className="h-full bg-teal"
        style={{ transformOrigin: "left" }}
        animate={{ scaleX: progress }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.1, ease: "linear" }}
      />
    </div>
  );
}
