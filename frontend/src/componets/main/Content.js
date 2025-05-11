import React, { Suspense } from 'react';
import MachesList from './MachesList';
import Video from '../Video-Player/Custom-Video-Player/Video';
import { redirect } from 'next/navigation';
import tiktok from "@/Photos/tiktok.png"
import Xicon from "@/Photos/xicon.png"
import Image from 'next/image';
import { Spinner } from '@heroui/spinner';
import Ads from '../Ads/Ads';

export const dynamic = "force-dynamic";

export default async function Content({ param }) {
  
    const Filtredindex = typeof Number(param) !== "number" ? redirect("/") : param > 0 ? param : 1;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/public`);
    const Data = await response.json();
    console.log(Data);
    const index = Filtredindex <= Data.list.length ? Filtredindex : 1;


    return (
        <div className="flex z-50 sm:flex-row flex-col-reverse items-center gap-1 p-2 w-full sm:h-screen">

            <aside className="flex flex-col justify-center items-center gap-1 sm:w-[380px] w-full m-auto">
                <Ads/>
                <MachesList Data={Data.list} />
            </aside>



            <section className="flex flex-col justify-center items-center gap-6 flex-1 h-full">

                <Suspense fallback={<Spinner size='md' color='success' />}>
                    <Video SRC={"http://localhost:5000/hls/stream.m3u8"} />
                </Suspense>

                <div className="font-extrabold flex flex-row gap-4 justify-center items-center w-full">
                    <a target='_blank' href={"https://www.tiktok.com/@thodex.live"} className='font-bold text-xl'>
                        <Image className='bg-white rounded-lg border-green-300 border-2 w-16' alt='1xbet' src={tiktok} />
                    </a>
                    <span className="font-bold text-xl">
                        {`${param === undefined ? Data.list[0].teamA : Data.list[index - 1].teamA}`} <br className='sm:hidden block' />VS <br className='sm:hidden block' />{`${param === undefined ? Data.list[0].teamA : Data.list[index - 1]?.teamB}`}
                    </span>
                    <span className="font-bold  text-white text-xl shadow-md bg-red-600 shadow-red-700 animate-pulse rounded-2xl p-3">
                        {Data.list[index - 1].date}
                    </span>
                    <a target='_blank' href={"https://x.com/Thodex_Live"} className='font-bold text-xl'>
                        <Image className='rounded-lg border-green-300 border-2 w-16' alt='1xbet' src={Xicon} />
                    </a>
                </div>
            </section>
        </div>

    );
}


