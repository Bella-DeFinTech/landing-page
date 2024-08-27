import Image from "next/image";
import { Gap } from "./gap";
import { FC } from "react";
import { Translations } from "@/locales/en-US";

const list = [
  {
    url: "https://www.binance.com/",
    src: "/assets/partners/0.svg",
    width: 215,
    height: 43,
    alt: "binance",
  },
  {
    url: "https://www.phoenix.global/",
    src: "/assets/partners/1.svg",
    width: 236,
    height: 43,
    alt: "phoenix",
  },
  {
    url: "https://uniswap.org/",
    src: "/assets/partners/2.svg",
    width: 171,
    height: 43,
    alt: "uniswap",
  },
  {
    url: "https://curve.fi/",
    src: "/assets/partners/3.svg",
    width: 164,
    height: 43,
    alt: "curve",
  },
  {
    url: "https://izumi.finance/",
    src: "/assets/partners/4.svg",
    width: 125,
    height: 43,
    alt: "izumi",
  },
  {
    url: "https://tidal.finance/",
    src: "/assets/partners/5.svg",
    width: 136,
    height: 35,
    alt: "tidal",
  },
];

const Item: FC<{
  isLast: boolean;
  data: string;
}> = ({ data, isLast }) => {
  const [title, subtitle] = data.split("|");
  return (
    <>
      <div className="relative h-[204px] flex-1">
        <div className="w-fit mx-auto">
          <div className="text-[48px] font-medium">{title}</div>
          <div className="flex items-center text-[#02E8F4] text-[28px] mt-5">
            {subtitle}
            <Gap x={12} />
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.929504 13.701C0.212065 14.1152 -0.0337473 15.0326 0.380466 15.75C0.79468 16.4674 1.71207 16.7133 2.4295 16.299L0.929504 13.701ZM20.4489 5.38823C20.6633 4.58803 20.1884 3.76552 19.3882 3.55111L6.34824 0.0570541C5.54804 -0.157359 4.72554 0.317515 4.51112 1.11771C4.29671 1.91791 4.77159 2.74042 5.57179 2.95483L17.1629 6.06066L14.0571 17.6518C13.8427 18.452 14.3175 19.2745 15.1177 19.4889C15.9179 19.7033 16.7404 19.2284 16.9548 18.4282L20.4489 5.38823ZM2.4295 16.299L19.75 6.29904L18.25 3.70096L0.929504 13.701L2.4295 16.299Z"
                fill="#02E8F4"
              />
            </svg>
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="w-[1px] h-[186px] mt-[9px] bg-white mx-[32px]"></div>
      )}
    </>
  );
};

const Info = ({ translations }: { translations: Translations }) => (
  <div className="bg-[#141418] rounded-3xl py-[70px] px-[60px] mx-[-34px]">
    <div className="flex">
      {translations.metrics.map((data, i, list) => (
        <Item isLast={i === list.length - 1} key={i} data={data} />
      ))}
    </div>
  </div>
);

export const Ecos = ({ translations }: { translations: Translations }) => {
  return (
    <>
      <div>
        <div className="flex h-[52px] items-center gap-x-9">
          {list.map((item, index) => (
            <a key={index} href={item.url} target="_blank">
              <Image
                className="max-h-[52px]"
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            </a>
          ))}
        </div>
      </div>
      <Gap y={80} />
      <Info translations={translations} />
    </>
  );
};
