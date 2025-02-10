"use client"
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import logo from "@/Photos/APO_Big.png";
import { useRouter } from 'next/navigation';
const Video = ({link}) => {
    const [isOpen, setIsOpen] = useState(false);
    const router =useRouter()

    // useEffect(() => {
    //     document.addEventListener("keydown", function (event) {
    //         if (
    //           event.key === "F12" ||
    //           (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) ||
    //           (event.ctrlKey && event.key === "U")
    //         ) {
    //           event.preventDefault();
    //         }
    //       })

    //       document.addEventListener("contextmenu", function (event) {
    //         event.preventDefault();
    //       });
          
          
              
    // setInterval(() => {
    //     (function () {
    //       if (window.console && (console.profile || console.clear)) {
    //         console.profile();
    //         console.clear();
            
    //       }
    //       try {
    //         debugger;
    //       } catch (e) {
    //       window.location.href = "https://google.com";
    //       }
    //     })();
    //   }, 100);

    // },[])

    return (
       <article className="bg-black border-1 border-green-300 flex justify-center items-center flex-1 w-screen rounded-lg p-2  sm:w-full ">
        {isOpen ? (
            <iframe
                src={link}
                className='sm:h-full h-96 w-full'
                frameBorder="0"
                allowFullScreen
                allow="clipboard-write"
            ></iframe>
        ) : (
            <div onClick={() => setIsOpen(true)} className="flex flex-col justify-center items-center h-96 gap-4">
                <Image src={logo} alt="logo" className='rounded-lg'  />
                <p className="text-red-400 text-3xl font-bold">انقر على الشعار لبدء المشاهدة</p>
            </div>
        )}
       </article>
    );
}

export default Video;
