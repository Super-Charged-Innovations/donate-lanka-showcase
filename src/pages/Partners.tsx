import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Handshake, Lightbulb, ExternalLink } from "lucide-react";

const Partners = () => {
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
            Our Strategic Partners
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight md:leading-relaxed">
            Building Impact Together
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We collaborate with leading organizations to amplify our impact and bring meaningful change to communities worldwide
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative text-center border-2 border-primary/20 bg-gradient-hero shadow-primary hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardHeader className="relative z-10">
                <div className="w-full h-24 flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="/partners/hatch-logo.png" 
                    alt="Hatch Sri Lanka Logo" 
                    className="h-full w-auto object-contain max-w-full"
                  />
                </div>
                <Badge variant="outline" className="mb-2 mx-auto w-fit">Co-working Partner</Badge>
                <CardTitle className="text-2xl">Hatch Sri Lanka</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base mb-4">
                  Leading co-working space provider in Sri Lanka, fostering innovation and entrepreneurship. 
                  Hatch provides our team with world-class facilities and access to a vibrant startup ecosystem.
                </CardDescription>
                <a 
                  href="https://hatch.lk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm text-primary hover:text-primary-600 transition-colors duration-200 font-medium hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Learn more about Hatch
                </a>
              </CardContent>
            </Card>

            <Card className="relative text-center border-2 border-secondary/20 bg-gradient-hero shadow-secondary hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardHeader className="relative z-10">
                <div className="w-full h-24 flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="/partners/veracity-logo.png" 
                    alt="Veracity Group Logo" 
                    className="h-full w-auto object-contain max-w-full"
                  />
                </div>
                <Badge variant="outline" className="mb-2 mx-auto w-fit">Co-founder</Badge>
                <CardTitle className="text-2xl">Veracity Group</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base mb-4">
                  Strategic consulting and business development experts, bringing decades of experience in 
                  scaling social impact ventures and connecting them with sustainable funding opportunities.
                </CardDescription>
                <a 
                  href="https://www.veracitygp.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm text-secondary hover:text-secondary-600 transition-colors duration-200 font-medium hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Discover Veracity Group
                </a>
              </CardContent>
            </Card>

            <Card className="relative text-center border-2 border-warning/20 bg-gradient-hero shadow-primary hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardHeader className="relative z-10">
                <div className="w-full h-24 flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="/partners/supercharged-logo.png" 
                    alt="Super Charged Innovations Logo" 
                    className="h-full w-auto object-contain max-w-full"
                  />
                </div>
                <Badge variant="outline" className="mb-2 mx-auto w-fit">Co-founder</Badge>
                <CardTitle className="text-2xl">Super Charged Innovations</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base mb-4">
                  Technology innovation specialists focused on creating scalable solutions for social good. 
                  They drive our technical strategy and ensure our platform leverages cutting-edge technologies.
                </CardDescription>
                <a 
                  href="https://superchargedinnovations.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm text-warning hover:text-warning/80 transition-colors duration-200 font-medium hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Explore innovations
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Why We Partner</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our partnerships are built on shared values and complementary strengths that amplify our collective impact
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Expertise & Experience</h3>
              <p className="text-muted-foreground">
                Each partner brings specialized knowledge and proven track records in their respective fields, 
                enhancing our platform's capabilities and reach.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Network & Resources</h3>
              <p className="text-muted-foreground">
                Through our partnerships, we gain access to extensive networks of investors, mentors, 
                and changemakers committed to sustainable development.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Innovation & Technology</h3>
              <p className="text-muted-foreground">
                Our technology partners ensure we stay at the forefront of innovation, delivering 
                cutting-edge solutions for social impact funding.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Global Reach</h3>
              <p className="text-muted-foreground">
                Strategic partnerships enable us to expand our impact globally while maintaining 
                local expertise and cultural sensitivity in each market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;