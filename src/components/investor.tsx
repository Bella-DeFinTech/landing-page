import { Brands } from "./ecos";
import { Title } from "./title";

const list = [
  {
    src: "/assets/investors/0.png",
    url: "https://www.binance.com/",
    width: 492,
    height: 127,
    alt: "Binance",
  },
  {
    src: "/assets/investors/1.svg",
    url: "https://arringtonxrpcapital.com/",
    width: 1380,
    height: 503,
    alt: "Arrington XRP Capital",
  },
  {
    src: "/assets/investors/2.svg",
    url: "https://alphabit.fund/",
    width: 184,
    height: 38,
    alt: "Alphabit",
  },
  {
    src: "/assets/investors/3.png",
    url: "https://www.rockx.com/",
    width: 390,
    height: 114,
    alt: "RockX",
  },
  {
    src: "/assets/investors/4.png",
    url: "https://ledgercap.co/",
    width: 196,
    height: 80,
    alt: "Ledger Capital",
  },
];

export const Investor = () => {
  return (
    <div className="mt-[100px] 1100:mt-[124px]">
      <div className="my-10">
        <Title>Investors</Title>
      </div>
      <div className="my-10">
        <Brands list={list} minRow={3} />
      </div>
    </div>
  );
};
