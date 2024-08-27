import { Gap } from "./gap";
import { Title } from "./title";
import clsx from "clsx";
import cardStyles from "./trading.module.scss";

const cards = [
  {
    title: "Portfolio Research",
    description: `Bella integrates advanced AI to offer a holistic view of your entire crypto portfolio, with optimal re-balancing recommendations. 
By analyzing market conditions and considering your personal financial goals, our tools supercharge your portfolio for maximum growth and stability.
`,
    img: {
      src: "/assets/trading-cards/tokyo-magnifier-web-search-with-elements.png",
      width: 210,
      height: 168,
    },
  },
  {
    title: "AI-Powered\nTrading",
    description: `Our Trading Signal Bot delivers precise signals for selected token pairs, and the LLM Research Bot offers detailed market insights and indicators.
Together, they grant you an innovative, AI-driven approach so you can rise ahead of the pack.
`,
    img: {
      src: "/assets/trading-cards/tokyo-selecting-a-value-in-the-browser-window.png",
      width: 210,
      height: 148,
    },
  },
  {
    title: "Meme Ambassador",
    description: `Supercharge your community with our AI-Powered Meme Ambassador, ushering in the fun and engaging world of memes. Transform market trends and data into viral, community-driven content.`,
    img: {
      src: "/assets/trading-cards/tokyo-many-browser-windows-with-different-information.png",
      width: 210,
      height: 197,
    },
  },
  {
    title: `AI Email\nMarketing`,
    description: `Supercharge your community with our AI-Powered Meme Ambassador, ushering in the fun and engaging world of memes. Transform market trends and data into viral, community-driven content. Transform market trends and data into viral, community-driven content.`,
    img: {
      src: "/assets/trading-cards/tokyo-sending-messages-from-one-place-to-another.png",
      width: 210,
      height: 194,
    },
  },
  {
    title: "AI Content\nCreation",
    description: "",
    img: {
      src: "/assets/trading-cards/tokyo-many-browser-windows-with-different-information.png",
      width: 210,
      height: 197,
    },
  },
  {
    title: "AI Analytics and\nTracking",
    description: "",
    img: {
      src: "/assets/trading-cards/tokyo-volumetric-analytics-of-different-types-in-web-browsers.png",
      width: 210,
      height: 171,
    },
  },
];

export const DemocratizingCryptoTrading = () => {
  return (
    <div className="w-[1240px] mx-auto">
      <div className="flex justify-between">
        <Title>Democratizing Crypto Trading</Title>
      </div>
      <Gap y={40} />
      <div className="grid grid-cols-2 gap-10">
        {cards.map((c, i) => {
          return (
            <div key={i} className={clsx(cardStyles.card, "drop-shadow-x")}>
              <div className="flex h-full gap-x-1">
                <div>
                  <div>
                    {c.title.split("\n").map((t, i) => (
                      <div key={i} className={clsx(cardStyles.title)}>
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className={clsx("mt-10")}>{c.description || ` `}</div>
                  <div className="text-xl items-center flex gap-x-4 mt-6">
                    <svg
                      width="41"
                      height="42"
                      viewBox="0 0 41 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20.5" cy="20.9888" r="20.5" fill="#191A23" />
                      <path
                        d="M11.2501 25.1897C10.5326 25.6039 10.2868 26.5213 10.701 27.2388C11.1152 27.9562 12.0326 28.202 12.7501 27.7878L11.2501 25.1897ZM30.7695 16.877C30.9839 16.0768 30.509 15.2543 29.7088 15.0399L16.6688 11.5458C15.8686 11.3314 15.0461 11.8063 14.8317 12.6065C14.6173 13.4067 15.0921 14.2292 15.8923 14.4436L27.4835 17.5494L24.3776 29.1405C24.1632 29.9407 24.6381 30.7632 25.4383 30.9777C26.2385 31.1921 27.061 30.7172 27.2754 29.917L30.7695 16.877ZM12.7501 27.7878L30.0706 17.7878L28.5706 15.1897L11.2501 25.1897L12.7501 27.7878Z"
                        fill="#02E8F4"
                      />
                    </svg>
                    Learn more
                  </div>
                </div>
                <img
                  src={c.img.src}
                  width={c.img.width}
                  height={c.img.height}
                  alt=""
                  className="flex-none self-center"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
