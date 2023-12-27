import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/app/(shared)/(navbar)/Navbar";

const satoshi_light = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Light.otf",
    },
  ],
  variable: "--font-satoshiLight",
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Medium.woff",
    },
  ],
  variable: "--font-satoshi",
});

const ivyMode = localFont({
  src: [
    {
      path: "../fonts/IvyMode-Light.woff",
    },
  ],
  variable: "--font-ivyMode",
});

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Othmane Blog",
  description: "innovative blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${satoshi.variable} ${ivyMode.variable} ${satoshi_light.variable} bg-custom-background flex flex-col`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
