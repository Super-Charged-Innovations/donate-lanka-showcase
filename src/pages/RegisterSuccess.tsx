import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Mail, 
  Calendar, 
  Users, 
  TrendingUp,
  Home,
  Building2,
  Target
} from "lucide-react";

const RegisterSuccessPage = () => {
  const location = useLocation();
  const { type, email } = location.state || { type: 'startup', email: '' };

  const isStartup = type === 'startup';
  const isDonateLanka = type === 'donatelanka';
  
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-success/10 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-success" />
              </div>
            </div>
            
            <Badge 
              variant="outline" 
              className={`mb-4 mx-auto ${isStartup ? 'bg-primary/10 text-primary border-primary/20' : 'bg-secondary/10 text-secondary border-secondary/20'}`}
            >
              {isStartup ? <Building2 className="w-3 h-3 mr-1" /> : <Target className="w-3 h-3 mr-1" />}
              {isStartup ? 'Startup' : 'Investor'} Registration Complete
            </Badge>
            
            <CardTitle className="text-3xl font-bold mb-2">
              {isDonateLanka ? "You're on the Waitlist!" : "Welcome to Fund Lanka!"}
            </CardTitle>
            
            <p className="text-muted-foreground text-lg">
              {isDonateLanka 
                ? "Thank you for joining the DonateLanka waitlist. We'll notify you as soon as we launch!"
                : "Thank you for registering. You're now part of Sri Lanka's premier funding ecosystem."
              }
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Confirmation Details */}
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Confirmation sent to:</span>
              </div>
              <p className="font-semibold text-primary">{email}</p>
            </div>

            {/* What's Next */}
            <div className="text-left space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4">What happens next?</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-1">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Confirmation</h4>
                    <p className="text-sm text-muted-foreground">
                      Check your email for a confirmation message with important next steps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-secondary/10 rounded-full mt-1">
                    <Calendar className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Launch Notification</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll notify you as soon as Fund Lanka officially launches with priority access.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-success/10 rounded-full mt-1">
                    <Users className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Early Access Benefits</h4>
                    <p className="text-sm text-muted-foreground">
                      {isDonateLanka
                        ? "Get early access to transparent donation tracking and social impact campaigns."
                        : isStartup 
                        ? "Get early access to our investor network and funding opportunities."
                        : "Get early access to curated startup deals and investment opportunities."
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-warning/10 rounded-full mt-1">
                    <TrendingUp className="w-4 h-4 text-warning" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Platform Features</h4>
                    <p className="text-sm text-muted-foreground">
                      {isDonateLanka
                        ? "Access to verified nonprofits, impact reports, and donation tracking."
                        : isStartup
                        ? "Access to pitch deck builder, investor matching, and funding analytics."
                        : "Access to deal flow, due diligence tools, and portfolio management."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Follow us on social media for updates and funding insights
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="outline">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                
                <Button asChild variant={isDonateLanka ? "secondary" : "default"}>
                  <Link to="/about">
                    Learn More About {isDonateLanka ? 'DonateLanka' : 'Fund Lanka'}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center pt-4 text-sm text-muted-foreground space-y-2">
              <p>
                Questions? Contact us at <a href={`mailto:hello@${isDonateLanka ? 'donatelanka' : 'fundlanka'}.com`} className="text-primary hover:underline">hello@{isDonateLanka ? 'donatelanka' : 'fundlanka'}.com</a>
              </p>
              <p>
                We typically launch new features within 2-4 weeks of pre-launch registration.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterSuccessPage;