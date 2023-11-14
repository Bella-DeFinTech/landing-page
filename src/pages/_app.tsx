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
    fetchLocale(router.locale ?? router.defaultLocale ?? "en").then((d) => {
      setData(d);
    });
  }, [router.locale, router.defaultLocale]);

  if (!data) return null;

  return (
    <LocaleContext.Provider value={{ data }}>
      <Component data={data} />;
    </LocaleContext.Provider>
  );
};
// const MyApp = ({ Component, pageProps }: AppProps) => {
//   const router = useRouter();
//   useEffect(() => {
//     initGA();
//     if (!router.asPath.includes("?")) {
//       logPageView();
//     }
//   }, []);

//   useEffect(() => {
//     router.events.on("routeChangeComplete", logPageView);
//     return () => {
//       router.events.off("routeChangeComplete", logPageView);
//     };
//   }, [router.events]);

//   return (
//     <>
//       <Component {...pageProps} />
//     </>
//   );
// };

// export default (props: any) => (
//   <LocaleContext.Provider value={{ data: props.pageProps.data }}>
//     <MyApp {...props} />
//   </LocaleContext.Provider>
// );
