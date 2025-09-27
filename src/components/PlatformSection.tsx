import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Heart, Rocket, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const PlatformSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Two Powerful Platforms, One Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're building the next big startup or supporting community initiatives, 
            FundLanka provides the perfect platform for your journey.
          </p>
        </div>

        {/* Split Platform Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Startup Nation */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
            <CardContent className="p-8 text-center lg:text-left">
              {/* Icon and Badge */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-4">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Startup Nation
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Driving empowerment for Startups
                  </p>
                </div>
              </div>

              {/* Powered By Hatch */}
              <div className="flex items-center justify-center lg:justify-start mb-6 p-4 bg-muted/30 rounded-lg">
                <span className="text-sm text-muted-foreground mr-3">Powered by</span>
                <img 
                  src="/partners/hatch-logo.png" 
                  alt="Hatch" 
                  className="h-8 object-contain"
                />
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Transform your innovative ideas into thriving businesses. Access funding, 
                  mentorship, and a community of entrepreneurs ready to support your journey 
                  from concept to market success.
                </p>
                
                {/* Features */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                    <Building2 className="w-4 h-4 mr-2 text-primary" />
                    <span>Business Development Support</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>Investor Network Access</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                    <Rocket className="w-4 h-4 mr-2 text-primary" />
                    <span>Scaling & Growth Resources</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                >
                  <Link to="/register-startup">
                    Launch Your Startup
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-primary/30 hover:border-primary">
                  <Link to="/projects?category=startups">
                    Explore Startup Projects
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - DonateLanka */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary/50">
            <CardContent className="p-8 text-center lg:text-left">
              {/* Icon and Title */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    DonateLanka
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Charity & Community Project Funding
                  </p>
                </div>
              </div>

              {/* Community Focus Badge */}
              <div className="flex items-center justify-center lg:justify-start mb-6 p-4 bg-secondary/10 rounded-lg">
                <Users className="w-5 h-5 text-secondary mr-2" />
                <span className="text-sm font-medium text-secondary">Community-Driven Impact</span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Make a meaningful difference in Sri Lankan communities. Support local charities, 
                  social causes, and grassroots initiatives that create lasting positive change 
                  across all 25 districts.
                </p>
                
                {/* Features */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                    <Heart className="w-4 h-4 mr-2 text-secondary" />
                    <span>Transparent Charity Projects</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    <span>Community Impact Tracking</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
                    <Building2 className="w-4 h-4 mr-2 text-secondary" />
                    <span>Local Organization Support</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group/btn"
                >
                  <Link to="/projects?category=charity">
                    Support a Cause
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full border-secondary/30 hover:border-secondary">
                  <Link to="/start-campaign?type=charity">
                    Start a Community Project
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 via-background to-secondary/5 rounded-2xl border border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Not sure which platform is right for you?
          </h3>
          <p className="text-muted-foreground mb-4">
            Explore all projects and discover opportunities that match your interests and goals.
          </p>
          <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/5">
            <Link to="/projects">
              Browse All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};