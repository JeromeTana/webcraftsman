import type { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { locales, type Locale } from "@/i18n/routing";
import { getMetadata } from "@/data/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const metadata = getMetadata(locale);

  return {
    title: metadata.tagline,
    description: metadata.description,
    openGraph: {
      title: metadata.tagline,
      description: metadata.description,
      url: "https://www.webcraftsman.co",
      siteName: "WEBCRAFTSMAN",
      images: [
        {
          url: "https://www.webcraftsman.co/OG_Home.png",
          alt: "Open Graph Image",
        },
      ],
      locale: locale === 'th' ? "th_TH" : "en_US",
      type: "website",
    },
  };
}

interface MainLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<MainLayoutProps>) {
  const resolvedParams = await params;
  const localeParam = resolvedParams?.locale || "en";
  const locale = locales.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : "en";

  return (
    <>
      <Header />
      {children}
      <Footer locale={locale} />
    </>
  );
}
