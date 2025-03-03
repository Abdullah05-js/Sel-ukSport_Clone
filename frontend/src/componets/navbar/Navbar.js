import React from 'react';
import logo from "@/Photos/APO.png"
import Image from 'next/image';
import ButtonLinks from './ButtonLinks';
import Link from 'next/link';
import Ads from '../Ads/Ads2';

export async function Navbar() {

    return (
        <header className='flex z-50 sm:flex-row flex-col justify-between items-center overflow-hidden w-full sm:min-h-52 min-h-40 p-2 border-b-2 border-green-300' >

            <Link href={"/matches"} className='flex sm:flex-row flex-col justify-center items-center gap-6'>
                <Image src={logo} className='object-cover rounded-lg' alt="thodex.live" />
            </Link>
            <div className='sm:block hidden'>
                <Ads />
            </div>

            <ButtonLinks />

        </header>
    );
}


