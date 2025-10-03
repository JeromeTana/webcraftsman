import Logo from "./Icons/Logo";
import { getFooterLinks } from "@/data/navigations-i18n";
import { getMetadata } from "@/data/metadata-i18n";
import CtaFormSection from "./Sections/CtaFormSection";
import { type LocalizedComponentProps } from "@/types/i18n";

export default function Footer({ locale, dict }: LocalizedComponentProps) {
  const footerLinks = getFooterLinks(locale);
  const metadata = getMetadata(locale);
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
                        <a href={link.url}>{link.title}</a>
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
                Copyright
                <span className="font-semibold"> ©2025 WEBCRAFTSMAN</span>. All
                rights reserved.
              </p>
            </div>
            <div className="flex gap-8">
              <p className="text-sm">Privacy Policy</p>
              <p className="text-sm">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
