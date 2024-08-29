import { FC } from "react";
import { Title } from "./title";
import { Translations } from "@/locales/en-US";

const List: FC<{
  title: string;
  data: { title: string; description: string }[];
}> = ({ data, title }) => (
  <div>
    <div className="text-2xl text-[#02E8F4] 1100:text-3xl">{title}</div>
    <div className="mt-[26px] flex flex-col gap-y-20 1100:gap-y-0 1100:flex-row 1100:justify-between">
      {data.map((item, i) => (
        <div key={i}>
          <div className="text-2xl 1100:text-3xl font-medium">{item.title}</div>
          <div className="mt-3 text-sm 1100:text-lg 1100:w-[300px]">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const SmartTrading = ({
  translations,
}: {
  translations: Translations;
}) => {
  return (
    <div className="py-[58px] mt-[80px] 1100:mt-[104px] 1100:py-[85px] px-10 1100:px-[60px] bg-[#141418] rounded-3xl flex flex-col gap-y-8">
      <List title="AI Agent" data={translations.ai_agents} />
      <div className="h-[70px] text-3xl font-medium">+</div>
      <List title="DeFI Yield" data={translations.defi_yields} />
      <div className="h-[70px] text-3xl font-medium">=</div>
      <Title>{translations.smart_trading}</Title>
    </div>
  );
};
