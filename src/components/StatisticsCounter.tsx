import { useEffect, useState } from "react";
const companyLogos = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateHub", logo: "IH" },
  { name: "FutureTech", logo: "FT" },
  { name: "NextGen Solutions", logo: "NG" }
];

const LogoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companyLogos.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center space-x-8 py-8">
        {companyLogos.map((company, index) => {
          const isCenter = index === currentIndex;
          const isLeft = index === (currentIndex - 1 + companyLogos.length) % companyLogos.length;
          const isRight = index === (currentIndex + 1) % companyLogos.length;
          
          let animationClass = "opacity-0 scale-75";
          if (isCenter) {
            animationClass = "opacity-100 scale-100";
          } else if (isLeft || isRight) {
            animationClass = "opacity-60 scale-90";
          }

          return (
            <div
              key={company.name}
              className={`transition-all duration-500 ease-in-out transform ${animationClass} ${
                !isCenter && !isLeft && !isRight ? "hidden" : "flex"
              } items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50`}
            >
              <span className="text-2xl font-bold text-primary">{company.logo}</span>
            </div>
          );
        })}
      </div>
      
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
    </div>
  );
};
export const StatisticsCounter = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Trusted by Leading Organizations</h2>
          <p className="text-muted-foreground">Partnering with innovative companies across Sri Lanka</p>
        </div>
        <LogoSlideshow />
      </div>
    </section>
  );
};