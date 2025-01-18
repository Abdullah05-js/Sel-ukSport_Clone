import { Navbar } from "@/componets/navbar/Navbar";
import TopAds from "@/componets/Ads/TopAds";
import Content from "@/componets/main/Content";
export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve,2000))

  return (
    <div className="flex flex-col items-center   min-h-screen overflow-auto">
      <Navbar/>

      <Content  />

      <TopAds />
    </div>
  );
}
