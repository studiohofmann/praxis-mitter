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
        'como': {
    '50': '#f5f8f6',
    '100': '#dfe8e2',
    '200': '#bfd0c6',
    '300': '#97b1a2',
    '400': '#728f80',
    '500': '#5f7f6e',
    '600': '#445d4f',
    '700': '#394c42',
    '800': '#313e39',
    '900': '#2b3630',
    '950': '#161d1a',
},
      'chenin': {
    '50': '#fafaf0',
    '100': '#f2f1d3',
    '200': '#e3e0a4',
    '300': '#d6cf7a',
    '400': '#cabc55',
    '500': '#c0a440',
    '600': '#a98636',
    '700': '#8d6730',
    '800': '#74522c',
    '900': '#604527',
    '950': '#362512',
},

      },
      fontFamily: {
        switzer: ['Switzer', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
