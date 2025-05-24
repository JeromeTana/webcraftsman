import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "./fonts";
import LenisScrollProvider from "./providers/lenis-provider";
import FollowCursor from "@/Components/FollowCursor";
import Header from "@/Components/Header";
import { description, tagline } from "./global";
import Hotjar from "@/Components/Hotjar";

export const metadata: Metadata = {
  title: tagline,
  description: description,
  openGraph: {
    title: tagline,
    description: description,
    url: "https://www.webcraftsman.co",
    siteName: "Webcraftsman",
    images: [
      {
        url: "https://www.webcraftsman.co/OG_Home.png",
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        <Hotjar />
      </head>
      <body className={`${manrope.className} antialiased`}>
        <FollowCursor />
        <LenisScrollProvider>
          <Header />
          {children}
        </LenisScrollProvider>
      </body>
    </html>
  );
}
