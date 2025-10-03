import type { Metadata } from "next";
import "../globals.css";
import { ibmPlexSansThai, kanit, manrope, sarabun } from "../fonts";
import LenisScrollProvider from "../providers/lenis-provider";
import FollowCursor from "@/Components/FollowCursor";
import { baseMetadata } from "../metadata";
import Hotjar from "@/Components/Hotjar";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = baseMetadata;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const resolvedParams = await params;
  const requestedLocale = (resolvedParams?.locale || "en") as string;
  const locale = locales.includes(requestedLocale as Locale)
    ? (requestedLocale as Locale)
    : "en";

  if (!locales.includes(locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js" defer></script>
        <Hotjar />
        {/* <GA4 /> */}
        {/* <GoogleAnalytics gaId="G-H98Z69VQWL" /> */}
        <GoogleTagManager gtmId="GTM-WVWNFLC2" />
        {/* <FacebookPixel /> */}
      </head>
      <body
        className={`${ibmPlexSansThai.variable} ${sarabun.variable} ${manrope.variable} antialiased`}
        data-locale={locale}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <FollowCursor />
          <LenisScrollProvider>{children}</LenisScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
