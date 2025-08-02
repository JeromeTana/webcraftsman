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
];

export default function SequentialForm() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState<FormData>({
    website: "",
    goal: "",
    name: "",
    email: "",
    instagram: "",
  });
  const [state, formAction, pending] = React.useActionState(
    submitAuditForm,
    null
  );

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const canProceed =
    formData[currentQuestion.id as keyof FormData].trim() !== "";

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

  const handleInputChange = (value: string) => {
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
        {currentQuestion.id === "instagram" ? (
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
              className="w-full pl-8 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              autoFocus
            />
          </div>
        ) : (
          <input
            type={currentQuestion.type}
            value={formData[currentQuestion.id as keyof FormData]}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={currentQuestion.placeholder}
            className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
    </div>
  );
}
