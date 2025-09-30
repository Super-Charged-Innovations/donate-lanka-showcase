import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import {
  fadeVariants,
  slideLeftVariants,
  slideRightVariants,
  slideUpVariants,
  scaleVariants,
} from "@/lib/pageAnimations";
import { NavigationDirection } from "@/hooks/useNavigationDirection";

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
  // Select variant based on animation type and direction
  const getVariants = () => {
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
    >
      {children}
    </motion.div>
  );
};
