import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/globals.css";
import Menue from "@/components/menue";
import Footer from "@/components/footer";
import { StrictMode } from "react";




const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Praxis Mitter",
  description: "Ihre Praxis für gesunde Lebensführung auf Grundlage moderner Analyse, sowie individueller Beratung & Therapie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans`}>
      <body className="outfit">
        <Menue />
        <StrictMode>
          {children}
        </StrictMode>
        <Footer />
      </body>
    </html>
  );
}
