import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D293",
        secondary: "#0F1630",
        tertiary: "#7F8DAC",
        hover: "#424B67",
        highlight: "#171F38",
      },
    },
  },
};
export default config;
