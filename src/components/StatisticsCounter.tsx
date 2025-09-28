import { ScrollReveal } from "./ScrollReveal";

const partnerLogos = [
  {
    name: "TechCorp",
    logo: "TC",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "InnovateHub", 
    logo: "IH",
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    name: "FutureTech",
    logo: "FT",  
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    name: "NextGen Solutions",
    logo: "NG",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "InnovateLabs",
    logo: "IL",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    name: "StartupBase",
    logo: "SB", 
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    name: "CloudTech",
    logo: "CT",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    name: "DataFlow",
    logo: "DF",
    gradient: "from-pink-500/20 to-rose-500/20"
  }
];

const LogoSlideshow = () => {
  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Main container for infinite scroll */}
      <div 
        className="flex animate-infinite-scroll hover:animation-play-state-paused will-change-transform"
        style={{
          width: `${partnerLogos.length * 2 * 200}px`, // (logoWidth + margin) * 2 sets
        }}
      >
        {/* First complete set */}
        {partnerLogos.map((partner, index) => (
          <div 
            key={`original-${index}`}
            className="flex-shrink-0 w-32 h-32 mx-8 flex items-center justify-center rounded-2xl bg-gradient-to-br border border-border/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group"
            style={{
              background: `linear-gradient(135deg, hsl(var(--primary)/0.08), hsl(var(--secondary)/0.08))`
            }}
          >
            <div className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {partner.logo}
            </div>
          </div>
        ))}
        
        {/* Exact duplicate set for seamless loop */}
        {partnerLogos.map((partner, index) => (
          <div 
            key={`duplicate-${index}`}
            className="flex-shrink-0 w-32 h-32 mx-8 flex items-center justify-center rounded-2xl bg-gradient-to-br border border-border/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group"
            style={{
              background: `linear-gradient(135deg, hsl(var(--primary)/0.08), hsl(var(--secondary)/0.08))`
            }}
          >
            <div className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {partner.logo}
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced fade edges */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none z-10" />
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
          <LogoSlideshow />
        </ScrollReveal>
      </div>
    </section>;
};