import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import path from "path";
import { Weight } from "lucide-react";



const cormoratGaramond = localFont({
  src: [
    {
      path: "./fonts/Cormorant_Garamond/CormorantGaramond-Bold.ttf",
      weight: "900",
      style: "normal",
    },
   
    
  
  ],
  variable: "--font-cormorant-garamond",
});
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
        className={`${cormoratGaramond.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
