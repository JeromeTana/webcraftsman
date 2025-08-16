"use client";

import React, { useState, useCallback } from "react";
import { FormData } from "./types";
import { FORM_STEPS, INITIAL_FORM_DATA, TOTAL_STEPS } from "./constants";
import {
  validateContactStep,
  validateBusinessStep,
  submitFormData,
} from "./utils";
import { FormStepComponent } from "./FormStepComponent";
import { JeromeProfile } from "./JeromeProfile";
import { BookingDemoSection } from "./BookingDemoSection";
import { useFormValidation } from "./useFormValidation";

interface SurveyFormProps {
  onSubmitted?: () => void;
}

export const SurveyForm: React.FC<SurveyFormProps> = ({ onSubmitted }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(
    INITIAL_FORM_DATA as FormData
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    validateCurrentField,
    markFieldTouched,
    getFieldError,
    markAllFieldsTouched,
  } = useFormValidation(formData);

  const handleOptionSelect = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));

      // Mark field as touched and validate
      markFieldTouched(field);
      validateCurrentField(field, value);

      // Auto advance to next step for all steps except contact info step
      if (currentStep !== TOTAL_STEPS && currentStep < TOTAL_STEPS) {
        setTimeout(() => {
          setCurrentStep(currentStep + 1);
        }, 300);
      }
    },
    [currentStep, validateCurrentField, markFieldTouched]
  );

  const handleInputChange = useCallback(
    (field: keyof FormData, value: string) => {
      if (field === 'consent') {
        const boolValue = value === 'true';
        setFormData((prev) => ({ ...prev, [field]: boolValue }));
        markFieldTouched(field);
        validateCurrentField(field, boolValue);
      } else {
        setFormData((prev) => ({ ...prev, [field]: value }));
        markFieldTouched(field);
        validateCurrentField(field, value);
      }
    },
    [validateCurrentField, markFieldTouched]
  );

  const handleInputBlur = useCallback(
    (field: keyof FormData) => {
      markFieldTouched(field);
      validateCurrentField(field, formData[field]);
    },
    [formData, validateCurrentField, markFieldTouched]
  );

  const handleSubmit = async () => {
    // Mark all contact fields as touched to show errors
    markAllFieldsTouched(["firstName", "lastName", "email", "phone", "currentWebsiteUrl", "consent"]);

    // Validate all contact fields
    const validation = validateContactStep(formData);

    if (!validation.isValid) {
      // Show specific error message
      const errorMessage = validation.message || "กรุณากรอกข้อมูลให้ครบถ้วน";
      alert(errorMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitFormData(formData);
      setIsSubmitted(true);
      onSubmitted?.();
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("เกิดข้อผิดพลาดในการส่งแบบฟอร์ม กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBusinessStepContinue = () => {
    // Mark business fields as touched (disabled)
    // markAllFieldsTouched([
    //   "businessName",
    //   "businessDescription",
    // ]);

    const validation = validateBusinessStep(formData);

    if (!validation.isValid) {
      const errorMessage =
        validation.message || "กรุณากรอกข้อมูลธุรกิจให้ครบถ้วน";
      alert(errorMessage);
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const isFormValid = () => {
    const contactValidation = validateContactStep(formData);
    return contactValidation.isValid;
  };

  const isBusinessStepValid = () => {
    const businessValidation = validateBusinessStep(formData);
    return businessValidation.isValid;
  };

  if (isSubmitted) {
    return (
      <BookingDemoSection
        formData={{ 
          fullName: `${formData.firstName} ${formData.lastName}`.trim(), 
          email: formData.email 
        }}
      />
    );
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
          onInputBlur={handleInputBlur}
          getFieldError={getFieldError}
        />

        {/* Continue Button for Business Step */}
        {/* {currentStep === TOTAL_STEPS - 1 && (
          <button
            onClick={handleBusinessStepContinue}
            disabled={!isBusinessStepValid()}
            className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
              isBusinessStepValid()
                ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            ไปขั้นตอนถัดไป
          </button>
        )} */}

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
                กำลังส่งข้อมูล...
              </>
            ) : (
              "รับข้อมูลกลยุทธ์เว็บไซต์ของฉัน"
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
