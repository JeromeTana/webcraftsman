"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Logo from "@/Components/Icons/Logo";
import { BookingRoastSection } from "@/Components/CtaPopup/BookingRoastSection";
import Image from "next/image";

// Define the possible states
type RoastPageState = "url-input" | "contact-form" | "success";

function RoastPageContent() {
  const searchParams = useSearchParams();
  const [currentState, setCurrentState] = useState<RoastPageState>("url-input");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Handle URL parameters and sessionStorage
  useEffect(() => {
    const step = searchParams.get("step");
    const storedUrl = sessionStorage.getItem("analysisWebsiteUrl");
    
    if (storedUrl) {
      setWebsiteUrl(storedUrl);
    }
    
    if (step === "contact" && storedUrl) {
      setCurrentState("contact-form");
    }
  }, [searchParams]);

  // Handle URL form submission
  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate URL
    if (!websiteUrl.trim()) {
      alert("Please enter a website URL");
      return;
    }

    // Basic URL validation
    try {
      new URL(
        websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`
      );
    } catch {
      alert("Please enter a valid website URL");
      return;
    }

    // Store the URL for later use
    sessionStorage.setItem("analysisWebsiteUrl", websiteUrl);

    // Set analyzing state
    setIsAnalyzing(true);

    // Add delay before moving to contact form
    setTimeout(() => {
      setIsAnalyzing(false);
      setCurrentState("contact-form");
    }, 3000);
  };

  // Handle contact form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Check if contact form is valid
  const isContactFormValid = () => {
    return (
      formData.name.trim() && formData.email.trim() && formData.phone.trim()
    );
  };

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isContactFormValid()) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit form data
      const submissionData = {
        ...formData,
        websiteUrl,
        source: "roast-analysis",
        timestamp: new Date().toISOString(),
      };

      // Send form data to API
      const response = await fetch("/api/roast-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      // Store contact info for booking flow
      sessionStorage.setItem("contactInfo", JSON.stringify(formData));

      // Move to success state
      setCurrentState("success");
    } catch (error) {
      console.error("Form submission failed:", error);
      alert(
        "There was an error submitting your information. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render different content based on current state
  const renderContent = () => {
    switch (currentState) {
      case "url-input":
        return (
          <>
            <h1 className="text-4xl md:text-7xl !font-medium text-gray-900 my-6 leading-tight">
              Let's{" "}
              <span className="highlight text-primary">Grow Your Revenue</span>
              <br /> <span className="text-gray-400">Through Better Design</span>
            </h1>

            <div className="max-w-3xl mx-auto">
              <div className="text-center mt-24">
                <p className="!text-4xl !font-medium mb-8">
                  Step 1: Fill in your website URL
                </p>
              </div>

              {/* URL Analysis Form */}
              <form onSubmit={handleUrlSubmit} className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4 p-2 rounded-full md:border border-gray-300">
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full md:col-span-2 !rounded-full md:!rounded-none text-lg border md:!border-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={!websiteUrl.trim() || isAnalyzing}
                    className="cta w-full"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      "Start My Analysis"
                    )}
                  </button>
                </div>
                {/* Trust signal */}
                <p className="text-center text-gray-500">
                  Get your free website analysis within 24 hours.
                </p>
              </form>
            </div>
          </>
        );

      case "contact-form":
        return (
          <>
            <h1 className="text-4xl md:text-5xl !font-semibold text-gray-900 my-6 leading-tight">
              Your{" "}
              <span className="highlight text-primary">Analysis Result</span> is
              Ready!
            </h1>
            <p className="text-center text-gray-600">
              Let's us know how we can get to you!
            </p>

            {/* Contact Form Section */}
            <div className="max-w-lg mx-auto mt-16">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-start text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Firstname Lastname"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-start text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-start text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={!isContactFormValid() || isSubmitting}
                    className="cta flex-2"
                    style={{ flex: 2 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      "Continue"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </>
        );

      case "success":
        return (
          <BookingRoastSection
            formData={{
              fullName: formData.name,
              email: formData.email,
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex gap-4 mb-10 items-center text-2xl font-semibold tracking-tight">
            <Logo className="w-14 h-14 fill-primary text-primary ml-4" />
            <span>WEBCRAFTSMAN</span>
          </div>

          {renderContent()}
        </div>
      </section>
      {/* <div className="h-[40rem] overflow-hidden">
        <Image
          src="/Roast_banner.png"
          alt="Get a free audit"
          width={1200}
          height={500}
          className="mx-auto w-full opacity-80"
        />
      </div> */}
    </div>
  );
}

export default function RoastPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p>Loading...</p>
      </div>
    </div>}>
      <RoastPageContent />
    </Suspense>
  );
}
