"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: Locale) => {
    // Remove the current locale from the pathname
    const segments = pathname.split("/");
    segments[1] = newLocale; // Replace the locale segment
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
        {currentLocale.toUpperCase()}
        <ChevronDown className="w-4 h-4" />
      </button>
      <div className="absolute w-full top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
        {locales
          .filter((locale) => locale !== currentLocale)
          .map((locale) => (
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className="block w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 first:rounded-t last:rounded-b"
            >
              {locale.toUpperCase()}
            </button>
          ))}
      </div>
    </div>
  );
}
