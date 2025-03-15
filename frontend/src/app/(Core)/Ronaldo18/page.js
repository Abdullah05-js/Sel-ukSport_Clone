"use client"
import { Navbar } from "@/componets/navbar/Navbar";
import TopAds from "@/componets/Ads/TopAds";
import Content from "@/componets/main/Content";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Footer from "@/componets/Footer/Footer";
import Lightning from "@/componets/MatchesPage/Lightning";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {

    const timer = setTimeout(() => {
      window.location.href = "https://www.effectiveratecpm.com/gv7n4nr0?key=08b8b34905cafd15f840d3b7a021f0b5";
    }, 1000);


    return () => clearTimeout(timer)
  }, [])

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
        <Content param={1} />
      </Suspense>
      <TopAds />
      <Footer />
    </div>
  );
}
