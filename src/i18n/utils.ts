import en from './en.json';
import it from './it.json';

const translations = {
  en,
  it,
};

export type Language = 'en' | 'it';

// Accept either a Language literal or a plain string to avoid TS errors
export function t(lang: Language | string, key: string): string {
  const l = (lang === 'it' ? 'it' : 'en') as Language;
  const keys = key.split('.');
  let value: any = translations[l];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

// Accept URL or string-like inputs (Astro.url may not be a `URL` instance)
export function getLanguageFromURL(url: URL | string | { pathname?: string }): Language {
  const pathname = typeof url === 'string' ? url : (url && 'pathname' in url ? url.pathname ?? '' : '');
  const segments = pathname.split('/').filter(Boolean);

  return segments[0] === 'it' ? 'it' : 'en';
}
