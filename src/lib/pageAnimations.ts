import { Variants } from "framer-motion";

// Timing and easing optimized for smooth transitions
export const pageTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number], // Custom cubic-bezier for smooth acceleration
};

export const fastTransition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const slowTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// Core page animation variants
export const fadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    transition: fastTransition,
  },
};

export const slideUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: fastTransition,
  },
};

export const slideDownVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: fastTransition,
  },
};

export const slideLeftVariants: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: fastTransition,
  },
};

export const slideRightVariants: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: fastTransition,
  },
};

export const scaleVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: fastTransition,
  },
};

// Page-specific presets
export const pagePresets = {
  home: fadeVariants,
  about: slideUpVariants,
  partners: slideLeftVariants,
  register: scaleVariants,
  dashboard: fadeVariants,
  default: fadeVariants,
} as const;

// Stagger children animation for lists/grids
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: fastTransition,
  },
};
