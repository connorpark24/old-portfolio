import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00274C",
      },
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "sans-serif"],
        karma: ['"Crimson Pro"', "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
