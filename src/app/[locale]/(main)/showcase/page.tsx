import {
  FAQSection,
  ProcessSection,
  TestimonialSection,
  ShowcaseSection,
} from "@/Components/Sections";
import { type Locale } from "@/i18n/routing";

export default async function ShowcasePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <main>
      <ShowcaseSection locale={locale}/>
      <ProcessSection locale={locale} />
      <TestimonialSection locale={locale} />
      {/* <FAQSection locale={locale} /> */}
    </main>
  );
}
