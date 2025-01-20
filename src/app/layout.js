import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import axios from "axios"
import "./globals.css";
import { redirect } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "APOSPORT.com",
  description: "Watch football games live",
};

export default async function RootLayout({ children }) {




  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

