import { FC } from "react";
import { Gap } from "./gap";
import { Title } from "./title";
import { Translations } from "@/locales/en-US";

const Suit: FC<{
  name: string;
  data: { name: string; description: string }[];
}> = ({ name, data }) => {
  return (
    <div className="flex-1">
      <div className="font-medium text-2xl 1100:text-[26px] w-[317px] border-b border-white pb-4 mb-8">
        {name}
      </div>
      <div className="flex flex-col gap-y-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#141418] rounded-xl 840:rounded-3xl p-8 1100:p-6 1100:min-h-[300px] 1380:px-9 1380:py-10 1380:min-h-[330px] drop-shadow-x border-[#191A23] border"
          >
            <div className="font-medium text-xl 1100:text-[26px] flex items-center gap-x-4 border-b border-white pb-4 mb-7">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                className="840:w-8 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4988 4.91972L32.1442 0.310303L27.5791 16.0001L32.1442 31.6455L16.4988 27.0804L0.809021 31.6455L5.41844 16.0001L0.809021 0.310303L16.4988 4.91972Z"
                  fill="white"
                />
              </svg>
              {item.name}
            </div>
            <div className="text-sm 1100:text-xl">{item.description}</div>
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
    <div>
      <div className="py-10 flex flex-col 1100:flex-row">
        <Title>{translations.product_suit.name}</Title>
        <div className="text-lg 840:w-[580px] mt-10 1100:mt-0 1100:ml-10">
          {translations.product_suit.title}
        </div>
      </div>
      <div className="mt-[80px] 1100:mt-[104px] flex flex-col 1100:flex-row 1100:justify-between gap-y-8 1100:gap-y-0 1100:gap-x-8 1280:gap-x-10">
        {translations.product_suit.suits.map((suit, i) => (
          <Suit key={i} name={suit.name} data={suit.data} />
        ))}
      </div>
    </div>
  );
};
