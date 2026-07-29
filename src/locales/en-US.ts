const translations = {
  title: "Unleash the Power of AI for Trading and Fun",
  subTitle: "Optimize Smarter Trades and Interactive\nOnchain Experiences",
  buttons: {
    getSignals: "Get Signals",
    playNow: "Play Now",
  },
  modal: {
    title: "New at Bella: Token Yugijo (トークン遊園地) is Live! 🐰",
    description: "Flip coins, get AI insights, and win with fair randomness — now on Optimism.",
    playButton: "Play Now"
  },
  metrics: [
    "200,000 +|Total Number of Users",
    "200%|Returns|This figure reflects a certain portfolio based on our 2024 H1 data. It is highly volatile and should only be used as a reference, not as financial advice. Actual results may vary based on model selection, token selection, and portfolio composition.",
    "3.2|Sharpe Ratio|This figure reflects a certain portfolio based on our 2024 H1 data. It is highly volatile and should only be used as a reference, not as financial advice. Actual results may vary based on model selection, token selection, and portfolio composition.",
  ],
  product_suit: {
    name: "PRODUCT SUITE",
    title:
      "Bella provides a suite of AI products for quantitative trading signals, DeFi liquidity provision strategies, and gas-free on-chain gaming experiences.",
    suits: [
      {
        name: "AI Empowered",
        data: [
          {
            name: "Bella Alpha",
            description:
              "Elevate your trading with AI-driven signals, and unlock real-time market insights, all delivered through one Telegram bot.",
          },
          {
            name: "Token Yugijo",
            description:
              "A lightning-fast, gasless coin-flip game hosted by Bella's AI bunny. Flip for fun, learn through play.",
          },
        ],
      },
      {
        name: "Asset Management",
        data: [
          // {
          //   name: "Flex Savings",
          //   description:
          //     "A gas-efficient, smart liquidity pool that auto-compounds your returns",
          // },
          {
            name: "LP Farm",
            description:
              "Enjoy prime yield farming opportunities by leveraging zkSync layer 2 scalability",
          },
        ],
      },
      {
        name: "Optimize Solutions",
        data: [
          {
            name: "Tuner",
            description:
              "Enhance your liquidity strategies with Bella Tuner, a powerful Uniswap v3 simulator",
          },
          {
            name: "AVS Node Operator",
            description:
              "Manage running nodes for AVS on EigenLayer, currently supporting Automata, DODO, and GM Network",
          },
        ],
      },
    ],
  },
  smart_trading: "Smart Trading",
  defi_yields: [
    {
      title: "Optimal",
      description: "Iterate and fine-tune strategies for maximum returns",
    },
    {
      title: "Precise",
      description:
        "Ensure pinpoint accuracy from fund routing to high-fidelity backtesting",
    },
    {
      title: "Secure",
      description:
        "Audited by leading Blockchain security to safeguard user assets",
    },
  ],
  ai_agents: [
    {
      title: "Autonomous",
      description:
        "Leverages the most advanced AI strategies to track real-time trading signals",
    },
    {
      title: "Light-weight",
      description:
        "Maximizes investments through rapid, accurate results with minimal input required from users",
    },
    {
      title: "Efficient",
      description:
        "Conducts comprehensive research and provides live metrics for profitable decision-making",
    },
  ],
  usecase: {
    title: "Democratizing Crypto Trading",
    cases: [
      [
        "AI-Powered\nTrading",
        `Our Bella Alpha bot delivers AI-driven trading signals for selected token pairs, alongside detailed market insights and indicators through its research engine. Together, they grant you an innovative, all-in-one approach so you can rise ahead of the pack.`,
      ],
      [
        "Portfolio Research",
        `Integrates advanced AI to offer a holistic view of your entire crypto portfolio. By analyzing market conditions and considering your personal financial goals, our tools supercharge your portfolio for maximum growth and stability.`,
      ],
      [
        "Risk\nManagement",
        `Our models detect potential market risks and can suggest optimal hedging strategies to protect your assets. Bella’s AI Agent conducts market and portfolio analysis to recommend asset diversification strategies.`,
      ],
      [
        "Cross-Chain\nOptimization",
        `Scans opportunities across multiple blockchain networks to identify the most profitable yield farming and liquidity provision opportunities. Enjoy comprehensive insights and cross-chain arbitrage opportunities across all networks.`,
      ],
      [
        "Game-Driven\nOnboarding",
        `Token Yugijo (トークン遊園地) turns a simple coin flip into an AI-powered, verifiably fair experience. Every session features insights and token picks delivered by Bella Signal Bot, trusted by 200,000+ users. Explore crypto with zero friction — no gas, no prior knowledge needed.`,
      ],
      [
        "Quantitative\nStrategy",
        `Empower quant traders to backtest and refine their strategies with unprecedented accuracy. Our AI continuously learns from market data and user strategies to suggest improvements upon quantitative trading approaches.`,
      ],
    ],
  },
};

export default translations;
export type Translations = typeof translations;
