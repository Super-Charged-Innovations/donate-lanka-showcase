import { Link } from "react-router-dom";
import { AnimatedFooter } from "./AnimatedFooter";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AnimatedFooter>
      <footer className="bg-background border-t border-border">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Brand Section */}
              <div className="flex items-center">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 focus-ring rounded-lg"
                >
                  <img 
                    src="/fund-lanka-logo.png" 
                    alt="Fund Lanka Logo" 
                    className="h-8 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                <Link 
                  to="/about" 
                  className="text-sm text-muted-foreground hover:text-warning transition-colors focus-ring rounded"
                >
                  About
                </Link>
                <Link 
                  to="/partners" 
                  className="text-sm text-muted-foreground hover:text-warning transition-colors focus-ring rounded"
                >
                  Partners
                </Link>
                <Link 
                  to="/register" 
                  className="text-sm bg-warning text-warning-foreground px-4 py-2 rounded-lg hover:bg-warning/90 transition-colors focus-ring"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Fund Lanka. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </AnimatedFooter>
  );
};