import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "1440": "1440px",
        "1380": "1380px",
        "1240": "1240px",
        "1200": "1200px",
        "1100": "1100px",
        "840": "840px",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".fadeIn": {
          animation: "fadeIn 0.35s cubic-bezier(0.33, 1, 0.68, 1) both",
          "@keyframes fadeIn": {
            "0%": {
              opacity: "0",
            },
            "100%": {
              opacity: "1",
            },
          },
        },
        ".drop-shadow-x": {
          filter:
            "drop-shadow(0 5px 1px rgb(25 26 35 / 1)) drop-shadow(0 5px 2px rgb(25 26 35 / 0.5))",
        },
        ".lang-switch-on": {
          animation: "switchFadeIn 0.35s cubic-bezier(0.33, 1, 0.68, 1) both",
          transformOrigin: "50% 0",
          "@keyframes switchFadeIn": {
            "0%": {
              opacity: "0",
              transform: "scaleY(.3) translateX(-50%)",
            },
            "100%": {
              opacity: "1",
              transform: "scaleY(1) translateX(-50%)",
            },
          },
        },
        ".lang-switch-off": {
          animation: "switchFadeOut 0.35s cubic-bezier(0.33, 1, 0.68, 1) both",
          transformOrigin: "50% 0",
          "@keyframes switchFadeOut": {
            "0%": {
              opacity: "1",
              transform: "scaleY(1) translateX(-50%)",
            },
            "100%": {
              opacity: "0",
              transform: "scaleY(.3) translateX(-50%)",
            },
          },
        },
      });
    }),
  ],
};
export default config;
