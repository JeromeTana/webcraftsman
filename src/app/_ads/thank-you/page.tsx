import { Metadata } from "next";
import AdThankYou from "@/Components/AdLandingPage/AdThankYou";

export const metadata: Metadata = {
  title: "Thank You - Your Website Analysis is Being Prepared | WEBCRAFTSMAN",
  description: "Thank you for requesting your free website analysis. We'll deliver your personalized report within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdThankYouPage() {
  return <AdThankYou />;
}
