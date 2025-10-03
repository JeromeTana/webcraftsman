import { type Locale } from '@/lib/i18n';
import { type Dictionary } from '@/dictionaries';

export interface LocalizedComponentProps {
  locale: Locale;
  dict: Dictionary;
}