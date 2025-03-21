import type { Metadata } from "next";
import "@/app/globals.css";
import Navigation from "@/app/(site)/components/Navigation";
import Footer from "@/app/(site)/components/Footer";

export const metadata: Metadata = {
  title: "Praxis Mitter",
  description: "Ihre Praxis für eine gesunde Lebensführung",
  icons: {
    icon: [
      {
        url: "/favicon.svg", // /public path
        href: "/favicon.svg", // /public path
      },
    ],
  },
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
