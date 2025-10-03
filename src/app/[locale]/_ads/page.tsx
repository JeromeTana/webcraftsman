import { Metadata } from "next";
import AdLandingPage from "@/Components/AdLandingPage/AdLandingPage";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Get More Customers Online - Free Website Analysis | WEBCRAFTSMAN",
  description: "Stop losing customers to competitors. Get a free website analysis and learn how to turn visitors into paying customers. No strings attached.",
  openGraph: {
    title: "Get More Customers Online - Free Website Analysis",
    description: "Stop losing customers to competitors. Get a free website analysis and learn how to turn visitors into paying customers.",
    images: [
      {
        url: "/OG_Ads.png",
        width: 1200,
        height: 630,
        alt: "Free Website Analysis - WEBCRAFTSMAN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get More Customers Online - Free Website Analysis",
    description: "Stop losing customers to competitors. Get a free website analysis and learn how to turn visitors into paying customers.",
    images: ["/OG_Ads.png"],
  },
};

export default async function AdsLandingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  
  return <AdLandingPage locale={locale} />;
}
