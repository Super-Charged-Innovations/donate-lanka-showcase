import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, useEffect } from "react";
import {
  fadeVariants,
  slideLeftVariants,
  slideRightVariants,
  slideUpVariants,
  scaleVariants,
  reducedMotionVariants,
} from "@/lib/pageAnimations";
import { NavigationDirection } from "@/hooks/useNavigationDirection";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export type AnimationType = "fade" | "slide" | "scale" | "slideUp";

interface PageTransitionProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  animationType?: AnimationType;
  direction?: NavigationDirection;
}

export const PageTransition = ({
  children,
  animationType = "fade",
  direction = "forward",
  className = "",
  ...props
}: PageTransitionProps) => {
  const prefersReducedMotion = useReducedMotion();

  // Reset scroll animations when page changes
  useEffect(() => {
    // Allow ScrollReveal components to re-trigger on page change
    window.dispatchEvent(new Event('pageTransition'));
  }, []);

  // Select variant based on animation type, direction, and motion preference
  const getVariants = () => {
    if (prefersReducedMotion) {
      return reducedMotionVariants;
    }

    switch (animationType) {
      case "slide":
        return direction === "backward" ? slideRightVariants : slideLeftVariants;
      case "slideUp":
        return slideUpVariants;
      case "scale":
        return scaleVariants;
      case "fade":
      default:
        return fadeVariants;
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={getVariants()}
      className={className}
      {...props}
      // Accessibility: Maintain focus management
      onAnimationComplete={() => {
        // Focus first focusable element after animation
        const firstFocusable = document.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable && document.activeElement === document.body) {
          firstFocusable.focus();
        }
      }}
    >
      {children}
    </motion.div>
  );
};
