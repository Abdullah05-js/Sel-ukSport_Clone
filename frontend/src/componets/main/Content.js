import React, { Suspense } from 'react';
import MachesList from './MachesList';
import Video from './Video';
import { redirect } from 'next/navigation';
import axios from 'axios';
import tiktok from "@/Photos/tiktok.png"
import Xicon from "@/Photos/xicon.png"
import Image from 'next/image';
import Link from 'next/link';
import { Spinner } from '@heroui/spinner';
export default async function Content({ param }) {
    //await new Promise((resolve) => setTimeout(resolve, 15000))
    const Filtredindex = typeof Number(param) !== "number" ? redirect("/") : param > 0 ? param : 1;

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/ActiveStreams/public`);
    const Data = response.data.list

    const index = Filtredindex <= Data.length ? Filtredindex : 1;


    return (
        <div className="flex sm:flex-row flex-col-reverse items-center gap-1 p-2 w-full sm:h-screen">

            <aside className="flex flex-col justify-center items-cetner  gap-1 sm:w-[380px] w-full">
                <div>
                <iframe scrolling='no' frameBorder='0' className='p-1 rounded-lg m-0' width={300} height={250} src="https://refbanners.com/I?tag=d_4088877m_4595c_&site=4088877&ad=4595" ></iframe>
                </div>
                <MachesList Data={Data} />
            </aside>


            <section className="flex flex-col justify-center items-center gap-6 flex-1 h-full">

                <Suspense fallback={<Spinner size='md' color='success' />}>
                    <Video link={param === undefined ? Data[0].url : Data[index - 1].url} />
                </Suspense>

                <div className="font-extrabold flex flex-row gap-4 justify-center items-center w-full">
                    <a target='_blank' href={"https://www.tiktok.com/@thodex.live"} className='font-bold text-xl'>
                        <Image  className='bg-white rounded-lg border-green-300 border-2 w-16' src={tiktok} />
                    </a>
                    <span className="font-bold text-xl">
                        {`${param === undefined ? Data[0].teamA : Data[index - 1].teamA}`} <br className='sm:hidden block' />VS <br  className='sm:hidden block' />{`${param === undefined ? Data[0].teamA : Data[index - 1]?.teamB}`}
                    </span>
                    <span className="font-bold  text-white text-xl shadow-md bg-red-600 shadow-red-700 animate-pulse rounded-2xl p-3">
                        {Data[index - 1].date}
                    </span>
                    <a target='_blank' href={"https://x.com/Thodex_Live"} className='font-bold text-xl'>
                        <Image  className='rounded-lg border-green-300 border-2 w-16' src={Xicon} />
                    </a>
                </div>
            </section>
        </div>

    );
}


