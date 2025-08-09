"use client";

import React, { useState, useEffect } from "react";
import { RevealLink } from "./RevealLink";
import { MegaMenu } from "./MegaMenu";
import Logo from "./Icons/Logo";
import { LucideArrowRight } from "./Icons/LucideArrowRight";
import { BookIcon } from "./Icons/BookIcon";
import { ToolIcon } from "./Icons/ToolIcon";
import { BriefcaseIcon } from "./Icons/BriefcaseIcon";
import { BlogIcon } from "./Icons/BlogIcon";
import { DesignIcon } from "./Icons/DesignIcon";
import { CodeIcon } from "./Icons/CodeIcon";
import { HamburgerIcon } from "./Icons/HamburgerIcon";
import { LucideX } from "./Icons/LucideX";
import { openCtaPopup } from "./CtaPopup";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Define the mega menu structure for Services
  const servicesSections = [
    {
      title: "Services",
      icon: BriefcaseIcon,
      items: [
        {
          name: "Web Development",
          href: "/services/web-development",
          description: "Custom websites and applications",
          icon: CodeIcon,
        },
        {
          name: "UI/UX Design",
          href: "/services/ui-ux-design",
          description: "User-centered design solutions",
          icon: DesignIcon,
        },
        {
          name: "E-commerce",
          href: "/services/ecommerce",
          description: "Online store development",
          icon: BriefcaseIcon,
        },
        {
          name: "Consulting",
          href: "/services/consulting",
          description: "Strategic digital guidance",
          icon: ToolIcon,
        },
        {
          name: "Maintenance",
          href: "/services/maintenance",
          description: "Ongoing support and updates",
          icon: ToolIcon,
        },
        {
          name: "SEO Optimization",
          href: "/services/seo",
          description: "Search engine optimization",
          icon: BookIcon,
        },
      ],
    },
  ];

  // Define the mega menu structure for Value
  const valueSections = [
    {
      title: "Value",
      icon: BookIcon,
      items: [
        {
          name: "Blog Posts",
          href: "/posts",
          description: "Latest insights and tutorials",
          icon: BookIcon,
        },
        {
          name: "Design Guides",
          href: "/value/design-guides",
          description: "UI/UX best practices",
          icon: DesignIcon,
        },
        {
          name: "Templates",
          href: "/value/templates",
          description: "Pre-built design templates",
          icon: CodeIcon,
        },
        {
          name: "Development Tips",
          href: "/value/dev-tips",
          description: "Code optimization techniques",
          icon: CodeIcon,
        },
        {
          name: "Development Tips",
          href: "/value/dev-tips",
          description: "Code optimization techniques",
          icon: CodeIcon,
        },
        {
          name: "Development Tips",
          href: "/value/dev-tips",
          description: "Code optimization techniques",
          icon: CodeIcon,
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between m-auto p-3 pl-4 bg-background">
        <a
          href="/"
          className="inline-flex gap-4 items-center sm:text-2xl font-semibold tracking-tight"
        >
          <Logo className="w-14 h-14 fill-primary text-primary ml-4" />
          <span className="hidden sm:inline">WEBCRAFTSMAN</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8">
          <ul className="gap-8 hidden lg:flex text-(--paragraph)">
            <li>
              <RevealLink href="/about">About</RevealLink>
            </li>
            <li>
              <RevealLink href="/showcase">Showcases</RevealLink>
            </li>
            <li>
              <RevealLink href="/service">Services</RevealLink>
            </li>
            <li>
              <MegaMenu trigger="Value" sections={valueSections} />
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="flex gap-4">
          <button
            onClick={openCtaPopup}
            className="cta hidden md:flex items-center gap-2"
          >
            นัดพูดคุยเลย
            <LucideArrowRight />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <LucideX className="w-8 h-8" />
            ) : (
              <HamburgerIcon className="w-8 h-8" />
            )}
          </button>
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
              <a
                href="/about"
                className="block py-2 text-lg hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/showcase"
                className="block py-2 text-lg hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Showcases
              </a>
            </li>

            {/* Mobile Services Section */}
            <li>
              <div className="py-2">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Services
                </h3>
                <ul className="space-y-2 pl-4">
                  {servicesSections[0].items.map((item, index) => (
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

            {/* Mobile Value Section */}
            <li>
              <div className="py-2">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Value
                </h3>
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
                นัดพูดคุยเลย
                <LucideArrowRight />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
