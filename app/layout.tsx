import type { Metadata } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import { LenisProvider } from "./lenis-provider";
import "./globals.css";

const fkGroteskNeue = localFont({
  src: [
    {
      path: "../public/fonts/fk-grotesk-neue/FKGroteskNeueTrial-Thin-BF6576818c2a14c.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/fk-grotesk-neue/FKGroteskNeueTrial-Light-BF6576818c0f3e8.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/fk-grotesk-neue/FKGroteskNeueTrial-Regular-BF6576818c3af74.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/fk-grotesk-neue/FKGroteskNeueTrial-Medium-BF6576818c3a00a.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/fk-grotesk-neue/FKGroteskNeueTrial-Bold-BF6576818bd3700.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/fk-grotesk-neue/FKGroteskNeueTrial-Black-BF6576818b4c472.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-fk-grotesk-neue",
});

export const metadata: Metadata = {
  title: "Redefine Labs",
  description: "Software, design, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fkGroteskNeue.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
