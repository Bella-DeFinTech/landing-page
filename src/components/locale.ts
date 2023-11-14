import { createContext, useContext } from "react";

let data: Map<string, Locales> = new Map();

const fetchEn = () =>
  import("libs/components/locales/en.js").then((d) => d.default);
const fetchTr = () =>
  import("libs/components/locales/tr.js").then((d) => d.default);
const fetchZh = () =>
  import("libs/components/locales/zh_cn.js").then((d) => d.default);

export const fetchLocale = async (locale: string) => {
  if (data.has(locale)) {
    return data.get(locale);
  }

  const result = await (locale === "zh_cn"
    ? fetchZh()
    : locale === "en"
    ? fetchEn()
    : fetchTr());
  data.set(locale, result);
  return result;
};

export type Locales = Awaited<ReturnType<typeof fetchEn>>;

type LocaleType = { data: Locales };
export const LocaleContext = createContext<LocaleType>({} as LocaleType);

export const useLocale = () => {
  const l = useContext(LocaleContext);
  return l;
};
