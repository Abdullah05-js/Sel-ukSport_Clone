"use client"
import React from 'react';
import football from "@/componets/main/football.svg"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Button = ({link,team1,team2,date,index}) => {
  const router = useRouter();
  const handleClick = ( ) => {
    router.push(`/${index+1}`)
  }

    return (
      <button onClick={handleClick} className='border-b-2 border-green-300 text-center flex flex-col justify-center items-center gap-2'>
        <p className='font-extrabold flex flex-row gap-4 pb-3 justify-between items-center'><Image src={football} alt="Football Icon" width={24} height={24} /> <span>{team1} <br className='sm:block none' /> VS <br className='sm:block none' /> {team2}</span> <span>{date}</span></p>
      </button>
    );
}

export default Button;
