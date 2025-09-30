import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { logAnimationCapabilities } from "@/utils/animationTester";
import Index from "./pages/Index";
import About from "./pages/About";
import Partners from "./pages/Partners";
import RegisterPlatform from "./pages/RegisterPlatform";
import RegisterFundLanka from "./pages/RegisterFundLanka";
import RegisterStartup from "./pages/RegisterStartup";
import RegisterInvestor from "./pages/RegisterInvestor";
import RegisterDonateLanka from "./pages/RegisterDonateLanka";
import RegisterSuccess from "./pages/RegisterSuccess";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Route configuration with animation types
const routes = [
  { path: "/", element: <Index />, animationType: "fade" as const },
  { path: "/about", element: <About />, animationType: "fade" as const },
  { path: "/partners", element: <Partners />, animationType: "fade" as const },
  { path: "/register", element: <RegisterPlatform />, animationType: "slide" as const },
  { path: "/register/fundlanka", element: <RegisterFundLanka />, animationType: "slide" as const },
  { path: "/register/fundlanka/startup", element: <RegisterStartup />, animationType: "slide" as const },
  { path: "/register/fundlanka/investor", element: <RegisterInvestor />, animationType: "slide" as const },
  { path: "/register/donatelanka", element: <RegisterDonateLanka />, animationType: "slide" as const },
  { path: "/register/success", element: <RegisterSuccess />, animationType: "scale" as const },
  { path: "*", element: <NotFound />, animationType: "fade" as const },
];

const App = () => {
  // Log animation capabilities in dev mode for testing
  useEffect(() => {
    if (import.meta.env.DEV) {
      logAnimationCapabilities();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <ErrorBoundary>
                <AnimatedRoutes routes={routes} />
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
