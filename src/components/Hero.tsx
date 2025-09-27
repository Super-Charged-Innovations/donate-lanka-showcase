import { ArrowRight, Play, Users, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { InteractiveGradient } from "./InteractiveGradient";
import { useRef, useState, useEffect } from "react";

// Force rebuild to resolve Link import issue

interface MousePosition {
  x: number;
  y: number;
}

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        setMousePosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 50, y: 50 });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleMouseEnter);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseenter", handleMouseEnter);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

    return <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <InteractiveGradient mousePosition={mousePosition} isHovered={isHovered} />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-48 md:h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 md:w-24 md:h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight md:leading-relaxed px-2 drop-shadow-lg">
            Empowering{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent drop-shadow-lg">
              Sri Lankan Startups
            </span>{" "}
            Through Smart Funding
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4 drop-shadow-md">
            Connect innovative startups with investors and venture capitalists. 
            Pitch your projects, showcase your vision, and secure the funding you need 
            to transform ideas into successful businesses.
          </p>


          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full w-full sm:w-auto"
              asChild
            >
              <Link to="/register">
                <ArrowRight className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};