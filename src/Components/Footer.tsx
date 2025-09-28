import Logo from "./Icons/Logo";
import { footerLinks } from "@/data";
import { tagline } from "@/data";

export default function Footer() {
  return (
    <>
      {/* <CtaSection /> */}
      <footer>
        <div className="max-w-7xl m-auto py-20 pb-10 px-4 border-t border-neutral-200">
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
