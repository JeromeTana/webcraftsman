import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import LenisScrollProvider from "./providers/lenis-provider";
import FollowCursor from "@/Components/FollowCursor";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export const metadata: Metadata = {
  title: "Webcraftsman.co",
  description: "Build Modern High Converting Website in 5 days, No calls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <FollowCursor />
        <LenisScrollProvider>
          <Header />
          {children}
          <Footer />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
