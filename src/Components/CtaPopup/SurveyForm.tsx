"use client";

import React, { useState, useCallback } from "react";
import { FormData } from './types';
import { FORM_STEPS, INITIAL_FORM_DATA, TOTAL_STEPS } from './constants';
import { validateStep8, submitFormData } from './utils';
import { FormStepComponent } from './FormStepComponent';
import { JeromeProfile } from './JeromeProfile';
import { BookingDemoSection } from "./BookingDemoSection";

interface SurveyFormProps {
  onSubmitted?: () => void;
}

export const SurveyForm: React.FC<SurveyFormProps> = ({ onSubmitted }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA as FormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Auto advance to next step for all steps except contact info step
    if (currentStep !== TOTAL_STEPS && currentStep < TOTAL_STEPS) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    }
  }, [currentStep]);

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = async () => {
    const validation = validateStep8(formData);
    
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitFormData(formData);
      setIsSubmitted(true);
      onSubmitted?.();
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return formData.businessName.trim() && 
           formData.businessDescription.trim() && 
           formData.fullName.trim() && 
           formData.email.trim() && 
           formData.phone.trim();
  };

  if (isSubmitted) {
    return <BookingDemoSection formData={{ fullName: formData.fullName, email: formData.email }} />;
  }

  const currentFormStep = FORM_STEPS[currentStep - 1];

  return (
    <div className="space-y-6 overflow-hidden max-w-xl mx-auto">
      {/* Progress Bar */}
      <div className="text-center space-y-3">
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <div className="space-y-6 overflow-x-hidden">
        <FormStepComponent
          step={currentFormStep}
          formData={formData}
          onOptionSelect={handleOptionSelect}
          onInputChange={handleInputChange}
        />

        {/* Submit Button for Contact Step */}
        {currentStep === TOTAL_STEPS && (
          <button
            onClick={handleSubmit}
            disabled={!isFormValid() || isSubmitting}
            className="cta w-full"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              "Get My Custom Website Strategy"
            )}
          </button>
        )}
      </div>

      {/* Jerome's Profile with Chat Box */}
      <JeromeProfile 
        currentStep={currentStep}
        helpText={currentFormStep.helpText}
      />
    </div>
  );
};
