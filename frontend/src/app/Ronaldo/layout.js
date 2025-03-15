import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

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
    title: "بث",
    description:
        "vcfdbdfbdfbdfb",
    keywords: [
      "fdbgensz"
    ],
    other:{
        "twitter:card":"player",
        "twitter:title":"بث مباشر مباريات كرة القدم مجانا",
        "twitter:description":"مشاهدة مباريات كرة القدم بث مباشر مجانا بجودة عالية، تابع مباراة ريال مدريد اليوم مباشرة بدون تقطيع، بث مباشر لدوري أبطال أوروبا والدوري الإسباني على أفضل السيرفرات السريعة",
        "twitter:image":"https://thodex.live/opengraph-image.png",
        "twitter:player":"https://thodex.live/videoplayback.mp4",
        "twitter:player:width":"1280",
        "twitter:player:height":"720",
        "twitter:player:stream":"https://thodex.live/videoplayback.mp4",
        "twitter:player:stream:content_type":"video/mp4",
      }
};



export default async function Layout({ children }) {

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >

                {children}

            </body>
        </html>
    );
}

