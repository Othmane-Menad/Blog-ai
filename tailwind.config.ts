import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          background: "#f0f0f0",
          grey: "#242424",
          border: "rgba(36,36,36,.15)",
        },
      },
      backgroundImage: (theme) => ({
        "gradient-gradual":
          "linear-gradient(180deg, rgba(116, 116, 116, 0) 66.15%, #000000 100%)",
      }),
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        satoshiLight: ["var(--font-satoshiLight)"],
        ivyMode: ["var(--font-ivyMode)"],
      },
    },
    screens: {
      xs: "480px",
      sm: "900px",
      below_md: { max: "1059px" },
      md: "1060px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
