import type { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { getMetadata } from "@/data/metadata-i18n";

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
  const localeParam = resolvedParams?.locale || 'en';
  const locale = localeParam as Locale;
  
  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      {children}
      <Footer locale={locale} dict={dict} />
    </>
  );
}
