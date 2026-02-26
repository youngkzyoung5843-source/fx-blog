import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "FXラボ｜FX投資ブログ＆会社比較", template: "%s | FXラボ" },
  description: "FX投資の基礎知識から実践的な戦略、おすすめFX会社の比較まで、初心者にもわかりやすく解説するメディアです。",
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
