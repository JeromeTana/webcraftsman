"use client";

import React from "react";
import { motion } from "framer-motion";
import { FormStep, FormData } from './types';

interface FormStepComponentProps {
  step: FormStep;
  formData: FormData;
  onOptionSelect: (field: keyof FormData, value: string) => void;
  onInputChange: (field: keyof FormData, value: string) => void;
}

export const FormStepComponent: React.FC<FormStepComponentProps> = ({
  step,
  formData,
  onOptionSelect,
  onInputChange,
}) => {
  const renderSelectStep = () => (
    <div className="grid grid-cols-1 gap-3">
      {step.options?.map((option) => (
        <button
          key={option}
          onClick={() => onOptionSelect(step.field, option)}
          className={`p-4 rounded-full border transition-all duration-200 text-center cursor-pointer ${
            formData[step.field] === option
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-200 hover:border-gray-300 text-gray-700"
          }`}
        >
          <span className="font-medium">{option}</span>
        </button>
      ))}
    </div>
  );

  const renderBusinessStep = () => (
    <div className="space-y-4">
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
          Business Name
        </label>
        <input
          id="businessName"
          type="text"
          value={formData.businessName}
          onChange={(e) => onInputChange("businessName", e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your Business Name"
          autoFocus
        />
      </div>
      <div>
        <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700 mb-2">
          Business Description
        </label>
        <textarea
          id="businessDescription"
          value={formData.businessDescription}
          onChange={(e) => onInputChange("businessDescription", e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
          placeholder="Brief description of your business and what you do..."
        />
      </div>
      {(formData.hasWebsite === "Yes, but it needs improvement" || 
        formData.hasWebsite === "Yes, and it's working fine") && (
        <div>
          <label htmlFor="currentWebsiteUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Current Website URL
          </label>
          <input
            id="currentWebsiteUrl"
            type="url"
            value={formData.currentWebsiteUrl}
            onChange={(e) => onInputChange("currentWebsiteUrl", e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://yourwebsite.com"
          />
        </div>
      )}
    </div>
  );

  const renderContactStep = () => (
    <div className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => onInputChange("fullName", e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your Full Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onInputChange("email", e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your Email Address"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => onInputChange("phone", e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your Phone Number"
        />
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h3 className="text-3xl !leading-12 mb-8 font-semibold text-gray-900 text-center">
        {step.question}
      </h3>
      {step.type === "select" && renderSelectStep()}
      {step.type === "business" && renderBusinessStep()}
      {step.type === "contact" && renderContactStep()}
    </motion.div>
  );
};
