export interface FormData {
  businessName: string;
  businessDescription: string;
  hasWebsite: string;
  currentWebsiteUrl: string;
  mainGoal: string;
  biggestChallenge: string;
  timeline: string;
  budget: string;
  contentReady: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface FormStep {
  id: number;
  question: string;
  field: keyof FormData;
  options?: string[];
  type: 'select' | 'input' | 'textarea' | 'contact' | 'business';
  validation?: (value: string) => boolean;
  helpText: string;
}

export interface CtaPopupProps {
  triggerSelector?: string;
  children?: React.ReactNode;
}

export interface DefaultPopupContentProps {
  onSubmitted?: () => void;
}
