"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import logo from "@/Photos/APO_Big.png";
const Video = ({link}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
       <article className="bg-black border-1 border-green-300 flex justify-center items-center flex-1 w-screen rounded-lg p-2  sm:w-full">
        {isOpen ? (
            <iframe
                src={link}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        ) : (
            <div onClick={() => setIsOpen(true)} className="flex flex-col justify-center items-center h-96">
                <p className="text-red-400 text-2xl font-bold">Put Your Ad Here</p>
                <Image src={logo} alt="logo" className='rounded-lg'  />
                <p className="text-red-400 text-xl font-bold">Click on the Logo to start watching</p>
            </div>
        )}
       </article>
    );
}

export default Video;
