import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AdTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "E-commerce Store Owner",
      avatar: "/jerome_pfp.png", // Using placeholder
      rating: 5,
      quote: "After implementing their recommendations, our conversion rate jumped from 1.2% to 3.8%. That's literally tripled our revenue!",
      result: "217% increase in sales"
    },
    {
      name: "Mike Rodriguez",
      company: "SaaS Founder",
      avatar: "/jerome_pfp.png", // Using placeholder
      rating: 5,
      quote: "The analysis was incredibly detailed. They found issues we never even considered. Our signup rate increased by 150% in just 2 weeks.",
      result: "150% more signups"
    },
    {
      name: "Emma Thompson",
      company: "Local Service Business",
      avatar: "/jerome_pfp.png", // Using placeholder
      rating: 5,
      quote: "Best investment we made for our business. They showed us exactly why customers weren't calling. Now our phone rings non-stop!",
      result: "300% more leads"
    }
  ];

  const beforeAfterStats = [
    { metric: "Conversion Rate", before: "1.2%", after: "3.8%", change: "+217%" },
    { metric: "Page Views", before: "2.3s", after: "0.8s", change: "-65%" },
    { metric: "Bounce Rate", before: "78%", after: "43%", change: "-45%" },
    { metric: "Revenue", before: "$5,200", after: "$15,600", change: "+200%" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our website analysis helped other business owners just like you
          </p>
        </motion.div>

        {/* Before/After Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Average Results After Our Analysis
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {beforeAfterStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-sm font-medium text-gray-600 mb-2">{stat.metric}</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-400 line-through">{stat.before}</p>
                  <p className="text-lg font-bold text-gray-900">{stat.after}</p>
                  <p className="text-sm font-bold text-accent-green">{stat.change}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Result Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <p className="text-sm font-bold text-accent-green text-center">
                  Result: {testimonial.result}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <span className="font-medium">Join 500+ satisfied business owners</span>
            <span className="text-green-500">✓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdTestimonials;
