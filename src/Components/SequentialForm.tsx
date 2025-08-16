"use client";

import { submitAuditForm } from "@/app/action";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "./Icons/Spinner";
import { LucideCheck } from "./Icons/LucideCheck";
import { LucideX } from "./Icons/LucideX";
import { LucideArrowLeft } from "./Icons/LucideArrowLeft";
import { LucideArrowRight } from "./Icons/LucideArrowRight";

interface FormData {
  website: string;
  goal: string;
  name: string;
  email: string;
  instagram: string;
  consent: boolean;
}

const questions = [
  {
    id: "website",
    title: "What's your website URL?",
    subtitle: "We'll analyze your homepage or landing page",
    placeholder: "https://yourwebsite.com",
    type: "url" as const,
  },
  {
    id: "goal",
    title: "What's your main conversion goal?",
    subtitle: "What action do you want visitors to take?",
    placeholder: "Get more leads, increase sales, grow email list...",
    type: "text" as const,
  },
  {
    id: "name",
    title: "What's your name?",
    subtitle: "We'll personalize your analysis",
    placeholder: "Jerome Tana",
    type: "text" as const,
  },
  {
    id: "email",
    title: "What's your email address?",
    subtitle: "We'll send you a notification when your analysis is ready",
    placeholder: "you@example.com",
    type: "email" as const,
  },
  {
    id: "instagram",
    title: "What's your Instagram handle?",
    subtitle: "We'll share your personalized analysis here",
    placeholder: "yourhandle",
    type: "text" as const,
  },
  {
    id: "consent",
    title: "Privacy Consent",
    subtitle: "We need your consent to process your data and share your analysis",
    placeholder: "",
    type: "consent" as const,
  },
];

export default function SequentialForm() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState<FormData>({
    website: "",
    goal: "",
    name: "",
    email: "",
    instagram: "",
    consent: false,
  });
  const [state, formAction, pending] = React.useActionState(
    submitAuditForm,
    null
  );

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const canProceed = currentQuestion.id === "consent" 
    ? formData.consent 
    : (formData[currentQuestion.id as keyof Omit<FormData, 'consent'>] as string).trim() !== "";

  const handleNext = () => {
    if (canProceed && !isLastStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canProceed) {
      e.preventDefault();
      if (isLastStep) {
        handleSubmit();
      } else {
        handleNext();
      }
    }
  };

  const handleSubmit = () => {
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
    formAction(form);
  };

  // Show success state
  if (state?.success) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <LucideCheck className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Analysis Request Received!
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          We'll analyze your website and share the results on our Instagram
          within 24-48 hours.
        </p>
        <a
          href="https://www.instagram.com/Webcraftsman.co/"
          target="_blank"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Follow us on Instagram
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {currentQuestion.title}
        </h2>
      </div>

      {/* Input */}
      <div className="mb-8">
        {currentQuestion.id === "consent" ? (
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => handleInputChange(e.target.checked)}
              className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
              I agree to the processing of my personal data for the purpose of website analysis 
              and sharing the results on Instagram. I understand that I can withdraw my consent 
              at any time by contacting you directly. My data will be handled in accordance with your{" "}
              <a href="/privacy-policy" className="text-primary hover:underline" target="_blank">
                Privacy Policy
              </a>.
            </label>
          </div>
        ) : currentQuestion.id === "instagram" ? (
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500 font-medium">
              @
            </span>
            <input
              type="text"
              value={formData[currentQuestion.id]}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={currentQuestion.placeholder}
              className="w-full pl-8 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              autoFocus
            />
          </div>
        ) : (
          <input
            type={currentQuestion.type}
            value={formData[currentQuestion.id as keyof FormData] as string}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={currentQuestion.placeholder}
            className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            autoFocus
          />
        )}
      </div>

      {/* Error Message */}
      {state?.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <LucideX className="text-red-500 flex-shrink-0" />
          <div>
            <p className="text-red-700">
              {state.error}{" "}
              <a
                href="https://www.instagram.com/Webcraftsman.co/"
                target="_blank"
                className="underline font-medium"
              >
                Follow us on Instagram
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        {currentStep > 0 && (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <LucideArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
        
        {isLastStep ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canProceed || pending}
            className={twMerge(
              "flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200",
              (!canProceed || pending) ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            )}
          >
            {pending ? (
              <>
                <Spinner className="w-5 h-5" />
                Submitting...
              </>
            ) : (
              "Submit Analysis Request"
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            disabled={!canProceed}
            className={twMerge(
              "flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200",
              !canProceed ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            )}
          >
            Next
            <LucideArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={twMerge(
                "w-2 h-2 rounded-full transition-colors",
                index <= currentStep ? "bg-blue-600" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
