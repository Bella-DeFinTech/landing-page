import Image from "next/image";
import Link from "next/link";
import { Subscribe } from "./subscribe";

const links = [
  [
    ["Resources"],
    ["AI Bot Docs", ""],
    ["Flex Savings Docs", "https://bellafi.gitbook.io/bella-protocol/"],
    [
      "LP Farm Docs",
      "https://bellafi.gitbook.io/bella-protocol/lp-farm/about-bella-lp-farm",
    ],
    ["Tuner Getting Started", "https://docs.bella.fi/getting-started/readme"],
    [
      "Brand Assets",
      "https://drive.google.com/drive/folders/1aYDMQkdK8OgKItiG9V2-u0SByZDHdGuy?usp=sharing",
    ],
  ],
  [
    ["Foundation"],
    ["Contact Us", "mailto:contact@bella.fi"],
    [
      "Venture Fund",
      "https://bellaofficial.medium.com/bella-foundation-launches-20-mil-usd-venture-fund-as-an-effort-to-scale-bella-ecosystem-9b5b3a0da4e3",
    ],
  ],
  [
    ["Developers"],
    ["Tuner", "https://github.com/Bella-DeFinTech/uniswap-v3-simulator"],
  ],
];

const medias = [
  // ["Linkedin", ""],
  ["Twitter", "https://twitter.com/BellaProtocol", "/assets/medias/2.svg"],
  ["Telegram", "https://t.me/bellaprotocol", "/assets/medias/3.svg"],
  [
    "Github",
    "https://github.com/Bella-DeFinTech/uniswap-v3-simulator",
    "/assets/medias/5.svg",
  ],
  ["Discord", "https://discord.gg/jcuFJZWFMh", "/assets/medias/4.svg"],
  ["Medium", "https://medium.com/@Bellaofficial", "/assets/medias/0.svg"],
];

export const Footer = () => (
  <footer className="bg-[#191A23]">
    <div className="px-8 1100:px-14 max-w-[1240px] 1240:px-0 mx-auto">
      <div className="pt-14 pb-28">
        <div className="flex lg:flex-row flex-col lg:justify-between">
          <div>
            <div>
              <Image
                className="h-[30px] w-fit 1100:h-8"
                src="/assets/logo_dark.svg"
                width={1293}
                height={400}
                alt="logo"
              />
            </div>

            {/* Medias */}
            <div className="flex items-center gap-x-5 mt-8">
              {medias.map((media, i) => (
                <Link target="__blank" key={i} href={media[1]}>
                  <Image
                    src={media[2]}
                    width={30}
                    height={30}
                    className="w-6 h-6"
                    alt={media[0]}
                  />
                </Link>
              ))}
            </div>

            {/* subscribe */}
            <div className="mt-8">
              <div>Subscribe to our newsletter</div>
              <Subscribe />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-x-20">
            {links.map((list, i) => (
              <div
                className="flex flex-col gap-y-6 mt-4 text-sm 1100:mt-0"
                key={i}
              >
                {list.map((link, j) =>
                  link[1] !== undefined ? (
                    <Link target="__blank" key={j} href={link[1]}>
                      {link[0]}
                    </Link>
                  ) : (
                    <div
                      key={j}
                      className="font-bold text-lg 1100:text-xl mt-6 1100:mt-0"
                    >
                      {link[0]}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-sm opacity-80 pb-4">
        <div>© 2024 Bella. All Rights Reserved.</div>
      </div>
    </div>
  </footer>
);
