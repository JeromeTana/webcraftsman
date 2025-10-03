import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type Locale, locales, defaultLocale } from './i18n';

export function getLocale(headers: Headers): Locale {
  // Get language preferences from Accept-Language header
  const acceptLanguage = headers.get('accept-language');
  
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const languages = new Negotiator({
    headers: { 'accept-language': acceptLanguage }
  }).languages();

  try {
    return match(languages, locales, defaultLocale) as Locale;
  } catch {
    return defaultLocale;
  }
}