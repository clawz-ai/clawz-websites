import { en, type TranslationKey } from './en';
import { zh } from './zh';

export type Locale = 'en' | 'zh';

const translations: Record<Locale, Record<TranslationKey, string>> = { en, zh };

export function t(key: TranslationKey, locale: Locale = 'en'): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh') return 'zh';
  return 'en';
}

export function getAlternateUrl(url: URL, locale: Locale): string {
  const path = url.pathname.replace(/^\/(zh|en)\//, '/');
  if (locale === 'en') return path;
  return `/zh${path}`;
}
