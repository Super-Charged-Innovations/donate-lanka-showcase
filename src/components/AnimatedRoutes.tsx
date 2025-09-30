import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ReactNode, useState, useEffect, Suspense } from "react";
import { PageTransition } from "./PageTransition";
import { LoadingTransition } from "./LoadingTransition";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
import { performanceMonitor } from "@/utils/performanceMonitor";
import type { AnimationType } from "./PageTransition";

interface AnimatedRouteConfig {
  path: string;
  element: ReactNode;
  animationType?: AnimationType;
}

interface AnimatedRoutesProps {
  routes: AnimatedRouteConfig[];
}

export const AnimatedRoutes = ({ routes }: AnimatedRoutesProps) => {
  const location = useLocation();
  const direction = useNavigationDirection();
  const [isLoading, setIsLoading] = useState(false);

  // Handle loading states during navigation
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Brief loading state to prevent flicker

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Prevent animation conflicts with scroll reveal and cleanup
  useEffect(() => {
    const handlePageTransition = () => {
      // Reset any ongoing scroll animations
      const scrollElements = document.querySelectorAll('[data-scroll-reveal]');
      scrollElements.forEach(el => {
        el.classList.remove('animate-fade-up', 'animate-scale-up', 'animate-fade-left');
        (el as HTMLElement).style.willChange = 'auto';
      });
      
      // Cleanup header/footer animations
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      if (header) (header as HTMLElement).style.willChange = 'auto';
      if (footer) (footer as HTMLElement).style.willChange = 'auto';
    };

    window.addEventListener('pageTransition', handlePageTransition);
    return () => window.removeEventListener('pageTransition', handlePageTransition);
  }, []);

  // Performance monitoring in dev mode
  useEffect(() => {
    if (import.meta.env.DEV) {
      performanceMonitor.startMonitoring();
      performanceMonitor.logNavigationMetrics(location.pathname);
      
      return () => {
        performanceMonitor.stopMonitoring();
      };
    }
  }, [location.pathname]);

  return (
    <>
      <LoadingTransition isLoading={isLoading} />
      <AnimatePresence 
        mode="wait" 
        initial={false}
        onExitComplete={() => {
          // Cleanup and prepare for new page
          window.scrollTo(0, 0);
          
          // Trigger page transition event for coordination
          window.dispatchEvent(new Event('pageTransition'));
        }}
      >
        <Routes location={location} key={location.pathname}>
          {routes.map(({ path, element, animationType = "fade" }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<LoadingTransition isLoading={true} />}>
                  <PageTransition 
                    animationType={animationType} 
                    direction={direction}
                    // Performance optimization for mobile
                    style={{
                      willChange: 'transform, opacity',
                      transform: 'translateZ(0)', // Force hardware acceleration
                    }}
                  >
                    {element}
                  </PageTransition>
                </Suspense>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
};
