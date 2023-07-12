import { useTranslation, i18n } from "../i18n";

export const launchApp = {
  name: "Launch App",
  href: "http://lpfarm.bella.fi/",
};

export const medias = [
  { href: "https://medium.com/@Bellaofficial" },
  { href: "https://t.me/bellaprotocol" },
  { href: "https://twitter.com/BellaProtocol" },
  { href: "https://discord.gg/jcuFJZWFMh" },
  { href: "https://github.com/Bella-DeFinTech/uniswap-v3-simulator" },
];

type List = [string, { name: string; href: string }[]][];
export const useData = () => {
  const { t } = useTranslation(["routes", "info"]);
  return {
    menus: [
      [
        t("routes:document"),
        [
          {
            name: t("info:flex_savings"),
            href: "https://bellafi.gitbook.io/bella-protocol/",
          },
          {
            name: t("info:lp_farm"),
            href:
              "https://bellafi.gitbook.io/bella-protocol/lp-farm/about-bella-lp-farm",
          },
          {
            name: t("info:tuner"),
            href: "https://docs.bella.fi/getting-started/readme",
          },
        ],
      ],
      [
        t("info:developers"),
        [
          { name: "Github Repo", href: "https://github.com/Bella-DeFinTech" },
          {
            name: t("info:tuner"),
            href: "https://github.com/Bella-DeFinTech/uniswap-v3-simulator",
          },
        ],
      ],
      [
        t("info:products"),
        [
          {
            name: t("info:flex_savings"),
            href: "https://github.com/Bella-DeFinTech",
          },
          {
            name: t("info:lp_farm"),
            href: "http://lpfarm.bella.fi/",
          },
          {
            name: t("info:tuner"),
            href: "https://github.com/Bella-DeFinTech/uniswap-v3-simulator",
          },
        ],
      ],
    ],
    infos: [
      [
        t("info:resources"),
        [
          {
            name: [t("info:flex_savings"), t("routes:document")].join(
              i18n.language === "zh_cn" ? "" : " "
            ),
            href: "https://bellafi.gitbook.io/bella-protocol/",
          },
          {
            name: t("info:tuner_started"),
            href: "https://docs.bella.fi/getting-started/readme",
          },
          {
            name: t("info:brand_assets"),
            href:
              "https://drive.google.com/drive/folders/1aYDMQkdK8OgKItiG9V2-u0SByZDHdGuy?usp=sharing",
          },
        ],
      ],
      [
        t("info:foundation"),
        [
          { name: t("info:contact"), href: "mailto:contact@bella.fi" },
          {
            name: t("info:venture_fund"),
            href:
              "https://bellaofficial.medium.com/bella-foundation-launches-20-mil-usd-venture-fund-as-an-effort-to-scale-bella-ecosystem-9b5b3a0da4e3",
          },
        ],
      ],
      [
        t("info:developers"),
        [
          {
            name: t("info:tuner"),
            href: "https://github.com/Bella-DeFinTech/uniswap-v3-simulator",
          },
        ],
      ],
    ],
  } as { menus: List; infos: List };
};
