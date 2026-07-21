import type { Metadata } from "next";

import { siteConfig } from "./site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_MY",
      siteName: siteConfig.name,
      url: path,
      title: socialTitle,
      description,
      images: [siteConfig.socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [siteConfig.socialImage.url],
    },
  };
}
