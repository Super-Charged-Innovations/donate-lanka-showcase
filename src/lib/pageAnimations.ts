import { Variants } from "framer-motion";

// Timing and easing optimized for smooth transitions with existing UI
export const pageTransition = {
  duration: 0.35, // Slightly faster for better coordination with header/footer
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const fastTransition = {
  duration: 0.2, // Quick transitions to not conflict with scroll animations
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const slowTransition = {
  duration: 0.5, // Slower for success page celebration effect
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
    transition: slowTransition, // Use slower transition for celebration effect
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: fastTransition,
  },
};

// Reduced motion variants for accessibility
export const reducedMotionVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: "linear"
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "linear"
    },
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
