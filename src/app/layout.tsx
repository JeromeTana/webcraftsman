import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import LenisScrollProvider from "./providers/lenis-provider";
import FollowCursor from "@/Components/FollowCursor";

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
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
