import React from 'react';
import Image from 'next/image';
import ad1 from "@/Photos/adPhoto.png"
const TopAds = () => {
    return (
        <footer className='flex z-50 sm:flex-row flex-col justify-center sm:items-center items-start  sm:m-auto flex-wrap p-2 w-screen  '>
            <div className='flex flex-row'>
                <a href="https://refpa.top/L?tag=d_4088877m_1599c_&site=4088877&ad=1599&r=registration">
                    <Image width={600} height={300} className='rounded-xl' src={ad1} alt='THODEX.LİVE ad' />
                </a>
            </div>
        </footer>
    );
}

export default TopAds;
