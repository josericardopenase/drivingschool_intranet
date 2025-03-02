import type { Config } from "tailwindcss";
import {darken, lighten} from "polished";

const basePrimaryColor = "#70ce4f"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand_primary: {
          50: lighten(0.4, basePrimaryColor),
          100: lighten(0.30, basePrimaryColor),
          200: lighten(0.25, basePrimaryColor),
          300: lighten(0.15, basePrimaryColor),
          400: lighten(0.05, basePrimaryColor),
          500: basePrimaryColor, // Base color
          600: darken(0.05, basePrimaryColor),
          700: darken(0.1, basePrimaryColor),
          800: darken(0.2, basePrimaryColor),
          900: darken(0.3, basePrimaryColor),
        },
      }
    },
  },
  plugins: [],
};
export default config;
