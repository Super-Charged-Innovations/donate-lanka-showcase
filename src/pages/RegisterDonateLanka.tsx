import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Heart,
  ArrowLeft,
  Mail,
  Building2
} from "lucide-react";
import { toast } from "sonner";
import { saveRegistrationData } from "@/types/registration";

const donateLankaSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().optional(),
  newsletterOptIn: z.boolean().default(true),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
});

type DonateLankaFormData = z.infer<typeof donateLankaSchema>;

const RegisterDonateLanka = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<DonateLankaFormData>({
    resolver: zodResolver(donateLankaSchema),
    defaultValues: {
      newsletterOptIn: true,
      termsAccepted: false
    }
  });

  const termsAccepted = watch("termsAccepted");

  const onSubmit = async (data: DonateLankaFormData) => {
    setIsSubmitting(true);
    
    try {
      const registrationData = {
        type: 'donatelanka' as const,
        email: data.email,
        companyName: data.companyName,
        newsletterOptIn: data.newsletterOptIn,
        termsAccepted: data.termsAccepted,
        registrationDate: new Date().toISOString()
      };

      const saved = saveRegistrationData(registrationData);
      
      if (saved) {
        toast.success("Registration successful! Check your email for confirmation.");
        navigate("/register/success", { 
          state: { 
            type: 'donatelanka',
            email: data.email 
          } 
        });
      } else {
        toast.error("Failed to save registration. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Back Navigation */}
        <div className="max-w-2xl mx-auto mb-6">
          <Link to="/register" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to platform selection
          </Link>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-secondary/10 rounded-full">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
          </div>
          <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            DonateLanka Waitlist
          </Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Join the Waitlist
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Be the first to know when DonateLanka launches. Join our waitlist and help us build a platform for transparent charitable giving in Sri Lanka.
          </p>
        </div>

        {/* Registration Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Get Early Access</CardTitle>
            <p className="text-muted-foreground">
              Sign up to receive updates and priority access when we launch
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Company Name (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="companyName" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Organization/Company Name <span className="text-muted-foreground text-xs">(Optional)</span>
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Your organization or company"
                  {...register("companyName")}
                />
              </div>

              {/* Newsletter Opt-in */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="newsletterOptIn"
                  defaultChecked={true}
                  onCheckedChange={(checked) => setValue("newsletterOptIn", checked as boolean)}
                />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="newsletterOptIn" className="text-sm cursor-pointer">
                    Send me updates about DonateLanka and social impact initiatives
                  </Label>
                </div>
              </div>

              {/* Terms Acceptance */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="termsAccepted"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setValue("termsAccepted", checked as boolean)}
                />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="termsAccepted" className="text-sm cursor-pointer">
                    I agree to the <Link to="/terms" className="text-primary hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> <span className="text-destructive">*</span>
                  </Label>
                  {errors.termsAccepted && (
                    <p className="text-sm text-destructive">{errors.termsAccepted.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full"
                variant="secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>

              {/* Additional Info */}
              <div className="text-center text-sm text-muted-foreground space-y-2 pt-4 border-t border-border">
                <p>
                  By joining, you'll be among the first to access DonateLanka when we launch.
                </p>
                <p>
                  Questions? Contact us at <a href="mailto:hello@donatelanka.com" className="text-primary hover:underline">hello@donatelanka.com</a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterDonateLanka;
