import { Brands } from "./ecos";
import { Title } from "./title";

const list = [
  {
    src: "/assets/exchanges/0.svg",
    url: "https://www.coindesk.com/markets/2020/08/25/defi-aggregator-bella-protocol-announces-4m-seed-round/",
    width: 601,
    height: 118,
    alt: "coindesk",
    styles: {
      backgroundColor: "rgb(255, 255, 255)",
      borderRadius: "4px",
      border: "5px solid white",
      maxHeight: 100,
      padding: "26px 7px",
      width: 261,
      height: 90,
    },
  },
  {
    src: "/assets/exchanges/1.svg",
    url: "https://cointelegraph.com/news/defi-strategists-and-investors-stand-to-gain-from-a-permissionless-quantitative-strategy-platform-built-on-uniswap-v3",
    width: 631,
    height: 181,
    alt: "cointelegraph",
    styles: {
      backgroundColor: "rgb(255, 255, 255)",
      borderRadius: "4px",
      border: "5px solid white",
      maxHeight: 100,
      padding: "4px 0",
      height: 90,
    },
  },
  {
    src: "/assets/exchanges/2.svg",
    url: "https://markets.businessinsider.com/news/stocks/defi-aggregator-bella-protocol-closes-multimillion-dollar-funding-round-1029529440",
    width: 450,
    height: 146,
    alt: "businessinsider",
    styles: {
      backgroundColor: "#fff",
      borderRadius: "4px",
      border: "5px solid white",
      maxHeight: 100,
      padding: "24px 0px",
      width: 170,
      height: 90,
    },
  },
  {
    src: "/assets/exchanges/3.svg",
    url: "https://finance.yahoo.com/news/bella-protocol-becomes-first-project-181500425.html",
    width: 142,
    height: 20,
    alt: "yahoo finance",
    styles: {
      backgroundColor: "#fff",
      borderRadius: "4px",
      border: "5px solid white",
      maxHeight: 100,
      padding: "35px 9px",
      width: 170,
      height: 90,
    },
  },
  {
    src: "/assets/exchanges/4.svg",
    url: "https://www.nasdaq.com/articles/defi-aggregator-bella-protocol-announces-%244m-seed-round-2020-08-24",
    width: 85,
    height: 24,
    alt: "nasdaq",
    styles: {
      backgroundColor: "#fff",
      borderRadius: "4px",
      border: "5px solid white",
      maxHeight: 100,
      padding: "28px 0px",
      width: 170,
      height: 90,
    },
  },
];

export const Exchanges = () => (
  <div>
    <div className="my-10">
      <Title>Exchanges</Title>
    </div>
    <div className="my-10">
      <Brands minRow={3} list={list} />
    </div>
  </div>
);
