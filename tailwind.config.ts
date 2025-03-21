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
        como: {
          "50": "#f5f8f6",
          "100": "#dfe8e2",
          "200": "#bfd0c6",
          "300": "#97b1a2",
          "400": "#728f80",
          "500": "#5f7f6e",
          "600": "#445d4f",
          "700": "#394c42",
          "800": "#313e39",
          "900": "#2b3630",
          "950": "#161d1a",
        },
        sundance: {
          "50": "#fbf9ef",
          "100": "#f2efd3",
          "200": "#e4dda3",
          "300": "#d6c873",
          "400": "#cdb756",
          "500": "#c29d3e",
          "600": "#ab7f34",
          "700": "#8f612e",
          "800": "#754e2b",
          "900": "#614126",
          "950": "#372211",
        },
      },
      fontFamily: {
        sourceSans3: ["SourceSans3", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
