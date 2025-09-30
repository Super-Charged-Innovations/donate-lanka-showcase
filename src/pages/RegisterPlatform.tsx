import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Heart,
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";

const RegisterPlatform = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Pre-Launch Registration
          </Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Choose Your Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join Sri Lanka's premier funding and donation ecosystem. Select the platform that matches your goals.
          </p>
        </div>

        {/* Platform Selection */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* FundLanka Card */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">FundLanka</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  Investment platform connecting startups with investors
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-success" />
                    <span>For startups seeking funding</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-success" />
                    <span>For investors looking for opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-success" />
                    <span>Equity-based investments</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6" asChild>
                  <Link to="/register/fundlanka">
                    Join FundLanka
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* DonateLanka Card */}
            <Card className="relative overflow-hidden border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">DonateLanka</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  Social impact platform for donations and charitable giving
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Heart className="w-4 h-4 text-success" />
                    <span>For nonprofits and social causes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-success" />
                    <span>For donors supporting communities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-success" />
                    <span>Transparent impact tracking</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6" variant="secondary" asChild>
                  <Link to="/register/donatelanka">
                    Join DonateLanka
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              By registering, you'll be notified when the platforms officially launch with priority access to all features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPlatform;
