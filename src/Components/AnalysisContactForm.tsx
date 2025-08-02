"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BookingRoastSection } from "./CtaPopup/BookingRoastSection";

interface ContactFormProps {
  onSubmitted?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return formData.name.trim() && formData.email.trim() && formData.phone.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get the website URL from sessionStorage
      const websiteUrl = sessionStorage.getItem('analysisWebsiteUrl') || '';
      
      // Submit form data (you can replace this with your actual submission logic)
      const submissionData = {
        ...formData,
        websiteUrl,
        source: "roast-analysis",
        timestamp: new Date().toISOString(),
      };

      // For now, just log the data - replace with actual API call
      console.log("Submitting contact form:", submissionData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store contact info for booking flow
      sessionStorage.setItem('contactInfo', JSON.stringify(formData));
      
      onSubmitted?.();
      
      // Show success screen instead of immediate redirect
      setShowSuccessScreen(true);
      
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookDemo = () => {
    router.push('/booking');
  };

  // Show success screen after form submission
  if (showSuccessScreen) {
    return (
      <BookingRoastSection 
        formData={{ 
          fullName: formData.name, 
          email: formData.email 
        }} 
      />
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Your Analysis is Ready! 🎉
        </h2>
        <p className="text-lg text-gray-600">
          Enter your contact details to receive your personalized website analysis and book a strategy call.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Jerome Tana"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            disabled={isSubmitting}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            disabled={isSubmitting}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            disabled={isSubmitting}
            required
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid() || isSubmitting}
          className="cta w-full"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            "Claim My Analysis"
          )}
        </button>
      </form>
    </div>
  );
};
