import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = 'https://youngkzyoung5843-source.github.io/fx-blog'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: "FXラボ｜FX投資ブログ＆会社比較", template: "%s | FXラボ" },
  description: "FX投資の基礎知識から実践的な戦略、おすすめFX会社の比較まで、初心者にもわかりやすく解説するメディアです。",
  keywords: ["FX", "外国為替", "FX初心者", "FX会社比較", "スキャルピング", "スワップポイント", "テクニカル分析"],
  authors: [{ name: "kzy", url: "https://x.com/kzyoungfx" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "FXラボ",
    title: "FXラボ｜FX投資ブログ＆会社比較",
    description: "FX投資の基礎知識から実践的な戦略、おすすめFX会社の比較まで、初心者にもわかりやすく解説するメディアです。",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kzyoungfx",
    creator: "@kzyoungfx",
    title: "FXラボ｜FX投資ブログ＆会社比較",
    description: "FX投資の基礎知識から実践的な戦略、おすすめFX会社の比較まで、初心者にもわかりやすく解説するメディアです。",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} antialiased bg-gray-50 text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
