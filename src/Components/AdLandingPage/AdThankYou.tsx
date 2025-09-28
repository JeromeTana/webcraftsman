"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Check, Clock } from "lucide-react";
import { motion } from "framer-motion";
const AdThankYou: React.FC = () => {
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    // Get form data from session storage
    const storedData = sessionStorage.getItem('adLeadFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const nextSteps = [
    {
      step: "1",
      title: "Analysis in Progress",
      description: "Our experts are analyzing your website right now",
      icon: "🔍",
      status: "active"
    },
    {
      step: "2", 
      title: "Report Preparation",
      description: "We're creating your personalized improvement roadmap",
      icon: "📊",
      status: "pending"
    },
    {
      step: "3",
      title: "Delivery (24hrs)",
      description: "You'll receive your detailed analysis via email",
      icon: "📧",
      status: "pending"
    }
  ];

  const bonusItems = [
    "🎯 Custom conversion optimization plan",
    "📱 Mobile experience improvement tips", 
    "⚡ Page speed optimization checklist",
    "🔍 SEO quick wins for more traffic",
    "💰 Revenue impact projections"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-xl">WEBCRAFTSMAN</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-accent-green">
            <Check className="w-4 h-4" />
            <span>Analysis Requested</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🎉 You're All Set!
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Thank you{formData?.fullName ? `, ${formData.fullName}` : ""}! Your FREE website analysis request has been received.
          </p>

          {formData?.websiteUrl && (
            <div className="bg-white rounded-lg p-4 inline-block shadow-sm border">
              <p className="text-sm text-gray-500 mb-1">Analyzing:</p>
              <p className="font-medium text-primary">{formData.websiteUrl}</p>
            </div>
          )}
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Happens Next?
          </h2>
          
          <div className="space-y-6">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`flex items-start gap-4 p-4 rounded-lg border-2 ${
                  step.status === 'active' 
                    ? 'border-accent-green bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                  step.status === 'active' ? 'bg-accent-green text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.status === 'active' ? step.icon : step.step}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {step.status === 'active' && (
                    <div className="flex items-center gap-2 mt-2 text-accent-green text-sm">
                      <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                      <span>In Progress</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bonus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            🎁 BONUS: You're Also Getting These Extras (Worth $597)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bonusItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <Check className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Urgency Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center mb-12"
        >
          <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="font-bold text-orange-900 mb-2">
            ⚡ Want Even Faster Results?
          </h3>
          <p className="text-orange-800 mb-4">
            Skip the wait and get your analysis in real-time during a FREE 15-minute strategy call.
          </p>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
            Book FREE Strategy Call
          </button>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">When will I receive my analysis?</h3>
              <p className="text-gray-600 text-sm">You'll receive your detailed analysis within 24 hours via email.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">Is this really free?</h3>
              <p className="text-gray-600 text-sm">Yes! This is a limited-time offer with no hidden fees or obligations.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">What if I need help implementing changes?</h3>
              <p className="text-gray-600 text-sm">We offer implementation services if you'd like our help, but there's no obligation.</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Can you analyze any type of website?</h3>
              <p className="text-gray-600 text-sm">Yes! We analyze e-commerce, service, SaaS, and all other business websites.</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Questions? Email us at{" "}
            <a href="mailto:hello@webcraftsman.co" className="text-primary hover:underline">
              hello@webcraftsman.co
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdThankYou;
