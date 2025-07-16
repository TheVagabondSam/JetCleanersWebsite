import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { SectionBottom } from "./components/SectionBottom";
import { Analytics } from "@vercel/analytics/next"

const lato = Lato({
  subsets: ['latin'],
  weight: ['400','700']
});

export const metadata: Metadata = {
  title: "Jet Cleaners",
  description: "Jet Cleaners Pressure Washing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
          <Header />
          {children}
          <SectionBottom />
          <Analytics />
      </body>
    </html>
  );
}
