import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
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
  plugins: [flowbite],
};
export default config;
