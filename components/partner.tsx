import { useTranslation } from "../i18n";
import cx from "classnames";

export default () => {
  const { t } = useTranslation(["routes"]);

  return (
    <div className="root">
      <div id="partners" style={{ position: "absolute", top: -36 }}></div>
      <h1>{t("ecosystem")}</h1>
      <div className="list">
        {[
          // Uniswap
          {
            logo: "uniswap.png",
            link: "https://uniswap.org/",
            size: "10rem auto",
          },
          // Curve
          {
            logo: "curve.svg",
            link: "https://curve.fi/",
            size: "10rem auto",
          },
          // zkSync
          {
            logo: "zksync.png",
            link: "https://zksync.io/",
            size: "10rem auto",
          },

          // iZumi
          {
            logo: "izumi.svg",
            link: "https://izumi.finance/",
            size: "10rem auto",
            hasBorder: true,
          },
          {
            logo: "Tidal_Finance.jpg",
            link: "https://tidal.finance/",
            size: "12rem auto",
            hasBorder: true,
          },
          {
            logo: "binance_new.webp",
            link: "https://www.binance.com/en",
            size: "10rem auto",
            hasBorder: true,
          },
        ].map((v, i) => (
          <a href={v.link} target="_blank" rel="noopen" key={i}>
            <div
              className={cx("icon", `icon-${i + 1}`)}
              style={{
                backgroundImage: `url(/images/partners/${v.logo})`,
                ...(v.size
                  ? {
                      backgroundSize: v.size,
                    }
                  : {}),
                ...(v.hasBorder
                  ? {
                      border: "2px solid #eee",
                    }
                  : {}),
              }}
            />
          </a>
        ))}
      </div>
      <style jsx>
        {`
          .root {
            text-align: center;
            padding: 3.29rem 0rem;
            width: 100%;
            background: rgba(247, 248, 250, 1);
            position: relative;
          }

          h1 {
            font-size: 2.86rem;
            font-family: Montserrat-SemiBold, Montserrat;
            font-weight: 600;
            color: rgba(22, 33, 76, 1);
            line-height: 3.5rem;
            position: relative;
          }

          h1::after {
            content: "";
            position: absolute;
            bottom: -1.43rem;
            background-color: var(--primary-green);
            width: 2.86rem;
            height: 0.29rem;
            left: 50%;
            transform: translate(-50%, 0);
          }

          .white-paper {
            display: block;
            text-align: center;
            font-size: 1.43rem;
            font-weight: 500;
            color: rgba(0, 178, 249, 1);
            line-height: 1.71rem;
            margin-top: 2.86rem;
            text-decoration: underline;
          }

          .list div {
            width: 15.21rem;
            height: 10rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 12px;
            // border:2px solid #f0f0f0;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin: calc(1.43rem / 2);
          }

          .icon-1,
          .icon-3,
          .icon-2 {
            border: 2px solid #f0f0f0;
          }

          .icon-2 {
            background-size: 162px auto !important;
            background-repeat: no-repeat !important;
          }

          .list {
            display: flex;
            flex-wrap: wrap;
            width: calc((15.21rem + 1.43rem) * 5);
            margin: 0 auto;
            margin-top: 4.29rem;
          }

          @media (max-width: 1190px) {
            .list {
              width: calc((15.21rem + 1.43rem) * 4);
            }
          }

          @media (max-width: 940px) {
            .list {
              width: calc((15.21rem + 1.43rem) * 3);
            }
          }

          @media (max-width: 1100px) {
            h1 {
              font-size: 1.57rem;
              margin-top: -18px !important;
              line-height: 1.93rem;
            }

            h1::after {
              bottom: -0.71rem;
            }

            .list {
              margin-top: 23px;
            }

            .root {
              padding-bottom: calc(2.14rem - 0.93rem / 2);
            }
          }

          @media (max-width: 710px) {
            .list {
              width: calc((15.21rem + 1.43rem) * 2);
            }
          }

          @media (max-width: 500px) {
            .list div {
              width: 11.79rem;
              height: 7.71rem;
              margin: calc(0.93rem / 2);
            }

            .icon-3 {
              background-size: 106px auto !important;
            }

            .icon-2 {
              background-size: 132px auto !important;
            }

            .list {
              width: calc((11.79rem + 0.93rem) * 2);
            }
          }
        `}
      </style>
    </div>
  );
};
