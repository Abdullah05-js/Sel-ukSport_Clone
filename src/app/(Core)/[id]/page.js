import { Navbar } from "@/componets/navbar/Navbar";
import TopAds from "@/componets/Ads/TopAds";
import Content from "@/componets/main/Content";

export default async function Home({ params }) {
  const { id } = await params;
  return (
    <div className="flex flex-col items-center   min-h-screen overflow-auto">
      <Navbar />

        <Content param={id} />

      <TopAds />
    </div>
  );
}
