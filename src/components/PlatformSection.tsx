import { Card, CardContent } from "@/components/ui/card";
import { Building2, Heart, Rocket, Users, Globe } from "lucide-react";
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
          
          {/* Startup Nation Card */}
          <ScrollReveal animation="fade-left" delay={200}>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 bg-gradient-hero/5">
            <CardContent className="p-8">
              {/* Logo Section */}
              <div className="h-48 flex items-center justify-center mb-2">
                <img 
                  src="/startup-nation-logo.png" 
                  alt="Startup Nation" 
                  className="w-auto h-32 object-contain mx-auto"
                />
              </div>
              
              {/* Platform Name */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold tracking-wider text-foreground">STARTUP NATION</h3>
              </div>

              {/* Badge Section */}
              <div className="flex items-center justify-center mb-6 p-3 bg-muted/30 rounded-lg">
                <span className="text-sm text-muted-foreground mr-3">Powered by</span>
                <img src="/partners/hatch-logo.png" alt="Hatch" className="h-6 object-contain" />
              </div>

              {/* Description */}
              <p className="text-center text-muted-foreground leading-relaxed mb-8">
                Transform your ideas into successful businesses. Access funding, mentorship, 
                and investors to scale your startup.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Development</h4>
                    <p className="text-sm text-muted-foreground">Expert guidance from concept to market</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Investor Network</h4>
                    <p className="text-sm text-muted-foreground">Connect with VCs and angel investors</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Growth Resources</h4>
                    <p className="text-sm text-muted-foreground">Tools and support for scaling up</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollReveal>

          {/* DonateLanka Card */}
          <ScrollReveal animation="fade-right" delay={400}>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary/50 bg-gradient-hero/5">
            <CardContent className="p-8">
              {/* Logo Section */}
              <div className="h-48 flex items-center justify-center mb-6">
                <img 
                  src="/donatelanka-logo.png" 
                  alt="DonateLanka" 
                  className="w-auto h-32 object-contain mx-auto"
                />
              </div>

              {/* Badge Section */}
              <div className="flex items-center justify-center mb-6 p-3 bg-secondary/10 rounded-lg">
                <Users className="w-5 h-5 text-secondary mr-2" />
                <span className="text-sm font-medium text-secondary">Community-Driven Impact</span>
              </div>

              {/* Description */}
              <p className="text-center text-muted-foreground leading-relaxed mb-8">
                Support meaningful causes and community projects across Sri Lanka. 
                Create lasting impact through transparent charitable giving.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-3">
                    <Heart className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Transparent Projects</h4>
                    <p className="text-sm text-muted-foreground">Track your impact with real-time updates</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-3">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Community Focus</h4>
                    <p className="text-sm text-muted-foreground">Support local NGOs and grassroots initiatives</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-3">
                    <Globe className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Island-wide Reach</h4>
                    <p className="text-sm text-muted-foreground">Projects across all 25 districts</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};