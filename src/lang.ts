import { Translations } from "./locales/en-US";

export const langs = [
  { name: "English", code: "en-US" },
  { name: "Türkçe", code: "tr" },
  { name: "한국인", code: "kr" },
  { name: "中文", code: "zh-CN" },
] as const;

export const locales = langs.map((la) => la.code);

export type Locale = (typeof locales)[number];

const langCache = new Map<Locale, Translations>();

export const importLang = async (locale: Locale): Promise<Translations> => {
  if (langCache.has(locale)) {
    return langCache.get(locale)!;
  }

  return import(`@/locales/${locale}`).then((ret) => {
    langCache.set(locale, ret.default);
    return ret.default;
  });
};
