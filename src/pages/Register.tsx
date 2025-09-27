import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Target,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const RegisterPage = () => {
  const [selectedType, setSelectedType] = useState<'startup' | 'investor' | null>(null);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Pre-Launch Registration
          </Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Join Fund Lanka Early
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of Sri Lanka's premier funding ecosystem. Register now to get early access when we launch.
          </p>
        </div>

        {/* Account Type Selection */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-semibold text-center mb-8">
            Choose Your Path
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Startup Card */}
            <Card className={cn(
              "relative overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:shadow-lg",
              selectedType === 'startup' 
                ? "border-primary shadow-primary/20" 
                : "border-border hover:border-primary/50"
            )}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">For Startups</CardTitle>
                  </div>
                  {selectedType === 'startup' && (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  )}
                </div>
                <p className="text-muted-foreground">
                  Looking for funding to grow your innovative business idea?
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span>Access to verified investors</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-success" />
                    <span>Mentorship & guidance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-success" />
                    <span>Fast-track funding process</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Legal & compliance support</span>
                  </div>
                </div>
                
                <Button
                  className="w-full mt-6"
                  variant={selectedType === 'startup' ? "default" : "outline"}
                  asChild
                >
                  <Link to="/register/startup">
                    Get Started as Startup
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Investor Card */}
            <Card className={cn(
              "relative overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:shadow-lg",
              selectedType === 'investor' 
                ? "border-secondary shadow-secondary/20" 
                : "border-border hover:border-secondary/50"
            )}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">For Investors</CardTitle>
                  </div>
                  {selectedType === 'investor' && (
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  )}
                </div>
                <p className="text-muted-foreground">
                  Ready to invest in Sri Lanka's most promising startups?
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-success" />
                    <span>Curated startup pipeline</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-success" />
                    <span>Due diligence support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span>Portfolio management tools</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-success" />
                    <span>Investor network access</span>
                  </div>
                </div>
                
                <Button
                  className="w-full mt-6"
                  variant={selectedType === 'investor' ? "secondary" : "outline"}
                  asChild
                >
                  <Link to="/register/investor">
                    Get Started as Investor
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground">
              Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in here</Link>
            </p>
            <p className="text-sm text-muted-foreground">
              By registering, you'll be notified when Fund Lanka officially launches with priority access to all features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;