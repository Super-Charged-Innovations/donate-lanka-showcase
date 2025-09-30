import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partners />} />
            <Route path="/register" element={<RegisterPlatform />} />
            <Route path="/register/fundlanka" element={<RegisterFundLanka />} />
            <Route path="/register/fundlanka/startup" element={<RegisterStartup />} />
            <Route path="/register/fundlanka/investor" element={<RegisterInvestor />} />
            <Route path="/register/donatelanka" element={<RegisterDonateLanka />} />
            <Route path="/register/success" element={<RegisterSuccess />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
