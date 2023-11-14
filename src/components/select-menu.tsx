import { launchApp, useData } from "./menus";
import { useRouter } from "next/router";

export default () => {
  const { menus } = useData();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  return (
    <div className="root">
      <ul className="menu">
        {menus.map((v, i) => (
          <li key={i}>
            <div>{v[0]}</div>
            <ul>
              {v[1].map((item, i) => (
                <li key={i}>
                  <a href={item.href} key={item.name} target="__blank">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <i
        className="icon"
        onClick={() => {
          const i = locale === "en" ? 1 : locale === "tr" ? 2 : 0;
          router.push({ pathname, query }, asPath, {
            locale: ["en", "tr", "zh_cn"][i],
          });
        }}
      >
        {locale === "en" ? "EN" : locale === "zh_cn" ? "ZH" : "TR"}
      </i>

      <a href={launchApp.href} target="__blank" rel="noopener noreferrer">
        <div className="app flex v-center h-center">{launchApp.name}</div>
      </a>

      <style jsx>
        {`
          .root {
            // height: 100vh;
            // padding-top: 03px;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          a {
            display: block;
            color: #fff;
            font-size: 1.29rem;
          }

          a + a {
            margin-top: 2.29rem;
          }

          i.icon {
            width: 2.86rem;
            height: 2.86rem;
            border-radius: 50%;
            border: 1px solid rgba(0, 178, 249, 1);
            color: rgba(0, 178, 249, 1);
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 178, 249, 0.08);
            -webkit-font-smoothing: none;
            font-style: normal;
            margin: 2.29rem 0.86rem;
          }

          .app {
            width: 20.36rem;
            height: 3.64rem;
            background: rgba(0, 178, 249, 1);
            box-shadow: 0rem 0.36rem 0.71rem 0rem rgba(0, 94, 132, 0.21);
            border-radius: 2.29rem;
            color: #fff;
            font-weight: 500;
            font-size: 1.29;
            font-family: DINNextLTPro-Bold, DINNextLTPro;
            text-transform: uppercase;
          }

          .menu,
          .menu > li {
            width: 100%;
          }

          .menu > li > div {
            color: #bcbcbc;
            text-transform: uppercase;
            font-size: 24px;
            display: flex;
          }

          .menu > li + li {
            margin-top: 20px;
          }

          .menu li a {
            text-transform: uppercase;
            font-size: 40px;
            height: 66px;
            display: flex;
            align-items: center;
          }

          .menu > li > div,
          .menu li a {
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};
