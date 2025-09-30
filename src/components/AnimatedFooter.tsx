import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedFooterProps {
  children: ReactNode;
}

export const AnimatedFooter = ({ children }: AnimatedFooterProps) => {
  const prefersReducedMotion = useReducedMotion();

  const footerVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: prefersReducedMotion 
        ? { duration: 0.15, ease: "linear" as const }
        : { 
            duration: 0.6, 
            ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            delay: 0.2 
          }
    }
  };

  return (
    <motion.div
      variants={footerVariants}
      initial="initial"
      animate="animate"
      style={{
        willChange: 'transform, opacity',
      }}
      onAnimationComplete={() => {
        // Clean up will-change after animation
        const element = document.querySelector('footer');
        if (element) {
          (element as HTMLElement).style.willChange = 'auto';
        }
      }}
    >
      {children}
    </motion.div>
  );
};