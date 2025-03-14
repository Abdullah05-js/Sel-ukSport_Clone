import Head from "next/head";

export default async function Home() {


    return (
        <>
        <Head>
          {/* Twitter Player Card */}
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
  
        <main>
          <h1>Watch My Video</h1>
          <video controls width="640" height="360">
            <source src="/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </main>
      </>
    );
}
