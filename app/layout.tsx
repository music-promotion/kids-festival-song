import type { Metadata } from "next";
import { Baloo_2, Comic_Neue } from "next/font/google";
import { siteConfig } from "@/site.config";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-baloo",
  display: "swap",
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: `https://${siteConfig.domain}`,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (可选，需要时填充)
  verification: {
    google: "", // Google Search Console
    // baidu: "", // 百度站长
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${baloo.variable} ${comicNeue.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
