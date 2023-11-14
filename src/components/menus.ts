import { useRouter } from "next/router";
import { useLocale } from "./locale";

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
  const { locale } = useRouter();
  const { data } = useLocale();
  const t = { ...data.info, ...data.routes };

  return {
    menus: [
      [
        t.document,
        [
          {
            name: t.flex_savings,
            href: "https://bellafi.gitbook.io/bella-protocol/",
          },
          {
            name: t.lp_farm,
            href: "https://bellafi.gitbook.io/bella-protocol/lp-farm/about-bella-lp-farm",
          },
          {
            name: t.tuner,
            href: "https://docs.bella.fi/getting-started/readme",
          },
        ],
      ],
      [
        t.developers,
        [
          { name: "Github Repo", href: "https://github.com/Bella-DeFinTech" },
          {
            name: t.tuner,
            href: "https://github.com/Bella-DeFinTech/uniswap-v3-simulator",
          },
        ],
      ],
      [
        t.products,
        [
          {
            name: t.flex_savings,
            href: "https://fs.bella.fi/",
          },
          {
            name: t.lp_farm,
            href: "http://lpfarm.bella.fi/",
          },
          {
            name: t.tuner,
            href: "https://github.com/Bella-DeFinTech/uniswap-v3-simulator",
          },
        ],
      ],
    ],
    infos: [
      [
        t.resources,
        [
          {
            name: [t.flex_savings, t.document].join(
              locale === "zh_cn" ? "" : " "
            ),
            href: "https://bellafi.gitbook.io/bella-protocol/",
          },
          {
            name:
              locale === "zh_cn"
                ? "LP Farm文档"
                : locale === "en"
                ? "LP Farm Docs"
                : "LP Farm dokümanlar",
            href: "https://bellafi.gitbook.io/bella-protocol/lp-farm/about-bella-lp-farm",
          },
          {
            name: t.tuner_started,
            href: "https://docs.bella.fi/getting-started/readme",
          },
          {
            name: t.brand_assets,
            href: "https://drive.google.com/drive/folders/1aYDMQkdK8OgKItiG9V2-u0SByZDHdGuy?usp=sharing",
          },
        ],
      ],
      [
        t.foundation,
        [
          { name: t.contact, href: "mailto:contact@bella.fi" },
          {
            name: t.venture_fund,
            href: "https://bellaofficial.medium.com/bella-foundation-launches-20-mil-usd-venture-fund-as-an-effort-to-scale-bella-ecosystem-9b5b3a0da4e3",
          },
        ],
      ],
      [
        t.developers,
        [
          {
            name: t.tuner,
            href: "https://github.com/Bella-DeFinTech/uniswap-v3-simulator",
          },
        ],
      ],
    ],
  } as { menus: List; infos: List };
};
