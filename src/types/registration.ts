// Types for pre-launch registration data collection

export interface BaseRegistrationData {
  fullName: string;
  email: string;
  phone?: string;
  location: string;
  linkedinProfile?: string;
  hearAboutUs?: string;
  termsAccepted: boolean;
  newsletterOptIn?: boolean;
  registrationDate: string;
}

export interface StartupRegistrationData extends BaseRegistrationData {
  type: 'startup';
  
  // Company Information
  companyName: string;
  companyStage: 'idea' | 'prototype' | 'mvp' | 'launched' | 'scaling';
  industry: string;
  companyDescription: string; // Elevator pitch
  
  // Funding Information
  fundingNeeded: number;
  fundingStage: 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'growth';
  fundingPurpose: string;
  previousFunding?: number;
  
  // Team Information
  founderNames: string;
  teamSize?: number;
  keyTeamMembers?: string;
  
  // Additional Information
  website?: string;
  pitchDeckUrl?: string;
  businessModel?: string;
}

export interface InvestorRegistrationData extends BaseRegistrationData {
  type: 'investor';
  
  // Investor Profile
  investorType: 'individual' | 'angel' | 'vc' | 'institution' | 'family-office';
  investmentRange: {
    min: number;
    max: number;
  };
  
  // Investment Preferences
  preferredIndustries: string[];
  preferredStages: ('pre-seed' | 'seed' | 'series-a' | 'series-b' | 'growth')[];
  geographicFocus: string[];
  
  // Experience & Background
  investmentExperience: string;
  portfolioSize?: string;
  previousInvestments?: string;
  expertise?: string;
  
  // Additional Information
  accreditedInvestor?: boolean;
  companyName?: string; // For institutional investors
  aum?: number; // Assets under management
}

export interface DonateLankaWaitlistData {
  type: 'donatelanka';
  email: string;
  companyName?: string;
  newsletterOptIn?: boolean;
  termsAccepted: boolean;
  registrationDate: string;
}

export type RegistrationData = StartupRegistrationData | InvestorRegistrationData | DonateLankaWaitlistData;

export interface RegistrationFormState {
  currentStep: number;
  totalSteps: number;
  data: Partial<RegistrationData>;
  errors: Record<string, string>;
}

// Local storage key for pre-launch data
export const REGISTRATION_STORAGE_KEY = 'fund-lanka-prelaunch-registrations';

// Helper function to save registration data
export const saveRegistrationData = (data: RegistrationData) => {
  try {
    const existingData = localStorage.getItem(REGISTRATION_STORAGE_KEY);
    const registrations = existingData ? JSON.parse(existingData) : [];
    
    registrations.push({
      ...data,
      id: crypto.randomUUID(),
      registrationDate: new Date().toISOString(),
    });
    
    localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(registrations));
    return true;
  } catch (error) {
    console.error('Error saving registration data:', error);
    return false;
  }
};

// Helper function to get all registration data (for admin export)
export const getAllRegistrationData = (): (RegistrationData & { id: string })[] => {
  try {
    const data = localStorage.getItem(REGISTRATION_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error retrieving registration data:', error);
    return [];
  }
};