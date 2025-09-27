import { useEffect, useState, useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";

const companyLogos = [
  {
    name: "TechCorp",
    logo: "TC"
  },
  {
    name: "InnovateHub", 
    logo: "IH"
  },
  {
    name: "FutureTech",
    logo: "FT"
  },
  {
    name: "NextGen Solutions",
    logo: "NG"
  }
];

const ResponsiveLogoSlideshow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState('-50%');

  useEffect(() => {
    const calculateScrollDistance = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth / 2; // Divide by 2 because we have duplicate sets
        
        // Calculate the exact distance needed to move one complete set
        const distance = contentWidth;
        setScrollDistance(`-${distance}px`);
        
        // Set the CSS custom property for the animation
        containerRef.current.style.setProperty('--scroll-distance', `-${distance}px`);
      }
    };

    // Calculate on mount and resize
    calculateScrollDistance();
    
    const handleResize = () => {
      calculateScrollDistance();
    };

    window.addEventListener('resize', handleResize);
    
    // Recalculate after fonts load
    document.fonts.ready.then(calculateScrollDistance);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden py-8"
    >
      {/* Moving logos container with hardware acceleration */}
      <div 
        ref={contentRef}
        className="flex animate-scroll-seamless-responsive will-change-transform"
        style={{
          animationFillMode: 'forwards',
        }}
      >
        {/* First set of logos */}
        {companyLogos.map((company, index) => (
          <div 
            key={`set1-${index}`} 
            className="flex-shrink-0 flex items-center justify-center w-28 h-28 mr-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50 transition-transform duration-200 hover:scale-105"
          >
            <span className="text-3xl font-bold text-primary">{company.logo}</span>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop - consistent spacing */}
        {companyLogos.map((company, index) => (
          <div 
            key={`set2-${index}`} 
            className="flex-shrink-0 flex items-center justify-center w-28 h-28 mr-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50 transition-transform duration-200 hover:scale-105"
          >
            <span className="text-3xl font-bold text-primary">{company.logo}</span>
          </div>
        ))}
      </div>
      
      {/* Fade edges for smooth disappearing effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
    </div>
  );
};
export const StatisticsCounter = () => {
  return <section className="py-16 bg-muted/30">
      <div className="w-full">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-8 px-4">
            <h2 className="text-2xl font-bold text-foreground mb-2">Our Partners</h2>
            <p className="text-muted-foreground">Partnering with innovative companies across Sri Lanka</p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-left" delay={300}>
          <ResponsiveLogoSlideshow />
        </ScrollReveal>
      </div>
    </section>;
};