import React, { Suspense } from 'react';
import { Navbar } from '@/componets/navbar/Navbar';
import Loading from '@/app/loading';
import { TodayList } from '@/componets/MatchesPage/TodayList';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {

    const response = await fetch("https://1xbet.com/LineFeed/GetTopGamesStatZip?lng=ar&country=190&fcountry=190&gr=70&limit=10")
    const data = await response.json();

    return (
        <div className="h-screen w-screen overflow-x-hidden flex flex-col justify-start items-center gap-2">

            <div className="flex sm:flex-row flex-col justify-between items-center w-screen p-2">
                <Navbar />
            </div>

            <nav className=" gap-1  flex sm:flex-row flex-col justify-center sm:w-screen  items-center border-b-2 border-green-300">
                <iframe src="https://giphy.com/embed/DqILdGsqAUkms" width="300" height="200" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-wars-gif-DqILdGsqAUkms"></a></p>

                <div className='flex flex-col  gap-3 rounded-xl sm:w-11/12 w-screen h-40 overflow-auto p-2 '>
                    <div className='flex flex-row sm:justify-between justify-around items-center'>
                        <Image src={"https://1xbet.com/genfiles/cms/pg/70/images/09ef1ad2e0b8613684c2d1cd91f4d3a6.svg"} height={60} width={60} />
                        <Link href={"/about"}  className='text-xl font-bold text-green-400 border-3 border-green-400 rounded-xl p-2' >ما هذا ؟ </Link>
                    </div>
                    {data.Value.map((e,index) => {
                        return (
                            <Link href={"/"}>
                                <div className="flex sm:flex-row flex-col flex-wrap justify-between p-1 items-center gap-2 border-b-1 border-green-400">
                                    <div className='flex flex-row gap-2 justify-start items-center flex-1 '>
                                        <img
                                            className=" h-6"
                                            src={`https://1xbet.com/sfiles/logo_teams/${e.O1IMG}`}
                                            alt={"hi"+index}
                                        />
                                        <p className="text-xl text-left font-extrabold text-wrap">{e.O1E}-{e.E[0].C}x</p>
                                    </div>
                                    <span className='text-xl font-extrabold '>vs-{e.E[1].C}x(تعادل)</span>

                                    <div className='flex flex-row gap-2 justify-end items-center flex-1'>
                                        <p className="text-xl text-right font-extrabold text-wrap">{e.E[2].C}x-{e.O2E}</p>
                                        <img
                                            className="h-6"
                                            src={`https://1xbet.com/sfiles/logo_teams/${e.O2IMG}`}
                                            alt={"match.teamB.name"+index}
                                        />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>


                <iframe src="https://giphy.com/embed/DqILdGsqAUkms" width="300" height="200" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-wars-gif-DqILdGsqAUkms"></a></p>

            </nav>


            <Suspense fallback={<Loading />}>
                <TodayList />
            </Suspense>
        </div>

    );
}


