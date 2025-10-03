import React from "react";
import { ArrowRight } from "lucide-react";
import { Check } from "lucide-react";
import { CtaPopup, openCtaPopup } from "@/Components/CtaPopup";
import Image from "next/image";
import ProcessSection from "@/Components/Sections/ProcessSection";
import CtaSection from "../Sections/CtaSection";
import AnimatedSuccessIcon from "../Icons/AnimatedSeccessIcon";
import AdHeader from "./AdHeader";
import AdHeroSection from "./AdHeroSection";
import AdProblemSection from "./AdProblemSection";
import AdBenefitsSection from "./AdBenefitsSection";
import AdWhatYouGetSection from "./AdWhatYouGetSection";
import AdFAQSection from "./AdFAQSection";
import AdFooter from "./AdFooter";
import type { Locale } from "@/lib/i18n";

interface AdLandingPageProps {
  locale: Locale;
}

const AdLandingPage: React.FC<AdLandingPageProps> = ({ locale }) => {
  return (
    <div className="min-h-screen bg-white">
      <CtaPopup />
      <AdHeader />
      <AdHeroSection />
      <AdProblemSection />
      <AdBenefitsSection />
      <AdWhatYouGetSection />

      <ProcessSection locale={locale} />

      <AdFAQSection />
      <CtaSection locale={locale} />
      <AdFooter />
    </div>
  );
};

export default AdLandingPage;
