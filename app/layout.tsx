import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CryptoPunks Marketplace | Buy & Sell Rare NFTs",
  description:
    "Discover, buy, and sell exclusive CryptoPunks NFTs. Explore the marketplace for rare digital collectibles, track trending punks, and start your NFT journey today.",
  keywords: [
    "CryptoPunks",
    "NFT Marketplace",
    "Buy NFTs",
    "Sell NFTs",
    "Ethereum",
    "Digital Collectibles",
    "Crypto Art",
    "NFT Trading",
    "Rare NFTs",
  ],
  openGraph: {
    title: "CryptoPunks Marketplace | Buy & Sell Rare NFTs",
    description:
      "Join the official CryptoPunks NFT Marketplace. Collect, trade, and explore unique punks on Ethereum blockchain.",
    url: "https://yourdomain.com",
    siteName: "CryptoPunks Marketplace",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "CryptoPunks Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoPunks Marketplace | Buy & Sell Rare NFTs",
    description:
      "Discover and trade unique CryptoPunks NFTs on the marketplace. Start your NFT collection today.",
    images: ["https://yourdomain.com/twitter-image.png"],
    creator: "@yourtwitterhandle",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased font-poppins`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
