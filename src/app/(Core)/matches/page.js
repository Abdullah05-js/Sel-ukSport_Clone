import React, { Suspense } from 'react';
import { Navbar } from '@/componets/navbar/Navbar';
import Loading from '@/app/loading';
import { TodayList } from '@/componets/MatchesPage/TodayList';
export default async function Page() {
    
    return (
        <div className="h-screen w-screen overflow-x-hidden flex flex-col justify-start items-center gap-2">




            <div className=" gap-2 flex sm:flex-row flex-col justify-center items-center p-2">
                <Navbar />
            </div>


            <nav className=" gap-1  flex sm:flex-row flex-col justify-center items-center">
                {[...Array(3)].map((_, index) => (
                    <iframe
                        key={index}
                        src="https://giphy.com/embed/DqILdGsqAUkms"
                        width="300"
                        height="100"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                ))}
            </nav>


            <Suspense fallback={<Loading />}>
                <TodayList />
            </Suspense>
        </div>

    );
}


