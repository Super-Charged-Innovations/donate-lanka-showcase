import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { StartupRegistrationData, saveRegistrationData } from "@/types/registration";
import { cn } from "@/lib/utils";

const startupRegistrationSchema = z.object({
  // Personal Information
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().optional(),
  location: z.string().trim().min(2, "Location is required"),
  linkedinProfile: z.string().trim().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  
  // Company Information
  companyName: z.string().trim().min(2, "Company name is required"),
  companyStage: z.enum(['idea', 'prototype', 'mvp', 'launched', 'scaling']),
  industry: z.string().trim().min(2, "Industry is required"),
  companyDescription: z.string().trim().min(50, "Description must be at least 50 characters").max(500, "Description must be less than 500 characters"),
  
  // Funding Information
  fundingNeeded: z.number().min(1000, "Minimum funding needed is $1,000"),
  fundingStage: z.enum(['pre-seed', 'seed', 'series-a', 'series-b', 'growth']),
  fundingPurpose: z.string().trim().min(20, "Please explain how you'll use the funding"),
  previousFunding: z.number().min(0).optional(),
  
  // Team Information
  founderNames: z.string().trim().min(2, "Founder names are required"),
  teamSize: z.number().min(1).max(1000).optional(),
  keyTeamMembers: z.string().trim().optional(),
  
  // Additional Information
  website: z.string().trim().url("Please enter a valid website URL").optional().or(z.literal("")),
  pitchDeckUrl: z.string().trim().url("Please enter a valid URL").optional().or(z.literal("")),
  businessModel: z.string().trim().optional(),
  hearAboutUs: z.string().trim().optional(),
  
  // Agreements
  termsAccepted: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
  newsletterOptIn: z.boolean().optional(),
});

type StartupFormData = z.infer<typeof startupRegistrationSchema>;

const companyStages = [
  { value: 'idea', label: 'Idea Stage' },
  { value: 'prototype', label: 'Prototype' },
  { value: 'mvp', label: 'MVP' },
  { value: 'launched', label: 'Launched' },
  { value: 'scaling', label: 'Scaling' },
];

const fundingStages = [
  { value: 'pre-seed', label: 'Pre-Seed' },
  { value: 'seed', label: 'Seed' },
  { value: 'series-a', label: 'Series A' },
  { value: 'series-b', label: 'Series B' },
  { value: 'growth', label: 'Growth' },
];

const RegisterStartupPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const form = useForm<StartupFormData>({
    resolver: zodResolver(startupRegistrationSchema),
    defaultValues: {
      termsAccepted: false,
      newsletterOptIn: false,
    },
  });

  const { register, handleSubmit, formState: { errors }, watch, setValue, trigger } = form;

  const handleNext = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number): (keyof StartupFormData)[] => {
    switch (step) {
      case 1:
        return ['fullName', 'email', 'phone', 'location', 'linkedinProfile'];
      case 2:
        return ['companyName', 'companyStage', 'industry', 'companyDescription'];
      case 3:
        return ['fundingNeeded', 'fundingStage', 'fundingPurpose', 'previousFunding', 'founderNames'];
      case 4:
        return ['website', 'pitchDeckUrl', 'businessModel', 'hearAboutUs', 'termsAccepted'];
      default:
        return [];
    }
  };

  const onSubmit = async (data: StartupFormData) => {
    setIsSubmitting(true);
    
    try {
      const registrationData: StartupRegistrationData = {
        type: 'startup',
        fullName: data.fullName!,
        email: data.email!,
        phone: data.phone,
        location: data.location!,
        linkedinProfile: data.linkedinProfile,
        companyName: data.companyName!,
        companyStage: data.companyStage!,
        industry: data.industry!,
        companyDescription: data.companyDescription!,
        fundingNeeded: data.fundingNeeded!,
        fundingStage: data.fundingStage!,
        fundingPurpose: data.fundingPurpose!,
        previousFunding: data.previousFunding || 0,
        founderNames: data.founderNames!,
        teamSize: data.teamSize,
        keyTeamMembers: data.keyTeamMembers,
        website: data.website,
        pitchDeckUrl: data.pitchDeckUrl,
        businessModel: data.businessModel,
        hearAboutUs: data.hearAboutUs,
        termsAccepted: data.termsAccepted!,
        newsletterOptIn: data.newsletterOptIn,
        registrationDate: new Date().toISOString(),
      };

      const success = saveRegistrationData(registrationData);
      
      if (success) {
        toast({
          title: "Registration Successful!",
          description: "Thank you for registering. We'll notify you when Fund Lanka launches.",
        });
        navigate('/register/success', { 
          state: { type: 'startup', email: data.email } 
        });
      } else {
        throw new Error('Failed to save registration data');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalInfoStep();
      case 2:
        return renderCompanyInfoStep();
      case 3:
        return renderFundingInfoStep();
      case 4:
        return renderAdditionalInfoStep();
      default:
        return null;
    }
  };

  const renderPersonalInfoStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <p className="text-muted-foreground">Tell us about yourself as the founder</p>
      </div>
      
      <div className="grid gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            {...register('fullName')}
            placeholder="Your full name"
            className={errors.fullName ? "border-destructive" : ""}
          />
          {errors.fullName && (
            <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="your.email@example.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              {...register('phone')}
              placeholder="+94 77 123 4567"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            {...register('location')}
            placeholder="City, Country"
            className={errors.location ? "border-destructive" : ""}
          />
          {errors.location && (
            <p className="text-sm text-destructive mt-1">{errors.location.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
          <Input
            id="linkedinProfile"
            {...register('linkedinProfile')}
            placeholder="https://linkedin.com/in/yourprofile"
            className={errors.linkedinProfile ? "border-destructive" : ""}
          />
          {errors.linkedinProfile && (
            <p className="text-sm text-destructive mt-1">{errors.linkedinProfile.message}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderCompanyInfoStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Company Information</h2>
        <p className="text-muted-foreground">Tell us about your startup</p>
      </div>
      
      <div className="grid gap-4">
        <div>
          <Label htmlFor="companyName">Company Name *</Label>
          <Input
            id="companyName"
            {...register('companyName')}
            placeholder="Your company name"
            className={errors.companyName ? "border-destructive" : ""}
          />
          {errors.companyName && (
            <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="companyStage">Company Stage *</Label>
            <Select onValueChange={(value) => setValue('companyStage', value as any)}>
              <SelectTrigger className={errors.companyStage ? "border-destructive" : ""}>
                <SelectValue placeholder="Select company stage" />
              </SelectTrigger>
              <SelectContent>
                {companyStages.map((stage) => (
                  <SelectItem key={stage.value} value={stage.value}>
                    {stage.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.companyStage && (
              <p className="text-sm text-destructive mt-1">{errors.companyStage.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="industry">Industry *</Label>
            <Input
              id="industry"
              {...register('industry')}
              placeholder="e.g., FinTech, HealthTech, E-commerce"
              className={errors.industry ? "border-destructive" : ""}
            />
            {errors.industry && (
              <p className="text-sm text-destructive mt-1">{errors.industry.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="companyDescription">Company Description (Elevator Pitch) *</Label>
          <Textarea
            id="companyDescription"
            {...register('companyDescription')}
            placeholder="Describe your company, what problem you're solving, and your solution in 2-3 sentences. This is your elevator pitch."
            rows={4}
            className={errors.companyDescription ? "border-destructive" : ""}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.companyDescription ? (
              <p className="text-sm text-destructive">{errors.companyDescription.message}</p>
            ) : (
              <p className="text-sm text-muted-foreground">50-500 characters</p>
            )}
            <p className="text-sm text-muted-foreground">
              {watch('companyDescription')?.length || 0}/500
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFundingInfoStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Funding Information</h2>
        <p className="text-muted-foreground">Tell us about your funding needs and team</p>
      </div>
      
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fundingNeeded">Funding Needed (USD) *</Label>
            <Input
              id="fundingNeeded"
              type="number"
              {...register('fundingNeeded', { valueAsNumber: true })}
              placeholder="100000"
              className={errors.fundingNeeded ? "border-destructive" : ""}
            />
            {errors.fundingNeeded && (
              <p className="text-sm text-destructive mt-1">{errors.fundingNeeded.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="fundingStage">Funding Stage *</Label>
            <Select onValueChange={(value) => setValue('fundingStage', value as any)}>
              <SelectTrigger className={errors.fundingStage ? "border-destructive" : ""}>
                <SelectValue placeholder="Select funding stage" />
              </SelectTrigger>
              <SelectContent>
                {fundingStages.map((stage) => (
                  <SelectItem key={stage.value} value={stage.value}>
                    {stage.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.fundingStage && (
              <p className="text-sm text-destructive mt-1">{errors.fundingStage.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="fundingPurpose">How will you use the funding? *</Label>
          <Textarea
            id="fundingPurpose"
            {...register('fundingPurpose')}
            placeholder="Describe how you plan to use the investment (e.g., product development, hiring, marketing, etc.)"
            rows={3}
            className={errors.fundingPurpose ? "border-destructive" : ""}
          />
          {errors.fundingPurpose && (
            <p className="text-sm text-destructive mt-1">{errors.fundingPurpose.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="previousFunding">Previous Funding (USD)</Label>
          <Input
            id="previousFunding"
            type="number"
            {...register('previousFunding', { valueAsNumber: true })}
            placeholder="0"
            className={errors.previousFunding ? "border-destructive" : ""}
          />
          <p className="text-sm text-muted-foreground mt-1">Enter 0 if this is your first funding round</p>
          {errors.previousFunding && (
            <p className="text-sm text-destructive mt-1">{errors.previousFunding.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="founderNames">Founder Names *</Label>
          <Input
            id="founderNames"
            {...register('founderNames')}
            placeholder="John Doe, Jane Smith"
            className={errors.founderNames ? "border-destructive" : ""}
          />
          {errors.founderNames && (
            <p className="text-sm text-destructive mt-1">{errors.founderNames.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="teamSize">Team Size</Label>
          <Input
            id="teamSize"
            type="number"
            {...register('teamSize', { valueAsNumber: true })}
            placeholder="5"
            className={errors.teamSize ? "border-destructive" : ""}
          />
          {errors.teamSize && (
            <p className="text-sm text-destructive mt-1">{errors.teamSize.message}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderAdditionalInfoStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
        <p className="text-muted-foreground">Optional details to help us understand your startup better</p>
      </div>
      
      <div className="grid gap-4">
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            {...register('website')}
            placeholder="https://yourcompany.com"
            className={errors.website ? "border-destructive" : ""}
          />
          {errors.website && (
            <p className="text-sm text-destructive mt-1">{errors.website.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="pitchDeckUrl">Pitch Deck URL</Label>
          <Input
            id="pitchDeckUrl"
            {...register('pitchDeckUrl')}
            placeholder="https://drive.google.com/your-pitch-deck"
            className={errors.pitchDeckUrl ? "border-destructive" : ""}
          />
          {errors.pitchDeckUrl && (
            <p className="text-sm text-destructive mt-1">{errors.pitchDeckUrl.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="businessModel">Business Model</Label>
          <Textarea
            id="businessModel"
            {...register('businessModel')}
            placeholder="How does your company make money?"
            rows={2}
            className={errors.businessModel ? "border-destructive" : ""}
          />
          {errors.businessModel && (
            <p className="text-sm text-destructive mt-1">{errors.businessModel.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="hearAboutUs">How did you hear about Fund Lanka?</Label>
          <Input
            id="hearAboutUs"
            {...register('hearAboutUs')}
            placeholder="Social media, referral, search, etc."
            className={errors.hearAboutUs ? "border-destructive" : ""}
          />
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="termsAccepted"
              checked={watch('termsAccepted')}
              onCheckedChange={(checked) => setValue('termsAccepted', checked as boolean)}
              className={errors.termsAccepted ? "border-destructive" : ""}
            />
            <div className="grid gap-1.5 leading-none">
              <Label 
                htmlFor="termsAccepted"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the Terms and Conditions *
              </Label>
              <p className="text-xs text-muted-foreground">
                You agree to our terms of service and privacy policy for pre-launch registration.
              </p>
            </div>
          </div>
          {errors.termsAccepted && (
            <p className="text-sm text-destructive">{errors.termsAccepted.message}</p>
          )}

          <div className="flex items-start space-x-2">
            <Checkbox
              id="newsletterOptIn"
              checked={watch('newsletterOptIn')}
              onCheckedChange={(checked) => setValue('newsletterOptIn', checked as boolean)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label 
                htmlFor="newsletterOptIn"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subscribe to our newsletter
              </Label>
              <p className="text-xs text-muted-foreground">
                Get updates on funding opportunities and startup resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/register" 
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Registration
          </Link>
          
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Building2 className="w-3 h-3 mr-1" />
            Startup Registration
          </Badge>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="space-y-4">
              <CardTitle className="text-2xl text-center">
                Startup Registration
              </CardTitle>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Step {currentStep} of {totalSteps}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              {/* Step Labels */}
              <div className="grid grid-cols-4 gap-2 text-xs text-center">
                {['Personal', 'Company', 'Funding', 'Details'].map((step, index) => (
                  <div
                    key={step}
                    className={cn(
                      "py-1 px-2 rounded",
                      index + 1 === currentStep
                        ? "bg-primary text-primary-foreground"
                        : index + 1 < currentStep
                        ? "bg-success text-success-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {index + 1 < currentStep && <CheckCircle2 className="w-3 h-3 mx-auto mb-1" />}
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button type="button" onClick={handleNext}>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Complete Registration"}
                    <CheckCircle2 className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterStartupPage;