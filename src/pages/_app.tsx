import "libs/styles/globals.css";

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Header from "libs/components/header";
import Footer from "libs/components/footer";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <div className="body">
      <Component {...pageProps} />
    </div>
    <Footer />
  </>
);

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */);
