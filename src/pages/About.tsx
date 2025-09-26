import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Globe, Users, Target, Award, TrendingUp, Building2, Handshake, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 md:w-48 md:h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 md:w-24 md:h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500" />
        </div>
        <div className="container relative z-20 mx-auto max-w-4xl pt-16">
          <Badge variant="secondary" className="mb-4">
            About Our Mission
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight md:leading-relaxed">
            Empowering Change Through Collective Action
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're building a platform that connects passionate changemakers with impactful projects, 
            aligned with the United Nations Sustainable Development Goals to create a better world for all.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of collective action to address the world's most pressing challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every project on our platform is driven by genuine care for making a positive impact in the world.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We align with UN SDGs to ensure every contribution supports meaningful, measurable global progress.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building strong communities of supporters, creators, and beneficiaries working together for change.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Purpose-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every feature and decision is made with the goal of maximizing positive impact and accessibility.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clear reporting, open communication, and honest progress updates on every funded project.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Leveraging technology to make fundraising more effective, accessible, and impactful than ever.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Strategic Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with leading organizations to amplify our impact and bring meaningful change to communities worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <Badge variant="outline" className="mb-2 mx-auto w-fit">Co-working Partner</Badge>
                <CardTitle className="text-xl">Hatch Sri Lanka</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Leading co-working space provider in Sri Lanka, fostering innovation and entrepreneurship. 
                  Hatch provides our team with world-class facilities and access to a vibrant startup ecosystem.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-secondary" />
                </div>
                <Badge variant="outline" className="mb-2 mx-auto w-fit">Co-founder</Badge>
                <CardTitle className="text-xl">Veracity Group</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Strategic consulting and business development experts, bringing decades of experience in 
                  scaling social impact ventures and connecting them with sustainable funding opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <Badge variant="outline" className="mb-2 mx-auto w-fit">Co-founder</Badge>
                <CardTitle className="text-xl">Super Charged Innovations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Technology innovation specialists focused on creating scalable solutions for social good. 
                  They drive our technical strategy and ensure our platform leverages cutting-edge technologies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Aligned with UN Sustainable Development Goals</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our platform is designed to support all 17 UN SDGs, ensuring that every project contributes 
            to the global agenda for sustainable development by 2030.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {Array.from({ length: 17 }, (_, i) => (
              <div key={i + 1} className="aspect-square">
                <img
                  src={`/sdg-icons/sdg-${String(i + 1).padStart(2, '0')}.jpg`}
                  alt={`SDG ${i + 1}`}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          <Button asChild>
            <Link to="/projects">Explore Projects</Link>
          </Button>
        </div>
      </section>

      {/* SDG Investment Trust */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Building Investor Confidence Through SDG Alignment</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Startups that align with the UN Sustainable Development Goals demonstrate measurable impact, 
            transparent reporting, and long-term vision—key factors that modern investors value when making funding decisions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Risk Mitigation</h3>
              <p className="text-muted-foreground">
                SDG-aligned businesses show proactive approaches to regulatory compliance, environmental risks, 
                and social responsibility, reducing potential future liabilities for investors.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Market Advantage</h3>
              <p className="text-muted-foreground">
                Companies addressing global challenges tap into growing markets for sustainable solutions, 
                positioning themselves ahead of traditional competitors and regulatory changes.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Transparent Metrics</h3>
              <p className="text-muted-foreground">
                SDG frameworks provide standardized impact measurement, giving investors clear visibility 
                into both financial returns and societal value creation.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">ESG Compliance</h3>
              <p className="text-muted-foreground">
                Alignment with global sustainability goals helps startups meet increasing Environmental, 
                Social, and Governance requirements from institutional investors and funds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;