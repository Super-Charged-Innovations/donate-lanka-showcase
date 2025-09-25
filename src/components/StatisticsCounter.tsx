import { useEffect, useState } from "react";
const companyLogos = [{
  name: "TechCorp",
  logo: "TC"
}, {
  name: "InnovateHub",
  logo: "IH"
}, {
  name: "FutureTech",
  logo: "FT"
}, {
  name: "NextGen Solutions",
  logo: "NG"
}];
const LogoSlideshow = () => {
  return <div className="relative w-full overflow-hidden py-8">
      {/* Moving logos container */}
      <div className="flex animate-scroll space-x-16">
        {/* First set of logos */}
        {companyLogos.map((company, index) => <div key={`set1-${index}`} className="flex-shrink-0 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50">
            <span className="text-3xl font-bold text-primary">{company.logo}</span>
          </div>)}
        
        {/* Duplicate set for seamless loop */}
        {companyLogos.map((company, index) => <div key={`set2-${index}`} className="flex-shrink-0 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50">
            <span className="text-3xl font-bold text-primary">{company.logo}</span>
          </div>)}
      </div>
      
      {/* Fade edges for disappearing effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
    </div>;
};
export const StatisticsCounter = () => {
  return <section className="py-16 bg-muted/30">
      <div className="w-full">
        <div className="text-center mb-8 px-4">
          <h2 className="text-2xl font-bold text-foreground mb-2">Our Partners</h2>
          <p className="text-muted-foreground">Partnering with innovative companies across Sri Lanka</p>
        </div>
        <LogoSlideshow />
      </div>
    </section>;
};