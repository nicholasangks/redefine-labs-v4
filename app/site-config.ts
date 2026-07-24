export const siteConfig = {
  name: "Redefine Labs",
  legalName: "Redefine Labs Solutions",
  registrationNumber: "JM1001714-A",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://redefinelabs.com",
  email: "hello@redefinelabs.com",
  phone: "+60123490816",
  description:
    "Redefine Labs designs and engineers custom software, websites, applied AI solutions, and data products around how businesses actually work.",
  socialImage: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Redefine Labs - Software and AI automation, built with taste",
  },
  keywords: [
    "custom software development",
    "AI automation",
    "AI solutions",
    "website design",
    "web application development",
    "dashboard development",
    "data visualisation",
    "digital product design",
    "Malaysia software company",
  ],
} as const;
