import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bootcamp Brain 🧠",
  description: "Study smarter. Think like a founder. — Entrepreneurship Bootcamp at HTU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable} antialiased min-h-screen`}>
        <div className="bg-aurora" aria-hidden />
        <div className="bg-grid" aria-hidden />
        <div className="bg-grain" aria-hidden />
        <CursorGlow />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
