import React from 'react';
import logo from "@/Photos/APO.png"
import Image from 'next/image';
import ButtonLinks from './ButtonLinks';
import Link from 'next/link';
export async function Navbar() {

    return (
        <header className='p-4 flex sm:flex-row flex-col justify-between items-center gap-6   w-full min-h-16  border-b-2 border-green-300' >

            <Link href={"/matches"} className='flex sm:flex-row flex-col justify-center items-center gap-6'>
                <Image src={logo} className='object-cover rounded-lg' alt="thodex.live" />
            </Link>


            <iframe scrolling='no' frameBorder='0' className='border-0 p-0 m-0' width='560' height='120' src="https://refbanners.com/I?tag=d_4088877m_37443c_&site=4088877&ad=37443" ></iframe>            
                    
            <ButtonLinks />

        </header>
    );
}


