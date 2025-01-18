import { Navbar } from "@/componets/navbar/Navbar";
import TopAds from "@/componets/Ads/TopAds";
import Content from "@/componets/main/Content";
export default async function Home({ params }) {
  // await new Promise((resolve) => setTimeout(resolve,2000))
  const { id } = await params;
  return (
    <div className="flex flex-col items-center   min-h-screen overflow-auto">
  

      <Content param={id} />

      <TopAds />
    </div>
  );
}
