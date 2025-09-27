import React from "react";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
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
import { LucideArrowRight } from "../Icons/LucideArrowRight";

const AdLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <CtaPopup />
      <AdHeader />
      <AdHeroSection />
      <AdProblemSection />
      <AdBenefitsSection />
      <AdWhatYouGetSection />

      <ProcessSection />

      <AdFAQSection />
      <CtaSection />
      <AdFooter />
    </div>
  );
};

export default AdLandingPage;
