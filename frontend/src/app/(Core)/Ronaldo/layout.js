import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "../../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});




export default async function Layout({ children }) {

    return (
        <html lang="en">

            <Head>

                <meta name="twitter:card" content="player" />
                <meta name="twitter:title" content="Your Video Title" />
                <meta name="twitter:description" content="A brief description of your video" />
                <meta name="twitter:image" content="https://thodex.live/opengraph-image.png" />
                <meta name="twitter:player" content="https://thodexlive.blogspot.com/2025/02/1.html" />
                <meta name="twitter:player:width" content="1280" />
                <meta name="twitter:player:height" content="720" />
                <meta name="twitter:player:stream" content="https://yourwebsite.com/videos/videoplayback.mp4" />
                <meta name="twitter:player:stream:content_type" content="video/mp4" />
            </Head>

            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >

                {children}

            </body>
        </html>
    );
}

