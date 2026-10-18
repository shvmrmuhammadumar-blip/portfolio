import type { Variants } from "motion/react";

// Shared timing tokens so every animation in the app speaks the same
// language. Durations are short by design — confident, not lazy.
export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
};

export const easing = {
  standard: [0.16, 1, 0.3, 1] as const,
  out: [0.22, 1, 0.36, 1] as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.standard },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.standard },
  },
};

export const staggerChildren = (stagger = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: easing.out },
  },
};
