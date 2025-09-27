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
          "bg-white/5 backdrop-blur-3xl border border-white/10",
          "shadow-2xl shadow-black/5",
          isScrolled 
            ? "bg-white/8 backdrop-blur-3xl border-white/15 shadow-2xl shadow-black/10" 
            : "bg-white/3 backdrop-blur-2xl border-white/8"
        )}>
          <div className="flex items-center justify-between h-12 lg:h-14 px-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 flex-shrink-0">
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
                    "text-sm font-medium transition-all duration-200 px-4 py-2 rounded-full",
                    "hover:bg-white/10 hover:text-primary backdrop-blur-sm",
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
                  "hidden lg:flex rounded-full text-sm font-medium",
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
                  "lg:hidden rounded-full bg-white/10 hover:bg-white/20",
                  "backdrop-blur-sm border border-white/20"
                )}
                onClick={() => setIsMobileMenuOpen(true)}
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