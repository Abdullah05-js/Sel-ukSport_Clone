import React from 'react';
import Image from 'next/image';
import logo from "@/Photos/APO.png"
const Loading = () => {
    return (
        <Image className='flex flex-col justify-center items-center w-full h-full object-cover' src={logo} alt='Loading'>
            
        </Image>
    );
}

export default Loading;
