"use client"

import Video from "@/componets/Video-Player/Custom-Video-Player/Video";




export default function Home() {



    return (
        <div className="flex flex-col items-center justify-center w-full h-screen overflow-y-auto overflow-x-hidden relative">
            <div>
                <Video SRC={"https://trt.daioncdn.net/trt-1/master_480p.m3u8?&sid=76nvawanfgqq&app=ed3904e8-737b-4a5e-856a-1b0d7a0a94e2&ce=2"} />
            </div>
        </div>
    );
}
