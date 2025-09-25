import React from "react";

import Logo from "./Icons/Logo";
import { RevealLink } from "./RevealLink";
import CtaSection from "./CtaSection";
import { tagline } from "@/data";
import { navBarLinks } from "@/data";

export default function Footer() {
  return (
    <>
      <CtaSection />
      <footer>
        <div className="max-w-6xl m-auto py-20 pb-10 px-4 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-32">
            <div>
              <Logo className="w-40 h-20 mb-10 fill-primary text-primary" />
              <p>{tagline}</p>
            </div>
            <div>
              <p className="text-black mb-8">Quick links</p>
              <ul className="flex flex-col gap-4 text-(--paragraph)">
                {navBarLinks.map((item, index) => (
                  <li key={index}>
                    <RevealLink href={item.href}>{item.name}</RevealLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-black mb-8">Contact Us</p>
              <ul className="flex flex-col gap-4 text-(--paragraph)">
                <li>
                  <RevealLink href="mailto:jerome@webcraftsman.co">
                    jerome@webcraftsman.co
                  </RevealLink>
                </li>
              </ul>
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
