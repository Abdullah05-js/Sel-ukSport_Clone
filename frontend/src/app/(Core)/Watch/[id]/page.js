import { Navbar } from "@/componets/navbar/Navbar";
import TopAds from "@/componets/Ads/TopAds";
import Content from "@/componets/main/Content";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Footer from "@/componets/Footer/Footer";
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
