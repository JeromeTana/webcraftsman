import { ComparisonSection, ProcessSection } from "@/Components/Sections";
import React from "react";
import { type Locale } from "@/i18n/routing";

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <main>
      <ComparisonSection locale={locale} />
      <ProcessSection locale={locale} />
    </main>
  );
}
