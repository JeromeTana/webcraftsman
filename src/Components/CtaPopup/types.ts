export interface FormData {
  // businessName: string;
  // businessDescription: string;
  currentWebsiteUrl: string;
  // mainGoal: string;
  biggestChallenge: string;
  timeline: string;
  budget: string;
  monthlyRevenue: string;
  // contentReady: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export interface FormStep {
  id: number;
  question: string;
  field: keyof FormData;
  options?: string[];
  type: 'select' | 'input' | 'textarea' | 'contact' | 'business';
  validation?: (value: string) => ValidationResult;
  required?: boolean;
  helpText: string;
}

export interface CtaPopupProps {
  triggerSelector?: string;
  children?: React.ReactNode;
}

export interface DefaultPopupContentProps {
  onSubmitted?: () => void;
}
