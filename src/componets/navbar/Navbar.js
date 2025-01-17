import Link from 'next/link';
import React from 'react';
import logo from "@/Photos/APO.png"
import Image from 'next/image';
export function Navbar (){
    return (
        <header className='p-4 flex sm:flex-row flex-col justify-between items-center gap-6   w-full min-h-16  border-b-2 border-green-300' >
            
        <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>
        <Image src={logo} className='object-cover' alt="kura.com" />
        </div>

        <div>
            <Link href="g" className='text-green-300 animate-pulse text-xl font-bold'>Ads & Contact & شراء وكيل</Link>
        </div>
        
        
        </header>
    );
}


