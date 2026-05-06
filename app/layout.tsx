import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mutuo Agencia",
    template: "%s · Mutuo Agencia",
  },
  description: "Boutique digital studio — strategic communication and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans font-light antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
