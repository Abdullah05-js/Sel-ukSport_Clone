import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import AdComponent from "@/componets/Ads/AdComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://thodex.live"),
  title: {
    default: "Yalla Shoot | يلا شوت | أهم مباريات اليوم بث مباشر | yallashoot live tv",
    template: "%s - THODEX.live"
  },
  description: "يلا شوت _ yalla shoot أهم مباريات اليوم بث مباشر بدون تقطيع يلا شووت _ يلا شوت لايف _ yalla shoot tv _ يلا شووت مباشر _ yalla shoot live tv",
  twitter: {
    card: "summary_large_image"
  },
  keywords: "بث مباشر مباريات كرة القدم مجانا, مشاهدة مباريات ريال مدريد بث مباشر, بث مباشر ريال مدريد اليوم, روابط بث مباشر مباريات ريال مدريد, بث مباشر الدوري الإسباني مجانا, بث مباشر مباريات دوري أبطال أوروبا, بث مباشر مباريات ريال مدريد بدون تقطيع, بث مباشر مباريات كرة القدم عالية الجودة, بث مباشر مباريات ريال مدريد يلا شوت, بث مباشر مباريات ريال مدريد كورة لايف",
  openGraph: {
    title: "THODEX.live - أهم مباريات اليوم بث مباشر",
    description: "مشاهدة مباريات كرة القدم بث مباشر مجانا بجودة عالية...",
    url: "https://thodex.live",
    siteName: "THODEX.live",
    images: [
      {
        url: "https://thodex.live/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "THODEX.live - بث مباشر"
      }
    ],
    locale: "ar",
    type: "website"
  }
};


export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Providers>
          {children}
        </Providers>
        <AdComponent />
      </body>
    </html>
  );
}

