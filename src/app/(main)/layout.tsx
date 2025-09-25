import type { Metadata } from "next";
import Header from "@/Components/Header";
import { description, tagline } from "@/data/metadata";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: tagline,
  description: description,
  openGraph: {
    title: tagline,
    description: description,
    url: "https://www.webcraftsman.co",
    siteName: "WEBCRAFTSMAN",
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
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
