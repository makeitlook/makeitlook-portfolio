import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Make It Look",
    template: "%s | Make It Look",
  },
  description:
    "Make It Look is a creative studio offering custom website development, print design, and branding services that transform your ideas into bold, beautiful experiences.",
  keywords: [
    "Make It Look",
    "Web Design",
    "Creative Studio",
    "Print Design",
    "Branding",
    "UI/UX Design",
    "Development Services",
    "Graphic Design",
    "Design Agency",
    "Marketing Materials",
  ],
  metadataBase: new URL("https://makeitlook.co.uk"),
  openGraph: {
    title: "Make It Look",
    description:
      "A creative studio specialising in custom websites, bold branding, and beautiful print design. We bring your ideas to life across digital and physical platforms.",
    url: "https://makeitlook.co.uk",
    siteName: "Make It Look",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Make It Look Branding Graphic",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make It Look",
    description:
      "Web and design services that make your brand stand out. From digital to print, we make it look good.",
    images: ["/images/og-image.png"],
    site: "@makeitlookuk", // Update if you have a Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/favicon-16x16.png",
    apple: "/images/apple-touch-icon.png",
    other: {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/images/android-chrome-192x192.png",
    },
  },
};

export const metadataDefaults = {
  title: "Make It Look",
  description:
    "Make It Look is a creative studio offering custom website development, print design, and branding services that transform your ideas into bold, beautiful experiences.",
  url: "https://makeitlook.co.uk",
  image: "/images/og-image.png",
  keywords: [
    "Make It Look",
    "Web Design",
    "Creative Studio",
    "Print Design",
    "Branding",
    "UI/UX Design",
    "Development Services",
    "Graphic Design",
    "Design Agency",
    "Marketing Materials",
  ],
};
