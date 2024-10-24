import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)'],
      },
      colors: {

        //norway//
        norway50: "#f4f6f3",
        norway100: "#e5eae1",
        norway200: "#cad5c5",
        norway300: "#a5b89d",
        norway400: "#7b9572",
        norway500: "#5a7752",
        norway600: "#445d3e",
        norway700: "#354b31",
        norway800: "#2c3c29",
        norway900: "#243222",
        norway950: "#141c12",

        //avocado//
        avocado50: "#f5f4f03",
        avocado100: "#e9e9de",
        avocado200: "#d5d4c1",
        avocado300: "#bbbb9b",
        avocado400: "#969669",
        avocado500: "#85865c",
        avocado600: "#686947",
        avocado700: "#505239",
        avocado800: "#424331",
        avocado900: "#3a3b2c",
        avocado950: "#1d1e15",

        //juniper//
        juniper50: "#f5f8f7",
        juniper100: "#dee9e6",
        juniper200: "#bdd2cf",
        juniper300: "#95b3af",
        juniper400: "#739693",
        juniper500: "#547875",
        juniper600: "#425f5e",
        juniper700: "#374e4d",
        juniper800: "#2f4040",
        juniper900: "#2a3737",
        juniper950: "#151e1e",

        //DarkKhaki//
        gimblet50: "#f9f9f1",
        gimblet100: "#ededd8",
        gimblet200: "#dadaad",
        gimblet300: "#c7c582",
        gimblet400: "#bdb76b",
        gimblet500: "#ae9f52",
        gimblet600: "#998346",
        gimblet700: "#80683d",
        gimblet800: "#6a5536",
        gimblet900: "#58462f",
        gimblet950: "#312517",

        //CadetBlue//
        breakerBay50: "#f4f9f9",
        breakerBay100: "#daedec",
        breakerBay200: "#bdd2d0",
        breakerBay300: "#95b3af",
        breakerBay400: "#bdd2cf",
        breakerBay500: "#468386",

        //Yuma//
        yuma50: "#f9f8f1",
        yuma100: "#eeead7",
        yuma200: "#dbd5ac",
        yuma300: "#c9bd83",
        yuma400: "#bba864",
        yuma500: "#b09250",
        yuma600: "#9a7845",
        yuma700: "#815e3c",
        yuma800: "#6b4c35",
        yuma900: "#59412e",

        cadetBlueDark: "#5f9ea0",
        burlyWood: "#DEB887",
        cornSilk: "#FFF8DC",
        cornSilkLight: "#fff4c0",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config