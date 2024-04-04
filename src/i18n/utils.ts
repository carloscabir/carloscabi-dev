import { defaultLang, languages } from './consts'
import { ui } from './headerUi';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useLanguage(lang: keyof typeof ui) { 
  return ui[lang]
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useLink(lang: keyof typeof languages, label: string) { 
  if (lang === defaultLang) return `/${label}`
  
  return `/${lang}/${label}`
}

export function getPreferredLang() {
    if (typeof localStorage !== 'undefined') return localStorage.getItem("language") ?? defaultLang
  }