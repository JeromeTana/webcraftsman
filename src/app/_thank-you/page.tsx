import { Check } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import AnimatedSeccessIcon from "@/Components/Icons/AnimatedSeccessIcon";

export const metadata: Metadata = {
  title: "Thank You - Booking Confirmed",
  description: "Your booking has been confirmed! We'll be in touch soon.",
  openGraph: {
    title: "Thank You - Booking Confirmed",
    description: "Your booking has been confirmed! We'll be in touch soon.",
    url: "https://www.webcraftsman.co/thank-you",
    siteName: "Webcraftsman",
    images: [
      {
        url: "https://www.webcraftsman.co/OG_Booking.png",
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <AnimatedContent
          distance={100}
          direction="vertical"
          initialOpacity={0.05}
          animateOpacity
          damping={10}
          stiffness={50}
          scale={0.9}
          threshold={0.2}
        >
          <div className="text-center space-y-8">
            {/* Success Icon */}
            <div className="flex justify-center">
                <AnimatedSeccessIcon size={80} className="text-green-600" />
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                <span className="highlight text-primary">Thank You!</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                Your Meeting is Confirmed
              </h2>
            </div>

            {/* Success Message */}
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We've successfully received your booking and sent you a
                confirmation email with all the details. We're excited to
                discuss your project and help you grow your business!
              </p>
            </div>

            {/* What's Next Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What Happens Next?
              </h3>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full p-2 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Check Your Email
                    </h4>
                    <p className="text-gray-600">
                      You'll receive a calendar invite and meeting details
                      shortly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full p-2 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Prepare for Our Chat
                    </h4>
                    <p className="text-gray-600">
                      Think about your goals, current challenges, and what you'd
                      like to achieve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full p-2 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Join the Meeting
                    </h4>
                    <p className="text-gray-600">
                      We'll discuss your project and see how we can help you
                      succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <p className="text-gray-600">
                Need to make changes to your booking? Check your email for the
                calendar invite with modification options.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="cta inline-block text-center">
                  Back to Home
                </Link>

                <Link
                  href="/value"
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
                >
                  Find Values
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                Questions? Email us at{" "}
                <a
                  href="mailto:hello@webcraftsman.co"
                  className="text-primary hover:underline"
                >
                  hello@webcraftsman.co
                </a>
              </p>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
