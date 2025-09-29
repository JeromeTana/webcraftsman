import { Metadata } from "next";

export const adMetadata: Metadata = {
  title: "Get More Customers Online - Free Website Analysis | WEBCRAFTSMAN",
  description: "Stop losing customers to competitors. Get a free website analysis and learn how to turn visitors into paying customers. No strings attached.",
  keywords: "website analysis, conversion optimization, increase sales, website audit, landing page optimization",
  openGraph: {
    title: "Get More Customers Online - Free Website Analysis",
    description: "Stop losing customers to competitors. Get a free website analysis and learn how to turn visitors into paying customers.",
    type: "website",
    images: [
      {
        url: "/og-ads.png",
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
    images: ["/og-ads.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
