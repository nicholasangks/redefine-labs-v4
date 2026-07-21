import type { Metadata } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import { AppFooter } from "./components/app-footer";
import { AppHeader } from "./components/app-header";
import { HoverCircleButton } from "./components/hover-circle-button";
import { LenisProvider } from "./lenis-provider";
import { siteConfig } from "./site-config";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Redefine Labs | Software & AI Engineering",
    template: "%s | Redefine Labs",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: siteConfig.name,
    title: "Redefine Labs | Software & AI Engineering",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Redefine Labs | Software & AI Engineering",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/brand-assets/logo.png`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: "en",
    },
  ],
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
      <body
        id="top"
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <LenisProvider>
          <AppHeader />
          <div className="flex-1">{children}</div>
          <AppFooter />
          <div className="fixed right-6 bottom-6 z-40 md:right-6 md:bottom-6">
            <HoverCircleButton
              href="https://wa.me/60123490816"
              showHoverCircle={false}
              className="floating-cta-glow border-t border-l border-white !bg-white !bg-[linear-gradient(135deg,#FFFFFF_0%,#FFFFFF_12%,rgba(145,187,252,0.45)_38%,rgba(253,210,157,0.45)_62%,#FFFFFF_88%,#FFFFFF_100%)] !text-black"
            >
              Discuss a project
            </HoverCircleButton>
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
