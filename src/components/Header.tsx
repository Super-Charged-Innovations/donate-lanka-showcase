import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change for better page transition coordination
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300",
          "w-[95%] max-w-6xl"
        )}
      >
        <div className={cn(
          "mx-auto px-4 lg:px-6 rounded-full transition-all duration-300",
          "bg-background/80 backdrop-blur-xl border border-border/50",
          "shadow-xl",
          isScrolled 
            ? "bg-background/95 backdrop-blur-2xl border-border shadow-2xl" 
            : "bg-background/80 backdrop-blur-xl border-border/50"
        )}>
          <div className="flex items-center justify-between h-12 lg:h-14 px-2">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-1 flex-shrink-0 focus-ring rounded-lg"
            >
              <img 
                src="/fund-lanka-logo.png" 
                alt="Fund Lanka Logo" 
                className="h-10 w-auto sm:h-12 object-contain"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 px-4 py-2 rounded-full focus-ring",
                    "hover:bg-accent hover:text-warning backdrop-blur-sm",
                    isActive(item.href)
                      ? "bg-warning/20 text-warning border border-warning/30"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              {/* Connect with Us Button - Desktop */}
              <Button
                variant="default"
                size="sm"
                className={cn(
                  "hidden lg:flex rounded-full text-sm font-medium focus-ring",
                  "bg-warning/90 text-warning-foreground hover:bg-warning",
                  "backdrop-blur-sm border border-warning/30"
                )}
                asChild
              >
                <Link to="/register">
                  Connect with Us
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "lg:hidden rounded-full bg-accent hover:bg-accent/80 focus-ring",
                  "backdrop-blur-sm border border-border"
                )}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </>
  );
};