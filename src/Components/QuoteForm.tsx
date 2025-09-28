"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { LucideArrowRight } from "@/Components/Icons/LucideArrowRight";

// Form validation schemas
const step1Schema = z.object({
  projectType: z.string().min(1, "Please select a project type"),
  websiteUrl: z.string().optional().default(""),
  projectDescription: z.string().min(1, "Please describe your project"),
  timeline: z.string().min(1, "Please select a timeline"),
  budget: z.string().min(1, "Please select a budget range"),
  features: z.array(z.string()).default([]),
});

const step2Schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().default(""),
  consent: z.boolean().refine((val) => val === true, "You must agree to the processing of your data"),
});

const completeFormSchema = step1Schema.merge(step2Schema);

type QuoteFormData = z.infer<typeof completeFormSchema>;

const projectTypes = [
  "New Website Design",
  "Website Redesign", 
  "E-commerce Store",
  "Landing Page",
  "Web Application",
  "SEO Optimization",
  "Other"
];

const timelineOptions = [
  "ASAP (Rush - within 2 weeks)",
  "1 month",
  "2-3 months", 
  "3-6 months",
  "6+ months",
  "Flexible timeline"
];

const budgetOptions = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000", 
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Let's discuss"
];

const additionalFeatures = [
  "SEO Optimization",
  "Content Management System (CMS)",
  "E-commerce Integration",
  "Payment Gateway",
  "Analytics & Reporting",
  "Social Media Integration",
  "Email Marketing Integration", 
  "Multi-language Support",
  "Custom Functionality"
];

interface QuoteFormProps {
  onSubmitted?: () => void;
}

export default function QuoteForm({ onSubmitted }: QuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize form with react-hook-form
  const {
    control, 
    handleSubmit, 
    trigger, 
    watch, 
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(completeFormSchema),
    mode: "onChange" as const,
    defaultValues: {
      projectType: "",
      websiteUrl: "",
      projectDescription: "",
      timeline: "",
      budget: "",
      features: [] as string[],
      fullName: "",
      email: "",
      phone: "",
      company: "",
      consent: false
    }
  });

  // Watch form values for features functionality
  const watchedFeatures = watch("features");

  const handleFeatureToggle = (feature: string) => {
    const currentFeatures = watchedFeatures || [];
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter(f => f !== feature)
      : [...currentFeatures, feature];
    setValue("features", newFeatures);
  };

  const validateStep1 = async (): Promise<boolean> => {
    const step1Fields = ["projectType", "projectDescription", "timeline", "budget"] as const;
    return await trigger(step1Fields);
  };

  const validateStep2 = async (): Promise<boolean> => {
    const step2Fields = ["fullName", "email", "phone", "consent"] as const;
    return await trigger(step2Fields);
  };

  const handleNextStep = async () => {
    if (await validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          source: "2-step-quote-form",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit quote request");
      }

      setIsSubmitted(true);
      
      // Handle analytics tracking if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'quote_form_completed', {
          event_category: 'engagement',
          event_label: 'quote_request'
        });
      }
      
      onSubmitted?.();
    } catch (error) {
      console.error('Quote form submission failed:', error);
      alert('There was an error submitting your quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 1) {
      await handleNextStep();
      return;
    }

    // For step 2, use react-hook-form's handleSubmit
    await handleSubmit(onSubmit)();
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <LucideCheck className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Quote Request Submitted! 🎉
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Thank you for your interest! We'll get back to you with a personalized proposal within 24 hours.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <LucideCheck className="w-4 h-4 text-green-600" />
                We'll review your requirements and prepare a detailed proposal
              </li>
              <li className="flex items-center gap-2">
                <LucideCheck className="w-4 h-4 text-green-600" />
                You'll receive a personalized quote via email within 24 hours
              </li>
              <li className="flex items-center gap-2">
                <LucideCheck className="w-4 h-4 text-green-600" />
                We'll schedule a call to discuss your project in detail
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="space-y-8 bg-white p-8 rounded-3xl border border-gray-200"
    >
      {currentStep === 1 ? (
        <>
          {/* Step 1: Project Details */}
          {/* Project Type */}
          <div className="space-y-3">
            <label
              htmlFor="projectType"
              className="block text-lg font-semibold text-gray-900"
            >
              What type of project do you need? *
            </label>
            <Controller
              name="projectType"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  id="projectType"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 bg-white ${
                    errors.projectType ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select a project type...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.projectType && (
              <p className="text-red-500 text-sm">{errors.projectType.message}</p>
            )}
          </div>

          {/* Current Website */}
          <div className="space-y-3">
            <label
              htmlFor="websiteUrl"
              className="block text-lg font-semibold text-gray-900"
            >
              Current Website (Optional)
            </label>
            <Controller
              name="websiteUrl"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="url"
                  id="websiteUrl"
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              )}
            />
          </div>

          {/* Project Description */}
          <div className="space-y-3">
            <label
              htmlFor="projectDescription"
              className="block text-lg font-semibold text-gray-900"
            >
              Tell us about your project *
            </label>
            <Controller
              name="projectDescription"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="projectDescription"
                  placeholder="Describe your project goals, target audience, key features, and any specific requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                />
              )}
            />
            {errors.projectDescription && (
              <p className="text-red-500 text-sm">
                {errors.projectDescription.message}
              </p>
            )}
          </div>

          {/* Timeline and Budget - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Timeline */}
            <div className="space-y-3">
              <label
                htmlFor="timeline"
                className="block text-lg font-semibold text-gray-900"
              >
                Project Timeline *
              </label>
              <Controller
                name="timeline"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    id="timeline"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 bg-white ${
                      errors.timeline ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select timeline...</option>
                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.timeline && (
                <p className="text-red-500 text-sm">{errors.timeline.message}</p>
              )}
            </div>

            {/* Budget */}
            <div className="space-y-3">
              <label
                htmlFor="budget"
                className="block text-lg font-semibold text-gray-900"
              >
                Budget Range *
              </label>
              <Controller
                name="budget"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    id="budget"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 bg-white ${
                      errors.budget ? "border-red-500" : ""
                    }`}
                  >
                    <option value="">Select budget range...</option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.budget && (
                <p className="text-red-500 text-sm">{errors.budget.message}</p>
              )}
            </div>
          </div>

          {/* Additional Features */}
          <div className="space-y-3">
            <label className="block text-lg font-semibold text-gray-900">
              Additional Features (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {additionalFeatures.map((feature) => {
                const isSelected = (watchedFeatures || []).includes(feature);
                return (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => handleFeatureToggle(feature)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-left hover:border-primary/50 ${
                      isSelected
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                          isSelected
                            ? "border-primary bg-primary"
                            : "border-gray-300"
                        }`}
                      >
                        {isSelected && (
                          <LucideCheck className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="cta w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
            >
              Continue to Contact Info
              <LucideArrowRight className="w-5 h-5" />
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Step 2: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Jerome Tana"
                    />
                  )}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company (Optional)
                </label>
                <Controller
                  name="company"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your Company Name"
                    />
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="jerome@example.com"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 pt-4">
              <Controller
                name="consent"
                control={control}
                render={({ field: { onChange, value, name, ref } }) => (
                  <input
                    type="checkbox"
                    id="consent"
                    name={name}
                    ref={ref}
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                )}
              />
              <label
                htmlFor="consent"
                className="text-sm text-gray-600 leading-relaxed"
              >
                I agree to the processing of my personal data for the
                purpose of handling this quote request. I understand that I
                can withdraw my consent at any time by contacting you
                directly. My data will be handled in accordance with your{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm">{errors.consent.message}</p>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cta w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  Get My Free Quote
                  <LucideArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </>
      )}
    </form>
  );
}