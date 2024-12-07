import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green50: "#f3f6f4",
        green100: "#e2e9e3",
        green200: "#c7d3ca",
        green300: "#a0b5a6",
        green400: "#76917e",
        green500: "#516c5a", //<-- main color
        green600: "#415a4a",
        green700: "#34483b",
        green800: "#2b3a31",
        green900: "#243029",
        green950: "#131b16",

        blue50: "#f5f8f8",
        blue100: "#ecf2f3",
        blue200: "#dde5e8",
        blue300: "#c7d5da",
        blue400: "#b0c0c9",
        blue500: "#9bacb9",
        blue600: "#8496a7",
        blue700: "#708090",//<-- main color
        blue800: "#5d6976",
        blue900: "#4e5861",
        blue950: "#2e3438",

        brown50: "#f9f9f1",
        brown100: "#ededd8",
        brown200: "#dadaad",
        brown300: "#c7c582",
        brown400: "#bdb76b",
        brown500: "#ae9f52",
        brown600: "#998346",
        brown700: "#80683d",
        brown800: "#6a5536",
        brown900: "#58462f",
        brown950: "#312517",

      },
    },
  },
  plugins: [],
} satisfies Config;
