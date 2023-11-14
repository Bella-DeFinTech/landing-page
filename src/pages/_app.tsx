import "libs/styles/globals.css";

import type { AppProps } from "next/app";
import { initGA, logPageView } from "../ga";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { LocaleContext } from "libs/components/locale";

const MyApp = ({ Component, pageProps }: AppProps) => {
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

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default (props: any) => (
  <LocaleContext.Provider value={{ data: props.pageProps.data }}>
    <MyApp {...props} />
  </LocaleContext.Provider>
);
