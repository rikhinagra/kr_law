import "./globals.css";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const viewport = {
  themeColor: "#1b2632",
};

export const metadata = {
  metadataBase: new URL('https://www.krinjurylawfirm.com'),
  title: "KR Law, APC | Kathy Rabii Law Firm",

  description:
    "KR Law, APC provides expert legal representation. Behind every case is a person who deserves care.",
  keywords:
    "personal injury lawyer, auto accident attorney, Los Angeles attorney, KR Law, APC, car accident lawyer, premises liability, wrongful death",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "KR Law, APC | Personal Injury Attorneys",
    description:
      "KR Law, APC provides expert legal representation in personal injury cases including auto accidents, premises liability, and wrongful death.",
    url: "https://www.krinjurylawfirm.com/",
    siteName: "KR Law, APC",
    images: [
      {
        url: "/images/kr-law-og-image.png",
        width: 1200,
        height: 630,
        alt: "KR Law, APC",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KR Law, APC | Personal Injury Attorneys",
    description:
      "KR Law, APC provides expert legal representation in personal injury cases including auto accidents, premises liability, and wrongful death.",
    images: ["/images/kr-law-og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body suppressHydrationWarning={true} className={poppins.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
