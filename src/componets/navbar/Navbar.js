import Link from 'next/link';
import React from 'react';
import logo from "@/Photos/APO.png"
import Image from 'next/image';
import GradientText from '../GradientText/GradientText.js';
export function Navbar() {
    return (
        <header className='p-4 flex sm:flex-row flex-col justify-between items-center gap-6   w-full min-h-16  border-b-2 border-green-300' >

            <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>
                <Image src={logo} className='object-cover' alt="kura.com" />
            </div>


            <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>

                <iframe

                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTBnbXpiejZsMTRhd2xnaTUxMTcwcnZ6NzU4bjhzMjVib3E4cWd0dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10hO3rDNqqg2Xe/giphy.gif"
                    height={100}
                    width={500}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>


            </div>

            <div className='flex flex-row gap-2'>
                <Link href="/Games" >
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={true}
                        className="text-xl font-bold p-2  text-center"
                    >
                        Matches List
                    </GradientText>
                </Link>
                <Link href="mailto:akcamaluminyum@gmail.com" >
                    <GradientText
                        colors={["#f8fafc", "#4079ff", "#86efac", "#4079ff", "#5eead4"]}
                        animationSpeed={6}
                        showBorder={true}
                        className="text-xl font-bold p-2  text-center"
                    >
                        Ads & Contact 
                    </GradientText>
                </Link>
            </div>


        </header>
    );
}


