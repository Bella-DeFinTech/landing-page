import { createContext, useContext } from "react";

const fetchEn = () =>
  import("libs/components/locales/en.js").then((d) => d.default);
const fetchTr = () =>
  import("libs/components/locales/tr.js").then((d) => d.default);
const fetchZh = () =>
  import("libs/components/locales/zh_cn.js").then((d) => d.default);

export const fetchLocale = (locale: string) =>
  locale === "zh_cn" ? fetchZh() : locale === "en" ? fetchEn() : fetchTr();

export type Locales = Awaited<ReturnType<typeof fetchEn>>;

type LocaleType = { data: Locales };
export const LocaleContext = createContext<LocaleType>({} as LocaleType);

export const useLocale = () => {
  const l = useContext(LocaleContext);
  return l;
};
