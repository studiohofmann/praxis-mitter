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

      },
      fontFamily: {
        switzer: ['Switzer', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
