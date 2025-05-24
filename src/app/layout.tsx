import type { Metadata } from "next";
import "./globals.css";
import { instrumentSans, manrope, poppins } from "./fonts";
import LenisScrollProvider from "./providers/lenis-provider";
import FollowCursor from "@/Components/FollowCursor";
import Header from "@/Components/Header";
import { tagline } from "./global";

export const metadata: Metadata = {
  title: tagline,
  description: tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>
      <body className={`${manrope.className} antialiased`}>
        <FollowCursor />
        <LenisScrollProvider>
          {/* <div className="py-2 bg-primary mb-2 text-center text-sm underline">
            <a href="/free" target="_blank" className="text-white">
              Get your free audit here
            </a>
          </div> */}
          <Header />
          {children}
        </LenisScrollProvider>
      </body>
    </html>
  );
}
