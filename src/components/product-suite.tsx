import { CSSProperties, FC } from "react";
import { Gap } from "./gap";
import { Title } from "./title";
import { Translations } from "@/locales/en-US";

const suits = [
  {
    name: "Bella Signa Bot",
    data: [
      {
        name: "Bella Signa Bot",
        description:
          "Elevate your trading with AI-driven short and long signals, delivered directly through Telegram",
      },
      {
        name: "Bella Research Bot",
        description:
          "Unlock real-time, in-depth market insights and metrics with our Telegram-based crypto LLM bot",
      },
    ],
  },
  {
    name: "Asset Management",
    data: [
      {
        name: "Flex Savings",
        description:
          "A gas-efficient, smart liquidity pool that auto-compounds your returns",
      },
    ],
  },
  {
    name: "Optimize Solutions",
    data: [
      {
        name: "Tuner",
        description:
          "A gas-efficient, smart liquidity pool that auto-compounds your returns",
      },
    ],
  },
];

const Suit: FC<{
  name: string;
  data: { name: string; description: string }[];
}> = ({ name, data }) => {
  return (
    <div className="w-[387px]">
      <div className="font-medium text-[26px] w-[317px] border-b border-white pb-4 mb-8">
        {name}
      </div>
      <div className="flex flex-col gap-y-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#141418] rounded-3xl px-9 py-10 min-h-[330px] drop-shadow-x border-[#191A23] border"
          >
            <div className="font-medium text-[26px] flex items-center gap-x-4 border-b border-white pb-4 mb-7">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4988 4.91972L32.1442 0.310303L27.5791 16.0001L32.1442 31.6455L16.4988 27.0804L0.809021 31.6455L5.41844 16.0001L0.809021 0.310303L16.4988 4.91972Z"
                  fill="white"
                />
              </svg>
              {item.name}
            </div>
            <div className="text-xl">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProductSuit = ({
  translations,
}: {
  translations: Translations;
}) => {
  return (
    <div className="w-[1240px] mx-auto">
      <div className="py-10 flex">
        <Title>PRODUCT SUIT</Title>
        <Gap x={40} />
        <div className="text-lg w-[580px]">
          {translations.product_suit.title}
        </div>
      </div>
      <Gap y={104} />
      <div className="flex justify-between">
        {translations.product_suit.suits.map((suit, i) => (
          <Suit key={i} name={suit.name} data={suit.data} />
        ))}
      </div>
    </div>
  );
};
