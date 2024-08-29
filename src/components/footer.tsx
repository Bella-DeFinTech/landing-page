import Image from "next/image";
import Link from "next/link";
import { Subscribe } from "./subscribe";

const links = [
  [
    ["Resources"],
    ["Ai Bot Docs", ""],
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
    ["Developers"],
    ["Tuner", "https://github.com/Bella-DeFinTech/uniswap-v3-simulator"],
  ],
];

const medias = [
  // ["Linkedin", ""],
  ["Medium", "https://medium.com/@Bellaofficial"],
  ["Telegram", "https://t.me/bellaprotocol"],
  ["Twitter", "https://twitter.com/BellaProtocol"],
  ["Discord", "https://discord.gg/jcuFJZWFMh"],
  ["Github", "https://github.com/Bella-DeFinTech/uniswap-v3-simulator"],
];

export const Footer = () => (
  <footer className="bg-[#191A23] rounded-t-xl 1100:rounded-3xl p-8 1280:p-[60px] my-8 mx-[-20px] 840:mx-[-32px] 1100:mx-0">
    <div className="1100:pr-[95px] border-b border-white">
      <div className="flex flex-col 1100:flex-row 1100:items-center">
        <div className="flex items-center text-white font-medium text-2xl 1100:text-[40px]">
          <Image
            className="mr-4 w-[30px] h-[30px] 1100:w-[42px] 1100:h-[42px]"
            src="/assets/logo.png"
            width={42}
            height={42}
            alt="logo"
          />
          Bella
        </div>
        <div className="font-bold 1100:text-xl mt-6 1100:mt-0 1100:ml-6">
          AI Agent for Crypto Trading and Yield Farming
        </div>
      </div>
      <div className="mt-[66px] flex-col 1100:flex-row flex justify-between">
        <Subscribe />
        {links.map((list, i) => (
          <div
            className="flex flex-col gap-y-6 mt-4 text-sm 1100:text-base 1100:mt-0"
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
                  className="underline font-bold text-lg 1100:text-xl mt-6 1100:mt-0"
                >
                  {link[0]}
                </div>
              )
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-5 1100:gap-x-[30px] mt-[66px] mb-[50px]">
        {medias.map((media, i) => (
          <Link target="__blank" key={i} href={media[1]}>
            <Image
              src={`/assets/medias/${i}.svg`}
              width={30}
              height={30}
              className="1100:w-[30px] 1100:h-[30px] w-[24px] h-[24px]"
              alt={media[0]}
            />
          </Link>
        ))}
      </div>
    </div>
    <div className="text-sm 1100:text-lg mt-[50px] flex gap-x-10">
      <div>© 2024 Bella. All Rights Reserved.</div>
      {/* <div>
        <Link href="">Privacy Policy</Link>
      </div> */}
    </div>
  </footer>
);
