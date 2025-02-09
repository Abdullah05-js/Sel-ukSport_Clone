import { Navbar } from "@/componets/navbar/Navbar";
import TopAds from "@/componets/Ads/TopAds";
import Content from "@/componets/main/Content";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Footer from "@/componets/Footer/Footer";


export const metadata = {
  metadataBase: new URL("https://thodex.live"),
  title:"بث مباشر",
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
};


export default async function Home({ params }) {
  const { id } = await params;
  return (
    <div className="flex flex-col items-center   min-h-screen overflow-y-auto overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Content param={id} />
      </Suspense>
      <TopAds />
      <Footer />
    </div>
  );
}
