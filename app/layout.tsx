import type { Metadata } from "next";
import { Cormorant_Garamond, Urbanist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rishtey.us"),
  title: "Rishtey — Connections that last.",
  description: "Rishtey is a boutique South Asian matchmaking house. We meet you. We know you. Then we find them.",
  openGraph: {
    title: "Rishtey — Connections that last.",
    description: "Rishtey is a boutique South Asian matchmaking house. We meet you. We know you. Then we find them.",
    url: "https://rishtey.us",
    siteName: "Rishtey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishtey — Connections that last.",
    description: "Rishtey is a boutique South Asian matchmaking house. We meet you. We know you. Then we find them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${urbanist.variable}`}>
      <body style={{ fontFamily: "var(--font-urbanist), sans-serif" }}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
