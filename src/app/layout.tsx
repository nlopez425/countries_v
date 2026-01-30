'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/context/globalContext";
import Search from "@/components/search";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GlobalContextProvider>
        <header>
           <h1 className="text-5xl font-bold text-center p-5">Countries</h1>
        </header>
        <Search></Search>
        <main>
          {children}
        </main>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
