import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "./ScrollReveal";

export const PlatformSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Two Powerful Platforms, One Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're building the next big startup or supporting community initiatives, 
              FundLanka provides the perfect platform for your journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Platform Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Cards will be added in Phase 2 */}
        </div>
      </div>
    </section>
  );
};