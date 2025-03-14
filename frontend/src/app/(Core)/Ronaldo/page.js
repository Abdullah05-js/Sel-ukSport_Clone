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
        "twitter:player":"https://thodex.live/embed-video.html",
        "twitter:player:width":"1280",
        "twitter:player:height":"720",
        "twitter:player:stream":"https://thodex.live/videoplayback.mp4",
        "twitter:player:stream:content_type":"video/mp4",
      }
};

export default async function Home() {


    return (
        <>
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
