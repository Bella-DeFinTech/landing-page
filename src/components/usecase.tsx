import { Gap } from "./gap";
import { Title } from "./title";
import clsx from "clsx";
import cardStyles from "./trading.module.scss";
import { Translations } from "@/locales/en-US";
import Image from "next/image";

const cards = [
  {
    img: {
      src: "/assets/cases/1.svg",
      width: 291,
      height: 348,
    },
  },
  {
    img: {
      src: "/assets/cases/4.svg",
      width: 545,
      height: 627,
    },
  },
  {
    img: {
      src: "/assets/cases/5.svg",
      width: 561,
      height: 496,
    },
  },
  {
    img: {
      src: "/assets/cases/3.svg",
      width: 430,
      height: 314,
    },
  },
  {
    img: {
      src: "/assets/cases/2.svg",
      width: 482,
      height: 509,
    },
  },
  {
    img: {
      src: "/assets/cases/0.svg",
      width: 213,
      height: 146,
    },
  },
];

export const UseCase = ({ translations }: { translations: Translations }) => {
  return (
    <div className="mt-[80px] 1100:mt-[104px]">
      <div className="flex justify-between">
        <Title>{translations.usecase.title}</Title>
      </div>
      <Gap y={40} />
      <div className="grid grid-cols-1 1100:grid-cols-2 gap-5 1380:gap-10">
        {cards
          .map((c, i) => ({
            ...c,
            title: translations.usecase.cases[i][0],
            description: translations.usecase.cases[i][1],
          }))
          .map((c, i) => {
            return (
              // <div key={i} className="flex-1">
              <div
                className={clsx(
                  cardStyles.card,
                  "drop-shadow-x w-full h-full flex-1"
                )}
                key={i}
              >
                <div className="flex flex-col 1100:flex-row h-full gap-x-1">
                  <div>
                    <div>
                      {c.title.split("\n").map((t, i) => (
                        <div key={i} className={clsx(cardStyles.title)}>
                          {t}
                        </div>
                      ))}
                    </div>
                    <div
                      className={clsx("mt-10 text-sm 1100:text-base")}
                      dangerouslySetInnerHTML={{
                        __html: c.description.replaceAll("\n", "<br/>"),
                      }}
                    />
                  </div>
                  <Image
                    src={c.img.src}
                    width={c.img.width}
                    height={c.img.height}
                    alt=""
                    className="flex-none w-[100px] mt-8 1100:mt-0 1100:w-[160px] 1380:w-[190px] 1100:self-center"
                  />
                </div>
              </div>
              // </div>
            );
          })}
      </div>
    </div>
  );
};
