"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LucideArrowRight } from "@/Components/Icons/LucideArrowRight";

interface AdLeadFormProps {
  onSubmit: () => void;
}

const AdLeadForm: React.FC<AdLeadFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    websiteUrl: "",
    fullName: "",
    email: "",
    phone: "",
    businessType: "e-commerce",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const businessTypes = [
    { value: "e-commerce", label: "E-commerce Store" },
    { value: "service", label: "Service Business" },
    { value: "saas", label: "SaaS/Tech" },
    { value: "local", label: "Local Business" },
    { value: "other", label: "Other" },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.websiteUrl.trim()) {
      newErrors.websiteUrl = "Website URL is required";
    } else {
      try {
        new URL(formData.websiteUrl.startsWith("http") ? formData.websiteUrl : `https://${formData.websiteUrl}`);
      } catch {
        newErrors.websiteUrl = "Please enter a valid website URL";
      }
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to API
      const response = await fetch("/api/ad-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "ads-landing-page",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      const result = await response.json();
      console.log("Ad lead form submitted successfully:", result);
      
      // Store form data for later use
      sessionStorage.setItem('adLeadFormData', JSON.stringify(formData));
      
      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/AW-CONVERSION_LABEL',
          value: 299,
          currency: 'USD'
        });
      }
      
      onSubmit();
      
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="lead-form">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Website URL */}
        <div>
          <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Your Website URL *
          </label>
          <input
            type="text"
            id="websiteUrl"
            value={formData.websiteUrl}
            onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
            placeholder="https://yourwebsite.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
              errors.websiteUrl ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isSubmitting}
          />
          {errors.websiteUrl && (
            <p className="text-red-500 text-sm mt-1">{errors.websiteUrl}</p>
          )}
        </div>

        {/* Business Type */}
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
            Business Type
          </label>
          <select
            id="businessType"
            value={formData.businessType}
            onChange={(e) => handleInputChange("businessType", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            disabled={isSubmitting}
          >
            {businessTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="John Smith"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              disabled={isSubmitting}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="john@company.com"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Analyzing Your Website...
            </>
          ) : (
            <>
              Get My FREE Analysis Now
              <LucideArrowRight className="w-5 h-5" />
            </>
          )}
        </motion.button>

        {/* Trust Signals */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            🔒 Your information is secure and will never be shared
          </p>
          <p className="text-sm text-gray-500">
            ✅ No spam, just valuable insights • Unsubscribe anytime
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdLeadForm;
