import { Hero } from "@/components/Hero";
import { StatisticsCounter } from "@/components/StatisticsCounter";
import { PlatformSection } from "@/components/PlatformSection";
import { SDGSection } from "@/components/SDGSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatisticsCounter />
      <PlatformSection />
      <SDGSection />
    </div>
  );
};

export default Index;
