"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";
import { metadataDefaults } from "@/app/metadata";
import { useMemo } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string; // override full URL if needed
  keywords?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  keywords,
}) => {
  const pathname = usePathname();

  const fullUrl = useMemo(() => {
    return url || `${metadataDefaults.url}${pathname || ""}`;
  }, [url, pathname]);

  const metaTitle = title
    ? `${title} | ${metadataDefaults.title}`
    : metadataDefaults.title;
  const metaDescription = description || metadataDefaults.description;
  const metaImage = image || metadataDefaults.image;
  const metaKeywords = keywords || metadataDefaults.keywords;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Head>
  );
};

export default SEO;
