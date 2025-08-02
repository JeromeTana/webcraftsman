// Re-export all components and utilities for easy importing
export { CtaPopup, openCtaPopup } from './CtaPopup';
export { SurveyForm } from './SurveyForm';
export { FormStepComponent } from './FormStepComponent';
export { JeromeProfile } from './JeromeProfile';
export { BookingDemoSection as SuccessScreen } from "./BookingDemoSection";

// Re-export types
export type { 
  CtaPopupProps, 
  DefaultPopupContentProps, 
  FormData, 
  FormStep 
} from './types';

// Re-export constants
export { 
  FORM_STEPS, 
  INITIAL_FORM_DATA, 
  TOTAL_STEPS 
} from './constants';

// Re-export utilities
export { 
  validateEmail, 
  validateStep8, 
  submitFormData 
} from './utils';
