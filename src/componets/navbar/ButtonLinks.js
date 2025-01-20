"use client"
import Link from 'next/link';
import React from 'react';
import GradientText from '../GradientText/GradientText.js';
import { usePathname } from 'next/navigation.js';
function ButtonLinks() {
    const PathName = usePathname();
    return (
        <div className='flex flex-row gap-2'>
            <Link href={`${PathName === "/matches" ? "/Watch/1" : "/matches"}`} >
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="text-xl font-bold p-2  text-center"
                >
                    {PathName === "/matches" ? "Live" : "Matches List"}
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
    );
}


export default ButtonLinks;