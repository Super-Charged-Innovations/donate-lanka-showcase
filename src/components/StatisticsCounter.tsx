import { ScrollReveal } from "./ScrollReveal";

const partnerLogos = [
  {
    name: "Startup Nation",
    logoUrl: "/startup-nation-logo.png"
  },
  {
    name: "DonateLanka",
    logoUrl: "/donatelanka-logo.png"
  },
  {
    name: "Hatch",
    logoUrl: "/partners/hatch-logo.png"
  },
  {
    name: "Veracity",
    logoUrl: "/partners/veracity-logo.png"
  },
  {
    name: "Supercharged",
    logoUrl: "/partners/supercharged-logo-new.png"
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
            className="flex-shrink-0 w-40 h-32 mx-5 flex items-center justify-center rounded-2xl bg-gradient-to-br border border-border/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group p-4"
            style={{
              background: `linear-gradient(135deg, hsl(var(--primary)/0.08), hsl(var(--secondary)/0.08))`
            }}
          >
            <img 
              src={partner.logoUrl} 
              alt={partner.name}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
        
        {/* Exact duplicate set for seamless loop */}
        {partnerLogos.map((partner, index) => (
          <div 
            key={`duplicate-${index}`}
            className="flex-shrink-0 w-40 h-32 mx-5 flex items-center justify-center rounded-2xl bg-gradient-to-br border border-border/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 group p-4"
            style={{
              background: `linear-gradient(135deg, hsl(var(--primary)/0.08), hsl(var(--secondary)/0.08))`
            }}
          >
            <img 
              src={partner.logoUrl} 
              alt={partner.name}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
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