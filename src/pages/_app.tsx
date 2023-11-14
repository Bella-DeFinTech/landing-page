import "libs/styles/globals.css";
import type { AppProps } from "next/app";
import { initGA, logPageView } from "../ga";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LocaleContext, Locales, fetchLocale } from "libs/components/locale";

export default ({ Component }: AppProps) => {
  const [data, setData] = useState<Locales>();
  const router = useRouter();

  useEffect(() => {
    initGA();
    if (!router.asPath.includes("?")) {
      logPageView();
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", logPageView);
    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, [router.events]);

  useEffect(() => {
    const url = new URL(location.href);
    const { locale } = router.query;
    const lang = locale || url.searchParams.get("locale");

    if (!lang) {
      router.replace("/?locale=en", undefined, { shallow: true });
      return;
    }

    fetchLocale(lang as string).then((d) => {
      setData(d);
    });
  }, [router.query.locale]);

  if (!data) return null;

  return (
    <LocaleContext.Provider value={{ data }}>
      <Component data={data} />;
    </LocaleContext.Provider>
  );
};
