import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedHeaderProps {
  children: ReactNode;
  isScrolled: boolean;
}

export const AnimatedHeader = ({ children, isScrolled }: AnimatedHeaderProps) => {
  const prefersReducedMotion = useReducedMotion();

  // Optimize header animations for page transitions
  useEffect(() => {
    const handlePageTransition = () => {
      // Ensure header animations don't conflict with page transitions
      const header = document.querySelector('header');
      if (header) {
        header.style.willChange = 'transform, opacity';
        setTimeout(() => {
          header.style.willChange = 'auto';
        }, 500);
      }
    };

    window.addEventListener('pageTransition', handlePageTransition);
    return () => window.removeEventListener('pageTransition', handlePageTransition);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: prefersReducedMotion 
        ? { duration: 0.15, ease: "linear" as const }
        : { duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
    },
    scrolled: {
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      borderColor: "rgba(255, 255, 255, 0.15)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      transition: prefersReducedMotion 
        ? { duration: 0.1, ease: "linear" as const }
        : { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }
    }
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "animate"}
      style={{
        willChange: isScrolled ? 'backdrop-filter, background-color, border-color, box-shadow' : 'auto'
      }}
    >
      {children}
    </motion.div>
  );
};