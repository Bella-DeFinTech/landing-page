import { Brands } from "./ecos";
import { Title } from "./title";

const list = [
  {
    src: "/assets/exchanges/gate.png",
    url: "https://www.gate.io/",
    width: 360,
    height: 72,
    alt: "gate.io",
    styles: {
      padding: "6px 0",
    },
  },
  {
    src: "/assets/exchanges/bingx.png",
    url: "https://www.bithumb.com/react/",
    width: 264,
    height: 68,
    alt: "bithumb",
    styles: {
      padding: "4px 0",
    },
  },
  {
    src: "/assets/exchanges/binance.png",
    url: "https://www.binance.com/",
    width: 360,
    height: 75,
    alt: "binance",
    styles: {
      padding: "2px 0",
    },
  },
  {
    src: "/assets/exchanges/bitget.svg",
    url: "https://www.bitget.com",
    width: 103,
    height: 32,
    alt: "bitget",
    styles: {
      padding: "2px 0",
    },
  },
  {
    src: "/assets/exchanges/mexc.svg",
    url: "https://www.bybit.com/en/",
    width: 87,
    height: 34,
    alt: "bybit",
    styles: {
      padding: "4px 0",
    },
  },
];

export const Exchanges = () => (
  <div>
    <div className="my-10">
      <Title>Exchanges</Title>
    </div>
    <div className="my-10">
      <Brands mini list={list} />
    </div>
  </div>
);
