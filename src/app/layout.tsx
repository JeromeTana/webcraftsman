import type { Metadata } from "next";
import "./globals.css";
import { ibmPlexSansThai, kanit, manrope, sarabun } from "./fonts";
import LenisScrollProvider from "./providers/lenis-provider";
import FollowCursor from "@/Components/FollowCursor";
import Header from "@/Components/Header";
import { baseMetadata } from "./metadata";
import Hotjar from "@/Components/Hotjar";
import GA4 from "@/Components/GA4";
import Footer from "@/Components/Footer";
import FacebookPixel from "@/Components/FacebookPixel";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js" defer></script>
        <Hotjar />
        {/* <GA4 /> */}
        <GoogleAnalytics gaId="G-H98Z69VQWL" />
        <FacebookPixel />
      </head>
      <body
        className={`${ibmPlexSansThai.variable} ${sarabun.variable} antialiased`}
        suppressHydrationWarning
      >
        <FollowCursor />
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
