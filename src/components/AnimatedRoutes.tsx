import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { PageTransition } from "./PageTransition";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
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

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element, animationType = "fade" }) => (
          <Route
            key={path}
            path={path}
            element={
              <PageTransition animationType={animationType} direction={direction}>
                {element}
              </PageTransition>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};
