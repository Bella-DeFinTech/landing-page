import { useTranslation } from "../i18n";
import Investors from "./investors";
import AsSeen from "./as-seen";
import Partners from "./partner";
import {medias, useData} from './menus';
import { useCallback, useRef, useState } from "react";
import { subscribe } from "./subscribe";

const isEmail = (email: string) => {
  const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return pattern.test(email);
};

const Audited = () => {
  const { t } = useTranslation(["footer"]);
  return (
    <div className="root">
      <h1>{t("audited_by")}</h1>

      <div>
        {/* <div className="ds icon"></div> */}
        <a
          href="https://github.com/peckshield/publications/blob/master/audit_reports/bella_audit_report_2020_48_en_1_0.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="psd icon"></div>
        </a>
      </div>
      <style jsx>
        {`
          .root {
            width: 100vw;
            padding: 5.81rem 7.86rem;
            background-color: #fff;
            width: 100vw;
          }

          .root > div {
            display: flex;
            justify-content: center;
            margin-top: 5.29rem;
          }

          .root > div > div + div {
            margin-left: 3.57rem;
          }

          .ds,
          .psd {
            width: 21.43rem;
            height: 6.29rem;
          }

          .ds {
            background-image: url(/images/ds.png);
          }

          .psd {
            background-image: url(/images/psd.png);
          }

          h1 {
            font-size: 2.86rem;
            font-family: Montserrat-SemiBold, Montserrat;
            font-weight: 600;
            color: rgba(22, 33, 76, 1);
            line-height: 3.5rem;
            text-align: center;
            position: relative;
          }

          h1::after {
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

          @media (max-width: 1100px) {
            .root {
              padding-top: 2.14rem;
              padding-bottom: 2.86rem;
            }
            h1 {
              font-size: 1.58rem;
              line-height: 1.93rem;
            }

            h1::after {
              bottom: -0.71rem;
            }

            .ds,
            .psd {
              width: 21.43rem;
              height: 6.29rem;
            }

            .root > div {
              margin-top: 30px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default () => {
  const {t} = useTranslation("info");
  const inputRef = useRef<HTMLInputElement>(null);
  const subscribed_timeout = useRef<number>(-1);
  const [{subscribing, subscribed}, setSubscribing] = useState({subscribed: false, subscribing: false});
  const {infos} = useData();
  const handleSubscribe = useCallback(async () => {
    setSubscribing(prev => ({...prev, subscribing: true}))
    const email = inputRef?.current?.value ?? '';
    if (!isEmail(email)) {
      console.error('email is invalid')
      setSubscribing(prev => ({...prev, subscribing: false}))
      return;
    }
    try {
      const ret = await subscribe(email);
    } catch(e) {
      console.error(e);
    } finally {
      setSubscribing({subscribed: true, subscribing: false})
      subscribed_timeout.current = window.setTimeout(() => {
        setSubscribing(prev => ({...prev, subscribed: false}));
      }, 2500);
    }
  }, [inputRef.current])
  return (
    <div className="root">
      <Investors />
      <Audited />
      <AsSeen />
      <Partners />
      <div className="footer-wrapper">
        <footer className="subscribe">
          <div className="medias">
            {medias.map((item, i) => i === medias.length - 1 ? (
              <a key={i} href={item.href} target="__blank">
                <div>
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5467" width="18" height="18"><path d="M855.552 216.864c35.616-66.144-5.088-152.672-5.088-152.672-91.584 0-157.76 61.056-157.76 61.056-35.616-20.352-152.672-20.352-152.672-20.352s-117.056 0-152.672 20.352c0 0-66.144-61.056-157.76-61.056 0 0-40.704 86.496-5.088 152.672 0 0-81.408 76.32-50.88 239.168 28.704 153.024 162.848 193.376 249.344 193.376 0 0-35.616 30.528-30.528 81.408 0 0-50.88 30.528-101.76 10.176s-76.32-71.232-76.32-71.232-50.88-66.144-101.76-40.704c0 0-15.264 15.264 40.704 40.704 0 0 40.704 61.056 55.968 96.672s96.672 66.144 178.112 45.792v117.024s0 10.176-20.352 15.264-20.352 15.264-10.176 15.264h366.4c10.176 0 10.176-10.176-10.176-15.264s-20.352-15.264-20.352-15.264V812.224s0.448-61.024 0-81.408c-1.12-51.136-35.616-81.408-35.616-81.408 86.496 0 220.64-40.352 249.344-193.376 30.528-162.848-50.88-239.168-50.88-239.168z" fill="rgba(255,255,255, .9)" p-id="5468"></path></svg>
                </div>
              </a>
            ) : (
              <a key={i} style={{backgroundImage: `url(/images/contacts/${i + 1}.png)`}} href={item.href} target="__blank">{''}</a>
            ))}
          </div>
          <div className="infos">
            {infos.map((v, i) => (
              <div key={i}>
                <div>{v[0]}</div>
                <div>
                  {v[1].map(item => (
                    <a key={item.name} target="__blank" href={item.href}>{item.name}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="sc">
            <p>{t('subscribe_to')}</p>
            <div><input disabled={subscribing || subscribed}  ref={inputRef} placeholder={t('your_email')} /><button disabled={subscribing || subscribed} onClick={handleSubscribe}>{subscribed ? `${t('subscribed')}!` : subscribing ? `${t('subscribing')}..` : t('sub_now')}</button></div>
          </div>
        </footer>
        <div className="copyright">@2021 copyright Bella</div>
      </div>
      <style jsx>
        {`
          .root {
          }

          .cts {
            display: flex;
            margin-top: 1.29rem;
          }

          .cts > div {
            width: 2.14rem;
            height: 2.14rem;
          }

          .cts > div + div {
            margin-left: 1.43rem;
          }

          .co {
            font-size: 1rem;
            font-family: DINNextLTPro-Light, DINNextLTPro;
            font-weight: 300;
            color: rgba(255, 255, 255, 1);
            line-height: 1.29rem;
            text-align: center;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            bottom: 2.86rem;
          }

          .su {
            font-size: 1.29rem;
            font-family: DINNextLTPro-Regular, DINNextLTPro;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 1.64rem;
          }
          .su_addr {
            font-size: 2.86rem;
            font-family: DINNextLTPro-Regular;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 3.43rem;
            margin-top: 1rem;
          }

          .footer-wrapper {
            background: linear-gradient(
              315deg,
              rgba(0, 178, 249, 1) 0%,
              rgba(0, 205, 170, 1) 100%
            );
            padding: 32px 20px;
            position: relative;
          }

          .copyright {
            margin-top: 100px;
            color: #fff;
          }

          footer {
            position: relative;
            max-width: 1154px;
            margin: 0 auto;
          }

          .infos, .infos a {
            color: #fff;
          }

          .infos > div > div:first-child {
            display: none;
          }

          .infos a {
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid rgba(225,225,225,.65);
          }

          .medias {
            display: flex;
            position: static;
            margin-bottom: 20px;
          }

          .medias a {
            width: 30px;
            height: 30px;
            background-size: cover;
            background-position: center;
            flex: 0 0 auto;
          }

          .medias div {
            border: 1px solid rgba(255,255,255, .9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            flex: 0 0 auto;
          }

          .medias a + a {
            margin-left: 12px;
          }

          .sc {
            margin-top: 20px;
          }

          .sc p {
            color: #fff;
            font-weight: bold;
          }

          .sc > div {
            margin-top: 8px;
            display: flex;
            height: 44px;
          }

          .sc input {
            flex: 1;
            padding: 12px 10px;
            appearance: none;
            height: 100%;
            border: 1px solid #fff;
            background-color: transparent;
            outline: none;
            color: #fff;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }

          .sc input::placeholder {
            color: #f1f1f1;
          }

          .sc button {
            width: 116px;
            flex: 0 0 auto;
            color: #00b2f9;
            height: 100%;
            background-color: #fff;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            transition: background-color .2s;
          }

          .sc button[disabled] {
            background-color: rgba(255,255,255, .82);
            cursor: not-allowed;
          }

          @media screen and (min-width: 1024px) {
            .footer-wrapper {
              height: 320px;
              padding: 40px 30px;
            }

            .footer-wrapper a:hover {
              text-decoration: underline;
            }

            .sc button {
              cursor: pointer;
            }

            .sc button:hover {
              background-color: #f1f1f1;
            }

            .copyright {
              position absolute;
              text-align: center;
              bottom: 30px;
              height: 20px;
              left: 0;
              right: 0;
            }

            footer, .infos {
              display: flex;
            }

            .sc, .infos {
              max-width: 500px;
            }

            footer > div {
              flex: 1;
            }

            .infos {
              justify-content: space-between;
            }

            .infos a {
              border: none;
            }

            .medias {
              position: absolute;
              right: 26%;
              top: 84px;
              margin-bottom: 0;
            }

            .sc {
              margin-top: 0;
              margin-left: 30px;
            }

            .sc p {
              font-size: 16px;
            }

            footer {
              justify-content: space-between;
            }

            .infos > div > div:first-child {
              display: block;
              font-weight: bold;
              margin-bottom: 10px;
              font-size: 18px;
            }

            .infos a {
              padding: 5px 0;
            }
        }

          @media (max-width: 1100px) {
            .su {
              text-align: center;
            }

            .su_addr {
              font-size: 1.72rem;
              text-align: center;
            }

            section {
              margin-top: 1.43rem;
              margin-left: 0 !important;
            }

            .co {
              font-size: 0.79rem;
            }
          }
        `}
      </style>
    </div>
  );
};
