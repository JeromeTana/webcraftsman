import React from "react";
import { motion } from "framer-motion";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { LucideX } from "@/Components/Icons/LucideX";

const AdBenefits: React.FC = () => {
  const problemSolutions = [
    {
      problem: "Visitors leave without buying",
      solution: "Identify exactly what's stopping conversions",
      icon: "🚫"
    },
    {
      problem: "Low website traffic quality",
      solution: "Optimize for your ideal customers",
      icon: "📈"
    },
    {
      problem: "Outdated, unprofessional design",
      solution: "Get modern design recommendations",
      icon: "🎨"
    },
    {
      problem: "Poor mobile experience",
      solution: "Mobile optimization strategies",
      icon: "📱"
    },
    {
      problem: "Unclear value proposition",
      solution: "Compelling messaging that converts",
      icon: "💬"
    },
    {
      problem: "Slow loading times",
      solution: "Performance optimization tips",
      icon: "⚡"
    }
  ];

  const analysisIncludes = [
    "Conversion rate optimization audit",
    "User experience (UX) analysis",
    "Mobile responsiveness check",
    "Page speed performance review",
    "SEO optimization assessment",
    "Content and messaging evaluation",
    "Call-to-action effectiveness",
    "Trust signal identification",
    "Competitor comparison insights",
    "Actionable improvement roadmap"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Turn Your Website Into a <span className="text-primary">Sales Machine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive analysis reveals exactly why your website isn't converting and gives you a clear roadmap to fix it.
          </p>
        </motion.div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🚨 Common Website Problems
            </h3>
            <div className="space-y-4">
              {problemSolutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <LucideX className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="font-medium text-red-800">{item.problem}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              ✅ Our Solutions
            </h3>
            <div className="space-y-4">
              {problemSolutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <LucideCheck className="w-5 h-5 text-accent-green flex-shrink-0" />
                  <span className="font-medium text-green-800">{item.solution}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included in Your FREE Analysis
            </h3>
            <p className="text-lg text-gray-600">
              A comprehensive review worth $299 - completely free, no strings attached
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analysisIncludes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <LucideCheck className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-blue-50 rounded-xl text-center">
            <p className="text-lg font-bold text-primary mb-2">
              🎯 BONUS: Custom Action Plan
            </p>
            <p className="text-gray-700">
              Get a prioritized list of improvements ranked by impact so you know exactly what to fix first.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdBenefits;
