import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { Navbar } from "@/components/navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Катерина — дизайнер & нейрограф",
  description:
    "Портфолио Катерины: графический дизайн, брендинг, UI/UX и нейрофотография.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-white text-black selection:bg-[color:var(--accent)] selection:text-white`}
      >
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
