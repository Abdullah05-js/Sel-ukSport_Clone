import { Navbar } from "@/componets/navbar/Navbar";
import TopAds from "@/componets/Ads/TopAds";
import Content from "@/componets/main/Content";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Footer from "@/componets/Footer/Footer";
import Lightning from "@/componets/MatchesPage/Lightning";

export const metadata = {
  metadataBase: new URL("https://thodex.live"),
  title: "بث مباشر",
  description:
    "مشاهدة مباريات كرة القدم بث مباشر مجانا بجودة عالية، تابع مباراة ريال مدريد اليوم مباشرة بدون تقطيع، بث مباشر لدوري أبطال أوروبا والدوري الإسباني على أفضل السيرفرات السريعة.",
  keywords: [
    "بث مباشر مباريات كرة القدم مجانا",
    "مشاهدة مباريات ريال مدريد بث مباشر",
    "بث مباشر ريال مدريد اليوم",
    "روابط بث مباشر مباريات ريال مدريد",
    "بث مباشر الدوري الإسباني مجانا",
    "بث مباشر مباريات دوري أبطال أوروبا",
  ],
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
  },
  other: {
    clckd:"3dcf6449af0621f1dd3c24e85d392355"
}
};


export default async function Home({ params }) {
  const { id } = params;
  return (
    <div className="flex flex-col items-center min-h-screen overflow-y-auto overflow-x-hidden relative">
      <div className="absolute left-0 top-0 z-0 w-full h-full sm:block hidden">
        <Lightning
          hue={150}
          xOffset={0}
          speed={1}
          intensity={2}
          size={2.7}
        />
      </div>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Content param={id} />
      </Suspense>
      <TopAds />
      <Footer />
    </div>
  );
}
