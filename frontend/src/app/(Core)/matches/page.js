import React, { Suspense } from 'react';
import { Navbar } from '@/componets/navbar/Navbar';
import Loading from '@/app/loading';
import { TodayList } from '@/componets/MatchesPage/TodayList';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = "force-dynamic";
export const metadata = {
    metadataBase: new URL("https://thodex.live"),
    title: "قائمة المباريات",
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
      }
};


export default async function Page() {
    let Data;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/1xbet`);
        let data = await response.json();
        Data = data.Value || []
    } catch (error) {
        Data = []
    }

    return (
        <div className="h-screen w-screen overflow-x-hidden flex flex-col justify-start items-center gap-2">

            <div className="flex sm:flex-row flex-col justify-between items-center w-screen p-2">
                <Navbar />
            </div>

            <nav className=" gap-1  flex sm:flex-row flex-col justify-center sm:w-screen  items-center border-b-2 border-green-300">
                <iframe scrolling='no' frameBorder='0' className='p-0 m-0 border-0' width='300' height='225' src="https://refbanners.com/I?tag=d_4088877m_37433c_&site=4088877&ad=37433" ></iframe>
                <div className='flex flex-col  gap-3 rounded-xl sm:w-11/12 w-screen sm:h-40 h-80 overflow-auto p-2 '>
                    <div className='flex flex-row sm:justify-between justify-around items-center'>
                        <a href={"https://refpa.top/L?tag=d_4088877m_1599c_&site=4088877&ad=1599&r=registration"} target='_blank'>
                            <Image src={"https://1xbet.com/genfiles/cms/pg/70/images/09ef1ad2e0b8613684c2d1cd91f4d3a6.svg"} height={60} width={60} />
                        </a>
                        <Link href={"/about"} className='text-xl font-bold text-green-400 border-3 border-green-400 rounded-xl p-2' >ما هذا ؟ </Link>
                    </div>
                    {Data.map((e, index) => {
                        return (
                            <a href={"https://refpa.top/L?tag=d_4088877m_1599c_&site=4088877&ad=1599&r=registration"} target='_blank'>
                                <div className="flex sm:flex-row flex-col flex-wrap justify-between p-1 items-center gap-2 border-b-1 border-green-400">
                                    <div className='flex flex-row gap-2 justify-start items-center flex-1 '>
                                        <img
                                            className=" h-6"
                                            src={`https://1xbet.com/sfiles/logo_teams/${e.O1IMG}`}
                                            alt={"hi" + index}
                                        />
                                        <p className="text-xl text-left font-extrabold text-wrap">{e.O1E}-{e.E[0].C}x</p>
                                    </div>
                                    <span className='text-xl font-extrabold '>vs-{e.E[1].C}x(تعادل)</span>

                                    <div className='flex flex-row gap-2 justify-end items-center flex-1'>
                                        <p className="text-xl text-right font-extrabold text-wrap">{e.E[2].C}x-{e.O2E}</p>
                                        <img
                                            className="h-6"
                                            src={`https://1xbet.com/sfiles/logo_teams/${e.O2IMG}`}
                                            alt={"match.teamB.name" + index}
                                        />
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>


                <iframe scrolling='no' frameBorder='0' className='p-0 m-0 border-0' width='300' height='200' src="https://refbanners.com/I?tag=d_4088877m_54181c_&site=4088877&ad=54181" ></iframe>
            </nav>


            <Suspense fallback={<Loading />}>
                <TodayList />
            </Suspense>
        </div>

    );
}


