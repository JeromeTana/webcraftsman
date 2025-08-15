import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get More Customers Online - Free Website Analysis | WEBCRAFTSMAN",
  description: "Stop losing customers to competitors. Get a free website analysis and learn how to turn visitors into paying customers. No strings attached.",
  robots: {
    index: true,
    follow: true,
  },
};

interface AdsLayoutProps {
  children: ReactNode;
}

export default function AdsLayout({ children }: AdsLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}
