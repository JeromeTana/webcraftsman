import { ComparisonSection, ProcessSection } from "@/Components/Sections";
import React from "react";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const dict = getDictionary(locale);

  return (
    <main>
      <ComparisonSection locale={locale} />
      <ProcessSection locale={locale} />
    </main>
  );
}
