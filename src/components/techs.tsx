import { useTranslation } from "next-i18next";
import Link from "next/link";

export default () => {
  const { t } = useTranslation(["landing_page", "footer"]);
  return (
    <div className="root">
      <h1>{t("landing_page:tech")}</h1>
      <Link href="#">
        <a className="white-paper">{t("footer:whitepaper")}</a>
      </Link>
      <div className="list">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style jsx>
        {`
          .root {
            text-align: center;
            padding: 3.29rem 7.86rem;
            width: 100%;
            height: 45.07rem;
            background: linear-gradient(
              224deg,
              rgba(226, 242, 253, 1) 0%,
              rgba(238, 247, 253, 1) 100%
            );
          }

          h1 {
            font-size: 2.86rem;
            color: rgba(22, 33, 76, 1);
            line-height: 3.43rem;
            position: relative;
            font-weight: 500;
            text-align: center;
            margin: 0 auto;
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
            width: 20rem;
            height: 22.1rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0rem 0.14rem 1rem 0rem rgba(0, 107, 147, 0.06);
            border-radius: 1.14rem;
          }

          .list {
            display: flex;
            justify-content: space-between;
            max-width: calc(60rem + 10.93rem * 2);
            margin: 0 auto;
            margin-top: 4.29rem;
          }
        `}
      </style>
    </div>
  );
};
