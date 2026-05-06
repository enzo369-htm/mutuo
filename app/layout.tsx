import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { DesktopMinimumNotice } from "@/components/DesktopMinimumNotice";
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
      <body className="flex min-h-full flex-col font-sans font-light antialiased max-md:h-[100dvh] max-md:overflow-hidden">
        <SmoothScroll>
          <div className="flex min-h-full flex-1 flex-col max-md:hidden">{children}</div>
          <DesktopMinimumNotice />
        </SmoothScroll>
      </body>
    </html>
  );
}
