import { FC } from "react";
import { Title } from "./title";
import { Translations } from "@/locales/en-US";

const agents = [
  {
    title: "Autonomous",
    description:
      "Leverages the most advanced AI strategies to track real-time trading signals",
  },
  {
    title: "Lightweight",
    description:
      "Leverages the most advanced AI strategies to track real-time trading signals",
  },
  {
    title: "Efficient",
    description:
      "Leverages the most advanced AI strategies to track real-time trading signals",
  },
];

const yields = [
  {
    title: "Optimal",
    description: "Iterate and fine-tune strategies for maximum returns",
  },
  {
    title: "Precise",
    description:
      "Ensures Accuracy from fund routing to high-fidelity backtesting",
  },
  {
    title: "Secure",
    description:
      "Ensures Accuracy from fund routing to high-fidelity backtesting",
  },
];

const List: FC<{ title: string; data: typeof yields }> = ({ data, title }) => (
  <div>
    <div className="text-3xl">{title}</div>
    <div className="mt-[26px] flex justify-between">
      {data.map((item, i) => (
        <div key={i}>
          <div className="text-3xl font-medium">{item.title}</div>
          <div className="mt-3 text-lg w-[300px]">{item.description}</div>
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
    <div className="w-[1240px] mx-auto py-[85px] px-[60px] bg-[#141418] rounded-3xl flex flex-col gap-y-8">
      <List title="AI Agent" data={translations.ai_agents} />
      <div className="h-[70px] text-3xl font-medium">+</div>
      <List title="DeFI Yield" data={translations.defi_yields} />
      <div className="h-[70px] text-3xl font-medium">=</div>
      <Title>Vision</Title>
    </div>
  );
};
