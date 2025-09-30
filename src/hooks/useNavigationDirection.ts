import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export type NavigationDirection = "forward" | "backward" | "initial";

// Route hierarchy for determining forward/backward navigation
const routeHierarchy: Record<string, number> = {
  "/": 0,
  "/about": 1,
  "/partners": 1,
  "/register": 2,
  "/register/fundlanka": 3,
  "/register/fundlanka/startup": 4,
  "/register/fundlanka/investor": 4,
  "/register/donatelanka": 3,
  "/register/success": 5,
  "/login": 2,
  "/dashboard": 2,
};

export const useNavigationDirection = (): NavigationDirection => {
  const location = useLocation();
  const prevLocation = useRef<string | null>(null);
  const direction = useRef<NavigationDirection>("initial");

  useEffect(() => {
    if (prevLocation.current === null) {
      direction.current = "initial";
      prevLocation.current = location.pathname;
      return;
    }

    const prevLevel = routeHierarchy[prevLocation.current] ?? 1;
    const currentLevel = routeHierarchy[location.pathname] ?? 1;

    if (currentLevel > prevLevel) {
      direction.current = "forward";
    } else if (currentLevel < prevLevel) {
      direction.current = "backward";
    } else {
      // Same level - use forward as default
      direction.current = "forward";
    }

    prevLocation.current = location.pathname;
  }, [location.pathname]);

  return direction.current;
};
