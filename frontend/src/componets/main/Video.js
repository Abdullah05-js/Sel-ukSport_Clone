"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import logo from "@/Photos/600x300_THODEXLIVE_ar.gif";
const Video = ({link}) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
       <article className="bg-black border-1 bg-opacity-50  border-green-300 flex justify-center items-center flex-1 w-screen rounded-lg p-2  sm:w-full ">
        {isOpen ? (
            <iframe
                src={link}
                className='sm:h-full h-96 w-full'
                frameBorder="0"
                allowFullScreen
                allow="clipboard-write"
            ></iframe>
        ) : (
            <a onClick={() => setIsOpen((e) => !e)} href='https://www.effectiveratecpm.com/gv7n4nr0?key=08b8b34905cafd15f840d3b7a021f0b5' target='_blank' className="flex flex-col p-2 rounded-xl  justify-center items-center h-96 gap-4">
                <Image src={logo} alt="logo" className='rounded-lg'  />
                <p className="text-red-400 text-3xl font-extrabold bg-white p-2 rounded-xl">Click to start stream</p>
            </a>
        )}
       </article>
    );
}

export default Video;
