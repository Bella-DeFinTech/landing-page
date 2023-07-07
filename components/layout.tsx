import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { useMeasure } from "react-use";

export default ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  return (
    <div className="root" ref={ref}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover"
        />
        <title>{title}</title>
      </Head>
      <Header width={width} />
      <div className="body">{children}</div>
      <Footer />
      <style global jsx>
        {`
          @import "/styles/font.css";
          @import "/styles/base.css";
          @import "/styles/variable.css";
          ul,
          li {
            list-style: none;
            padding: 0;
            margin: 0;
          }
        `}
      </style>
      <style jsx>
        {`
          .body {
            width: 100%;
            max-width: 91.86rem;
            margin: 0 auto;
            padding: 0 7.86rem;
          }

          @media (max-width: 1100px) {
            .body {
              padding: 0 1.14rem;
            }
          }
        `}
      </style>
    </div>
  );
};
