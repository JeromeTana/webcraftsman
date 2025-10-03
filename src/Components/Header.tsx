"use client";

import React, { useMemo, useState } from "react";
import { RevealLink } from "./RevealLink";
import { MegaMenu } from "./MegaMenu";
import { ServiceDropdown } from "./NavDropdown";
import Logo from "./Icons/Logo";
import { ArrowRight, X } from "lucide-react";
import { BookIcon } from "./Icons/BookIcon";
import { DesignIcon } from "./Icons/DesignIcon";
import { CodeIcon } from "./Icons/CodeIcon";
import { getNavBarLinks } from "@/data/navigations-i18n";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "@/i18n/routing";
import { openCtaPopup } from "./CtaPopup";

export default function Header() {
  const locale = useLocale() as Locale;
  const navBarLinks = getNavBarLinks(locale);
  const tNav = useTranslations("nav");
  const tValueMenu = useTranslations("header.valueMenu");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  type ValueMenuItemMessage = {
    name: string;
    href: string;
    description?: string;
    icon?: string;
  };

  const valueMenuItems = (tValueMenu.raw("items") as ValueMenuItemMessage[]) ?? [];

  const iconMap = {
    blog: BookIcon,
    design: DesignIcon,
    code: CodeIcon,
  } as const;

  const valueSections = useMemo(
    () => [
      {
        title: tValueMenu("title"),
        icon: BookIcon,
        items: valueMenuItems.map(({ icon, ...item }) => ({
          ...item,
          icon: (icon && iconMap[icon as keyof typeof iconMap]) || BookIcon,
        })),
      },
    ],
    [tValueMenu, valueMenuItems]
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (isMobileMenuOpen) {
  //       closeMobileMenu();
  //     }
  //   };

  //   if (isMobileMenuOpen) {
  //     window.addEventListener('scroll', handleScroll);
  //     // Prevent body scroll when menu is open
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [isMobileMenuOpen]);



  // Define the mega menu structure for Value
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center  justify-between m-auto p-3 pl-4 bg-background">
        <Link
          href="/"
          className="inline-flex lg:w-1/4 gap-4 items-center sm:text-2xl font-semibold tracking-tight"
        >
          <Logo className="w-14 h-14 fill-primary text-primary ml-4" />
          <span className="hidden sm:inline">WEBCRAFTSMAN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8">
          <ul className="gap-8 hidden lg:flex text-(--paragraph)">
            {navBarLinks.map((item, index) => (
              <li key={index}>
                {item.dropdown ? (
                  <ServiceDropdown locale={locale} trigger={item.title} items={item.dropdown} />
                ) : (
                  <RevealLink href={`/${locale}${item.url}`}>
                    {item.title}
                  </RevealLink>
                )}
              </li>
            ))}
            <li>
              <MegaMenu
                trigger={tValueMenu("trigger")}
                sections={valueSections}
              />
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="flex lg:w-1/4 justify-end gap-4 items-center">
          <LanguageSwitcher currentLocale={locale} />
          <Link href="#cta">
            <button
              // onClick={openCtaPopup}
              className="cta hidden md:flex items-center gap-2"
            >
              {tNav("booking")}
              <ArrowRight />
            </button>
          </Link>

          {/* Mobile Hamburger Button */}
          {/* <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <HamburgerIcon className="w-8 h-8" />
            )}
          </button> */}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-background border-t border-border transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="px-4 py-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/about"
                className="block py-2 text-lg hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/showcase"
                className="block py-2 text-lg hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Showcases
              </Link>
            </li>

            {/* Mobile Services Section */}
            <li>
              <div className="py-2">
                <p className="text-lg font-semibold text-primary mb-2">
                  Services
                </p>
                <ul className="space-y-2 pl-4">
                  {navBarLinks
                    .find((link) => link.dropdown)
                    ?.dropdown?.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.url}
                          className="block py-1 text-sm hover:text-primary transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </li>

            {/* Mobile Value Section */}
            <li>
              <div className="py-2">
                <p className="text-lg font-semibold text-primary mb-2">Value</p>
                <ul className="space-y-2 pl-4">
                  {valueSections[0].items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block py-1 text-sm hover:text-primary transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Mobile CTA Button */}
            <li className="pt-4 border-t border-border">
              <button
                onClick={() => {
                  openCtaPopup();
                  closeMobileMenu();
                }}
                className="w-full cta flex items-center justify-center gap-2 py-3"
              >
                รับบริการ
                <ArrowRight />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
