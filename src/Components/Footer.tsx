import Logo from "./Icons/Logo";
import { getFooterLinks } from "@/data/navigations";
import CtaFormSection from "./Sections/CtaFormSection";
import { type Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

interface FooterProps {
  locale: Locale;
}

export default async function Footer({ locale }: FooterProps) {
  const footerLinks = getFooterLinks(locale);
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();
  return (
    <>
      {/* <CtaSection /> */}
      <CtaFormSection locale={locale} />
      <footer>
        <div className="max-w-7xl m-auto py-20 pb-10 px-4">
          <div className="flex flex-col md:flex-row justify-between gap-16 mb-32">
            {/* <div className="flex flex-col items-start"> */}
            <Logo className="w-40 h-20 mb-10 fill-primary text-primary" />
            {/* <p>{tagline}</p> */}
            {/* </div> */}
            <div className="flex flex-col md:flex-row gap-16">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <p className="text-black mb-4">{section.section}</p>
                  <ul className="flex flex-col gap-4 text-(--paragraph)">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.url}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div>
              <p className="text-sm">
                {`Copyright `}
                <span className="font-semibold"> ©{year} WEBCRAFTSMAN</span>. {t("rights")}
              </p>
            </div>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="text-sm hover:text-primary">
                {t("privacyPolicy")}
              </Link>
              <Link href="/terms" className="text-sm hover:text-primary">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
