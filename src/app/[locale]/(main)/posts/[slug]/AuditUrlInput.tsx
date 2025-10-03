"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuditUrlInput() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const router = useRouter();

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

    // Add delay before redirecting to roast page
    setTimeout(() => {
      setIsAnalyzing(false);
      // Redirect to roast page with URL pre-filled
      router.push("/roast?step=contact");
    }, 2000);
  };

  return (
    <form onSubmit={handleUrlSubmit} className="space-y-4">
      <input
        type="text"
        value={websiteUrl}
        onChange={(e) => setWebsiteUrl(e.target.value)}
        placeholder="https://yourwebsite.com"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm"
        disabled={isAnalyzing}
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
          "Get Free Audit"
        )}
      </button>
    </form>
  );
}
