import type { Metadata } from "next";

import "./globals.css";

import { inter, montserrat } from "./fonts";



// 

export const metadata: Metadata = {
  title: "univessel",
  description: "Your everyday event managing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
      
        {children}
      </body>
    </html>
  );
}
