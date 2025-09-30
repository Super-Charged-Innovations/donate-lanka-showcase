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
import { ArrowLeft, ArrowRight, Target, CheckCircle2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { InvestorRegistrationData, saveRegistrationData } from "@/types/registration";
import { cn } from "@/lib/utils";

const investorRegistrationSchema = z.object({
  // Personal Information
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().optional(),
  location: z.string().trim().min(2, "Location is required"),
  linkedinProfile: z.string().trim().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  
  // Investor Profile
  investorType: z.enum(['individual', 'angel', 'vc', 'institution', 'family-office']),
  minInvestmentRange: z.number().min(1000, "Minimum investment must be at least $1,000"),
  maxInvestmentRange: z.number().min(1000, "Maximum investment must be at least $1,000"),
  
  // Investment Preferences
  preferredIndustries: z.array(z.string()).min(1, "Please select at least one industry"),
  preferredStages: z.array(z.string()).min(1, "Please select at least one funding stage"),
  geographicFocus: z.array(z.string()).min(1, "Please select at least one region"),
  
  // Experience & Background
  investmentExperience: z.string().trim().min(20, "Please describe your investment experience"),
  portfolioSize: z.string().trim().optional(),
  previousInvestments: z.string().trim().optional(),
  expertise: z.string().trim().optional(),
  
  // Additional Information
  accreditedInvestor: z.boolean().optional(),
  companyName: z.string().trim().optional(),
  aum: z.number().min(0).optional(),
  hearAboutUs: z.string().trim().optional(),
  
  // Agreements
  termsAccepted: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
  newsletterOptIn: z.boolean().optional(),
}).refine((data) => data.maxInvestmentRange >= data.minInvestmentRange, {
  message: "Maximum investment must be greater than or equal to minimum investment",
  path: ["maxInvestmentRange"],
});

type InvestorFormData = z.infer<typeof investorRegistrationSchema>;

const investorTypes = [
  { value: 'individual', label: 'Individual Investor' },
  { value: 'angel', label: 'Angel Investor' },
  { value: 'vc', label: 'Venture Capital' },
  { value: 'institution', label: 'Institution' },
  { value: 'family-office', label: 'Family Office' },
];

const industries = [
  'FinTech', 'HealthTech', 'EdTech', 'E-commerce', 'SaaS', 'IoT',
  'AI/ML', 'Blockchain', 'Clean Energy', 'Agritech', 'Food & Beverage',
  'Real Estate', 'Logistics', 'Travel', 'Entertainment', 'Other'
];

const fundingStages = [
  { value: 'pre-seed', label: 'Pre-Seed' },
  { value: 'seed', label: 'Seed' },
  { value: 'series-a', label: 'Series A' },
  { value: 'series-b', label: 'Series B' },
  { value: 'growth', label: 'Growth' },
];

const geographicRegions = [
  'Sri Lanka', 'South Asia', 'Southeast Asia', 'Asia Pacific', 
  'Middle East', 'Europe', 'North America', 'Global'
];

const RegisterInvestorPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const form = useForm<InvestorFormData>({
    resolver: zodResolver(investorRegistrationSchema),
    defaultValues: {
      termsAccepted: false,
      newsletterOptIn: false,
      preferredIndustries: [],
      preferredStages: [],
      geographicFocus: [],
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

  const getFieldsForStep = (step: number): (keyof InvestorFormData)[] => {
    switch (step) {
      case 1:
        return ['fullName', 'email', 'phone', 'location', 'linkedinProfile'];
      case 2:
        return ['investorType', 'minInvestmentRange', 'maxInvestmentRange'];
      case 3:
        return ['preferredIndustries', 'preferredStages', 'geographicFocus'];
      case 4:
        return ['investmentExperience', 'termsAccepted'];
      default:
        return [];
    }
  };

  const toggleSelection = (
    item: string, 
    selectedItems: string[], 
    setSelectedItems: (items: string[]) => void,
    fieldName: keyof InvestorFormData
  ) => {
    const newSelection = selectedItems.includes(item)
      ? selectedItems.filter(i => i !== item)
      : [...selectedItems, item];
    
    setSelectedItems(newSelection);
    setValue(fieldName, newSelection as any);
  };

  const onSubmit = async (data: InvestorFormData) => {
    setIsSubmitting(true);
    
    try {
      const registrationData: InvestorRegistrationData = {
        type: 'investor',
        fullName: data.fullName!,
        email: data.email!,
        phone: data.phone,
        location: data.location!,
        linkedinProfile: data.linkedinProfile,
        investorType: data.investorType!,
        investmentRange: {
          min: data.minInvestmentRange!,
          max: data.maxInvestmentRange!,
        },
        preferredIndustries: data.preferredIndustries,
        preferredStages: data.preferredStages as ('pre-seed' | 'seed' | 'series-a' | 'series-b' | 'growth')[],
        geographicFocus: data.geographicFocus,
        investmentExperience: data.investmentExperience!,
        portfolioSize: data.portfolioSize,
        previousInvestments: data.previousInvestments,
        expertise: data.expertise,
        accreditedInvestor: data.accreditedInvestor,
        companyName: data.companyName,
        aum: data.aum,
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
          state: { type: 'investor', email: data.email } 
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
        return renderInvestorProfileStep();
      case 3:
        return renderPreferencesStep();
      case 4:
        return renderExperienceStep();
      default:
        return null;
    }
  };

  const renderPersonalInfoStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <p className="text-muted-foreground">Tell us about yourself</p>
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

  const renderInvestorProfileStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Investor Profile</h2>
        <p className="text-muted-foreground">Help us understand your investment profile</p>
      </div>
      
      <div className="grid gap-4">
        <div>
          <Label htmlFor="investorType">Investor Type *</Label>
          <Select onValueChange={(value) => setValue('investorType', value as any)}>
            <SelectTrigger className={errors.investorType ? "border-destructive" : ""}>
              <SelectValue placeholder="Select investor type" />
            </SelectTrigger>
            <SelectContent>
              {investorTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.investorType && (
            <p className="text-sm text-destructive mt-1">{errors.investorType.message}</p>
          )}
        </div>

        <div>
          <Label>Investment Range (USD) *</Label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="minInvestmentRange" className="text-sm text-muted-foreground">Minimum</Label>
              <Input
                id="minInvestmentRange"
                type="number"
                {...register('minInvestmentRange', { valueAsNumber: true })}
                placeholder="10000"
                className={errors.minInvestmentRange ? "border-destructive" : ""}
              />
              {errors.minInvestmentRange && (
                <p className="text-sm text-destructive mt-1">{errors.minInvestmentRange.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="maxInvestmentRange" className="text-sm text-muted-foreground">Maximum</Label>
              <Input
                id="maxInvestmentRange"
                type="number"
                {...register('maxInvestmentRange', { valueAsNumber: true })}
                placeholder="100000"
                className={errors.maxInvestmentRange ? "border-destructive" : ""}
              />
              {errors.maxInvestmentRange && (
                <p className="text-sm text-destructive mt-1">{errors.maxInvestmentRange.message}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="companyName">Company/Organization Name</Label>
          <Input
            id="companyName"
            {...register('companyName')}
            placeholder="Your investment firm or organization"
            className={errors.companyName ? "border-destructive" : ""}
          />
          <p className="text-sm text-muted-foreground mt-1">
            Required for institutional investors, VCs, and family offices
          </p>
          {errors.companyName && (
            <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="aum">Assets Under Management (USD)</Label>
          <Input
            id="aum"
            type="number"
            {...register('aum', { valueAsNumber: true })}
            placeholder="1000000"
            className={errors.aum ? "border-destructive" : ""}
          />
          <p className="text-sm text-muted-foreground mt-1">
            Optional - for institutional investors
          </p>
          {errors.aum && (
            <p className="text-sm text-destructive mt-1">{errors.aum.message}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderPreferencesStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Investment Preferences</h2>
        <p className="text-muted-foreground">Tell us about your investment criteria</p>
      </div>
      
      <div className="space-y-6">
        {/* Preferred Industries */}
        <div>
          <Label>Preferred Industries *</Label>
          <p className="text-sm text-muted-foreground mb-3">
            Select the industries you're interested in investing in
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {industries.map((industry) => (
              <div
                key={industry}
                onClick={() => toggleSelection(industry, selectedIndustries, setSelectedIndustries, 'preferredIndustries')}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all",
                  selectedIndustries.includes(industry)
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                )}
              >
                <span className="text-sm font-medium">{industry}</span>
                {selectedIndustries.includes(industry) && (
                  <CheckCircle2 className="w-4 h-4" />
                )}
              </div>
            ))}
          </div>
          {errors.preferredIndustries && (
            <p className="text-sm text-destructive mt-1">{errors.preferredIndustries.message}</p>
          )}
        </div>

        {/* Preferred Funding Stages */}
        <div>
          <Label>Preferred Funding Stages *</Label>
          <p className="text-sm text-muted-foreground mb-3">
            Select the funding stages you're interested in
          </p>
          <div className="grid grid-cols-2 gap-2">
            {fundingStages.map((stage) => (
              <div
                key={stage.value}
                onClick={() => toggleSelection(stage.value, selectedStages, setSelectedStages, 'preferredStages')}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all",
                  selectedStages.includes(stage.value)
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-border hover:border-secondary/50"
                )}
              >
                <span className="text-sm font-medium">{stage.label}</span>
                {selectedStages.includes(stage.value) && (
                  <CheckCircle2 className="w-4 h-4" />
                )}
              </div>
            ))}
          </div>
          {errors.preferredStages && (
            <p className="text-sm text-destructive mt-1">{errors.preferredStages.message}</p>
          )}
        </div>

        {/* Geographic Focus */}
        <div>
          <Label>Geographic Focus *</Label>
          <p className="text-sm text-muted-foreground mb-3">
            Select the regions where you'd like to invest
          </p>
          <div className="grid grid-cols-2 gap-2">
            {geographicRegions.map((region) => (
              <div
                key={region}
                onClick={() => toggleSelection(region, selectedRegions, setSelectedRegions, 'geographicFocus')}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all",
                  selectedRegions.includes(region)
                    ? "border-success bg-success/10 text-success"
                    : "border-border hover:border-success/50"
                )}
              >
                <span className="text-sm font-medium">{region}</span>
                {selectedRegions.includes(region) && (
                  <CheckCircle2 className="w-4 h-4" />
                )}
              </div>
            ))}
          </div>
          {errors.geographicFocus && (
            <p className="text-sm text-destructive mt-1">{errors.geographicFocus.message}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderExperienceStep = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Experience & Additional Information</h2>
        <p className="text-muted-foreground">Help us understand your background</p>
      </div>
      
      <div className="grid gap-4">
        <div>
          <Label htmlFor="investmentExperience">Investment Experience *</Label>
          <Textarea
            id="investmentExperience"
            {...register('investmentExperience')}
            placeholder="Describe your investment experience, background, and what you look for in startups..."
            rows={4}
            className={errors.investmentExperience ? "border-destructive" : ""}
          />
          {errors.investmentExperience && (
            <p className="text-sm text-destructive mt-1">{errors.investmentExperience.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="portfolioSize">Portfolio Size</Label>
          <Select onValueChange={(value) => setValue('portfolioSize', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select portfolio size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="first-time">First-time investor</SelectItem>
              <SelectItem value="1-5">1-5 investments</SelectItem>
              <SelectItem value="5-15">5-15 investments</SelectItem>
              <SelectItem value="15-50">15-50 investments</SelectItem>
              <SelectItem value="50+">50+ investments</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="previousInvestments">Notable Previous Investments</Label>
          <Textarea
            id="previousInvestments"
            {...register('previousInvestments')}
            placeholder="List some of your notable investments or investment themes..."
            rows={2}
            className={errors.previousInvestments ? "border-destructive" : ""}
          />
        </div>

        <div>
          <Label htmlFor="expertise">Areas of Expertise</Label>
          <Textarea
            id="expertise"
            {...register('expertise')}
            placeholder="What expertise can you provide to startups beyond funding? (e.g., marketing, operations, technical, etc.)"
            rows={2}
            className={errors.expertise ? "border-destructive" : ""}
          />
        </div>

        <div>
          <Label htmlFor="hearAboutUs">How did you hear about Fund Lanka?</Label>
          <Input
            id="hearAboutUs"
            {...register('hearAboutUs')}
            placeholder="Social media, referral, search, etc."
          />
        </div>

        {/* Accredited Investor & Terms */}
        <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="accreditedInvestor"
              checked={watch('accreditedInvestor')}
              onCheckedChange={(checked) => setValue('accreditedInvestor', checked as boolean)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label 
                htmlFor="accreditedInvestor"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I am an accredited investor
              </Label>
              <p className="text-xs text-muted-foreground">
                Accredited investors have access to additional investment opportunities.
              </p>
            </div>
          </div>

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
                Get updates on investment opportunities and market insights.
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
            to="/register/fundlanka" 
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Registration
          </Link>
          
          <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
            <Target className="w-3 h-3 mr-1" />
            Investor Registration
          </Badge>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="space-y-4">
              <CardTitle className="text-2xl text-center">
                Investor Registration
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
                {['Personal', 'Profile', 'Preferences', 'Experience'].map((step, index) => (
                  <div
                    key={step}
                    className={cn(
                      "py-1 px-2 rounded",
                      index + 1 === currentStep
                        ? "bg-secondary text-secondary-foreground"
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
                  <Button type="button" onClick={handleNext} variant="secondary">
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting} variant="secondary">
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

export default RegisterInvestorPage;