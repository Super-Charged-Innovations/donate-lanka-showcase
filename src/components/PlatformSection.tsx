import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Heart, Rocket, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "./ScrollReveal";
export const PlatformSection = () => {
  return <section className="py-16 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
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

        {/* Split Platform Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Startup Nation */}
          <ScrollReveal animation="fade-left" delay={200}>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 bg-gradient-hero/5">
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
                <img src="/partners/hatch-logo.png" alt="Hatch" className="h-8 object-contain" />
              </div>

              {/* Mission Statement */}
              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Startup Nation is Sri Lanka's premier platform for transforming innovative ideas into thriving businesses. 
                  We bridge the gap between visionary entrepreneurs and strategic investors, fostering an ecosystem where 
                  groundbreaking startups can access the funding, mentorship, and resources they need to scale successfully.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Our Mission & Goals</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To establish Sri Lanka as a leading startup hub in South Asia by creating sustainable pathways for 
                    entrepreneurs to build companies that drive economic growth, generate employment, and solve pressing 
                    social challenges through innovative technology and business models.
                  </p>
                </div>

                {/* Key Focus Areas */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start justify-center lg:justify-start text-muted-foreground">
                    <Building2 className="w-4 h-4 mr-3 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Business Development & Mentorship:</span>
                      <span className="block">Comprehensive support from ideation to market entry, including strategic planning, product development guidance, and industry-specific mentoring programs.</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start text-muted-foreground">
                    <Users className="w-4 h-4 mr-3 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Investor Network & Funding:</span>
                      <span className="block">Direct access to angel investors, venture capitalists, and institutional funding partners across seed, Series A, and growth-stage investment rounds.</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start text-muted-foreground">
                    <Rocket className="w-4 h-4 mr-3 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Scaling & Market Expansion:</span>
                      <span className="block">Strategic resources for regional and international expansion, including regulatory guidance, partnership facilitation, and market intelligence.</span>
                    </div>
                  </div>
                </div>
              </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Right Side - DonateLanka */}
          <ScrollReveal animation="fade-right" delay={400}>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary/50 bg-gradient-hero/5">
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

              {/* Mission Statement */}
              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  DonateLanka is dedicated to creating sustainable social impact across Sri Lanka by connecting generous 
                  donors with vetted charitable organizations and community-driven initiatives. We ensure transparency, 
                  accountability, and measurable outcomes in every project, from disaster relief to education and healthcare.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Our Mission & Goals</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To build the most trusted platform for charitable giving in Sri Lanka, ensuring that every donation 
                    creates maximum impact in addressing poverty, education gaps, healthcare needs, environmental challenges, 
                    and disaster recovery efforts across all 25 districts.
                  </p>
                </div>

                {/* Key Focus Areas */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start justify-center lg:justify-start text-muted-foreground">
                    <Heart className="w-4 h-4 mr-3 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Transparent Impact Tracking:</span>
                      <span className="block">Real-time project updates, financial transparency, and measurable outcome reporting ensure donors see exactly how their contributions create change.</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start text-muted-foreground">
                    <Users className="w-4 h-4 mr-3 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Community-Centered Approach:</span>
                      <span className="block">Direct partnerships with local NGOs, religious organizations, and grassroots movements to address the most pressing needs in each community.</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start text-muted-foreground">
                    <Building2 className="w-4 h-4 mr-3 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Sustainable Development Focus:</span>
                      <span className="block">Support for education, healthcare, environmental conservation, disaster preparedness, and economic empowerment projects that create long-term positive change.</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            </Card>
          </ScrollReveal>
        </div>

      </div>
    </section>;
};