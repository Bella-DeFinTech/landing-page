import Layout from "../components/layout";
import { useTranslation } from "../i18n";
import React from "react";
import Head from "next/head";

const PSuiteItem = ({ v }: { v: string[] }) => (
  <div>
    <h1>{v[0]}</h1>
    <div className="cc">{v[1]}</div>
    <style jsx>
      {`
        h1 {
          font-size: 1.71rem;
          font-family: DINNextLTPro-Regular;
          font-weight: 500;
          color: rgba(22, 33, 76, 1);
          line-height: 2.07rem;
        }

        .cc {
          font-size: 1.43rem;
          font-family: DINNextLTPro-Light, DINNextLTPro;
          font-weight: 300;
          color: rgba(108, 111, 134, 1);
          line-height: 1.71rem;
          margin-top: 1rem;
        }

        @media (max-width: 1100px) {
          h1 {
            font-size: 1.15rem;
            line-height: 1.36rem;
          }

          .cc {
            font-size: 1rem;
            margin-top: 0.72rem;
            line-height: 1.43rem;
          }
        }
      `}
    </style>
  </div>
);

const FeatureItem = ({
  name,
  icon,
  descr,
}: {
  name: string;
  descr: string;
  icon: string;
}) => (
  <div className="flex c root">
    <i className="icon" />
    <h1>{name}</h1>
    <div className="descr">{descr}</div>
    <style jsx>
      {`
        .root {
          width: 20.85rem;
          padding: 0 2.17rem;
        }

        i {
          background-image: url(${icon});
          width: 4.43rem;
          height: 4.43rem;
        }

        h1 {
          font-size: 1.71rem;
          font-family: DINNextLTPro-Regular;
          font-weight: 500;
          color: rgba(22, 33, 76, 1);
          line-height: 2.07rem;
          margin-top: 2.79rem;
        }

        .descr {
          font-size: 1.43rem;
          font-family: DINNextLTPro-Light, DINNextLTPro;
          font-weight: 300;
          color: rgba(108, 111, 134, 1);
          line-height: 1.86rem;
          margin-top: 1rem;
        }

        @media (max-width: 1100px) {
          .root {
            width: 100%;
            padding: 2.15rem 1rem;
            height: auto;
          }

          i {
            width: 2.51rem;
            height: 2.51rem;
          }

          h1 {
            font-size: 1rem;
            margin-top: 1.29rem;
          }

          .descr {
            font-size: 1rem;
            margin-top: 0.5rem;
          }
        }
      `}
    </style>
  </div>
);

const Index = () => {
  const { t } = useTranslation(["landing_page"]);
  const { t: infoT } = useTranslation("info");
  const [d, setD] = React.useState("");
  const [eventIsLaunch, setLiquidityIsOn] = React.useState(true); // set true means disable counting down
  const [currServerDateString, setCurrServerDateString] = React.useState("");
  const [currDatetime, setCurrDatetime] = React.useState(0);

  const eventLaunchDatetime = "2020-02-08T19:59:59"; // fs lunch datetime

  async function getCurrDate() {
    try {
      const response = await fetch(
        "https://worldtimeapi.org/api/timezone/Asia/Hong_Kong"
      );
      const data = await response.json();

      const to = new Date(eventLaunchDatetime).getTime();
      const now = new Date(data.datetime.substring(0, 19)).getTime();
      console.log(now);
      console.log(to);
      let _currDatetime = to - now;
      setCurrDatetime(_currDatetime);
      setCurrServerDateString(data.datetime.substring(0, 19));
    } catch (error) {
      console.log(error);
    }
  }

  const indicatorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!indicatorRef.current) return;
    const el = indicatorRef.current;
    const cb: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio < 1) {
          document.body.classList.add("show-blur");
        } else {
          document.body.classList.remove("show-blur");
        }
      });
    };
    const observer = new IntersectionObserver(cb, {
      rootMargin: "-76px 0px 0px 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, [indicatorRef.current]);

  React.useEffect(() => {
    getCurrDate();
  }, []);

  React.useEffect(() => {
    const fill = (v: number | string) => String(v).padStart(2, "0");
    let _currDatetime = currDatetime;
    const interval = setInterval(() => {
      setLiquidityIsOn(currDatetime > 0 ? false : true);
      if (currDatetime !== 0) {
        _currDatetime = _currDatetime - 1000;
      }

      var days = _currDatetime / 1000 / 60 / 60 / 24;
      var daysRound = Math.floor(days);
      var hours = _currDatetime / 1000 / 60 / 60 - 24 * daysRound;
      var hoursRound = Math.floor(hours);
      var minutes =
        _currDatetime / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound;
      var minutesRound = Math.floor(minutes);
      var seconds =
        _currDatetime / 1000 -
        24 * 60 * 60 * daysRound -
        60 * 60 * hoursRound -
        60 * minutesRound;
      var secondsRound = Math.floor(seconds);

      setD(() => {
        if (daysRound) {
          return [daysRound * 24 + hoursRound, minutesRound, secondsRound]
            .map(fill)
            .join(":");
        } else if (hoursRound) {
          return [hoursRound, minutesRound, secondsRound].map(fill).join(":");
        } else if (minutesRound) {
          return ["00", minutesRound, secondsRound].map(fill).join(":");
        } else if (secondsRound) {
          return ["00", "00", secondsRound].map(fill).join(":");
        }
        return "00:00:00";
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout title="首页">
      <Head>
        <title>Bella Protocol</title>
      </Head>
      <div className="root flex c v-center" id="about">
        <h1>
          <div ref={indicatorRef} className="indicator"></div>
          {t("one_click_crypto_banking")}
        </h1>
        <h2>{t("a_suite_of_defi_products")}</h2>
        <div className="actions flex">
          <button className="loan">
            <a
              href="https://fs.bella.fi/#/flex-savings"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00b2f9", margin: "auto" }}
            >
              {t("info:flex_savings")}
            </a>
          </button>
          <button className="deposit" style={{ position: "relative" }}>
            <a
              href="https://liquidity.bella.fi/"
              target="_blank"
              style={{ color: "#FFFFFF", margin: "auto" }}
              rel="noopener noreferrer"
            >
              {t("info:lp_farm")}
            </a>
            <div
              className="new"
              style={{
                position: "absolute",
                right: -23,
                top: -11,
                color: "#00b2f9",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              New!
            </div>
          </button>
        </div>
        <div className="intro flex h-center v-center">
          <img src="/images/intro.png?v=1" />
        </div>
        <div className="what">
          <div>
            <h1>{t("what_is_bella")}</h1>
            <p className="small"></p>
            <p>{t("current_defi_products_are_blocking")}</p>
          </div>
          <img src="/images/what.png" />
          {/* <i className="icon"></i> */}
        </div>
        <div className="features" style={{ position: "relative" }}>
          <div id="features" style={{ position: "absolute", top: -22 }}></div>
          <h1>{t("features")}</h1>
          <div className="list">
            {[
              {
                name: t("zero_gas_fee"),
                descr: t("zero_gas_fee_we_believe_everyone"),
              },
              // {
              //   name: t("boosted_rewards"),
              //   descr: t("br_info"),
              // },
              {
                name: t("lower_volatility"),
                descr: t("lv_info"),
              },
              {
                name: t("lower_threshold"),
                descr: t("lt_info"),
              },
            ]
              .map((v, i) => ({
                ...v,
                icon: `/images/features/${i + 1}.png`,
              }))
              .map((v, i) => (
                <div
                  style={{
                    padding: "24px 0",
                    background: "#fff",
                    borderRadius: ".29rem",
                  }}
                  key={i}
                >
                  <FeatureItem {...v} />
                </div>
              ))}
          </div>
          <div className="features psuite" id="product">
            <h1>{t("product_suite")}</h1>
            <div>
              <i className="icon"></i>
              <div className="plist">
                {[
                  [t("bella_1_click"), t("smart_protal_for_pupular_defi")],
                  [t("bella_flex_savings"), t("smart_robo_advisor_to_pick")],
                  [infoT("tuner"), t("tuner_detail")],
                ].map((v, i) => (
                  <div key={i}>
                    <PSuiteItem v={v} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            position: relative;
          }

          .indicator {
            position: absolute;
            top: 0;
            height: 1px;
            background: transparent;
            pointer-events: none;
            width: 1px;
            left: 0;
          }

          .url-style: {
            font-size: 1.29rem;
            position: relative;
          }

          .features {
            justify-content: center;
          }

          .features .list {
            display: flex;
            margin-top: calc(1.64rem + 3.64rem);
            justify-content: center;
          }

          .features .list > div + div {
            margin-left: 2.14rem;
          }

          .features h1 {
            font-size: 2.86rem;
            font-family: Montserrat-SemiBold, Montserrat;
            font-weight: 600;
            color: rgba(22, 33, 76, 1);
            line-height: 3.5rem;
            position: relative;
            margin-top: 4.29rem;
          }

          .features em {
            font-size: 1.57rem;
            font-family: DINPro-Regular, DINPro;
            font-weight: 400;
            color: rgba(108, 111, 134, 1);
            line-height: 2rem;
            font-style: normal;
            margin-top: 1.86rem;
            text-align: center;
            display: block;
          }

          .psuite {
            background-color: #fff;
            padding: 5.71rem 7.86rem;
            margin-top: 5rem;
            width: 100vw;
          }

          .psuite .plist {
            width: 29.29rem;
          }

          .psuite .plist > div + div {
            margin-top: 30px;
          }

          .psuite > div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 4.29rem;
          }

          .psuite > div i {
            background-image: url(/images/psuite.png?v=1);
            width: 49rem;
            height: 32.29rem;
            margin-right: 3.57rem;
          }

          .psuite h1 {
            margin-top: 0;
          }

          .features h1::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -1.43rem;
            transform: translate(-50%, 0);
            width: 2.86rem;
            height: 0.21rem;
            background: rgba(1, 183, 128, 1);
            border-radius: 7.14rem 7.14rem 0rem 0rem;
          }

          h1,
          h2 {
            text-align: center;
          }

          h1 {
            font-size: 4rem;
            font-family: Montserrat-SemiBold, Montserrat;
            font-weight: 600;
            color: rgba(22, 33, 76, 1);
            line-height: 4.86rem;
            margin-top: 20px;
          }

          h2 {
            font-size: 1.43rem;
            font-family: DINNextLTPro-Regular, DINNextLTPro;
            font-weight: 400;
            color: rgba(22, 33, 76, 1);
            line-height: 1.71rem;
            margin-top: 2.14rem;
          }

          .actions {
            margin-top: 4.29rem;
          }

          .actions button {
            color: #fff;
            font-size: 1.29rem;
            font-family: DINNextLTPro-Bold, DINNextLTPro;
            font-weight: 600;
            border-radius: 2.29rem;
            width: 20rem;
            height: 4.57rem;
          }

          .actions button a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .actions button + button {
            margin-left: 5rem;
          }

          .deposit {
            background-color: var(--primary-green);
            box-shadow: 0rem 0.36rem 0.71rem 0rem rgba(0, 51, 40, 0.15);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .deposit span + span {
            display: flex;
            align-items: center;
            font-size: 1rem;
            font-family: DINPro-Regular, DINPro;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 1.29rem;
            margin-top: 0.21rem;
          }

          .timer {
            width: 0.86rem;
            height: 0.86rem;
            margin-right: 0.29rem;
            background-image: url(/images/timer.png);
          }

          .loan {
            background-color: var(--primary-blue);
            box-shadow: 0rem 0.36rem 0.71rem 0rem rgba(0, 94, 132, 0.21);
            background: rgba(255, 255, 255, 1);
            box-shadow: 0rem 0.43rem 1.14rem 0rem rgba(0, 58, 80, 0.12);
            border-radius: 2.29rem;
            border: 0.14rem solid rgba(0, 178, 249, 1);
            font-size: 1.29rem;
            font-family: DINNextLTPro-Regular;
            font-weight: 600;
            color: rgba(0, 178, 249, 1) !important;
            line-height: 1.71rem;
          }

          .intro {
            margin-top: 5.43rem;
          }

          .intro img {
            width: 100%;
            max-width: 63.36rem;
            position: relative;
            // left: 40px;
            transform: translate(3%, 0);
          }

          .what {
            width: 100vw;
            margin-top: 4.29rem;
            // height:32.36rem;
            background: #fff;
            padding: 5.71rem 8.5rem;
            font-size: 1.43rem;
            font-family: DINPro-Regular, DINPro;
            font-weight: 400;
            color: rgba(108, 111, 134, 1);
            line-height: 1.86rem;
            display: flex;
            align-items: center;
          }

          .what > div:first-child {
            max-width: 49.64rem;
          }

          .what img {
            width: 26.15rem;
            height: 18rem;
            // max-height: 32.36rem;
            background-image: url(/images/what.png);
            margin-left: 5.64rem;
          }

          .what h1 {
            margin: 0;
            padding: 0;
            text-align: left;
            font-size: 2.86rem;
            font-family: Montserrat-SemiBold, Montserrat;
            font-weight: 600;
            color: rgba(22, 33, 76, 1);
            line-height: 3.5rem;
          }

          .what p.small {
            margin-top: 1rem;
            font-size: 1.43rem;
            font-family: DINPro-Regular, DINPro;
            font-weight: 400;
            color: rgba(108, 111, 134, 1);
            line-height: 1.86rem;
            position: relative;
          }

          .what > div p + p {
            margin-top: calc(1.79rem + 1.43rem);
            font-family: DINNextLTPro-Light, DINNextLTPro;
            font-weight: 300;
            color: rgba(108, 111, 134, 1);
            font-size: 1.43rem;
          }

          .what p.small::after {
            content: "";
            position: absolute;
            width: 2.86rem;
            height: 0.21rem;
            background: rgba(1, 183, 128, 1);
            border-radius: 7.14rem 7.14rem 0rem 0rem;
            bottom: -1.43rem;
            left: 0;
          }

          @media screen and (min-width: 1024px) {
            h1 {
              margin-top: 100px;
            }
          }

          @media (max-width: 1100px) {
            h1 {
              // margin-top: 6.28rem;
              font-size: 2.57rem;
              line-height: 3.57rem;
            }

            h2 {
              font-size: 0.86rem;
              margin-top: 0.86rem;
            }

            .actions {
              margin-top: 2.14rem;
              flex-direction: column;
            }

            .actions button {
              font-size: 1.03rem;
              width: 20.36rem;
              height: 3.64rem;
            }

            .actions button + button {
              margin-left: 0;
              margin-top: 1.43rem;
            }

            .intro {
              margin-top: 2.64rem;
            }

            .features .list,
            .what {
              flex-direction: column;
              padding: 2.86rem 1.14rem;
            }

            .features .list {
              align-items: center;
              margin-top: -0.57rem;
            }

            .features .list > div,
            .features .list > div > div {
              width: 100%;
            }

            .features .list > div + div {
              margin-left: 0;
              margin-top: 1.43rem;
            }

            .features h1,
            .what h1 {
              font-size: 1.57rem;
              margin-top: 30px !important;
              line-height: 1.93rem;
            }

            .what h1 {
              margin-top: -10px !important;
            }

            .what p.small {
              font-size: 1rem;
              margin-top: 0.71rem;
            }

            .features h1::after,
            .what p.small::after {
              bottom: -0.71rem;
            }

            .what > div p + p {
              margin-top: calc(1.79rem + 0.71rem);
              font-family: DINNextLTPro-Light, DINNextLTPro;
              font-weight: 300;
              color: rgba(108, 111, 134, 1);
              font-size: 0.9rem;
            }

            .what img {
              width: 18.26rem;
              height: 12.57rem;
              margin-left: 0;
              margin-top: 2.21rem;
            }

            .psuite {
              margin-top: -8px;
              padding: 15px 1.14rem 2.86rem 1.14rem;
            }

            .psuite > div {
              flex-direction: column;
            }

            .psuite > div i {
              width: 24.5rem;
              height: 16.15rem;
              margin-top: -42px;
              margin-right: 0;
            }

            .psuite .plist {
              width: 100%;
              margin-top: 2.15rem;
            }

            .psuite .plist > div + div {
              margin-top: 2.36rem;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
