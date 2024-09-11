import Image from "next/image";
import { Gap } from "./gap";
import { CSSProperties, FC } from "react";
import { Translations } from "@/locales/en-US";
import clsx from "clsx";

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

type BrandType = (typeof list)[number] & { styles?: CSSProperties };

const Item: FC<{
  isFirst: boolean;
  isLast: boolean;
  data: string;
}> = ({ data, isLast, isFirst }) => {
  const [title, subtitle, hovering] = data.split("|");
  return (
    <>
      <div
        className={clsx("relative py-[20px] 1100:flex-1", {
          "1100:border-x 1100:border-y-0 border-y border-white":
            !isFirst && !isLast,
        })}
      >
        <div className="w-fit 1100:mx-auto">
          <div className="text-2xl 1100:text-4xl font-medium">{title}</div>
          <div
            className={clsx(
              "flex group relative items-center text-[var(--primary)] 1100:text-2xl mt-3",
              {
                "cursor-pointer": !isFirst,
              }
            )}
          >
            {subtitle}
            <Gap x={12} />
            {!isFirst && (
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="840:w-4 1100:w-5 w-3 group-hover:rotate-[30deg] transition-transform duration-200"
              >
                <path
                  d="M0.929504 13.701C0.212065 14.1152 -0.0337473 15.0326 0.380466 15.75C0.79468 16.4674 1.71207 16.7133 2.4295 16.299L0.929504 13.701ZM20.4489 5.38823C20.6633 4.58803 20.1884 3.76552 19.3882 3.55111L6.34824 0.0570541C5.54804 -0.157359 4.72554 0.317515 4.51112 1.11771C4.29671 1.91791 4.77159 2.74042 5.57179 2.95483L17.1629 6.06066L14.0571 17.6518C13.8427 18.452 14.3175 19.2745 15.1177 19.4889C15.9179 19.7033 16.7404 19.2284 16.9548 18.4282L20.4489 5.38823ZM2.4295 16.299L19.75 6.29904L18.25 3.70096L0.929504 13.701L2.4295 16.299Z"
                  fill="var(--primary)"
                />
              </svg>
            )}
            {!isFirst && (
              <div
                style={{ transformOrigin: "50% 0" }}
                className="text-sm z-10 1100:text-base group-hover:visible  duration-200 group-hover:scale-y-100 invisible pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto scale-y-[0.3] absolute top-full w-[calc(100vw-94px)] sm:w-[390px] left-0 1100:left-1/2 1100:-translate-x-1/2 bg-white text-black rounded p-4"
              >
                {hovering}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Info = ({ translations }: { translations: Translations }) => (
  <div className="bg-[#141418] rounded-xl 840:rounded-3xl px-8 xl:mx-[-34px]">
    <div className="flex flex-col 1100:flex-row 1100:items-center py-[80px]">
      {translations.metrics.map((data, i, list) => (
        <Item
          isFirst={i === 0}
          isLast={i === list.length - 1}
          key={i}
          data={data}
        />
      ))}
    </div>
  </div>
);

export const Brands = ({
  mini,
  list,
}: {
  mini?: boolean;
  list: BrandType[];
}) => (
  <div
    className={clsx(
      "h-fit w-fit lg:w-auto grid grid-rows-2 gap-y-9 840:gap-y-0 840:grid-rows-1 grid-flow-col gap-x-9"
    )}
  >
    {list.map((item, index) => (
      <a
        key={index}
        href={item.url}
        className="w-fit lg:w-auto flex items-center"
        target="__blank"
      >
        <Image
          className={clsx("sm:h-10 object-contain w-fit object-center", {
            "h-7": mini,
          })}
          src={item.src}
          width={item.width}
          height={item.height}
          alt={item.alt}
          style={item.styles}
        />
      </a>
    ))}
  </div>
);

export const Ecos = ({ translations }: { translations: Translations }) => {
  return (
    <>
      <div>
        <Brands list={list} />
      </div>
      <Gap y={80} />
      <Info translations={translations} />
    </>
  );
};
